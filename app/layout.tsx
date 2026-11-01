import type React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import "@/components/shell.css";
import "@/components/journey/journey.css";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import AnnouncementBanner from "@/components/announcement-banner";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import MotionLayer from "@/components/motion-layer";
import JourneyRail from "@/components/journey/journey-rail";
import NextStop from "@/components/journey/next-stop";
import ClickSpark from "@/components/obsidian/click-spark";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-sans",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hackunited.org"),
  title: "Hack United",
  description:
    "Hack United is a 501(c)(3) non-profit organization with a passion for programming and technology. Join our community of developers, participate in hackathons, and make an impact through code.",
  keywords:
    "hackathon, teen developers, programming, technology, non-profit, coding competitions, United Hacks",
  authors: [{ name: "Hack United Team" }],
  openGraph: {
    title: "Hack United",
    description:
      "Join our community of young developers, participate in hackathons, and make an impact through code.",
    url: "https://hackunited.org",
    siteName: "Hack United",
    images: [
      {
        url: "/images/hackunitedsplash.png",
        width: 1200,
        height: 630,
        alt: "Hack United - Empowering Teen Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/main-globe-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/main-globe-icon.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/main-globe-icon.png",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/main-globe-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/main-globe-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/main-globe-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        id="top"
        className={`${sans.variable} ${serif.variable} ${mono.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <AnnouncementBanner />
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <NextStop />
            <SiteFooter />
          </div>
          <MotionLayer />
          <JourneyRail />
          <ClickSpark />
        </ThemeProvider>
      </body>
    </html>
  );
}
