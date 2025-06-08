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

export default function Home() {
  return (
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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl hidden lg:block"></div>
        
        {/* Mobile gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-purple-900/10 to-transparent lg:hidden"></div>



        <div className="container relative px-4 mx-auto">
          {/* Mobile Design - Copy of reference style */}
          <div className="lg:hidden flex flex-col items-center text-center min-h-screen justify-center space-y-8 -mt-16">
            {/* Hero Image */}
            <div className="w-80 h-80 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/images/globe-icon.png" 
                alt="Hack United" 
                width={320} 
                height={320} 
                className="w-full h-full object-contain bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-16"
              />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl font-bold text-white leading-tight max-w-sm">
              Hack United
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              A 501(c)(3) developing soft skills in the next generation of tech innovators through free hackathons and hands-on learning.
            </p>

            {/* Buttons */}
            <div className="flex flex-col w-full max-w-sm space-y-4 pt-4">
              <ScrollButton className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full font-medium text-base">
                Learn More
              </ScrollButton>
            </div>
          </div>

          {/* Desktop Design - Original layout */}
          <div className="hidden lg:grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center">
              {/* Globe icon and badge */}
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Image src="/images/globe-icon.png" alt="Hack United" width={24} height={24} className="h-6 w-6" />
                </div>
                <Badge className="bg-purple-600/10 text-purple-300/80 border-purple-500/20 py-1 px-3 text-xs">
                  Empowering Young Innovators
                </Badge>
              </div>

              {/* Main heading */}
              <h1 className="text-7xl font-bold tracking-tight mb-8">
                Hack <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">United</span>
              </h1>

              {/* Who Are We? and description */}
              <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-200 mb-4">Who Are We?</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  A 501(c)(3) non-profit organization founded by teenagers with a passion for programming and
                  technology.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <ScrollButtonWithIcon 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-purple-500/25 transition-all duration-200"
                >
                  Learn More
                </ScrollButtonWithIcon>
              </div>
            </div>

            {/* Right side with Interactive Logo */}
            <div className="relative flex items-center justify-center min-h-[600px]">
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
          <div className="max-w-3xl mx-auto bg-black/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-500/20">
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

          <Card className="overflow-hidden border border-purple-500/30 bg-black/60 backdrop-blur-sm">
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
                  <Button className="bg-white text-purple-900 hover:bg-white/90 w-full sm:w-auto text-sm sm:text-base">Register Now</Button>
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
            <Card className="border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm">
              <CardHeader className="pb-2 text-center sm:text-left">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-purple-400">25,000+</CardTitle>
              </CardHeader>
              <CardContent className="text-center sm:text-left">
                <CardDescription className="text-gray-300 text-sm sm:text-base">Individuals Impacted</CardDescription>
              </CardContent>
            </Card>
            <Card className="border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm">
              <CardHeader className="pb-2 text-center sm:text-left">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-purple-400">3,000+</CardTitle>
              </CardHeader>
              <CardContent className="text-center sm:text-left">
                <CardDescription className="text-gray-300 text-sm sm:text-base">Community Members</CardDescription>
              </CardContent>
            </Card>
            <Card className="border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
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
            <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
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
                  We Teach More Than Just Mechanic Coding Skills: As the world rapidly evolves, we envision an inclusive
                  platform where everyone can learn about the exciting advancements in the tech field and the knowledge
                  needed to continue their programming journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
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

            <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
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

      {/* Our Initiatives Section */}
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
              What We Do
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-white">Our Initiatives</h2>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-8 lg:mb-12 h-12 sm:h-14 bg-gray-900/80 border border-purple-500/30">
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-purple-600/50 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="hackathons"
                  className="data-[state=active]:bg-purple-600/50 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Hackathons
                </TabsTrigger>
                <TabsTrigger
                  value="connecting"
                  className="data-[state=active]:bg-purple-600/50 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  Connecting
                </TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Educational Programs</h3>
                        <p className="text-gray-300 mb-6">
                          Our educational initiatives are designed to provide accessible, high-quality learning
                          opportunities for students at all skill levels. We focus on both technical skills and the soft
                          skills needed for career success.
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Online Workshops</h4>
                              <p className="text-gray-300">
                                Hosted by startup founders, big tech engineers, and industry experts
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Weekly Coding Challenges</h4>
                              <p className="text-gray-300">Practical problems to build your skills incrementally</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Tech Blog</h4>
                              <p className="text-gray-300">
                                Weekly posts covering recent tech news and educational content
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="relative rounded-xl overflow-hidden">
                        <AspectRatio ratio={4 / 3}>
                          <Image
                            src="/placeholder.svg?height=400&width=600&text=Workshop+Image"
                            alt="Educational workshop"
                            fill
                            className="object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                          <div className="p-4">
                            <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">Featured Workshop</Badge>
                            <h4 className="text-white font-medium">Introduction to AI Development</h4>
                            <p className="text-white/80 text-sm">Next session: June 15, 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-black/60 px-6 md:px-8 py-4 border-t border-purple-500/20">
                    <Button
                      variant="outline"
                      className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                    >
                      View All Educational Resources
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="hackathons" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Hackathon Programs</h3>
                        <p className="text-gray-300 mb-6">
                          Our hackathons are designed to challenge participants while fostering collaboration and
                          creativity. We focus on real-world problems and provide mentorship throughout the events.
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Soft Skills Emphasis</h4>
                              <p className="text-gray-300">
                                Focus on presentation, communication, and collaboration skills
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Developing Collaboration</h4>
                              <p className="text-gray-300">
                                Team-based projects that foster cooperation and leadership
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Career Readiness</h4>
                              <p className="text-gray-300">
                                Building portfolios and skills that translate directly to the workplace
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="relative rounded-xl overflow-hidden">
                        <AspectRatio ratio={4 / 3}>
                          <Image
                            src="/placeholder.svg?height=400&width=600&text=Hackathon+Image"
                            alt="Hackathon event"
                            fill
                            className="object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                          <div className="p-4">
                            <Badge className="bg-purple-600 hover:bg-purple-700 mb-2">Previous Event</Badge>
                            <h4 className="text-white font-medium">United Hacks V4</h4>
                            <p className="text-white/80 text-sm">400+ participants, 75+ projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-black/60 px-6 md:px-8 py-4 border-t border-purple-500/20">
                    <Button
                      variant="outline"
                      className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                    >
                      View All Hackathons
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="connecting" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="border border-purple-500/30 bg-gradient-to-br from-black/90 to-purple-950/20 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Community Building</h3>
                        <p className="text-gray-300 mb-6">
                          Our community is the heart of Hack United. We provide spaces for innovators to connect, share
                          ideas, and support each other's growth in technology and beyond.
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Discord Community</h4>
                              <p className="text-gray-300">1,500+ like-minded innovators of all skill levels</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Networking Opportunities</h4>
                              <p className="text-gray-300">Connect with industry professionals and potential mentors</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center mt-0.5">
                              <CheckIcon className="w-4 h-4 text-purple-300" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Project Support</h4>
                              <p className="text-gray-300">
                                Programs to help fund or publish projects from our community
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="relative rounded-xl overflow-hidden">
                        <AspectRatio ratio={4 / 3}>
                          <div className="absolute inset-0 bg-[#36393f]">
                            <div className="absolute top-0 left-0 right-0 h-12 bg-[#2f3136] flex items-center px-4">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white mr-2"
                              >
                                <path
                                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.69C13.09 4.46 11.51 4.46 9.95 4.69C9.85 4.48 9.72 4.21 9.6 4C8.09 4.26 6.66 4.71 5.33 5.33C2.94 8.8 2.34 12.2 2.64 15.54C4.37 16.81 6.05 17.59 7.71 18.07C8.05 17.62 8.35 17.14 8.6 16.63C8.01 16.42 7.44 16.15 6.91 15.85C7.03 15.76 7.14 15.67 7.25 15.58C10.4 16.99 13.85 16.99 16.97 15.58C17.08 15.67 17.19 15.76 17.31 15.85C16.77 16.16 16.2 16.42 15.61 16.63C15.86 17.14 16.16 17.62 16.5 18.07C18.16 17.59 19.84 16.81 21.57 15.54C21.92 11.62 20.96 8.25 19.27 5.33ZM8.42 13.36C7.42 13.36 6.6 12.47 6.6 11.37C6.6 10.27 7.4 9.38 8.42 9.38C9.44 9.38 10.25 10.27 10.24 11.37C10.24 12.47 9.44 13.36 8.42 13.36ZM15.7 13.36C14.7 13.36 13.88 12.47 13.88 11.37C13.88 10.27 14.68 9.38 15.7 9.38C16.72 9.38 17.53 10.27 17.52 11.37C17.52 12.47 16.72 13.36 15.7 13.36Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <div>
                                <h3 className="font-bold text-white text-sm">Hack United</h3>
                                <p className="text-xs text-gray-400">1,500+ members online</p>
                              </div>
                            </div>
                            <div className="absolute top-12 bottom-0 left-0 right-0 p-4 overflow-y-auto">
                              <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-medium text-sm">HU</span>
                                  </div>
                                  <div className="bg-[#2f3136] rounded-lg p-3">
                                    <p className="text-sm text-white mb-1">
                                      <span className="font-medium text-purple-400">@hackbot</span> Welcome to Hack
                                      United!
                                    </p>
                                    <p className="text-xs text-gray-300">
                                      Join our upcoming hackathon and connect with fellow developers!
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-medium text-sm">JS</span>
                                  </div>
                                  <div className="bg-[#2f3136] rounded-lg p-3">
                                    <p className="text-sm text-white mb-1">
                                      <span className="font-medium text-green-400">@jane_smith</span> Just signed up for
                                      United Hacks V5!
                                    </p>
                                    <p className="text-xs text-gray-300">
                                      Looking for team members with React experience 👀
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-medium text-sm">TJ</span>
                                  </div>
                                  <div className="bg-[#2f3136] rounded-lg p-3">
                                    <p className="text-sm text-white mb-1">
                                      <span className="font-medium text-blue-400">@tech_john</span> I'm hosting a
                                      workshop on AI next week!
                                    </p>
                                    <p className="text-xs text-gray-300">
                                      No prior experience needed, all are welcome to join
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AspectRatio>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-black/60 px-6 md:px-8 py-4 border-t border-purple-500/20">
                    <Button
                      variant="outline"
                      className="gap-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-purple-200"
                    >
                      Join Our Community
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
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

        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Community?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced developer, there's a place for you in our community. Join us
              for our next hackathon or become a part of our Discord community.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Register for United Hacks V5
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
