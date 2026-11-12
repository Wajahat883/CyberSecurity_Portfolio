'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, Sun, Moon } from 'lucide-react';
import { navLinks, profile } from '@/lib/data';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useScrollSpy } from '@/components/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const sectionIds = useMemo(() => navLinks.map((l) => l.href.replace('#', '')), []);
  const spyId = useScrollSpy(sectionIds, 80);
  // Prefer an optimistic click target briefly, then defer to the scroll-spy.
  const activeId = clickedId ?? spyId;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Clear the optimistic click lock once the spy catches up to it.
  useEffect(() => {
    if (clickedId && spyId === clickedId) setClickedId(null);
  }, [spyId, clickedId]);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setClickedId(href.replace('#', ''));
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10">
            <Shield className="h-4 w-4 text-accent-cyan" />
          </span>
          <span className="hidden sm:inline">
            <span className="text-gradient">Wajahat</span>
            <span className="text-[var(--text-muted)]">.sec</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-accent-cyan' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md bg-accent-cyan/10 ring-1 ring-accent-cyan/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
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
            onClick={() => handleNavClick('#contact')}
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
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/30'
                        : 'text-[var(--text-muted)] hover:bg-accent-cyan/5 hover:text-[var(--text)]'
                    )}
                  >
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full transition-colors',
                        isActive ? 'bg-accent-cyan' : 'bg-[var(--border-strong)]'
                      )}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
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
