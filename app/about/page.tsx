import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const whatWeDo = [
  "Free-to-enter hackathons with real-world challenges",
  "Workshops led by industry professionals",
  "Mentorship programs connecting students with experienced developers",
  "Community building through our Discord server and social media",
]

export default function AboutPage() {
  return (
    <main className="hu-home">
      <div className="hu-wrap hu-page-head max-w-4xl">
        <p className="hu-label">
          <b>501(c)(3)</b>
          <span>Hack United</span>
        </p>
        <h1 className="hu-display mt-7" data-split>
          <em>About</em>
        </h1>

        <div className="mt-16 space-y-14">
          <section className="border-t border-[var(--hu-line)] pt-8">
            <h2 className="hu-h3">
              <em>Our</em> mission
            </h2>
            <p className="hu-lead mt-4">
              Hack United is dedicated to empowering the next generation of innovators through accessible technology
              education and hands-on experience. We believe that by equipping students with both technical skills and
              essential soft skills, we can help them thrive in the rapidly evolving tech landscape.
            </p>
          </section>

          <section className="border-t border-[var(--hu-line)] pt-8">
            <h2 className="hu-h3">
              <em>Our</em> story
            </h2>
            <p className="hu-lead mt-4">
              Started by a group of passionate developers who recognized the gap between traditional education and
              industry demands, Hack United began as a small community initiative and has since grown into a
              recognized 501(c)(3) non-profit organization. Our founders experienced firsthand the challenges of
              breaking into the tech industry and were determined to create a supportive environment for others facing
              similar obstacles.
            </p>
          </section>

          <section className="border-t border-[var(--hu-line)] pt-8">
            <h2 className="hu-h3">
              <em>What</em> we do
            </h2>
            <p className="hu-lead mt-4">
              We organize hackathons, workshops, and educational programs that focus on both technical skills and
              professional development. Our events are designed to be inclusive, welcoming participants of all skill
              levels and backgrounds.
            </p>
            <ul className="mt-6">
              {whatWeDo.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-[var(--hu-line)] py-3.5 text-[var(--hu-fg)]"
                >
                  <span className="hu-mono pt-1 text-[11px] text-[var(--hu-accent)]">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Link href="/" className="hu-btn hu-btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            Return to home
          </Link>
        </div>
      </div>
    </main>
  )
}
