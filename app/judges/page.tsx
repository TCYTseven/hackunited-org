"use client";
import Image from "next/image"
import { Montserrat } from "next/font/google"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] })

interface Judge {
  name: string
  company: string
  image?: string // Optional - will auto-generate from name if not provided
}

// Helper function to generate image path from judge name
// Converts "John Doe" to "/images/judges/John Doe.png"
// If your images have different names, you can specify the image path manually
const getJudgeImage = (judge: Judge): string => {
  if (judge.image) {
    return judge.image
  }
  // Auto-generate path from name (assumes image filename matches judge name)
  return `/images/judges/${judge.name}.png`
}

// Judges data - add your judges here
// Update the "company" field for each judge with their actual company
const judges: Judge[] = [
  {
    name: "Akshay Pratinav",
    company: "Intuit",
    image: "/images/judges/Akshay Pratinav.png",
  },
  {
    name: "Aman Kansal",
    company: "Parallel Web Systems",
    image: "/images/judges/Aman Kansal.png",
  },
  {
    name: "Banani Mohapatra",
    company: "Walmart",
    image: "/images/judges/Banani Mohapatra.png",
  },
  {
    name: "Bhavnish Walia",
    company: "Amazon",
    image: "/images/judges/Bhavnish Walia.png",
  },
  {
    name: "Chidambaram Bhat",
    company: "Integral Technologies",
    image: "/images/judges/Chidambaram Bhat.png",
  },
  {
    name: "Gayathri Balakumar",
    company: "Capital One",
    image: "/images/judges/Gayathri Balakumar.png",
  },
  {
    name: "Giorgio Demarchi",
    company: "Almanax",
    image: "/images/judges/Giorgio Demarchi.jpg",
  },
  {
    name: "Gunasekar PullurBalu",
    company: "Vanguard",
    image: "/images/judges/Gunasekar PullurBalu.png",
  },
  {
    name: "Lakshmi Prasad Rongali",
    company: "DevOps",
    image: "/images/judges/Lakshmi Prasad Rongali.png",
  },
  {
    name: "Manish Anand",
    company: "Medline Industries",
    image: "/images/judges/Manish Anand.png",
  },
  {
    name: "Minzhou Wang",
    company: "Husqvarna Group",
    image: "/images/judges/Minzhou Wang.png",
  },
  {
    name: "Nihal Kaul",
    company: "Revscale AI",
    image: "/images/judges/Nihal Kaul.jpg",
  },
  {
    name: "Pranav Babu",
    company: "BEDGEAR",
    image: "/images/judges/Pranav Babu.png",
  },
  {
    name: "Pratik Agarwal",
    company: "Figma",
    image: "/images/judges/Pratik Agarwal.png",
  },
  {
    name: "Sanchee Kaushik",
    company: "Aetna",
    image: "/images/judges/Sanchee Kaushik.png",
  },
  {
    name: "Sara Bellomo",
    company: "Roche Diagnostics",
    image: "/images/judges/Sara Bellomo.png",
  },
  {
    name: "Saumya Tyagi",
    company: "Google",
    image: "/images/judges/Saumya Tyagi.png",
  },
  {
    name: "Saurabh Kumar",
    company: "Walmart Global Tech",
    image: "/images/judges/Saurabh Kumar.png",
  },
  {
    name: "Shashank Shivam",
    company: "Oracle",
    image: "/images/judges/Shashank Shivam.png",
  },
  {
    name: "Sol Lee",
    company: "CreatorCore",
    image: "/images/judges/Sol Lee.png",
  },
  {
    name: "Soumyajyoti Bhattacharya",
    company: "PayPal",
    image: "/images/judges/Soumyajyoti Bhattacharya.png",
  },
  {
    name: "Tiago Filipe da Silva",
    company: "MidWestern",
    image: "/images/judges/Tiago Filipe da Silva.png",
  },
  {
    name: "Violetta Pidvolotska",
    company: "Netflix",
    image: "/images/judges/Violetta Pidvolotska.png",
  },
  {
    name: "William Bella",
    company: "Insptech",
    image: "/images/judges/William Bella.png",
  },
  {
    name: "Yolanda T.",
    company: "GreenLite",
    image: "/images/judges/Yolanda T..png",
  },
  {
    name: "Ankit Gupta",
    company: "Exeter Finance LLC",
    image: "/images/judges/Ankit Gupta.jpeg",
  },
  {
    name: "Shibashis Mishra",
    company: "Adobe",
    image: "/images/judges/Shibashis Mishra.png",
  },
  {
    name: "Syed Ahmad",
    company: "Walmart",
    image: "/images/judges/Syed Ahmad.jpg",
  },
]

export default function JudgesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredJudges, setFilteredJudges] = useState(judges)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredJudges(judges)
    } else {
      const query = searchQuery.toLowerCase()
      setFilteredJudges(
        judges.filter(
          (judge) =>
            judge.name.toLowerCase().includes(query) ||
            judge.company.toLowerCase().includes(query)
        )
      )
    }
  }, [searchQuery])

  return (
    <main
      className={`flex flex-col items-center bg-black text-white min-h-screen ${montserrat.className}`}
    >
      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-4 ${montserrat.className}`}
          >
            Our Judges
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Meet the industry experts who evaluate and inspire our hackathon participants
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search judges by name or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 rounded-full py-6 text-lg focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Judges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredJudges.map((judge, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-gray-800/50 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={getJudgeImage(judge)}
                    alt={judge.name}
                    width={256}
                    height={256}
                    className="rounded-full object-cover border-4 border-purple-600 w-32 h-32"
                    quality={100}
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = "/placeholder-user.jpg"
                    }}
                  />
                </div>
                <h3 className={`font-bold text-white text-lg mb-2 ${montserrat.className}`}>
                  {judge.name}
                </h3>
                <p className="text-purple-400 text-sm font-medium">
                  {judge.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredJudges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No judges found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Results Count */}
        {searchQuery && (
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Showing {filteredJudges.length} of {judges.length} judges
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

