/** True when the operating system asks for reduced motion. */
export function reducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * The site's one motion style. Entrances use this ease and duration; CSS
 * mirrors it as --hu-ease and --hu-dur (globals.css).
 */
export const MOTION = { ease: "power3.out", duration: 0.7 } as const;
