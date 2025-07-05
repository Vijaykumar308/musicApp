import { Play, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FeaturedCard from "../components/FeaturedCards"
import { useState } from "react"

export default function HomePage() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const featuredProjects = [
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
  ]

  const services = [
    {
      title: "Music Production",
      description: "From concept to completion, we craft your sound with precision and passion.",
    },
    {
      title: "Mixing & Mastering",
      description: "Expert engineers meticulously balance and enhance every element of your music.",
    },
    {
      title: "Sound Design",
      description: "Create unique auditory experiences for film, games, and multimedia projects.",
    },
    {
      title: "Artist Development",
      description: "Guidance and resources to help shape your artistic vision and career.",
    },
  ]

  const testimonials = [
    // {
    //   quote:
    //     "Sound Studio Showcase transformed my demo into a masterpiece. Their attention to detail and creative input are unparalleled.",
    //   author: "Luna Echo",
    //   role: "Lead Vocalist, Cosmic Tribe",
    // },
    {
      quote:
        "The mixing and mastering services are top-notch. My tracks have never sounded this professional and impactful.",
      author: "DJ Beatflow",
      role: "Electronic Producer",
    },
    {
      quote:
        "Their sound design for our game was revolutionary. It truly brought the virtual world to life. Highly recommend!",
      author: "GameCraft Studios",
      role: "Creative Director",
    },
    {
      quote:
        "Working with Sound Studio Showcase on our film's design was a game-changer. The quality and creativity were outstanding.",
      author: "Marcus Chen",
      role: "Film Director",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ignite Your Sound.
            <br />
            Create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Masterpieces
            </span>
            .
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your musical vision into reality with our cutting-edge production, mixing, and sound design
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Get a Quote
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Explore Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
             <FeaturedCard key={index}
                project={project}
                activeVideoId={activeVideoId}
                setActiveVideoId={setActiveVideoId}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <button className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-lg">
                <div className="text-blue-400 text-6xl mb-4 font-bold">"</div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Next Hit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Sound Studio Showcase and let's turn your musical dreams into reality. Get in touch today.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
