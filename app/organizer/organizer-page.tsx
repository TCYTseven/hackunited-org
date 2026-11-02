"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SplitFlap from "@/components/home/split-flap";
import BoardingPass from "@/components/journey/boarding-pass";
import "./organizer.css";

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

function useDeadline() {
  const [state, setState] = useState<{ daysLeft: number; closed: boolean } | null>(null);

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

function ApplyCTA({ closed, children }: { closed: boolean; children: React.ReactNode }) {
  if (closed) {
    return (
      <span className="hu-btn org-cta" aria-disabled="true" data-closed>
        Applications Closed
      </span>
    );
  }

  return (
    <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="hu-btn org-cta">
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function OrganizerPage() {
  const deadline = useDeadline();
  const closed = deadline?.closed ?? false;
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  const daysLeft =
    deadline && !closed
      ? deadline.daysLeft === 0
        ? "Last day to apply"
        : `${deadline.daysLeft} day${deadline.daysLeft === 1 ? "" : "s"} left`
      : null;

  // The board reads CLOSED once the deadline passes, otherwise the days left.
  const board = !deadline ? null : closed ? "CLOSED" : String(deadline.daysLeft).padStart(2, "0");

  return (
    <main ref={mainRef} className="hu-home">
      <section className="org-hero hu-grid-bg">
        <div className="hu-wrap">
          <div className="org-strip hu-mono">
            <span className="hu-live" aria-hidden="true" />
            <span>United Hacks</span>
            <span className="org-strip-rule" />
            <span>V8 · Organizer team</span>
          </div>

          <div className="org-hero-grid">
            <div>
              <h1 className="org-title" data-split>
                UH<span>V8</span>
                <br />
                Organizer
                <br />
                <em>Applications</em> Open
              </h1>
              <p className="hu-lead mt-8" data-reveal style={delay(100)}>
                Help build the next United Hacks. Join the team behind V8 and work alongside other students to create an
                unforgettable hackathon experience.
              </p>
              <div className="mt-10" data-reveal style={delay(180)}>
                <ApplyCTA closed={closed}>Apply Now</ApplyCTA>
              </div>
            </div>

            <div className="org-pass" data-drop>
              <BoardingPass
                label="Organizer pass"
                code="United Hacks · V8"
                from="You"
                to="V8 Team"
                detail={
                  <dl className="org-deadline-meta hu-mono">
                    <div>
                      <dt>Closes</dt>
                      <dd>{DEADLINE_LABEL}</dd>
                    </div>
                    <div>
                      <dt>Policy</dt>
                      <dd>No exceptions</dd>
                    </div>
                    {daysLeft && (
                      <div>
                        <dt>Remaining</dt>
                        <dd>{daysLeft}</dd>
                      </div>
                    )}
                  </dl>
                }
                stub={
                  <>
                    <span className="hu-pass-stub-label hu-mono">{closed ? "Gate status" : "Days left"}</span>
                    <div className="org-deadline-board">{board && <SplitFlap value={board} />}</div>
                  </>
                }
              />
            </div>
          </div>

          <p className="org-tagline hu-mono">
            Hackers <span>×</span> Students <span>×</span> Community
          </p>
        </div>
      </section>

      <section id="find-your-team" className="hu-section scroll-mt-20" data-stop="Teams" data-zone="a">
        <div className="hu-wrap">
          <div className="org-head">
            <div>
              <p className="hu-label" data-reveal>
                <b>01</b>
                <span>Find your team</span>
              </p>
              <h2 className="hu-h2 mt-7" data-split>
                Four teams.
                <br />
                <em>One event.</em>
              </h2>
            </div>
            <p className="hu-body max-w-sm" data-reveal style={delay(140)}>
              Applicants can join one of four teams depending on their interests and strengths.
            </p>
          </div>

          <div className="org-teams">
            {teams.map((team, i) => (
              <article key={team.name} className="org-team nb nb-hover" data-drop>
                <span className="hu-mono org-team-index">{team.index}</span>
                <h3 className="hu-h3">{team.name}</h3>
                <p className="hu-body">{team.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hu-section" data-stop="Process">
        <div className="hu-wrap">
          <div className="org-head">
            <div>
              <p className="hu-label" data-reveal>
                <b>02</b>
                <span>Application process</span>
              </p>
              <h2 className="hu-h2 mt-7" data-split>
                Three steps.
                <br />
                <em>Two weeks.</em>
              </h2>
            </div>
          </div>

          <ol className="org-steps">
            {steps.map((step, i) => (
              <li key={step.number} className="org-step" data-reveal style={delay(i * 120)}>
                <span className="org-step-num hu-mono">{step.number}</span>
                <h3 className="hu-h3">{step.title}</h3>
                <p className="hu-body">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hu-section org-final" data-stop="Apply" data-zone="b">
        <div className="hu-wrap text-center">
          <p className="hu-label justify-center" data-reveal>
            <b>03</b>
            <span>Apply</span>
          </p>
          <h2 className="hu-display mx-auto mt-7 max-w-4xl" data-split>
            Ready to help build <em>UHV8?</em>
          </h2>
          <p className="hu-lead mx-auto mt-8" data-reveal style={delay(140)}>
            We&rsquo;re looking for people who want to create, experiment, and take ownership. You don&rsquo;t need to
            know everything already. We care about what you can bring to the team and your willingness to contribute.
          </p>
          <div className="mt-10" data-reveal style={delay(200)}>
            <ApplyCTA closed={closed}>Apply to Join the V8 Team</ApplyCTA>
          </div>
          <p className="hu-mono mt-6 text-[11px] uppercase tracking-[0.14em] text-[var(--hu-fg-3)]">
            Closes {DEADLINE_LABEL} <span className="text-[var(--hu-accent)]">×</span> No exceptions
          </p>
          <a href="mailto:humans@hackunited.org" className="hu-link mt-4 inline-block text-sm">
            Questions? humans@hackunited.org
          </a>
        </div>
      </section>
    </main>
  );
}
