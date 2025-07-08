"use client"
import { Search, Bell, User, Menu, X, Undo2 } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header({ onMobileMenuToggle, isMobileMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 h-[50px] bg-black/20 backdrop-blur-md border-b border-white/10 z-20">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Mobile menu button + Logo */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">TuneStudio</span>
          </div>
        </div>

        {/* Center - Search (hidden on small screens) */}
        {/* <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tracks, artists, genres..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 text-sm"
            />
          </div>
        </div> */}

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2">
          {/* Search button for mobile */}
          {/* <button className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
            <Search className="w-5 h-5" />
          </button> */}

          {/* Notifications */}
          {/* <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button> */}

          <NavLink to={"/"} title="back to site">
            <Undo2 />
          </NavLink>

          {/* Profile */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-purple-200 hover:cursor-pointer rounded-lg transition-all"
            >
              <p className="bg-gradient-to-r from-purple-600 to-blue-500 p-1.5 text-white font-semibold border border-purple-300 rounded">
                VK
              </p>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gradient-to-br from-purple-700 to-blue-600 rounded-md shadow-xl z-10">
                <ul className="py-1 text-sm text-white">
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-purple-800 hover:backdrop-blur">
                      Profile
                    </button>
                  </li>
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-purple-800 hover:backdrop-blur">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  )
}
