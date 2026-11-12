import { GraduationCap, BookOpen } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { experiences, education } from '@/lib/data';
import { cn } from '@/lib/utils';

export function ExperienceEducation() {
  return (
    <Section id="experience" divider>
      <SectionHeading
        eyebrow="Experience & Education"
        title="Background & Foundation"
        description="A professional path from software development into a dedicated cybersecurity role, grounded in a computer science education."
      />

      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-[var(--border)] pl-8 sm:pl-10">
          {/* Experience roles */}
          {experiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.role} delayIndex={i} className="relative mb-12 last:mb-0">
                <TimelineNode>
                  <Icon className="h-4 w-4 text-accent-cyan" />
                </TimelineNode>
                <div className="panel rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    {item.current && (
                      <span className="inline-flex items-center rounded-full bg-accent-cyan/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-cyan ring-1 ring-accent-cyan/25">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                    {item.company} · {item.companyLocation}
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent-cyan">{item.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.summary}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px] text-[var(--text)]">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}

          {/* Education */}
          <Reveal as="li" delayIndex={experiences.length} className="relative">
            <TimelineNode>
              <GraduationCap className="h-4 w-4 text-accent-cyan" />
            </TimelineNode>
            <div className="panel rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="mt-0.5 text-sm text-[var(--text-muted)]">{education.institution}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-accent-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-accent-cyan ring-1 ring-accent-cyan/25">
                  {education.status}
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]">
                  {education.expectedGraduation}
                </span>
              </div>
              <h4 className="mb-3 mt-5 flex items-center gap-2 eyebrow">
                <BookOpen className="h-3.5 w-3.5" /> Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text)]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </ol>
      </div>
    </Section>
  );
}

function TimelineNode({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'absolute -left-[41px] top-5 flex h-7 w-7 items-center justify-center rounded-full border border-accent-cyan/30 bg-[var(--surface-solid)] sm:-left-[49px]'
      )}
    >
      {children}
    </span>
  );
}
