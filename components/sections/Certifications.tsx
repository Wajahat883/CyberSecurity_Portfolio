import { Award, ExternalLink, Loader2, BadgeCheck } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { certifications } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications & Training"
        title="Credentials & Ongoing Learning"
        description="Completed programs and current studies. Verification links will be added as credentials are confirmed."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const inProgress = cert.status === 'In Progress';
          return (
            <Reveal key={cert.title} delayIndex={i} as="article">
              <div
                className={cn(
                  'glass card-hover relative flex h-full flex-col rounded-xl p-6',
                  inProgress && 'border-accent-cyan/30'
                )}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-lg border',
                      inProgress
                        ? 'border-accent-cyan/30 bg-accent-cyan/10'
                        : 'border-[var(--border)] bg-[var(--surface)]'
                    )}
                  >
                    {inProgress ? (
                      <Loader2 className="h-5 w-5 animate-spin text-accent-cyan [animation-duration:3s]" />
                    ) : (
                      <Award className="h-5 w-5 text-accent-sky" />
                    )}
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold',
                      inProgress
                        ? 'bg-accent-cyan/15 text-accent-cyan'
                        : 'bg-emerald-400/10 text-emerald-300'
                    )}
                  >
                    {inProgress ? 'Currently Learning' : <BadgeCheck className="h-3 w-3" />}
                    {!inProgress && 'Completed'}
                  </span>
                </div>

                <h3 className="text-base font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{cert.issuer}</p>

                {cert.note && (
                  <p className="mt-3 rounded-md bg-[var(--surface)] px-3 py-2 font-mono text-xs text-[var(--text-muted)]">
                    {cert.note}
                  </p>
                )}

                <div className="mt-auto pt-4">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan hover:underline"
                    >
                      Verify credential <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-[var(--text-muted)]/70">
                      Verification link coming soon
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
