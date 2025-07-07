"use client"

import { ChevronLeft, Home, Upload, Music, Users, Folder, FileText, Settings } from "lucide-react"
import { useState, useEffect } from "react"

const navigationItems = [
  { title: "Dashboard", icon: Home, active: false, href: "/dashboard" },
  { title: "Upload Project", icon: Upload, active: true, href: "/upload" },
  { title: "Music Library", icon: Music, active: false, href: "/library" },
  { title: "Artists", icon: Users, active: false, href: "/artists" },
  { title: "Genres", icon: Folder, active: false, href: "/genres" },
  { title: "Reports", icon: FileText, active: false, href: "/reports" },
  { title: "Settings", icon: Settings, active: false, href: "/settings" },
]


export default function Sidebar({ isMobileOpen = false, onMobileClose }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileOpen && onMobileClose) {
        const sidebar = document.getElementById("mobile-sidebar")
        const target = event.target
        if (sidebar && !sidebar.contains(target)) {
          onMobileClose()
        }
      }
    }

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scroll when mobile sidebar is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileOpen, onMobileClose])

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden" onClick={onMobileClose} />
      )}

      {/* Desktop Sidebar */}
      <div
        className={`fixed left-0 top-[50px] h-[calc(100vh-50px)] bg-black/20 backdrop-blur-md border-r border-white/10 transition-all duration-300 z-10 ${
          sidebarCollapsed ? "w-16" : "w-64"
        } hidden md:block`}
      >
        <div className="p-4 h-full flex flex-col">
          <nav className="space-y-2 flex-1">
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

          <div className="mt-auto pt-6 border-t border-white/10">
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

      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        className={`fixed left-0 top-[50px] h-[calc(100vh-50px)] w-64 bg-black/20 backdrop-blur-md border-r border-white/10 transition-transform duration-300 z-40 md:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <nav className="space-y-2 flex-1">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={onMobileClose}
                className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${
                  item.active
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="ml-3 font-medium">{item.title}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="text-center text-gray-400 text-sm">
              <p>TuneStudio Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
