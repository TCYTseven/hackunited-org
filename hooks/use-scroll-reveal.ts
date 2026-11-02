"use client";

import { useEffect, type RefObject } from "react";
import { reducedMotion } from "@/lib/motion";

/**
 * Fades `[data-reveal]` elements inside `root` up into place the first time
 * they scroll into view. Anything already on screen when the page mounts is
 * shown straight away, so nothing flashes. Server-rendered HTML stays fully
 * visible: content is only hidden once this hook has run.
 */
export function useScrollReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = root.current;
    if (!container) return;
    if (reducedMotion()) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
    const viewport = window.innerHeight;
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewport * 0.92 && rect.bottom > 0) el.classList.add("is-shown");
    }
    container.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    for (const el of elements) {
      if (!el.classList.contains("is-shown")) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [root]);
}
