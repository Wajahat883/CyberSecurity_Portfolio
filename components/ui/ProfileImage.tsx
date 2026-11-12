'use client';

import Image from 'next/image';
import { useState } from 'react';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  /** Sizing/shape classes for the box (e.g. "h-16 w-16 rounded-xl" or "aspect-[4/5] w-full rounded-2xl"). */
  className?: string;
  /** Responsive `sizes` hint for next/image. */
  sizes?: string;
  priority?: boolean;
  /** Font size for the fallback initials. */
  fallbackText?: string;
}

/**
 * Optimized profile photo that fills its container (set shape/size via
 * className). Falls back to initials if the image is missing or fails to load.
 */
export function ProfileImage({ className, sizes, priority = false, fallbackText = '1.5rem' }: ProfileImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn('flex items-center justify-center bg-base-700 font-display font-bold text-accent-cyan', className)}
        style={{ fontSize: fallbackText }}
        aria-label={profile.name}
      >
        MW
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={profile.photo}
        alt={`${profile.name} — ${profile.officialTitle}`}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
        className="object-cover"
      />
    </div>
  );
}
