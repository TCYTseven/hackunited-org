"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  if (pathname !== "/" || dismissed) return null;

  return (
    <div className="relative w-full bg-white text-black">
      <div className="mx-auto flex min-h-[44px] max-w-7xl items-center justify-center px-12 py-2.5 text-center text-[13px] sm:text-[15px] leading-snug">
        <p>
          Organizer Applications for V8 are open!{" "}
          <Link
            href="/organizer"
            className="whitespace-nowrap font-semibold underline-offset-4 hover:underline"
          >
            See more
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-sm text-black/70 transition-colors hover:bg-black/5 hover:text-black"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
