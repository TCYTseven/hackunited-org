"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import InteractiveLogo from "@/components/interactive-logo";
import { ScrollButton, ScrollButtonWithIcon } from "@/components/scroll-button";
import NewsCarousel from "@/components/ui/news-carousel";
import HeroButton from "../components/ui/HeroButton/HeroButton";
import "./page.css";
import gsap from "gsap";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const logos = [
  {
    src: "/images/companies logo/TechBullionLogo.webp",
    alt: "TechBullion",
    href: "https://techbullion.com/teenage-founder-creates-hackathon-program-to-help-peers/",
  },
  {
    src: "/images/companies logo/asocciatePress_00000.png",
    alt: "Associated Press",
    href: "https://apnews.com/press-release/ein-presswire-newsmatics/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills-d95d1a2b7f2b0367502ec18bd0148d08",
  },
  {
    src: "/images/companies logo/digitalJournal_00000.png",
    alt: "Digital Journal",
    href: "https://www.digitaljournal.com/pr/news/vehement-media/teen-led-hack-united-launches-united-1122733292.html",
  },
  {
    src: "/images/companies logo/fox40_00000.png",
    alt: "Fox 40",
    href: "https://fox40.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills/",
  },
  {
    src: "/images/companies logo/news 10_00000.png",
    alt: "News 10",
    href: "https://www.news10.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills/",
  },
  {
    src: "/images/companies logo/theGlobe_00000.png",
    alt: "The Globe and Mail",
    href: "https://www.barchart.com/story/news/33037092/hack-united-empowers-youth-with-soft-skills-at-united-hacks-v5",
  },
];

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

// Split sponsors into 2 groups (removed middle group, split it between first and third)
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

const judges = [
  { src: "/judgesfrom/Amazon-Logo.png", alt: "Amazon" },
  { src: "/judgesfrom/Google-Logo.png", alt: "Google" },
  { src: "/judgesfrom/Microsoft-Logo.png", alt: "Microsoft" },
  { src: "/judgesfrom/Stanford-Logo.png", alt: "Stanford" },
  { src: "/judgesfrom/Visa-Logo.png", alt: "Visa" },
  { src: "/judgesfrom/YC-Logo.png", alt: "Y Combinator" },
];

const impactHighlights = [
  {
    value: "25,000+",
    label: "Engineers Impacted",
    detail: "Students reached through hackathons, workshops, and year-round programming.",
  },
  {
    value: "3,000+",
    label: "Community Members",
    detail: "Builders collaborating in our Discord and event ecosystem.",
  },
  {
    value: "50+",
    label: "Countries Reached",
    detail: "Global participation from students across diverse learning environments.",
  },
];

const goalPillars = [
  {
    title: "Accelerating Soft Skills",
    tagline: "Beyond just coding mechanics",
    description:
      "We teach more than just mechanical coding skills: As the world rapidly evolves, we envision an inclusive platform where everyone can learn about the exciting advancements in the tech field and the knowledge needed to continue their programming journey.",
  },
  {
    title: "Practical Applications",
    tagline: "Real-world problem solving",
    description:
      "We emphasize practical applications of programming and technology to prepare community members for the rapidly changing future. Our hackathons help exemplify our goals as we consistently use real-world problems to develop themes.",
  },
  {
    title: "Connecting Innovators",
    tagline: "Building a supportive community",
    description:
      "Our community provides a platform for innovators to learn, grow, and support each other. We connect like-minded individuals to overcome the challenges of acquiring new skills. Join us to thrive in a collaborative environment.",
  },
];

// Simple animations
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .tabs-slider-container {
    position: relative;
  }

  .tabs-slider-indicator {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: calc(100% / 6);
    border: 3px solid rgba(168, 85, 247, 0.5);
    border-radius: 9999px;
    background: transparent;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 0;
  }

  .tab-trigger-custom {
    position: relative;
    z-index: 1;
    border: 1px solid transparent;
    border-radius: 9999px;
    background: transparent;
    transition: all 0.3s ease;
  }

  .tab-trigger-custom[data-state="active"] {
    color: white;
    opacity: 1;
  }

  .tab-trigger-custom[data-state="inactive"] {
    color: rgba(255, 255, 255, 0.5);
    opacity: 0.6;
  }

  .logoContainer {
    will-change: transform;
    align-items: center;
    transform: translateX(0);
  }

  .logoContainer img {
    margin: 0 40px;
    display: block;
    flex-shrink: 0;
  }

  .logoContainer img[alt="TechBullion"] {
    height: 40px;
    width: auto;
    max-width: 120px;
    object-fit: contain;
    align-self: center;
  }

  @media (max-width: 768px) {
    .logoContainer img {
      margin: 0 25px;
    }
    .logoContainer img[alt="TechBullion"] {
      height: 30px;
      max-width: 90px;
    }
  }

  .sponsorContainer {
    will-change: transform;
    align-items: center;
    backface-visibility: hidden;
    min-height: 80px;
    padding: 20px 0;
    display: flex;
    transform: translateX(0);
  }

  .judgeContainer {
    will-change: transform;
    align-items: center;
    backface-visibility: hidden;
    min-height: 80px;
    padding: 20px 0;
    display: flex;
    transform: translateX(0);
  }

  .judgeContainer img {
    height: 60px;
    width: auto;
    max-width: 200px;
    min-width: 80px;
    object-fit: contain;
    margin: 0 40px;
    display: block;
    flex-shrink: 0;
    padding: 8px 0;
    filter: brightness(0) invert(1);
  }

  .judgeContainer img[alt="Y Combinator"] {
    filter: none;
  }

  @media (max-width: 768px) {
    .judgeContainer {
      min-height: 70px;
      padding: 15px 0;
    }
    .judgeContainer img {
      height: 45px;
      margin: 0 25px;
      max-width: 150px;
      min-width: 60px;
      padding: 6px 0;
    }
  }

  @keyframes heroFadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-badge {
    animation: heroFadeUp 0.8s ease-out forwards;
    opacity: 0;
  }

  .hero-heading {
    animation: heroFadeUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .hero-subheading {
    animation: heroFadeUp 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }

  .hero-buttons {
    animation: heroFadeUp 0.8s ease-out 0.6s forwards;
    opacity: 0;
  }

  .hero-logo {
    animation: heroFadeUp 0.8s ease-out 0.3s forwards;
    opacity: 0;
  }

  .glassCard1 {
    animation: heroFadeUp 0.8s ease-out 0.8s forwards;
    opacity: 0;
  }

  .glassCard2 {
    animation: heroFadeUp 0.8s ease-out 1s forwards;
    opacity: 0;
  }

  .glassCard3 {
    animation: heroFadeUp 0.8s ease-out 1.2s forwards;
    opacity: 0;
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

function DiscordWidget() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <iframe
        src="https://e.widgetbot.io/channels/1108199473206792203/1113813542039207977"
        width="100%"
        height="600"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className="rounded-lg border border-purple-500/30 bg-gray-900"
        title="Hack United Discord Community"
      />
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("v6");
  const [mounted, setMounted] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Set mounted state after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fix hydration by only running animations on client side after hydration
  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === "undefined" || !mounted) return;

    // Small delay to ensure DOM is fully ready
    const timeoutId = setTimeout(() => {
      const logoContainer = document.querySelector(".logoContainer");
      if (logoContainer) {
        // Wait for images to load before calculating
        const images = logoContainer.querySelectorAll("img");
        let loadedCount = 0;

        const checkAndAnimate = () => {
          loadedCount++;
          if (loadedCount === images.length || images.length === 0) {
            // Calculate the width of one set of logos
            const firstSetWidth = logoContainer.scrollWidth / 4;

            gsap.to(".logoContainer", {
              x: -firstSetWidth,
              duration: 10,
              ease: "none",
              repeat: -1,
            });
          }
        };

        if (images.length === 0) {
          checkAndAnimate();
        } else {
          images.forEach((img) => {
            if (img.complete) {
              checkAndAnimate();
            } else {
              img.addEventListener("load", checkAndAnimate);
              img.addEventListener("error", checkAndAnimate);
            }
          });
        }
      }

      // Sponsor carousels animations
      const sponsorContainers = document.querySelectorAll(".sponsorContainer");
      sponsorContainers.forEach((container) => {
        const carouselIndex = container.getAttribute("data-carousel");
        const images = container.querySelectorAll("img");
        let loadedCount = 0;

        const checkAndAnimate = () => {
          loadedCount++;
          if (loadedCount === images.length || images.length === 0) {
            // Calculate the width of one set of sponsors
            const firstSetWidth = container.scrollWidth / 4;

            // Both carousels: left to right
            // Start from 0, animate to negative (container moves left, content appears to move right)
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
          }
        };

        if (images.length === 0) {
          checkAndAnimate();
        } else {
          images.forEach((img) => {
            if (img.complete) {
              checkAndAnimate();
            } else {
              img.addEventListener("load", checkAndAnimate);
              img.addEventListener("error", checkAndAnimate);
            }
          });
        }
      });

      // Judges carousel animation
      const judgeContainer = document.querySelector(".judgeContainer");
      if (judgeContainer) {
        const images = judgeContainer.querySelectorAll("img");
        let loadedCount = 0;

        const checkAndAnimate = () => {
          loadedCount++;
          if (loadedCount === images.length || images.length === 0) {
            const firstSetWidth = judgeContainer.scrollWidth / 4;
            gsap.set(judgeContainer, { x: 0 });
            gsap.fromTo(
              judgeContainer,
              { x: 0 },
              {
                x: -firstSetWidth,
                duration: 15,
                ease: "none",
                repeat: -1,
              }
            );
          }
        };

        if (images.length === 0) {
          checkAndAnimate();
        } else {
          images.forEach((img) => {
            if (img.complete) {
              checkAndAnimate();
            } else {
              img.addEventListener("load", checkAndAnimate);
              img.addEventListener("error", checkAndAnimate);
            }
          });
        }
      }
    }, 100); // Small delay to ensure hydration is complete

    return () => clearTimeout(timeoutId);
  }, [mounted]);

  return (
    <>
      <style jsx>{styles}</style>
      <main className="bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <div className="bg-[url('/images/gradient.png')] bg-cover bg-center bg-no-repeat w-full pt-[30px] md:min-h-screen relative">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
          <div className="headContainer max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[48%_52%] mt-16 sm:mt-24 md:mt-[140px] pb-12 sm:pb-16 md:pb-[160px] px-6 sm:px-8 md:px-8 relative">
            <div className="right text-center md:text-left">
              <h1 className="hero-heading headingText mb-4 sm:mb-6 text-center md:text-left">
                <span className="purpleGradient">Empowering</span>
                <br />
                the Next Generation
                <br />
                of Tech Innovators
              </h1>
              <div className="hero-subheading subHeading mt-4 sm:mt-6 text-center md:text-left">
                <p className="hidden md:block">
                  A non-profit hosting free hackathons and workshops
                  <br />
                  focused on building essential soft skills through hands-on
                  <br />
                  tech projects and real-world application.
                </p>
                <p className="md:hidden text-sm sm:text-base">
                  A non-profit hosting free hackathons and workshops focused on
                  building essential soft skills through hands-on tech projects
                  and real-world application.
                </p>
              </div>
              <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto sm:max-w-[288px] justify-center items-center md:justify-between mt-6 sm:mt-8">
                <HeroButton onClick={() => scrollTo("who-are-we")}>
                  Learn More
                </HeroButton>
                <HeroButton
                  link="https://unitedhacks.hackunited.org"
                  filled={false}
                >
                  Hackathons
                </HeroButton>
              </div>
            </div>
            <div className="left flex items-center justify-center md:justify-end mt-8 sm:mt-12 md:mt-0">
              <img
                className="hero-logo h-[200px] sm:h-[240px] md:h-[350px] md:mr-[48px]"
                src="./images/Logo.png"
                alt=""
              />
              <div className="glassCard glassCard1 hidden h-[79.24px] w-[240.8px] pl-[16px] md:block">
                <h3 className="purpleGradient mt-[5px]">25,000+</h3>
                <p>Engineers Impacted</p>
              </div>
              <div className="glassCard glassCard2 hidden h-[79.24px] w-[240.8px] pl-[16px] md:block">
                <h3 className="purpleGradient mt-[5px]">3,000+</h3>
                <p>Community Members</p>
              </div>
              <div className="glassCard glassCard3 hidden h-[79.24px] w-[240.8px] pl-[16px] md:block">
                <h3 className="purpleGradient mt-[5px]">50+</h3>
                <p>Countries Reached</p>
              </div>
            </div>
          </div>
        </div>
        <div className="recognizedCompanies">
          <h2
            className={`headingText purpleGradient mt-4 mb-4 text-center ${playfairDisplay.className}`}
          >
            RECOGNIZED BY
          </h2>
          <div
            className="container mx-auto px-6 sm:px-8 md:px-8 companiesLogo flex overflow-hidden relative"
            suppressHydrationWarning
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="logoContainer flex" suppressHydrationWarning>
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  onClick={() => window.open(logo.href, "_blank")}
                  className="cursor-pointer"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black to-transparent z-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black to-transparent z-30 pointer-events-none" />
          </div>
        </div>
        {/* Who Are We Section */}
        <section
          id="who-are-we"
          className="relative overflow-hidden py-16 md:py-24"
        >
          {/* Dot grid background pattern */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div> */}

          {/* Subtle gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div> */}

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Large "About Us" background text */}
          {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[20rem] sm:text-[28vw] md:text-[25vw] lg:text-[20vw] xl:text-[25vw] xl:h-[25vw] font-bold text-white/10 select-none leading-[0.8] whitespace-nowrap">
              ABOUT US
            </h2>
          </div> */}

          {/* <div className="container relative max-w-3xl mx-auto px-2 sm:px-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-500/20 animate-fade-in hover:border-purple-500/40 transition-all duration-500">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Hack United is a 501(c)(3) non-profit organization with a passion for programming and technology. Our
                mission is to inspire and educate the next generation of
                innovators through hackathons and workshops. We address a
                problem not as commonly talked about, focusing on equipping
                participants with the essential soft skills needed to thrive in
                their chosen career paths. This is done through hands-on
                application such as our free to enter hackathons, where participants
                develop communication, teamwork, problem-solving, and presentation
                skills alongside their technical abilities. Through our initiatives,
                we ultimately aim to help individuals prosper in the realm of technology.
              </p>
            </div>
          </div> */}

          <div className="container mx-auto px-6 sm:px-8 md:px-8 flex flex-col md:flex-row items-center w-full md:h-[300px] font-light text-sm sm:text-base md:text-[21px] text-[#E8E8E8] text-center md:text-left py-8 md:py-0">
            <div className="md:w-2/3 w-full">
              <h2 className="headingText purpleGradient mt-[15px] mb-4 sm:mb-6">
                ABOUT US
              </h2>
              <p className="leading-relaxed">
                {" "}
                Hack United is a 501(c)(3) non-profit organization with a
                passion for programming and technology. Our mission is to
                inspire and educate the next generation of innovators through
                hackathons and workshops. We address a problem not as commonly
                talked about, focusing on equipping participants with the
                essential soft skills needed to thrive in their chosen career
                paths. This is done through hands-on application such as our
                free to enter hackathons, where participants develop
                communication, teamwork, problem-solving, and presentation
                skills alongside their technical abilities. Through our
                initiatives, we ultimately aim to help individuals prosper in
                the realm of technology.
              </p>
            </div>
            <img
              className="w-48 sm:w-64 md:w-[400px] mt-8 md:mt-0 md:mr-[70px]"
              src="./images/globe-icon.png"
              alt=""
            />
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#05030a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),transparent_35%,rgba(255,255,255,0.01))]"></div>
          <div className="absolute inset-0 opacity-12 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-purple-400/35"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="max-w-4xl mb-8 sm:mb-12">
              <Badge
                variant="outline"
                className="mb-4 border-purple-300/40 text-purple-200 bg-white/[0.03] hover:bg-white/[0.03]"
              >
                Global Footprint
              </Badge>
              <h2 className="headingText mt-[15px] mb-4 sm:mb-5 text-white">
                OUR IMPACT
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                Through hackathons, workshops, and community initiatives, we've
                built a global network of innovators. But our mission extends
                beyond hackathons.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.38)]">
                <div className="divide-y divide-white/10">
                  {impactHighlights.map((item, index) => (
                    <article
                      key={item.label}
                      className="group grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center px-5 py-6 sm:px-7 sm:py-7"
                    >
                      <div>
                        <p className="text-[11px] tracking-[0.18em] text-slate-300 mb-2">
                          METRIC 0{index + 1}
                        </p>
                        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 group-hover:text-purple-200 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                          {item.detail}
                        </p>
                      </div>
                      <p className="text-4xl sm:text-5xl font-semibold text-purple-300 tracking-tight">
                        {item.value}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-4 flex flex-col gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 shadow-[0_10px_28px_rgba(0,0,0,0.34)]">
                  <p className="text-xs tracking-[0.15em] text-slate-300 mb-3">
                    BEYOND HACKATHONS
                  </p>
                  <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                    United Fund backs young builders with micro-grants between
                    $50 and $500 so promising projects can move from prototypes
                    to launch.
                  </p>
                  <a
                    href="https://fund.hackunited.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-5 text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    Explore United Fund <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                  <p className="text-xs tracking-[0.15em] text-gray-300 mb-4">
                    WHAT THIS MEANS
                  </p>
                  <ul className="space-y-3 text-sm sm:text-base text-gray-200">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 mt-1 text-purple-300" />
                      More first-time builders are shipping complete projects.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 mt-1 text-purple-300" />
                      Cross-border teams are collaborating consistently.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 mt-1 text-purple-300" />
                      Students stay involved beyond a single event cycle.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0813]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_40%,rgba(255,255,255,0.015))]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-purple-400/35"></div>
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:30px_30px]"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Badge
                  variant="outline"
                  className="mb-5 border-purple-300/40 text-purple-200 bg-white/[0.04]"
                >
                  Our Vision
                </Badge>
                <h2 className="headingText mt-[15px] mb-4 text-white">OUR GOALS</h2>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-md">
                  Hack United is designed as a long-term growth path, not a
                  one-week sprint. These pillars guide how we build programs and
                  how participants progress through them.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-5">
                {goalPillars.map((goal, index) => (
                  <article
                    key={goal.title}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl px-5 py-6 sm:px-7 sm:py-7 shadow-[0_10px_28px_rgba(0,0,0,0.24)]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-purple-300/70 bg-purple-300/15 text-xs font-semibold text-purple-200">
                        {index + 1}
                      </span>
                      <p className="text-xs tracking-[0.12em] text-purple-200/80">
                        {goal.tagline}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
                        {goal.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          {/* Dot grid background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Badge
                variant="outline"
                className="px-3 py-1 sm:px-4 border-purple-500/50 text-purple-300 text-xs sm:text-sm"
              >
                Our Legacy
              </Badge>
            </div>
            <h2 className="headingText purpleGradient mt-[15px] mb-6 sm:mb-8 md:mb-12 text-center">
              PREVIOUS HACKATHONS
            </h2>

            <div className="max-w-4xl mx-auto">
              <Tabs
                defaultValue="v6"
                className="w-full"
                onValueChange={(value) => {
                  setActiveTab(value);
                }}
              >
                <div className="tabs-slider-container mb-8 lg:mb-12">
                  <TabsList className="w-full grid grid-cols-6 h-12 sm:h-14 bg-transparent border-none p-0 relative">
                    <div
                      className="tabs-slider-indicator"
                      style={{
                        transform: `translateX(${["v1", "v2", "v3", "v4", "v5", "v6"].indexOf(activeTab) *
                          100
                          }%)`,
                      }}
                    />
                    <TabsTrigger
                      value="v1"
                      className="tab-trigger-custom text-xs sm:text-sm"
                    >
                      V1
                    </TabsTrigger>
                    <TabsTrigger
                      value="v2"
                      className="tab-trigger-custom text-xs sm:text-sm"
                    >
                      V2
                    </TabsTrigger>
                    <TabsTrigger
                      value="v3"
                      className="tab-trigger-custom text-xs sm:text-sm"
                    >
                      V3
                    </TabsTrigger>
                    <TabsTrigger
                      value="v4"
                      className="tab-trigger-custom text-xs sm:text-sm"
                    >
                      V4
                    </TabsTrigger>
                    <TabsTrigger
                      value="v5"
                      className="tab-trigger-custom text-xs sm:text-sm"
                    >
                      V5
                    </TabsTrigger>
                    <TabsTrigger
                      value="v6"
                      className="tab-trigger-custom text-xs sm:text-sm"
                    >
                      V6
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent
                  value="v1"
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-white">
                            United Hacks V1
                          </h3>
                          <p className="text-gray-300 mb-2">
                            <span className="text-purple-400 font-semibold">
                              August 2023
                            </span>{" "}
                            • Mental Health Theme
                          </p>
                          <p className="text-gray-300 mb-6">
                            Our inaugural hackathon focused on mental health
                            solutions, bringing together 400+ participants to
                            create impactful projects with industry professional
                            judges.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                400+
                              </div>
                              <div className="text-xs text-gray-400">
                                Participants
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                50+
                              </div>
                              <div className="text-xs text-gray-400">
                                Projects
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                $5,000+
                              </div>
                              <div className="text-xs text-gray-400">
                                Prize Pool
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                10+
                              </div>
                              <div className="text-xs text-gray-400">
                                Sponsors
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                100+
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshop Attendees
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                10
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshops
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src="/images/v1.png"
                              alt="United Hacks V1 winning projects"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                            <div className="p-4">
                              <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">
                                Mental Health
                              </Badge>
                              <h4 className="text-white font-medium">
                                August 2023
                              </h4>
                              <p className="text-white/80 text-sm">
                                Inaugural hackathon showcasing mental health
                                innovations
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-black/30 backdrop-blur-sm px-6 md:px-8 py-4 border-t border-purple-500/20">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Article Recap
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://unitedhacks23.devpost.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DEVPOST
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent
                  value="v2"
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-white">
                            United Hacks V2
                          </h3>
                          <p className="text-gray-300 mb-2">
                            <span className="text-purple-400 font-semibold">
                              January 2024
                            </span>{" "}
                            • Resolutions Theme
                          </p>
                          <p className="text-gray-300 mb-6">
                            Our second hackathon focused on New Year resolutions
                            and positive change, featuring 400+ participants and
                            the largest prize pool to date with industry
                            professional & student judges.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                400+
                              </div>
                              <div className="text-xs text-gray-400">
                                Participants
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                75+
                              </div>
                              <div className="text-xs text-gray-400">
                                Projects
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                $15,000+
                              </div>
                              <div className="text-xs text-gray-400">
                                Prize Pool
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                15+
                              </div>
                              <div className="text-xs text-gray-400">
                                Sponsors
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                100+
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshop Attendees
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                10
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshops
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src="/images/v2.png"
                              alt="United Hacks V2 winning projects"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                            <div className="p-4">
                              <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">
                                Resolutions
                              </Badge>
                              <h4 className="text-white font-medium">
                                January 2024
                              </h4>
                              <p className="text-white/80 text-sm">
                                Outstanding winning projects from our largest
                                prize pool
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-black/30 backdrop-blur-sm px-6 md:px-8 py-4 border-t border-purple-500/20">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://blog.hackunited.org/united-hacks-v2-hackathon-recap"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Article Recap
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://unitedhacksv2.devpost.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DEVPOST
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent
                  value="v3"
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-white">
                            United Hacks V3
                          </h3>
                          <p className="text-gray-300 mb-2">
                            <span className="text-purple-400 font-semibold">
                              September 2024
                            </span>{" "}
                            • Communication Theme
                          </p>
                          <p className="text-gray-300 mb-6">
                            Our third hackathon introduced "Mini-Hacks" with a
                            focus on communication solutions, featuring 150+
                            participants and industry professional judges in a
                            more intimate setting.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                150+
                              </div>
                              <div className="text-xs text-gray-400">
                                Participants
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                $2,000+
                              </div>
                              <div className="text-xs text-gray-400">
                                Prize Pool
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                75+
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshop Attendees
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                10
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshops
                              </div>
                            </div>
                          </div>
                          <div className="text-center p-3 bg-purple-600/20 rounded-lg border border-purple-500/30">
                            <div className="text-lg font-bold text-purple-300">
                              Mini-Hacks Format
                            </div>
                            <div className="text-xs text-gray-400">
                              Smaller, focused hackathon experience
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src="/images/v3.png"
                              alt="United Hacks V3 winning projects"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                            <div className="p-4">
                              <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">
                                Communication
                              </Badge>
                              <h4 className="text-white font-medium">
                                September 2024
                              </h4>
                              <p className="text-white/80 text-sm">
                                Mini-Hacks showcasing innovative winning
                                projects
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-black/30 backdrop-blur-sm px-6 md:px-8 py-4 border-t border-purple-500/20">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://blog.hackunited.org/united-hacks-v3-recap"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Article Recap
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://unitedhacksv3.devpost.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DEVPOST
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent
                  value="v4"
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-white">
                            United Hacks V4
                          </h3>
                          <p className="text-gray-300 mb-2">
                            <span className="text-purple-400 font-semibold">
                              January 2025
                            </span>{" "}
                            • Social Impact Theme
                          </p>
                          <p className="text-gray-300 mb-6">
                            Our most recent hackathon focused on social impact
                            solutions, bringing together 400+ participants to
                            tackle real-world challenges with industry
                            professional judges.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                400+
                              </div>
                              <div className="text-xs text-gray-400">
                                Participants
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                80+
                              </div>
                              <div className="text-xs text-gray-400">
                                Projects
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                $10,000+
                              </div>
                              <div className="text-xs text-gray-400">
                                Prize Pool
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                10+
                              </div>
                              <div className="text-xs text-gray-400">
                                Sponsors
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                100+
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshop Attendees
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                10
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshops
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src="/images/v4.png"
                              alt="United Hacks V4 winning projects"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                            <div className="p-4">
                              <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">
                                Social Impact
                              </Badge>
                              <h4 className="text-white font-medium">
                                January 2025
                              </h4>
                              <p className="text-white/80 text-sm">
                                Featuring winning projects from our latest
                                hackathon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-black/30 backdrop-blur-sm px-6 md:px-8 py-4 border-t border-purple-500/20">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Article Recap
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://unitedhacksv4.devpost.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DEVPOST
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent
                  value="v5"
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-white">
                            United Hacks V5
                          </h3>
                          <p className="text-gray-300 mb-2">
                            <span className="text-purple-400 font-semibold">
                              July 2025
                            </span>{" "}
                            • Entertainment Theme
                          </p>
                          <p className="text-gray-300 mb-6">
                            Our fifth hackathon focused on entertainment
                            solutions, bringing together 1250+ participants to
                            tackle real-world challenges with industry
                            professional judges.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                1250+
                              </div>
                              <div className="text-xs text-gray-400">
                                Participants
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                200+
                              </div>
                              <div className="text-xs text-gray-400">
                                Projects
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                $50,000+
                              </div>
                              <div className="text-xs text-gray-400">
                                Prize Pool
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                10+
                              </div>
                              <div className="text-xs text-gray-400">
                                Sponsors
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                250+
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshop Attendees
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                8
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshops
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src="/images/imagecoo.png"
                              alt="United Hacks V5 winning projects"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                            <div className="p-4">
                              <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">
                                Entertainment
                              </Badge>
                              <h4 className="text-white font-medium">
                                July 2025
                              </h4>
                              <p className="text-white/80 text-sm">
                                Featuring winning projects from our
                                entertainment themed hackathon.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-black/30 backdrop-blur-sm px-6 md:px-8 py-4 border-t border-purple-500/20">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://blog.hackunited.org/united-hacks-v5-recap"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Article Recap
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://unitedhacksv5.devpost.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DEVPOST
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent
                  value="v6"
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-white">
                            United Hacks V6
                          </h3>
                          <p className="text-gray-300 mb-2">
                            <span className="text-purple-400 font-semibold">
                              January 2026
                            </span>{" "}
                            • Human Interaction Theme
                          </p>
                          <p className="text-gray-300 mb-6">
                            Our sixth hackathon focused on solutions embracing human interaction, bringing together 1200+ participants to tackle real-world challenges, while connecting in our Discord community of 3000+ programmers.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                1200+
                              </div>
                              <div className="text-xs text-gray-400">
                                Participants
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                160+
                              </div>
                              <div className="text-xs text-gray-400">
                                Projects
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                $20,000+
                              </div>
                              <div className="text-xs text-gray-400">
                                Prize Pool
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                11+
                              </div>
                              <div className="text-xs text-gray-400">
                                Sponsors
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                200+
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshop Attendees
                              </div>
                            </div>
                            <div className="text-center p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                              <div className="text-xl font-bold text-purple-400">
                                6
                              </div>
                              <div className="text-xs text-gray-400">
                                Workshops
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src="/images/v6.webp"
                              alt="United Hacks V6 winning projects"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                            <div className="p-4">
                              <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">
                                Human Interaction
                              </Badge>
                              <h4 className="text-white font-medium">
                                January 2026
                              </h4>
                              <p className="text-white/80 text-sm">
                                Featuring winning projects from our human interaction themed hackathon.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-black/30 backdrop-blur-sm px-6 md:px-8 py-4 border-t border-purple-500/20">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://blog.hackunited.org/united-hacks-v6-hackathon-recap"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Article Recap
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200 rounded-full"
                          asChild
                        >
                          <a
                            href="https://unitedhacksv6.devpost.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DEVPOST
                            <ArrowRightIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Judges From Section */}
        <div className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
          <h2
            className={`headingText purpleGradient mt-4 mb-3 sm:mb-4 text-center ${playfairDisplay.className}`}
          >
            JUDGES FROM
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center mb-4 sm:mb-6 px-6 sm:px-8">
            Interested in judging our event? Email{" "}
            <a
              href="mailto:humans@hackunited.org"
              className="text-purple-400 hover:text-purple-300 underline transition-colors break-all sm:break-normal"
            >
              humans@hackunited.org
            </a>
          </p>

          <div
            className="container mx-auto px-6 sm:px-8 md:px-8 companiesLogo flex overflow-hidden relative py-6"
            suppressHydrationWarning
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-10"></div>
            <div className="judgeContainer flex" suppressHydrationWarning>
              {[...judges, ...judges, ...judges, ...judges].map(
                (judge, index) => (
                  <img
                    key={`judge-${index}`}
                    src={judge.src}
                    alt={judge.alt}
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

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Dot grid background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

          <div className="container relative px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in">
                Ready to Join Our Community?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
                Whether you're a beginner or an experienced developer, there's a
                place for you in our community. Join us for our next hackathon
                or become a part of our Discord community.
              </p>
              <div className="flex justify-center animate-fade-in">
                <DiscordWidget />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
