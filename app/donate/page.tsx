"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

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

// Split sponsors into 2 groups
const firstThird = Math.ceil(allSponsors.length / 3);
const secondThird = Math.ceil((allSponsors.length * 2) / 3);
const sponsors2FirstHalf = allSponsors.slice(
  firstThird,
  Math.ceil((firstThird + secondThird) / 2)
);
const sponsors2SecondHalf = allSponsors.slice(
  Math.ceil((firstThird + secondThird) / 2),
  secondThird
);

const sponsors1 = [...allSponsors.slice(0, firstThird), ...sponsors2FirstHalf];
const sponsors3 = [...sponsors2SecondHalf, ...allSponsors.slice(secondThird)];

const sponsorStyles = `
  .sponsorContainer {
    will-change: transform;
    align-items: center;
    backface-visibility: hidden;
    min-height: 80px;
    padding: 20px 0;
    display: flex;
    transform: translateX(0);
  }

  .sponsorContainer img {
    height: 60px;
    width: auto;
    max-width: 200px;
    min-width: 80px;
    object-fit: contain;
    margin: 0 40px;
    display: block;
    flex-shrink: 0;
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    .sponsorContainer {
      min-height: 70px;
      padding: 15px 0;
    }
    .sponsorContainer img {
      height: 45px;
      margin: 0 25px;
      max-width: 150px;
      min-width: 60px;
      padding: 6px 0;
    }
  }
`;

export default function DonatePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sponsor carousels animations
  useEffect(() => {
    if (typeof window === "undefined" || !mounted) return;

    const timeoutId = setTimeout(() => {
      const sponsorContainers = document.querySelectorAll(".sponsorContainer");
      sponsorContainers.forEach((container) => {
        const images = container.querySelectorAll("img");
        let loadedCount = 0;
        let hasAnimated = false;

        const checkAndAnimate = () => {
          loadedCount++;
          if ((loadedCount === images.length || images.length === 0) && !hasAnimated) {
            hasAnimated = true;
            // Small delay to ensure container width is calculated correctly
            setTimeout(() => {
              const firstSetWidth = container.scrollWidth / 4;
              gsap.set(container, { x: 0 });
              gsap.fromTo(
                container,
                { x: 0 },
                {
                  x: -firstSetWidth,
                  duration: 20,
                  ease: "none",
                  repeat: -1,
                }
              );
            }, 50);
          }
        };

        if (images.length === 0) {
          checkAndAnimate();
        } else {
          let allLoaded = true;
          images.forEach((img) => {
            if (img.complete) {
              loadedCount++;
            } else {
              allLoaded = false;
              img.addEventListener("load", checkAndAnimate, { once: true });
              img.addEventListener("error", checkAndAnimate, { once: true });
            }
          });
          if (allLoaded && images.length > 0) {
            checkAndAnimate();
          }
        }
      });
    }, 200); // Increased delay to ensure DOM is ready

    return () => clearTimeout(timeoutId);
  }, [mounted]);

  return (
    <>
      <style jsx>{sponsorStyles}</style>
      <main className="atelier">
        <section className="border-b border-[#2c2438] pb-16 pt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h1 className="atelier-title mb-6">
                  <em>Donate</em>
                </h1>

                <p className="atelier-lead mb-6">
                  Donations are optional. They help cover servers, tooling, and prize pools for free student events.
                </p>

                <div className="atelier-frame">
                  <div className="atelier-frame-inner">
                    <p className="text-sm leading-relaxed text-[#c8c2b6]">
                      Hack Club Bank processes payments. Hack United is a 501(c)(3). EIN 81-2908499. Tax-deductible where applicable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <div className="atelier-frame w-full max-w-md lg:max-w-none">
                  <div className="atelier-frame-inner">
                  <iframe
                    src="https://hcb.hackclub.com/donations/start/hackunited"
                    style={{ border: "none" }}
                    name="donateFrame"
                    scrolling="yes"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    height="600px"
                    width="100%"
                    className="rounded-lg w-full min-w-0 sm:min-w-[350px] lg:min-w-[400px] max-w-[500px] mx-auto"
                    title="Donation Form"
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sponsors Section */}
      <div className="py-12 sm:py-16 relative overflow-hidden">
        <div className="mx-auto mb-8 max-w-6xl px-4">
          <h2 className="atelier-sub">
            <em>Past</em> sponsors
          </h2>
        </div>

        <div className="container mx-auto px-4 md:px-8 companiesLogo flex overflow-hidden relative mb-4 py-6" suppressHydrationWarning>
          <div className="absolute top-0 left-0 right-0 h-px bg-[#3f3458] z-10"></div>
          {/* First carousel - left to right */}
          <div className="sponsorContainer flex" data-carousel="1" suppressHydrationWarning>
            {[...sponsors1, ...sponsors1, ...sponsors1, ...sponsors1].map(
              (sponsor, index) => (
                <img
                  key={`sponsor-1-${index}`}
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="cursor-pointer"
                  loading="lazy"
                />
              )
            )}
          </div>
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black to-transparent z-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black to-transparent z-30 pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 md:px-8 companiesLogo flex overflow-hidden relative py-6" suppressHydrationWarning>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#3f3458] z-10"></div>
          {/* Third carousel - left to right */}
          <div className="sponsorContainer flex" data-carousel="3" suppressHydrationWarning>
            {[...sponsors3, ...sponsors3, ...sponsors3, ...sponsors3].map(
              (sponsor, index) => (
                <img
                  key={`sponsor-3-${index}`}
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="cursor-pointer"
                  loading="lazy"
                />
              )
            )}
          </div>
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black to-transparent z-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black to-transparent z-30 pointer-events-none" />
        </div>
      </div>
    </main>
    </>
  )
}
