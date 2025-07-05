"use client"

import { useState } from "react"
import { Upload, Music, BarChart3, Users, Settings, ChevronLeft, Clock, AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function UploadPage() {
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

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 border-r border-gray-700 transition-all duration-300 ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {!sidebarCollapsed && (
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                  <Music className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">Sonic Canvas</span>
              </Link>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-gray-400 hover:text-white p-1 rounded"
            >
              <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`} />
            </button>
          </div>

          <nav className="space-y-2">
            <Link
              to="/"
              className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <BarChart3 className="w-4 h-4 mr-3" />
              {!sidebarCollapsed && "Dashboard"}
            </Link>
            <div className="w-full flex items-center px-3 py-2 bg-purple-600 text-white rounded-lg">
              <Upload className="w-4 h-4 mr-3" />
              {!sidebarCollapsed && "Upload Project"}
            </div>
            <Link
              to="/portfolio"
              className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Music className="w-4 h-4 mr-3" />
              {!sidebarCollapsed && "Music Library"}
            </Link>
            <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <Users className="w-4 h-4 mr-3" />
              {!sidebarCollapsed && "Artists"}
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <Music className="w-4 h-4 mr-3" />
              {!sidebarCollapsed && "Genres"}
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <BarChart3 className="w-4 h-4 mr-3" />
              {!sidebarCollapsed && "Reports"}
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <Settings className="w-4 h-4 mr-3" />
              {!sidebarCollapsed && "Settings"}
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Upload Form */}
        <div className="flex-1 p-8">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl">
            <div className="flex items-center space-x-2 text-purple-400 mb-4">
              <Upload className="w-5 h-5" />
              <h1 className="text-2xl font-bold">Upload New Music Project</h1>
            </div>
            <p className="text-gray-400 mb-8">Fill out the details below to add a new track to your library.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Track Title</label>
                <input
                  type="text"
                  name="trackTitle"
                  value={formData.trackTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Neon Serenade"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Artist Name</label>
                <input
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleInputChange}
                  placeholder="e.g., AuraFlow"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Genre</label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                >
                  <option value="">Select a genre</option>
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
                <label className="block text-sm font-medium mb-2">Audio File</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 mb-2">Drag & drop audio file or click to browse</p>
                  <p className="text-gray-500 text-sm">Max file size: 50MB</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cover Art</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                  <div className="w-12 h-12 bg-purple-600 rounded mx-auto mb-4 flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-400 mb-2">Drag & drop cover art or click to browse</p>
                  <p className="text-gray-500 text-sm">Max file size: 50MB</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide a detailed description of the track, inspiration, or production notes."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                >
                  Upload Project
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 space-y-6">
          {/* Recent Uploads */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4 text-yellow-400" />
              <h3 className="text-lg font-bold">Recent Uploads</h3>
            </div>
            <p className="text-xs text-gray-400 mb-4">Your latest music projects at a glance.</p>

            <div className="space-y-3">
              {recentUploads.map((upload, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                      <Music className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{upload.title}</div>
                      <div className="text-xs text-gray-400">{upload.artist}</div>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      upload.status === "Live" ? "bg-green-600" : "bg-yellow-600"
                    }`}
                  >
                    {upload.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Tasks */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="w-4 h-4 text-yellow-400" />
              <h3 className="text-lg font-bold">Studio Tasks</h3>
            </div>
            <p className="text-xs text-gray-400 mb-4">Important actions requiring your attention.</p>

            <div className="space-y-3">
              {studioTasks.map((task, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  />
                  <p className="text-sm text-gray-300 flex-1">{task.task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Actions</h3>
            <p className="text-xs text-gray-400 mb-4">Jump to key sections of your studio.</p>

            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="h-16 flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <action.icon className="w-5 h-5 mb-1" />
                  <span className="text-xs">{action.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Storage Usage */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <h3 className="text-lg font-bold">Storage Usage</h3>
            </div>
            <p className="text-xs text-gray-400 mb-4">Overview of your current cloud storage capacity.</p>

            <div className="space-y-3">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full w-[45%]"></div>
              </div>
              <p className="text-sm text-gray-400">45% of 1TB used</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold">Sonic Canvas Studios</h3>
            <p className="text-gray-400 text-sm mb-4">Stay Tuned for Updates</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email for exclusive studio news"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-500 text-white"
              />
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs">
            <p>© 2023 Sonic Canvas Studios.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
