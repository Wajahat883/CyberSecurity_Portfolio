'use client';

import Image from 'next/image';
import { useState } from 'react';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  /** Rendered box size in px (square). */
  size: number;
  /** Responsive `sizes` hint for next/image. */
  sizes?: string;
  priority?: boolean;
  className?: string;
  rounded?: 'full' | '2xl';
}

/**
 * Optimized profile photo with a graceful fallback to initials if the image
 * is missing or fails to load. Uses next/image for responsive optimization.
 */
export function ProfileImage({
  size,
  sizes,
  priority = false,
  className,
  rounded = '2xl',
}: ProfileImageProps) {
  const [failed, setFailed] = useState(false);
  const radius = rounded === 'full' ? 'rounded-full' : 'rounded-2xl';

  if (failed) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-base-700 font-mono font-bold text-accent-cyan',
          radius,
          className
        )}
        style={{ width: size, height: size, fontSize: size * 0.32 }}
        aria-label={profile.name}
      >
        MW
      </div>
    );
  }

  return (
    <Image
      src={profile.photo}
      alt={`${profile.name} — ${profile.officialTitle}`}
      width={size}
      height={size}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn('object-cover', radius, className)}
      style={{ width: size, height: size }}
    />
  );
}
