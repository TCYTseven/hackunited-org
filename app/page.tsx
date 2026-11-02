"use client";

import { useRef, type CSSProperties } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Inter } from "next/font/google";
import "./page.css";
import "./home.css";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import DraggableMarquee from "@/components/obsidian/draggable-marquee";
import ScrollWords, { type WordSegment } from "@/components/home/scroll-words";
import DotGlobe from "@/components/home/dot-globe";
import ImpactBoard from "@/components/home/impact-board";
import GoalPanels from "@/components/home/goal-panels";
import EditionScrubber from "@/components/home/edition-scrubber";
import JudgesGrid from "@/components/home/judges-grid";
import { pressLogos } from "@/components/home/data";

// The hero's stat cards keep the typeface they were designed in; the copy
// beside them uses the site's own fonts.
const inter = Inter({ subsets: ["latin"] });

// Hero entrance animations.
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  @keyframes heroFadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-heading {
    animation: heroFadeUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .hero-subheading {
    animation: heroFadeUp 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }

  .hero-buttons {
    animation: heroFadeUp 0.8s ease-out 0.6s forwards;
    opacity: 0;
  }

  .hero-logo {
    animation: heroFadeUp 0.8s ease-out 0.3s forwards;
    opacity: 0;
  }

  .glassCard1 {
    animation: heroFadeUp 0.8s ease-out 0.8s forwards;
    opacity: 0;
  }

  .glassCard2 {
    animation: heroFadeUp 0.8s ease-out 1s forwards;
    opacity: 0;
  }

  .glassCard3 {
    animation: heroFadeUp 0.8s ease-out 1.2s forwards;
    opacity: 0;
  }
`;

// The about copy, with the two phrases that matter most marked by a highlighter.
const ABOUT: WordSegment[] = [
  "Hack United is a 501(c)(3) nonprofit. We run",
  { text: "free hackathons and workshops", mark: "a" },
  "for students who want to build real projects,",
  "not just pad a resume. Alongside technical work, we focus on",
  { text: "communication, teamwork, and presenting ideas clearly,", mark: "a" },
  "because that's what sticks after the event ends.",
];

function DiscordWidget() {
  return (
    <iframe
      src="https://e.widgetbot.io/channels/1108199473206792203/1113813542039207977"
      width="100%"
      height="600"
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      className="block w-full bg-[#0c0a10]"
      title="Hack United Discord Community"
    />
  );
}

function SectionHead({
  children,
  aside,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header className="hu-sec-head">
      <div>
        <h2 className="hu-h2" data-split>
          {children}
        </h2>
      </div>
      {aside && (
        <div className="hu-sec-aside" data-reveal style={revealDelay(160)}>
          {aside}
        </div>
      )}
    </header>
  );
}

const revealDelay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <style jsx>{styles}</style>
      <main ref={mainRef} className="hu-home overflow-hidden">
        <div className={`${inter.className} hu-hero-shell`}>
        {/* Hero Section */}
        <div className="hu-hero-stage w-full pt-[30px] md:min-h-screen relative">
          <div className="hu-hero-fade" aria-hidden="true" />
          <div className="headContainer max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[48%_52%] mt-16 sm:mt-24 md:mt-[140px] pb-12 sm:pb-16 md:pb-[160px] px-6 sm:px-8 md:px-8 relative">
            <div className="right hu-hero-copy">
              <h1 className="hero-heading hu-hero-title">
                Empowering the next generation of <em>tech innovators</em>
              </h1>
              <p className="hero-subheading hu-hero-sub">
                Free hackathons and workshops where students build real projects, and practise the skills that
                outlast them: communication, teamwork, and presenting ideas clearly.
              </p>
              <div className="hero-buttons hu-hero-actions">
                <a
                  href="https://unitedhacks.hackunited.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hu-btn"
                >
                  Join a hackathon
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button type="button" onClick={() => scrollTo("who-are-we")} className="hu-btn hu-btn-ghost">
                  Learn more
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="left flex items-center justify-center md:justify-end mt-8 sm:mt-12 md:mt-0">
              <img
                className="hero-logo h-[200px] sm:h-[240px] md:h-[350px] md:mr-[48px]"
                src="./images/Logo.png"
                alt=""
              />
              <div className="glassCard glassCard1 hidden md:flex">
                <h3 className="heroAccent">25,000+</h3>
                <p>Engineers Impacted</p>
              </div>
              <div className="glassCard glassCard2 hidden md:flex">
                <h3 className="heroAccent">3,000+</h3>
                <p>Community Members</p>
              </div>
              <div className="glassCard glassCard3 hidden md:flex">
                <h3 className="heroAccent">50+</h3>
                <p>Countries Reached</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Recognized by */}
        <section className="hu-press" aria-label="Recognized by">
          <div className="hu-wrap hu-press-inner">
            <p className="hu-press-kicker hu-mono shrink-0">Recognized by</p>
            <DraggableMarquee
              className="hu-press-strip"
              items={pressLogos}
              getKey={(logo) => logo.alt}
              label="Press coverage. Drag to scroll, or use the arrow keys."
              renderItem={(logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hu-press-logo"
                  title={`Read the ${logo.alt} story`}
                >
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </a>
              )}
            />
          </div>
        </section>

        <div className="hu-dawn" aria-hidden="true" />

        {/* About */}
        <section id="who-are-we" className="hu-section scroll-mt-16" data-stop="Who we are">
          <div className="hu-wrap">
            <SectionHead>
              <em>About</em> us
            </SectionHead>
            <div className="hu-about">
              <ScrollWords segments={ABOUT} className="hu-about-copy" />
              <div className="hu-globe-wrap nb" data-drop>
                <DotGlobe />
                <div className="hu-globe-meta hu-mono" aria-hidden="true">
                  <span>50+ countries</span>
                  <span>Drag to spin</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="hu-section" data-stop="Impact" data-zone="a">
          <div className="hu-wrap">
            <SectionHead>
              <em>Our</em> impact
            </SectionHead>
            <ImpactBoard />
          </div>
        </section>

        {/* Goals */}
        <section className="hu-section" data-stop="Goals">
          <div className="hu-wrap">
            <SectionHead>
              <em>Our</em> goals
            </SectionHead>
            <GoalPanels />
          </div>
        </section>

        {/* Previous hackathons */}
        <section className="hu-section hu-grid-bg" data-stop="Archive" data-zone="b">
          <div className="hu-wrap">
            <SectionHead
              aside={
                <a href="https://unitedhacks.hackunited.org" target="_blank" rel="noopener noreferrer" className="hu-btn hu-btn-ghost">
                  Visit United Hacks
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              }
            >
              <em>Previous</em> hackathons
            </SectionHead>
            <div data-drop>
              <EditionScrubber />
            </div>
          </div>
        </section>

        {/* Judges */}
        <section className="hu-section" data-stop="Judges">
          <div className="hu-wrap">
            <SectionHead
              aside={
                <p className="hu-body">
                  Want to judge?{" "}
                  <a href="mailto:humans@hackunited.org" className="hu-link">
                    humans@hackunited.org
                  </a>
                </p>
              }
            >
              <em>Judges</em> from
            </SectionHead>
            <JudgesGrid />
          </div>
        </section>

        {/* Discord */}
        <section className="hu-section" data-stop="Community" data-zone="b">
          <div className="hu-wrap">
            <div className="hu-discord">
              <div className="hu-discord-copy">
                <h2 className="hu-h2" data-split>
                  <em>Discord</em>
                </h2>
                <p className="hu-lead mt-6" data-reveal style={revealDelay(140)}>
                  Most coordination happens here: help channels, announcements, and team chat during hackathons.
                </p>
                <a
                  href="https://discord.gg/YyPDpmDZke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hu-btn mt-8"
                  data-reveal
                  style={revealDelay(200)}
                >
                  Join the server
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="hu-window nb" data-drop>
                <div className="hu-window-bar hu-mono">
                  <span className="hu-live" aria-hidden="true" />
                  <span># hack-united</span>
                  <span className="ml-auto hidden sm:inline">widgetbot · live</span>
                </div>
                <DiscordWidget />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
