import { FlaskConical, Activity } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { labs } from '@/lib/data';

export function Labs() {
  return (
    <Section id="labs">
      <SectionHeading
        eyebrow="Hands-on Labs"
        title="Practical Training & Lab Experience"
        description="Defensive and offensive exercises completed in authorized lab environments — practical learning, not commercial engagements."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab, i) => (
          <Reveal key={lab.title} delayIndex={i % 3} as="article">
            <div className="glass card-hover group h-full rounded-xl p-5">
              <div className="mb-3 flex items-center gap-2 text-accent-cyan">
                <FlaskConical className="h-4 w-4" />
                <Activity className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="text-sm font-semibold leading-snug">{lab.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{lab.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {lab.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[var(--border)] bg-[var(--surface)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
