'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, FlaskConical } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { projects, projectCategories } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" className="bg-[var(--bg-soft)]/40">
      <SectionHeading
        eyebrow="Projects"
        title="Security Projects & Builds"
        description="Personal projects and training work. Repositories and live links are added only once they are public."
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

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const Icon = project.icon;
            const isLab = project.type === 'Training / Labs';
            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="glass card-hover flex flex-col rounded-xl p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10">
                    <Icon className="h-5 w-5 text-accent-cyan" />
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold',
                      isLab
                        ? 'bg-accent-blue/15 text-accent-sky'
                        : 'bg-accent-cyan/15 text-accent-cyan'
                    )}
                  >
                    {isLab ? <FlaskConical className="h-3 w-3" /> : <FolderGit2 className="h-3 w-3" />}
                    {project.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-accent-cyan/80">{project.category}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--text)]">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
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
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
