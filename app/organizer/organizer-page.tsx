"use client";

import { useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Megaphone,
  FlaskConical,
  ClipboardList,
  Sparkles,
  FileText,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "../page.css";

const APPLY_URL = "https://forms.gle/qjCii5tD5ShiL5mF9";

const teams = [
  {
    name: "Marketing",
    tagline: "Grow the brand",
    icon: Megaphone,
    description:
      "Build the United Hacks brand, create content, grow our reach, work on partnerships and help bring more hackers to V8.",
  },
  {
    name: "R&D",
    tagline: "Experiment and build",
    icon: FlaskConical,
    description:
      "Experiment with new ideas, technology, and experiences that can make United Hacks better. Help research and build new features, tools, and initiatives for V8.",
  },
  {
    name: "Logistics & Operations",
    tagline: "Make it happen",
    icon: ClipboardList,
    description:
      "Help make the event actually happen. Work on scheduling, coordination, event logistics, resources, communication, and everything needed to keep V8 running smoothly.",
  },
  {
    name: "Generalists",
    tagline: "Go where you're needed",
    icon: Sparkles,
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

  .org-team-card:hover {
    transform: translateY(-4px);
    border-color: rgba(216, 180, 254, 0.45);
    background-color: rgba(255, 255, 255, 0.06);
  }

  .org-timeline-line {
    background: linear-gradient(
      180deg,
      rgba(200, 152, 255, 0.9) 0%,
      rgba(170, 0, 237, 0.6) 60%,
      rgba(170, 0, 237, 0) 100%
    );
  }

  @media (prefers-reduced-motion: reduce) {
    .org-hero-badge,
    .org-hero-heading,
    .org-hero-subheading,
    .org-hero-buttons,
    .org-hero-note {
      animation: none;
      opacity: 1;
    }
    .org-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .org-live-dot {
      animation: none;
    }
  }
`;

export default function OrganizerPage() {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
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

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <main className="bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <div className="bg-[url('/images/gradient.png')] bg-cover bg-center bg-no-repeat w-full pt-[30px] relative">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
          <div className="max-w-7xl mx-auto mt-12 sm:mt-20 md:mt-[120px] pb-20 sm:pb-24 md:pb-[150px] px-6 sm:px-8 relative">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="org-hero-badge inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium text-purple-100 mb-6 sm:mb-8">
                <span className="org-live-dot h-2 w-2 rounded-full bg-purple-400" />
                United Hacks V8 · Applications Open
              </div>

              <h1 className="org-hero-heading headingText mb-5 sm:mb-6">
                United Hacks V8
                <br />
                <span className="purpleGradient">Organizer Applications</span>
                <br />
                are OPEN!
              </h1>

              <div className="org-hero-subheading max-w-2xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#d3d3d3]">
                  Help build the next United Hacks. Join the team behind V8 and
                  work alongside other students to create an unforgettable
                  hackathon experience.
                </p>
              </div>

              <div className="org-hero-buttons flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="org-apply-btn inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold text-black w-full sm:w-auto"
                >
                  Apply Now
                  <ArrowUpRight className="h-5 w-5" />
                </a>
                <button
                  type="button"
                  onClick={() => scrollTo("find-your-team")}
                  className="org-outline-btn inline-flex items-center justify-center h-12 sm:h-14 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold text-white w-full sm:w-auto"
                >
                  Find Your Team
                </button>
              </div>

              <p className="org-hero-note mt-5 text-xs sm:text-sm text-gray-400">
                Takes about 10 minutes. Open to students worldwide.
              </p>
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

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="org-reveal max-w-3xl mb-10 sm:mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-purple-300/40 text-purple-200 bg-white/[0.03] hover:bg-white/[0.03]"
              >
                Four Teams
              </Badge>
              <h2 className="headingText mt-[15px] mb-4 sm:mb-5">
                FIND YOUR <span className="purpleGradient">TEAM</span>
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
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
                    className="org-reveal org-team-card relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-7 sm:px-8 sm:py-8 shadow-[0_10px_28px_rgba(0,0,0,0.34)]"
                    style={{ "--org-delay": `${index * 100}ms` } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-purple-300/40 bg-purple-300/10 text-purple-200">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-[11px] tracking-[0.18em] text-purple-200/80 uppercase mb-1">
                          {team.tagline}
                        </p>
                        <h3 className="text-white text-xl sm:text-2xl font-semibold">
                          {team.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {team.description}
                    </p>
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

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
              <div className="org-reveal lg:col-span-4">
                <Badge
                  variant="outline"
                  className="mb-5 border-purple-300/40 text-purple-200 bg-white/[0.04] hover:bg-white/[0.04]"
                >
                  Three Steps
                </Badge>
                <h2 className="headingText mt-[15px] mb-4">
                  APPLICATION <span className="purpleGradient">PROCESS</span>
                </h2>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-md">
                  From form to final decision, the whole process is short and
                  designed to get to know you, not to test you.
                </p>
              </div>

              <div className="lg:col-span-8">
                <ol className="relative">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === steps.length - 1;
                    return (
                      <li
                        key={step.number}
                        className="org-reveal relative grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-4 sm:gap-6"
                        style={{ "--org-delay": `${index * 150}ms` } as React.CSSProperties}
                      >
                        {/* Rail */}
                        <div className="flex flex-col items-center">
                          <span className="relative z-10 inline-flex h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem] flex-shrink-0 items-center justify-center rounded-full border border-purple-300/60 bg-[#0a0813] text-purple-100 shadow-[0_0_24px_rgba(168,85,247,0.25)]">
                            <span className="purpleGradient text-lg sm:text-2xl font-bold">
                              {step.number}
                            </span>
                          </span>
                          {!isLast && (
                            <div className="org-timeline-line w-px flex-1 my-2" />
                          )}
                        </div>

                        {/* Content */}
                        <div className={isLast ? "" : "pb-10 sm:pb-12"}>
                          <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl px-5 py-6 sm:px-7 sm:py-7 shadow-[0_10px_28px_rgba(0,0,0,0.24)]">
                            <div className="flex items-center gap-3 mb-3">
                              <Icon className="h-5 w-5 text-purple-300" />
                              <p className="text-xs tracking-[0.15em] text-purple-200/80 uppercase">
                                Step {step.number}
                              </p>
                            </div>
                            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          {!isLast && (
                            <div className="flex justify-center mt-4 sm:mt-5 text-purple-300/70">
                              <ArrowDown className="h-5 w-5" />
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
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
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="org-apply-btn inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold text-black"
              >
                Apply to Join the V8 Team
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
