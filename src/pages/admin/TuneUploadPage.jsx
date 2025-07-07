"use client"

import { useState } from "react"
import { Upload, ImageIcon } from "lucide-react"
import Header from "../../components/admin/Header"
import Sidebar from "../../components/admin/Sidebar"

export default function TuneUploadPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    trackTitle: "",
    artistName: "",
    genre: "",
    description: "",
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
    console.log("Upload submitted:", formData)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header onMobileMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />

      <div className="flex">
        <Sidebar isMobileOpen={isMobileMenuOpen} onMobileClose={closeMobileMenu} />

        {/* Main Content */}
        <div className="flex-1 ml-0 md:ml-64 transition-all duration-300 pt-[50px]">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 p-4 md:p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Upload New Music Project
                  </h1>
                  <p className="text-gray-300 mt-1 text-sm md:text-base">
                    Create and share your musical masterpiece with the world
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Track Title</label>
                    <input
                      type="text"
                      name="trackTitle"
                      value={formData.trackTitle}
                      onChange={handleInputChange}
                      placeholder="e.g., Neon Serenade"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Artist Name</label>
                    <input
                      type="text"
                      name="artistName"
                      value={formData.artistName}
                      onChange={handleInputChange}
                      placeholder="e.g., AuraFlow"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Genre</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                  >
                    <option value="" className="bg-gray-800">
                      Select a genre
                    </option>
                    <option value="electronic" className="bg-gray-800">
                      Electronic
                    </option>
                    <option value="hip-hop" className="bg-gray-800">
                      Hip Hop
                    </option>
                    <option value="rock" className="bg-gray-800">
                      Rock
                    </option>
                    <option value="pop" className="bg-gray-800">
                      Pop
                    </option>
                    <option value="jazz" className="bg-gray-800">
                      Jazz
                    </option>
                    <option value="ambient" className="bg-gray-800">
                      Ambient
                    </option>
                    <option value="classical" className="bg-gray-800">
                      Classical
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Audio File</label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-6 md:p-8 text-center hover:border-purple-400 transition-all bg-white/5 backdrop-blur-sm group">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <Upload className="w-8 md:w-10 h-8 md:h-10 text-purple-400" />
                    </div>
                    <p className="text-white mb-2 font-medium text-base md:text-lg">
                      Drag & drop audio file or click to browse
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Supported formats: MP3, WAV, FLAC • Max size: 50MB
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Cover Art</label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-6 md:p-8 text-center hover:border-purple-400 transition-all bg-white/5 backdrop-blur-sm group">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <ImageIcon className="w-8 md:w-10 h-8 md:h-10 text-purple-400" />
                    </div>
                    <p className="text-white mb-2 font-medium text-base md:text-lg">
                      Drag & drop cover art or click to browse
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Recommended: 1000x1000px • Formats: JPG, PNG • Max size: 10MB
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell the story behind your track. What inspired you? What's the vibe? Share your creative process..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all backdrop-blur-sm border border-white/20"
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all shadow-lg"
                  >
                    Upload & Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
