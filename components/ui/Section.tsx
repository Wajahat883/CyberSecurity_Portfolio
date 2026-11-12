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
      className={cn('mb-14 max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}
    >
      <p
        className={cn(
          'mb-4 flex items-center gap-3 eyebrow',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="h-px w-8 bg-accent-cyan/50" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      )}
    </Reveal>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Draw a hairline divider at the top for a consistent section transition. */
  divider?: boolean;
}

export function Section({ id, children, className, divider = false }: SectionProps) {
  return (
    <section id={id} className={cn('relative scroll-mt-20 py-24 sm:py-32', className)}>
      {divider && (
        <div className="container-page">
          <div className="section-divider mb-20" />
        </div>
      )}
      <div className="container-page">{children}</div>
    </section>
  );
}
