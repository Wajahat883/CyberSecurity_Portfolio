'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, FlaskConical, Check, Lock, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { projects, projectStatuses, type Project, type ProjectStatus } from '@/lib/data';
import { cn } from '@/lib/utils';

const statusStyles: Record<ProjectStatus, string> = {
  Completed: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/25',
  'In Development': 'bg-accent-cyan/10 text-accent-cyan ring-accent-cyan/25',
  Ongoing: 'bg-accent-blue/10 text-accent-sky ring-accent-blue/25',
  Concept: 'bg-slate-400/10 text-slate-300 ring-slate-400/25',
};

function Cover({ project, className }: { project: Project; className?: string }) {
  if (!project.image) {
    return (
      <div className={cn('flex items-center justify-center bg-base-800', className)}>
        <project.icon className="h-10 w-10 text-accent-cyan" />
      </div>
    );
  }
  return (
    <div className={cn('relative overflow-hidden bg-base-900', className)}>
      {project.imageFit === 'contain' && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
          aria-hidden
        />
      )}
      <Image
        src={project.image}
        alt={`${project.title} ${project.imageIsConcept ? 'conceptual illustration' : 'screenshot'}`}
        fill
        sizes="(max-width: 1024px) 100vw, 640px"
        className={cn(
          'transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]',
          project.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover object-top'
        )}
      />
      {project.imageIsConcept && (
        <span className="absolute bottom-3 left-3 rounded-full bg-base-900/80 px-2.5 py-1 font-mono text-[10px] text-[var(--text-muted)] ring-1 ring-[var(--border)] backdrop-blur-sm">
          Conceptual illustration
        </span>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1', statusStyles[status])}>
      {status}
    </span>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3">
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
        >
          <Github className="h-4 w-4" /> Repository
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 font-mono text-[11px] text-[var(--text-muted)]/70" title="Repository link not yet provided">
          <Lock className="h-3.5 w-3.5" /> Repo not linked
        </span>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:underline"
        >
          Live <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="group panel grid overflow-hidden rounded-2xl lg:grid-cols-2"
    >
      <Cover
        project={project}
        className={cn('h-60 border-b border-[var(--border)] lg:h-auto lg:border-b-0', flip ? 'lg:order-2 lg:border-l' : 'lg:border-r')}
      />
      <div className="flex flex-col justify-center p-7 sm:p-9">
        <div className="mb-3 flex items-center gap-3">
          <span className="eyebrow !text-[0.68rem]">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{project.overview}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--text)]">
              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-cyan" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7">
          <Links project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function SupportingCard({ project }: { project: Project }) {
  const isLab = project.type === 'Training / Labs';
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group panel card-hover flex flex-col overflow-hidden rounded-2xl"
    >
      <Cover project={project} className="h-44 border-b border-[var(--border)]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="eyebrow !text-[0.62rem] inline-flex items-center gap-1">
            {isLab && <FlaskConical className="h-3 w-3" />}
            {project.category}
          </span>
          <span className="ml-auto">
            <StatusBadge status={project.status} />
          </span>
        </div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{project.overview}</p>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--text)]">
              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-cyan" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-[var(--border)] pt-4">
          <Links project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof projectStatuses)[number]>('All Projects');
  const filtered = active === 'All Projects' ? projects : projects.filter((p) => p.status === active);
  const featured = filtered.filter((p) => p.featured);
  const supporting = filtered.filter((p) => !p.featured);

  return (
    <Section id="projects" divider>
      <SectionHeading
        eyebrow="Projects"
        title="Security Projects & Builds"
        description="Offensive, defensive and security-development work. Featured builds are shown in full; supporting work follows. Repository and demo links appear only when they are public."
      />

      {/* Status filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {projectStatuses.map((status) => {
          const count = status === 'All Projects' ? projects.length : projects.filter((p) => p.status === status).length;
          return (
            <button
              key={status}
              type="button"
              onClick={() => setActive(status)}
              aria-pressed={active === status}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                active === status
                  ? 'border-accent-cyan/60 bg-accent-cyan/10 text-accent-cyan'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]'
              )}
            >
              {status}
              <span className="rounded-full bg-[var(--surface-raised)] px-1.5 text-[11px] font-semibold">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {featured.map((p, i) => (
          <FeaturedProject key={p.title} project={p} flip={i % 2 === 1} />
        ))}

        {supporting.length > 0 && (
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {supporting.map((p) => (
                <SupportingCard key={p.title} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
