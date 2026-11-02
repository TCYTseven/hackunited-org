"use client";

import { Lock } from "lucide-react";
import DraggableMarquee from "@/components/obsidian/draggable-marquee";
import "./donate.css";

const allSponsors = [
  { src: "/images/sponsors/launchx.png", alt: "LaunchX" },
  { src: "/images/sponsors/YRI.jpg", alt: "YRI" },
  { src: "/images/sponsors/cp-logo-dark.svg", alt: "CodePath" },
  { src: "/images/sponsors/Coder.com_logo.png", alt: "Coder.com" },
  { src: "/images/sponsors/incogni_black.png", alt: "Incogni" },
  { src: "/images/sponsors/saily-logo-black_(3).png", alt: "Saily" },
  { src: "/images/sponsors/interviewbuddy.png", alt: "InterviewBuddy" },
  { src: "/images/sponsors/opennote.png", alt: "OpenNote" },
  { src: "/images/sponsors/images.png", alt: "Sponsor" },
  { src: "/images/sponsors/devIT.png", alt: "DevIT" },
  {
    src: "/images/sponsors/algoverse_logo_max_quality_-_compresed_(1).png",
    alt: "Algoverse",
  },
  { src: "/images/sponsors/aops_logo.png", alt: "AOPS" },
  { src: "/images/sponsors/axure_logo.png", alt: "Axure" },
  { src: "/images/sponsors/cake_logo_blue_gray.png", alt: "Cake" },
  { src: "/images/sponsors/CoCalc-Image.png", alt: "CoCalc" },
  { src: "/images/sponsors/codepath-1x1_icon-dark_1.jpg", alt: "CodePath" },
  { src: "/images/sponsors/desmossss_logo.png", alt: "Desmos" },
  { src: "/images/sponsors/devtranet_logo_with_text.png", alt: "Devtranet" },
  { src: "/images/sponsors/echo_3d.png", alt: "Echo3D" },
  { src: "/images/sponsors/FearedMediaLogo.png", alt: "Feared Media" },
  { src: "/images/sponsors/givemycertificate.png", alt: "GiveMyCertificate" },
  { src: "/images/sponsors/images_(2).png", alt: "Sponsor" },
  { src: "/images/sponsors/Logomark_(With_color).png", alt: "Sponsor" },
  { src: "/images/sponsors/NordVPN_horizontal.svg.png", alt: "NordVPN" },
  { src: "/images/sponsors/Postman.png", alt: "Postman" },
  { src: "/images/sponsors/StreamYardLogo.png", alt: "StreamYard" },
  { src: "/images/sponsors/SwishSwoosh_Logo_Light_BG.png", alt: "SwishSwoosh" },
  { src: "/images/sponsors/VerbwireLogoHackathonn.png", alt: "Verbwire" },
  { src: "/images/sponsors/Vue_School_logo.png", alt: "Vue School" },
  { src: "/images/sponsors/WoflramLogo.png", alt: "Wolfram" },
  { src: "/images/sponsors/1200px-.xyz_logo.svg.png", alt: ".xyz" },
  { src: "/images/sponsors/1_pass.jpg", alt: "1Pass" },
];

const half = Math.ceil(allSponsors.length / 2);
const sponsorRows = [allSponsors.slice(0, half), allSponsors.slice(half)];

const uses = ["Servers", "Tooling", "Prize pools"];

export default function DonatePage() {
  return (
    <main className="hu-home">
      <section className="hu-wrap hu-page-head" data-stop="Donate">
        <div className="donate-layout">
          <div className="donate-copy">
            <h1 className="hu-display" data-split>
              <em>Donate</em>
            </h1>
            <p className="hu-lead mt-8">
              Donations are optional. They help cover servers, tooling, and prize pools for free student events.
              Payments run through Hack Club Bank. Hack United is a 501(c)(3) nonprofit (EIN 81-2908499). Contributions
              are tax-deductible where applicable.
            </p>

            <ul className="donate-uses" aria-label="What donations cover">
              {uses.map((use, i) => (
                <li key={use}>
                  <span className="hu-mono">0{i + 1}</span>
                  {use}
                </li>
              ))}
            </ul>
          </div>

          <div className="hu-window nb donate-window">
            <div className="hu-window-bar hu-mono">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>hcb.hackclub.com</span>
              <span className="ml-auto hidden sm:inline">Hack Club Bank</span>
            </div>
            <iframe
              src="https://hcb.hackclub.com/donations/start/hackunited"
              style={{ border: "none" }}
              name="donateFrame"
              scrolling="yes"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              height="640px"
              width="100%"
              className="block w-full"
              title="Donation Form"
            />
          </div>
        </div>
      </section>

      <section className="hu-section donate-sponsors" data-stop="Past sponsors" data-zone="a">
        <div className="hu-wrap">
          <p className="hu-label">
            <b>{allSponsors.length}</b>
            <span>Organizations that backed our events</span>
          </p>
          <h2 className="hu-h2 mt-7" data-split>
            <em>Past</em> sponsors
          </h2>
        </div>

        <div className="donate-rows">
          {sponsorRows.map((row, i) => (
            <DraggableMarquee
              key={i}
              items={row}
              reverse={i === 1}
              speed={0.7}
              getKey={(sponsor) => sponsor.src}
              label="Past sponsors. Drag to scroll, or use the arrow keys."
              renderItem={(sponsor) => (
                <div className="donate-tile">
                  <img src={sponsor.src} alt={sponsor.alt} loading="lazy" />
                </div>
              )}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
