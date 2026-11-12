import { Briefcase, GraduationCap, BookOpen, Info } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { experience, education } from '@/lib/data';

export function ExperienceEducation() {
  return (
    <Section id="experience" className="bg-[var(--bg-soft)]/40">
      <SectionHeading
        eyebrow="Experience & Education"
        title="Background & Foundation"
        description="Professional web development experience and academic grounding in computer science."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Experience */}
        <Reveal as="article">
          <div className="glass h-full rounded-xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10">
                <Briefcase className="h-5 w-5 text-accent-cyan" />
              </span>
              <div>
                <h3 className="font-semibold">{experience.role}</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {experience.company} · {experience.companyLocation}
                </p>
              </div>
            </div>

            <p className="mb-2 font-mono text-xs text-accent-cyan">{experience.period}</p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{experience.summary}</p>

            <ul className="mt-4 space-y-2">
              {experience.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[var(--text)]">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-5 flex items-start gap-2 rounded-md bg-[var(--surface)] px-3 py-2 text-xs text-[var(--text-muted)]">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
              {experience.note}
            </p>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal as="article" delayIndex={1}>
          <div className="glass h-full rounded-xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10">
                <GraduationCap className="h-5 w-5 text-accent-cyan" />
              </span>
              <div>
                <h3 className="font-semibold">{education.degree}</h3>
                <p className="text-sm text-[var(--text-muted)]">{education.institution}</p>
              </div>
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
