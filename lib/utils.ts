/**
 * Minimal className combiner — joins truthy class strings.
 * Avoids pulling in extra dependencies for a small portfolio.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
