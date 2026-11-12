import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { skillCategories, type SkillLevel } from '@/lib/data';
import { cn } from '@/lib/utils';

const levelDots: Record<SkillLevel, number> = {
  Foundational: 1,
  Practicing: 2,
  Comfortable: 3,
};

// Each domain gets ONE consistent accent. Chips are tinted by domain (not by
// level), so all four cards share the same treatment; the per-skill level is
// shown honestly by the filled-dot meter instead.
const catAccent: Record<string, { badge: string; icon: string; chip: string }> = {
  'Offensive Security': {
    badge: 'border-rose-400/25 bg-rose-400/10',
    icon: 'text-rose-300',
    chip: 'border-rose-400/25 text-rose-200',
  },
  'Defensive Security': {
    badge: 'border-accent-cyan/25 bg-accent-cyan/10',
    icon: 'text-accent-cyan',
    chip: 'border-accent-cyan/30 text-accent-cyan',
  },
  'Purple Team Operations': {
    badge: 'border-violet-400/25 bg-violet-400/10',
    icon: 'text-violet-300',
    chip: 'border-violet-400/30 text-violet-200',
  },
  'Networking & Systems': {
    badge: 'border-accent-blue/25 bg-accent-blue/10',
    icon: 'text-accent-sky',
    chip: 'border-accent-blue/30 text-accent-sky',
  },
};

const fallbackAccent = {
  badge: 'border-accent-cyan/25 bg-accent-cyan/10',
  icon: 'text-accent-cyan',
  chip: 'border-accent-cyan/30 text-accent-cyan',
};

export function Skills() {
  return (
    <Section id="skills" divider className="bg-[var(--bg-soft)]/40">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Offensive, Defensive & Purple Team"
        description="Skills grouped across the offensive and defensive domains that meet in Purple Teaming. Levels are shown honestly — this reflects active, hands-on learning, not claimed mastery."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          const accent = catAccent[category.title] ?? fallbackAccent;
          return (
            <Reveal key={category.title} delayIndex={i} as="article">
              <div className="panel card-hover flex h-full flex-col rounded-2xl p-6">
                <div className="mb-5 flex items-start gap-3">
                  <span className={cn('flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border', accent.badge)}>
                    <Icon className={cn('h-5 w-5', accent.icon)} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{category.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-1 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-md border bg-[var(--surface)] px-2.5 py-1 text-xs font-medium',
                        accent.chip
                      )}
                      title={`${skill.name} — ${skill.level}`}
                    >
                      {skill.name}
                      <span className="flex gap-0.5" aria-hidden>
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className={cn('h-1 w-1 rounded-full', d < levelDots[skill.level] ? 'bg-current' : 'bg-current/25')}
                          />
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-mono text-xs text-[var(--text-muted)]">
          <span className="text-[var(--text-muted)]/70">Proficiency</span>
          {([['Foundational', 1], ['Practicing', 2], ['Comfortable', 3]] as const).map(([label, n]) => (
            <span key={label} className="flex items-center gap-1.5">
              <span className="flex gap-0.5 text-accent-cyan">
                {[0, 1, 2].map((d) => (
                  <span key={d} className={cn('h-1 w-1 rounded-full', d < n ? 'bg-current' : 'bg-current/25')} />
                ))}
              </span>
              {label}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
