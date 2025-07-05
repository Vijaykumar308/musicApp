"use client"

import { useState } from "react"
import { Play, Search } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FeaturedCard from "../components/FeaturedCards"

export default function PortfolioPage() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres")
  const [searchTerm, setSearchTerm] = useState("")

  const [activeVideoId, setActiveVideoId] = useState(null);

  const genres = ["All Genres", "Electronic", "Hip-Hop", "Orchestral", "Rock", "Pop", "Acoustic"]

  // const projects = [
  //   {
  //     id: 1,
  //     title: "Galactic Groove",
  //     artist: "Starlight Spirits",
  //     genre: "Electronic",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  //   {
  //     id: 2,
  //     title: "City Echoes",
  //     artist: "Phantom Renegades",
  //     genre: "Hip-Hop",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  //   {
  //     id: 3,
  //     title: "Whispers in the Wind",
  //     artist: "Epic Soundscapes",
  //     genre: "Orchestral",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  //   {
  //     id: 4,
  //     title: "Rock Anthem",
  //     artist: "Vintage Vultures",
  //     genre: "Rock",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  //   {
  //     id: 5,
  //     title: "Pop Fusion",
  //     artist: "Neon Nights",
  //     genre: "Pop",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  //   {
  //     id: 6,
  //     title: "Deep House Vibe",
  //     artist: "Midnight Collective",
  //     genre: "Electronic",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  //   {
  //     id: 7,
  //     title: "Indie Ballads",
  //     artist: "Acoustic Soul",
  //     genre: "Acoustic",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  //   {
  //     id: 8,
  //     title: "Trap Flow",
  //     artist: "Urban Beats",
  //     genre: "Hip-Hop",
  //     image: "/placeholder.svg?height=300&width=400",
  //     audioUrl: "#",
  //   },
  // ]

  const projects = [
  {
    id: 1,
    title: "Ijazat | Falak Shabir | Cover by Parkedium Singh | Karan Chanchal | Raj Gautam",
    subtitle: "Check out this demo",
    category: "Tech",
    image: "/sample.jpg",
    videoUrl: "https://www.youtube.com/watch?v=SIRq3lFhhLM&list=RDSIRq3lFhhLM"
  },
  {
    id: 2,
    title: "Distance Love | Zehr Vibe | Cover By Karan Chanchal | New Punjabi Song 2021 | Raj Gautam",
    subtitle: "Check out this demo",
    category: "Tech",
    image: "/sample.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Bonb4frD6Is"
  },
  {
    id: 3,
    title: "Raataan Lambiyan | Shershaah | Cover By Karan Chanchal | Raj Gautam | Jubin Nautiyal",
    subtitle: "Bhangra • T‑Series Punjabi • High‑Energy Beats",
    image: "/placeholder.svg?height=300&width=400",
    category: "Punjabi",
    videoUrl: "https://www.youtube.com/watch?v=CroB4vb9Tz4"
  },
  {
    id: 4,
    title: "Chhale (Official Video) | Raj Gautam | Rabia | New Punjabi Song 2021 | Latest Punjabi Song 2021",
    subtitle: "Bollywood • T‑Series • Soulful Romance",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindi",
    videoUrl: "https://www.youtube.com/watch?v=0ZS8hDW49Ak"
  },
  {
    id: 5,
    title: "Pardesi Pardesi Jana Nahi | Udit Narayan | Cover By Raj Gautam | Alka Yagnik",
    subtitle: "Bhojpuri • T‑Series Bhojpuri • Party Anthem",
    image: "/placeholder.svg?height=300&width=400",
    category: "Bhojpuri",
    videoUrl: "https://www.youtube.com/watch?v=0gG2qj_UV3M"
  },
  {
    id: 6,
    title: "Jhol | Coke Studio Pakistan | Season 15 | Maanu x Annural Khalid",
    subtitle: "Bhojpuri • T‑Series Bhojpuri • Party Anthem",
    image: "/placeholder.svg?height=300&width=400",
    category: "Bhojpuri",
    videoUrl: "https://www.youtube.com/watch?v=-2RAq5o5pwc&list=RDSIRq3lFhhLM"
  },
  {
    id: 7,
    title: "HATH CHUMME - AMMY VIRK (Official Video) B Praak | Jaani | Arvindr Khaira | DM",
    subtitle: "Hindi • T-Series • Emotional Ballad",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindi",
    videoUrl: "https://www.youtube.com/watch?v=Y1ixFdnkITg&list=RDY1ixFdnkITg"
  },
  {
    id: 8,
    title: "Heere Moti (Official Video) : Kadir Thind | Desi Routz | Latest Punjabi Songs 2018",
    subtitle: "Hindi • Romantic Hit • T-Series",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindi",
    videoUrl: "https://www.youtube.com/watch?v=jhfmqGZ13mI&list=RDjhfmqGZ13mI"
  },
  {
    id: 9,
    title: "Lehanga | Jass Manak | Latest Punjabi Song 2020",
    subtitle: "Punjabi • Pop Vibes • Geet MP3",
    image: "/placeholder.svg?height=300&width=400",
    category: "Punjabi",
    videoUrl: "https://www.youtube.com/watch?v=RKioDWlajvo&list=RDRKioDWlajvo"
  },
  {
    id: 10,
    title: "Baarish Ban Jaana (Official Video) Payal Dev, Stebin Ben",
    subtitle: "Punjabi • Dance • Bollywood",
    image: "/placeholder.svg?height=300&width=400",
    category: "Punjabi",
    videoUrl: "https://www.youtube.com/watch?v=KVh4KtUSW3A&list=RDKVh4KtUSW3A"
  },
  {
    id: 11,
    title: "Sanam Teri Kasam - Palak M | Himesh Reshammiya",
    subtitle: "Bhojpuri • Dance Anthem • T-Series Bhojpuri",
    image: "/placeholder.svg?height=300&width=400",
    category: "Bhojpuri",
    videoUrl: "https://www.youtube.com/watch?v=kKljXVVkgS4&list=RDkKljXVVkgS4"
  },
  {
    id: 12,
    title: "Tera Chehra Sanam Teri Kasam - Himesh Reshammiya | Arijit Singh",
    subtitle: "Bollywood • Dance Track • T-Series",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindi",
    videoUrl: "https://www.youtube.com/watch?v=LOmC1dlZ2BE&list=RDLOmC1dlZ2BE"
  },
  {
    id: 13,
    title: "Wakhra Swag | Official Video | Navv Inder feat. Badshah",
    subtitle: "Hindi • Romantic Monsoon Song • T-Series",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindi",
    videoUrl: "https://www.youtube.com/watch?v=iMdH_G4N9nY&list=PLUizURIiEsVlrrZ7OzNXgdAiBsy7UL7tl"
  },
  {
    id: 14,
    title: "Harrdy Sandhu - Naa Ji Naa | Latest Punjabi Romantic Song 2015",
    subtitle: "Punjabi • Bollywood Party • T-Series",
    image: "/placeholder.svg?height=300&width=400",
    category: "Punjabi",
    videoUrl: "https://www.youtube.com/watch?v=pDtWeGp7KdI&list=RDpDtWeGp7KdI"
  },
  {
    id: 15,
    title: "Proper Patola - Official Video | Diljit Dosanjh | Badshah",
    subtitle: "Hindi • Evergreen • Bollywood Classic",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindi",
    videoUrl: "https://www.youtube.com/watch?v=GVhmynWOPoM&list=RDGVhmynWOPoM"
  },
  {
    id: 16,
    title: "Mercy - Badshah Feat. Lauren Gottlieb | Official Music Video | Latest Hit Song 2017",
    subtitle: "Bhojpuri • Viral Classic • T-Series Bhojpuri",
    // image: "/placeholder.svg?height=300&width=400",
    category: "Bhojpuri",
    videoUrl: "https://www.youtube.com/watch?v=Jyst8oIHOAY&list=RDJyst8oIHOAY"
  }
];

  const testimonials = [
    {
      quote:
        "Sound Studio Showcase transformed our raw tracks into a polished masterpiece. Their attention to detail and creative input were unparalleled. Highly recommend for any serious artist!",
      author: "Luna Echo",
      role: "Lead Vocalist, Cosmic Tribe",
    },
    {
      quote:
        "The mixing and mastering services were exceptional. Our album sounds incredible - every nuance and exactly what we envisioned. True professionals!",
      author: "Max Riff",
      role: "Producer, Star Makers",
    },
    {
      quote:
        "We collaborated on a complex orchestral score, and Sound Studio Showcase delivered beyond expectations. Their sound design team is truly innovative.",
      author: "Dr. Evelyn Croft",
      role: "Film Composer, Cinematic Universe",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesGenre = selectedGenre === "All Genres" || project.genre === selectedGenre
    const matchesSearch =
      project?.title?.toLowerCase().includes(searchTerm?.toLowerCase()) // ||
      // project.artist.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesGenre && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1600')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Signature Sound: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                The Anthem of Tomorrow
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dive into our latest projects and discover the soundscapes that define the future of music.
            </p>

            {/* Featured Track Player */}
            <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-4">
                <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Play className="w-6 h-6 ml-1" />
                </button>
                <div className="flex-1">
                  <p className="font-semibold">The Anthem of Tomorrow</p>
                  <p className="text-gray-400 text-sm">Future Collective</p>
                </div>
                <div className="text-sm text-gray-400">3:42</div>
              </div>
              <div className="mt-4 bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
              </div>
            </div>

            <Link to="/contact">
              <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Explore The Project
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedGenre === genre ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Creative Endeavors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProjects.map((project,index) => (
               <FeaturedCard key={index}
                project={project}
                activeVideoId={activeVideoId}
                setActiveVideoId={setActiveVideoId}
              />
              // <div
              //   key={project.id}
              //   className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              // >
              //   <div className="relative group">
              //     <img
              //       src={project.image || "/placeholder.svg"}
              //       alt={project.title}
              //       className="w-full h-48 object-cover"
              //     />
              //     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              //       <button className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              //         <Play className="w-8 h-8 ml-1" />
              //       </button>
              //     </div>
              //   </div>
              //   <div className="p-6">
              //     <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              //     <p className="text-gray-400 text-sm mb-3">{project.artist}</p>
              //     <span className="inline-block px-3 py-1 bg-gray-700 text-xs rounded-full">{project.genre}</span>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Amplify Your Vision?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're an emerging artist or a seasoned professional, Sound Studio Showcase is here to bring your
            musical dreams to life. Let's create something extraordinary together.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
              Start Your Project Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
