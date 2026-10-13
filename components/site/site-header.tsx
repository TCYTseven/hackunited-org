"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Scramble from "@/components/site/scramble";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donate" },
  { href: "/team", label: "Team" },
  { href: "/apply", label: "Apply" },
  { href: "/social", label: "Socials" },
  { href: "https://blog.hackunited.org/", label: "Blog", external: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll progress hairline under the header.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Menu side effects: scroll lock, Escape to close, focus handoff.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header className="site-header">
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href="/" className="brand" aria-label="Hack United home">
            <Image
              src="/images/main-globe-icon.png"
              alt=""
              width={26}
              height={26}
              className="brand-globe h-[22px] w-[22px]"
              priority
            />
            <span className="brand-word">Hack United</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center">
              {NAV.map((item) => {
                const active = !item.external && isActive(item.href);
                const content = (
                  <>
                    <span className="nav-pip" aria-hidden="true" />
                    <Scramble text={item.label} />
                    {item.external && <ArrowUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />}
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn("nav-link", active && "is-active")}
                        aria-current={active ? "page" : undefined}
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className={cn("menu-btn md:hidden", open && "is-open")}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-btn-lines" aria-hidden="true" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
        <div className="header-progress" aria-hidden="true">
          <div ref={barRef} className="header-progress-bar" />
        </div>
      </header>

      <div
        id="site-menu"
        ref={menuRef}
        className={cn("site-menu md:hidden", open && "is-open")}
        inert={!open}
      >
        <nav aria-label="Mobile" className="wrap flex h-full flex-col justify-between pb-10 pt-8">
          <ul>
            {NAV.map((item, i) => {
              const inner = (
                <>
                  <span className="t-label tabular text-fg2">{String(i + 1).padStart(2, "0")}</span>
                  <span className="site-menu-label">{item.label}</span>
                  {item.external && <ArrowUpRight className="ml-auto h-6 w-6" aria-hidden="true" />}
                </>
              );
              const style = { transitionDelay: open ? `${80 + i * 45}ms` : "0ms" };
              return (
                <li key={item.label} className="site-menu-item" style={style}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-menu-link"
                      onClick={() => setOpen(false)}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn("site-menu-link", isActive(item.href) && "is-active")}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
