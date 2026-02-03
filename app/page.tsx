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
import { ArrowRightIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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

const judges = [
  { src: "/judgesfrom/Amazon-Logo.png", alt: "Amazon" },
  { src: "/judgesfrom/Google-Logo.png", alt: "Google" },
  { src: "/judgesfrom/Microsoft-Logo.png", alt: "Microsoft" },
  { src: "/judgesfrom/Stanford-Logo.png", alt: "Stanford" },
  { src: "/judgesfrom/Visa-Logo.png", alt: "Visa" },
  { src: "/judgesfrom/YC-Logo.png", alt: "Y Combinator" },
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

  .goal-icon-container {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    border-radius: 9999px;
    background: rgba(139, 92, 246, 0.1);
    box-shadow: 0 0 20px 5px rgba(168, 85, 247, 0.4);
  }

  .goal-icon-container svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    .goal-icon-container {
      width: 64px;
      height: 64px;
    }
    .goal-icon-container svg {
      width: 32px;
      height: 32px;
    }
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

  .stat-card-1 {
    animation: heroFadeUp 0.8s ease-out 0.8s forwards;
    opacity: 0;
  }

  .stat-card-2 {
    animation: heroFadeUp 0.8s ease-out 1s forwards;
    opacity: 0;
  }

  .stat-card-3 {
    animation: heroFadeUp 0.8s ease-out 1.2s forwards;
    opacity: 0;
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
        loading="lazy"
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
    if (typeof window === "undefined" || !mounted) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const tweens: gsap.core.Tween[] = [];

    const animateMarquee = (container: Element, duration: number) => {
      const images = Array.from(container.querySelectorAll("img"));
      let loadedCount = 0;
      let hasAnimated = false;

      const startAnimation = () => {
        if (hasAnimated) return;
        hasAnimated = true;
        const firstSetWidth = container.scrollWidth / 4;
        if (!firstSetWidth) return;

        gsap.set(container, { x: 0 });
        const tween = gsap.to(container, {
          x: -firstSetWidth,
          duration,
          ease: "none",
          repeat: -1,
        });
        tweens.push(tween);
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
    };

    const timeoutId = window.setTimeout(() => {
      const logoContainer = document.querySelector(".logoContainer");
      if (logoContainer) {
        animateMarquee(logoContainer, 10);
      }

      const judgeContainer = document.querySelector(".judgeContainer");
      if (judgeContainer) {
        animateMarquee(judgeContainer, 15);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      tweens.forEach((tween) => tween.kill());
    };
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
                src="/images/Logo.png"
                alt="Hack United logo"
                loading="eager"
                decoding="async"
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
        <section className="relative py-10 sm:py-14">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="container mx-auto px-6 sm:px-8 md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <Badge
                  variant="outline"
                  className="w-fit border-purple-500/40 text-purple-300"
                >
                  Press
                </Badge>
                <h2
                  className={`headingText purpleGradient text-left ${playfairDisplay.className}`}
                >
                  RECOGNIZED BY
                </h2>
                <p className="text-sm sm:text-base text-gray-400 max-w-xl">
                  Highlighted by global outlets for empowering student builders
                  with real-world tech projects and soft skill development.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-black/40 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  Global coverage
                </div>
                <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-black/40 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  Youth-led nonprofit
                </div>
                <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-black/40 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  Hackathon innovation
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-6 px-6 sm:px-8 md:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-black/30 px-2 py-6 sm:px-4">
              <div className="logoContainer flex items-center" suppressHydrationWarning>
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                  <a
                    key={`logo-${index}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${logo.alt} article`}
                    className="block"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="cursor-pointer"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black to-transparent z-30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black to-transparent z-30 pointer-events-none" />
            </div>
          </div>
        </section>
        {/* Who Are We Section */}
        <section
          id="who-are-we"
          className="relative overflow-hidden py-16 md:py-24"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          <div className="container relative mx-auto px-6 sm:px-8 md:px-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6 text-left">
              <Badge
                variant="outline"
                className="w-fit border-purple-500/40 text-purple-300"
              >
                About
              </Badge>
              <h2 className="headingText purpleGradient">ABOUT US</h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 leading-relaxed">
                <p>
                  Hack United is a 501(c)(3) non-profit organization with a
                  passion for programming and technology. We build welcoming
                  spaces where students collaborate, learn, and create with
                  confidence.
                </p>
                <p>
                  Through free hackathons and workshops, participants develop
                  communication, teamwork, problem-solving, and presentation
                  skills alongside their technical growth.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-base">
                      Free Hackathons
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Real-world themes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-300">
                    Build meaningful projects with mentorship and feedback.
                  </CardContent>
                </Card>
                <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-base">
                      Skill Workshops
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Hands-on learning
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-300">
                    Learn from industry professionals and student leaders.
                  </CardContent>
                </Card>
                <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-base">
                      Community First
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Global connections
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-300">
                    Meet builders worldwide in a supportive, creative space.
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-black to-black p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    className="h-16 w-16 sm:h-20 sm:w-20"
                    src="/images/globe-icon.png"
                    alt="Hack United globe icon"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="text-xs uppercase text-gray-400">
                      501(c)(3) nonprofit
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-white">
                      Youth-led, global community
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-purple-500/20 bg-black/40 p-3 text-center">
                    <p className="text-2xl font-bold text-purple-400">25k+</p>
                    <p className="text-xs text-gray-400">Engineers impacted</p>
                  </div>
                  <div className="rounded-xl border border-purple-500/20 bg-black/40 p-3 text-center">
                    <p className="text-2xl font-bold text-purple-400">50+</p>
                    <p className="text-xs text-gray-400">Countries reached</p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-purple-500/20 bg-black/40 p-4 text-sm text-gray-300">
                  We build confidence through real collaboration, storytelling,
                  and projects that matter.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/95 to-black/90" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start mb-10 sm:mb-12">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="w-fit border-purple-500/50 text-purple-300 text-xs sm:text-sm"
                >
                  Impact
                </Badge>
                <h2 className="headingText purpleGradient">OUR IMPACT</h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Through hackathons, workshops, and community initiatives,
                  we've built a global network of innovators. But our mission
                  extends beyond hackathons.
                </p>
              </div>
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-purple-500/20">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <span className="text-purple-400 font-semibold">
                    Beyond hackathons:
                  </span>{" "}
                  Check out{" "}
                  <a
                    href="https://fund.hackunited.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    United Fund
                  </a>{" "}
                  — our initiative backing builders, creatives, and dreamers
                  with $50–$500 grants, no strings attached.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="border-purple-500/40 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                    asChild
                  >
                    <a
                      href="https://fund.hackunited.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore United Fund
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-200 hover:bg-gray-800/40"
                    asChild
                  >
                    <Link href="/apply">Volunteer with us</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-6 sm:px-8 md:px-2">
              <Card className="stat-card-1 border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm sm:col-span-2 lg:col-span-1 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-2 p-4 sm:p-6 text-center sm:text-left">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">
                    25,000+
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left p-4 sm:p-6 pt-0">
                  <CardDescription className="text-white text-xs sm:text-sm md:text-base">
                    Engineers Impacted
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="stat-card-2 border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm sm:col-span-2 lg:col-span-1 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-2 p-4 sm:p-6 text-center sm:text-left">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">
                    3,000+
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left p-4 sm:p-6 pt-0">
                  <CardDescription className="text-white text-xs sm:text-sm md:text-base">
                    Community Members
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="stat-card-3 border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm sm:col-span-2 lg:col-span-1 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-2 p-4 sm:p-6 text-center sm:text-left">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">
                    50+
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left p-4 sm:p-6 pt-0">
                  <CardDescription className="text-white text-xs sm:text-sm md:text-base">
                    Countries Reached
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Goals Section */}
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/90 to-black/85" />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 space-y-4">
              <Badge
                variant="outline"
                className="px-3 py-1 sm:px-4 border-purple-500/50 text-purple-300 text-xs sm:text-sm"
              >
                Our Vision
              </Badge>
              <h2 className="headingText purpleGradient mt-[15px] text-center">
                OUR GOALS
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                We focus on more than code. Every initiative is designed to
                grow confidence, collaboration, and real-world impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
              <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md hover:border-purple-500/60 hover:scale-105 transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="goal-icon-container">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <CardTitle className="text-white text-center">
                    Accelerating Soft Skills
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-center">
                    Beyond just coding mechanics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    We teach more than just mechanical coding skills: As the
                    world rapidly evolves, we envision an inclusive platform
                    where everyone can learn about the exciting advancements in
                    the tech field and the knowledge needed to continue their
                    programming journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md hover:border-purple-500/60 hover:scale-105 transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="goal-icon-container">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      ></path>
                    </svg>
                  </div>
                  <CardTitle className="text-white text-center">
                    Practical Applications
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-center">
                    Real-world problem solving
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    We emphasize practical applications of programming and
                    technology to prepare community members for the rapidly
                    changing future. Our hackathons help exemplify our goals as
                    we consistently use real-world problems to develop themes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-purple-500/30 bg-black/40 backdrop-blur-md hover:border-purple-500/60 hover:scale-105 transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="goal-icon-container">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <CardTitle className="text-white text-center">
                    Connecting Innovators
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-center">
                    Building a supportive community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    Our community provides a platform for innovators to learn,
                    grow, and support each other. We connect like-minded
                    individuals to overcome the challenges of acquiring new
                    skills. Join us to thrive in a collaborative environment.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                className="border-purple-500/40 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                asChild
              >
                <Link href="/apply">See volunteer roles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/90 to-black/85" />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="container relative px-6 sm:px-8 md:px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 space-y-4">
              <Badge
                variant="outline"
                className="px-3 py-1 sm:px-4 border-purple-500/50 text-purple-300 text-xs sm:text-sm"
              >
                Our Legacy
              </Badge>
              <h2 className="headingText purpleGradient mt-[15px] text-center">
                PREVIOUS HACKATHONS
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Six editions, dozens of workshops, and thousands of student
                builders. Each season explores a new theme while elevating
                creativity and collaboration.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-gray-400">
                <div className="rounded-full border border-purple-500/20 bg-black/40 px-3 py-1">
                  6 editions
                </div>
                <div className="rounded-full border border-purple-500/20 bg-black/40 px-3 py-1">
                  Global participation
                </div>
                <div className="rounded-full border border-purple-500/20 bg-black/40 px-3 py-1">
                  Youth-led themes
                </div>
              </div>
            </div>

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
        <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <Badge
                  variant="outline"
                  className="w-fit border-purple-500/40 text-purple-300"
                >
                  Judges
                </Badge>
                <h2
                  className={`headingText purpleGradient text-left ${playfairDisplay.className}`}
                >
                  JUDGES FROM
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl">
                  Our panels include leaders from top companies and universities
                  who care about youth innovation.
                </p>
              </div>
              <div className="rounded-2xl border border-purple-500/20 bg-black/40 p-4 text-sm text-gray-300">
                <p>
                  Interested in judging our event? Email{" "}
                  <a
                    href="mailto:humans@hackunited.org"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors break-all sm:break-normal"
                  >
                    humans@hackunited.org
                  </a>
                </p>
                <div className="mt-3">
                  <Button
                    variant="outline"
                    className="border-purple-500/40 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                    asChild
                  >
                    <a href="mailto:humans@hackunited.org">Become a judge</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container mx-auto px-6 sm:px-8 md:px-8 companiesLogo flex overflow-hidden relative py-6 mt-6"
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
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/95 to-black/90" />

          <div className="container relative px-4 mx-auto">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="w-fit border-purple-500/40 text-purple-300"
                >
                  Get Involved
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white animate-fade-in">
                  Ready to Join Our Community?
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl animate-fade-in">
                  Whether you're a beginner or an experienced developer,
                  there's a place for you. Join our next hackathon or connect
                  with builders in our Discord community.
                </p>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-purple-500/20 bg-black/50 p-4">
                    <h3 className="text-white font-semibold mb-1">
                      Join the Discord
                    </h3>
                    <p className="text-sm text-gray-300">
                      Meet mentors, form teams, and get updates on upcoming
                      events.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-purple-500/20 bg-black/50 p-4">
                    <h3 className="text-white font-semibold mb-1">
                      Volunteer or Partner
                    </h3>
                    <p className="text-sm text-gray-300">
                      Help run workshops, mentor participants, or support our
                      nonprofit mission.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    asChild
                  >
                    <a
                      href="https://discord.gg/hackunited"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Discord
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-500/40 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                    asChild
                  >
                    <Link href="/apply">Volunteer</Link>
                  </Button>
                </div>
              </div>
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
