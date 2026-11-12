'use client';

import { useEffect, useState } from 'react';

/**
 * Scroll-spy: returns the id of the section currently in view.
 *
 * Uses a single IntersectionObserver with a rootMargin that favours whichever
 * section occupies the vertical middle of the viewport, so the active id stays
 * correct whether scrolling up or down. Falls back gracefully when
 * IntersectionObserver is unavailable.
 */
export function useScrollSpy(ids: string[], offset = 80): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Track visibility ratios and pick the best candidate on each change.
    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        // Choose the most-visible intersecting section.
        let best = '';
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }

        if (best) {
          setActiveId(best);
        } else if (window.scrollY < offset) {
          // At the very top, nothing is "active".
          setActiveId('');
        }
      },
      {
        // Shrink the observation band to the middle of the viewport so the
        // active section is the one the reader is actually looking at.
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
