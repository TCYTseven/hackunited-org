"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>#*+=";

/**
 * Text that decodes itself, terminal style, when its parent link or button is
 * hovered or focused. Screen readers get the plain text; the animated copy is
 * aria-hidden. Use inside monospaced text so the width never jumps.
 */
export default function Scramble({
  text,
  className,
  duration = 420,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);

  const run = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const settled = Math.floor(progress * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < settled || ch === " ") out += ch;
        else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setDisplay(out);
      if (progress < 1) frame.current = requestAnimationFrame(tick);
      else {
        frame.current = null;
        setDisplay(text);
      }
    };
    frame.current = requestAnimationFrame(tick);
  }, [duration, text]);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;
    host.addEventListener("pointerenter", run);
    host.addEventListener("focus", run);
    return () => {
      host.removeEventListener("pointerenter", run);
      host.removeEventListener("focus", run);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [run]);

  useEffect(() => setDisplay(text), [text]);

  return (
    <>
      <span ref={ref} aria-hidden="true" className={className}>
        {display}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
