import { NextResponse } from 'next/server';
import { profile } from '@/lib/data';

/**
 * Contact form endpoint — real email delivery via Resend.
 *
 * Security:
 * - API key read only from a server-only env var (never sent to the client).
 * - Server-side validation + length limits on every field.
 * - Honeypot field to absorb basic bots.
 * - Lightweight in-memory per-IP rate limiting (see note below).
 *
 * Behaviour:
 * - Returns success ONLY when Resend confirms it accepted the email.
 * - If Resend is not configured, returns 503 (the form shows an error) — it
 *   never shows a fake "sent" message.
 */

export const runtime = 'nodejs';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 };

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown; // honeypot — real users never fill this
}

function sanitize(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ----------------------------- rate limiting ----------------------------- */
// In-memory sliding window. Note: serverless instances don't share memory, so
// this is best-effort per warm instance. For strict limits across all instances
// use a shared store (e.g. Upstash Redis / Vercel KV).
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup to bound memory.
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages sent recently. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: pretend nothing is wrong, but do not send.
  if (sanitize(body.company, 100)) {
    return NextResponse.json({ message: 'Your message has been sent successfully. I\'ll get back to you soon.' });
  }

  const name = sanitize(body.name, LIMITS.name);
  const email = sanitize(body.email, LIMITS.email);
  const subject = sanitize(body.subject, LIMITS.subject);
  const message = sanitize(body.message, LIMITS.message);

  if (name.length < 2 || !emailRegex.test(email) || subject.length < 2 || message.length < 10) {
    return NextResponse.json(
      { error: 'Please complete all fields with a valid name, email, subject and message.' },
      { status: 422 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || process.env.CONTACT_TO_EMAIL || profile.email || '';
  // Resend lets you send from onboarding@resend.dev with no domain verification
  // (delivered to your own Resend account email). Override with a verified domain
  // sender for production via CONTACT_FROM_EMAIL.
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  // Not configured → honest error, never a fake success.
  if (!resendKey || !toEmail) {
    console.warn('[contact] Email not configured (missing RESEND_API_KEY or CONTACT_EMAIL).');
    return NextResponse.json(
      { error: 'The contact form is not configured yet. Please reach out via email or LinkedIn for now.' },
      { status: 503 }
    );
  }

  const text = `New portfolio contact message\n\nName:    ${name}\nEmail:   ${email}\nSubject: ${subject}\n\n${message}\n`;
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0f1b2d;line-height:1.6">
      <h2 style="margin:0 0 12px;color:#0e7490">New portfolio contact message</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:2px 12px 2px 0;color:#51607a"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#51607a"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#51607a"><strong>Subject</strong></td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <p style="white-space:pre-wrap;margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0">${escapeHtml(message)}</p>
    </div>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio] ${subject} — from ${name}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Resend delivery failed:', res.status, detail);
      return NextResponse.json(
        { error: 'Message could not be delivered right now. Please email me directly.' },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error('Contact delivery error:', err);
    return NextResponse.json(
      { error: 'Message could not be delivered right now. Please email me directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Your message has been sent successfully. I'll get back to you soon.",
  });
}
