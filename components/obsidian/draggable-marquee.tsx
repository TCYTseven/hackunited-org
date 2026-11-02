"use client";

/*
 * Adapted from ObsidianUI's Draggable Marquee (MIT, see ./LICENSE).
 * Changes: wraps on the measured loop length (distance between the first
 * item of each copy) instead of a fudge factor, makes the duplicate copies
 * inert, keeps throw momentum after release, and lets page scroll velocity
 * push the strip along.
 */

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import "./draggable-marquee.css";
import { reducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") gsap.registerPlugin(Draggable);

export default function DraggableMarquee<T>({
  items,
  renderItem,
  getKey,
  speed = 0.6,
  reverse = false,
  repeatCount = 3,
  className = "",
  label = "Scrolling strip. Drag it, or use the left and right arrow keys.",
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
  /** Pixels per frame at 60fps. */
  speed?: number;
  reverse?: boolean;
  repeatCount?: number;
  className?: string;
  label?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track || !items.length) return;

    const media = gsap.matchMedia();
    media.add("all", () => {
      if (reducedMotion()) return;
      const direction = reverse ? 1 : -1;
      let period = 0;
      let x = 0;
      let throwVelocity = 0;
      let scrollBoost = 0;
      let dragging = false;
      let lastDragX = 0;
      let lastDragTime = 0;
      let lastScrollY = window.scrollY;
      let wrap = (value: number) => value;
      const setX = gsap.quickSetter(track, "x", "px") as (value: number) => void;

      const measure = () => {
        const copies = track.querySelectorAll<HTMLElement>("[data-copy-start]");
        if (copies.length < 2) return;
        period = copies[1].offsetLeft - copies[0].offsetLeft;
        wrap = gsap.utils.wrap(-period, 0);
        x = wrap(x);
        setX(x);
      };

      const tick = (_time: number, deltaTime: number) => {
        if (!period) return;
        const frames = deltaTime / (1000 / 60);
        if (!dragging) {
          x += (direction * speed + throwVelocity + direction * scrollBoost) * frames;
          throwVelocity *= Math.pow(0.95, frames);
          scrollBoost *= Math.pow(0.9, frames);
          if (Math.abs(throwVelocity) < 0.01) throwVelocity = 0;
        }
        x = wrap(x);
        setX(x);
      };

      const drag = Draggable.create(track, {
        type: "x",
        allowContextMenu: true,
        dragClickables: true,
        onPress() {
          dragging = true;
          throwVelocity = 0;
          this.x = x;
          lastDragX = x;
          lastDragTime = performance.now();
        },
        onDrag() {
          const now = performance.now();
          const dt = now - lastDragTime;
          if (dt > 0) {
            throwVelocity = gsap.utils.clamp(-40, 40, ((this.x - lastDragX) / dt) * 16.7 * 1.6);
          }
          lastDragX = this.x;
          lastDragTime = now;
          x = wrap(this.x);
          setX(x);
          this.x = x;
          lastDragX = x;
        },
        onRelease() {
          dragging = false;
        },
      })[0];

      const onScroll = () => {
        const y = window.scrollY;
        scrollBoost = Math.min(18, Math.abs(y - lastScrollY) * 0.25);
        lastScrollY = y;
      };

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        throwVelocity = event.key === "ArrowLeft" ? 14 : -14;
      };

      const resize = new ResizeObserver(measure);
      resize.observe(track);
      track.querySelectorAll("img").forEach((img) => {
        if (!img.complete) img.addEventListener("load", measure, { once: true });
      });
      root.addEventListener("keydown", onKeyDown);
      window.addEventListener("scroll", onScroll, { passive: true });
      measure();
      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
        resize.disconnect();
        root.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("scroll", onScroll);
        drag.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    });

    return () => media.revert();
  }, [items, speed, reverse, repeatCount]);

  return (
    <div ref={rootRef} className={`obs-marquee ${className}`} tabIndex={0} role="region" aria-label={label}>
      <div ref={trackRef} className="obs-marquee-track">
        {Array.from({ length: repeatCount }).map((_, copy) => (
          <div
            key={copy}
            className="obs-marquee-copy"
            data-copy-start=""
            aria-hidden={copy > 0 || undefined}
            inert={copy > 0 || undefined}
          >
            {items.map((item, i) => (
              <div key={getKey(item, i)} className="obs-marquee-item">
                {renderItem(item, i)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
