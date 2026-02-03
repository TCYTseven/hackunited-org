"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Playfair_Display } from "next/font/google";
import gsap from "gsap";
import "../page.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const tweens: gsap.core.Tween[] = [];
    const innerTimeouts: number[] = [];

    const timeoutId = window.setTimeout(() => {
      const sponsorContainers = Array.from(
        document.querySelectorAll<HTMLElement>(".sponsorContainer")
      );

      sponsorContainers.forEach((container) => {
        const images = Array.from(container.querySelectorAll("img"));
        let loadedCount = 0;
        let hasAnimated = false;

        const startAnimation = () => {
          if (hasAnimated) return;
          hasAnimated = true;

          // Small delay to ensure container width is calculated correctly
          const innerTimeoutId = window.setTimeout(() => {
            const firstSetWidth = container.scrollWidth / 4;
            if (!firstSetWidth) return;

            gsap.set(container, { x: 0 });
            const tween = gsap.fromTo(
              container,
              { x: 0 },
              {
                x: -firstSetWidth,
                duration: 20,
                ease: "none",
                repeat: -1,
              }
            );
            tweens.push(tween);
          }, 50);
          innerTimeouts.push(innerTimeoutId);
        };

        const handleImageReady = () => {
          loadedCount += 1;
          if (loadedCount >= images.length) {
            startAnimation();
          }
        };

        if (images.length === 0) {
          startAnimation();
          return;
        }

        let allLoaded = true;
        images.forEach((img) => {
          if (img.complete) {
            handleImageReady();
          } else {
            allLoaded = false;
            img.addEventListener("load", handleImageReady, { once: true });
            img.addEventListener("error", handleImageReady, { once: true });
          }
        });

        if (allLoaded) {
          startAnimation();
        }
      });
    }, 200); // Increased delay to ensure DOM is ready

    return () => {
      clearTimeout(timeoutId);
      innerTimeouts.forEach((id) => clearTimeout(id));
      tweens.forEach((tween) => tween.kill());
    };
  }, [mounted]);

  return (
    <>
      <style jsx>{sponsorStyles}</style>
      <main className="bg-black text-white">
        {/* Donation Section - Front and Center */}
        <section className="relative overflow-hidden min-h-screen flex items-center -mt-20 pt-20">
        {/* Modern gradient background */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 -top-20 bg-[radial-gradient(#ffffff_0.5px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

        {/* Modern gradient overlays */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        
        {/* Purple accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl"></div>
        
        <div className="container relative px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Simple header */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-6">
                  <Badge className="bg-purple-600/10 text-purple-300/80 border-purple-500/20 py-2 px-4 text-sm">
                    Support Hack United
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 lg:mb-8">
                  Support Our{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Mission
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 lg:mb-8">
                  Help us continue empowering the next generation of tech innovators through free hackathons and educational workshops.
                </p>

                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-500/20 mb-6 lg:mb-0">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Donations are entirely voluntary. All contributions will be deeply appreciated and help keep Hack United online.
                  </p>
                </div>

                <div className="mt-6 lg:mt-8 flex items-center gap-3 justify-center lg:justify-start flex-wrap">
                  <Image src="/images/globe-icon.png" alt="Hack United" width={24} height={24} className="h-6 w-6" />
                  <span className="text-purple-300 text-xs sm:text-sm font-medium text-center">501(c)(3) Non-Profit • EIN: 81-2908499</span>
                </div>
              </div>

              {/* Right side - Donation widget */}
              <div className="flex justify-center order-1 lg:order-2">
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-500/30 shadow-2xl w-full max-w-md lg:max-w-none">
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
      </section>

      {/* Past Sponsors Section */}
      <div className="py-12 sm:py-16 relative overflow-hidden">
        <h2
          className={`headingText purpleGradient mt-4 mb-4 text-center ${playfairDisplay.className}`}
        >
          PAST SPONSORS
        </h2>

        <div className="container mx-auto px-4 md:px-8 companiesLogo flex overflow-hidden relative mb-4 py-6" suppressHydrationWarning>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-10"></div>
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
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-10"></div>
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
