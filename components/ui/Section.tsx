import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn('mb-12 max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}
    >
      <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
        <span className="h-px w-6 bg-accent-cyan/60" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
      )}
    </Reveal>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-20 sm:py-28', className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
