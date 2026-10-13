import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Globe from "@/components/site/globe";
import Odometer from "@/components/site/odometer";
import Rail from "@/components/site/rail";
import ReleaseLog from "@/components/home/release-log";
import "./page.css";

const logos = [
  {
    src: "/images/companies logo/TechBullionLogo.webp",
    alt: "TechBullion",
    href: "https://techbullion.com/teenage-founder-creates-hackathon-program-to-help-peers/",
  },
  {
    src: "/images/companies logo/asocciatePress_00000.png",
    alt: "Associated Press",
    href: "https://apnews.com/press-release/ein-presswire-newsmatics/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills-d95d1a2b7f2b0367502ec18bd0148d08",
  },
  {
    src: "/images/companies logo/digitalJournal_00000.png",
    alt: "Digital Journal",
    href: "https://www.digitaljournal.com/pr/news/vehement-media/teen-led-hack-united-launches-united-1122733292.html",
  },
  {
    src: "/images/companies logo/fox40_00000.png",
    alt: "Fox 40",
    href: "https://fox40.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills/",
  },
  {
    src: "/images/companies logo/news 10_00000.png",
    alt: "News 10",
    href: "https://www.news10.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills/",
  },
  {
    src: "/images/companies logo/theGlobe_00000.png",
    alt: "The Globe and Mail",
    href: "https://www.barchart.com/story/news/33037092/hack-united-empowers-youth-with-soft-skills-at-united-hacks-v5",
  },
];

const judges = [
  { src: "/judgesfrom/Amazon-Logo.png", alt: "Amazon" },
  { src: "/judgesfrom/Google-Logo.png", alt: "Google" },
  { src: "/judgesfrom/Microsoft-Logo.png", alt: "Microsoft" },
  { src: "/judgesfrom/Stanford-Logo.png", alt: "Stanford" },
  { src: "/judgesfrom/Visa-Logo.png", alt: "Visa" },
  { src: "/judgesfrom/YC-Logo.png", alt: "Y Combinator" },
];

const impactHighlights = [
  {
    value: "25,000+",
    label: "Engineers impacted",
    detail: "Hackathons, workshops, and Discord programming.",
  },
  {
    value: "3,000+",
    label: "Community members",
    detail: "Students building together year-round.",
  },
  {
    value: "50+",
    label: "Countries reached",
    detail: "Participants from every major region.",
  },
];

const goalPillars = [
  {
    title: "Soft skills",
    description:
      "Communication, teamwork, and presenting work matter as much as the code. Our events are built around that.",
  },
  {
    title: "Real projects",
    description:
      "Each hackathon theme ties to problems people actually face. You ship something, not just a tutorial clone.",
  },
  {
    title: "Community",
    description:
      "Discord, mentors, and repeat participants. Most people stay after their first event.",
  },
];

const heroStats = [
  { value: "25,000+", label: "Engineers Impacted" },
  { value: "3,000+", label: "Community Members" },
  { value: "50+", label: "Countries Reached" },
];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

function Guides() {
  return (
    <div className="guides" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

function DiscordWidget() {
  return (
    <iframe
      src="https://e.widgetbot.io/channels/1108199473206792203/1113813542039207977"
      width="100%"
      height="600"
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      className="discord-embed"
      title="Hack United Discord Community"
    />
  );
}

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero surface-ink">
        <Guides />
        <div className="wrap hero-inner">
          <div className="hero-top">
            <h1 className="hero-title lines" data-reveal>
              <span className="line">
                <span>
                  <span className="mark">Empowering</span>
                </span>
              </span>
              <span className="line">
                <span>the Next Generation</span>
              </span>
              <span className="line">
                <span>of Tech Innovators</span>
              </span>
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="hero-copy">
              <p className="hero-sub text-pretty" data-reveal style={delay(250)}>
                A non-profit hosting free hackathons and workshops focused on building essential soft
                skills through hands-on tech projects and real-world application.
              </p>
              <div className="hero-actions" data-reveal style={delay(350)}>
                <a href="#who-are-we" className="btn">
                  Learn More
                  <ArrowDown className="btn-arrow btn-arrow-down h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://unitedhacks.hackunited.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Hackathons
                  <ArrowUpRight className="btn-arrow btn-arrow-up h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <Globe className="hero-globe" readoutId="globe-readout" />
        </div>

        <div className="hero-strip">
          <div className="wrap hero-strip-inner">
            <dl className="hero-stats">
              {heroStats.map((stat, i) => (
                <div key={stat.label} className="hero-stat" data-reveal style={delay(450 + i * 90)}>
                  <dt className="t-label text-fg2">{stat.label}</dt>
                  <dd className="hero-stat-value tabular">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div id="globe-readout" className="hero-readout t-label tabular" aria-hidden="true" data-reveal style={delay(720)}>
              <span className="dot dot-live" />
              <span className="hero-readout-values">
                <span data-lat>22.00°N</span>
                <span data-lon>020.00°W</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Recognized by */}
      <section className="press surface-ink" aria-labelledby="press-title">
        <div className="wrap">
          <div className="press-grid">
            <h2 id="press-title" className="press-title t-label">
              Recognized By
            </h2>
            <ul className="press-list">
              {logos.map((logo, i) => (
                <li key={logo.alt} data-reveal="fade" style={delay(i * 70)}>
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-cell"
                  >
                    <img src={logo.src} alt={logo.alt} loading="lazy" className="press-logo" data-logo={logo.alt} />
                    <ArrowUpRight className="press-arrow h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="who-are-we" className="section surface-paper about">
        <div className="wrap">
          <Rail index="01" />
          <div className="about-grid">
            <h2 className="about-title t-mega lines" data-reveal>
              <span className="line">
                <span>About</span>
              </span>
              <span className="line">
                <span>us</span>
              </span>
            </h2>
            <div className="about-mark" aria-hidden="true">
              <img src="/images/globe-icon.png" alt="" className="about-globe" />
            </div>
            <p className="about-copy text-pretty" data-reveal style={delay(150)}>
              Hack United is a 501(c)(3) nonprofit. We run free hackathons and workshops for students who want to
              build real projects, not just pad a resume. Alongside technical work, we focus on communication,
              teamwork, and presenting ideas clearly, because that&apos;s what sticks after the event ends.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section surface-iris impact">
        <div className="wrap">
          <Rail index="02" />
          <h2 className="t-display lines mt-10" data-reveal>
            <span className="line">
              <span>Our</span>
            </span>
            <span className="line">
              <span>impact</span>
            </span>
          </h2>

          <div className="ledger">
            {impactHighlights.map((item, i) => (
              <article key={item.label} className="ledger-row" data-reveal style={delay(i * 80)}>
                <p className="ledger-num">
                  <Odometer value={item.value} />
                </p>
                <div className="ledger-text">
                  <h3 className="ledger-label">{item.label}</h3>
                  <p className="ledger-detail">{item.detail}</p>
                </div>
              </article>
            ))}
            <a
              href="https://fund.hackunited.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="ledger-row ledger-link"
              data-reveal
              style={delay(240)}
            >
              <p className="ledger-num">Fund</p>
              <div className="ledger-text">
                <h3 className="ledger-label">United Fund</h3>
                <p className="ledger-detail">
                  Small grants ($50-$500) so student projects can ship past the prototype.
                </p>
              </div>
              <span className="ledger-cta t-label">
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section surface-ink goals">
        <div className="wrap">
          <Rail index="03" />
          <h2 className="t-display lines mt-10" data-reveal>
            <span className="line">
              <span>Our</span>
            </span>
            <span className="line">
              <span>goals</span>
            </span>
          </h2>
          <div className="goal-grid">
            {goalPillars.map((goal, i) => (
              <article key={goal.title} className="goal" data-reveal style={delay(i * 110)}>
                <span className="goal-index t-label tabular">{String(i + 1).padStart(2, "0")}</span>
                <div className="goal-body">
                  <h3 className="goal-title">{goal.title}</h3>
                  <p className="goal-text">{goal.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Previous hackathons */}
      <section className="section surface-ink-2 hackathons">
        <div className="wrap">
          <Rail index="04" />
          <h2 className="t-display lines mt-10" data-reveal>
            <span className="line">
              <span>Previous</span>
            </span>
            <span className="line">
              <span>hackathons</span>
            </span>
          </h2>
          <ReleaseLog />
        </div>
      </section>

      {/* Judges */}
      <section className="section surface-paper judges">
        <div className="wrap">
          <Rail index="05" />
          <div className="judges-head">
            <h2 className="t-display lines" data-reveal>
              <span className="line">
                <span>Judges</span>
              </span>
              <span className="line">
                <span>from</span>
              </span>
            </h2>
            <p className="judges-cta" data-reveal style={delay(150)}>
              Want to judge?{" "}
              <a href="mailto:humans@hackunited.org" className="link-line">
                humans@hackunited.org
              </a>
            </p>
          </div>
          <ul className="judge-grid">
            {judges.map((judge, i) => (
              <li key={judge.alt} className="judge-cell" data-reveal="fade" style={delay(i * 70)}>
                <img src={judge.src} alt={judge.alt} loading="lazy" className="judge-logo" data-logo={judge.alt} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Discord */}
      <section className="section surface-ink discord">
        <div className="wrap">
          <Rail index="06" />
          <div className="discord-grid">
            <div className="discord-copy">
              <h2 className="t-mega lines" data-reveal>
                <span className="line">
                  <span>Discord</span>
                </span>
              </h2>
              <p className="discord-text text-pretty" data-reveal style={delay(150)}>
                Most coordination happens here: help channels, announcements, and team chat during hackathons.
              </p>
            </div>
            <div className="discord-frame crop" data-reveal style={delay(200)}>
              <DiscordWidget />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
