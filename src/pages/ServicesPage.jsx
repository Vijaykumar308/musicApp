"use client"

import { useState } from "react"
import { Music, Headphones, AudioWaveformIcon as Waveform, Mic, Users, Award } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FAQSection from "../components/FAQSection"

export default function ServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const services = [
    {
      icon: Music,
      title: "Music Production",
      description:
        "From concept to completion, we craft your sound with precision and passion. Our comprehensive approach includes songwriting assistance, arrangement, and full production services.",
      features: ["Songwriting Support", "Arrangement & Composition", "Full Production", "Creative Direction"],
    },
    {
      icon: Headphones,
      title: "Mixing & Mastering",
      description:
        "Our expert engineers meticulously balance and enhance every element of your music. We ensure your tracks sound perfect across all platforms and playback systems.",
      features: ["Professional Mixing", "Audio Mastering", "Stem Preparation", "Format Optimization"],
    },
    {
      icon: Waveform,
      title: "Sound Design",
      description:
        "Create immersive sonic landscapes for film, games, and multimedia projects. Our sound design team crafts unique audio experiences that captivate audiences.",
      features: ["Film Scoring", "Game Audio", "Podcast Production", "Commercial Audio"],
    },
    {
      icon: Mic,
      title: "Custom Compositions",
      description:
        "Original music tailored to your project's unique needs. Whether it's a commercial jingle or a full orchestral score, we bring your narrative to life with bespoke audio.",
      features: ["Commercial Jingles", "Film Scores", "Brand Audio", "Custom Arrangements"],
    },
    {
      icon: Users,
      title: "Podcast Production",
      description:
        "Full-service podcast production from recording to distribution. We handle the technical aspects so you can focus on creating compelling content.",
      features: ["Recording Services", "Audio Editing", "Distribution Setup", "Branding & Intro Music"],
    },
    {
      icon: Award,
      title: "Voice Over Recording",
      description:
        "Professional voice recording services in our acoustically treated studios. We provide clear, compelling narration that connects with your audience.",
      features: ["Narration Recording", "Commercial VO", "Audiobook Production", "Character Voices"],
    },
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: "Creative Collaboration",
      description:
        "We believe in a partnership approach. Our team works closely with your artists, artists to bring your vision to life.",
    },
    {
      icon: Headphones,
      title: "Cutting-Edge Equipment",
      description: "Our studio boasts the latest technology alongside classic vintage gear for an unparalleled sound.",
    },
    {
      icon: Award,
      title: "Experienced Engineers",
      description:
        "Our team comprises seasoned professionals with years of experience across multiple music industry segments and have worked with top-tier artists.",
    },
    {
      icon: Music,
      title: "Award-Winning Quality",
      description:
        "Committed to delivering projects that not only meet but exceed industry standards and have earned recognition.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Sound Studio Showcase transformed my demo into a masterpiece. Their attention to detail and creative approach is unparalleled.",
      author: "Jane Skye",
      role: "Singer-Songwriter",
    },
    {
      quote:
        "The mixing and mastering services are exceptional. My tracks have never sounded this professional and impactful. They captured the exact feel I was looking for.",
      author: "DJ Beatflow",
      role: "Electronic Producer",
    },
    {
      quote:
        "Working with Sound Studio Showcase on our film's design was a game-changer. The quality and creativity were absolutely phenomenal. Their sound design brought our vision to life.",
      author: "Anya Sharma",
      role: "Film Director",
    },
    {
      quote:
        "The team provided a seamless experience from start to finish. The final product exceeded all our expectations, giving our tracks the professional edge they needed to compete in today's market.",
      author: "Marcus 'The Groove' King",
      role: "Hip-Hop Artist",
    },
  ]

  const faqs = [
    {
      question: "What genres do you specialize in?",
      answer:
        "We work across all genres including pop, rock, electronic, hip-hop, jazz, classical, and more. Our diverse team of engineers and producers brings expertise in various musical styles.",
    },
    {
      question: "How long does a typical production take?",
      answer:
        "Production timelines vary depending on the project scope. A single track typically takes 2-4 weeks, while full albums can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We typically require 50% upfront with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments to accommodate your budget.",
    },
    {
      question: "Do you offer remote collaboration?",
      answer:
        "Yes! We offer remote collaboration services including online mixing, mastering, and production consultations. We use high-quality file sharing and real-time collaboration tools.",
    },
    {
      question: "Can I visit the studio before booking?",
      answer:
        "We encourage potential clients to visit our facility. Contact us to schedule a studio tour and meet our team. We're proud to show off our space and equipment.",
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Amplify Your Vision <br />
            with Unmatched{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Sound</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your audio projects with our cutting-edge production, mixing, and sound design expertise.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Get a Quote Today
            </button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Clients Choose Sound Studio Showcase</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="text-blue-400 text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic text-sm">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQSection  key={index} faqs={faqs}/>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Sound?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're an emerging artist or an established professional, our team is ready to bring your audio
            vision to life. Let's discuss your project and make some magic happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-purple-900 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
                Start Your Project Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-purple-900 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
