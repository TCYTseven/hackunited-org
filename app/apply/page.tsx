"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Mail, 
  Trophy, 
  Heart, 
  Star, 
  Code, 
  Megaphone, 
  Briefcase,
  MessageSquare,
  FileText,
  ExternalLink,
  X
} from "lucide-react"

export default function ApplyPage() {
  const [selectedPosition, setSelectedPosition] = useState<any>(null)

  const benefits = [
    "Service Hours*", 
    "Custom Email (yourname@hackunited.org)", 
    "Recognition & Certificates", 
    "Team Mentorship", 
    "Free Swag**"
  ]

  const positionDetails = {
    "Social Media Manager": {
      department: "Growth",
      color: "text-pink-400",
      responsibilities: [
        "Frequently post on social media platforms including X/Twitter, Instagram, Threads",
        "Work with our Graphic Designers to post high quality and reputable content",
        "Grow social media followers by being active on your assigned platform(s)",
        "Develop and maintain a consistent brand voice across all platforms",
        "Monitor engagement metrics and adapt strategies accordingly",
      ],
      requirements: [
        "Proven experience with content creation on social media platforms",
        "Understanding of social media trends and best practices",
        "Strong communication and writing skills",
        "Ability to work independently and meet deadlines",
      ],
    },
    "Short-Form Creator": {
      department: "Growth",
      color: "text-pink-400",
      responsibilities: [
        "Develop interesting and compelling videos for Instagram Reels, TikTok, and Youtube Shorts",
        "Stay up to date with trends to bring Hack United maximum attention",
        "Create engaging video content that showcases our events and community",
        "Collaborate with team to align content with marketing goals",
      ],
      requirements: [
        "Experience with video editing software",
        "Understanding of short-form content trends",
        "Creative mindset and ability to think outside the box",
        "Bonus: Experience with editing software for reels",
      ],
    },
    "Growth Intern": {
      department: "Growth",
      color: "text-pink-400",
      responsibilities: [
        "Utilize provided advertising methods to promote our server effectively",
        "Engage with potential members by actively joining various servers",
        "Execute multiple daily posts in relevant server promotion channels",
        "Establish promotional partnerships with other STEM servers",
      ],
      requirements: [
        "Active Discord user with understanding of server dynamics",
        "Strong communication and networking skills",
        "Ability to represent Hack United professionally",
        "Experience with community building preferred",
      ],
    },
    "Talent Acquisition Manager": {
      department: "Human Resources",
      color: "text-blue-400",
      responsibilities: [
        "Create and implement recruitment strategies",
        "Develop job descriptions and postings",
        "Screen resumes and conduct interviews",
        "Manage the hiring process from start to finish",
        "Analyze recruitment metrics to evaluate strategy effectiveness",
      ],
      requirements: [
        "Experience with recruitment or HR processes",
        "Strong interpersonal and communication skills",
        "Ability to assess candidate qualifications",
        "Organizational skills and attention to detail",
      ],
    },
    "Administrative Coordinator": {
      department: "Human Resources",
      color: "text-blue-400",
      responsibilities: [
        "Develop and implement outreach strategies to reach new audiences",
        "Contact software engineers/entrepreneurs for workshops and events",
        "Contact other organizations to establish partnerships",
        "Reach out to media publications to showcase Hack United progress",
        "Contact companies for sponsorship opportunities",
      ],
      requirements: [
        "Excellent written and verbal communication skills",
        "Experience with professional networking",
        "Ability to represent Hack United professionally",
        "Strong follow-up and relationship management skills",
      ],
    },
    "Outreach Manager": {
      department: "Strategy",
      color: "text-green-400",
      responsibilities: [
        "Develop strategies to increase engagement on Discord and other platforms",
        "Monitor and moderate community discussions for positive environment",
        "Keep channels like daily polls and coding challenges updated frequently",
        "Collaborate with other teams to organize community events",
        "Respond to user concerns in timely and professional manner",
      ],
      requirements: [
        "Experience with community management or moderation",
        "Strong interpersonal skills and patience",
        "Ability to handle conflicts and difficult situations",
        "Understanding of Discord and community platforms",
      ],
    },
    "Project Manager": {
      department: "Strategy",
      color: "text-green-400",
      responsibilities: [
        "Conduct research on assigned topics and analyze major news articles",
        "Write clear, concise, and informative articles (1-2 pages)",
        "Target content towards teenage audience",
        "Publish articles on our blog.hackunited.org page",
        "Collaborate with team on content strategy and topics",
      ],
      requirements: [
        "Strong writing and research skills",
        "Ability to write for teenage audience",
        "Understanding of tech and STEM topics",
        "AI tools allowed but content should appear human-written",
      ],
    },
    "Article Writer": {
      department: "Community & Content",
      color: "text-purple-400",
      responsibilities: [
        "Help maintain hackunited.org and hackathon websites",
        "Code embeds for pop-ups, navigation bars, and interactive elements",
        "Implement new features and fix bugs",
        "Collaborate with design team on website improvements",
        "Ensure website performance and responsiveness",
      ],
      requirements: [
        "Required: HTML, CSS, JavaScript",
        "Bonus: Next.js, React.js, Tailwind CSS",
        "Bonus: MongoDB, Firebase, Node.js",
        "Experience with version control (Git) preferred",
      ],
    },
    "Community Manager": {
      department: "Community & Content",
      color: "text-purple-400",
      responsibilities: [
        "Design and develop innovative user-friendly bot commands",
        "Monitor server activities and address bot issues proactively",
        "Optimize bot performance for seamless user experience",
        "Implement new features based on community needs",
        "Maintain bot uptime and troubleshoot problems",
      ],
      requirements: [
        "Recommended: discord.js and/or discord.py",
        "Understanding of Discord API and bot development",
        "Problem-solving skills for debugging",
        "Ability to write clean, maintainable code",
      ],
    },
  }

  const departments = [
    {
      title: "Growth",
      icon: <Megaphone className="w-5 h-5" />,
      color: "from-pink-500 to-rose-600",
      positions: [
        "Social Media Manager",
        "Short-Form Creator",
        "Growth Intern",
      ],
    },
    {
      title: "Human Resources",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-600",
      positions: ["Talent Acquisition Manager", "Administrative Coordinator"],
    },
    {
      title: "Strategy",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600",
      positions: ["Outreach Manager", "Project Manager"],
    },
    {
      title: "Community & Content",
      icon: <Code className="w-5 h-5" />,
      color: "from-purple-500 to-violet-600",
      positions: ["Article Writer", "Community Manager"],
    },
  ]

  const openPositionModal = (positionName: string) => {
    setSelectedPosition({
      name: positionName,
      ...positionDetails[positionName as keyof typeof positionDetails]
    })
  }

  const closeModal = () => {
    setSelectedPosition(null)
  }

  const scrollToApplication = () => {
    document.getElementById('application-section')?.scrollIntoView({ behavior: 'smooth' })
    closeModal()
  }

  return (
    <main className="bg-black text-white">
      {/* Mobile-Responsive Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 -mt-20 pt-24 sm:pt-28 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.5px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-600/8 rounded-full blur-3xl"></div>
        
        <div className="container relative px-4 mx-auto text-center">
          <Badge className="bg-purple-600/10 text-purple-300/80 border-purple-500/20 mb-4 text-xs sm:text-sm">
            Join Our Mission
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Join The{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            We are always looking for new additions to help run Hack United! Read below for requirements, benefits, and application info.
          </p>

          <div className="flex justify-center">
            <a 
              href="mailto:jobs@hackunited.org"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Mobile-Responsive Benefits & Positions */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Benefits Column - Mobile First */}
            <div className="lg:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Benefits</h2>
              <Card className="bg-gray-900/60 border-purple-500/20">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-300 mb-4">While positions are unpaid, we provide valuable benefits:</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-700 text-xs text-gray-400 space-y-1">
                    <p>*Hours may not be valid for all awards - check with team</p>
                    <p>**Swag not guaranteed for new members</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Open Positions - Mobile Responsive Grid */}
            <div className="lg:col-span-3">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Open Positions</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {departments.map((department) => 
                  department.positions.map((position, posIndex) => (
                    <button
                      key={`${department.title}-${posIndex}`}
                      onClick={() => openPositionModal(position)}
                      className="text-left p-3 sm:p-4 bg-gray-900/60 border border-purple-500/20 rounded-lg hover:border-purple-400/40 hover:bg-gray-800/60 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={`p-1.5 sm:p-2 bg-gradient-to-r ${department.color} rounded-lg text-white flex-shrink-0`}>
                          {department.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-white text-xs sm:text-sm mb-1 group-hover:text-purple-300 transition-colors duration-200 leading-tight">
                            {position}
                          </h3>
                          <Badge
                            className={`${
                              department.title === "Growth"
                                ? "text-yellow-400"
                                : department.title === "Human Resources"
                                ? "text-blue-400"
                                : department.title === "Strategy"
                                ? "text-green-400"
                                : "text-purple-400"
                            } bg-gray-800 text-xs`}
                          >
                            {department.title.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile-Responsive How to Apply Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">How to Apply</h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                Ready to join our team? Follow these simple steps to submit your application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Application Process */}
              <Card className="bg-gray-900/60 border-purple-500/20" id="application-section">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Application Process</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-medium text-white text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Email jobs@hackunited.org</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Include all required information listed on the right</p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-medium text-white text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Review Process</p>
                        <p className="text-gray-400 text-xs sm:text-sm">We review applications regularly and respond promptly</p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                      <div>
                        <p className="font-medium text-white text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Welcome to the Team!</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Start contributing to Hack United's mission</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Requirements */}
              <Card className="bg-gray-900/60 border-purple-500/20">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Include in Your Email</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-300">
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Full Name & Email Address</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Age & Location (Country & State)</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Position(s) you're applying for</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Why you're interested in joining</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Relevant skills & experience</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Time commitment available</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Resume & LinkedIn (optional)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Bottom CTA - Mobile Responsive */}
            <div className="text-center">
              <a 
                href="mailto:jobs@hackunited.org?subject=Application for [Position Name]&body=Hi! I'm interested in applying for [position]. Here are my details:%0D%0A%0D%0AFull Name: %0D%0AEmail: %0D%0AAge: %0D%0ALocation: %0D%0A%0D%0APosition(s) applying for: %0D%0A%0D%0AWhy I'm interested: %0D%0A%0D%0ARelevant skills/experience: %0D%0A%0D%0ATime commitment: %0D%0A%0D%0AThanks!"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Application Email
              </a>
              <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
                Have questions? Email us at{" "}
                <a href="mailto:jobs@hackunited.org" className="text-purple-400 hover:text-purple-300">
                  jobs@hackunited.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Responsive Position Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-gray-900 border border-purple-500/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header - Mobile Responsive */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <Badge className={`${selectedPosition.color} bg-gray-800 text-xs`}>
                  {selectedPosition.department.toUpperCase()}
                </Badge>
                <h3 className="text-lg sm:text-xl font-bold text-white truncate">{selectedPosition.name}</h3>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-2">
                <button
                  onClick={scrollToApplication}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300"
                >
                  Apply
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 flex-shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Modal Content - Mobile Responsive */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Responsibilities */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Responsibilities</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {selectedPosition.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Requirements</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {selectedPosition.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Benefits</h4>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">As a volunteer at Hack United, you will get numerous benefits:</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Official Volunteering Hours</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Opportunity for President's Volunteering Service Award</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Gain new skills and leadership experience</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Custom email (yourname@hackunited.org)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Recognition and networking opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer - Mobile Responsive */}
            <div className="border-t border-gray-700 p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                If you have any questions, please contact us at{" "}
                <a href="mailto:jobs@hackunited.org" className="text-purple-400 hover:text-purple-300">
                  jobs@hackunited.org
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={scrollToApplication}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex-1 text-sm sm:text-base"
                >
                  Apply for this Position
                </button>
                <button
                  onClick={closeModal}
                  className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
