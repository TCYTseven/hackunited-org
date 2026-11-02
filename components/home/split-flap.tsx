"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./split-flap.css";
import { reducedMotion } from "@/lib/motion";

const DIGITS = "0123456789";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Departure-board style readout. Each character riffles through a few
 * random glyphs before landing on its real value, left to right. Plays once
 * when scrolled into view and again whenever `replayKey` changes.
 */
export default function SplitFlap({
  value,
  replayKey = 0,
  className = "",
}: {
  value: string;
  replayKey?: number;
  className?: string;
}) {
  const chars = value.split("");
  const [shown, setShown] = useState(chars);
  const [flipping, setFlipping] = useState<number[]>(() => chars.map(() => 0));
  const ref = useRef<HTMLSpanElement>(null);
  const timers = useRef<number[]>([]);
  const seen = useRef(false);

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    const target = value.split("");

    target.forEach((ch, i) => {
      const pool = DIGITS.includes(ch) ? DIGITS : LETTERS.includes(ch) ? LETTERS : null;
      if (!pool) return;
      const steps = 5 + i * 2 + Math.floor(Math.random() * 3);
      for (let s = 0; s <= steps; s++) {
        const id = window.setTimeout(() => {
          const glyph = s === steps ? ch : pool[Math.floor(Math.random() * pool.length)];
          setShown((prev) => {
            const next = [...prev];
            next[i] = glyph;
            return next;
          });
          setFlipping((prev) => {
            const next = [...prev];
            next[i] = prev[i] + 1;
            return next;
          });
        }, 120 + s * 58);
        timers.current.push(id);
      }
    });
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || seen.current) return;
        seen.current = true;
        observer.disconnect();
        play();
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [play]);

  useEffect(() => {
    if (replayKey && !reducedMotion()) play();
  }, [replayKey, play]);

  // A new value (e.g. a countdown ticking over) replaces the readout outright.
  useEffect(() => {
    setShown(value.split(""));
    setFlipping(value.split("").map(() => 0));
  }, [value]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <span ref={ref} className={`hu-flap ${className}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="hu-flap-row">
        {shown.map((ch, i) => {
          const isGlyph = DIGITS.includes(value[i]) || LETTERS.includes(value[i]);
          return isGlyph ? (
            <span key={`${i}-${flipping[i]}`} className="hu-flap-cell" data-flip={flipping[i] > 0 || undefined}>
              {ch}
            </span>
          ) : (
            <span key={i} className="hu-flap-sym">
              {ch}
            </span>
          );
        })}
      </span>
    </span>
  );
}
