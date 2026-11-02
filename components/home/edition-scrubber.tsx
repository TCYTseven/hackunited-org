"use client";

import {
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CountUp from "@/components/count-up";
import PostcardStack from "./postcard-stack";
import { hackathons, type HackathonStat } from "./data";

const participants = hackathons.map((h) => parseInt(h.stats[0].value.replace(/\D/g, ""), 10));
const peak = Math.max(...participants);
const shortDate = (date: string) => {
  const [month, year] = date.split(" ");
  return `${month.slice(0, 3)} ${year}`;
};

function Stat({ stat }: { stat: HackathonStat }) {
  return (
    <div className="hu-ed-stat">
      <dt>{stat.label}</dt>
      <dd>
        <CountUp value={stat.value} duration={900} />
      </dd>
    </div>
  );
}

/**
 * The hackathon archive. The track along the top is a bar chart of turnout
 * for each edition; click, drag, swipe, or use arrow keys to move between editions.
 */
export default function EditionScrubber() {
  const [active, setActive] = useState(hackathons.length - 1);
  const [direction, setDirection] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const select = (index: number) => {
    const next = Math.max(0, Math.min(hackathons.length - 1, index));
    if (next === active) return;
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  const indexAt = (clientX: number) => {
    const box = trackRef.current!.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(0.9999, (clientX - box.left) / box.width));
    return { index: Math.floor(ratio * hackathons.length), ratio };
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const { index } = indexAt(e.clientX);
    draggingRef.current = true;
    select(index);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const { index } = indexAt(e.clientX);
    select(index);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowLeft: active - 1,
      ArrowDown: active - 1,
      ArrowRight: active + 1,
      ArrowUp: active + 1,
      Home: 0,
      End: hackathons.length - 1,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    select(moves[e.key]);
  };

  const onSwipeStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    swipeStart.current = { x: t.clientX, y: t.clientY };
  };

  const onSwipeEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    select(active + (dx < 0 ? 1 : -1));
  };

  const h = hackathons[active];
  const stats = [...h.stats, ...(h.moreStats ?? [])];

  return (
    <div className="hu-ed">
      <div className="hu-ed-chart">
        <p className="hu-ed-caption hu-mono" aria-hidden="true">
          <span>Participants per edition</span>
          <span>Peak {peak.toLocaleString("en-US")}+</span>
        </p>

        <div
          ref={trackRef}
          className="hu-ed-track"
          role="slider"
          tabIndex={0}
          aria-label="Choose a United Hacks edition"
          aria-valuemin={1}
          aria-valuemax={hackathons.length}
          aria-valuenow={active + 1}
          aria-valuetext={`${h.title}, ${h.date}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={onKeyDown}
        >
          {hackathons.map((ed, i) => (
            <div key={ed.value} className="hu-ed-col" data-active={i === active || undefined}>
              <div className="hu-ed-bar-wrap">
                <span className="hu-ed-count">{ed.stats[0].value}</span>
                <span
                  className="hu-ed-bar"
                  style={{ height: `${Math.max(10, (participants[i] / peak) * 100)}%` }}
                />
              </div>
              <div className="hu-ed-tick">
                <strong>{ed.label}</strong>
                <span>{shortDate(ed.date)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div onTouchStart={onSwipeStart} onTouchEnd={onSwipeEnd} aria-live="polite">
        <div className="hu-ed-card">
          <article
            key={h.value}
            className={`hu-ed-info animate-in fade-in-0 duration-500 motion-reduce:animate-none ${
              direction > 0 ? "slide-in-from-right-6" : "slide-in-from-left-6"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="hu-chip">
                <span className="hu-ed-dot" />
                {h.date}
              </span>
              <span className="hu-chip">{h.theme}</span>
            </div>
            <h3 className="hu-ed-title">{h.title}</h3>
            <p className="hu-body max-w-xl">{h.description}</p>

            <dl className="hu-ed-stats">
              {stats.map((stat) => (
                <Stat key={stat.label} stat={stat} />
              ))}
            </dl>

            {h.feature && (
              <p className="hu-ed-feature">
                <strong>{h.feature.title}</strong>
                <span>{h.feature.detail}</span>
              </p>
            )}

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a href={h.recap} target="_blank" rel="noopener noreferrer" className="hu-btn">
                Article Recap
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={h.devpost} target="_blank" rel="noopener noreferrer" className="hu-btn hu-btn-ghost">
                Devpost
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          <div className="hu-ed-figure">
            <PostcardStack editions={hackathons} active={active} direction={direction} />
          </div>
        </div>
      </div>
    </div>
  );
}
