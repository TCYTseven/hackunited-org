import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="atelier">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="atelier-title mb-12">
          <em>About</em>
        </h1>

        <div className="space-y-12">
          <section className="border-t border-[#2c2438] pt-8">
            <h2 className="atelier-sub mb-4"><em>Our</em> mission</h2>
            <p className="atelier-lead">
              Hack United is dedicated to empowering the next generation of innovators through accessible technology
              education and hands-on experience. We believe that by equipping students with both technical skills and
              essential soft skills, we can help them thrive in the rapidly evolving tech landscape.
            </p>
          </section>

          <section className="border-t border-[#2c2438] pt-8">
            <h2 className="atelier-sub mb-4"><em>Our</em> story</h2>
            <p className="atelier-lead">
              Started by a group of passionate developers who recognized the gap between traditional education and
              industry demands, Hack United began as a small community initiative and has since grown into a
              recognized 501(c)(3) non-profit organization. Our founders experienced firsthand the challenges of
              breaking into the tech industry and were determined to create a supportive environment for others facing
              similar obstacles.
            </p>
          </section>

          <section className="border-t border-[#2c2438] pt-8">
            <h2 className="atelier-sub mb-4"><em>What</em> we do</h2>
            <p className="atelier-lead mb-5">
              We organize hackathons, workshops, and educational programs that focus on both technical skills and
              professional development. Our events are designed to be inclusive, welcoming participants of all skill
              levels and backgrounds.
            </p>
            <ul className="space-y-3 text-[#c8c2b6]">
              <li className="border-b border-[#2c2438] pb-3">Free-to-enter hackathons with real-world challenges</li>
              <li className="border-b border-[#2c2438] pb-3">Workshops led by industry professionals</li>
              <li className="border-b border-[#2c2438] pb-3">Mentorship programs connecting students with experienced developers</li>
              <li>Community building through our Discord server and social media</li>
            </ul>
          </section>

          <Link href="/" className="atelier-btn">
            Return to home
          </Link>
        </div>
      </div>
    </main>
  )
}
