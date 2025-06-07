import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Dot grid background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80"></div>

      <div className="container relative px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Hack United</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Hack United is dedicated to empowering the next generation of innovators through accessible technology
                education and hands-on experience. We believe that by equipping students with both technical skills and
                essential soft skills, we can help them thrive in the rapidly evolving tech landscape.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                Founded by a group of passionate teenagers who recognized the gap between traditional education and
                industry demands, Hack United began as a small community initiative and has since grown into a
                recognized 501(c)(3) non-profit organization. Our founders experienced firsthand the challenges of
                breaking into the tech industry and were determined to create a supportive environment for others facing
                similar obstacles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">What We Do</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We organize hackathons, workshops, and educational programs that focus on both technical skills and
                professional development. Our events are designed to be inclusive, welcoming participants of all skill
                levels and backgrounds.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Free-to-enter hackathons with real-world challenges</li>
                <li>Workshops led by industry professionals</li>
                <li>Mentorship programs connecting students with experienced developers</li>
                <li>Community building through our Discord server and social media</li>
              </ul>
            </section>

            <div className="flex justify-center mt-12">
              <Link href="/">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Return to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
