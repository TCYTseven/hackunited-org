"use client";

/*
 * Adapted from ObsidianUI's Click Spark (MIT, see ./LICENSE).
 * Draws a short burst of spark lines wherever the page is clicked. Changes:
 * the canvas only animates while sparks are alive (the original redrew every
 * frame forever), spark colours come from the theme's accent and signal
 * tokens, and it listens in the capture phase so links that take over the
 * click (page transitions) still spark.
 */

import { useEffect, useRef } from "react";
import { reducedMotion } from "@/lib/motion";

type Spark = { x: number; y: number; angle: number; start: number; color: string };

const COUNT = 9;
const RADIUS = 26;
const SIZE = 12;
const DURATION = 450;

export default function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let sparks: Spark[] = [];
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      sparks = sparks.filter((s) => now - s.start < DURATION);
      for (const s of sparks) {
        const t = (now - s.start) / DURATION;
        const eased = t * (2 - t);
        const distance = eased * RADIUS;
        const length = SIZE * (1 - eased);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x + distance * Math.cos(s.angle), s.y + distance * Math.sin(s.angle));
        ctx.lineTo(s.x + (distance + length) * Math.cos(s.angle), s.y + (distance + length) * Math.sin(s.angle));
        ctx.stroke();
      }
      frame = sparks.length ? requestAnimationFrame(draw) : 0;
    };

    const onClick = (e: MouseEvent) => {
      if (reducedMotion()) return;
      const styles = getComputedStyle(document.documentElement);
      const colors = [styles.getPropertyValue("--hu-accent").trim(), styles.getPropertyValue("--hu-signal").trim()];
      const start = performance.now();
      for (let i = 0; i < COUNT; i++) {
        sparks.push({ x: e.clientX, y: e.clientY, angle: (2 * Math.PI * i) / COUNT, start, color: colors[i % 2] });
      }
      if (!frame) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("click", onClick, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}
    />
  );
}
