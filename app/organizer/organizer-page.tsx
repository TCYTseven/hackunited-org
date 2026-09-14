"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, Globe } from "lucide-react";
import "../page.css";

const APPLY_URL = "https://forms.gle/qjCii5tD5ShiL5mF9";

// Applications close at 11:59 PM Eastern on September 28, 2026.
const DEADLINE = new Date("2026-09-29T03:59:59Z");
const DEADLINE_LABEL = "September 28, 2026";

const teams = [
  {
    index: "01",
    name: "Marketing",
    description:
      "Build the United Hacks brand, create content, grow our reach, work on partnerships and help bring more hackers to V8.",
  },
  {
    index: "02",
    name: "R&D",
    description:
      "Experiment with new ideas, technology, and experiences that can make United Hacks better. Help research and build new features, tools, and initiatives for V8.",
  },
  {
    index: "03",
    name: "Logistics & Operations",
    description:
      "Help make the event actually happen. Work on scheduling, coordination, event logistics, resources, communication, and everything needed to keep V8 running smoothly.",
  },
  {
    index: "04",
    name: "Generalists",
    description:
      "Not sure where you fit? Join as a generalist. Work across different parts of United Hacks, take on high-impact problems, and help wherever the team needs you most.",
  },
];

const steps = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit the organizer application form and tell us a little about yourself, your experience, and why you want to join United Hacks.",
  },
  {
    number: "02",
    title: "15-Minute Behavioral Interview",
    description:
      "Selected applicants will be invited to a short 15-minute interview. We want to learn more about you, how you work with others, and what you could bring to the team.",
  },
  {
    number: "03",
    title: "Decision",
    description:
      "After your interview, our team will review your application and send you a final decision.",
  },
];

const styles = `
  @keyframes orgFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes orgGlobeIn {
    from { opacity: 0; transform: translate(6%, -50%) scale(0.96); }
    to { opacity: 1; transform: translate(0, -50%) scale(1); }
  }

  @keyframes orgDrift {
    0%, 100% { transform: translate(0, -50%); }
    50% { transform: translate(0, calc(-50% - 12px)); }
  }

  .org-in-1 { animation: orgFadeUp 0.8s ease-out 0.05s forwards; opacity: 0; }
  .org-in-2 { animation: orgFadeUp 0.8s ease-out 0.2s forwards; opacity: 0; }
  .org-in-3 { animation: orgFadeUp 0.8s ease-out 0.4s forwards; opacity: 0; }
  .org-in-4 { animation: orgFadeUp 0.8s ease-out 0.6s forwards; opacity: 0; }
  .org-in-5 { animation: orgFadeUp 0.8s ease-out 0.8s forwards; opacity: 0; }

  .org-globe {
    animation: orgGlobeIn 1.4s ease-out forwards, orgDrift 10s ease-in-out 1.4s infinite;
    opacity: 0;
  }

  .org-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    transition-delay: var(--org-delay, 0ms);
  }

  .org-reveal.org-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .org-pill {
    background: linear-gradient(180deg, rgba(45, 24, 92, 0.9), rgba(24, 12, 54, 0.9));
    border: 1px solid rgba(157, 123, 255, 0.7);
    box-shadow: 0 0 0 1px rgba(157, 123, 255, 0.12), 0 0 44px rgba(124, 92, 255, 0.35);
    transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  }

  .org-pill:hover {
    transform: translateY(-2px);
    border-color: rgba(190, 166, 255, 0.95);
    box-shadow: 0 0 0 1px rgba(157, 123, 255, 0.2), 0 0 64px rgba(124, 92, 255, 0.55);
  }

  .org-pill .org-pill-arrow {
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  .org-pill:hover .org-pill-arrow {
    transform: translateX(3px);
    background-color: #1a0f3a;
  }

  .org-panel {
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  }

  .org-panel:hover {
    transform: translateY(-3px);
    border-color: rgba(157, 123, 255, 0.8);
    box-shadow: 0 0 40px rgba(124, 92, 255, 0.22);
  }

  .org-step-num {
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }

  .org-step:hover .org-step-num {
    color: #c3adff;
    text-shadow: 0 0 28px rgba(157, 123, 255, 0.6);
  }

  @media (prefers-reduced-motion: reduce) {
    .org-in-1, .org-in-2, .org-in-3, .org-in-4, .org-in-5, .org-globe {
      animation: none;
      opacity: 1;
    }
    .org-globe { transform: translate(0, -50%); }
    .org-reveal { opacity: 1; transform: none; transition: none; }
  }
`;

function useDeadline() {
  const [state, setState] = useState<{ daysLeft: number; closed: boolean } | null>(
    null
  );

  useEffect(() => {
    const update = () => {
      const diff = DEADLINE.getTime() - Date.now();
      setState({
        daysLeft: Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))),
        closed: diff <= 0,
      });
    };
    update();
    const id = setInterval(update, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}

/* Orthographic wireframe globe drawn with ellipses. */
function WireGlobe({ className = "" }: { className?: string }) {
  const R = 400;
  const tilt = 0.22;
  const parallels = [-60, -40, -20, 0, 20, 40, 60].map((lat) => {
    const rad = (lat * Math.PI) / 180;
    return { cy: R * Math.sin(rad), rx: R * Math.cos(rad), ry: R * Math.cos(rad) * tilt };
  });
  const meridians = [15, 40, 65, 90, 115, 140, 165].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { rx: Math.max(R * Math.abs(Math.cos(rad)), 1) };
  });

  return (
    <svg
      viewBox="-420 -420 840 840"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <radialGradient id="org-globe-fill" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#5b3df5" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#2a1670" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0a0618" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="org-globe-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c3adff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#7c5cff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle r={R} fill="url(#org-globe-fill)" />
      <g stroke="#9d7bff" strokeOpacity="0.35" strokeWidth="1">
        {parallels.map((p, i) => (
          <ellipse key={`p${i}`} cx="0" cy={p.cy} rx={p.rx} ry={p.ry} />
        ))}
        {meridians.map((m, i) => (
          <ellipse key={`m${i}`} cx="0" cy="0" rx={m.rx} ry={R} />
        ))}
      </g>
      <circle r={R} stroke="url(#org-globe-rim)" strokeWidth="2" />
    </svg>
  );
}

function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 0v28M0 14h28" stroke="#9d7bff" strokeOpacity="0.7" strokeWidth="1" />
    </svg>
  );
}

function PillCTA({
  children,
  closed,
  className = "",
  textClass = "text-lg sm:text-xl",
}: {
  children: React.ReactNode;
  closed: boolean;
  className?: string;
  textClass?: string;
}) {
  if (closed) {
    return (
      <span
        className={`inline-flex items-center justify-between gap-6 rounded-full border border-white/15 bg-white/[0.03] pl-7 pr-2 py-2 text-lg font-semibold text-gray-500 ${className}`}
        aria-disabled="true"
      >
        Applications Closed
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40">
          <ArrowRight className="h-5 w-5" />
        </span>
      </span>
    );
  }

  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`org-pill inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-2 py-2 ${textClass} font-semibold text-white ${className}`}
    >
      {children}
      <span className="org-pill-arrow inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#9d7bff]/50 bg-[#0b0618]">
        <ArrowRight className="h-5 w-5" />
      </span>
    </a>
  );
}

function SectionLabel({ index, text }: { index: string; text: string }) {
  return (
    <div className="flex items-center gap-4 text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#c3adff]/80">
      <span>{index}</span>
      <span className="h-px w-8 bg-[#9d7bff]/50" />
      <span>{text}</span>
    </div>
  );
}

export default function OrganizerPage() {
  const deadline = useDeadline();
  const closed = deadline?.closed ?? false;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".org-reveal")
    );
    if (elements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("org-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("org-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const daysLeft =
    deadline && !closed
      ? deadline.daysLeft === 0
        ? "Last day to apply"
        : `${deadline.daysLeft} day${deadline.daysLeft === 1 ? "" : "s"} left`
      : null;

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <main className="bg-[#07040f] text-white overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_88%_50%,rgba(94,58,230,0.42),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_15%_90%,rgba(60,30,140,0.25),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(157,123,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(157,123,255,0.5)_1px,transparent_1px)] [background-size:96px_96px]" />

          <WireGlobe className="org-globe pointer-events-none absolute top-1/2 right-[-38%] sm:right-[-24%] lg:right-[-16%] xl:right-[-12%] w-[520px] sm:w-[680px] lg:w-[820px] xl:w-[880px] opacity-60 lg:opacity-100" />

          <Crosshair className="absolute top-32 left-[64%] hidden md:block" />
          <Crosshair className="absolute bottom-24 left-6 sm:left-10 hidden md:block" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
            <div className="org-in-1 flex items-center gap-5 pt-8 sm:pt-10">
              <span className="flex items-center gap-3 text-[11px] sm:text-xs tracking-[0.4em] uppercase text-white/85">
                <Globe className="h-6 w-6 text-white/80" strokeWidth={1.25} />
                United Hacks
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#9d7bff]/60 via-[#9d7bff]/30 to-transparent" />
            </div>

            <div className="pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 max-w-4xl">
              <h1 className="org-in-2 font-black uppercase leading-[0.92] tracking-[-0.03em] text-[48px] sm:text-[76px] lg:text-[92px] xl:text-[104px] text-white">
                UH<span className="text-[#9d7bff]">V8</span>
                <br />
                Organizer
                <br />
                <span className="text-[#9d7bff]">Applications</span> Open
              </h1>

              <p className="org-in-3 mt-8 sm:mt-10 max-w-xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
                Help build the next United Hacks. Join the team behind V8 and
                work alongside other students to create an unforgettable
                hackathon experience.
              </p>

              <div className="org-in-4 mt-10 sm:mt-12">
                <PillCTA closed={closed} className="w-full sm:w-auto sm:min-w-[380px]">
                  Apply Now
                </PillCTA>
              </div>

              <p className="org-in-5 mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#c3adff]/75">
                <span>Closes {DEADLINE_LABEL}</span>
                <span className="text-[#9d7bff]/60">×</span>
                <span>No exceptions</span>
                {daysLeft && (
                  <>
                    <span className="text-[#9d7bff]/60">×</span>
                    <span className="text-white">{daysLeft}</span>
                  </>
                )}
              </p>
            </div>

            <div className="org-in-5 flex items-center gap-5 pb-8 sm:pb-10">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#9d7bff]/30 to-[#9d7bff]/60" />
              <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/70 whitespace-nowrap">
                Hackers <span className="text-[#9d7bff]/70 mx-1">×</span> Students{" "}
                <span className="text-[#9d7bff]/70 mx-1">×</span> Community
              </span>
            </div>
          </div>
        </section>

        {/* Find Your Team */}
        <section id="find-your-team" className="relative border-t border-[#9d7bff]/20 scroll-mt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,rgba(94,58,230,0.18),transparent_60%)]" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24 lg:py-32">
            <div className="org-reveal grid gap-8 lg:grid-cols-12 lg:items-end mb-12 sm:mb-16">
              <div className="lg:col-span-7">
                <SectionLabel index="01" text="Find your team" />
                <h2 className="mt-6 font-black uppercase leading-[0.95] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[72px]">
                  Four teams.
                  <br />
                  <span className="text-[#9d7bff]">One event.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-base sm:text-lg text-gray-300 leading-relaxed lg:pb-2">
                Applicants can join one of four teams depending on their
                interests and strengths.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {teams.map((team, index) => (
                <article
                  key={team.name}
                  className="org-reveal org-panel relative border border-[#9d7bff]/30 bg-[#0d0820]/70 p-6 sm:p-7 flex flex-col"
                  style={{ "--org-delay": `${index * 90}ms` } as React.CSSProperties}
                >
                  <span className="absolute -top-px -left-px h-3 w-3 border-t border-l border-[#c3adff]" />
                  <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-[#c3adff]" />
                  <p className="text-[11px] tracking-[0.35em] text-[#c3adff]/70 mb-10 sm:mb-14">
                    {team.index}
                  </p>
                  <h3 className="font-black uppercase tracking-[-0.01em] text-xl sm:text-2xl leading-tight mb-4">
                    {team.name}
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">
                    {team.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="relative border-t border-[#9d7bff]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_90%_100%,rgba(94,58,230,0.2),transparent_60%)]" />
          <Crosshair className="absolute top-16 right-8 hidden md:block" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24 lg:py-32">
            <div className="org-reveal max-w-3xl mb-14 sm:mb-20">
              <SectionLabel index="02" text="Application process" />
              <h2 className="mt-6 font-black uppercase leading-[0.95] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[72px]">
                Three steps.
                <br />
                <span className="text-[#9d7bff]">Two weeks.</span>
              </h2>
            </div>

            <ol className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
              <span
                aria-hidden="true"
                className="hidden lg:block absolute left-0 right-0 top-[15px] h-px bg-gradient-to-r from-[#9d7bff]/70 via-[#9d7bff]/40 to-transparent"
              />
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                return (
                  <li
                    key={step.number}
                    className="org-reveal org-step relative lg:pr-8"
                    style={{ "--org-delay": `${index * 120}ms` } as React.CSSProperties}
                  >
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute top-[11px] left-0 h-[9px] w-[9px] rounded-full bg-[#9d7bff] shadow-[0_0_14px_rgba(157,123,255,0.9)]"
                    />
                    <p className="org-step-num font-black text-[64px] sm:text-[80px] leading-none tracking-[-0.04em] text-[#9d7bff] lg:pt-10 mb-5">
                      {step.number}
                    </p>
                    <h3 className="font-black uppercase text-xl sm:text-2xl leading-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-gray-400 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                    {!isLast && (
                      <ArrowDown
                        aria-hidden="true"
                        className="lg:hidden mt-8 h-5 w-5 text-[#9d7bff]/70"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative border-t border-[#9d7bff]/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,rgba(94,58,230,0.45),transparent_65%)]" />
          <WireGlobe className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[60%] w-[900px] sm:w-[1200px] opacity-25" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 lg:py-40 text-center">
            <div className="org-reveal flex flex-col items-center">
              <SectionLabel index="03" text="Apply" />
              <h2 className="mt-6 font-black uppercase leading-[0.95] tracking-[-0.02em] text-[40px] sm:text-[60px] lg:text-[84px] max-w-4xl">
                Ready to help build{" "}
                <span className="text-[#9d7bff]">UHV8?</span>
              </h2>
              <p className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                We&rsquo;re looking for people who want to create, experiment, and
                take ownership. You don&rsquo;t need to know everything already. We
                care about what you can bring to the team and your willingness
                to contribute.
              </p>
              <div className="mt-10 sm:mt-12 w-full sm:w-auto">
                <PillCTA closed={closed} className="w-full sm:w-auto sm:min-w-[420px]" textClass="text-[15px] sm:text-xl">
                  Apply to Join the V8 Team
                </PillCTA>
              </div>
              <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#c3adff]/75">
                <span>Closes {DEADLINE_LABEL}</span>
                <span className="text-[#9d7bff]/60">×</span>
                <span>No exceptions</span>
              </p>
              <a
                href="mailto:humans@hackunited.org"
                className="mt-4 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Questions? humans@hackunited.org
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
