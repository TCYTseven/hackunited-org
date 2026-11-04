"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Mail, X } from "lucide-react"
import "./apply.css"

type PositionName = keyof typeof positionDetails

const benefits = [
  "Volunteer service hours (where your school or program accepts them)",
  "Hack United email address when applicable",
  "Certificates and reference letters on request",
  "Work with other students on real projects",
]

const positionDetails = {
  "Social Media Manager": {
    department: "Growth",
    responsibilities: [
      "Post on assigned platforms (X, Instagram, Threads, etc.)",
      "Coordinate with designers on graphics and timing",
      "Track basic engagement and adjust posts as needed",
      "Keep tone consistent with Hack United branding",
    ],
    requirements: [
      "Experience posting as a brand, club, or personal project",
      "Clear writing and attention to detail",
      "Able to meet weekly deadlines",
    ],
  },
  "Short-Form Creator": {
    department: "Growth",
    responsibilities: [
      "Edit short videos for Reels, TikTok, and YouTube Shorts",
      "Pitch ideas that fit current trends and our events",
      "Turn event footage and announcements into usable clips",
    ],
    requirements: [
      "Video editing experience",
      "Familiarity with short-form platforms",
      "Portfolio or examples you can share",
    ],
  },
  "Growth Intern": {
    department: "Growth",
    responsibilities: [
      "Promote the Discord server in approved channels",
      "Represent Hack United professionally in partner servers",
      "Help with outreach lists and follow-ups",
    ],
    requirements: [
      "Regular Discord user",
      "Comfortable starting conversations online",
      "Follows instructions and documents what you did",
    ],
  },
  "Talent Acquisition Manager": {
    department: "Human Resources",
    responsibilities: [
      "Help write role descriptions and post openings",
      "Screen applications and schedule interviews",
      "Keep applicants updated through the process",
      "Suggest improvements to how we hire volunteers",
    ],
    requirements: [
      "Organized and responsive over email",
      "Comfortable talking with candidates",
      "Prior recruiting or club leadership helps",
    ],
  },
  "Administrative Coordinator": {
    department: "Human Resources",
    responsibilities: [
      "Support outreach to speakers, partners, and sponsors",
      "Draft emails and track replies",
      "Help HR and operations with scheduling and records",
    ],
    requirements: [
      "Professional email tone",
      "Reliable follow-up",
      "Spreadsheets or Notion experience is a plus",
    ],
  },
  "Outreach Manager": {
    department: "Strategy",
    responsibilities: [
      "Grow activity on Discord and related channels",
      "Moderate discussions and enforce community guidelines",
      "Run polls, challenges, and small community events",
      "Escalate issues to leadership when needed",
    ],
    requirements: [
      "Community or moderation experience",
      "Patient and fair when handling conflict",
      "Available for regular check-ins on Discord",
    ],
  },
  "Project Manager": {
    department: "Strategy",
    responsibilities: [
      "Research topics and outline article ideas",
      "Coordinate writers and deadlines for blog.hackunited.org",
      "Review drafts for clarity and accuracy",
    ],
    requirements: [
      "Strong planning and communication",
      "Comfortable giving feedback to peers",
      "Interest in tech and STEM news",
    ],
  },
  "Article Writer": {
    department: "Community & Content",
    responsibilities: [
      "Write 1-2 page articles for the Hack United blog",
      "Cite sources and write for a high-school audience",
      "Revise based on editor feedback",
    ],
    requirements: [
      "Solid research and writing skills",
      "Original work; AI assists only where disclosed",
      "Sample writing appreciated",
    ],
  },
  "Community Manager": {
    department: "Community & Content",
    responsibilities: [
      "Maintain hackunited.org and hackathon sites",
      "Fix bugs and ship small features (HTML/CSS/JS)",
      "Work with design on layout and accessibility",
    ],
    requirements: [
      "HTML, CSS, and JavaScript",
      "Next.js or React experience is a plus",
      "Git basics",
    ],
  },
} as const

const departments = [
  { title: "Growth", positions: ["Social Media Manager", "Short-Form Creator", "Growth Intern"] },
  { title: "Human Resources", positions: ["Talent Acquisition Manager", "Administrative Coordinator"] },
  { title: "Strategy", positions: ["Outreach Manager", "Project Manager"] },
  { title: "Community & Content", positions: ["Article Writer", "Community Manager"] },
] as const

const roles = departments.flatMap((d) =>
  d.positions.map((name) => ({ name: name as PositionName, department: d.title as string }))
)

const processSteps = [
  "Email your application with the details listed below.",
  "We read applications as they arrive. You may get a follow-up interview on Discord.",
  "If we offer you a role, HR will send onboarding steps and a team invite.",
]

const emailItems = [
  "Full name and contact email",
  "Age and location (country and state or region)",
  "Role(s) you want",
  "Why you want to volunteer with Hack United",
  "Relevant experience or links (GitHub, portfolio, socials)",
  "Hours per week you can commit",
  "Resume or LinkedIn (optional)",
]

// Pre-filled application email; the role line is filled in when applying from a role.
const mailtoFor = (role?: string) =>
  "mailto:jobs@hackunited.org?subject=" +
  encodeURIComponent("Hack United volunteer application") +
  "&body=" +
  encodeURIComponent(
    `Full name:\r\nEmail:\r\nAge:\r\nLocation (country, state/region):\r\n\r\nRole(s):${role ? ` ${role}` : ""}\r\n\r\nWhy you want to volunteer:\r\n\r\nRelevant experience:\r\n\r\nHours per week:\r\n\r\n(Optional) Resume or LinkedIn:\r\n`
  )

export default function ApplyPage() {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<PositionName | null>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const lastTrigger = useRef<HTMLElement | null>(null)

  // Keep showing the last role while the drawer slides out.
  const lastSelected = useRef<PositionName | null>(null)
  if (selected) lastSelected.current = selected
  const current = selected ?? lastSelected.current

  const shown = filter === "All" ? roles : roles.filter((r) => r.department === filter)
  const details = current ? positionDetails[current] : null

  const open = (name: PositionName, trigger: HTMLElement) => {
    lastTrigger.current = trigger
    setSelected(name)
  }

  const close = () => {
    setSelected(null)
    lastTrigger.current?.focus()
  }

  useEffect(() => {
    if (!selected) return
    drawerRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null)
        lastTrigger.current?.focus()
      }
    }
    document.documentElement.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [selected])

  const scrollToApplication = () => {
    setSelected(null)
    document.getElementById("application-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="hu-home">
      <section className="hu-wrap hu-page-head">
        <p className="hu-label">
          <b>{String(roles.length).padStart(2, "0")}</b>
          <span>Open volunteer roles</span>
        </p>
        <div className="apply-hero">
          <h1 className="hu-display mt-7" data-split>
            <em>Apply</em>
          </h1>
          <div>
            <p className="hu-lead">
              Hack United is a student-run nonprofit. Roles are unpaid. We review applications on a rolling basis and
              reply by email when we have a match.
            </p>
            <a href="mailto:jobs@hackunited.org" className="hu-btn mt-7">
              <Mail className="h-4 w-4" />
              jobs@hackunited.org
            </a>
          </div>
        </div>
      </section>

      <section className="hu-section" data-stop="Open roles" data-zone="a">
        <div className="hu-wrap apply-board">
          <div>
            <div className="apply-board-head">
              <h2 className="hu-h3">Open roles</h2>
              <div className="apply-filters" role="group" aria-label="Filter by department">
                {["All", ...departments.map((d) => d.title)].map((title) => {
                  const count = title === "All" ? roles.length : roles.filter((r) => r.department === title).length
                  return (
                    <button
                      key={title}
                      type="button"
                      className="apply-filter"
                      aria-pressed={filter === title}
                      onClick={() => setFilter(title)}
                    >
                      {title}
                      <span className="hu-mono">{count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <ul className="apply-roles">
              {shown.map((role, i) => (
                <li
                  key={`${filter}-${role.name}`}
                  className="animate-in fade-in-0 slide-in-from-bottom-1 duration-300 motion-reduce:animate-none"
                  style={{ animationDelay: `${i * 35}ms`, animationFillMode: "backwards" }}
                >
                  <button type="button" onClick={(e) => open(role.name, e.currentTarget)} className="apply-role">
                    <span className="apply-role-num hu-mono">{String(roles.indexOf(role) + 1).padStart(2, "0")}</span>
                    <span className="apply-role-name">{role.name}</span>
                    <span className="apply-role-dept hu-mono">{role.department}</span>
                    <span className="apply-role-go" aria-hidden="true">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <aside className="apply-perks nb nb-alt">
            <h2 className="hu-label">
              <b>+</b>
              <span>What you get</span>
            </h2>
            <ol>
              {benefits.map((benefit, i) => (
                <li key={benefit}>
                  <span className="hu-mono">{String(i + 1).padStart(2, "0")}</span>
                  {benefit}
                </li>
              ))}
            </ol>
            <p className="apply-perks-note">
              Swag and official service-hour credit depend on your role and tenure. Ask HR if you need documentation for
              school programs.
            </p>
          </aside>
        </div>
      </section>

      <section className="hu-section scroll-mt-16" id="application-section" data-stop="How to apply">
        <div className="hu-wrap">
          <h2 className="hu-h2" data-split>
            <em>How</em> to apply
          </h2>
          <p className="hu-lead mt-6">
            Send one email to{" "}
            <a href="mailto:jobs@hackunited.org" className="hu-link">
              jobs@hackunited.org
            </a>
            . Use the subject line Hack United volunteer application and include the items below.
          </p>

          <ol className="apply-steps">
            {processSteps.map((step, i) => (
              <li key={step}>
                <span className="apply-step-num hu-mono">Step 0{i + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <div className="apply-application">
            <div className="apply-checklist nb">
              <h3 className="hu-h3">Include in your email</h3>
              <ol>
                {emailItems.map((item, i) => (
                  <li key={item}>
                    <span className="apply-check-num hu-mono">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="apply-send nb">
              <div className="apply-send-copy">
                <p className="apply-send-kicker hu-mono">Send to jobs@hackunited.org</p>
                <p className="apply-send-status">The email opens with every field ready to fill in</p>
                <p className="apply-send-subject hu-mono">Subject: Hack United volunteer application</p>
              </div>
              <a href={mailtoFor()} className="hu-btn apply-send-btn">
                <Mail className="h-4 w-4" />
                Open email
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="apply-scrim" data-open={!!selected} onClick={close} aria-hidden="true" />
      <div
        ref={drawerRef}
        className="apply-drawer"
        data-open={!!selected}
        role="dialog"
        aria-modal="true"
        aria-hidden={!selected}
        aria-labelledby="apply-drawer-title"
        tabIndex={-1}
      >
        {current && details && (
          <>
            <div className="apply-drawer-head">
              <div>
                <p className="hu-mono text-[11px] uppercase tracking-[0.12em] text-[var(--hu-accent)]">
                  {details.department}
                </p>
                <h3 id="apply-drawer-title" className="apply-drawer-title">
                  {current}
                </h3>
              </div>
              <button type="button" onClick={close} className="apply-close" aria-label="Close" tabIndex={selected ? 0 : -1}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="apply-drawer-body">
              <h4 className="hu-label">
                <b>01</b>
                <span>Responsibilities</span>
              </h4>
              <ul>
                {details.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h4 className="hu-label mt-10">
                <b>02</b>
                <span>Requirements</span>
              </h4>
              <ul>
                {details.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="apply-drawer-foot">
              <a href={mailtoFor(current)} className="hu-btn flex-1" tabIndex={selected ? 0 : -1}>
                <Mail className="h-4 w-4" />
                Apply for this role
              </a>
              <button type="button" onClick={scrollToApplication} className="hu-btn hu-btn-ghost flex-1" tabIndex={selected ? 0 : -1}>
                How to apply
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
