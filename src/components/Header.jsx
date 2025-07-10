"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold">{import.meta.env.VITE_LOGO}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-blue-400 transition-colors ${isActive("/") ? "text-blue-400" : ""}`}>
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`hover:text-blue-400 transition-colors ${isActive("/portfolio") ? "text-blue-400" : ""}`}
            >
              Portfolio
            </Link>
            <Link
              to="/services"
              className={`hover:text-blue-400 transition-colors ${isActive("/services") ? "text-blue-400" : ""}`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`hover:text-blue-400 transition-colors ${isActive("/contact") ? "text-blue-400" : ""}`}
            >
              Contact
            </Link>
            <Link
              to="/admin/dashboard"
              className={`hover:text-blue-300 transition-colors ${
                isActive("/admin") ? "text-blue-400" : "text-blue-400"
              }`}
            >
              Admin
            </Link>
          </nav>

          {/* User Profile */}
          <div className="hidden md:flex items-center">
            <Link to="/admin/dashboard" className="mr-4">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                admin
              </button>
            </Link>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`hover:text-blue-400 transition-colors ${isActive("/") ? "text-blue-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className={`hover:text-blue-400 transition-colors ${isActive("/portfolio") ? "text-blue-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                className={`hover:text-blue-400 transition-colors ${isActive("/services") ? "text-blue-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`hover:text-blue-400 transition-colors ${isActive("/contact") ? "text-blue-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/admin"
                className={`hover:text-blue-300 transition-colors ${
                  isActive("/admin") ? "text-blue-400" : "text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
              <Link
                to="/upload"
                className={`hover:text-blue-400 transition-colors ${isActive("/upload") ? "text-blue-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Upload
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
