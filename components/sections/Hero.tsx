'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '@/lib/data';
import { ProfileImage } from '@/components/ui/ProfileImage';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-20">
        {/* Left — identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 font-mono text-xs text-[var(--text-muted)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            </span>
            Open to cybersecurity opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-6 flex items-stretch gap-4"
          >
            <span className="w-[3px] rounded-full bg-gradient-to-b from-accent-cyan to-accent-blue/40" aria-hidden />
            <div>
              <p className="text-lg font-semibold tracking-tight text-[var(--text)] sm:text-xl">
                {profile.headline}
              </p>
              <p className="mt-1 font-mono text-sm text-accent-cyan">{profile.subheadline}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-[var(--text-muted)]"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-5 py-3 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.02]"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            className="mt-9 flex items-center gap-5 text-[var(--text-muted)]"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-accent-cyan">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-accent-cyan">
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="h-4 w-px bg-[var(--border)]" />
            <span className="inline-flex items-center gap-1.5 font-mono text-xs">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0"
        >
          {/* Frame */}
          <div className="panel relative overflow-hidden rounded-[1.5rem] p-2">
            <div className="relative overflow-hidden rounded-[1.1rem]">
              <ProfileImage
                className="aspect-[4/5] w-full"
                priority
                sizes="(max-width: 1024px) 380px, 420px"
                fallbackText="4rem"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base-900/90 via-base-900/40 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--text)]">
                    <span className="text-accent-cyan">$</span> whoami
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-2.5 py-1 font-mono text-[11px] text-accent-cyan">
                    Purple Team
                  </span>
                </div>
                <p className="mt-1 font-mono text-[13px] text-[var(--text-muted)]">
                  penetration tester · offensive + defensive
                </p>
              </div>
            </div>

            {/* Restrained corner brackets (targeting frame) */}
            <span className="pointer-events-none absolute left-3.5 top-3.5 h-5 w-5 rounded-tl border-l-2 border-t-2 border-accent-cyan/50" aria-hidden />
            <span className="pointer-events-none absolute right-3.5 top-3.5 h-5 w-5 rounded-tr border-r-2 border-t-2 border-accent-cyan/50" aria-hidden />
            <span className="pointer-events-none absolute bottom-3.5 left-3.5 h-5 w-5 rounded-bl border-b-2 border-l-2 border-accent-cyan/50" aria-hidden />
            <span className="pointer-events-none absolute bottom-3.5 right-3.5 h-5 w-5 rounded-br border-b-2 border-r-2 border-accent-cyan/50" aria-hidden />
          </div>

          {/* Subtle stat strip */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { k: 'Focus', v: 'Pen Testing' },
              { k: 'Domains', v: 'Red · Blue' },
              { k: 'Based in', v: profile.location },
            ].map((s) => (
              <div key={s.k} className="panel rounded-xl px-3 py-2.5 text-center">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{s.k}</p>
                <p className="mt-0.5 text-[13px] font-semibold">{s.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
