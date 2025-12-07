import type React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hackunited.org"),
  title: "Hack United",
  description:
    "Hack United is a 501(c)(3) non-profit organization founded by teenagers with a passion for programming and technology. Join our community of young developers, participate in hackathons, and make an impact through code.",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-black text-white">
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
              <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/images/main-globe-icon.png"
                    alt="Hack United"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                  <span className="text-xl font-bold">
                    Hack{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
                      United
                    </span>
                  </span>
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                  <Link
                    href="/"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/donate"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Donate
                  </Link>
                  <Link
                    href="/team"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Team
                  </Link>
                  <Link
                    href="/judges"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Judges
                  </Link>
                  <Link
                    href="/apply"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Apply
                  </Link>
                  <Link
                    href="/social"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Socials
                  </Link>
                  <a
                    href="https://blog.hackunited.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Blogs
                  </a>
                </nav>

                <div className="flex items-center md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-gray-700/50 md:hidden"
                      >
                        <Menu className="h-5 w-5 text-white" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="border-gray-700 bg-gray-900"
                    >
                      <div className="mt-8 flex flex-col gap-6">
                        <Link
                          href="/"
                          className="py-2 text-base font-medium text-gray-300 transition-colors hover:text-white"
                        >
                          Home
                        </Link>
                        <Link
                          href="/donate"
                          className="py-2 text-base font-medium text-gray-300 transition-colors hover:text-white"
                        >
                          Donate
                        </Link>
                        <Link
                          href="/team"
                          className="py-2 text-base font-medium text-gray-300 transition-colors hover:text-white"
                        >
                          Team
                        </Link>
                        <Link
                          href="/judges"
                          className="py-2 text-base font-medium text-gray-300 transition-colors hover:text-white"
                        >
                          Judges
                        </Link>
                        <Link
                          href="/apply"
                          className="py-2 text-base font-medium text-gray-300 transition-colors hover:text-white"
                        >
                          Apply
                        </Link>
                        <Link
                          href="/social"
                          className="py-2 text-base font-medium text-gray-300 transition-colors hover:text-white"
                        >
                          Socials
                        </Link>
                        <a
                          href="https://blog.hackunited.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 text-base font-medium text-gray-300 transition-colors hover:text-white"
                        >
                          Blogs
                        </a>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            {children}
            <footer className="border-t border-purple-500/20 bg-black">
              <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                  <div className="space-y-4">
                    <Link
                      href="/"
                      className="flex items-center gap-2 font-bold text-xl"
                    >
                      <Image
                        src="/images/globe-icon.png"
                        alt="Hack United"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                      <span>Hack United</span>
                    </Link>
                    <p className="text-sm text-gray-400">
                      A 501(c)(3) non-profit organization founded by teenagers
                      with a passion for programming and technology.
                    </p>
                    <p className="text-sm text-gray-400">EIN: 81-2908499</p>
                    <div className="flex gap-2">
                      <a
                        href="https://instagram.com/hack_united"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full w-8 h-8 border-purple-500/30 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
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
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                          </svg>
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </a>
                      <a
                        href="https://linkedin.com/company/hack-united"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full w-8 h-8 border-purple-500/30 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
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
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                      <a
                        href="https://x.com/hackunited_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full w-8 h-8 border-purple-500/30 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
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
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                          <span className="sr-only">X (Twitter)</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                      COMPANY
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="mailto:humans@hackunited.org"
                          className="text-sm text-gray-400 hover:text-purple-400"
                        >
                          Sponsor Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:humans@hackunited.org"
                          className="text-sm text-gray-400 hover:text-purple-400"
                        >
                          Press/Media
                        </a>
                      </li>
                      <li>
                        <Link
                          href="/apply"
                          className="text-sm text-gray-400 hover:text-purple-400"
                        >
                          Volunteer
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                      Contact
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-gray-400">
                        Email: humans@hackunited.org
                      </li>
                      <li className="text-sm text-gray-400">
                        Discord: discord.gg/hackunited
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-purple-500/20">
                  <p className="text-xs text-gray-500 text-center">
                    © {new Date().getFullYear()} Hack United. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
