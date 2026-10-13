"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

export default function AnnouncementBanner() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  if (pathname !== "/" || dismissed) return null;

  return (
    <div className="announce surface-iris">
      <div className="wrap flex min-h-[40px] items-center justify-between gap-4 py-2">
        <p className="t-label flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px]">
          <span className="dot bg-ink" aria-hidden="true" />
          <span>Organizer Applications for V8 are open!</span>{" "}
          <Link href="/organizer" className="announce-link">
            See more
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="announce-close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
