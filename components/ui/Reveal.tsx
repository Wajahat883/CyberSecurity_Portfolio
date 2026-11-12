'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay: i * 0.08 },
  }),
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayIndex?: number;
  as?: 'div' | 'li' | 'article' | 'section';
}

/** Fade-and-rise reveal when the element scrolls into view (runs once). */
export function Reveal({ children, className, delayIndex = 0, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delayIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </MotionTag>
  );
}
