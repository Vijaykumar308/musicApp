import { Menu, Bell, User, Search, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ 
  onMobileMenuToggle, 
  isMobileMenuOpen, 
  onSidebarToggle, 
  isSidebarCollapsed 
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const profileRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current && 
        !profileRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`
      fixed top-0 right-0 h-16 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 z-40
      transition-all duration-300 ease-in-out
      ${isSidebarCollapsed ? 'lg:left-16' : 'lg:left-64'}
      left-0
    `}>
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Mobile menu and search */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMobileMenuToggle}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5 text-gray-400" />
          </button>

          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-slate-700 transition-colors md:hidden">
            <Search className="w-5 h-5 text-gray-400" />
          </button>

          {/* Notifications */}
          <div className="relative">
            {/* <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="p-2 rounded-lg hover:bg-slate-700 transition-colors relative"
            >
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                3
              </span>
            </button> */}

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-slate-700">
                  <h3 className="text-sm font-semibold text-white">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-slate-700 cursor-pointer">
                    <p className="text-sm text-white">New project uploaded</p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-slate-700 cursor-pointer">
                    <p className="text-sm text-white">Client feedback received</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-slate-700 cursor-pointer">
                    <p className="text-sm text-white">System backup completed</p>
                    <p className="text-xs text-gray-400">3 hours ago</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile dropdown with outside click detection */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-white hidden sm:block">Admin</span>
              <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-slate-700">
                  <p className="text-sm font-semibold text-white">Admin User</p>
                  <p className="text-xs text-gray-400">admin@musicproducer.com</p>
                </div>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                  Profile Settings
                </button>
                <button onClick={() => navigate('/')} className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                  Reach to site
                </button>
                <div className="border-t border-slate-700 mt-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-slate-700">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
