/**
 * Decorative cyber grid + radial glow backdrop.
 * Purely presentational and hidden from assistive tech.
 */
export function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-cyber [background-size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      {/* Top radial glow */}
      <div className="absolute inset-x-0 top-0 h-[520px] bg-radial-fade" />
      {/* Floating accent orbs */}
      <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="absolute -right-24 top-96 h-80 w-80 rounded-full bg-accent-cyan/10 blur-3xl" />
    </div>
  );
}
