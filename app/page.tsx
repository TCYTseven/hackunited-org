"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, ArrowRightIcon } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import InteractiveLogo from "@/components/interactive-logo"
import { ScrollButton, ScrollButtonWithIcon } from "@/components/scroll-button"
import NewsCarousel from "@/components/ui/news-carousel"

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
`

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
  return (
    <>
      <style jsx>{styles}</style>
      <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center -mt-20 pt-20">
        {/* Modern gradient background */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 -top-20 bg-[radial-gradient(#ffffff_0.5px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

        {/* Modern gradient overlays */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        
        {/* Purple accent glow - only visible on larger screens */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl hidden lg:block animate-pulse"></div>
        
        {/* Mobile gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-purple-900/10 to-transparent lg:hidden"></div>



        <div className="container relative px-4 mx-auto">
          {/* Mobile Design - Copy of reference style */}
          <div className="lg:hidden flex flex-col items-center text-center min-h-screen justify-center space-y-8 -mt-16">
            {/* Hero Image */}
            <div className="w-80 h-80 rounded-3xl overflow-hidden mb-4 animate-fade-in">
              <Image 
                src="/images/globe-icon.png" 
                alt="Hack United" 
                width={320} 
                height={320} 
                className="w-full h-full object-contain bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-16 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl font-bold text-white leading-tight max-w-sm animate-fade-in">
              Hack United
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm animate-fade-in">
              A 501(c)(3) non-profit organization that develops the soft skills in tech interested youth through hands on application, such as our flagship hackathons.
            </p>

            {/* Buttons */}
            <div className="flex flex-col w-full max-w-sm space-y-4 pt-4 animate-fade-in">
              <ScrollButton className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white py-4 rounded-full font-medium text-base transition-all duration-300">
                Learn More
              </ScrollButton>
            </div>
            <div className="w-full flex flex-col items-center mt-12">
              <NewsCarousel />
            </div>
          </div>

          {/* Desktop Design - Original layout */}
          <div className="hidden lg:grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center">
              {/* Globe icon and badge */}
              <div className="flex items-center gap-3 mb-12 animate-fade-in">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Image src="/images/globe-icon.png" alt="Hack United" width={24} height={24} className="h-6 w-6" />
                </div>
                <Badge className="bg-purple-600/10 text-purple-300/80 border-purple-500/20 py-1 px-3 text-xs hover:bg-purple-600/20 transition-colors duration-300">
                  Empowering Young Innovators
                </Badge>
              </div>

              {/* Main heading */}
              <h1 className="text-7xl font-bold tracking-tight mb-8 animate-fade-in">
                Hack <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">United</span>
              </h1>

              {/* Description */}
              <div className="mb-12 animate-fade-in">
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  A 501(c)(3) non-profit organization that develops the soft skills in tech interested youth through hands on application, such as our flagship hackathons.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 animate-fade-in">
                <ScrollButtonWithIcon 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:scale-105 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300"
                >
                  Learn More
                </ScrollButtonWithIcon>
              </div>
              <div className="w-full flex flex-col items-start mt-12">
                <NewsCarousel />
              </div>
            </div>

            {/* Right side with Interactive Logo */}
            <div className="relative flex items-center justify-center min-h-[600px] animate-fade-in">
              <div className="relative z-10">
                <InteractiveLogo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section id="who-are-we" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Dot grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        {/* Large "About Us" background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[20rem] sm:text-[28vw] md:text-[25vw] lg:text-[20vw] xl:text-[25vw] xl:h-[25vw] font-bold text-white/10 select-none leading-[0.8] whitespace-nowrap">
            ABOUT US
          </h2>
        </div>
        
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto bg-black/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-500/20 animate-fade-in hover:border-purple-500/40 transition-all duration-500">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Hack United is a 501(c)(3) non-profit organization founded by teenagers with a passion for programming and
              technology. Our mission is to inspire and educate the next generation of innovators through hackathons and
              workshops. We address a problem not as commonly talked about, aiming to equip high school and college
              students with the essential soft skills needed to thrive in their chosen career paths. This is done
              through hands on application such as our free to enter hackathons. Through our initiatives, we ultimately
              aim to help students prosper in the realm of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* Dot grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute -top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"></div>

        <div className="container relative px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Upcoming Event</h2>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">Register now for our next hackathon</p>
            </div>
          </div>

          <Card className="overflow-hidden border border-purple-500/30 bg-black/60 backdrop-blur-sm animate-fade-in hover:border-purple-500/50 transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-purple-900/50 to-purple-950/50">
                <Badge className="bg-white/10 text-white hover:bg-white/20 mb-4 sm:mb-6 border-purple-500/50 text-xs sm:text-sm">
                  Registration Open
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">United Hacks V5</h3>
                <p className="text-white/90 mb-6 text-sm sm:text-base">
                  Join us for our biggest hackathon yet! Connect with other innovators, learn from industry experts, and
                  build amazing projects.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div>
                    <h4 className="text-white/70 text-xs sm:text-sm font-medium mb-1">Date</h4>
                    <p className="font-medium text-sm sm:text-base">July 11-13, 2025</p>
                  </div>
                  <div>
                    <h4 className="text-white/70 text-xs sm:text-sm font-medium mb-1">Location</h4>
                    <p className="font-medium text-sm sm:text-base">Online (Virtual)</p>
                  </div>
                  <div>
                    <h4 className="text-white/70 text-xs sm:text-sm font-medium mb-1">Team Size</h4>
                    <p className="font-medium text-sm sm:text-base">1-4 Members</p>
                  </div>
                  <div>
                    <h4 className="text-white/70 text-xs sm:text-sm font-medium mb-1">Entry Fee</h4>
                    <p className="font-medium text-sm sm:text-base">Free</p>
                  </div>
                </div>
                <a 
                  href="https://unitedhacksv5.devpost.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-purple-900 hover:bg-white/90 hover:scale-105 w-full sm:w-auto text-sm sm:text-base transition-all duration-300">Register Now</Button>
                </a>
              </div>
              <div className="relative min-h-[200px] sm:min-h-[300px] lg:min-h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black rounded-r-xl"></div>
                <div className="absolute inset-0 p-4 sm:p-6">
                  <iframe
                    className="w-full h-full rounded-xl border border-purple-500/20"
                    src="https://www.youtube.com/embed/tETq2E0kPE0"
                    title="United Hacks V5 Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* Dot grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        {/* Background elements for stats */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-600/10 rounded-full blur-3xl hidden lg:block"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full blur-3xl hidden lg:block"></div>
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm animate-fade-in hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2 text-center sm:text-left">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-purple-400">25,000+</CardTitle>
              </CardHeader>
              <CardContent className="text-center sm:text-left">
                <CardDescription className="text-gray-300 text-sm sm:text-base">Individuals Impacted</CardDescription>
              </CardContent>
            </Card>
            <Card className="border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm animate-fade-in hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2 text-center sm:text-left">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-purple-400">3,000+</CardTitle>
              </CardHeader>
              <CardContent className="text-center sm:text-left">
                <CardDescription className="text-gray-300 text-sm sm:text-base">Community Members</CardDescription>
              </CardContent>
            </Card>
            <Card className="border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm sm:col-span-2 lg:col-span-1 animate-fade-in hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2 text-center sm:text-left">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-purple-400">50+</CardTitle>
              </CardHeader>
              <CardContent className="text-center sm:text-left">
                <CardDescription className="text-gray-300 text-sm sm:text-base">Countries Impacted</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* Dot grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"></div>

        <div className="container relative px-4 mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Badge variant="outline" className="px-3 py-1 sm:px-4 border-purple-500/50 text-purple-300 text-xs sm:text-sm">
              Our Vision
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-white">Our Goals</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm hover:border-purple-500/60 hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <CardTitle className="text-white">Accelerating Soft Skills</CardTitle>
                <CardDescription className="text-gray-300">Beyond just coding mechanics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We teach more than just mechanical coding skills: As the world rapidly evolves, we envision an inclusive
                  platform where everyone can learn about the exciting advancements in the tech field and the knowledge
                  needed to continue their programming journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm hover:border-purple-500/60 hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <CardTitle className="text-white">Practical Applications</CardTitle>
                <CardDescription className="text-gray-300">Real-world problem solving</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We emphasize practical applications of programming and technology to prepare community members for the
                  rapidly changing future. Our hackathons help exemplify our goals as we consistently use real-world
                  problems to develop themes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm hover:border-purple-500/60 hover:scale-105 transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <CardTitle className="text-white">Connecting Innovators</CardTitle>
                <CardDescription className="text-gray-300">Building a supportive community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our community provides a platform for innovators to learn, grow, and support each other. We connect
                  like-minded individuals to overcome the challenges of acquiring new skills. Join us to thrive in a
                  collaborative environment.
                </p>
              </CardContent>
            </Card>
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
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"></div>

        <div className="container relative px-4 mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Badge variant="outline" className="px-3 py-1 sm:px-4 border-purple-500/50 text-purple-300 text-xs sm:text-sm">
              Our Legacy
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-white">Check Out Our Previous Hackathons!</h2>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="v4" className="w-full">
              <TabsList className="w-full grid grid-cols-4 mb-8 lg:mb-12 h-12 sm:h-14 bg-gray-900/80 border border-purple-500/30">
                <TabsTrigger
                  value="v1"
                  className="data-[state=active]:bg-purple-600/50 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  V1
                </TabsTrigger>
                <TabsTrigger
                  value="v2"
                  className="data-[state=active]:bg-purple-600/50 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  V2
                </TabsTrigger>
                <TabsTrigger
                  value="v3"
                  className="data-[state=active]:bg-purple-600/50 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  V3
                </TabsTrigger>
                <TabsTrigger
                  value="v4"
                  className="data-[state=active]:bg-purple-600/50 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  V4
                </TabsTrigger>
              </TabsList>

              <TabsContent value="v1" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">United Hacks V1</h3>
                        <p className="text-gray-300 mb-2">
                          <span className="text-purple-400 font-semibold">August 2023</span> • Mental Health Theme
                        </p>
                        <p className="text-gray-300 mb-6">
                          Our inaugural hackathon focused on mental health solutions, bringing together 400+ participants to create impactful projects with industry professional judges.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">400+</div>
                            <div className="text-xs text-gray-400">Participants</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">50+</div>
                            <div className="text-xs text-gray-400">Projects</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">$5,000+</div>
                            <div className="text-xs text-gray-400">Prize Pool</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">10+</div>
                            <div className="text-xs text-gray-400">Sponsors</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">100+</div>
                            <div className="text-xs text-gray-400">Workshop Attendees</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">10</div>
                            <div className="text-xs text-gray-400">Workshops</div>
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
                            <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">Mental Health</Badge>
                            <h4 className="text-white font-medium">August 2023</h4>
                            <p className="text-white/80 text-sm">Inaugural hackathon showcasing mental health innovations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-black/60 px-6 md:px-8 py-4 border-t border-purple-500/20">
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                        asChild
                      >
                        <a href="https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology" target="_blank" rel="noopener noreferrer">
                          Article Recap
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200"
                        asChild
                      >
                        <a href="https://unitedhacks23.devpost.com/" target="_blank" rel="noopener noreferrer">
                          DEVPOST
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="v2" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">United Hacks V2</h3>
                        <p className="text-gray-300 mb-2">
                          <span className="text-purple-400 font-semibold">January 2024</span> • Resolutions Theme
                        </p>
                        <p className="text-gray-300 mb-6">
                          Our second hackathon focused on New Year resolutions and positive change, featuring 400+ participants and the largest prize pool to date with industry professional & student judges.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">400+</div>
                            <div className="text-xs text-gray-400">Participants</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">75+</div>
                            <div className="text-xs text-gray-400">Projects</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">$15,000+</div>
                            <div className="text-xs text-gray-400">Prize Pool</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">15+</div>
                            <div className="text-xs text-gray-400">Sponsors</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">100+</div>
                            <div className="text-xs text-gray-400">Workshop Attendees</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">10</div>
                            <div className="text-xs text-gray-400">Workshops</div>
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
                            <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">Resolutions</Badge>
                            <h4 className="text-white font-medium">January 2024</h4>
                            <p className="text-white/80 text-sm">Outstanding winning projects from our largest prize pool</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-black/60 px-6 md:px-8 py-4 border-t border-purple-500/20">
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                        asChild
                      >
                        <a href="https://blog.hackunited.org/united-hacks-v2-hackathon-recap" target="_blank" rel="noopener noreferrer">
                          Article Recap
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200"
                        asChild
                      >
                        <a href="https://unitedhacksv2.devpost.com/" target="_blank" rel="noopener noreferrer">
                          DEVPOST
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="v3" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">United Hacks V3</h3>
                        <p className="text-gray-300 mb-2">
                          <span className="text-purple-400 font-semibold">September 2024</span> • Communication Theme
                        </p>
                        <p className="text-gray-300 mb-6">
                          Our third hackathon introduced "Mini-Hacks" with a focus on communication solutions, featuring 150+ participants and industry professional judges in a more intimate setting.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">150+</div>
                            <div className="text-xs text-gray-400">Participants</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">$2,000+</div>
                            <div className="text-xs text-gray-400">Prize Pool</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">75+</div>
                            <div className="text-xs text-gray-400">Workshop Attendees</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">10</div>
                            <div className="text-xs text-gray-400">Workshops</div>
                          </div>
                        </div>
                        <div className="text-center p-3 bg-purple-600/20 rounded-lg border border-purple-500/30">
                          <div className="text-lg font-bold text-purple-300">Mini-Hacks Format</div>
                          <div className="text-xs text-gray-400">Smaller, focused hackathon experience</div>
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
                            <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">Communication</Badge>
                            <h4 className="text-white font-medium">September 2024</h4>
                            <p className="text-white/80 text-sm">Mini-Hacks showcasing innovative winning projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-black/60 px-6 md:px-8 py-4 border-t border-purple-500/20">
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                        asChild
                      >
                        <a href="https://blog.hackunited.org/united-hacks-v3-recap" target="_blank" rel="noopener noreferrer">
                          Article Recap
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200"
                        asChild
                      >
                        <a href="https://unitedhacksv3.devpost.com/" target="_blank" rel="noopener noreferrer">
                          DEVPOST
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="v4" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">United Hacks V4</h3>
                        <p className="text-gray-300 mb-2">
                          <span className="text-purple-400 font-semibold">January 2025</span> • Social Impact Theme
                        </p>
                        <p className="text-gray-300 mb-6">
                          Our most recent hackathon focused on social impact solutions, bringing together 400+ participants to tackle real-world challenges with industry professional judges.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">400+</div>
                            <div className="text-xs text-gray-400">Participants</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">80+</div>
                            <div className="text-xs text-gray-400">Projects</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">$10,000+</div>
                            <div className="text-xs text-gray-400">Prize Pool</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">10+</div>
                            <div className="text-xs text-gray-400">Sponsors</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">100+</div>
                            <div className="text-xs text-gray-400">Workshop Attendees</div>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="text-xl font-bold text-purple-400">10</div>
                            <div className="text-xs text-gray-400">Workshops</div>
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
                            <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">Social Impact</Badge>
                            <h4 className="text-white font-medium">January 2025</h4>
                            <p className="text-white/80 text-sm">Featuring winning projects from our latest hackathon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-black/60 px-6 md:px-8 py-4 border-t border-purple-500/20">
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                        asChild
                      >
                        <a href="https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact" target="_blank" rel="noopener noreferrer">
                          Article Recap
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2 border-gray-500 text-gray-300 hover:bg-gray-800/30 hover:text-gray-200"
                        asChild
                      >
                        <a href="https://unitedhacksv4.devpost.com/" target="_blank" rel="noopener noreferrer">
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Dot grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in">Ready to Join Our Community?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
              Whether you're a beginner or an experienced developer, there's a place for you in our community. Join us
              for our next hackathon or become a part of our Discord community.
            </p>
            <div className="flex justify-center animate-fade-in">
              <DiscordWidget />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
