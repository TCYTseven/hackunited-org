"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Heart, Mail, Star, Copy, Check } from "lucide-react"
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SocialPage() {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("humans@hackunited.org")
      setShowCopiedMessage(true)
      setTimeout(() => setShowCopiedMessage(false), 3000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const quickLinks = [
    { label: "Website", href: "/", icon: Home, external: false },
    { label: "Donate", href: "/donate", icon: Heart, external: false },
    { label: "Discord", href: "https://discord.gg/YyPDpmDZke", icon: null, external: true },
    { label: "Blog", href: "https://blog.hackunited.org/", icon: Star, external: true },
  ]

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/hack_united/", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/hack-united", icon: Linkedin },
    { label: "YouTube", href: "https://youtube.com/@hack_united/", icon: Youtube },
    { label: "X", href: "https://x.com/hackunited_", icon: Twitter },
  ]

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen -mt-20 pt-28 pb-14">
        <div className="absolute inset-0 bg-[#0b0a0f]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_35%,rgba(255,255,255,0.015))]"></div>
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-purple-400/35"></div>

        <div className="container relative px-4 mx-auto">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-white/[0.04] hover:bg-white/[0.04] border border-purple-300/40 text-purple-200">
                Connect With Us
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Social Links</h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Connect with us across all platforms and stay updated with the latest from Hack United.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_10px_28px_rgba(0,0,0,0.28)] p-4 sm:p-5">
              <div className="space-y-2">
                {quickLinks.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <span className="w-full inline-flex items-center justify-between rounded-xl px-4 py-3 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors">
                      <span className="font-medium text-gray-100">{item.label}</span>
                      {item.label === "Discord" ? (
                        <svg className="w-5 h-5 text-purple-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.69C13.09 4.46 11.51 4.46 9.95 4.69C9.85 4.48 9.72 4.21 9.6 4C8.09 4.26 6.66 4.71 5.33 5.33C2.94 8.8 2.34 12.2 2.64 15.54C4.37 16.81 6.05 17.59 7.71 18.07C8.05 17.62 8.35 17.14 8.6 16.63C8.01 16.42 7.44 16.15 6.91 15.85C7.03 15.76 7.14 15.67 7.25 15.58C10.4 16.99 13.85 16.99 16.97 15.58C17.08 15.67 17.19 15.76 17.31 15.85C16.77 16.16 16.2 16.42 15.61 16.63C15.86 17.14 16.16 17.62 16.5 18.07C18.16 17.59 19.84 16.81 21.57 15.54C21.92 11.62 20.96 8.25 19.27 5.33ZM8.42 13.36C7.42 13.36 6.6 12.47 6.6 11.37C6.6 10.27 7.4 9.38 8.42 9.38C9.44 9.38 10.25 10.27 10.24 11.37C10.24 12.47 9.44 13.36 8.42 13.36ZM15.7 13.36C14.7 13.36 13.88 12.47 13.88 11.37C13.88 10.27 14.68 9.38 15.7 9.38C16.72 9.38 17.53 10.27 17.52 11.37C17.52 12.47 16.72 13.36 15.7 13.36Z" />
                        </svg>
                      ) : (
                        Icon && <Icon className="w-5 h-5 text-purple-200" />
                      )}
                    </span>
                  )

                  if (!item.external) {
                    return (
                      <Link key={item.label} href={item.href} className="block">
                        {content}
                      </Link>
                    )
                  }

                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  )
                })}

                <button
                  onClick={copyEmail}
                  className="w-full inline-flex items-center justify-between rounded-xl px-4 py-3 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
                >
                  <span className="font-medium text-gray-100">Email</span>
                  <Mail className="w-5 h-5 text-purple-200" />
                </button>
              </div>

              <div className="h-px my-5 bg-white/10"></div>

              <div className="flex items-center justify-center gap-3">
                {socials.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-5 h-5 text-purple-200" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {showCopiedMessage && (
            <div className="fixed right-4 bottom-4 bg-[#17131f] border border-purple-400/30 text-white px-4 py-3 rounded-lg shadow-[0_8px_18px_rgba(0,0,0,0.35)] z-50 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied: humans@hackunited.org</span>
                <Copy className="w-4 h-4 text-purple-200" />
              </div>
            </div>
          )}
          </div>
      </section>
    </main>
  )
}
