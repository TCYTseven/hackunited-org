"use client";
import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] })

interface TeamMember {
  name: string
  position: string
  image: string
  blurb?: string
}

const executiveTeam: TeamMember[] = [
  {
    name: "Tejas C.",
    position: "Founder",
    image: "/images/team-images/TejasChakrapaniPFP.png",
    blurb: "Tejas started Hack United to share his lifelong passion for coding and tech with other students around the world. For him, Hack United is more than just events, it's a way to help students explore, create, and connect through technology.",
  },
  {
    name: "Pranav A.",
    position: "Chief Operations Officer",
    image: "/images/team-images/PranavA.png",
    blurb: "As Chief Operating Officer, Pranav ensures Hack United’s events run seamlessly from start to finish. With a sharp eye for logistics, scheduling, and process optimization, he’s the backbone of the organization’s operational success. Pranav thrives on turning ambitious plans into smooth, impactful experiences for participants worldwide.",
  },
  {
    name: "Kavin A.",
    position: "Chief Product Officer",
    image: "/images/team-images/kavina.png",
    blurb: "As Chief Strategy Officer, Kavin shapes Hack United’s vision, partnerships, and long-term growth. Blending strategic thinking with hands-on execution, he focuses on building relationships, securing sponsorships, and guiding the organization toward greater impact. His work ensures Hack United not only grows but thrives in its mission to inspire young creators.",
  },
];

const headsTeam: TeamMember[] = [
  {
    name: "Rehan R.",
    position: "Head of Marketing",
    image: "/images/team-images/rehan.png",
  },
  {
    name: "Sahana P.",
    position: "Head of Outreach",
    image: "/images/team-images/sahana.png",
  },
  {
    name: "Fiona F.",
    position: "Head of Product",
    image: "/images/team-images/fionaa.png",
  },
  {
    name: "Ishaan P.",
    position: "Head of Strategy",
    image: "/images/team-images/ishaan.png",
  },
  {
    name: "Namish J.",
    position: "Head of Blog",
    image: "/images/team-images/namish.png",
  },
];

const membersTeam: TeamMember[] = [
  {
    name: "Kyungjin O.",
    position: "Outreach Associate",
    image: "/images/team-images/kyungjin.png",
  },
  {
    name: "Rishi R.",
    position: "Outreach Associate",
    image: "/images/team-images/rishi.png",
  },
  {
    name: "Akmal M.",
    position: "Outreach Associate",
    image: "/images/team-images/akmal.png",
  },
  {
    name: "Ritvik P.",
    position: "Outreach Associate",
    image: "/images/team-images/ritvik.png",
  },
  {
    name: "Austin H.",
    position: "Outreach Associate",
    image: "/images/team-images/austin.png",
  },
  {
    name: "Derrick W.",
    position: "Graphics Design",
    image: "/images/team-images/derrick.png",
  },
  {
    name: "James A.",
    position: "Graphics Design",
    image: "/images/team-images/james.png",
  },
  {
    name: "Sujal T.",
    position: "Web Developer",
    image: "/images/team-images/sujal.png",
  },
  {
    name: "Emily F.",
    position: "Article Writer",
    image: "/images/team-images/emily.png",
  },
  {
    name: "Alexander N.",
    position: "Article Writer",
    image: "/images/team-images/alexander.png",
  },
  {
    name: "Aarjit A.",
    position: "Article Writer",
    image: "/images/team-images/Aarjit.png",
  },
];

const otherMembers = [...headsTeam, ...membersTeam];
const otherMembersRow1 = otherMembers.slice(0, 5);
const otherMembersRow2 = otherMembers.slice(5, 10);
const otherMembersRow3 = otherMembers.slice(10);


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
    {
      name: "Yukta P.",
      position: "Outreach Associate",
      image: "/images/team-images/yukta.png",
    },
  ],
];

function TeamMemberCard({ member, size = "small", index, onClick }: { member: TeamMember; size?: "small" | "large" | "compact" | "card", index?: number, onClick?: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, (index || 0) * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const imageSize = size === "large" ? "w-32 h-32" : size === "compact" ? "w-12 h-12" : size === "card" ? "w-10 h-10" : "w-20 h-20"
  const textSize = size === "large" ? "text-lg" : size === "compact" ? "text-xs" : size === "card" ? "text-sm" : "text-sm"
  const positionSize = size === "large" ? "text-sm" : size === "compact" ? "text-[10px]" : size === "card" ? "text-xs" : "text-xs"
  const marginBottom = size === "compact" ? "mb-1" : size === "card" ? "mb-2" : "mb-3"
  const borderWidth = size === "compact" ? "border-2" : size === "card" ? "border-2" : "border-4"

  if (size === "card") {
    return (
      <div className={`bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-gray-800/50 ${montserrat.className} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDuration: "500ms" }}>
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
    <div
  className={`flex flex-col items-center text-center ${montserrat.className} transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
  onClick={onClick}
>
      <div className={`relative ${imageSize} ${marginBottom} group`}>
  <Image
    src={member.image || "/placeholder.svg"}
    alt={member.name}
    fill
    className={`rounded-full object-cover ${borderWidth} border-purple-600 transition-transform duration-300 group-hover:scale-110`}
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
      <h3 className={`font-bold text-white ${textSize} mb-0.5`}>{member.name}</h3>
      <p className={`text-purple-400 ${positionSize} font-bold`}>{member.position}</p>
    </div>
  )
}

function useTypewriter(text: string | undefined, speed = 50) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (text) {
      const typingInterval = setInterval(() => {
        setDisplayText((prev) => {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          } else {
            clearInterval(typingInterval);
            return prev;
          }
        });
      }, speed);

      return () => {
        clearInterval(typingInterval);
        setDisplayText("");
      };
    }
  }, [text, speed]);

  return displayText;
}

function BlurbModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const displayText = useTypewriter(member?.blurb, 25);

  useEffect(() => {
    if (member) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [member]);

  if (!member) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`} onClick={onClose}>
      <div className={`bg-gray-900 rounded-lg p-8 max-w-2xl w-full mx-4 border-2 border-purple-500/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-6">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="rounded-full object-cover border-4 border-purple-600"
            />
          </div>
          <div>
            <h2 className={`text-3xl font-bold text-white ${montserrat.className}`}>{member.name}</h2>
            <p className="text-purple-400 text-lg font-bold">{member.position}</p>
          </div>
        </div>
        <p className="text-white mt-6 text-lg min-h-[150px]">{displayText}</p>
        <button onClick={onClose} className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
          Close
        </button>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const executiveSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBanner(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (executiveSectionRef.current) {
      observer.observe(executiveSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMemberClick = (member: TeamMember) => {
    if (member.blurb) {
      setSelectedMember(member);
      setShowBanner(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <main
      className={`flex flex-col items-center bg-black text-white min-h-screen ${montserrat.className}`}
    >
      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-4 ${montserrat.className}`}
          >
            Meet The Team
          </h1>
        </div>

        {/* Executive Team */}
        <div className="mb-16" ref={executiveSectionRef}>
          {/* Core Executives - Dark Background with White Glow */}
          <div className="bg-gray-900/50 rounded-lg p-8 mb-12 border-2 border-purple-500/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {executiveTeam.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  member={member}
                  size="large"
                  index={index}
                  onClick={() => handleMemberClick(member)}
                />
              ))}
            </div>
          </div>

          {/* Other Members Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center mb-12">
            {otherMembersRow1.map((member, index) => (
              <TeamMemberCard key={index} member={member} size="large" index={index} />
            ))}
          </div>

          {/* Other Members Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center mb-12">
            {otherMembersRow2.map((member, index) => (
              <TeamMemberCard key={index} member={member} size="large" index={index + otherMembersRow1.length} />
            ))}
          </div>

          {/* Other Members Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center">
            {otherMembersRow3.map((member, index) => (
              <TeamMemberCard key={index} member={member} size="large" index={index + otherMembersRow1.length + otherMembersRow2.length} />
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
              <TeamMemberCard key={index} member={member} size="card" index={index} />
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
      <BlurbModal member={selectedMember} onClose={handleCloseModal} />
    </main>
  )
}
