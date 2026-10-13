"use client";

import { useEffect, useRef } from "react";

const WORD = "HACK UNITED";

// Resting and extreme axis values (Archivo: wdth 62–125, wght 100–900).
const BASE = { wdth: 96, wght: 760 };
const SPREAD = { wdth: 29, wght: 140 };

/**
 * Footer wordmark set in Archivo's variable axes. Letters near the pointer
 * widen and thicken while far ones condense. Offsets are centred on their mean
 * so the line keeps its overall width. A single wave runs when it scrolls in.
 */
export default function Wordmark() {
  const boxRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const line = lineRef.current;
    if (!box || !line) return;
    const letters = Array.from(line.querySelectorAll<HTMLSpanElement>("[data-l]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let centers: number[] = [];
    let current = letters.map(() => 0);
    let pointer: number | null = null;
    let wave: number | null = null;
    let raf = 0;

    const fit = () => {
      letters.forEach((el) => (el.style.fontVariationSettings = `"wdth" ${BASE.wdth}, "wght" ${BASE.wght}`));
      line.style.fontSize = "100px";
      const natural = line.getBoundingClientRect().width;
      const target = box.clientWidth;
      if (natural > 0) line.style.fontSize = `${(100 * target) / natural}px`;
      const left = box.getBoundingClientRect().left;
      centers = letters.map((el) => {
        const r = el.getBoundingClientRect();
        return r.left - left + r.width / 2;
      });
      current = letters.map(() => 0);
    };

    const frame = (now: number) => {
      raf = 0;
      const width = box.clientWidth || 1;
      const sigma = width * 0.11;
      let focus: number | null = pointer;
      if (focus === null && wave !== null) {
        const t = (now - wave) / 1400;
        if (t >= 1) wave = null;
        else focus = -width * 0.15 + t * width * 1.3;
      }
      const raw = centers.map((c) =>
        focus === null ? 0 : Math.exp(-((c - focus) ** 2) / (2 * sigma * sigma))
      );
      const mean = raw.reduce((a, b) => a + b, 0) / (raw.length || 1);
      let moving = false;
      letters.forEach((el, i) => {
        const target = focus === null ? 0 : raw[i] - mean;
        const next = current[i] + (target - current[i]) * 0.16;
        if (Math.abs(next - target) > 0.002) moving = true;
        current[i] = next;
        const wdth = Math.max(62, Math.min(125, BASE.wdth + next * SPREAD.wdth * 2.2));
        const wght = Math.max(100, Math.min(900, BASE.wght + next * SPREAD.wght * 2.2));
        el.style.fontVariationSettings = `"wdth" ${wdth.toFixed(1)}, "wght" ${wght.toFixed(0)}`;
      });
      if (moving || focus !== null) raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer = e.clientX - box.getBoundingClientRect().left;
      kick();
    };
    const onLeave = () => {
      pointer = null;
      kick();
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box);

    let io: IntersectionObserver | null = null;
    if (!reduce) {
      box.addEventListener("pointermove", onMove);
      box.addEventListener("pointerleave", onLeave);
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            wave = performance.now();
            kick();
            io?.disconnect();
          }
        },
        { threshold: 0.6 }
      );
      io.observe(box);
    }

    if (document.fonts?.ready) document.fonts.ready.then(fit).catch(() => {});

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io?.disconnect();
      box.removeEventListener("pointermove", onMove);
      box.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={boxRef} className="wordmark" aria-hidden="true">
      <div ref={lineRef} className="wordmark-line">
        {WORD.split("").map((ch, i) =>
          ch === " " ? (
            <span key={i} data-l className="wordmark-space">
              {" "}
            </span>
          ) : (
            <span key={i} data-l>
              {ch}
            </span>
          )
        )}
      </div>
    </div>
  );
}
