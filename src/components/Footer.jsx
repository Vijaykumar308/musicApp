import { Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        {/* <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Sound Studio Showcase</h3>
          <p className="text-gray-400 mb-6">Stay up to date</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div> */}

        {/* Social Links */}
        {/* <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://www.instagram.com/the_spencer.x/" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/channel/UCoTYlbq4LvbCgd5DEBrBRQg" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div> */}

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
          {/* flex flex-col sm:flex-row justify-between items-center */}
          <div className="flex flex-col gap-5">
            <p>© {`${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`} {import.meta.env.VITE_LOGO}</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex space-x-4 justify-center w-full">
                <a target="_blank" href="https://www.instagram.com/the_spencer.x/" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                
                <a href="https://www.youtube.com/channel/UCoTYlbq4LvbCgd5DEBrBRQg" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
