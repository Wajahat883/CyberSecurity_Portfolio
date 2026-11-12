/**
 * Restrained technical backdrop: a fine grid, a single soft accent wash,
 * and a subtle vignette. Deliberately understated — no neon, no orbs.
 * Purely presentational and hidden from assistive tech.
 */
export function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_55%,transparent_100%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />
      {/* Single restrained accent wash at the top */}
      <div
        className="absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% -8%, rgba(34,211,238,0.10), transparent 70%)',
        }}
      />
      {/* Bottom vignette for depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}
      />
    </div>
  );
}
