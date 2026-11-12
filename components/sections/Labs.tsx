import { CheckCircle2, BookOpen } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { labGroups, type LabGroup } from '@/lib/data';
import { cn } from '@/lib/utils';

const accentRing: Record<LabGroup['accent'], string> = {
  red: 'border-rose-400/30 bg-rose-400/10 text-rose-300',
  cyan: 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan',
  purple: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
};

export function Labs() {
  return (
    <Section id="labs">
      <SectionHeading
        eyebrow="Hands-on Labs"
        title="Practical Training & Exercises"
        description="Hands-on work in authorized lab environments, grouped by domain. Completed exercises are distinguished from topics I'm currently studying."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {labGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.category} delayIndex={i} as="article">
              <div className="glass card-hover flex h-full flex-col rounded-xl p-6">
                <div className="mb-4 flex items-start gap-3">
                  <span
                    className={cn(
                      'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border',
                      accentRing[group.accent]
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug">{group.category}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-[var(--text-muted)]">
                      {group.blurb}
                    </p>
                  </div>
                </div>

                <ul className="mt-1 space-y-2.5">
                  {group.labs.map((lab) => {
                    const done = lab.status === 'Completed';
                    return (
                      <li key={lab.title} className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-sm text-[var(--text)]">
                          {done ? (
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                          ) : (
                            <BookOpen className="h-4 w-4 flex-shrink-0 text-[var(--text-muted)]" />
                          )}
                          {lab.title}
                        </span>
                        <span
                          className={cn(
                            'flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                            done
                              ? 'bg-emerald-400/10 text-emerald-300'
                              : 'bg-slate-400/10 text-slate-300'
                          )}
                        >
                          {lab.status}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
