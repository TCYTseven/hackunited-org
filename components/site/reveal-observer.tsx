"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not(.is-in), .odo:not(.is-on)";

/**
 * One IntersectionObserver for the whole site. Anything marked with
 * `data-reveal` (or an odometer) gets `.is-in` / `.is-on` the first time it
 * scrolls into view. A MutationObserver picks up content mounted later, e.g.
 * after a client-side route change.
 */
export default function RevealObserver() {
  useEffect(() => {
    const show = (el: Element) =>
      el.classList.add(el.classList.contains("odo") ? "is-on" : "is-in");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(SELECTOR).forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = (root: ParentNode) => {
      root.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));
    };

    scan(document);

    const mo = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTOR)) io.observe(node);
          scan(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
