"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, MessageSquare, Headphones, Users } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import cardLogo from "../assets/card-image.jpg"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Message sent:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch with Sound Studio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're eager to hear about your next project, answer any questions, or simply chat about your music needs.
            Reach out to us.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg">Nashville, TN, USA</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <span className="text-lg">hello@soundstudios.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">Have a question or a project idea? We'd love to hear from you.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's your inquiry about?"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your project or question..."
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Studio Info & Location */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Our Studio & Location</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>123 Melody Lane, Music City, Nashville, TN 37203</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>info@soundstudioshowcase.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>

                {/* Studio Image Placeholder */}
                <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center mb-6">
                  <img
                    src={cardLogo}
                    alt="Sound Studio Interior"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Sound Studio Showcase?</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="font-bold mb-2">Expert Engineering</h4>
                    <p className="text-gray-400 text-sm">
                      Our experienced engineers bring years of passion and precision to every project.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Headphones className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="font-bold mb-2">State-of-Art Equipment</h4>
                    <p className="text-gray-400 text-sm">
                      Access to top-tier vintage and modern gear for unparalleled sound quality.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="font-bold mb-2">Collaborative Process</h4>
                    <p className="text-gray-400 text-sm">
                      We work closely with artists, fostering a creative journey from concept to final master.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Follow our journey, get studio updates, and see behind-the-scenes content on our social channels.
          </p>

          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">𝕏</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">📷</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">🎵</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
