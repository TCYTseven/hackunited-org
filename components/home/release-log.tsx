"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Stat = { value: string; label: string };

type Hackathon = {
  id: string;
  tab: string;
  title: string;
  date: string;
  theme: string;
  description: string;
  stats: Stat[];
  feature?: { title: string; detail: string };
  image: string;
  alt: string;
  badge: string;
  caption: string;
  recap: string;
  devpost: string;
};

const HACKATHONS: Hackathon[] = [
  {
    id: "v1",
    tab: "V1",
    title: "United Hacks V1",
    date: "August 2023",
    theme: "Mental Health Theme",
    description:
      "Our inaugural hackathon focused on mental health solutions, bringing together 400+ participants to create impactful projects with industry professional judges.",
    stats: [
      { value: "400+", label: "Participants" },
      { value: "50+", label: "Projects" },
      { value: "$5,000+", label: "Prize Pool" },
      { value: "10+", label: "Sponsors" },
      { value: "100+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    image: "/images/v1.png",
    alt: "United Hacks V1 winning projects",
    badge: "Mental Health",
    caption: "Inaugural hackathon showcasing mental health innovations",
    recap:
      "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology",
    devpost: "https://unitedhacks23.devpost.com/",
  },
  {
    id: "v2",
    tab: "V2",
    title: "United Hacks V2",
    date: "January 2024",
    theme: "Resolutions Theme",
    description:
      "Our second hackathon focused on New Year resolutions and positive change, featuring 400+ participants and the largest prize pool to date with industry professional & student judges.",
    stats: [
      { value: "400+", label: "Participants" },
      { value: "75+", label: "Projects" },
      { value: "$15,000+", label: "Prize Pool" },
      { value: "15+", label: "Sponsors" },
      { value: "100+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    image: "/images/v2.png",
    alt: "United Hacks V2 winning projects",
    badge: "Resolutions",
    caption: "Outstanding winning projects from our largest prize pool",
    recap: "https://blog.hackunited.org/united-hacks-v2-hackathon-recap",
    devpost: "https://unitedhacksv2.devpost.com/",
  },
  {
    id: "v3",
    tab: "V3",
    title: "United Hacks V3",
    date: "September 2024",
    theme: "Communication Theme",
    description:
      'Our third hackathon introduced "Mini-Hacks" with a focus on communication solutions, featuring 150+ participants and industry professional judges in a more intimate setting.',
    stats: [
      { value: "150+", label: "Participants" },
      { value: "$2,000+", label: "Prize Pool" },
      { value: "75+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    feature: {
      title: "Mini-Hacks Format",
      detail: "Smaller, focused hackathon experience",
    },
    image: "/images/v3.png",
    alt: "United Hacks V3 winning projects",
    badge: "Communication",
    caption: "Mini-Hacks showcasing innovative winning projects",
    recap: "https://blog.hackunited.org/united-hacks-v3-recap",
    devpost: "https://unitedhacksv3.devpost.com/",
  },
  {
    id: "v4",
    tab: "V4",
    title: "United Hacks V4",
    date: "January 2025",
    theme: "Social Impact Theme",
    description:
      "Our most recent hackathon focused on social impact solutions, bringing together 400+ participants to tackle real-world challenges with industry professional judges.",
    stats: [
      { value: "400+", label: "Participants" },
      { value: "80+", label: "Projects" },
      { value: "$10,000+", label: "Prize Pool" },
      { value: "10+", label: "Sponsors" },
      { value: "100+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    image: "/images/v4.png",
    alt: "United Hacks V4 winning projects",
    badge: "Social Impact",
    caption: "Featuring winning projects from our latest hackathon",
    recap:
      "https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact",
    devpost: "https://unitedhacksv4.devpost.com/",
  },
  {
    id: "v5",
    tab: "V5",
    title: "United Hacks V5",
    date: "July 2025",
    theme: "Entertainment Theme",
    description:
      "Our fifth hackathon focused on entertainment solutions, bringing together 1250+ participants to tackle real-world challenges with industry professional judges.",
    stats: [
      { value: "1250+", label: "Participants" },
      { value: "200+", label: "Projects" },
      { value: "$50,000+", label: "Prize Pool" },
      { value: "10+", label: "Sponsors" },
      { value: "250+", label: "Workshop Attendees" },
      { value: "8", label: "Workshops" },
    ],
    image: "/images/imagecoo.png",
    alt: "United Hacks V5 winning projects",
    badge: "Entertainment",
    caption: "Featuring winning projects from our entertainment themed hackathon.",
    recap: "https://blog.hackunited.org/united-hacks-v5-recap",
    devpost: "https://unitedhacksv5.devpost.com/",
  },
  {
    id: "v6",
    tab: "V6",
    title: "United Hacks V6",
    date: "January 2026",
    theme: "Human Interaction Theme",
    description:
      "Our sixth hackathon focused on solutions embracing human interaction, bringing together 1200+ participants to tackle real-world challenges, while connecting in our Discord community of 3000+ programmers.",
    stats: [
      { value: "1200+", label: "Participants" },
      { value: "160+", label: "Projects" },
      { value: "$20,000+", label: "Prize Pool" },
      { value: "11+", label: "Sponsors" },
      { value: "200+", label: "Workshop Attendees" },
      { value: "6", label: "Workshops" },
    ],
    image: "/images/v6.webp",
    alt: "United Hacks V6 winning projects",
    badge: "Human Interaction",
    caption: "Featuring winning projects from our human interaction themed hackathon.",
    recap: "https://blog.hackunited.org/united-hacks-v6-hackathon-recap",
    devpost: "https://unitedhacksv6.devpost.com/",
  },
];

const participants = (h: Hackathon) =>
  h.stats.find((s) => s.label === "Participants")?.value ?? "0";

const toNumber = (value: string) => parseInt(value.replace(/[^\d]/g, ""), 10) || 0;

const PEAK = Math.max(...HACKATHONS.map((h) => toNumber(participants(h))));

export default function ReleaseLog() {
  const [active, setActive] = useState("v6");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const preloaded = useRef(new Set<string>());
  const current = HACKATHONS.find((h) => h.id === active) ?? HACKATHONS[HACKATHONS.length - 1];

  const preload = (src: string) => {
    if (preloaded.current.has(src)) return;
    preloaded.current.add(src);
    const img = new window.Image();
    img.src = src;
  };

  const select = (index: number) => {
    const next = HACKATHONS[(index + HACKATHONS.length) % HACKATHONS.length];
    setActive(next.id);
    tabs.current[HACKATHONS.indexOf(next)]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(0);
    } else if (e.key === "End") {
      e.preventDefault();
      select(HACKATHONS.length - 1);
    }
  };

  return (
    <div className="rl">
      <div className="rl-chart-wrap" data-reveal>
        <p className="t-label rl-axis text-fg2">Participants</p>
        <div role="tablist" aria-label="Previous hackathons" className="rl-chart">
          {HACKATHONS.map((h, i) => {
            const selected = h.id === active;
            const value = participants(h);
            const style = {
              "--h": Math.max(0.06, toNumber(value) / PEAK),
              "--i": i,
            } as CSSProperties;
            return (
              <button
                key={h.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`hackathon-tab-${h.id}`}
                aria-selected={selected}
                aria-controls={`hackathon-panel-${h.id}`}
                tabIndex={selected ? 0 : -1}
                className={cn("rl-bar", selected && "is-active")}
                style={style}
                onClick={() => setActive(h.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                onPointerEnter={() => preload(h.image)}
                onFocus={() => preload(h.image)}
              >
                <span className="rl-bar-plot" aria-hidden="true">
                  <span className="rl-bar-value t-label tabular">{value}</span>
                  <span className="rl-bar-fill" />
                </span>
                <span className="rl-bar-tab">{h.tab}</span>
                <span className="rl-bar-date t-label">{h.date}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={current.id}
        role="tabpanel"
        id={`hackathon-panel-${current.id}`}
        aria-labelledby={`hackathon-tab-${current.id}`}
        className="rl-panel"
        tabIndex={0}
      >
        <figure className="rl-figure">
          <div className="rl-image">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="rl-caption">
            <span className="chip">{current.badge}</span>
            <span className="t-label text-fg2">{current.date}</span>
            <span className="rl-caption-text">{current.caption}</span>
          </figcaption>
        </figure>

        <div className="rl-info">
          <p className="t-label flex flex-wrap items-center gap-x-3 gap-y-1 text-fg2">
            <span className="text-iris">{current.date}</span>
            <span aria-hidden="true">/</span>
            <span>{current.theme}</span>
          </p>
          <h3 className="t-title mt-4">{current.title}</h3>
          <p className="rl-desc">{current.description}</p>

          <dl className="rl-stats">
            {current.stats.map((s) => (
              <div key={s.label} className="rl-stat">
                <dt className="t-label text-fg2">{s.label}</dt>
                <dd className="rl-stat-value tabular">{s.value}</dd>
              </div>
            ))}
            {current.feature && (
              <div className="rl-stat rl-feature">
                <dt className="rl-feature-title">{current.feature.title}</dt>
                <dd className="t-label text-fg2">{current.feature.detail}</dd>
              </div>
            )}
          </dl>

          <div className="rl-actions">
            <a href={current.recap} target="_blank" rel="noopener noreferrer" className="btn">
              Article Recap
              <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={current.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              DEVPOST
              <ArrowUpRight className="btn-arrow btn-arrow-up h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
