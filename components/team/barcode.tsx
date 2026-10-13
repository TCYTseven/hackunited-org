/** Decorative barcode, generated deterministically from a seed string. */
export default function Barcode({ seed, className }: { seed: string; className?: string }) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const next = () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const bars: { x: number; w: number }[] = [];
  let x = 0;
  while (x < 96) {
    const w = 1 + Math.floor(next() * 3);
    bars.push({ x, w });
    x += w + 1 + Math.floor(next() * 2.4);
  }

  return (
    <svg
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y="0" width={b.w} height="20" fill="currentColor" />
      ))}
    </svg>
  );
}
