import { Shield, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile, navLinks } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)]/50">
      <div className="container-page py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10">
                <Shield className="h-4 w-4 text-accent-cyan" />
              </span>
              <span>
                <span className="text-gradient">{profile.name}</span>
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              Aspiring cybersecurity professional focused on Blue Team operations, threat hunting, and
              web application security.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            © {year} {profile.name}. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-accent-cyan"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
