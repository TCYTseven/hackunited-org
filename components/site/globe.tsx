"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Vec = [number, number, number];

const DEG = Math.PI / 180;

/* A spread of cities across the regions United Hacks participants join from. */
const CITIES: [number, number][] = [
  [40.71, -74.0],
  [37.77, -122.42],
  [43.65, -79.38],
  [19.43, -99.13],
  [-23.55, -46.63],
  [-34.6, -58.38],
  [4.71, -74.07],
  [51.51, -0.13],
  [48.86, 2.35],
  [52.52, 13.4],
  [59.33, 18.07],
  [41.01, 28.98],
  [30.04, 31.24],
  [6.52, 3.38],
  [-1.29, 36.82],
  [-26.2, 28.05],
  [25.2, 55.27],
  [33.69, 73.05],
  [19.08, 72.88],
  [12.97, 77.59],
  [23.81, 90.41],
  [42.87, 74.59],
  [1.35, 103.82],
  [14.6, 120.98],
  [21.03, 105.85],
  [39.9, 116.4],
  [37.57, 126.98],
  [35.68, 139.69],
  [-33.87, 151.21],
  [-36.85, 174.76],
];

function toVec(lat: number, lon: number): Vec {
  const phi = lat * DEG;
  const lambda = lon * DEG;
  const c = Math.cos(phi);
  return [c * Math.sin(lambda), Math.sin(phi), c * Math.cos(lambda)];
}

function buildGraticule(): Vec[][] {
  const lines: Vec[][] = [];
  // Parallels every 20°, plus the polar rings that the logo mark shows.
  for (const lat of [-80, -60, -40, -20, 0, 20, 40, 60, 80]) {
    const line: Vec[] = [];
    for (let lon = -180; lon <= 180; lon += 4) line.push(toVec(lat, lon));
    lines.push(line);
  }
  // Meridians every 20°, stopping at the polar ring like the mark does.
  for (let lon = -180; lon < 180; lon += 20) {
    const line: Vec[] = [];
    for (let lat = -80; lat <= 80; lat += 4) line.push(toVec(lat, lon));
    lines.push(line);
  }
  return lines;
}

type Arc = { points: Vec[]; start: number; duration: number };

function makeArc(now: number, cityVecs: Vec[]): Arc | null {
  const i = (Math.random() * cityVecs.length) | 0;
  let j = (Math.random() * cityVecs.length) | 0;
  if (i === j) j = (j + 1) % cityVecs.length;
  const a = cityVecs[i];
  const b = cityVecs[j];
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const omega = Math.acos(dot);
  if (omega < 0.35 || omega > 2.6) return null;
  const lift = 0.06 + 0.16 * (omega / Math.PI);
  const steps = 56;
  const s = Math.sin(omega);
  const points: Vec[] = [];
  for (let k = 0; k <= steps; k++) {
    const t = k / steps;
    const k1 = Math.sin((1 - t) * omega) / s;
    const k2 = Math.sin(t * omega) / s;
    const h = 1 + lift * Math.sin(Math.PI * t);
    points.push([
      (a[0] * k1 + b[0] * k2) * h,
      (a[1] * k1 + b[1] * k2) * h,
      (a[2] * k1 + b[2] * k2) * h,
    ]);
  }
  return { points, start: now, duration: 2200 + omega * 900 };
}

function fmt(value: number, pos: string, neg: string, width: number) {
  const abs = Math.abs(value).toFixed(2).padStart(width, "0");
  return `${abs}°${value >= 0 ? pos : neg}`;
}

export default function Globe({
  className,
  readoutClassName,
  initialLon = -20,
  initialLat = 22,
  arcs = true,
  showReadout = true,
  readoutId,
}: {
  className?: string;
  readoutClassName?: string;
  initialLon?: number;
  initialLat?: number;
  arcs?: boolean;
  showReadout?: boolean;
  /** Id of an element elsewhere on the page holding [data-lat] and [data-lon] spans. */
  readoutId?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const latRef = useRef<HTMLSpanElement>(null);
  const lonRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const external = readoutId ? document.getElementById(readoutId) : null;
    const latEl = external?.querySelector<HTMLElement>("[data-lat]") ?? latRef.current;
    const lonEl = external?.querySelector<HTMLElement>("[data-lon]") ?? lonRef.current;
    const graticule = buildGraticule();
    const cityVecs = CITIES.map(([lat, lon]) => toVec(lat, lon));
    const phases = CITIES.map((_, i) => (i * 0.137) % 1);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let lon0 = initialLon;
    let lat0 = initialLat;
    let velLon = 0;
    let velLat = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let lastMove = 0;
    let idleUntil = 0;
    let hover: { x: number; y: number } | null = null;
    let visible = true;
    let raf = 0;
    let prev = performance.now();
    let nextArc = prev + 600;
    let lastReadout = "";
    const live: Arc[] = [];

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      draw(performance.now());
    };

    const geometry = () => {
      const R = (Math.min(width, height) / 2) * 0.8;
      return { R, cx: width / 2, cy: height / 2 };
    };

    const updateReadout = (lat: number, lon: number, mode: string) => {
      const text = `${lat.toFixed(2)}|${lon.toFixed(2)}|${mode}`;
      if (text === lastReadout) return;
      lastReadout = text;
      let wrapped = ((lon + 180) % 360 + 360) % 360 - 180;
      if (wrapped === -180) wrapped = 180;
      if (latEl) latEl.textContent = fmt(lat, "N", "S", 5);
      if (lonEl) lonEl.textContent = fmt(wrapped, "E", "W", 6);
      const tracking = mode === "PTR" ? "true" : "false";
      wrap.dataset.tracking = tracking;
      if (external) external.dataset.tracking = tracking;
    };

    const draw = (now: number) => {
      const { R, cx, cy } = geometry();
      const sinL = Math.sin(lon0 * DEG);
      const cosL = Math.cos(lon0 * DEG);
      const sinP = Math.sin(lat0 * DEG);
      const cosP = Math.cos(lat0 * DEG);

      const project = (v: Vec): Vec => {
        const x1 = v[0] * cosL - v[2] * sinL;
        const z1 = v[0] * sinL + v[2] * cosL;
        const y2 = v[1] * cosP - z1 * sinP;
        const z2 = v[1] * sinP + z1 * cosP;
        return [cx + x1 * R, cy - y2 * R, z2];
      };

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Volume: a faint lit disc so the wireframe reads as a sphere.
      const shade = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      shade.addColorStop(0, "rgba(236,234,228,0.07)");
      shade.addColorStop(1, "rgba(236,234,228,0)");
      ctx.fillStyle = shade;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Graticule split into hidden (back) and visible (front) strokes.
      const front = new Path2D();
      const back = new Path2D();
      for (const line of graticule) {
        let penFront = false;
        let penBack = false;
        for (const v of line) {
          const [x, y, z] = project(v);
          if (z >= 0) {
            if (penFront) front.lineTo(x, y);
            else front.moveTo(x, y);
            penFront = true;
            penBack = false;
          } else {
            if (penBack) back.lineTo(x, y);
            else back.moveTo(x, y);
            penBack = true;
            penFront = false;
          }
        }
      }
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(236,234,228,0.07)";
      ctx.stroke(back);
      ctx.strokeStyle = "rgba(236,234,228,0.34)";
      ctx.stroke(front);

      ctx.lineWidth = 1.25;
      ctx.strokeStyle = "rgba(236,234,228,0.75)";
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // City markers with a slow pulse.
      const t = reduce ? 0.5 : now / 2600;
      for (let i = 0; i < cityVecs.length; i++) {
        const [x, y, z] = project(cityVecs[i]);
        if (z < 0.02) continue;
        const fade = Math.min(1, z * 4);
        ctx.fillStyle = `rgba(47,224,194,${0.95 * fade})`;
        ctx.fillRect(x - 2, y - 2, 4, 4);
        if (!reduce) {
          const p = (t + phases[i]) % 1;
          ctx.strokeStyle = `rgba(47,224,194,${(1 - p) * 0.55 * fade})`;
          ctx.lineWidth = 1;
          const r = 3 + p * 12;
          ctx.strokeRect(x - r, y - r, r * 2, r * 2);
        }
      }

      // Connection arcs between cities.
      if (arcs && !reduce) {
        for (let k = live.length - 1; k >= 0; k--) {
          const arc = live[k];
          const life = (now - arc.start) / arc.duration;
          if (life >= 1.5) {
            live.splice(k, 1);
            continue;
          }
          const head = Math.min(1, life);
          const tail = Math.max(0, life - 0.5);
          const n = arc.points.length - 1;
          const from = Math.floor(tail * n);
          const to = Math.ceil(head * n);
          ctx.beginPath();
          let pen = false;
          let headPt: Vec | null = null;
          for (let s = from; s <= to; s++) {
            const [x, y, z] = project(arc.points[s]);
            const dx = (x - cx) / R;
            const dy = (y - cy) / R;
            const shown = z >= 0 || dx * dx + dy * dy > 1;
            if (shown) {
              if (pen) ctx.lineTo(x, y);
              else ctx.moveTo(x, y);
              pen = true;
              if (s === to) headPt = [x, y, z];
            } else pen = false;
          }
          ctx.strokeStyle = "rgba(139,115,255,0.9)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
          if (headPt && life < 1) {
            ctx.fillStyle = "rgba(236,234,228,1)";
            ctx.fillRect(headPt[0] - 2, headPt[1] - 2, 4, 4);
          }
        }
      }

      // Cursor reticle and live coordinates under the pointer.
      let readLat = lat0;
      let readLon = lon0;
      let mode = "CTR";
      if (hover) {
        const nx = (hover.x - cx) / R;
        const ny = (cy - hover.y) / R;
        const rr = nx * nx + ny * ny;
        if (rr <= 1) {
          const nz = Math.sqrt(1 - rr);
          const y1 = ny * cosP + nz * sinP;
          const z1 = -ny * sinP + nz * cosP;
          const x = nx * cosL + z1 * sinL;
          const z = -nx * sinL + z1 * cosL;
          readLat = Math.asin(Math.max(-1, Math.min(1, y1))) / DEG;
          readLon = Math.atan2(x, z) / DEG;
          mode = "PTR";
          ctx.strokeStyle = "rgba(47,224,194,1)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(hover.x - 12, hover.y);
          ctx.lineTo(hover.x - 4, hover.y);
          ctx.moveTo(hover.x + 4, hover.y);
          ctx.lineTo(hover.x + 12, hover.y);
          ctx.moveTo(hover.x, hover.y - 12);
          ctx.lineTo(hover.x, hover.y - 4);
          ctx.moveTo(hover.x, hover.y + 4);
          ctx.lineTo(hover.x, hover.y + 12);
          ctx.stroke();
        }
      }
      updateReadout(readLat, readLon, mode);
    };

    const loop = (now: number) => {
      raf = 0;
      const dt = Math.min(50, now - prev);
      prev = now;

      if (!dragging) {
        if (Math.abs(velLon) > 0.0005 || Math.abs(velLat) > 0.0005) {
          lon0 += velLon * dt;
          lat0 += velLat * dt;
          const decay = Math.pow(0.94, dt / 16.7);
          velLon *= decay;
          velLat *= decay;
        } else if (!reduce && now > idleUntil) {
          lon0 -= 0.006 * dt;
        }
        // Ease the tilt back toward the resting angle.
        if (!reduce) lat0 += (initialLat - lat0) * Math.min(1, dt / 2400);
      }
      lat0 = Math.max(-55, Math.min(70, lat0));

      if (arcs && !reduce && now > nextArc && live.length < 4) {
        const arc = makeArc(now, cityVecs);
        if (arc) live.push(arc);
        nextArc = now + 700 + Math.random() * 900;
      }

      draw(now);
      schedule();
    };

    const animating = () =>
      !reduce || dragging || Math.abs(velLon) > 0.0005 || Math.abs(velLat) > 0.0005;

    const schedule = () => {
      if (!raf && visible && !document.hidden && animating()) {
        raf = requestAnimationFrame(loop);
      }
    };

    const kick = () => {
      prev = performance.now();
      schedule();
    };

    const localPoint = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      velLon = 0;
      velLat = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      lastMove = performance.now();
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
      kick();
    };

    const onMove = (e: PointerEvent) => {
      hover = e.pointerType === "mouse" ? localPoint(e) : null;
      if (dragging) {
        const { R } = geometry();
        const now = performance.now();
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const dLon = -(dx / R) / DEG;
        const dLat = (dy / R) / DEG;
        lon0 += dLon;
        lat0 += dLat;
        const dt = Math.max(1, now - lastMove);
        velLon = dLon / dt;
        velLat = dLat / dt;
        lastX = e.clientX;
        lastY = e.clientY;
        lastMove = now;
      }
      if (reduce && !dragging) draw(performance.now());
      kick();
    };

    const onUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      idleUntil = performance.now() + 1800;
      if (performance.now() - lastMove > 80) {
        velLon = 0;
        velLat = 0;
      }
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      canvas.style.cursor = "";
      kick();
    };

    const onLeave = () => {
      hover = null;
      if (reduce) draw(performance.now());
    };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) kick();
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    const onVisibility = () => {
      if (!document.hidden) kick();
    };
    document.addEventListener("visibilitychange", onVisibility);

    resize();
    kick();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [arcs, initialLat, initialLon, readoutId]);

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full cursor-grab touch-pan-y select-none"
      />
      {showReadout && !readoutId && (
        <div aria-hidden="true" className={cn("t-label tabular pointer-events-none", readoutClassName)}>
          <span className="dot dot-live mr-3 align-middle" />
          <span ref={latRef}>00.00°N</span>
          <span className="mx-2 text-fg2">/</span>
          <span ref={lonRef}>000.00°E</span>
        </div>
      )}
    </div>
  );
}
