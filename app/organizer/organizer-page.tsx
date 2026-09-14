"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Megaphone,
  FlaskConical,
  ClipboardList,
  Sparkles,
  FileText,
  MessagesSquare,
  CheckCircle2,
  CalendarClock,
  Users,
  Timer,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "../page.css";

const APPLY_URL = "https://forms.gle/qjCii5tD5ShiL5mF9";

// Applications close at 11:59 PM Eastern on September 28, 2026.
const DEADLINE = new Date("2026-09-29T03:59:59Z");
const DEADLINE_LABEL = "September 28, 2026";

const teams = [
  {
    index: "01",
    name: "Marketing",
    tagline: "Grow the brand",
    icon: Megaphone,
    focus: ["Content", "Outreach", "Partnerships"],
    description:
      "Build the United Hacks brand, create content, grow our reach, work on partnerships and help bring more hackers to V8.",
  },
  {
    index: "02",
    name: "R&D",
    tagline: "Experiment and build",
    icon: FlaskConical,
    focus: ["Research", "Prototyping", "New tools"],
    description:
      "Experiment with new ideas, technology, and experiences that can make United Hacks better. Help research and build new features, tools, and initiatives for V8.",
  },
  {
    index: "03",
    name: "Logistics & Operations",
    tagline: "Make it happen",
    icon: ClipboardList,
    focus: ["Scheduling", "Coordination", "Communication"],
    description:
      "Help make the event actually happen. Work on scheduling, coordination, event logistics, resources, communication, and everything needed to keep V8 running smoothly.",
  },
  {
    index: "04",
    name: "Generalists",
    tagline: "Go where you're needed",
    icon: Sparkles,
    focus: ["Cross-team", "High-impact problems", "Flexible"],
    description:
      "Not sure where you fit? Join as a generalist. Work across different parts of United Hacks, take on high-impact problems, and help wherever the team needs you most.",
  },
];

const steps = [
  {
    number: "01",
    title: "Application",
    icon: FileText,
    description:
      "Submit the organizer application form and tell us a little about yourself, your experience, and why you want to join United Hacks.",
  },
  {
    number: "02",
    title: "15-Minute Behavioral Interview",
    icon: MessagesSquare,
    description:
      "Selected applicants will be invited to a short 15-minute interview. We want to learn more about you, how you work with others, and what you could bring to the team.",
  },
  {
    number: "03",
    title: "Decision",
    icon: CheckCircle2,
    description:
      "After your interview, our team will review your application and send you a final decision.",
  },
];

const styles = `
  @keyframes orgFadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes orgPulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.45);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(168, 85, 247, 0);
    }
  }

  @keyframes orgFloat {
    0%, 100% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-10px);
    }
  }

  .org-hero-badge {
    animation: orgFadeUp 0.8s ease-out forwards;
    opacity: 0;
  }

  .org-hero-heading {
    animation: orgFadeUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .org-hero-subheading {
    animation: orgFadeUp 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }

  .org-hero-buttons {
    animation: orgFadeUp 0.8s ease-out 0.6s forwards;
    opacity: 0;
  }

  .org-hero-note {
    animation: orgFadeUp 0.8s ease-out 0.8s forwards;
    opacity: 0;
  }

  .org-hero-stats {
    animation: orgFadeUp 0.8s ease-out 1s forwards;
    opacity: 0;
  }

  .org-watermark {
    animation: orgFloat 9s ease-in-out infinite;
  }

  .org-live-dot {
    animation: orgPulse 2s ease-out infinite;
  }

  .org-reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    transition-delay: var(--org-delay, 0ms);
  }

  .org-reveal.org-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .org-apply-btn {
    background: linear-gradient(
      111deg,
      rgba(255, 255, 255, 1) 20%,
      rgba(179, 179, 179, 1) 100%
    );
    box-shadow: 0 0 32px 2px rgba(168, 85, 247, 0.35);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .org-apply-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 44px 6px rgba(168, 85, 247, 0.5);
  }

  .org-apply-btn .org-btn-icon {
    transition: transform 0.25s ease;
  }

  .org-apply-btn:hover .org-btn-icon {
    transform: translate(2px, -2px);
  }

  .org-outline-btn {
    backdrop-filter: blur(10px);
    border: 0.5px solid rgba(255, 255, 255, 0.85);
    transition: background-color 0.25s ease, transform 0.25s ease;
  }

  .org-outline-btn:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }

  .org-team-card {
    transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
  }

  .org-team-card::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(200, 152, 255, 0.9), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .org-team-card:hover {
    transform: translateY(-4px);
    border-color: rgba(216, 180, 254, 0.4);
    background-color: rgba(255, 255, 255, 0.06);
  }

  .org-team-card:hover::before {
    opacity: 1;
  }

  .org-team-icon {
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  }

  .org-team-card:hover .org-team-icon {
    background-color: rgba(216, 180, 254, 0.2);
    color: #f3e8ff;
    transform: scale(1.05);
  }

  .org-step-node {
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .org-step:hover .org-step-node {
    border-color: rgba(216, 180, 254, 0.9);
    box-shadow: 0 0 34px rgba(168, 85, 247, 0.45);
  }

  .org-step-card {
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }

  .org-step:hover .org-step-card {
    border-color: rgba(216, 180, 254, 0.35);
    background-color: rgba(255, 255, 255, 0.06);
  }

  .org-timeline-rail {
    background: linear-gradient(
      90deg,
      rgba(200, 152, 255, 0) 0%,
      rgba(200, 152, 255, 0.7) 12%,
      rgba(170, 0, 237, 0.7) 88%,
      rgba(170, 0, 237, 0) 100%
    );
  }

  @media (prefers-reduced-motion: reduce) {
    .org-hero-badge,
    .org-hero-heading,
    .org-hero-subheading,
    .org-hero-buttons,
    .org-hero-note,
    .org-hero-stats {
      animation: none;
      opacity: 1;
    }
    .org-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .org-live-dot,
    .org-watermark {
      animation: none;
    }
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

function ApplyButton({
  children,
  closed,
  className = "",
}: {
  children: React.ReactNode;
  closed: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold";

  if (closed) {
    return (
      <span
        className={`${base} ${className} border border-white/15 bg-white/[0.05] text-gray-400 cursor-not-allowed`}
        aria-disabled="true"
      >
        Applications Closed
      </span>
    );
  }

  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`org-apply-btn ${base} ${className} text-black`}
    >
      {children}
      <ArrowUpRight className="org-btn-icon h-5 w-5" />
    </a>
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const heroStats = [
    { icon: Users, value: "4", label: "Teams to join" },
    { icon: Timer, value: "15 min", label: "Interview" },
    {
      icon: CalendarClock,
      value: "Sep 28",
      label: closed ? "Closed" : "Deadline",
    },
  ];

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <main className="bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <div className="bg-[url('/images/gradient.png')] bg-cover bg-center bg-no-repeat w-full pt-[30px] relative">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />

          {/* Watermark */}
          <div
            aria-hidden="true"
            className="org-watermark absolute left-1/2 top-[34%] sm:top-[36%] pointer-events-none select-none font-bold leading-none text-[38vw] sm:text-[30vw] md:text-[22vw] lg:text-[20rem] text-white/[0.03] tracking-tighter"
          >
            V8
          </div>

          <div className="max-w-7xl mx-auto mt-10 sm:mt-16 md:mt-[96px] pb-20 sm:pb-24 md:pb-[130px] px-6 sm:px-8 relative">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="org-hero-badge inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium text-purple-100 mb-6 sm:mb-8">
                <span
                  className={`org-live-dot h-2 w-2 rounded-full ${
                    closed ? "bg-gray-500" : "bg-purple-400"
                  }`}
                />
                {closed
                  ? "United Hacks V8 · Applications Closed"
                  : "United Hacks V8 · Applications Open"}
              </div>

              <h1 className="org-hero-heading headingText mb-5 sm:mb-6">
                United Hacks V8
                <br />
                <span className="purpleGradient">Organizer Applications</span>
                <br />
                are {closed ? "CLOSED" : "OPEN!"}
              </h1>

              <div className="org-hero-subheading max-w-2xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#d3d3d3]">
                  Help build the next United Hacks. Join the team behind V8 and
                  work alongside other students to create an unforgettable
                  hackathon experience.
                </p>
              </div>

              <div className="org-hero-buttons flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
                <ApplyButton closed={closed} className="w-full sm:w-auto">
                  Apply Now
                </ApplyButton>
                <button
                  type="button"
                  onClick={() => scrollTo("find-your-team")}
                  className="org-outline-btn inline-flex items-center justify-center h-12 sm:h-14 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold text-white w-full sm:w-auto"
                >
                  Find Your Team
                </button>
              </div>

              <div className="org-hero-note mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm">
                <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-gray-300 text-center">
                  <CalendarClock className="h-4 w-4 flex-shrink-0 text-purple-300" />
                  <span>Applications close {DEADLINE_LABEL}</span>
                  <span className="hidden sm:inline text-gray-500">·</span>
                  <span className="text-purple-200 font-medium">No exceptions</span>
                </span>
                {deadline && !closed && (
                  <span className="inline-flex items-center rounded-full border border-purple-300/40 bg-purple-300/10 px-3 py-0.5 font-semibold text-purple-100">
                    {deadline.daysLeft === 0
                      ? "Last day to apply"
                      : `${deadline.daysLeft} day${
                          deadline.daysLeft === 1 ? "" : "s"
                        } left`}
                  </span>
                )}
              </div>

              <div className="org-hero-stats mt-10 sm:mt-14 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-2xl">
                {heroStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="glassCard !static flex flex-col items-center justify-center text-center px-2 py-3 sm:px-4 sm:py-4"
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 mb-1.5 sm:mb-2" />
                      <p className="purpleGradient text-lg sm:text-2xl font-bold leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-[11px] sm:text-sm text-gray-300 font-medium leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Find Your Team Section */}
        <section
          id="find-your-team"
          className="py-16 sm:py-20 lg:py-28 relative overflow-hidden scroll-mt-20"
        >
          <div className="absolute inset-0 bg-[#05030a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),transparent_35%,rgba(255,255,255,0.01))]"></div>
          <div className="absolute inset-0 opacity-12 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-purple-700/10 blur-[140px] pointer-events-none"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="org-reveal grid gap-6 md:grid-cols-12 md:items-end mb-10 sm:mb-14">
              <div className="md:col-span-7">
                <Badge
                  variant="outline"
                  className="mb-4 border-purple-300/40 text-purple-200 bg-white/[0.03] hover:bg-white/[0.03]"
                >
                  Four Teams
                </Badge>
                <h2 className="headingText mt-[15px]">
                  FIND YOUR <span className="purpleGradient">TEAM</span>
                </h2>
              </div>
              <p className="md:col-span-5 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed md:pb-2">
                Applicants can join one of four teams depending on their
                interests and strengths.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
              {teams.map((team, index) => {
                const Icon = team.icon;
                return (
                  <article
                    key={team.name}
                    className="org-reveal org-team-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-7 sm:px-8 sm:py-8 shadow-[0_10px_28px_rgba(0,0,0,0.34)]"
                    style={{ "--org-delay": `${index * 100}ms` } as React.CSSProperties}
                  >
                    <span className="absolute top-5 right-6 text-xs font-semibold tracking-[0.2em] text-white/25">
                      {team.index}
                    </span>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="org-team-icon inline-flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl border border-purple-300/40 bg-purple-300/10 text-purple-200">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="min-w-0 pr-8">
                        <p className="text-[11px] tracking-[0.18em] text-purple-200/80 uppercase mb-1">
                          {team.tagline}
                        </p>
                        <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
                          {team.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                      {team.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {team.focus.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0813]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_40%,rgba(255,255,255,0.015))]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-purple-400/35"></div>
          <div className="absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-purple-700/10 blur-[140px] pointer-events-none"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="org-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <Badge
                variant="outline"
                className="mb-5 border-purple-300/40 text-purple-200 bg-white/[0.04] hover:bg-white/[0.04]"
              >
                Three Steps
              </Badge>
              <h2 className="headingText mt-[15px] mb-4">
                APPLICATION <span className="purpleGradient">PROCESS</span>
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                From form to final decision, the process is short and built to
                get to know you, not to test you.
              </p>
            </div>

            <div className="relative">
              {/* Desktop rail behind the numbered nodes */}
              <div
                aria-hidden="true"
                className="org-timeline-rail hidden lg:block absolute left-0 right-0 top-9 h-px"
              />

              <ol className="grid lg:grid-cols-[1fr_2.5rem_1fr_2.5rem_1fr] gap-y-3 lg:gap-x-2 items-stretch max-w-2xl lg:max-w-none mx-auto">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === steps.length - 1;
                  return (
                    <li key={step.number} className="contents">
                      <div
                        className="org-reveal org-step relative flex flex-col items-center h-full"
                        style={{ "--org-delay": `${index * 150}ms` } as React.CSSProperties}
                      >
                        <span className="org-step-node relative z-10 inline-flex h-16 w-16 lg:h-[4.5rem] lg:w-[4.5rem] flex-shrink-0 items-center justify-center rounded-full border border-purple-300/60 bg-[#0a0813] shadow-[0_0_24px_rgba(168,85,247,0.25)]">
                          <span className="purpleGradient text-xl lg:text-2xl font-bold">
                            {step.number}
                          </span>
                        </span>
                        <div className="org-step-card relative -mt-8 pt-14 pb-7 px-5 sm:px-7 w-full flex-1 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_10px_28px_rgba(0,0,0,0.24)] text-center">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <Icon className="h-4 w-4 text-purple-300" />
                            <p className="text-xs tracking-[0.15em] text-purple-200/80 uppercase">
                              Step {step.number}
                            </p>
                          </div>
                          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {!isLast && (
                        <div
                          aria-hidden="true"
                          className="flex items-center justify-center text-purple-300/70 py-1 lg:py-0 lg:items-start lg:pt-6"
                        >
                          <ArrowDown className="h-5 w-5 lg:hidden" />
                          <ArrowRight className="hidden lg:block h-5 w-5" />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="org-reveal max-w-3xl mx-auto text-center">
              <h2 className="headingText mb-6">
                Ready to help build
                <br />
                <span className="purpleGradient">United Hacks V8?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                We&rsquo;re looking for people who want to create, experiment, and
                take ownership. You don&rsquo;t need to know everything already. We
                care about what you can bring to the team and your willingness
                to contribute.
              </p>
              <ApplyButton closed={closed} className="w-full sm:w-auto">
                Apply to Join the V8 Team
              </ApplyButton>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-purple-300" />
                  Deadline {DEADLINE_LABEL} · No exceptions
                </span>
                <span className="hidden sm:inline text-gray-600">|</span>
                <a
                  href="mailto:humans@hackunited.org"
                  className="inline-flex items-center gap-2 hover:text-purple-300 transition-colors"
                >
                  <Mail className="h-4 w-4 text-purple-300" />
                  Questions? humans@hackunited.org
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
