"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * One-click dark/light switch. The icon is a single disc whose "bite" slides
 * in to make a crescent, so the change of state reads as one motion.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = !mounted || resolvedTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className={`hu-theme-toggle ${className}`}
      data-dark={dark}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <mask id="hu-toggle-mask">
          <rect width="24" height="24" fill="#fff" />
          <circle className="hu-toggle-bite" cx="24" cy="4" r="7" fill="#000" />
        </mask>
        <circle className="hu-toggle-disc" cx="12" cy="12" r="5.5" fill="currentColor" mask="url(#hu-toggle-mask)" />
        <g className="hu-toggle-rays" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="12" y1="1.5" x2="12" y2="3.5" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.4" y2="4.6" />
        </g>
      </svg>
    </button>
  );
}
