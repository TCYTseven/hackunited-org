"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <main className="bg-[#050505] text-white">
      <section className="border-b border-white/10 pt-28 pb-12 sm:pb-16">
        <div className="container px-4 mx-auto max-w-3xl">
          <h1 className="hu-title mb-4">Apply</h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            Hack United is a student-run nonprofit. Roles are unpaid. We review applications on a rolling basis and
            reply by email when we have a match.
          </p>
          <a
            href="mailto:jobs@hackunited.org"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            jobs@hackunited.org
          </a>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-b border-white/10">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold mb-4">What you get</h2>
              <Card className="hu-panel border-0 shadow-none">
                <CardContent className="p-5">
                  <ul className="space-y-2 text-sm text-gray-300">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="leading-snug">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
                    Swag and official service-hour credit depend on your role and tenure. Ask HR if you need
                    documentation for school programs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-lg font-semibold mb-4">Open roles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {departments.flatMap((department) =>
                  department.positions.map((position) => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => openPositionModal(position)}
                      className="text-left p-4 hu-panel hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-md bg-white/5 text-purple-200 shrink-0">{department.icon}</div>
                        <div className="min-w-0">
                          <h3 className="font-medium text-sm text-white mb-1">{position}</h3>
                          <Badge variant="outline" className="text-xs border-white/15 text-gray-400 font-normal">
                            {department.title}
                          </Badge>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" id="application-section">
        <div className="container px-4 mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold mb-2">How to apply</h2>
          <p className="text-gray-400 text-sm mb-8">
            Send one email to{" "}
            <a href="mailto:jobs@hackunited.org" className="text-purple-400 hover:underline">
              jobs@hackunited.org
            </a>
            . Use the subject line{" "}
            <span className="text-gray-300">Hack United volunteer application</span> and include the items below.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-neutral-950 border-white/10">
              <CardContent className="p-5 sm:p-6">
                <h3 className="font-medium mb-4">Process</h3>
                <ol className="space-y-4 text-sm text-gray-300 list-decimal list-inside marker:text-gray-500">
                  <li>Email your application with the details on the right.</li>
                  <li>We read applications as they arrive. You may get a follow-up interview on Discord.</li>
                  <li>If we offer you a role, HR will send onboarding steps and a team invite.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-neutral-950 border-white/10">
              <CardContent className="p-5 sm:p-6">
                <h3 className="font-medium mb-4">Include in your email</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Full name and contact email</li>
                  <li>Age and location (country and state or region)</li>
                  <li>Role(s) you want</li>
                  <li>Why you want to volunteer with Hack United</li>
                  <li>Relevant experience or links (GitHub, portfolio, socials)</li>
                  <li>Hours per week you can commit</li>
                  <li>Resume or LinkedIn (optional)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <a
              href={mailtoApply}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Open application email
            </a>
          </div>
        </div>
      </section>

      {selectedPosition && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-white/10 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 p-5 border-b border-white/10">
              <div>
                <p className="text-xs text-gray-500 mb-1">{selectedPosition.department}</p>
                <h3 className="text-lg font-semibold">{selectedPosition.name}</h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-1.5 rounded-md hover:bg-white/10 text-gray-400"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-5 text-sm">
              <div>
                <h4 className="font-medium mb-2">Responsibilities</h4>
                <ul className="space-y-1.5 text-gray-400 list-disc list-inside">
                  {selectedPosition.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Requirements</h4>
                <ul className="space-y-1.5 text-gray-400 list-disc list-inside">
                  {selectedPosition.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 border-t border-white/10 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={scrollToApplication}
                className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-2.5 rounded-md text-sm font-medium"
              >
                Apply
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="flex-1 border border-white/15 text-gray-300 py-2.5 rounded-md text-sm hover:bg-white/5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
