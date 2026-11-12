'use client';

import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverMessage, setServerMessage] = useState('');

  function validate(): boolean {
    const next: FieldErrors = {};
    if (values.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!emailRegex.test(values.email.trim())) next.email = 'Please enter a valid email address.';
    if (values.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setServerMessage(data?.message || 'Thank you — your message has been received.');
      setValues({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setServerMessage(err instanceof Error ? err.message : 'Unexpected error.');
    }
  }

  type ContactItem = {
    icon: typeof Mail;
    label: string;
    value: string;
    href: string | undefined;
  };

  const contactItems: ContactItem[] = [
    // Email shown only when a real professional inbox is configured in lib/data.ts.
    ...(profile.email
      ? [{ icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` }]
      : []),
    { icon: Linkedin, label: 'LinkedIn', value: `in/${profile.linkedinHandle}`, href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: profile.githubHandle, href: profile.github },
    { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="Open to cybersecurity roles, collaboration, and learning opportunities. Send a message or reach out directly."
      />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Contact details */}
        <Reveal className="space-y-4">
          {contactItems.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="glass card-hover flex items-center gap-4 rounded-xl p-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10">
                  <Icon className="h-5 w-5 text-accent-cyan" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                    {label}
                  </p>
                  <p className="truncate text-sm font-medium">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
          <p className="px-1 text-xs leading-relaxed text-[var(--text-muted)]/80">
            The fastest way to reach me is{' '}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              LinkedIn
            </a>
            . A dedicated professional email will be added here soon.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delayIndex={1}>
          <form onSubmit={handleSubmit} noValidate className="glass rounded-xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                error={errors.name}
                value={values.name}
                onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                placeholder="Your name"
                autoComplete="name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                error={errors.email}
                value={values.email}
                onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
                placeholder="How can I help?"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={cn(
                  'w-full resize-y rounded-lg border bg-[var(--surface)] px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-[var(--text-muted)]/60 focus:border-accent-cyan/60',
                  errors.message ? 'border-red-400/60' : 'border-[var(--border)]'
                )}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-cyan px-5 py-3 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>

            <p className="mt-3 text-[11px] leading-relaxed text-[var(--text-muted)]/70">
              Your message is validated and submitted securely. Email delivery is being configured —
              until then, connecting on LinkedIn is the most reliable way to reach me.
            </p>

            {status === 'success' && (
              <p className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" /> {serverMessage}
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                <AlertCircle className="h-4 w-4 flex-shrink-0" /> {serverMessage}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

function Field({ id, label, value, onChange, error, type = 'text', placeholder, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'w-full rounded-lg border bg-[var(--surface)] px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-[var(--text-muted)]/60 focus:border-accent-cyan/60',
          error ? 'border-red-400/60' : 'border-[var(--border)]'
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}
