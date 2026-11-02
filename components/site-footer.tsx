"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://instagram.com/hack_united" },
  { label: "LinkedIn", href: "https://linkedin.com/company/hack-united" },
  { label: "X (Twitter)", href: "https://x.com/hackunited_" },
];

const company = [
  { label: "Sponsor Us", href: "mailto:humans@hackunited.org" },
  { label: "Press/Media", href: "mailto:humans@hackunited.org" },
  { label: "Volunteer", href: "/apply" },
];

const WORD = "Hack United";

/**
 * Footer wordmark, set solid and sized to fill the footer exactly.
 */
function Wordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  // Fit the word to the available width (measured at a 100px reference size).
  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const fit = () => {
      inner.style.fontSize = "100px";
      const styles = getComputedStyle(el);
      const available = el.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      const natural = inner.getBoundingClientRect().width;
      if (natural > 0) inner.style.fontSize = `${Math.min(336, (available / natural) * 100 * 0.99)}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="hu-wordmark" aria-hidden="true">
      <span ref={innerRef} className="hu-wordmark-inner">
        {WORD.split("").map((ch, i) => (
          <span key={i} data-letter={ch === " " ? undefined : ""} className={ch === " " ? "hu-wordmark-gap" : undefined}>
            {ch === " " ? " " : ch}
          </span>
        ))}
      </span>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="hu-footer">
      <div className="hu-wrap">
        <div className="grid gap-12 pt-16 pb-10 md:grid-cols-12 md:gap-8 md:pt-20">
          <div className="md:col-span-5">
            <Link href="/" className="hu-brand">
              <Image src="/images/globe-icon.png" alt="" width={28} height={28} className="hu-brand-mark" />
              <span className="hu-brand-name">Hack United</span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[var(--hu-fg-2)]">
              501(c)(3) nonprofit running free hackathons and workshops for students.
            </p>
            <p className="hu-mono mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--hu-fg-3)]">EIN 81-2908499</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="hu-footer-heading">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link href={item.href} className="hu-footer-link">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="hu-footer-link">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="hu-footer-heading">Follow</h3>
            <ul className="space-y-2.5">
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hu-footer-link">
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="hu-footer-heading">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:humans@hackunited.org" className="hu-footer-link">
                  humans@hackunited.org
                </a>
              </li>
              <li>
                <a href="https://discord.gg/YyPDpmDZke" target="_blank" rel="noopener noreferrer" className="hu-footer-link">
                  discord.gg/hackunited
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Wordmark />

      <div className="hu-wrap">
        <div className="flex flex-col gap-2 border-t border-[var(--hu-line)] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="hu-mono text-[11px] uppercase tracking-[0.12em] text-[var(--hu-fg-3)]">
            © {new Date().getFullYear()} Hack United. All rights reserved.
          </p>
          <a
            href="#top"
            className="hu-mono text-[11px] uppercase tracking-[0.12em] text-[var(--hu-fg-3)] transition-colors hover:text-[var(--hu-accent)]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
