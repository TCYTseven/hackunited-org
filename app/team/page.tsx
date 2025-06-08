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
    image: "https://hackunited.org/assets/images/image71.jpg?v=fab6f006",
  },
  {
    name: "Kavin A.",
    position: "Head of Operations",
    image: "https://hackunited.org/assets/images/image36.jpg?v=fab6f006",
  },
  {
    name: "Kishan P.",
    position: "Head of Community",
    image: "https://hackunited.org/assets/images/image84.jpg?v=fab6f006",
  },
]

const executiveTeamRow2: TeamMember[] = [
  {
    name: "Rehan R.",
    position: "Head of Marketing",
    image: "https://hackunited.org/assets/images/image86.jpg?v=fab6f006",
  },
  {
    name: "Sahana P.",
    position: "Head of Outreach",
    image: "https://hackunited.org/assets/images/image85.jpg?v=fab6f006",
  },
  {
    name: "Fiona F.",
    position: "Head of Product",
    image:
      "https://media.discordapp.net/attachments/967241062705930241/1378877681378005002/image0.jpg?ex=683e3369&is=683ce1e9&hm=70fe2ea833080cb7e3de40cc2c979aa6dd3a2b448b8a80765c72bfd3d175956b&=&format=webp&width=683&height=911",
  },
  {
    name: "James Z.",
    position: "Head of Blog",
    image: "https://hackunited.org/assets/images/image87.jpg?v=fab6f006",
  },
]

const officersRow1: TeamMember[] = [
  {
    name: "Rehan R.",
    position: "Head of Marketing",
    image: "https://hackunited.org/assets/images/image86.jpg?v=fab6f006",
  },
  {
    name: "Sahana P.",
    position: "Head of Outreach",
    image: "https://hackunited.org/assets/images/image85.jpg?v=fab6f006",
  },
  {
    name: "Fiona F.",
    position: "Head of Product",
    image:
      "https://media.discordapp.net/attachments/967241062705930241/1378877681378005002/image0.jpg?ex=683e3369&is=683ce1e9&hm=70fe2ea833080cb7e3de40cc2c979aa6dd3a2b448b8a80765c72bfd3d175956b&=&format=webp&width=683&height=911",
  },
  {
    name: "James Z.",
    position: "Head of Blog",
    image: "https://hackunited.org/assets/images/image87.jpg?v=fab6f006",
  },
]

const officersRow2: TeamMember[] = [
  {
    name: "Henry N.",
    position: "Graphics Design",
    image: "https://hackunited.org/assets/images/image91.jpg?v=fab6f006",
  },
  {
    name: "Armaan P.",
    position: "Blog Writer",
    image: "https://hackunited.org/assets/images/image87.jpg?v=fab6f006",
  },
  {
    name: "Akmal. M",
    position: "Outreach Director",
    image: "/images/akmal.png",
  },
  {
    name: "Pranav A.",
    position: "Noob",
    image: "https://hackunited.org/assets/images/image68.jpg?v=fab6f006",
  },
  {
    name: "Ritvik P.",
    position: "Outreach",
    image: "https://hackunited.org/assets/images/image95.jpg?v=fab6f006",
  },
  {
    name: "Yukta P.",
    position: "Outreach",
    image: "https://hackunited.org/assets/images/image93.jpg?v=fab6f006",
  },
]

// Previous Volunteers - 11 rows total, last row has 2 people
// Using the actual profile images provided in order from left to right, row by row
const previousVolunteers: TeamMember[][] = [
  // Row 1
  [
    { name: "Shruti G.", position: "Marketing", image: "https://hackunited.org/assets/images/image49.jpg?v=fab6f006" },
    {
      name: "Josh M.",
      position: "Article Writer",
      image: "https://hackunited.org/assets/images/image50.jpg?v=fab6f006",
    },
    {
      name: "Yash M.",
      position: "Outreach Associate",
      image: "https://hackunited.org/assets/images/image51.jpg?v=fab6f006",
    },
    {
      name: "Dev C.",
      position: "Partnership Manager",
      image: "https://hackunited.org/assets/images/image52.jpg?v=fab6f006",
    },
    {
      name: "Youssef E.",
      position: "Technical Support",
      image: "https://hackunited.org/assets/images/image19.jpg?v=fab6f006",
    },
  ],
  // Row 2
  [
    {
      name: "Jen H.",
      position: "Community Manager",
      image: "https://hackunited.org/assets/images/image37.jpg?v=fab6f006",
    },
    {
      name: "Joel. R",
      position: "Community Manager",
      image: "https://hackunited.org/assets/images/image42.jpg?v=fab6f006",
    },
    {
      name: "Yosuf A.",
      position: "Community Team",
      image: "https://hackunited.org/assets/images/image44.jpg?v=fab6f006",
    },
    {
      name: "Hadi M.",
      position: "Full Stack Developer",
      image: "https://hackunited.org/assets/images/image54.jpg?v=fab6f006",
    },
    {
      name: "Dheeraj T",
      position: "Education Team",
      image: "https://hackunited.org/assets/images/image55.jpg?v=fab6f006",
    },
  ],
  // Row 3
  [
    {
      name: "Jeffery L.",
      position: "Chief Finance Officer",
      image: "https://hackunited.org/assets/images/image59.jpg?v=fab6f006",
    },
    {
      name: "Shaan B.",
      position: "Discord Bot Developer",
      image: "https://hackunited.org/assets/images/image60.jpg?v=fab6f006",
    },
    {
      name: "Narain S.",
      position: "Course Instructor",
      image: "https://hackunited.org/assets/images/image39.jpg?v=fab6f006",
    },
    {
      name: "Danish A.",
      position: "Graphic Designer",
      image: "https://hackunited.org/assets/images/image62.jpg?v=fab6f006",
    },
    {
      name: "Sudar A.",
      position: "Graphic Designer",
      image: "https://hackunited.org/assets/images/image63.jpg?v=fab6f006",
    },
  ],
  // Row 4
  [
    {
      name: "Anora D.",
      position: "Course Instructor",
      image: "https://hackunited.org/assets/images/image17.jpg?v=fab6f006",
    },
    {
      name: "Kevin A.",
      position: "Course Instructor",
      image: "https://hackunited.org/assets/images/image22.jpg?v=fab6f006",
    },
    {
      name: "Prince M.",
      position: "Head Marketing",
      image: "https://hackunited.org/assets/images/image28.jpg?v=fab6f006",
    },
    {
      name: "Mylthosa",
      position: "Talent Acquisition",
      image: "https://hackunited.org/assets/images/image38.jpg?v=fab6f006",
    },
    {
      name: "Harish A.",
      position: "Finance Manager",
      image: "https://hackunited.org/assets/images/image40.jpg?v=fab6f006",
    },
  ],
  // Row 5
  [
    {
      name: "Aidan D.",
      position: "Talent Acquisition",
      image: "https://hackunited.org/assets/images/image29.jpg?v=fab6f006",
    },
    {
      name: "Ru Xue J.",
      position: "Senior Content Writer",
      image: "https://hackunited.org/assets/images/image30.jpg?v=fab6f006",
    },
    {
      name: "Abhinav S.",
      position: "Finance Manager",
      image: "https://hackunited.org/assets/images/image33.jpg?v=fab6f006",
    },
    {
      name: "Oluwatimi Iehin A.",
      position: "Partnership Manager",
      image: "https://hackunited.org/assets/images/image43.jpg?v=fab6f006",
    },
    {
      name: "Alaap J.",
      position: "Project Coordinator",
      image: "https://hackunited.org/assets/images/image53.jpg?v=fab6f006",
    },
  ],
  // Row 6
  [
    {
      name: "Ishan K.",
      position: "Community Manager",
      image: "https://hackunited.org/assets/images/image58.jpg?v=fab6f006",
    },
    {
      name: "Shrey V.",
      position: "Event Operations",
      image: "https://hackunited.org/assets/images/image64.jpg?v=fab6f006",
    },
    {
      name: "Nicole I.",
      position: "Technical Associate",
      image: "https://hackunited.org/assets/images/image65.png?v=fab6f006",
    },
    {
      name: "Ameer.",
      position: "Head of Engineering",
      image: "https://hackunited.org/assets/images/image66.png?v=fab6f006",
    },
    {
      name: "Mason Z.",
      position: "Technical Support",
      image: "https://hackunited.org/assets/images/image69.jpg?v=fab6f006",
    },
  ],
  // Row 7
  [
    {
      name: "Mau T.",
      position: "Event Operations",
      image: "https://hackunited.org/assets/images/image14.jpg?v=fab6f006",
    },
    {
      name: "Quunh T.",
      position: "Event Operations",
      image: "https://hackunited.org/assets/images/image23.jpg?v=fab6f006",
    },
    {
      name: "Omkar P.",
      position: "Community Planner",
      image: "https://hackunited.org/assets/images/image41.jpg?v=fab6f006",
    },
    {
      name: "Shrey S.",
      position: "Finance Manager",
      image: "https://hackunited.org/assets/images/image46.jpg?v=fab6f006",
    },
    {
      name: "Easwar G.",
      position: "Partnership Manager",
      image: "https://hackunited.org/assets/images/image48.jpg?v=fab6f006",
    },
  ],
  // Row 8
  [
    {
      name: "Adi K.",
      position: "Outreach Manager",
      image: "https://hackunited.org/assets/images/image24.jpg?v=fab6f006",
    },
    {
      name: "Aadi G.",
      position: "Social Media Manager",
      image: "https://hackunited.org/assets/images/image67.jpg?v=fab6f006",
    },
    {
      name: "Noah A.",
      position: "Article Writer",
      image: "https://hackunited.org/assets/images/image81.jpg?v=fab6f006",
    },
    {
      name: "Isaac W.",
      position: "Web Developer",
      image: "https://hackunited.org/assets/images/image82.jpg?v=fab6f006",
    },
    {
      name: "Wahib B.",
      position: "Web Developer",
      image: "https://hackunited.org/assets/images/image83.jpg?v=fab6f006",
    },
  ],
  // Row 9
  [
    {
      name: "Niko P.",
      position: "Community Team",
      image: "https://hackunited.org/assets/images/image32.jpg?v=fab6f006",
    },
    {
      name: "Dino B.",
      position: "Web Developer",
      image: "https://hackunited.org/assets/images/image34.jpg?v=fab6f006",
    },
    {
      name: "Rushil C.",
      position: "Social Media Manager",
      image: "https://hackunited.org/assets/images/image47.jpg?v=fab6f006",
    },
    {
      name: "Muhammad D.",
      position: "Technical Team",
      image: "https://hackunited.org/assets/images/image56.jpg?v=fab6f006",
    },
    {
      name: "Murari A.",
      position: "Social Media Manager",
      image: "https://hackunited.org/assets/images/image75.jpg?v=fab6f006",
    },
  ],
  // Row 10
  [
    {
      name: "Akishai S.",
      position: "Outreach Associate",
      image: "https://hackunited.org/assets/images/image73.jpg?v=fab6f006",
    },
    {
      name: "Indrajeet S.",
      position: "Outreach Associate",
      image: "https://hackunited.org/assets/images/image21.jpg?v=fab6f006",
    },
    { name: "Alex P.", position: "Advisor", image: "https://hackunited.org/assets/images/image25.png?v=fab6f006" },
    {
      name: "Mikul R.",
      position: "Article Writer",
      image: "https://hackunited.org/assets/images/image26.jpg?v=fab6f006",
    },
    {
      name: "Sohil C.",
      position: "Outreach Associate",
      image: "https://hackunited.org/assets/images/image57.jpg?v=fab6f006",
    },
  ],
  // Row 11 - Last row with 2 people
  [
    {
      name: "Arnav S.",
      position: "Outreach Manager",
      image: "https://hackunited.org/assets/images/image27.jpg?v=fab6f006",
    },
    {
      name: "Taha Y.",
      position: "Graphic Designer",
      image: "https://hackunited.org/assets/images/image35.jpg?v=fab6f006",
    },
  ],
  // Row 12 - Recently moved from active team
  [
    {
      name: "Ankit B.",
      position: "Web Developer",
      image: "https://hackunited.org/assets/images/image88.jpg?v=fab6f006",
    },
    {
      name: "Arnnav K.",
      position: "Technical Team",
      image: "https://hackunited.org/assets/images/image89.jpg?v=fab6f006",
    },
    {
      name: "Som S.",
      position: "Web Developer",
      image: "https://hackunited.org/assets/images/image90.jpg?v=fab6f006",
    },
    {
      name: "Tadas V.",
      position: "Community Planner",
      image: "https://hackunited.org/assets/images/image92.jpg?v=fab6f006",
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
