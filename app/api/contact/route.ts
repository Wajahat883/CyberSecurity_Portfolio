import { NextResponse } from 'next/server';

/**
 * Contact form endpoint.
 *
 * Works out of the box with NO configuration: it validates input server-side
 * and acknowledges the submission. To actually deliver email, set the Resend
 * variables in `.env.local` (see `.env.example`) and the route sends via Resend.
 *
 * No API keys are ever exposed to the client — they are read from server-only
 * environment variables here.
 */

export const runtime = 'nodejs';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  // Honeypot — real users never fill this.
  company?: unknown;
}

function sanitize(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: silently accept to avoid tipping off bots, but do nothing.
  if (sanitize(body.company, 100)) {
    return NextResponse.json({ message: 'Thank you — your message has been received.' });
  }

  const name = sanitize(body.name, 100);
  const email = sanitize(body.email, 200);
  const message = sanitize(body.message, 5000);

  if (name.length < 2 || !emailRegex.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: 'Please provide a valid name, email, and message.' },
      { status: 422 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  // If Resend is configured, deliver the message. Otherwise, log and acknowledge.
  if (resendKey && toEmail && fromEmail) {
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
          subject: `Portfolio contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => '');
        console.error('Resend delivery failed:', res.status, detail);
        return NextResponse.json(
          { error: 'Message could not be delivered right now. Please email directly.' },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error('Contact delivery error:', err);
      return NextResponse.json(
        { error: 'Message could not be delivered right now. Please email directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: 'Thank you — your message has been sent.' });
  }

  // No provider configured — safe default for local/demo use.
  console.info('[contact] New submission (email delivery not configured):', {
    name,
    email,
    messagePreview: message.slice(0, 80),
  });

  return NextResponse.json({
    message: 'Thank you — your message has been received.',
  });
}
