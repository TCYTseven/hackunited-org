"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MOTION, reducedMotion } from "@/lib/motion";
import type { Hackathon } from "./data";

function Postcard({ h, leaving = false }: { h: Hackathon; leaving?: boolean }) {
  return (
    <figure className={`hu-postcard${leaving ? " is-leaving" : ""}`} aria-hidden={leaving || undefined}>
      <div className="hu-postcard-photo">
        <Image src={h.image} alt={leaving ? "" : h.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
      </div>
      <span className="hu-postcard-stamp" aria-hidden="true">
        <strong>{h.label}</strong>
        <small>{h.badge}</small>
      </span>
      <figcaption>
        <span className="hu-postcard-note">{h.caption}</span>
        <span className="hu-postcard-meta hu-mono">
          {h.title} · {h.theme}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Past editions as a postcard. Changing edition slides the current card a
 * short way off in the direction of travel as the next one fades in.
 */
export default function PostcardStack({
  editions,
  active,
  direction,
}: {
  editions: Hackathon[];
  active: number;
  direction: number;
}) {
  const [leaving, setLeaving] = useState<number | null>(null);
  const previous = useRef(active);
  const stackRef = useRef<HTMLDivElement>(null);

  if (previous.current !== active) {
    // Render the outgoing card on top for one exit animation.
    setLeaving(previous.current);
    previous.current = active;
  }

  useLayoutEffect(() => {
    const stack = stackRef.current;
    if (leaving === null || !stack) return;
    const out = stack.querySelector<HTMLElement>(".hu-postcard.is-leaving");
    const incoming = stack.querySelector<HTMLElement>(".hu-postcard:not(.is-leaving)");
    if (reducedMotion() || !out || !incoming) {
      setLeaving(null);
      return;
    }
    const tl = gsap.timeline({ onComplete: () => setLeaving(null) });
    tl.to(out, {
      xPercent: -direction * 60,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }).from(incoming, { opacity: 0, duration: MOTION.duration, ease: MOTION.ease }, 0.1);
    return () => {
      tl.kill();
    };
  }, [leaving, direction]);

  return (
    <div ref={stackRef} className="hu-postcards">
      <span className="hu-postcard-back" aria-hidden="true" />
      <Postcard key={editions[active].value} h={editions[active]} />
      {leaving !== null && leaving !== active && <Postcard key={`out-${editions[leaving].value}`} h={editions[leaving]} leaving />}
    </div>
  );
}
