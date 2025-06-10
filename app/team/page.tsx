import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] })

interface TeamMember {
  name: string
  position: string
  image: string
}

const executiveTeam: TeamMember[] = [
  {
    name: "Tejas C.",
    position: "Founder",
    image: "/images/team-images/TejasChakrapaniPFP.jpeg",
  },
  {
    name: "Kavin A.",
    position: "Head of Operations",
    image: "/images/team-images/kavina.jpg",
  },
  {
    name: "Kishan P.",
    position: "Head of Community",
    image: "/images/team-images/exe.jpg",
  },
]

const executiveTeamRow2: TeamMember[] = [
  {
    name: "Rehan R.",
    position: "Head of Marketing",
    image: "/images/team-images/rehan.jpg",
  },
  {
    name: "Sahana P.",
    position: "Head of Outreach",
    image: "/images/team-images/sahana.jpg",
  },
  {
    name: "Fiona F.",
    position: "Head of Product",
    image: "/images/fionaa.jpg",
  },
  {
    name: "Pranitha R.",
    position: "Head of Blog",
    image: "/images/team-images/pranitha.png",
  },
]

const officersRow1: TeamMember[] = [
  {
    name: "Rehan R.",
    position: "Head of Marketing",
    image: "/images/team-images/rehan.jpg",
  },
  {
    name: "Sahana P.",
    position: "Head of Outreach",
    image: "/images/team-images/sahana.jpg",
  },
  {
    name: "Fiona F.",
    position: "Head of Product",
    image: "/images/fionaa.jpg",
  },
  {
    name: "Pranitha R.",
    position: "Head of Blog",
    image: "/images/team-images/pranitha.png",
  },
]

const officersRow2: TeamMember[] = [
  {
    name: "Henry N.",
    position: "Graphics Design",
    image: "/images/team-images/henry.jpg",
  },
  {
    name: "Armaan P.",
    position: "Blog Writer",
    image: "https://ui-avatars.com/api/?name=A&background=E11D48&color=fff&size=128",
  },
  {
    name: "Akmal. M",
    position: "Outreach Director",
    image: "/images/akmal.png",
  },
  {
    name: "Pranav A.",
    position: "Chat Mod",
    image: "/images/team-images/PranavA.jpeg",
  },
  {
    name: "Ritvik P.",
    position: "Outreach",
    image: "/images/team-images/ritvik.jpg",
  },
  {
    name: "Yukta P.",
    position: "Outreach",
    image: "/images/team-images/yukta.jpg",
  },
]

// Previous Volunteers - 11 rows total, last row has 2 people
// Using colored avatars with initials for previous volunteers
const previousVolunteers: TeamMember[][] = [
  // Row 1
  [
    { name: "Shruti G.", position: "Marketing", image: "https://ui-avatars.com/api/?name=S&background=8B5CF6&color=fff&size=128" },
    {
      name: "Josh M.",
      position: "Article Writer",
      image: "https://ui-avatars.com/api/?name=J&background=10B981&color=fff&size=128",
    },
    {
      name: "Yash M.",
      position: "Outreach Associate",
      image: "https://ui-avatars.com/api/?name=Y&background=F59E0B&color=fff&size=128",
    },
    {
      name: "Dev C.",
      position: "Partnership Manager",
      image: "https://ui-avatars.com/api/?name=D&background=EF4444&color=fff&size=128",
    },
    {
      name: "Youssef E.",
      position: "Technical Support",
      image: "https://ui-avatars.com/api/?name=Y&background=3B82F6&color=fff&size=128",
    },
  ],
  // Row 2
  [
    {
      name: "Jen H.",
      position: "Community Manager",
      image: "https://ui-avatars.com/api/?name=J&background=EC4899&color=fff&size=128",
    },
    {
      name: "Joel. R",
      position: "Community Manager",
      image: "https://ui-avatars.com/api/?name=J&background=06B6D4&color=fff&size=128",
    },
    {
      name: "Yosuf A.",
      position: "Community Team",
      image: "https://ui-avatars.com/api/?name=Y&background=84CC16&color=fff&size=128",
    },
    {
      name: "Hadi M.",
      position: "Full Stack Developer",
      image: "https://ui-avatars.com/api/?name=H&background=A855F7&color=fff&size=128",
    },
    {
      name: "Dheeraj T",
      position: "Education Team",
      image: "https://ui-avatars.com/api/?name=D&background=F97316&color=fff&size=128",
    },
  ],
  // Row 3
  [
    {
      name: "Jeffery L.",
      position: "Chief Finance Officer",
      image: "https://ui-avatars.com/api/?name=J&background=DC2626&color=fff&size=128",
    },
    {
      name: "Shaan B.",
      position: "Discord Bot Developer",
      image: "https://ui-avatars.com/api/?name=S&background=059669&color=fff&size=128",
    },
    {
      name: "Narain S.",
      position: "Course Instructor",
      image: "https://ui-avatars.com/api/?name=N&background=7C3AED&color=fff&size=128",
    },
    {
      name: "Danish A.",
      position: "Graphic Designer",
      image: "https://ui-avatars.com/api/?name=D&background=DB2777&color=fff&size=128",
    },
    {
      name: "Sudar A.",
      position: "Graphic Designer",
      image: "https://ui-avatars.com/api/?name=S&background=0891B2&color=fff&size=128",
    },
  ],
  // Row 4
  [
    {
      name: "Anora D.",
      position: "Course Instructor",
      image: "https://ui-avatars.com/api/?name=A&background=65A30D&color=fff&size=128",
    },
    {
      name: "Kevin A.",
      position: "Course Instructor",
      image: "https://ui-avatars.com/api/?name=K&background=D97706&color=fff&size=128",
    },
    {
      name: "Prince M.",
      position: "Head Marketing",
      image: "https://ui-avatars.com/api/?name=P&background=9333EA&color=fff&size=128",
    },
    {
      name: "Mylthosa",
      position: "Talent Acquisition",
      image: "https://ui-avatars.com/api/?name=M&background=BE185D&color=fff&size=128",
    },
    {
      name: "Harish A.",
      position: "Finance Manager",
      image: "https://ui-avatars.com/api/?name=H&background=0284C7&color=fff&size=128",
    },
  ],
  // Row 5
  [
    {
      name: "Aidan D.",
      position: "Talent Acquisition",
      image: "https://ui-avatars.com/api/?name=A&background=7C2D12&color=fff&size=128",
    },
    {
      name: "Ru Xue J.",
      position: "Senior Content Writer",
      image: "https://ui-avatars.com/api/?name=R&background=B91C1C&color=fff&size=128",
    },
    {
      name: "Abhinav S.",
      position: "Finance Manager",
      image: "https://ui-avatars.com/api/?name=A&background=047857&color=fff&size=128",
    },
    {
      name: "Oluwatimi Iehin A.",
      position: "Partnership Manager",
      image: "https://ui-avatars.com/api/?name=O&background=6D28D9&color=fff&size=128",
    },
    {
      name: "Alaap J.",
      position: "Project Coordinator",
      image: "https://ui-avatars.com/api/?name=A&background=C2410C&color=fff&size=128",
    },
  ],
  // Row 6
  [
    {
      name: "Ishan K.",
      position: "Community Manager",
      image: "https://ui-avatars.com/api/?name=I&background=1E40AF&color=fff&size=128",
    },
    {
      name: "Shrey V.",
      position: "Event Operations",
      image: "https://ui-avatars.com/api/?name=S&background=991B1B&color=fff&size=128",
    },
    {
      name: "Nicole I.",
      position: "Technical Associate",
      image: "https://ui-avatars.com/api/?name=N&background=059669&color=fff&size=128",
    },
    {
      name: "Ameer.",
      position: "Head of Engineering",
      image: "https://ui-avatars.com/api/?name=A&background=5B21B6&color=fff&size=128",
    },
    {
      name: "Mason Z.",
      position: "Technical Support",
      image: "https://ui-avatars.com/api/?name=M&background=A21CAF&color=fff&size=128",
    },
  ],
  // Row 7
  [
    {
      name: "Mau T.",
      position: "Event Operations",
      image: "https://ui-avatars.com/api/?name=M&background=0F766E&color=fff&size=128",
    },
    {
      name: "Quunh T.",
      position: "Event Operations",
      image: "https://ui-avatars.com/api/?name=Q&background=7C3AED&color=fff&size=128",
    },
    {
      name: "Omkar P.",
      position: "Community Planner",
      image: "https://ui-avatars.com/api/?name=O&background=BE123C&color=fff&size=128",
    },
    {
      name: "Shrey S.",
      position: "Finance Manager",
      image: "https://ui-avatars.com/api/?name=S&background=0369A1&color=fff&size=128",
    },
    {
      name: "Easwar G.",
      position: "Partnership Manager",
      image: "https://ui-avatars.com/api/?name=E&background=4338CA&color=fff&size=128",
    },
  ],
  // Row 8
  [
    {
      name: "Adi K.",
      position: "Outreach Manager",
      image: "https://ui-avatars.com/api/?name=A&background=B45309&color=fff&size=128",
    },
    {
      name: "Aadi G.",
      position: "Social Media Manager",
      image: "https://ui-avatars.com/api/?name=A&background=86198F&color=fff&size=128",
    },
    {
      name: "Noah A.",
      position: "Article Writer",
      image: "https://ui-avatars.com/api/?name=N&background=0D9488&color=fff&size=128",
    },
    {
      name: "Isaac W.",
      position: "Web Developer",
      image: "https://ui-avatars.com/api/?name=I&background=7E22CE&color=fff&size=128",
    },
    {
      name: "Wahib B.",
      position: "Web Developer",
      image: "https://ui-avatars.com/api/?name=W&background=BE185D&color=fff&size=128",
    },
  ],
  // Row 9
  [
    {
      name: "Niko P.",
      position: "Community Team",
      image: "https://ui-avatars.com/api/?name=N&background=0891B2&color=fff&size=128",
    },
    {
      name: "Dino B.",
      position: "Web Developer",
      image: "https://ui-avatars.com/api/?name=D&background=9333EA&color=fff&size=128",
    },
    {
      name: "Rushil C.",
      position: "Social Media Manager",
      image: "https://ui-avatars.com/api/?name=R&background=DC2626&color=fff&size=128",
    },
    {
      name: "Muhammad D.",
      position: "Technical Team",
      image: "https://ui-avatars.com/api/?name=M&background=059669&color=fff&size=128",
    },
    {
      name: "Murari A.",
      position: "Social Media Manager",
      image: "https://ui-avatars.com/api/?name=M&background=7C3AED&color=fff&size=128",
    },
  ],
  // Row 10
  [
    {
      name: "Akishai S.",
      position: "Outreach Associate",
      image: "https://ui-avatars.com/api/?name=A&background=DB2777&color=fff&size=128",
    },
    {
      name: "Indrajeet S.",
      position: "Outreach Associate",
      image: "https://ui-avatars.com/api/?name=I&background=0284C7&color=fff&size=128",
    },
    { name: "Alex P.", position: "Advisor", image: "https://ui-avatars.com/api/?name=A&background=65A30D&color=fff&size=128" },
    {
      name: "Mikul R.",
      position: "Article Writer",
      image: "https://ui-avatars.com/api/?name=M&background=D97706&color=fff&size=128",
    },
    {
      name: "Sohil C.",
      position: "Outreach Associate",
      image: "https://ui-avatars.com/api/?name=S&background=BE185D&color=fff&size=128",
    },
  ],
  // Row 11 - Last row with 2 people
  [
    {
      name: "Arnav S.",
      position: "Outreach Manager",
      image: "https://ui-avatars.com/api/?name=A&background=0891B2&color=fff&size=128",
    },
    {
      name: "Taha Y.",
      position: "Graphic Designer",
      image: "https://ui-avatars.com/api/?name=T&background=9333EA&color=fff&size=128",
    },
  ],
  // Row 12 - Recently moved from active team
  [
    {
      name: "Ankit B.",
      position: "Web Developer",
      image: "https://ui-avatars.com/api/?name=A&background=DC2626&color=fff&size=128",
    },
    {
      name: "Arnnav K.",
      position: "Technical Team",
      image: "https://ui-avatars.com/api/?name=A&background=059669&color=fff&size=128",
    },
    {
      name: "Som S.",
      position: "Web Developer",
      image: "https://ui-avatars.com/api/?name=S&background=7C3AED&color=fff&size=128",
    },
    {
      name: "Tadas V.",
      position: "Community Planner",
      image: "https://ui-avatars.com/api/?name=T&background=DB2777&color=fff&size=128",
    },
  ],
]

function TeamMemberCard({ member, size = "small" }: { member: TeamMember; size?: "small" | "large" | "compact" | "card" }) {
  const imageSize = size === "large" ? "w-32 h-32" : size === "compact" ? "w-12 h-12" : size === "card" ? "w-10 h-10" : "w-20 h-20"
  const textSize = size === "large" ? "text-lg" : size === "compact" ? "text-xs" : size === "card" ? "text-sm" : "text-sm"
  const positionSize = size === "large" ? "text-sm" : size === "compact" ? "text-[10px]" : size === "card" ? "text-xs" : "text-xs"
  const marginBottom = size === "compact" ? "mb-1" : size === "card" ? "mb-2" : "mb-3"
  const borderWidth = size === "compact" ? "border-2" : size === "card" ? "border-2" : "border-4"

  if (size === "card") {
    return (
      <div className={`bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-gray-800/50 ${montserrat.className}`}>
        <div className="flex items-center gap-3">
          <div className={`relative ${imageSize} flex-shrink-0`}>
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className={`rounded-full object-cover ${borderWidth} border-purple-600`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-white ${textSize} mb-0.5 truncate`}>{member.name}</h3>
            <p className={`text-purple-400 ${positionSize} font-medium truncate`}>{member.position}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center text-center ${montserrat.className}`}>
      <div className={`relative ${imageSize} ${marginBottom}`}>
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className={`rounded-full object-cover ${borderWidth} border-purple-600 transition-transform duration-300 hover:scale-110`}
        />
      </div>
      <h3 className={`font-bold text-white ${textSize} mb-0.5`}>{member.name}</h3>
      <p className={`text-purple-400 ${positionSize} font-bold`}>{member.position}</p>
    </div>
  )
}

export default function TeamPage() {
  return (
    <main className={`flex flex-col items-center bg-black text-white min-h-screen ${montserrat.className}`}>
      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-4 ${montserrat.className}`}>Meet The Team</h1>
        </div>

        {/* Executive Team */}
        <div className="mb-16">
          {/* Core Executives - Dark Background with White Glow */}
          <div className="bg-gray-900/50 rounded-lg p-8 mb-12 border-2 border-purple-500/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {executiveTeam.map((member, index) => (
                <TeamMemberCard key={index} member={member} size="large" />
              ))}
            </div>
          </div>

          {/* Team Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center mb-12">
            {officersRow1.map((member, index) => (
              <TeamMemberCard key={index} member={member} size="large" />
            ))}
          </div>

          {/* Team Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 justify-items-center">
            {officersRow2.map((member, index) => (
              <TeamMemberCard key={index} member={member} size="large" />
            ))}
          </div>
        </div>

        {/* Purple Divider - Thicker, Shorter, Darker */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-purple-800"></div>
        </div>

        {/* Previous Volunteers */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Previous Volunteers</h2>
            <p className="text-gray-400 text-sm">Thank you to all who have contributed to our journey</p>
          </div>

          {/* All Previous Volunteers in Card Format */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {previousVolunteers.flat().map((member, index) => (
              <TeamMemberCard key={index} member={member} size="card" />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white italic text-lg font-bold">
            Want to join the team? Read{" "}
            <Link href="/apply" className="text-purple-400 hover:text-purple-300 underline">
              apply
            </Link>{" "}
            to become a part of the team!
          </p>
        </div>
      </section>
    </main>
  )
}
