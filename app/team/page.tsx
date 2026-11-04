"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import "./team.css";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  blurb?: string;
}

const executiveTeam: TeamMember[] = [
  {
    name: "Tejas C.",
    position: "Founder",
    image: "/images/team-images/Headshot.jpg",
    blurb:
      "Tejas started Hack United to share his lifelong passion for coding and tech with other students around the world. For him, Hack United is more than just events, it's a way to help students explore, create, and connect through technology.",
  },
  {
    name: "Akshay K.",
    position: "Chief Operations Officer",
    image: "/images/team-images/akshay.png",
    blurb:
      "As Chief Operating Officer, Akshay ensures Hack United’s events run seamlessly from start to finish. With a sharp eye for logistics, scheduling, and process optimization, he’s the backbone of the organization’s operational success. Akshay thrives on turning ambitious plans into smooth, impactful experiences for participants worldwide.",
  },
  {
    name: "Pranav A.",
    position: "Chief Strategy Officer",
    image: "/images/team-images/PranavA.png",
    blurb: "",
  },
  {
    name: "Kavin A.",
    position: "Chief Product Officer",
    image: "/images/team-images/kavina.png",
    blurb:
      "As Chief Strategy Officer, Kavin shapes Hack United’s vision, partnerships, and long-term growth. Blending strategic thinking with hands-on execution, he focuses on building relationships, securing sponsorships, and guiding the organization toward greater impact. His work ensures Hack United not only grows but thrives in its mission to inspire young creators.",
  },
];

const headsTeam: TeamMember[] = [
  {
    name: "Rehan R.",
    position: "Marketing Associate",
    image: "/images/team-images/rehan.png",
  },
  {
    name: "Sahana P.",
    position: "Head of Outreach",
    image: "/images/team-images/sahana.png",
  },
  {
    name: "Fiona F.",
    position: "Head of Marketing",
    image: "/images/team-images/fiona.webp",
  },
  {
    name: "Eldiiar B.",
    position: "Chief Technology Officer",
    image: "/images/team-images/Eldiiar Bekbolotov.png",
  },
  {
    name: "Karthik C.",
    position: "Head of Human Resources",
    image: "/images/team-images/karthik.webp",
  },
  {
    name: "Danny",
    position: "Head of Blog",
    image:
      "https://ui-avatars.com/api/?name=D&background=8B5CF6&color=fff&size=128",
  },
  {
    name: "Alexa S.",
    position: "Social Media Manager",
    image: "/images/team-images/ALEXA_HEADSHOT.png",
  },
];

const membersTeam: TeamMember[] = [
  {
    name: "Avyakt",
    position: "HR Associate",
    image: "/images/team-images/Avyakt.png",
  },
  {
    name: "Ritvik",
    position: "Outreach Associate",
    image: "/images/team-images/ritvik.png",
  },
  {
    name: "Austin Huynh",
    position: "Outreach Associate",
    image: "/images/team-images/austin.png",
  },
  {
    name: "Aarjit A.",
    position: "Article Writer",
    image: "/images/team-images/Aarjit.jpg",
  },
  {
    name: "Namish J",
    position: "Article Writer",
    image: "/images/team-images/namish.png",
  },
  {
    name: "Joey C.",
    position: "Project Manager",
    image: "/images/team-images/joey.png",
  },
];

const otherMembers = [...headsTeam, ...membersTeam];

// Previous Volunteers - 11 rows total, last row has 2 people
// Using colored avatars with initials for previous volunteers
const previousVolunteers: TeamMember[][] = [
  // Row 1
  [
    {
      name: "Shruti G.",
      position: "Marketing",
      image:
        "https://ui-avatars.com/api/?name=S&background=8B5CF6&color=fff&size=128",
    },
    {
      name: "Josh M.",
      position: "Article Writer",
      image:
        "https://ui-avatars.com/api/?name=J&background=10B981&color=fff&size=128",
    },
    {
      name: "Yash M.",
      position: "Outreach Associate",
      image:
        "https://ui-avatars.com/api/?name=Y&background=F59E0B&color=fff&size=128",
    },
    {
      name: "Dev C.",
      position: "Partnership Manager",
      image:
        "https://ui-avatars.com/api/?name=D&background=EF4444&color=fff&size=128",
    },
    {
      name: "Youssef E.",
      position: "Technical Support",
      image:
        "https://ui-avatars.com/api/?name=Y&background=3B82F6&color=fff&size=128",
    },
  ],
  // Row 2
  [
    {
      name: "Jen H.",
      position: "Community Manager",
      image:
        "https://ui-avatars.com/api/?name=J&background=EC4899&color=fff&size=128",
    },
    {
      name: "Joel. R",
      position: "Community Manager",
      image:
        "https://ui-avatars.com/api/?name=J&background=06B6D4&color=fff&size=128",
    },
    {
      name: "Yosuf A.",
      position: "Community Team",
      image:
        "https://ui-avatars.com/api/?name=Y&background=84CC16&color=fff&size=128",
    },
    {
      name: "Hadi M.",
      position: "Full Stack Developer",
      image:
        "https://ui-avatars.com/api/?name=H&background=A855F7&color=fff&size=128",
    },
    {
      name: "Dheeraj T",
      position: "Education Team",
      image:
        "https://ui-avatars.com/api/?name=D&background=F97316&color=fff&size=128",
    },
  ],
  // Row 3
  [
    {
      name: "Jeffery L.",
      position: "Chief Finance Officer",
      image:
        "https://ui-avatars.com/api/?name=J&background=DC2626&color=fff&size=128",
    },
    {
      name: "Shaan B.",
      position: "Discord Bot Developer",
      image:
        "https://ui-avatars.com/api/?name=S&background=059669&color=fff&size=128",
    },
    {
      name: "Narain S.",
      position: "Course Instructor",
      image:
        "https://ui-avatars.com/api/?name=N&background=7C3AED&color=fff&size=128",
    },
    {
      name: "Danish A.",
      position: "Graphic Designer",
      image:
        "https://ui-avatars.com/api/?name=D&background=DB2777&color=fff&size=128",
    },
    {
      name: "Sudar A.",
      position: "Graphic Designer",
      image:
        "https://ui-avatars.com/api/?name=S&background=0891B2&color=fff&size=128",
    },
  ],
  // Row 4
  [
    {
      name: "Anora D.",
      position: "Course Instructor",
      image:
        "https://ui-avatars.com/api/?name=A&background=65A30D&color=fff&size=128",
    },
    {
      name: "Kevin A.",
      position: "Course Instructor",
      image:
        "https://ui-avatars.com/api/?name=K&background=D97706&color=fff&size=128",
    },
    {
      name: "Prince M.",
      position: "Head Marketing",
      image:
        "https://ui-avatars.com/api/?name=P&background=9333EA&color=fff&size=128",
    },
    {
      name: "Mylthosa",
      position: "Talent Acquisition",
      image:
        "https://ui-avatars.com/api/?name=M&background=BE185D&color=fff&size=128",
    },
    {
      name: "Harish A.",
      position: "Finance Manager",
      image:
        "https://ui-avatars.com/api/?name=H&background=0284C7&color=fff&size=128",
    },
  ],
  // Row 5
  [
    {
      name: "Aidan D.",
      position: "Talent Acquisition",
      image:
        "https://ui-avatars.com/api/?name=A&background=7C2D12&color=fff&size=128",
    },
    {
      name: "Ru Xue J.",
      position: "Senior Content Writer",
      image:
        "https://ui-avatars.com/api/?name=R&background=B91C1C&color=fff&size=128",
    },
    {
      name: "Abhinav S.",
      position: "Finance Manager",
      image:
        "https://ui-avatars.com/api/?name=A&background=047857&color=fff&size=128",
    },
    {
      name: "Oluwatimi Iehin A.",
      position: "Partnership Manager",
      image:
        "https://ui-avatars.com/api/?name=O&background=6D28D9&color=fff&size=128",
    },
    {
      name: "Alaap J.",
      position: "Project Coordinator",
      image:
        "https://ui-avatars.com/api/?name=A&background=C2410C&color=fff&size=128",
    },
  ],
  // Row 6
  [
    {
      name: "Ishan K.",
      position: "Community Manager",
      image:
        "https://ui-avatars.com/api/?name=I&background=1E40AF&color=fff&size=128",
    },
    {
      name: "Shrey V.",
      position: "Event Operations",
      image:
        "https://ui-avatars.com/api/?name=S&background=991B1B&color=fff&size=128",
    },
    {
      name: "Nicole I.",
      position: "Technical Associate",
      image:
        "https://ui-avatars.com/api/?name=N&background=059669&color=fff&size=128",
    },
    {
      name: "Ameer.",
      position: "Head of Engineering",
      image:
        "https://ui-avatars.com/api/?name=A&background=5B21B6&color=fff&size=128",
    },
    {
      name: "Mason Z.",
      position: "Technical Support",
      image:
        "https://ui-avatars.com/api/?name=M&background=A21CAF&color=fff&size=128",
    },
  ],
  // Row 7
  [
    {
      name: "Mau T.",
      position: "Event Operations",
      image:
        "https://ui-avatars.com/api/?name=M&background=0F766E&color=fff&size=128",
    },
    {
      name: "Quunh T.",
      position: "Event Operations",
      image:
        "https://ui-avatars.com/api/?name=Q&background=7C3AED&color=fff&size=128",
    },
    {
      name: "Omkar P.",
      position: "Community Planner",
      image:
        "https://ui-avatars.com/api/?name=O&background=BE123C&color=fff&size=128",
    },
    {
      name: "Shrey S.",
      position: "Finance Manager",
      image:
        "https://ui-avatars.com/api/?name=S&background=0369A1&color=fff&size=128",
    },
    {
      name: "Easwar G.",
      position: "Partnership Manager",
      image:
        "https://ui-avatars.com/api/?name=E&background=4338CA&color=fff&size=128",
    },
  ],
  // Row 8
  [
    {
      name: "Adi K.",
      position: "Outreach Manager",
      image:
        "https://ui-avatars.com/api/?name=A&background=B45309&color=fff&size=128",
    },
    {
      name: "Aadi G.",
      position: "Social Media Manager",
      image:
        "https://ui-avatars.com/api/?name=A&background=86198F&color=fff&size=128",
    },
    {
      name: "Noah A.",
      position: "Article Writer",
      image:
        "https://ui-avatars.com/api/?name=N&background=0D9488&color=fff&size=128",
    },
    {
      name: "Isaac W.",
      position: "Web Developer",
      image:
        "https://ui-avatars.com/api/?name=I&background=7E22CE&color=fff&size=128",
    },
    {
      name: "Wahib B.",
      position: "Web Developer",
      image:
        "https://ui-avatars.com/api/?name=W&background=BE185D&color=fff&size=128",
    },
  ],
  // Row 9
  [
    {
      name: "Niko P.",
      position: "Community Team",
      image:
        "https://ui-avatars.com/api/?name=N&background=0891B2&color=fff&size=128",
    },
    {
      name: "Dino B.",
      position: "Web Developer",
      image:
        "https://ui-avatars.com/api/?name=D&background=9333EA&color=fff&size=128",
    },
    {
      name: "Rushil C.",
      position: "Social Media Manager",
      image:
        "https://ui-avatars.com/api/?name=R&background=DC2626&color=fff&size=128",
    },
    {
      name: "Muhammad D.",
      position: "Technical Team",
      image:
        "https://ui-avatars.com/api/?name=M&background=059669&color=fff&size=128",
    },
    {
      name: "Murari A.",
      position: "Social Media Manager",
      image:
        "https://ui-avatars.com/api/?name=M&background=7C3AED&color=fff&size=128",
    },
  ],
  // Row 10
  [
    {
      name: "Akishai S.",
      position: "Outreach Associate",
      image:
        "https://ui-avatars.com/api/?name=A&background=DB2777&color=fff&size=128",
    },
    {
      name: "Indrajeet S.",
      position: "Outreach Associate",
      image:
        "https://ui-avatars.com/api/?name=I&background=0284C7&color=fff&size=128",
    },
    {
      name: "Alex P.",
      position: "Advisor",
      image:
        "https://ui-avatars.com/api/?name=A&background=65A30D&color=fff&size=128",
    },
    {
      name: "Mikul R.",
      position: "Article Writer",
      image:
        "https://ui-avatars.com/api/?name=M&background=D97706&color=fff&size=128",
    },
    {
      name: "Sohil C.",
      position: "Outreach Associate",
      image:
        "https://ui-avatars.com/api/?name=S&background=BE185D&color=fff&size=128",
    },
  ],
  // Row 11 - Last row with 2 people
  [
    {
      name: "Arnav S.",
      position: "Outreach Manager",
      image:
        "https://ui-avatars.com/api/?name=A&background=0891B2&color=fff&size=128",
    },
    {
      name: "Taha Y.",
      position: "Graphic Designer",
      image:
        "https://ui-avatars.com/api/?name=T&background=9333EA&color=fff&size=128",
    },
    {
      name: "Ved I.",
      position: "",
      image: "/images/team-images/vedI.png",
    },
  ],
  // Row 12 - Recently moved from active team
  [
    {
      name: "Ankit B.",
      position: "Web Developer",
      image:
        "https://ui-avatars.com/api/?name=A&background=DC2626&color=fff&size=128",
    },
    {
      name: "Arnnav K.",
      position: "Technical Team",
      image:
        "https://ui-avatars.com/api/?name=A&background=059669&color=fff&size=128",
    },
    {
      name: "Som S.",
      position: "Web Developer",
      image:
        "https://ui-avatars.com/api/?name=S&background=7C3AED&color=fff&size=128",
    },
    {
      name: "Tadas V.",
      position: "Community Planner",
      image:
        "https://ui-avatars.com/api/?name=T&background=DB2777&color=fff&size=128",
    },
  ],
];


const alumni = previousVolunteers.flat();

function MemberCard({ member, index, large = false }: { member: TeamMember; index: number; large?: boolean }) {
  return (
    <figure className={`team-card nb nb-hover${index % 2 ? " nb-alt" : ""}${large ? " team-card-lg" : ""}`} data-drop>
      <div className="team-photo">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          sizes={large ? "(min-width: 1024px) 25vw, 50vw" : "(min-width: 1024px) 18vw, 45vw"}
          className="object-cover"
        />
        <span className="team-index hu-mono">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <figcaption>
        <span className="team-name">{member.name}</span>
        {member.position && <span className="team-role hu-mono">{member.position}</span>}
      </figcaption>
    </figure>
  );
}

export default function TeamPage() {
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  return (
    <main ref={mainRef} className="hu-home">
      <section className="hu-wrap hu-page-head">
        <p className="hu-label" data-reveal>
          <b>{String(executiveTeam.length + otherMembers.length).padStart(2, "0")}</b>
          <span>People running Hack United</span>
        </p>
        <h1 className="hu-display mt-7" data-split>
          <em>The</em> team
        </h1>
      </section>

      <section className="hu-section" data-stop="The team" data-zone="a">
        <div className="hu-wrap">
          <div className="team-head">
            <h2 className="hu-label">
              <b>A</b>
              <span>Executive team</span>
            </h2>
          </div>
          <div className="team-grid-exec">
            {executiveTeam.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} large />
            ))}
          </div>

          <div className="team-head mt-24">
            <h2 className="hu-label">
              <b>B</b>
              <span>Leads &amp; members</span>
            </h2>
          </div>
          <div className="team-grid">
            {otherMembers.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i + executiveTeam.length} />
            ))}
          </div>
        </div>
      </section>

      <section className="hu-section" data-stop="Volunteers">
        <div className="hu-wrap">
          <div className="credits-head">
            <h2 className="hu-h2" data-split>
              <em>Previous</em> volunteers
            </h2>
          </div>

          <ol className="credits nb">
            {alumni.map((member) => (
              <li key={`${member.name}-${member.position}`}>
                <span className="credits-name">{member.name}</span>
                <span className="credits-leader" aria-hidden="true" />
                <span className="credits-role hu-mono">{member.position || "Volunteer"}</span>
              </li>
            ))}
          </ol>

        </div>
      </section>
    </main>
  );
}
