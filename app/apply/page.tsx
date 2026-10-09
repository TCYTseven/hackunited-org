"use client"

import { useState } from "react"
import {
  Mail,
  Code,
  Megaphone,
  Briefcase,
  MessageSquare,
  X,
} from "lucide-react"

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
  {
    title: "Growth",
    icon: <Megaphone className="w-5 h-5" />,
    positions: ["Social Media Manager", "Short-Form Creator", "Growth Intern"],
  },
  {
    title: "Human Resources",
    icon: <Briefcase className="w-5 h-5" />,
    positions: ["Talent Acquisition Manager", "Administrative Coordinator"],
  },
  {
    title: "Strategy",
    icon: <MessageSquare className="w-5 h-5" />,
    positions: ["Outreach Manager", "Project Manager"],
  },
  {
    title: "Community & Content",
    icon: <Code className="w-5 h-5" />,
    positions: ["Article Writer", "Community Manager"],
  },
] as const

export default function ApplyPage() {
  const [selectedPosition, setSelectedPosition] = useState<{
    name: PositionName
    department: string
    responsibilities: readonly string[]
    requirements: readonly string[]
  } | null>(null)

  const openPositionModal = (positionName: PositionName) => {
    setSelectedPosition({
      name: positionName,
      ...positionDetails[positionName],
    })
  }

  const closeModal = () => setSelectedPosition(null)

  const scrollToApplication = () => {
    document.getElementById("application-section")?.scrollIntoView({ behavior: "smooth" })
    closeModal()
  }

  const mailtoApply =
    "mailto:jobs@hackunited.org?subject=Hack%20United%20volunteer%20application&body=Full%20name%3A%0D%0AEmail%3A%0D%0AAge%3A%0D%0ALocation%20(country%2C%20state%2Fregion)%3A%0D%0A%0D%0ARole(s)%3A%0D%0A%0D%0AWhy%20you%20want%20to%20volunteer%3A%0D%0A%0D%0ARelevant%20experience%3A%0D%0A%0D%0AHours%20per%20week%3A%0D%0A%0D%0A(Optional)%20Resume%20or%20LinkedIn%3A%0D%0A"

  return (
    <main className="atelier">
      <section className="border-b border-[#2c2438] pt-20 pb-14">
        <div className="container mx-auto max-w-5xl px-4">
          <h1 className="atelier-title mb-6">
            <em>Apply</em>
          </h1>
          <p className="atelier-lead mb-8">
            Hack United is a student-run nonprofit. Roles are unpaid. We review applications on a rolling basis and
            reply by email when we have a match.
          </p>
          <a href="mailto:jobs@hackunited.org" className="atelier-btn">
            <Mail className="w-4 h-4" />
            jobs@hackunited.org
          </a>
        </div>
      </section>

      <section className="border-b border-[#2c2438] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <h2 className="atelier-sub mb-5">What you get</h2>
              <div className="atelier-frame">
                <div className="atelier-frame-inner">
                  <ul className="space-y-3 text-sm text-[#e7e1d6]">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="border-b border-[#2c2438] pb-3 last:border-0 last:pb-0">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs leading-relaxed text-[#9a93ad]">
                    Swag and official service-hour credit depend on your role and tenure. Ask HR if you need
                    documentation for school programs.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="atelier-sub mb-5">Open roles</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {departments.flatMap((department) =>
                  department.positions.map((position) => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => openPositionModal(position)}
                      className="border border-[#2c2438] bg-[#14111a] p-4 text-left transition-colors hover:border-[#c4b5fd]"
                    >
                      <p className="mb-2 text-[11px] text-[#c4b5fd]">{department.title}</p>
                      <h3 className="text-[15px] text-[#f3efe6]">{position}</h3>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="application-section">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="atelier-sub mb-4">
            <em>How</em> to apply
          </h2>
          <p className="atelier-lead mb-8">
            Send one email to{" "}
            <a href="mailto:jobs@hackunited.org" className="atelier-link">
              jobs@hackunited.org
            </a>
            . Use the subject line Hack United volunteer application and include the items below.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="atelier-frame">
              <div className="atelier-frame-inner">
                <h3 className="mb-4 text-[#f3efe6]" style={{ fontFamily: "var(--font-serif), serif", fontSize: "1.35rem" }}>
                  Process
                </h3>
                <ol className="list-decimal space-y-3 pl-5 text-sm text-[#c8c2b6]">
                  <li>Email your application with the details on the right.</li>
                  <li>We read applications as they arrive. You may get a follow-up interview on Discord.</li>
                  <li>If we offer you a role, HR will send onboarding steps and a team invite.</li>
                </ol>
              </div>
            </div>
            <div className="atelier-frame">
              <div className="atelier-frame-inner">
                <h3 className="mb-4 text-[#f3efe6]" style={{ fontFamily: "var(--font-serif), serif", fontSize: "1.35rem" }}>
                  Include in your email
                </h3>
                <ul className="space-y-2 text-sm text-[#c8c2b6]">
                  <li>Full name and contact email</li>
                  <li>Age and location (country and state or region)</li>
                  <li>Role(s) you want</li>
                  <li>Why you want to volunteer with Hack United</li>
                  <li>Relevant experience or links (GitHub, portfolio, socials)</li>
                  <li>Hours per week you can commit</li>
                  <li>Resume or LinkedIn (optional)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a href={mailtoApply} className="atelier-btn">
              <Mail className="w-4 h-4" />
              Open application email
            </a>
          </div>
        </div>
      </section>

      {selectedPosition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="atelier-frame max-h-[90vh] w-full max-w-lg overflow-y-auto">
            <div className="atelier-frame-inner">
              <div className="mb-6 flex items-start justify-between gap-3 border-b border-[#2c2438] pb-4">
                <div>
                  <p className="mb-1 text-xs text-[#c4b5fd]">{selectedPosition.department}</p>
                  <h3 className="text-2xl text-[#f3efe6]" style={{ fontFamily: "var(--font-serif), serif" }}>
                    {selectedPosition.name}
                  </h3>
                </div>
                <button type="button" onClick={closeModal} className="text-[#b4adc4]" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-5 text-sm text-[#c8c2b6]">
                <div>
                  <h4 className="mb-2 text-[#f3efe6]">Responsibilities</h4>
                  <ul className="list-disc space-y-1.5 pl-4">
                    {selectedPosition.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-[#f3efe6]">Requirements</h4>
                  <ul className="list-disc space-y-1.5 pl-4">
                    {selectedPosition.requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <button type="button" onClick={scrollToApplication} className="atelier-btn flex-1">
                  Apply
                </button>
                <button type="button" onClick={closeModal} className="atelier-btn-ghost flex-1">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
