"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { reducedMotion } from "@/lib/motion";

// Decorative hubs spread across every inhabited continent.
const hubs: [number, number][] = [
  [37.77, -122.42],
  [40.71, -74.0],
  [43.65, -79.38],
  [19.43, -99.13],
  [-23.55, -46.63],
  [51.51, -0.13],
  [52.52, 13.4],
  [6.52, 3.38],
  [-1.29, 36.82],
  [30.04, 31.24],
  [25.2, 55.27],
  [24.86, 67.0],
  [19.08, 72.88],
  [12.97, 77.59],
  [1.35, 103.82],
  [14.6, 120.98],
  [-6.2, 106.85],
  [37.57, 126.98],
  [35.68, 139.69],
  [-33.87, 151.21],
];

const THETA = 0.28;
const SCALE = 1.1;
const LAVENDER = "212, 196, 255";
const AMBER = "255, 181, 71";

type Vec = [number, number, number];
type Arc = { a: Vec; b: Vec; start: number; life: number; lift: number };

// Same lat/long → unit vector convention cobe uses for its markers.
const toVec = ([lat, lon]: [number, number]): Vec => {
  const t = (lat * Math.PI) / 180;
  const l = (lon * Math.PI) / 180 - Math.PI;
  const r = Math.cos(t);
  return [-r * Math.cos(l), Math.sin(t), r * Math.sin(l)];
};

// cobe's view rotation (phi around Y, theta around X), applied to a world point.
const rotate = ([x, y, z]: Vec, phi: number): Vec => {
  const cp = Math.cos(phi);
  const sp = Math.sin(phi);
  const ct = Math.cos(THETA);
  const st = Math.sin(THETA);
  return [cp * x + sp * z, sp * st * x + ct * y - cp * st * z, -sp * ct * x + st * y + cp * ct * z];
};

const slerp = (a: Vec, b: Vec, t: number): Vec => {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const omega = Math.acos(dot);
  if (omega < 1e-4) return a;
  const s = Math.sin(omega);
  const ka = Math.sin((1 - t) * omega) / s;
  const kb = Math.sin(t * omega) / s;
  return [a[0] * ka + b[0] * kb, a[1] * ka + b[1] * kb, a[2] * ka + b[2] * kb];
};

/**
 * Dotted WebGL globe (cobe) with a 2D overlay drawn in the same frame:
 * a faint graticule echoing the hero's wireframe logo, pulsing hub pins,
 * and arcs that rise between hubs with a comet riding each one. Turns on
 * its own, can be spun by dragging, and pauses while off screen.
 */
export default function DotGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const drag = useRef<{ x: number; phi: number } | null>(null);
  const phi = useRef(0.6);
  const velocity = useRef(0);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    const ctx = overlay?.getContext("2d");
    if (!canvas || !overlay || !ctx) return;
    const reduced = reducedMotion();
    const points = hubs.map(toVec);
    const arcs: Arc[] = [];
    let lastSpawn = 0;

    let width = canvas.offsetWidth;
    const sizeOverlay = () => {
      width = canvas.offsetWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      overlay.width = width * dpr;
      overlay.height = width * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    sizeOverlay();
    window.addEventListener("resize", sizeOverlay);

    const drawOverlay = (p: number, now: number) => {
      const half = width / 2;
      const radius = half * 0.8 * SCALE;
      const project = (v: Vec) => {
        const r = rotate(v, p);
        return { x: half + r[0] * radius, y: half - r[1] * radius, z: r[2], rr: Math.hypot(r[0], r[1]) };
      };
      ctx.clearRect(0, 0, width, width);

      // Graticule: every 30° of latitude and longitude, front side only.
      ctx.lineWidth = 1;
      const drawLine = (sample: (s: number) => Vec) => {
        let prev: ReturnType<typeof project> | null = null;
        for (let i = 0; i <= 64; i++) {
          const pt = project(sample(i / 64));
          if (prev && pt.z > 0 && prev.z > 0) {
            ctx.strokeStyle = `rgba(${LAVENDER}, ${(0.05 + 0.16 * pt.z).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.stroke();
          }
          prev = pt;
        }
      };
      for (let lat = -60; lat <= 60; lat += 30) drawLine((s) => toVec([lat, s * 360 - 180]));
      for (let lon = -180; lon < 180; lon += 30) drawLine((s) => toVec([s * 180 - 90, lon]));

      // Arcs: rise between two hubs, then retract from the start point.
      if (!reduced && now - lastSpawn > 650 && arcs.length < 7) {
        lastSpawn = now;
        const facing = points.filter((v) => rotate(v, p)[2] > 0.15);
        if (facing.length > 1) {
          const a = facing[Math.floor(Math.random() * facing.length)];
          let b = points[Math.floor(Math.random() * points.length)];
          if (b === a) b = points[(points.indexOf(a) + 3) % points.length];
          const angle = Math.acos(Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
          arcs.push({ a, b, start: now, life: 2400 + angle * 600, lift: 0.08 + angle * 0.12 });
        }
      }

      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        const t = (now - arc.start) / arc.life;
        if (t >= 1) {
          arcs.splice(i, 1);
          continue;
        }
        const head = Math.min(1, t / 0.55);
        const tail = Math.max(0, (t - 0.45) / 0.55);
        const steps = 48;
        let prev: ReturnType<typeof project> | null = null;
        for (let k = 0; k <= steps; k++) {
          const s = tail + (head - tail) * (k / steps);
          const base = slerp(arc.a, arc.b, s);
          const h = 1 + arc.lift * Math.sin(Math.PI * s);
          const pt = project([base[0] * h, base[1] * h, base[2] * h]);
          const hidden = pt.z < 0 && pt.rr < 1;
          if (prev && !hidden) {
            const fade = k / steps;
            ctx.strokeStyle = `rgba(${AMBER}, ${(0.15 + 0.75 * fade).toFixed(3)})`;
            ctx.lineWidth = 1 + fade * 1.2;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.stroke();
          }
          prev = hidden ? null : pt;
          if (k === steps && !hidden && head < 1) {
            ctx.fillStyle = `rgba(${AMBER}, 1)`;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `rgba(${AMBER}, 0.25)`;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Hub pins: a core dot and a ring that keeps pulsing outward.
      points.forEach((v, i) => {
        const pt = project(v);
        if (pt.z <= 0.05) return;
        const depth = 0.45 + 0.55 * pt.z;
        const pulse = reduced ? 0.5 : (now / 1800 + i * 0.137) % 1;
        ctx.strokeStyle = `rgba(${LAVENDER}, ${((1 - pulse) * 0.8 * depth).toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, (3 + pulse * 11) * depth, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = `rgba(${LAVENDER}, ${depth.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.4 * depth, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: phi.current,
      theta: THETA,
      scale: SCALE,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 9,
      baseColor: [0.36, 0.34, 0.44],
      markerColor: [0.83, 0.77, 1],
      glowColor: [0.24, 0.2, 0.4],
      markers: [],
      onRender: (state) => {
        if (!drag.current) {
          velocity.current *= 0.95;
          phi.current += (reduced ? 0 : 0.0026) + velocity.current;
        }
        state.phi = phi.current;
        state.width = width * 2;
        state.height = width * 2;
        drawOverlay(phi.current, performance.now());
      },
    });

    const observer = new IntersectionObserver(([entry]) => globe.toggle(entry.isIntersecting));
    observer.observe(canvas);
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
      overlay.style.opacity = "1";
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sizeOverlay);
      globe.destroy();
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, phi: phi.current };
    velocity.current = 0;
    setGrabbing(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const next = drag.current.phi + (e.clientX - drag.current.x) / 180;
    velocity.current = next - phi.current;
    phi.current = next;
  };

  const endDrag = () => {
    drag.current = null;
    setGrabbing(false);
  };

  return (
    <div
      className={`hu-globe-stage ${className}`}
      style={{ cursor: grabbing ? "grabbing" : "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      role="img"
      aria-label="Spinning globe with arcs connecting cities around the world. Drag to rotate."
    >
      <canvas ref={canvasRef} className="hu-globe" />
      <canvas ref={overlayRef} className="hu-globe hu-globe-overlay" />
    </div>
  );
}
