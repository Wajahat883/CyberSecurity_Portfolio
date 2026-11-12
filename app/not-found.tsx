import Link from 'next/link';
import type { Metadata } from 'next';
import { Home, ShieldAlert } from 'lucide-react';
import { GridBackground } from '@/components/ui/GridBackground';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <GridBackground />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-cyan/30 bg-accent-cyan/10">
          <ShieldAlert className="h-8 w-8 text-accent-cyan" />
        </span>
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-cyan">Error 404</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gradient">Access path not found</span>
        </h1>
        <p className="mt-4 max-w-md text-[var(--text-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get
          you back to safe ground.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-5 py-3 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.03]"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </main>
    </>
  );
}
