'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, FlaskConical, Check, Lock } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import {
  projects,
  projectStatuses,
  type Project,
  type ProjectStatus,
  type ProjectCategory,
} from '@/lib/data';
import { cn } from '@/lib/utils';

const statusStyles: Record<ProjectStatus, string> = {
  Completed: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  'In Development': 'bg-accent-cyan/15 text-accent-cyan ring-accent-cyan/30',
  Ongoing: 'bg-accent-blue/15 text-accent-sky ring-accent-blue/30',
  Concept: 'bg-slate-400/15 text-slate-300 ring-slate-400/30',
};

const categoryCover: Record<ProjectCategory, string> = {
  'Offensive Security': 'from-rose-500/25 via-base-700/40 to-rose-500/5',
  'Defensive Security': 'from-accent-cyan/25 via-base-700/40 to-accent-cyan/5',
  'Purple Teaming': 'from-violet-500/25 via-base-700/40 to-violet-500/5',
  'Security Development': 'from-accent-blue/25 via-base-700/40 to-accent-blue/5',
};

export function Projects() {
  const [active, setActive] = useState<(typeof projectStatuses)[number]>('All Projects');

  const filtered =
    active === 'All Projects' ? projects : projects.filter((p) => p.status === active);

  return (
    <Section id="projects" className="bg-[var(--bg-soft)]/40">
      <SectionHeading
        eyebrow="Projects"
        title="Security Projects & Builds"
        description="Offensive, defensive and security-development work. Filter by development status. Repository and demo links appear only when they are public."
      />

      {/* Status filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectStatuses.map((status) => {
          const count =
            status === 'All Projects'
              ? projects.length
              : projects.filter((p) => p.status === status).length;
          return (
            <button
              key={status}
              type="button"
              onClick={() => setActive(status)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                active === status
                  ? 'border-accent-cyan bg-accent-cyan/15 text-accent-cyan'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:border-accent-cyan/40 hover:text-[var(--text)]'
              )}
              aria-pressed={active === status}
            >
              {status}
              <span className="rounded-full bg-[var(--surface)] px-1.5 text-[11px] font-semibold">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isLab = project.type === 'Training / Labs';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="group glass card-hover flex flex-col overflow-hidden rounded-xl"
    >
      {/* Cover */}
      <div className="relative h-44 overflow-hidden border-b border-[var(--border)] bg-base-900">
        {project.image ? (
          <>
            {project.imageFit === 'contain' && (
              <div
                className="absolute inset-0 bg-grid-cyber [background-size:26px_26px] opacity-30"
                aria-hidden
              />
            )}
            <Image
              src={project.image}
              alt={`${project.title} ${project.imageIsConcept ? 'conceptual illustration' : 'cover'}`}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={cn(
                'transition-transform duration-500 group-hover:scale-105',
                project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'
              )}
            />
          </>
        ) : (
          <div
            className={cn(
              'flex h-full items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105',
              categoryCover[project.category]
            )}
          >
            <div
              className="absolute inset-0 bg-grid-cyber [background-size:26px_26px] opacity-40"
              aria-hidden
            />
            <Icon className="relative h-10 w-10 text-accent-cyan" />
          </div>
        )}

        {/* Status badge (top of card) */}
        <span
          className={cn(
            'absolute right-3 top-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 backdrop-blur-sm',
            statusStyles[project.status]
          )}
        >
          {project.status}
        </span>
        <span
          className={cn(
            'absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-base-900/70 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm',
            isLab ? 'text-accent-sky' : 'text-accent-cyan'
          )}
        >
          {isLab ? <FlaskConical className="h-3 w-3" /> : <FolderGit2 className="h-3 w-3" />}
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{project.overview}</p>

        <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-cyan">
            Purpose
          </span>
          <span className="text-[var(--text)]">{project.purpose}</span>
        </p>

        <div className="mt-4">
          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-cyan">
            Key Features
          </p>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[var(--text)]">
                <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-cyan" />
                {f}
              </li>
            ))}
          </ul>
        </div>

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

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <Github className="h-4 w-4" /> View Repository
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 font-mono text-[11px] text-[var(--text-muted)]/70"
              title="Repository link not yet provided"
            >
              <Lock className="h-3.5 w-3.5" /> Repo link not yet added
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:underline"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
