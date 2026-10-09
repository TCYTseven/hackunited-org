"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
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
    { label: "Website", href: "/", external: false },
    { label: "Donate", href: "/donate", external: false },
    { label: "Discord", href: "https://discord.gg/YyPDpmDZke", external: true },
    { label: "Blog", href: "https://blog.hackunited.org/", external: true },
  ]

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/hack_united/", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/hack-united", icon: Linkedin },
    { label: "YouTube", href: "https://youtube.com/@hack_united/", icon: Youtube },
    { label: "X", href: "https://x.com/hackunited_", icon: Twitter },
  ]

  return (
    <main className="atelier">
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="atelier-title mb-5">
          <em>Social</em>
        </h1>
        <p className="atelier-lead mb-10">
          Profiles and a direct line. Email is humans@hackunited.org.
        </p>

        <div className="border-t border-[#2c2438]">
          {quickLinks.map((item) => {
            const className = "atelier-row"
            if (!item.external) {
              return (
                <Link key={item.label} href={item.href} className={className}>
                  <span>{item.label}</span>
                  <span className="text-[#c4b5fd]">→</span>
                </Link>
              )
            }
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                <span>{item.label}</span>
                <span className="text-[#c4b5fd]">→</span>
              </a>
            )
          })}
          <button type="button" onClick={copyEmail} className="atelier-row w-full text-left">
            <span>Email</span>
            <span className="text-sm text-[#c4b5fd]">Copy</span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {socials.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-[#2c2438] bg-[#14111a] px-4 py-4 text-sm text-[#f3efe6] hover:border-[#c4b5fd]"
              >
                {item.label}
                <Icon className="h-4 w-4 text-[#c4b5fd]" />
              </a>
            )
          })}
        </div>

        {showCopiedMessage && (
          <div className="fixed bottom-4 right-4 z-50 border border-[#c4b5fd] bg-[#14111a] px-4 py-3 text-sm text-[#f3efe6]">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#c4b5fd]" />
              <span>Copied humans@hackunited.org</span>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
