'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, Server, ExternalLink, Target } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { labs, labCategories, type Lab, type LabCategory } from '@/lib/data';
import { cn } from '@/lib/utils';

const categoryCover: Record<LabCategory, string> = {
  'Offensive Security': 'from-rose-500/25 via-base-700/50 to-rose-500/5',
  'Defensive Security': 'from-accent-cyan/25 via-base-700/50 to-accent-cyan/5',
  'Purple Team': 'from-violet-500/25 via-base-700/50 to-violet-500/5',
};

const categoryText: Record<LabCategory, string> = {
  'Offensive Security': 'text-rose-300',
  'Defensive Security': 'text-accent-cyan',
  'Purple Team': 'text-violet-300',
};

export function Labs() {
  const [active, setActive] = useState<(typeof labCategories)[number]>('All');

  const filtered = active === 'All' ? labs : labs.filter((l) => l.category === active);

  return (
    <Section id="labs">
      <SectionHeading
        eyebrow="Hands-on Labs"
        title="Practical Training & Investigations"
        description="Hands-on offensive, defensive and purple-team work in authorized lab environments. Completed exercises are distinguished from topics currently in progress."
      />

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {labCategories.map((cat) => {
          const count = cat === 'All' ? labs.length : labs.filter((l) => l.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                active === cat
                  ? 'border-accent-cyan bg-accent-cyan/15 text-accent-cyan'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:border-accent-cyan/40 hover:text-[var(--text)]'
              )}
              aria-pressed={active === cat}
            >
              {cat}
              <span className="rounded-full bg-[var(--surface)] px-1.5 text-[11px] font-semibold">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((lab) => (
            <LabCard key={lab.title} lab={lab} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function LabCard({ lab }: { lab: Lab }) {
  const Icon = lab.icon;
  const done = lab.status === 'Completed';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="group glass card-hover flex flex-col overflow-hidden rounded-xl"
    >
      {/* Cover strip */}
      <div className="relative h-24 overflow-hidden border-b border-[var(--border)]">
        {lab.image ? (
          <Image
            src={lab.image}
            alt={`${lab.title} preview`}
            fill
            sizes="(max-width: 1024px) 50vw, 360px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={cn(
              'flex h-full items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105',
              categoryCover[lab.category]
            )}
          >
            <div
              className="absolute inset-0 bg-grid-cyber [background-size:24px_24px] opacity-40"
              aria-hidden
            />
            <Icon className={cn('relative h-7 w-7', categoryText[lab.category])} />
          </div>
        )}

        <span
          className={cn(
            'absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 backdrop-blur-sm',
            done
              ? 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30'
              : 'bg-slate-400/15 text-slate-300 ring-slate-400/30'
          )}
        >
          {done ? <CheckCircle2 className="h-3 w-3" /> : <Loader2 className="h-3 w-3 animate-spin [animation-duration:3s]" />}
          {lab.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-center gap-2">
          <span className={cn('font-mono text-[10px] font-semibold uppercase tracking-[0.12em]', categoryText[lab.category])}>
            {lab.category}
          </span>
          <span className="text-[var(--text-muted)]">·</span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--text-muted)]">
            <Server className="h-3 w-3" /> {lab.platform}
          </span>
        </div>

        <h3 className="text-base font-semibold leading-snug">{lab.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{lab.objective}</p>

        <div className="mt-3">
          <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
            Key Outcomes
          </p>
          <ul className="space-y-1">
            {lab.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm text-[var(--text)]">
                <Target className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-cyan" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5">
            {lab.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
              >
                {tool}
              </span>
            ))}
          </div>

          {lab.detailsUrl && (
            <a
              href={lab.detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:underline"
            >
              View Details <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
