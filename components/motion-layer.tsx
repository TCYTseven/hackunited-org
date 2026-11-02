"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION, reducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide scroll motion, re-applied on every route. Kept deliberately quiet
 * so the content, not the motion, is what the reader notices:
 *  - [data-split] headings fade up as one piece.
 *  - [data-drop] cards fade up a short way as they enter.
 * Nothing runs for reduced-motion users, and transforms are cleared after
 * each animation so they never fight the cards' own hover lift.
 */
export default function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add("all", () => {
      if (reducedMotion()) return;

      const entrance = (targets: HTMLElement[], start: string, y: number) => {
        gsap.set(targets, { opacity: 0, y });
        return ScrollTrigger.batch(targets, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(batch, { opacity: 0, y }, {
              opacity: 1,
              y: 0,
              duration: MOTION.duration,
              ease: MOTION.ease,
              stagger: 0.06,
              clearProps: "transform,opacity",
            }),
        });
      };

      const headings = gsap.utils.toArray<HTMLElement>("[data-split]");
      const drops = gsap.utils.toArray<HTMLElement>("[data-drop]");
      const triggers = [...entrance(headings, "top 90%", 16), ...entrance(drops, "top 92%", 20)];

      // Layout can shift as fonts and images load.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const timer = window.setTimeout(refresh, 600);

      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("load", refresh);
        triggers.forEach((t) => t.kill());
        gsap.set([...headings, ...drops], { clearProps: "transform,opacity" });
      };
    });

    return () => media.revert();
  }, [pathname]);

  return null;
}
