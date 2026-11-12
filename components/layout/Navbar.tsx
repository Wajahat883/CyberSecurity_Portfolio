'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Shield, Sun, Moon } from 'lucide-react';
import { navLinks, profile } from '@/lib/data';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10">
            <Shield className="h-4 w-4 text-accent-cyan" />
          </span>
          <span className="hidden sm:inline">
            <span className="text-gradient">Wajahat</span>
            <span className="text-[var(--text-muted)]">.sec</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-accent-cyan px-4 py-2 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass border-t border-[var(--border)] md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-[var(--text-muted)] transition-colors hover:bg-accent-cyan/10 hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={profile.resumePath}
                className="block rounded-lg bg-accent-cyan px-3 py-3 text-center text-base font-semibold text-base-900"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
