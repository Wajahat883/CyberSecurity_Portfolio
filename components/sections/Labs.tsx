'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, Server, Target, Terminal } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { labs, labCategories, type Lab, type LabCategory } from '@/lib/data';
import { cn } from '@/lib/utils';

const dot: Record<LabCategory, string> = {
  'Offensive Security': 'bg-rose-400',
  'Defensive Security': 'bg-accent-cyan',
  'Purple Team': 'bg-violet-400',
};

const slug: Record<LabCategory, string> = {
  'Offensive Security': 'offensive',
  'Defensive Security': 'defensive',
  'Purple Team': 'purple',
};

export function Labs() {
  const [active, setActive] = useState<(typeof labCategories)[number]>('All');
  const filtered = active === 'All' ? labs : labs.filter((l) => l.category === active);
  const completed = filtered.filter((l) => l.status === 'Completed');
  const inProgress = filtered.filter((l) => l.status === 'In Progress');

  return (
    <Section id="labs" divider>
      <SectionHeading
        eyebrow="Hands-on Labs"
        title="Security Operations & Testing"
        description="Hands-on offensive, defensive and purple-team work in authorized lab environments. Completed exercises are shown separately from work in progress."
      />

      {/* Category filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {labCategories.map((cat) => {
          const count = cat === 'All' ? labs.length : labs.filter((l) => l.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                active === cat
                  ? 'border-accent-cyan/60 bg-accent-cyan/10 text-accent-cyan'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]'
              )}
            >
              {cat}
              <span className="rounded-full bg-[var(--surface-raised)] px-1.5 text-[11px] font-semibold">{count}</span>
            </button>
          );
        })}
      </div>

      {completed.length > 0 && (
        <LabGroup label="Completed" count={completed.length} labs={completed} />
      )}
      {inProgress.length > 0 && (
        <LabGroup label="In Progress" count={inProgress.length} labs={inProgress} className="mt-12" />
      )}
    </Section>
  );
}

function LabGroup({
  label,
  count,
  labs: items,
  className,
}: {
  label: string;
  count: number;
  labs: Lab[];
  className?: string;
}) {
  const done = label === 'Completed';
  return (
    <div className={className}>
      <div className="mb-5 flex items-center gap-3">
        <span className={cn('inline-flex items-center gap-1.5 text-sm font-semibold', done ? 'text-emerald-300' : 'text-[var(--text-muted)]')}>
          {done ? <CheckCircle2 className="h-4 w-4" /> : <Loader2 className="h-4 w-4 animate-spin [animation-duration:3s]" />}
          {label}
        </span>
        <span className="text-xs text-[var(--text-muted)]">({count})</span>
        <span className="section-divider flex-1" />
      </div>
      <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((lab) => (
            <LabCard key={lab.title} lab={lab} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function LabCard({ lab }: { lab: Lab }) {
  const done = lab.status === 'Completed';
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group panel card-hover flex flex-col overflow-hidden rounded-xl"
    >
      {/* Terminal-style header */}
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
        <span className={cn('h-2 w-2 rounded-full', dot[lab.category])} />
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
          <Terminal className="h-3 w-3" /> ~/labs/{slug[lab.category]}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] text-[var(--text-muted)]">
          <Server className="h-3 w-3" /> {lab.platform}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[15px] font-semibold leading-snug">{lab.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{lab.objective}</p>

        <div className="mt-3">
          <p className="mb-1.5 eyebrow !text-[0.6rem]">Key Outcomes</p>
          <ul className="space-y-1">
            {lab.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-[13px] text-[var(--text)]">
                <Target className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-cyan" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
          {lab.tools.map((t) => (
            <span key={t} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
