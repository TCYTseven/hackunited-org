import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hack United - Empowering the Next Generation of Innovators",
  description:
    "Hack United is a 501(c)(3) non-profit organization founded by teenagers with a passion for programming and technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-black text-white">
            <header className="sticky top-0 z-50 w-full px-4 py-4">
              <div className="max-w-7xl mx-auto">
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-full border border-gray-600/40 shadow-lg drop-shadow-md px-6 py-3">
                  <div className="flex items-center justify-between">
                    {/* Logo and Brand */}
                    <Link href="/" className="flex items-center gap-3 font-bold text-lg">
                      <Image src="/images/globe-icon.png" alt="Hack United" width={32} height={32} className="h-8 w-8" />
                      <span className="text-white">Hack United</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                      <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200">
                        Home
                      </Link>
                      <Link href="/donate" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200">
                        Donate
                      </Link>
                      <Link href="/team" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200">
                        Team
                      </Link>
                      <Link href="/apply" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200">
                        Apply
                      </Link>
                      <Link href="/social" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200">
                        Social
                      </Link>
                      <a
                        href="https://blog.hackunited.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200"
                      >
                        Blog
                      </a>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                      <a 
                        href="https://unitedhacks.hackunited.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200">
                          Hackathon
                        </Button>
                      </a>
                      
                      {/* Mobile Menu */}
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-gray-700/50">
                            <Menu className="h-5 w-5 text-white" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-gray-900 border-gray-700">
                          <div className="flex flex-col gap-6 mt-8">
                            <Link href="/" className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2">
                              Home
                            </Link>
                            <Link href="/donate" className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2">
                              Donate
                            </Link>
                            <Link href="/team" className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2">
                              Team
                            </Link>
                            <Link href="/apply" className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2">
                              Apply
                            </Link>
                            <Link href="/social" className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2">
                              Social
                            </Link>
                            <a
                              href="https://blog.hackunited.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-medium text-gray-300 hover:text-white transition-colors py-2"
                            >
                              Blog
                            </a>
                            <div className="pt-4 border-t border-gray-700">
                              <a 
                                href="https://unitedhacks.hackunited.org" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3">
                                  Hackathons
                                </Button>
                              </a>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {children}
            <footer className="bg-black border-t border-purple-500/20">
              <div className="container px-4 py-8 sm:py-12 mx-auto">
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
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
                      A 501(c)(3) non-profit organization founded by teenagers with a passion for programming and
                      technology.
                    </p>
                    <div className="flex gap-2">
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
                        <span className="sr-only">Twitter</span>
                      </Button>
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
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Button>
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
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="text-sm text-gray-400 hover:text-purple-400">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/donate" className="text-sm text-gray-400 hover:text-purple-400">
                          Donate
                        </Link>
                      </li>
                      <li>
                        <Link href="/team" className="text-sm text-gray-400 hover:text-purple-400">
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/apply" className="text-sm text-gray-400 hover:text-purple-400">
                          Apply
                        </Link>
                      </li>
                      <li>
                        <Link href="/social" className="text-sm text-gray-400 hover:text-purple-400">
                          Social
                        </Link>
                      </li>
                      <li>
                        <a
                          href="https://blog.hackunited.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-purple-400"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                          Hackathon Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                          Workshop Materials
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                          Past Projects
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-gray-400 hover:text-purple-400">
                          Sponsorship Opportunities
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-gray-400">Email: contact@hackunited.org</li>
                      <li className="text-sm text-gray-400">Discord: discord.gg/hackunited</li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Contact Us</Button>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-purple-500/20">
                  <p className="text-xs text-gray-500 text-center">
                    © {new Date().getFullYear()} Hack United. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
