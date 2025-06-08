"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Heart, Mail, Star } from "lucide-react"
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

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
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-16">
      {/* Main Container */}
      <div className="relative max-w-sm w-full mx-auto">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
          {/* Main Links */}
          <div className="space-y-4 mb-8">
            {/* Website */}
            <Link href="/">
              <button className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                <span className="text-lg">Website</span>
                <Home className="w-6 h-6" />
              </button>
            </Link>

            {/* Donate */}
            <Link href="/donate">
              <button className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400">
                <span className="text-lg">Donate</span>
                <Heart className="w-6 h-6" />
              </button>
            </Link>

            {/* Email */}
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400"
            >
              <span className="text-lg">Email</span>
              <Mail className="w-6 h-6" />
            </button>

            {/* Discord */}
            <a href="https://discord.gg/YyPDpmDZke" target="_blank" rel="noopener noreferrer">
              <button className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400">
                <span className="text-lg">Discord</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.69C13.09 4.46 11.51 4.46 9.95 4.69C9.85 4.48 9.72 4.21 9.6 4C8.09 4.26 6.66 4.71 5.33 5.33C2.94 8.8 2.34 12.2 2.64 15.54C4.37 16.81 6.05 17.59 7.71 18.07C8.05 17.62 8.35 17.14 8.6 16.63C8.01 16.42 7.44 16.15 6.91 15.85C7.03 15.76 7.14 15.67 7.25 15.58C10.4 16.99 13.85 16.99 16.97 15.58C17.08 15.67 17.19 15.76 17.31 15.85C16.77 16.16 16.2 16.42 15.61 16.63C15.86 17.14 16.16 17.62 16.5 18.07C18.16 17.59 19.84 16.81 21.57 15.54C21.92 11.62 20.96 8.25 19.27 5.33ZM8.42 13.36C7.42 13.36 6.6 12.47 6.6 11.37C6.6 10.27 7.4 9.38 8.42 9.38C9.44 9.38 10.25 10.27 10.24 11.37C10.24 12.47 9.44 13.36 8.42 13.36ZM15.7 13.36C14.7 13.36 13.88 12.47 13.88 11.37C13.88 10.27 14.68 9.38 15.7 9.38C16.72 9.38 17.53 10.27 17.52 11.37C17.52 12.47 16.72 13.36 15.7 13.36Z" />
                </svg>
              </button>
            </a>

            {/* Blog */}
            <a href="https://blog.hackunited.org/" target="_blank" rel="noopener noreferrer">
              <button className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700">
                <span className="text-lg">Blog</span>
                <Star className="w-6 h-6" />
              </button>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/hack_united/" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25">
                <Instagram className="w-6 h-6 text-white" />
              </button>
            </a>

            <a href="https://www.linkedin.com/company/hack-united" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25">
                <Linkedin className="w-6 h-6 text-white" />
              </button>
            </a>

            <a href="https://youtube.com/@hack_united/" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25">
                <Youtube className="w-6 h-6 text-white" />
              </button>
            </a>

            <a href="https://x.com/hackunited_" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25">
                <Twitter className="w-6 h-6 text-white" />
              </button>
            </a>
          </div>
        </div>

        {/* Copied Message Popup */}
        {showCopiedMessage && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gray-800 border border-gray-600 text-white px-6 py-3 rounded-xl shadow-xl z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Copied "humans@hackunited.org"!
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
