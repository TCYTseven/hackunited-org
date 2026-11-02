"use client";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import BoardingPass from "./boarding-pass";
import { nextStop, route, routeName } from "./route";

/** End-of-page hand-off to the next page on the route. */
export default function NextStop() {
  const pathname = usePathname() || "/";
  const next = nextStop(pathname);
  if (!next) return null;

  const current = route.findIndex((r) => r.path === pathname);
  const nextIndex = route.findIndex((r) => r.path === next.path);

  return (
    <section className="hu-next" aria-label="Next stop">
      <div className="hu-wrap">
        <ol className="hu-next-line" aria-hidden="true">
          {route.map((r, i) => (
            <li
              key={r.path}
              data-state={i === current ? "here" : r.path === next.path ? "next" : i < current ? "past" : "ahead"}
            >
              <span className="hu-next-dot" />
              <span className="hu-next-name hu-mono">{r.name}</span>
            </li>
          ))}
        </ol>

        <BoardingPass
          href={next.path}
          label="Boarding pass"
          code={`Hack United · Stop ${String(nextIndex + 1).padStart(2, "0")}/${String(route.length).padStart(2, "0")}`}
          from={routeName(pathname) || "Here"}
          to={next.name}
          toNote={next.blurb}
          stub={
            <>
              <span className="hu-pass-stub-label hu-mono">Next stop</span>
              <span className="hu-pass-stub-cta">
                Board
                <ArrowRight className="h-5 w-5" />
              </span>
            </>
          }
        />
      </div>
    </section>
  );
}
