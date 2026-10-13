import Link from "next/link";
import Image from "next/image";
import Wordmark from "@/components/site/wordmark";

const socials = [
  {
    href: "https://instagram.com/hack_united",
    label: "Instagram",
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    href: "https://linkedin.com/company/hack-united",
    label: "LinkedIn",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    href: "https://x.com/hackunited_",
    label: "X (Twitter)",
    icon: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer surface-ink">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/globe-icon.png"
                alt="Hack United"
                width={24}
                height={24}
                className="h-7 w-7"
              />
              <span className="brand-word text-[15px]">Hack United</span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-fg2">
              501(c)(3) nonprofit running free hackathons and workshops for students.
            </p>
            <p className="t-label mt-3 text-fg2">EIN 81-2908499</p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                  <span className="sr-only">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="t-label mb-5 text-fg2">Company</h3>
            <ul className="footer-list">
              <li>
                <a href="mailto:humans@hackunited.org" className="link-u">
                  Sponsor Us
                </a>
              </li>
              <li>
                <a href="mailto:humans@hackunited.org" className="link-u">
                  Press/Media
                </a>
              </li>
              <li>
                <Link href="/apply" className="link-u">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="t-label mb-5 text-fg2">Contact</h3>
            <ul className="footer-list">
              <li>humans@hackunited.org</li>
              <li>discord.gg/hackunited</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap">
        <Wordmark />
      </div>

      <div className="wrap">
        <div className="footer-base">
          <p className="t-label text-fg2">
            © {new Date().getFullYear()} Hack United. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
