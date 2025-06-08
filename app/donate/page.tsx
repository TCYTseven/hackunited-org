import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function DonatePage() {
  return (
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
    </main>
  )
}
