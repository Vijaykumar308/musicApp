"use client"

import { useState } from "react"
import {
  Upload,
  Music,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  Clock,
  AlertCircle,
  Search,
  Bell,
  FileText,
  Folder,
  Image,
  Home,
} from "lucide-react"

export default function TuneUploadPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
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

  const recentUploads = [
    { title: "Neon Serenade", artist: "AuraFlow", status: "Live", genre: "Electronic" },
    { title: "Synthwave Dreams", artist: "EchoPulse", status: "Processing", genre: "Electronic" },
    { title: "Urban Rhapsody", artist: "GrooveArchitect", status: "Live", genre: "Hip-Hop" },
    { title: "Digital Odyssey", artist: "BinaryBeats", status: "Live", genre: "Electronic" },
    { title: "Quantum Harmonies", artist: "Sonic Alchemist", status: "Processing", genre: "Ambient" },
    { title: "Midnight Bloom", artist: "Celeste", status: "Live", genre: "Pop" },
  ]

  const studioTasks = [
    { task: 'Review pending master for "Future Echoes"', priority: "high" },
    { task: 'Approve cover art for "Starlight Symphony"', priority: "medium" },
    { task: "Categorize new ambient submissions", priority: "low" },
    { task: 'Check listener feedback on "Groove Catalyst"', priority: "medium" },
  ]

  const quickActions = [
    { title: "Manage Artists", icon: Users },
    { title: "Browse Library", icon: Music },
    { title: "View Analytics", icon: BarChart3 },
    { title: "Settings", icon: Settings },
  ]

  const navigationItems = [
    { title: "Dashboard", icon: Home, active: false },
    { title: "Upload Project", icon: Upload, active: true },
    { title: "Music Library", icon: Music, active: false },
    { title: "Artists", icon: Users, active: false },
    { title: "Genres", icon: Folder, active: false },
    { title: "Reports", icon: FileText, active: false },
    { title: "Settings", icon: Settings, active: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sonic Canvas
                </span>
                <div className="text-xs text-purple-300 font-medium">Studio</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-all rounded-lg hover:bg-white/10">
                Dashboard
              </button>
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-all rounded-lg hover:bg-white/10">
                Analytics
              </button>
              <button className="px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium shadow-lg">
                Upload
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10 relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-semibold">SB</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`bg-black/20 backdrop-blur-md border-r border-white/10 transition-all duration-300 ${
            sidebarCollapsed ? "w-16" : "w-64"
          } hidden md:block`}
        >
          <div className="p-4">
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${
                    item.active 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" 
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  title={sidebarCollapsed ? item.title : ""}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span className="ml-3 font-medium">{item.title}</span>}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-full flex items-center px-3 py-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                <ChevronLeft
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    sidebarCollapsed ? "rotate-180" : ""
                  }`}
                />
                {!sidebarCollapsed && <span className="ml-3 font-medium">Collapse</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row">
          {/* Upload Form */}
          <div className="flex-1 p-6 lg:p-8">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Upload New Music Project
                  </h1>
                  <p className="text-gray-300 mt-1">
                    Create and share your musical masterpiece with the world
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <option value="" className="bg-gray-800">Select a genre</option>
                    <option value="electronic" className="bg-gray-800">Electronic</option>
                    <option value="hip-hop" className="bg-gray-800">Hip Hop</option>
                    <option value="rock" className="bg-gray-800">Rock</option>
                    <option value="pop" className="bg-gray-800">Pop</option>
                    <option value="jazz" className="bg-gray-800">Jazz</option>
                    <option value="ambient" className="bg-gray-800">Ambient</option>
                    <option value="classical" className="bg-gray-800">Classical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Audio File</label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-purple-400 transition-all bg-white/5 backdrop-blur-sm group">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <Upload className="w-10 h-10 text-purple-400" />
                    </div>
                    <p className="text-white mb-2 font-medium text-lg">Drag & drop audio file or click to browse</p>
                    <p className="text-gray-400 text-sm">Supported formats: MP3, WAV, FLAC • Max size: 50MB</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Cover Art</label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-purple-400 transition-all bg-white/5 backdrop-blur-sm group">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <Image className="w-10 h-10 text-purple-400" />
                    </div>
                    <p className="text-white mb-2 font-medium text-lg">Drag & drop cover art or click to browse</p>
                    <p className="text-gray-400 text-sm">Recommended: 1000x1000px • Formats: JPG, PNG • Max size: 10MB</p>
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

          {/* Right Sidebar */}
          <div className="w-full xl:w-80 p-6 space-y-6">
            {/* Recent Uploads */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Recent Uploads</h3>
                  <p className="text-xs text-gray-400">Your latest projects</p>
                </div>
              </div>

              <div className="space-y-3">
                {recentUploads.slice(0, 5).map((upload, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-sm text-white truncate group-hover:text-purple-300 transition-colors">
                          {upload.title}
                        </div>
                        <div className="text-xs text-gray-400 truncate">{upload.artist}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium whitespace-nowrap ${
                          upload.status === "Live" 
                            ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}
                      >
                        {upload.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Tasks */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Pending Tasks</h3>
                  <p className="text-xs text-gray-400">Actions needed</p>
                </div>
              </div>

              <div className="space-y-3">
                {studioTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <div
                      className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                        task.priority === "high"
                          ? "bg-red-400 shadow-lg shadow-red-400/50"
                          : task.priority === "medium"
                            ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                            : "bg-green-400 shadow-lg shadow-green-400/50"
                      }`}
                    />
                    <p className="text-sm text-gray-200 flex-1 leading-relaxed">{task.task}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white">Quick Actions</h3>
                <p className="text-xs text-gray-400">Navigate your studio</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="h-20 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-lg transition-all group border border-white/10 hover:border-purple-400/50"
                  >
                    <action.icon className="w-6 h-6 mb-2 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center font-medium">
                      {action.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Usage */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Storage</h3>
                  <p className="text-xs text-gray-400">Cloud capacity</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full w-[45%] shadow-lg"></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-300 font-medium">450GB used</p>
                  <p className="text-sm text-gray-400">of 1TB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}