import { GraduationCap, BookOpen } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { experiences, education } from '@/lib/data';

export function ExperienceEducation() {
  return (
    <Section id="experience" className="bg-[var(--bg-soft)]/40">
      <SectionHeading
        eyebrow="Experience & Education"
        title="Background & Foundation"
        description="A professional path from software development into a dedicated cybersecurity role, grounded in a computer science education."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Experience — role timeline */}
        <Reveal as="div">
          <div className="glass h-full rounded-xl p-6 sm:p-7">
            <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
              Professional Experience
            </h3>

            <ol className="relative space-y-7 border-l border-[var(--border)] pl-6">
              {experiences.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.role} className="relative">
                    {/* Timeline node */}
                    <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full border border-accent-cyan/30 bg-[var(--surface-solid)]">
                      <Icon className="h-3 w-3 text-accent-cyan" />
                    </span>

                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold">{item.role}</h4>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent-cyan/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-cyan">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.company} · {item.companyLocation}
                    </p>
                    <p className="mt-1 font-mono text-xs text-accent-cyan">{item.period}</p>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.summary}
                    </p>

                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-[var(--text)]">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal as="div" delayIndex={1}>
          <div className="glass h-full rounded-xl p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10">
                <GraduationCap className="h-5 w-5 text-accent-cyan" />
              </span>
              <div>
                <h3 className="font-semibold">{education.degree}</h3>
                <p className="text-sm text-[var(--text-muted)]">{education.institution}</p>
              </div>
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-cyan/15 px-2.5 py-1 text-[11px] font-semibold text-accent-cyan">
                {education.status}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]">
                {education.expectedGraduation}
              </span>
            </div>

            <h4 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
              <BookOpen className="h-3.5 w-3.5" /> Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text)]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
