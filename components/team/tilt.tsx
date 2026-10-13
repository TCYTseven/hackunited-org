"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Leans its contents toward the pointer and moves a glare highlight with it.
 * Writes CSS variables directly, so moving the mouse never re-renders React.
 * Only active for fine pointers with motion allowed.
 */
export default function Tilt({
  children,
  className,
  max = 9,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    let px = 0.5;
    let py = 0.5;

    const apply = () => {
      raf = 0;
      el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
      el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
      el.style.setProperty("--gx", `${px * 100}%`);
      el.style.setProperty("--gy", `${py * 100}%`);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      el.dataset.tilting = "true";
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      px = 0.5;
      py = 0.5;
      el.dataset.tilting = "false";
      if (!raf) raf = requestAnimationFrame(apply);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return (
    <div ref={ref} className={cn("tilt", className)}>
      {children}
    </div>
  );
}
