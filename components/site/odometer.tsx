import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const DIGITS = "0123456789".split("");

/**
 * Rolls each digit of a figure like "25,000+" into place the first time it is
 * scrolled into view (RevealObserver adds `.is-on`). Punctuation stays put.
 */
export default function Odometer({
  value,
  className,
  stagger = 70,
}: {
  value: string;
  className?: string;
  stagger?: number;
}) {
  let digitIndex = 0;

  return (
    <span className={cn("odo", className)}>
      <span className="sr-only">{value}</span>
      {value.split("").map((ch, i) => {
        if (!/\d/.test(ch)) {
          return (
            <span key={i} className="odo-char" aria-hidden="true">
              {ch}
            </span>
          );
        }
        const style = {
          "--odo-to": ch,
          "--odo-delay": `${digitIndex++ * stagger}ms`,
        } as CSSProperties;
        return (
          <span key={i} className="odo-reel" aria-hidden="true">
            <span className="odo-strip" style={style}>
              {DIGITS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
