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
          <div className="glass rounded-xl p-6">
            <div className="mb-5 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-br from-accent-cyan/50 to-accent-blue/30 p-[2px]">
                <div className="overflow-hidden rounded-[0.65rem] bg-base-800">
                  <ProfileImage size={64} sizes="64px" rounded="2xl" className="!h-16 !w-16" />
                </div>
              </div>
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="font-mono text-xs text-accent-cyan">{profile.officialTitle}</p>
                <p className="mt-0.5 font-mono text-[11px] text-[var(--text-muted)]">{profile.location}</p>
              </div>
            </div>

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
