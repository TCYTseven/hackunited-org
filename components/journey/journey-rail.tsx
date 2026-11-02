"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { reducedMotion } from "@/lib/motion";

type Stop = { label: string; el: HTMLElement };

/**
 * Transit-style route map for the current page. Every element marked
 * [data-stop="Label"] becomes a station; the line fills as the reader
 * travels down the page, and stations jump to their section.
 *
 * It also publishes overall page progress as --hu-route on <html>, which
 * the header's progress line reads on every screen size.
 */
export default function JourneyRail() {
  const pathname = usePathname();
  const [stops, setStops] = useState<Stop[]>([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-stop]"));
    setStops(els.map((el) => ({ label: el.dataset.stop || "", el })));
    setActive(-1);

    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const line = vh * 0.45;
      const tops = els.map((el) => el.getBoundingClientRect().top);

      let index = -1;
      tops.forEach((top, i) => {
        if (top <= line) index = i;
      });

      // Fill runs station to station, easing between them as you scroll.
      let fill = 0;
      if (els.length > 1 && index >= 0) {
        const next = tops[index + 1];
        const part = next !== undefined ? Math.min(1, Math.max(0, (line - tops[index]) / (next - tops[index]))) : 0;
        fill = Math.min(1, (index + part) / (els.length - 1));
      }

      const page = window.scrollY / Math.max(1, root.scrollHeight - vh);
      root.style.setProperty("--hu-rail", fill.toFixed(4));
      root.style.setProperty("--hu-route", Math.min(1, page).toFixed(4));
      setActive(index);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (stops.length < 2) return null;

  const go = (el: HTMLElement) => {
    const reduce = reducedMotion();
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <nav className="hu-rail" aria-label="Sections on this page" data-visible={active >= 0 || undefined}>
      <span className="hu-rail-track" aria-hidden="true">
        <span className="hu-rail-fill" />
      </span>
      <ol>
        {stops.map((stop, i) => (
          <li key={`${stop.label}-${i}`} data-state={i < active ? "past" : i === active ? "here" : "ahead"}>
            <button
              type="button"
              onClick={() => go(stop.el)}
              aria-current={i === active ? "step" : undefined}
              tabIndex={active >= 0 ? 0 : -1}
            >
              <span className="hu-rail-dot" aria-hidden="true" />
              <span className="hu-rail-label">
                <span className="hu-mono">{String(i + 1).padStart(2, "0")}</span>
                {stop.label}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
