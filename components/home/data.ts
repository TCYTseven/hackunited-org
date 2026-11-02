export const pressLogos = [
  {
    src: "/images/companies logo/TechBullionLogo.webp",
    alt: "TechBullion",
    href: "https://techbullion.com/teenage-founder-creates-hackathon-program-to-help-peers/",
  },
  {
    src: "/images/companies logo/asocciatePress_00000.png",
    alt: "Associated Press",
    href: "https://apnews.com/press-release/ein-presswire-newsmatics/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills-d95d1a2b7f2b0367502ec18bd0148d08",
  },
  {
    src: "/images/companies logo/digitalJournal_00000.png",
    alt: "Digital Journal",
    href: "https://www.digitaljournal.com/pr/news/vehement-media/teen-led-hack-united-launches-united-1122733292.html",
  },
  {
    src: "/images/companies logo/fox40_00000.png",
    alt: "Fox 40",
    href: "https://fox40.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills/",
  },
  {
    src: "/images/companies logo/news 10_00000.png",
    alt: "News 10",
    href: "https://www.news10.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills/",
  },
  {
    src: "/images/companies logo/theGlobe_00000.png",
    alt: "The Globe and Mail",
    href: "https://www.barchart.com/story/news/33037092/hack-united-empowers-youth-with-soft-skills-at-united-hacks-v5",
  },
];

export const judgeOrgs = [
  { src: "/judgesfrom/Amazon-Logo.png", alt: "Amazon" },
  { src: "/judgesfrom/Google-Logo.png", alt: "Google" },
  { src: "/judgesfrom/Microsoft-Logo.png", alt: "Microsoft" },
  { src: "/judgesfrom/Stanford-Logo.png", alt: "Stanford" },
  { src: "/judgesfrom/Visa-Logo.png", alt: "Visa" },
  { src: "/judgesfrom/YC-Logo.png", alt: "Y Combinator" },
];

export const impactHighlights = [
  {
    value: "25,000+",
    label: "Engineers impacted",
    detail: "Hackathons, workshops, and Discord programming.",
  },
  {
    value: "3,000+",
    label: "Community members",
    detail: "Students building together year-round.",
  },
  {
    value: "50+",
    label: "Countries reached",
    detail: "Participants from every major region.",
  },
];

export const goalPillars = [
  {
    title: "Soft skills",
    description:
      "Communication, teamwork, and presenting work matter as much as the code. Our events are built around that.",
  },
  {
    title: "Real projects",
    description:
      "Each hackathon theme ties to problems people actually face. You ship something, not just a tutorial clone.",
  },
  {
    title: "Community",
    description: "Discord, mentors, and repeat participants. Most people stay after their first event.",
  },
];

export type HackathonStat = { value: string; label: string };

export type Hackathon = {
  value: string;
  label: string;
  title: string;
  date: string;
  theme: string;
  description: string;
  stats: HackathonStat[];
  moreStats?: HackathonStat[];
  feature?: { title: string; detail: string };
  image: string;
  alt: string;
  badge: string;
  caption: string;
  recap: string;
  devpost: string;
};

export const hackathons: Hackathon[] = [
  {
    value: "v1",
    label: "V1",
    title: "United Hacks V1",
    date: "August 2023",
    theme: "Mental Health Theme",
    description:
      "Our inaugural hackathon focused on mental health solutions, bringing together 400+ participants to create impactful projects with industry professional judges.",
    stats: [
      { value: "400+", label: "Participants" },
      { value: "50+", label: "Projects" },
      { value: "$5,000+", label: "Prize Pool" },
      { value: "10+", label: "Sponsors" },
    ],
    moreStats: [
      { value: "100+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    image: "/images/v1.png",
    alt: "United Hacks V1 winning projects",
    badge: "Mental Health",
    caption: "Inaugural hackathon showcasing mental health innovations",
    recap:
      "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology",
    devpost: "https://unitedhacks23.devpost.com/",
  },
  {
    value: "v2",
    label: "V2",
    title: "United Hacks V2",
    date: "January 2024",
    theme: "Resolutions Theme",
    description:
      "Our second hackathon focused on New Year resolutions and positive change, featuring 400+ participants and the largest prize pool to date with industry professional & student judges.",
    stats: [
      { value: "400+", label: "Participants" },
      { value: "75+", label: "Projects" },
      { value: "$15,000+", label: "Prize Pool" },
      { value: "15+", label: "Sponsors" },
    ],
    moreStats: [
      { value: "100+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    image: "/images/v2.png",
    alt: "United Hacks V2 winning projects",
    badge: "Resolutions",
    caption: "Outstanding winning projects from our largest prize pool",
    recap: "https://blog.hackunited.org/united-hacks-v2-hackathon-recap",
    devpost: "https://unitedhacksv2.devpost.com/",
  },
  {
    value: "v3",
    label: "V3",
    title: "United Hacks V3",
    date: "September 2024",
    theme: "Communication Theme",
    description:
      'Our third hackathon introduced "Mini-Hacks" with a focus on communication solutions, featuring 150+ participants and industry professional judges in a more intimate setting.',
    stats: [
      { value: "150+", label: "Participants" },
      { value: "$2,000+", label: "Prize Pool" },
      { value: "75+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    feature: {
      title: "Mini-Hacks Format",
      detail: "Smaller, focused hackathon experience",
    },
    image: "/images/v3.png",
    alt: "United Hacks V3 winning projects",
    badge: "Communication",
    caption: "Mini-Hacks showcasing innovative winning projects",
    recap: "https://blog.hackunited.org/united-hacks-v3-recap",
    devpost: "https://unitedhacksv3.devpost.com/",
  },
  {
    value: "v4",
    label: "V4",
    title: "United Hacks V4",
    date: "January 2025",
    theme: "Social Impact Theme",
    description:
      "Our most recent hackathon focused on social impact solutions, bringing together 400+ participants to tackle real-world challenges with industry professional judges.",
    stats: [
      { value: "400+", label: "Participants" },
      { value: "80+", label: "Projects" },
      { value: "$10,000+", label: "Prize Pool" },
      { value: "10+", label: "Sponsors" },
    ],
    moreStats: [
      { value: "100+", label: "Workshop Attendees" },
      { value: "10", label: "Workshops" },
    ],
    image: "/images/v4.png",
    alt: "United Hacks V4 winning projects",
    badge: "Social Impact",
    caption: "Featuring winning projects from our latest hackathon",
    recap:
      "https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact",
    devpost: "https://unitedhacksv4.devpost.com/",
  },
  {
    value: "v5",
    label: "V5",
    title: "United Hacks V5",
    date: "July 2025",
    theme: "Entertainment Theme",
    description:
      "Our fifth hackathon focused on entertainment solutions, bringing together 1250+ participants to tackle real-world challenges with industry professional judges.",
    stats: [
      { value: "1250+", label: "Participants" },
      { value: "200+", label: "Projects" },
      { value: "$50,000+", label: "Prize Pool" },
      { value: "10+", label: "Sponsors" },
    ],
    moreStats: [
      { value: "250+", label: "Workshop Attendees" },
      { value: "8", label: "Workshops" },
    ],
    image: "/images/imagecoo.png",
    alt: "United Hacks V5 winning projects",
    badge: "Entertainment",
    caption: "Featuring winning projects from our entertainment themed hackathon.",
    recap: "https://blog.hackunited.org/united-hacks-v5-recap",
    devpost: "https://unitedhacksv5.devpost.com/",
  },
  {
    value: "v6",
    label: "V6",
    title: "United Hacks V6",
    date: "January 2026",
    theme: "Human Interaction Theme",
    description:
      "Our sixth hackathon focused on solutions embracing human interaction, bringing together 1200+ participants to tackle real-world challenges, while connecting in our Discord community of 3000+ programmers.",
    stats: [
      { value: "1200+", label: "Participants" },
      { value: "160+", label: "Projects" },
      { value: "$20,000+", label: "Prize Pool" },
      { value: "11+", label: "Sponsors" },
    ],
    moreStats: [
      { value: "200+", label: "Workshop Attendees" },
      { value: "6", label: "Workshops" },
    ],
    image: "/images/v6.webp",
    alt: "United Hacks V6 winning projects",
    badge: "Human Interaction",
    caption: "Featuring winning projects from our human interaction themed hackathon.",
    recap: "https://blog.hackunited.org/united-hacks-v6-hackathon-recap",
    devpost: "https://unitedhacksv6.devpost.com/",
  },
];
