"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, Copy, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import "./social.css"

const EMAIL = "humans@hackunited.org"

const quickLinks = [
  { label: "Website", href: "/", display: "hackunited.org", external: false },
  { label: "Donate", href: "/donate", display: "hackunited.org/donate", external: false },
  { label: "Discord", href: "https://discord.gg/YyPDpmDZke", display: "discord.gg/YyPDpmDZke", external: true },
  { label: "Blog", href: "https://blog.hackunited.org/", display: "blog.hackunited.org", external: true },
]

const socials = [
  { label: "Instagram", handle: "@hack_united", href: "https://www.instagram.com/hack_united/", icon: Instagram },
  { label: "LinkedIn", handle: "/company/hack-united", href: "https://www.linkedin.com/company/hack-united", icon: Linkedin },
  { label: "YouTube", handle: "@hack_united", href: "https://youtube.com/@hack_united/", icon: Youtube },
  { label: "X", handle: "@hackunited_", href: "https://x.com/hackunited_", icon: Twitter },
]

export default function SocialPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <main className="hu-home">
      <section className="hu-wrap hu-page-head">
        <p className="hu-label">
          <b>@</b>
          <span>Profiles and a direct line</span>
        </p>
        <h1 className="hu-display mt-7" data-split>
          <em>Social</em>
        </h1>
        <p className="hu-lead mt-8">Profiles and a direct line. Email is {EMAIL}.</p>
      </section>

      <section className="hu-wrap pb-24">
        <ul className="social-rows">
          {quickLinks.map((item, i) => {
            const inner = (
              <>
                <span className="social-num hu-mono">0{i + 1}</span>
                <span className="social-label">{item.label}</span>
                <span className="social-url hu-mono">{item.display}</span>
                <ArrowUpRight className="social-arrow" aria-hidden="true" />
              </>
            )
            return (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="social-row">
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className="social-row">
                    {inner}
                  </Link>
                )}
              </li>
            )
          })}
          <li>
            <button type="button" onClick={copyEmail} className="social-row" data-copied={copied || undefined}>
              <span className="social-num hu-mono">05</span>
              <span className="social-label">Email</span>
              <span className="social-url hu-mono" aria-live="polite">
                {copied ? `Copied ${EMAIL}` : EMAIL}
              </span>
              {copied ? (
                <Check className="social-arrow" aria-hidden="true" />
              ) : (
                <Copy className="social-arrow" aria-hidden="true" />
              )}
            </button>
          </li>
        </ul>

        <div className="social-grid">
          {socials.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="social-card nb nb-hover">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="social-card-label">{item.label}</span>
                <span className="social-card-handle hu-mono">{item.handle}</span>
                <ArrowUpRight className="social-card-arrow h-4 w-4" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </section>
    </main>
  )
}
