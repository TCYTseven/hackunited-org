"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .org-in-1 { animation: orgFadeUp 0.8s ease-out 0.1s forwards; opacity: 0; }
  .org-in-2 { animation: orgFadeUp 0.8s ease-out 0.3s forwards; opacity: 0; }
  .org-in-3 { animation: orgFadeUp 0.8s ease-out 0.5s forwards; opacity: 0; }
  .org-in-4 { animation: orgFadeUp 0.8s ease-out 0.7s forwards; opacity: 0; }

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

  .org-apply {
    background: linear-gradient(
      111deg,
      rgba(255, 255, 255, 1) 20%,
      rgba(179, 179, 179, 1) 100%
    );
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .org-apply:hover {
    transform: translateY(-1px);
    opacity: 0.94;
  }

  .org-apply .org-apply-icon {
    transition: transform 0.2s ease;
  }

  .org-apply:hover .org-apply-icon {
    transform: translate(2px, -2px);
  }

  .org-team-cell h3 {
    transition: transform 0.25s ease;
  }

  .org-team-cell:hover h3 {
    transform: translateX(4px);
  }

  .org-step-number {
    transition: color 0.3s ease;
  }

  .org-step:hover .org-step-number {
    color: rgba(255, 255, 255, 0.55);
  }

  @media (prefers-reduced-motion: reduce) {
    .org-in-1, .org-in-2, .org-in-3, .org-in-4 {
      animation: none;
      opacity: 1;
    }
    .org-reveal {
      opacity: 1;
      transform: none;
      transition: none;
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
    "h-12 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-[17px] font-semibold";

  if (closed) {
    return (
      <Button
        disabled
        className={`${base} ${className} border border-white/20 bg-transparent text-gray-400 disabled:opacity-100`}
      >
        Applications Closed
      </Button>
    );
  }

  return (
    <Button asChild className={`org-apply ${base} ${className} text-black`}>
      <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowUpRight className="org-apply-icon !size-5" />
      </a>
    </Button>
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

  const daysLeftLabel =
    deadline && !closed
      ? deadline.daysLeft === 0
        ? "Last day to apply"
        : `${deadline.daysLeft} day${deadline.daysLeft === 1 ? "" : "s"} left`
      : null;

  const facts = [
    {
      label: "Deadline",
      value: DEADLINE_LABEL,
      detail: closed ? "Applications closed" : daysLeftLabel ?? "No exceptions",
    },
    {
      label: "Interview",
      value: "15 minutes",
      detail: "Behavioral, one conversation",
    },
    {
      label: "Teams",
      value: "Four to choose from",
      detail: "Marketing, R&D, Logistics & Ops, Generalists",
    },
  ];

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <main className="bg-black text-white overflow-hidden">
        {/* Hero */}
        <section className="bg-[url('/images/gradient.png')] bg-cover bg-center bg-no-repeat w-full relative">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-28 relative">
            <div className="max-w-4xl">
              <h1 className="org-in-1 headingText !text-[40px] sm:!text-[56px] md:!text-[72px] !leading-[0.98] tracking-[-0.02em] mb-6 sm:mb-8">
                United Hacks V8
                <br />
                <span className="purpleGradient">Organizer Applications</span>
                <br />
                are {closed ? "closed." : "open."}
              </h1>

              <p className="org-in-2 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                Help build the next United Hacks. Join the team behind V8 and
                work alongside other students to create an unforgettable
                hackathon experience.
              </p>

              <div className="org-in-3 mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <ApplyButton closed={closed} className="w-full sm:w-auto">
                  Apply Now
                </ApplyButton>
                <Button
                  variant="link"
                  onClick={() => scrollTo("find-your-team")}
                  className="h-auto p-0 text-base text-gray-300 hover:text-white hover:no-underline justify-start sm:justify-center"
                >
                  Find your team
                  <ArrowDown className="!size-4" />
                </Button>
              </div>
            </div>

            <dl className="org-in-4 mt-16 sm:mt-20 md:mt-24 grid sm:grid-cols-3 border-t border-white/15">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`py-5 sm:py-6 sm:pr-8 ${
                    index > 0
                      ? "border-t border-white/15 sm:border-t-0 sm:border-l sm:pl-8"
                      : ""
                  }`}
                >
                  <dt className="text-xs sm:text-[13px] text-gray-500 mb-2">
                    {fact.label}
                  </dt>
                  <dd className="text-lg sm:text-xl font-medium text-white leading-tight">
                    {fact.value}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-400">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Find Your Team */}
        <section
          id="find-your-team"
          className="scroll-mt-20 border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24 md:py-32">
            <div className="org-reveal grid gap-6 md:grid-cols-12 md:items-end mb-12 sm:mb-16">
              <h2 className="md:col-span-7 headingText !text-[36px] sm:!text-[48px] md:!text-[56px] !leading-[1] tracking-[-0.02em]">
                Find your team.
              </h2>
              <p className="md:col-span-5 text-base sm:text-lg text-gray-400 leading-relaxed md:pb-1">
                Applicants can join one of four teams depending on their
                interests and strengths. Pick the one closest to how you like
                to work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 border-t border-white/10">
              {teams.map((team, index) => (
                <div
                  key={team.name}
                  className={`org-reveal org-team-cell py-8 sm:py-10 border-b border-white/10 ${
                    index % 2 === 1 ? "sm:border-l sm:pl-10" : "sm:pr-10"
                  }`}
                  style={{ "--org-delay": `${index * 80}ms` } as React.CSSProperties}
                >
                  <p className="text-[13px] text-gray-500 mb-5">{team.index}</p>
                  <h3 className="text-2xl sm:text-[28px] font-semibold text-white mb-4 leading-tight">
                    {team.name}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed max-w-md">
                    {team.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-[#0a0813] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24 md:py-32">
            <div className="org-reveal max-w-3xl mb-12 sm:mb-16">
              <h2 className="headingText !text-[36px] sm:!text-[48px] md:!text-[56px] !leading-[1] tracking-[-0.02em] mb-5">
                Three steps. About two weeks.
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Apply with the form, talk with us for fifteen minutes, then hear
                back. Nothing to prepare beyond knowing why you want to help
                run V8.
              </p>
            </div>

            <ol className="grid md:grid-cols-3 border-t border-white/10">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                return (
                  <li
                    key={step.number}
                    className={`org-reveal org-step relative py-8 sm:py-10 border-b border-white/10 ${
                      index > 0 ? "md:border-l md:pl-10" : ""
                    } ${!isLast ? "md:pr-10" : ""}`}
                    style={{ "--org-delay": `${index * 120}ms` } as React.CSSProperties}
                  >
                    <p className="org-step-number text-6xl sm:text-7xl font-light tracking-[-0.04em] text-white/25 mb-8 leading-none">
                      {step.number}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-0 -bottom-3 bg-[#0a0813] text-gray-600 md:left-auto md:bottom-auto md:right-0 md:top-10 md:translate-x-1/2 md:px-1 md:py-1"
                      >
                        <ArrowDown className="h-5 w-5 md:hidden" />
                        <ArrowRight className="hidden md:block h-5 w-5" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-28 md:py-36">
            <div className="org-reveal max-w-3xl">
              <h2 className="headingText !text-[36px] sm:!text-[48px] md:!text-[64px] !leading-[1] tracking-[-0.02em] mb-6">
                Ready to help build
                <br />
                <span className="purpleGradient">United Hacks V8?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
                We&rsquo;re looking for people who want to create, experiment, and
                take ownership. You don&rsquo;t need to know everything already. We
                care about what you can bring to the team and your willingness
                to contribute.
              </p>
              <ApplyButton closed={closed} className="w-full sm:w-auto">
                Apply to Join the V8 Team
              </ApplyButton>
              <p className="mt-8 text-sm text-gray-500">
                Applications close {DEADLINE_LABEL}. No exceptions.{" "}
                <span className="hidden sm:inline">·</span>{" "}
                <a
                  href="mailto:humans@hackunited.org"
                  className="text-gray-400 underline-offset-4 hover:text-white hover:underline transition-colors"
                >
                  Questions? humans@hackunited.org
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
