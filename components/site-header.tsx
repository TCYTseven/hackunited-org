"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Donate", href: "/donate" },
  { label: "Team", href: "/team" },
  { label: "Apply", href: "/apply" },
  { label: "Socials", href: "/social" },
  { label: "Blog", href: "https://blog.hackunited.org/", external: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // The highlight pill slides to whichever link the pointer is over.
  const movePill = (e: ReactPointerEvent<HTMLElement>) => {
    const link = (e.target as HTMLElement).closest("a");
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!link || !nav || !pill) return;
    const navBox = nav.getBoundingClientRect();
    const box = link.getBoundingClientRect();
    pill.style.width = `${box.width}px`;
    pill.style.transform = `translateX(${box.left - navBox.left}px)`;
    pill.style.opacity = "1";
  };

  const hidePill = () => {
    if (pillRef.current) pillRef.current.style.opacity = "0";
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <>
      <header className="hu-header" data-scrolled={scrolled}>
        <span className="hu-route-line" aria-hidden="true">
          <span />
        </span>
        <div className="hu-wrap flex h-full items-center justify-between gap-6">
          <Link href="/" className="hu-brand" aria-label="Hack United home">
            <Image src="/images/main-globe-icon.png" alt="" width={28} height={28} className="hu-brand-mark" priority />
            <span className="hu-brand-name">Hack United</span>
          </Link>

          <div className="flex items-center gap-2">
            <nav
              ref={navRef}
              className="hu-nav hidden md:flex"
              onPointerOver={movePill}
              onPointerLeave={hidePill}
              aria-label="Main"
            >
              <span ref={pillRef} className="hu-nav-pill" aria-hidden="true" />
              {navItems.map((item) =>
                item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <ThemeToggle />

            <button
              type="button"
              className="hu-menu-btn md:hidden"
              aria-expanded={open}
              aria-controls="hu-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              data-open={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="hu-mobile-menu" className="hu-mobile-menu md:hidden" data-open={open} aria-hidden={!open}>
        <nav className="hu-wrap flex flex-col" aria-label="Mobile">
          {navItems.map((item, i) => {
            const content = (
              <>
                <span className="hu-mono text-[11px] text-[var(--hu-fg-3)]">0{i + 1}</span>
                <span>{item.label}</span>
                {item.external && <ArrowUpRight className="ml-auto h-6 w-6 opacity-50" />}
              </>
            );
            const style = { transitionDelay: open ? `${80 + i * 45}ms` : "0ms" };
            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={style}
                tabIndex={open ? 0 : -1}
              >
                {content}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                style={style}
                tabIndex={open ? 0 : -1}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {content}
              </Link>
            );
          })}
        </nav>
        <p className="hu-wrap hu-mono mt-auto pb-8 text-[11px] uppercase tracking-[0.14em] text-[var(--hu-fg-3)]">
          humans@hackunited.org
        </p>
      </div>
    </>
  );
}
