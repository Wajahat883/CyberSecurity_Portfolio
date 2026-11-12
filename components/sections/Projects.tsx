'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, FlaskConical, Blend } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { projects, projectCategories, type Project, type ProjectStatus } from '@/lib/data';
import { cn } from '@/lib/utils';

const statusStyles: Record<ProjectStatus, string> = {
  Completed: 'bg-emerald-400/15 text-emerald-300',
  'In Development': 'bg-accent-cyan/15 text-accent-cyan',
  Ongoing: 'bg-accent-blue/15 text-accent-sky',
  Concept: 'bg-slate-400/15 text-slate-300',
};

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" className="bg-[var(--bg-soft)]/40">
      <SectionHeading
        eyebrow="Projects"
        title="Security Projects & Builds"
        description="Personal projects and hands-on training across offensive, defensive and security-development work. Repositories and live links are shown only once they are public."
      />

      {/* Filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              active === cat
                ? 'border-accent-cyan bg-accent-cyan/15 text-accent-cyan'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:border-accent-cyan/40 hover:text-[var(--text)]'
            )}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isLab = project.type === 'Training / Labs';

  const details: { label: string; value: string }[] = [
    { label: 'Problem', value: project.problem },
    { label: 'Architecture', value: project.architecture },
    { label: 'My Contribution', value: project.contribution },
    { label: 'Methodology', value: project.methodology },
  ];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="glass card-hover flex flex-col overflow-hidden rounded-xl"
    >
      {/* Preview banner (placeholder until real screenshots are added) */}
      <div className="relative flex h-28 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-accent-cyan/10 via-base-700/40 to-accent-blue/10">
        <div
          className="absolute inset-0 bg-grid-cyber [background-size:28px_28px] opacity-40"
          aria-hidden
        />
        <Icon className="relative h-9 w-9 text-accent-cyan" />
        <span
          className={cn(
            'absolute right-3 top-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold',
            statusStyles[project.status]
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-1 flex items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold',
              isLab ? 'bg-accent-blue/15 text-accent-sky' : 'bg-accent-cyan/15 text-accent-cyan'
            )}
          >
            {isLab ? <FlaskConical className="h-3 w-3" /> : <FolderGit2 className="h-3 w-3" />}
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{project.overview}</p>

        <dl className="mt-4 space-y-2.5 border-t border-[var(--border)] pt-4">
          {details.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-cyan">
                {label}
              </dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-[var(--text)]">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-[var(--border)] pt-4">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-accent-cyan"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]/70">
              <Github className="h-4 w-4" /> Private / in progress
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-accent-cyan"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <div className="glass mx-auto max-w-lg rounded-xl p-8 text-center">
      <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-cyan/25 bg-accent-cyan/10">
        <Blend className="h-6 w-6 text-accent-cyan" />
      </span>
      <h3 className="font-semibold">Purple Team projects in progress</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
        I&apos;m currently building hands-on Purple Team exercises — mapping attack techniques to
        detections and validating security controls. See the{' '}
        <a href="#labs" className="text-accent-cyan hover:underline">
          Labs
        </a>{' '}
        section for the exercises I&apos;m working through now.
      </p>
    </div>
  );
}
