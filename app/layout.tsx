import type React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Archivo, Martian_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import AnnouncementBanner from "@/components/announcement-banner";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import RevealObserver from "@/components/site/reveal-observer";

// Archivo carries both display and text: its width axis runs from condensed to
// the expanded poster cut of the Hack United splash.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-mono",
  display: "swap",
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
    <html
      lang="en"
      className={`${archivo.variable} ${martianMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Lets CSS hold back scroll-reveal styles until JS is running. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/main-globe-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/main-globe-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/main-globe-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-ink text-paper">
            <AnnouncementBanner />
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <RevealObserver />
        </ThemeProvider>
      </body>
    </html>
  );
}
