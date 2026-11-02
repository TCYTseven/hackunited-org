"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export type WordSegment = string | { text: string; mark: "a" | "b" };

/**
 * A statement with a few phrases picked out by a highlighter stroke. The
 * copy is plain, readable text from the start; only the strokes animate,
 * sweeping in once, one after another, when the paragraph comes into view.
 */
export default function ScrollWords({ segments, className = "" }: { segments: WordSegment[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = gsap.matchMedia();
    media.add("all", () => {
      if (reducedMotion()) return;
      gsap.fromTo(
        el.querySelectorAll(".hu-mark-ink"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.inOut",
          stagger: 0.18,
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        }
      );
    });

    return () => media.revert();
  }, [segments]);

  return (
    <p ref={ref} className={`hu-scroll-words ${className}`}>
      {segments.map((seg, i) =>
        typeof seg === "string" ? (
          <span key={i}>{seg} </span>
        ) : (
          <span key={i}>
            <span className="hu-mark" data-mark={seg.mark}>
              <span className="hu-mark-ink" aria-hidden="true" />
              {seg.text}
            </span>{" "}
          </span>
        )
      )}
    </p>
  );
}
