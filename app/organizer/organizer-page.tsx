"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

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
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .org-in-1 { animation: orgFadeUp 0.7s ease-out 0.05s forwards; opacity: 0; }
  .org-in-2 { animation: orgFadeUp 0.7s ease-out 0.2s forwards; opacity: 0; }
  .org-in-3 { animation: orgFadeUp 0.7s ease-out 0.35s forwards; opacity: 0; }
  .org-in-4 { animation: orgFadeUp 0.7s ease-out 0.5s forwards; opacity: 0; }

  .org-reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    transition-delay: var(--org-delay, 0ms);
  }

  .org-reveal.org-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .org-btn-icon {
    transition: transform 0.2s ease;
  }

  a:hover > .org-btn-icon,
  button:hover > .org-btn-icon {
    transform: translate(2px, -2px);
  }

  .org-row {
    transition: background-color 0.25s ease;
  }

  .org-row:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  .org-row .org-row-arrow {
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .org-row:hover .org-row-arrow {
    opacity: 1;
    transform: translateX(0);
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
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  closed: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  const base = "h-12 sm:h-[52px] rounded-md px-6 text-[15px] font-medium";
  const palette =
    tone === "light"
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white hover:bg-gray-800";

  if (closed) {
    return (
      <Button
        disabled
        className={`${base} ${className} border ${
          tone === "light"
            ? "border-white/20 bg-transparent text-gray-500"
            : "border-black/20 bg-transparent text-gray-500"
        } disabled:opacity-100`}
      >
        Applications Closed
      </Button>
    );
  }

  return (
    <Button asChild className={`${base} ${palette} ${className}`}>
      <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowUpRight className="org-btn-icon !size-4" />
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

  const statusText = closed
    ? "Closed"
    : deadline
    ? deadline.daysLeft === 0
      ? "Open · last day to apply"
      : `Open · ${deadline.daysLeft} day${deadline.daysLeft === 1 ? "" : "s"} left`
    : "Open";

  const ledger = [
    { label: "Status", value: statusText },
    { label: "Deadline", value: `${DEADLINE_LABEL} · No exceptions` },
    { label: "Interview", value: "15 minutes, behavioral" },
    { label: "Teams", value: "Marketing, R&D, Logistics & Ops, Generalists" },
  ];

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <main className="bg-black text-white overflow-hidden">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="org-in-1 flex items-center justify-between border-b border-white/15 py-4 text-[13px] text-gray-400">
            <span>United Hacks V8</span>
            <span className="text-right">Organizer applications</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 pt-14 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
            <div className="lg:col-span-7">
              <h1
                className={`${serif.className} org-in-2 font-normal text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.015em] text-white`}
              >
                United Hacks V8 organizer applications are{" "}
                <em className="not-italic sm:italic">
                  {closed ? "closed." : "open."}
                </em>
              </h1>

              <p className="org-in-3 mt-8 sm:mt-10 max-w-xl text-lg sm:text-xl leading-relaxed text-gray-400">
                Help build the next United Hacks. Join the team behind V8 and
                work alongside other students to create an unforgettable
                hackathon experience.
              </p>

              <div className="org-in-3 mt-8 lg:hidden">
                <ApplyButton closed={closed} className="w-full sm:w-auto">
                  Apply Now
                </ApplyButton>
              </div>
            </div>

            <aside className="org-in-4 lg:col-span-5 lg:pt-3">
              <dl className="border border-white/15 divide-y divide-white/15">
                {ledger.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] gap-4 px-5 py-4"
                  >
                    <dt className="text-[13px] text-gray-500 pt-0.5">
                      {row.label}
                    </dt>
                    <dd className="text-[15px] text-white leading-relaxed">
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="hidden lg:block p-5">
                  <ApplyButton closed={closed} className="w-full">
                    Apply Now
                  </ApplyButton>
                  {!closed && (
                    <p className="mt-3 text-center text-xs text-gray-500">
                      Opens a Google Form in a new tab
                    </p>
                  )}
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Find Your Team */}
        <section id="find-your-team" className="scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24 lg:py-32">
            <div className="org-reveal grid gap-6 lg:grid-cols-12 lg:items-end mb-10 sm:mb-14">
              <h2
                className={`${serif.className} lg:col-span-6 font-normal text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em]`}
              >
                Find your team.
              </h2>
              <p className="lg:col-span-5 lg:col-start-8 text-base sm:text-lg text-gray-400 leading-relaxed">
                Applicants can join one of four teams depending on their
                interests and strengths. Pick the one closest to how you like
                to work.
              </p>
            </div>

            <div className="border-t border-white/15">
              {teams.map((team, index) => (
                <div
                  key={team.name}
                  className="org-reveal org-row grid gap-3 sm:gap-6 lg:grid-cols-12 items-start border-b border-white/15 py-7 sm:py-9 -mx-4 px-4 rounded-sm"
                  style={{ "--org-delay": `${index * 70}ms` } as React.CSSProperties}
                >
                  <span
                    className={`${serif.className} lg:col-span-1 text-2xl text-gray-500 leading-none`}
                  >
                    {team.index}
                  </span>
                  <h3 className="lg:col-span-4 text-2xl sm:text-[28px] font-medium text-white leading-tight">
                    {team.name}
                  </h3>
                  <p className="lg:col-span-6 text-base text-gray-400 leading-relaxed">
                    {team.description}
                  </p>
                  <ArrowRight className="org-row-arrow hidden lg:block lg:col-span-1 justify-self-end h-5 w-5 text-gray-400 mt-1.5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="border-t border-white/15">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="org-reveal lg:col-span-4">
                <h2
                  className={`${serif.className} font-normal text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] mb-5`}
                >
                  Three steps. About two weeks.
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  Apply with the form, talk with us for fifteen minutes, then
                  hear back. Nothing to prepare beyond knowing why you want to
                  help run V8.
                </p>
              </div>

              <ol className="lg:col-span-8 border-t border-white/15">
                {steps.map((step, index) => (
                  <li
                    key={step.number}
                    className="org-reveal grid grid-cols-[56px_1fr] sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 border-b border-white/15 py-8 sm:py-10"
                    style={{ "--org-delay": `${index * 100}ms` } as React.CSSProperties}
                  >
                    <span
                      className={`${serif.className} text-[40px] sm:text-[56px] leading-[0.9] text-gray-600 italic`}
                    >
                      {step.number}
                    </span>
                    <div className="pt-1 sm:pt-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-400 leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-28 lg:py-36">
            <div className="org-reveal grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-end">
              <div className="lg:col-span-8">
                <h2
                  className={`${serif.className} font-normal text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.015em] mb-8`}
                >
                  Ready to help build United Hacks V8?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  We&rsquo;re looking for people who want to create, experiment,
                  and take ownership. You don&rsquo;t need to know everything
                  already. We care about what you can bring to the team and
                  your willingness to contribute.
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end flex flex-col items-start lg:items-end gap-4">
                <ApplyButton
                  closed={closed}
                  tone="dark"
                  className="w-full sm:w-auto"
                >
                  Apply to Join the V8 Team
                </ApplyButton>
                <p className="text-sm text-gray-500 lg:text-right">
                  Applications close {DEADLINE_LABEL}. No exceptions.
                  <br />
                  <a
                    href="mailto:humans@hackunited.org"
                    className="underline underline-offset-4 decoration-gray-300 hover:decoration-black hover:text-black transition-colors"
                  >
                    Questions? humans@hackunited.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
