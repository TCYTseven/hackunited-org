"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

export default function AnnouncementBanner() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  if (pathname !== "/" || dismissed) return null;

  return (
    <div className="hu-announce">
      <a href="https://unitedhacksv8.devpost.com" target="_blank" rel="noopener noreferrer">
        <span className="hu-live" aria-hidden="true" />
        <span>Register for United Hacks V8</span>
        <span className="hu-announce-cta">
          Register
          <ArrowRight className="h-3 w-3" />
        </span>
      </a>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md transition-colors hover:bg-black/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
