'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Terminal, Blend } from 'lucide-react';
import { profile, terminalLines } from '@/lib/data';
import { ProfileImage } from '@/components/ui/ProfileImage';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 px-3 py-1 font-mono text-xs text-accent-cyan"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            Open to cybersecurity opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-base font-semibold leading-snug text-gradient sm:text-lg"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)]"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-5 py-3 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.03]"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumePath}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex items-center gap-4 text-[var(--text-muted)]"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-accent-cyan"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-accent-cyan"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="h-4 w-px bg-[var(--border)]" />
            <span className="font-mono text-xs">{profile.location}</span>
          </motion.div>
        </div>

        {/* Right — profile photo + terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          {/* Profile photo */}
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-cyan/25 via-accent-blue/15 to-transparent blur-xl" aria-hidden />
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-accent-cyan/60 via-accent-blue/40 to-accent-cyan/10 p-[2px] shadow-glow">
              <div className="overflow-hidden rounded-[1.65rem] bg-base-800">
                <ProfileImage
                  size={260}
                  priority
                  sizes="(max-width: 640px) 220px, 260px"
                  rounded="2xl"
                  className="!h-[260px] !w-[260px]"
                />
              </div>
            </div>

            {/* Floating role badge */}
            <div className="glass absolute -bottom-4 -left-5 flex items-center gap-2 rounded-lg px-3 py-2 shadow-glow">
              <Blend className="h-5 w-5 text-accent-cyan" />
              <div className="leading-tight">
                <p className="text-xs font-semibold">Purple Team</p>
                <p className="font-mono text-[10px] text-[var(--text-muted)]">Offensive + Defensive</p>
              </div>
            </div>
          </div>

          {/* Terminal card */}
          <div className="glass mt-8 overflow-hidden rounded-xl shadow-glow">
            <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                <Terminal className="h-3 w-3" /> ~/wajahat
              </span>
            </div>
            <div className="space-y-1.5 p-4 font-mono text-[13px]">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  className="flex gap-2"
                >
                  {line.prompt && <span className="text-accent-cyan">{line.prompt}</span>}
                  <span className={line.accent ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'}>
                    {line.text}
                  </span>
                </motion.div>
              ))}
              <span className="inline-block h-4 w-2 animate-pulse bg-accent-cyan align-middle" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
