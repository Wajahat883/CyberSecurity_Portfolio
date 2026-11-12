import { CheckCircle2 } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { about, profile } from '@/lib/data';

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About Me" title={about.heading} description={about.description} />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-[var(--text-muted)]">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delayIndex={1}>
          <div className="panel rounded-2xl p-6">
            <div className="mb-6 flex items-center gap-4">
              <ProfileImage
                className="h-16 w-16 rounded-xl border border-[var(--border-strong)]"
                sizes="64px"
                fallbackText="1.2rem"
              />
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="font-mono text-xs text-accent-cyan">{profile.officialTitle}</p>
                <p className="mt-0.5 font-mono text-[11px] text-[var(--text-muted)]">{profile.location}</p>
              </div>
            </div>

            <h3 className="mb-4 eyebrow">Focus Areas</h3>
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
