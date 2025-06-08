"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Heart, Mail, Star } from "lucide-react"
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SocialPage() {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("humans@hackunited.org")
      setShowCopiedMessage(true)
      setTimeout(() => setShowCopiedMessage(false), 3000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <main className="bg-black text-white">
      {/* Social Links Section */}
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
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="flex items-center justify-center mb-6">
              <Badge className="bg-purple-600/10 text-purple-300/80 border-purple-500/20 py-2 px-4 text-sm">
                Connect With Us
              </Badge>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Social{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Links
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-16 max-w-2xl mx-auto">
              Connect with us across all platforms and stay updated with the latest from Hack United.
            </p>

            {/* Links Container */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl max-w-lg mx-auto">
              {/* Main Links */}
              <div className="flex flex-col gap-4 mb-8">
                {/* Website */}
                <Link href="/" className="block">
                  <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border border-blue-500/20">
                    <span className="text-base">Website</span>
                    <Home className="w-5 h-5" />
                  </button>
                </Link>

                {/* Donate */}
                <Link href="/donate" className="block">
                  <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border border-green-500/20">
                    <span className="text-base">Donate</span>
                    <Heart className="w-5 h-5" />
                  </button>
                </Link>

                {/* Email */}
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 border border-orange-500/20"
                >
                  <span className="text-base">Email</span>
                  <Mail className="w-5 h-5" />
                </button>

                {/* Discord */}
                <a href="https://discord.gg/YyPDpmDZke" target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 border border-indigo-500/20">
                    <span className="text-base">Discord</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.69C13.09 4.46 11.51 4.46 9.95 4.69C9.85 4.48 9.72 4.21 9.6 4C8.09 4.26 6.66 4.71 5.33 5.33C2.94 8.8 2.34 12.2 2.64 15.54C4.37 16.81 6.05 17.59 7.71 18.07C8.05 17.62 8.35 17.14 8.6 16.63C8.01 16.42 7.44 16.15 6.91 15.85C7.03 15.76 7.14 15.67 7.25 15.58C10.4 16.99 13.85 16.99 16.97 15.58C17.08 15.67 17.19 15.76 17.31 15.85C16.77 16.16 16.2 16.42 15.61 16.63C15.86 17.14 16.16 17.62 16.5 18.07C18.16 17.59 19.84 16.81 21.57 15.54C21.92 11.62 20.96 8.25 19.27 5.33ZM8.42 13.36C7.42 13.36 6.6 12.47 6.6 11.37C6.6 10.27 7.4 9.38 8.42 9.38C9.44 9.38 10.25 10.27 10.24 11.37C10.24 12.47 9.44 13.36 8.42 13.36ZM15.7 13.36C14.7 13.36 13.88 12.47 13.88 11.37C13.88 10.27 14.68 9.38 15.7 9.38C16.72 9.38 17.53 10.27 17.52 11.37C17.52 12.47 16.72 13.36 15.7 13.36Z" />
                    </svg>
                  </button>
                </a>

                {/* Blog */}
                <a href="https://blog.hackunited.org/" target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 border border-purple-500/20">
                    <span className="text-base">Blog</span>
                    <Star className="w-5 h-5" />
                  </button>
                </a>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-8"></div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-6">
                <a href="https://www.instagram.com/hack_united/" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-purple-700/30">
                    <Instagram className="w-5 h-5 text-purple-300" />
                  </button>
                </a>

                <a href="https://www.linkedin.com/company/hack-united" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-purple-700/30">
                    <Linkedin className="w-5 h-5 text-purple-300" />
                  </button>
                </a>

                <a href="https://youtube.com/@hack_united/" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-purple-700/30">
                    <Youtube className="w-5 h-5 text-purple-300" />
                  </button>
                </a>

                <a href="https://x.com/hackunited_" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-purple-700/30">
                    <Twitter className="w-5 h-5 text-purple-300" />
                  </button>
                </a>
              </div>
            </div>

            {/* Copied Message Popup */}
            {showCopiedMessage && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Copied "humans@hackunited.org"!</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
