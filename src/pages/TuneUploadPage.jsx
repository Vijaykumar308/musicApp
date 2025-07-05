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
  ImageIcon,
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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Sonic Canvas</span>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              <button className="px-4 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
                Dashboard
              </button>
              <button className="px-4 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
                Analytics
              </button>
              <button className="px-4 py-2 text-white bg-violet-600 rounded-lg font-medium">Upload</button>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-semibold">SB</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`bg-slate-900/50 backdrop-blur-sm border-r border-slate-800 transition-all duration-300 ${
            sidebarCollapsed ? "w-20" : "w-72"
          } hidden md:block sticky top-[73px] h-[calc(100vh-73px)]`}
        >
          <div className="p-4">
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                    item.active
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                  }`}
                  title={sidebarCollapsed ? item.title : ""}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span className="ml-3 font-medium">{item.title}</span>}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-full flex items-center px-4 py-3 text-slate-500 hover:text-slate-300 transition-colors rounded-xl hover:bg-slate-800/50"
                title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                <ChevronLeft
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    sidebarCollapsed ? "rotate-180" : ""
                  }`}
                />
                {!sidebarCollapsed && <span className="ml-3 font-medium">Collapse Sidebar</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row min-h-[calc(100vh-73px)]">
          {/* Upload Form */}
          <div className="flex-1 p-6 lg:p-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 max-w-3xl mx-auto">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Upload New Music Project</h1>
                  <p className="text-slate-400 text-sm">
                    Fill out the details below to add a new track to your library.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">Track Title</label>
                    <input
                      type="text"
                      name="trackTitle"
                      value={formData.trackTitle}
                      onChange={handleInputChange}
                      placeholder="e.g., Neon Serenade"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">Artist Name</label>
                    <input
                      type="text"
                      name="artistName"
                      value={formData.artistName}
                      onChange={handleInputChange}
                      placeholder="e.g., AuraFlow"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">Genre</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white"
                  >
                    <option value="" className="text-slate-500">
                      Select a genre
                    </option>
                    <option value="electronic">Electronic</option>
                    <option value="hip-hop">Hip Hop</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="jazz">Jazz</option>
                    <option value="ambient">Ambient</option>
                    <option value="classical">Classical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">Audio File</label>
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-violet-500 transition-colors bg-slate-800/20">
                    <div className="w-16 h-16 bg-violet-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-violet-400" />
                    </div>
                    <p className="text-slate-300 mb-2 font-medium">Drag & drop audio file or click to browse</p>
                    <p className="text-slate-500 text-sm">Max file size: 50MB</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">Cover Art</label>
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-violet-500 transition-colors bg-slate-800/20">
                    <div className="w-16 h-16 bg-violet-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <ImageIcon className="w-8 h-8 text-violet-400" />
                    </div>
                    <p className="text-slate-300 mb-2 font-medium">Drag & drop cover art or click to browse</p>
                    <p className="text-slate-500 text-sm">Max file size: 50MB</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Provide a detailed description of the track, inspiration, or production notes."
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-slate-500 resize-none transition-all"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    className="flex-1 py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl font-semibold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-violet-600/25"
                  >
                    Upload Project
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-96 p-6 space-y-6">
            {/* Recent Uploads */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Recent Uploads</h3>
                  <p className="text-xs text-slate-400">Your latest music projects at a glance.</p>
                </div>
              </div>

              <div className="space-y-3">
                {recentUploads.slice(0, 6).map((upload, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-sm text-white truncate">{upload.title}</div>
                        <div className="text-xs text-slate-400 truncate">{upload.artist}</div>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-lg font-medium whitespace-nowrap ml-2 ${
                        upload.status === "Live"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {upload.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Tasks */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Studio Tasks</h3>
                  <p className="text-xs text-slate-400">Important actions requiring your attention.</p>
                </div>
              </div>

              <div className="space-y-3">
                {studioTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-xl">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        task.priority === "high"
                          ? "bg-red-400"
                          : task.priority === "medium"
                            ? "bg-amber-400"
                            : "bg-emerald-400"
                      }`}
                    />
                    <p className="text-sm text-slate-300 flex-1 leading-relaxed">{task.task}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-amber-400">Quick Actions</h3>
                <p className="text-xs text-slate-400">Jump to key sections of your studio.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="h-20 flex flex-col items-center justify-center bg-slate-800/30 hover:bg-slate-800/50 rounded-xl transition-all group"
                  >
                    <action.icon className="w-5 h-5 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors text-center font-medium">
                      {action.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Usage */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Storage Usage</h3>
                  <p className="text-xs text-slate-400">Overview of your current cloud storage capacity.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full w-[45%] shadow-lg shadow-violet-600/25"></div>
                </div>
                <p className="text-sm text-slate-300 font-medium">45% of 1TB used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
