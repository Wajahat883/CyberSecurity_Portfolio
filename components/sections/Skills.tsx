import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { skillCategories, type SkillLevel } from '@/lib/data';
import { cn } from '@/lib/utils';

const levelStyles: Record<SkillLevel, string> = {
  Foundational: 'border-slate-400/30 text-slate-300/90',
  Practicing: 'border-accent-blue/40 text-accent-sky',
  Comfortable: 'border-accent-cyan/50 text-accent-cyan',
};

const levelDots: Record<SkillLevel, number> = {
  Foundational: 1,
  Practicing: 2,
  Comfortable: 3,
};

export function Skills() {
  return (
    <Section id="skills" className="bg-[var(--bg-soft)]/40">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Offensive, Defensive & Purple Team"
        description="Skills grouped across the offensive and defensive domains that meet in Purple Teaming. Levels are shown honestly — this reflects active, hands-on learning, not claimed mastery."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delayIndex={i} as="article">
              <div className="glass card-hover h-full rounded-xl p-6">
                <div className="mb-4 flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10">
                    <Icon className="h-5 w-5 text-accent-cyan" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-[var(--text-muted)]">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-md border bg-[var(--surface)] px-2.5 py-1 text-xs font-medium',
                        levelStyles[skill.level]
                      )}
                      title={`${skill.name} — ${skill.level}`}
                    >
                      {skill.name}
                      <span className="flex gap-0.5" aria-hidden>
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className={cn(
                              'h-1 w-1 rounded-full',
                              d < levelDots[skill.level] ? 'bg-current' : 'bg-current/25'
                            )}
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
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Foundational
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-sky" /> Practicing
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" /> Comfortable
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
