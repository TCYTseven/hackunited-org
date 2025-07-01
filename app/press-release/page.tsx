import NewsCarousel from "@/components/ui/news-carousel";
import Image from "next/image";

export default function PressRelease() {
  return (
    <main className="bg-black min-h-screen text-gray-900 pb-16">
      <div className="flex flex-col items-center w-full px-2 sm:px-4 pt-6 sm:pt-10">
        <div className="w-full max-w-2xl mb-8 sm:mb-10">
          <NewsCarousel />
        </div>
        <article className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-3 sm:p-6 md:p-10 flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center leading-tight">Hack United Empowers Youth with Soft Skills at United Hacks V5</h1>
          <div className="w-full flex flex-col items-center mb-6 sm:mb-8">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-xl mb-4">
              <Image src="/images/pr-image.jpg" alt="United Hacks V5" width={700} height={400} className="rounded-lg w-full object-cover" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center mb-2 sm:mb-4">
            <span className="text-xs text-gray-500 mb-2">Published 1:30 AM EDT, June 25, 2025</span>
            <p className="italic text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 text-center font-medium">This free three-day event invites students worldwide to build, pitch, and grow, offering $50,000+ in prizes and mentorship from industry professionals.</p>
          </div>
          <section className="prose prose-sm sm:prose-lg prose-gray max-w-none text-gray-800 leading-relaxed [&>p]:mb-5 sm:[&>p]:mb-6 [&>ul]:mb-5 sm:[&>ul]:mb-6 [&>blockquote]:mb-5 sm:[&>blockquote]:mb-6">
            <p>Hack United, a global student-led nonprofit dedicated to empowering youth through technology, proudly announces the return of its flagship event: United Hacks V5. Now in its fifth edition, this year’s virtual hackathon is set to be the largest and most prestigious yet, offering more than $50,000 in prizes, access to world-class mentors, and an inclusive space for high school and university students from across the globe to create meaningful tech solutions.</p>
            <p>Completely free to join and open to all skill levels, United Hacks V5 will run from <b>July 11 through July 13, 2025</b>. Participants will collaborate online in teams or individually, building innovative projects and presenting them to a panel of expert judges representing leading companies like Amazon, Meta, Apple, Salesforce, Microsoft, TikTok, Blizzard, Tesla, and VISA.</p>
            <h3>Registration and Event Details:</h3>
            <ul>
              <li><b>Event Name:</b> United Hacks V5</li>
              <li><b>Dates:</b> July 11–13, 2025</li>
              <li><b>Format:</b> 100% Virtual</li>
              <li><b>Eligibility:</b> High school and university students worldwide</li>
              <li><b>Cost:</b> Free</li>
              <li><b>Skill Level:</b> Open to all, no prior experience needed</li>
              <li><b>Registration:</b> <a href="https://unitedhacksv5.devpost.com" target="_blank" rel="noopener">https://unitedhacksv5.devpost.com</a></li>
              <li><b>Event Website:</b> <a href="https://unitedhacks.hackunited.org" target="_blank" rel="noopener">https://unitedhacks.hackunited.org</a></li>
              <li><b>Community Discord:</b> <a href="https://discord.gg/hackunited" target="_blank" rel="noopener">https://discord.gg/hackunited</a></li>
            </ul>
            <p>Unlike most hackathons that focus exclusively on coding, United Hacks V5 places equal emphasis on soft skills, such as communication, pitching, and collaboration. This dual-focus model addresses a critical gap in youth STEM education: the ability to present ideas persuasively and work effectively in teams.</p>
            <blockquote>“We realized many brilliant students built amazing projects but struggled to express their value,” said Tejas Chakrapani, Founder of Hack United. “Our events not only help students build innovative solutions, they also help them build confidence, public speaking skills, and career readiness.”</blockquote>
            <p>Hack United was founded in May 2023 by Chakrapani, then a high school student, with a simple goal: to make hands-on coding more accessible to young learners around the world. What began as a small initiative has since evolved into a global organization that has reached over 25,000 students across 50+ countries.</p>
            <p>Run primarily by a team of student volunteers, Hack United embodies the very spirit it seeks to inspire. The leadership team behind United Hacks V5 includes Pranav A (Head of Operations), Kavin A (Head of Events), Rehan R (Head of Marketing), Sahana P (Head of Outreach), and Fiona F (Head of Product).</p>
            <p>Together, they’ve designed an event that removes barriers to entry, whether financial, educational, or geographic, and provides every participant with access to top-tier resources, mentorship, and networking.</p>
            <p>Participants in United Hacks V5 will walk away not only with projects for their portfolios, but also with skills and connections that can jumpstart their professional journeys. Past attendees have gone on to earn paid internships, join venture-backed startups, and gain admissions to top universities.</p>
            <blockquote>“United Hacks helped me build a project that I could put on my resume, and gave me the confidence to pitch my ideas to real-world companies, all while still in high school,” said Ryan Bates, a former participant.</blockquote>
            <p>The event welcomes both seasoned programmers and complete beginners. Individuals can register solo and be matched with teammates from around the world, fostering a collaborative, supportive environment.</p>
            <p>With its emphasis on innovation, inclusivity, and personal growth, United Hacks V5 is more than a competition; it’s a launchpad for the next generation of builders, thinkers, and leaders.</p>
            <h3>About Hack United</h3>
            <p>Hack United is a student-founded nonprofit organization providing accessible, high-impact hackathons and technical education experiences to students around the world. Since 2023, Hack United has empowered over 25,000 students in more than 50 countries to explore technology, build real-world projects, and develop the communication and collaboration skills needed to succeed in the 21st-century workforce.</p>
            <p>To learn more, visit: <a href="https://www.hackunited.org" target="_blank" rel="noopener">https://www.hackunited.org</a>. For any inquiry, contact the team at <a href="mailto:humans@hackunited.org">humans@hackunited.org</a>.</p>
            <p><b>For more details, follow Hack United on social media:</b><br/>
              Discord <a href="https://discord.gg/hackunited" target="_blank" rel="noopener">discord.gg/hackunited</a><br/>
              Instagram <a href="https://instagram.com/hack_united" target="_blank" rel="noopener">@hack_united</a><br/>
              LinkedIn <a href="https://linkedin.com/company/hack-united" target="_blank" rel="noopener">@hack-united</a>
            </p>
            <p><b>Watch "United Hacks V5 Official Trailer" on YouTube:</b> <a href="https://www.youtube.com/watch?v=tETq2E0kPE0" target="_blank" rel="noopener">https://www.youtube.com/watch?v=tETq2E0kPE0</a></p>
          </section>
        </article>
      </div>
    </main>
  );
} 