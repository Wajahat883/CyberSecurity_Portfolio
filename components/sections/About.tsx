import { CheckCircle2 } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { about } from '@/lib/data';

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="From Computer Science to Cybersecurity"
        description="How a developer's foundation became a focused pursuit of defensive security."
      />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-[var(--text-muted)]">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delayIndex={1}>
          <div className="glass rounded-xl p-6">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
              Focus Areas
            </h3>
            <ul className="space-y-3">
              {about.focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-cyan" />
                  <span className="text-[var(--text)]">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
