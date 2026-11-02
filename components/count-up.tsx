"use client";

import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "@/lib/motion";

function parse(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    target: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
    grouped: match[2].includes(","),
  };
}

/**
 * Counts a figure such as "25,000+" or "$5,000+" up from zero the first time
 * it scrolls into view. The server HTML and screen readers get the final
 * value; reduced-motion users see it without animation.
 */
export default function CountUp({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parse(value);
    const el = ref.current;
    if (!parsed || !el) return;
    if (reducedMotion()) return;
    if (!("IntersectionObserver" in window)) return;

    const format = (n: number) =>
      parsed.prefix + (parsed.grouped ? n.toLocaleString("en-US") : String(n)) + parsed.suffix;

    let frame = 0;
    setDisplay(format(0));

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(format(Math.round(parsed.target * eased)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      setDisplay(value);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
