import { useState } from 'react';
import { 
  Home, 
  Upload, 
  Star, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isMobileOpen, onMobileClose, isCollapsed, onToggleCollapse }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/admin/tune-upload', icon: Upload, label: 'Upload Tune' },
    { path: '/admin/add-featured-project', icon: Star, label: 'Featured Projects' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-slate-800/95 backdrop-blur-sm border-r border-slate-700
        transition-all duration-300 ease-in-out z-30
        ${isCollapsed ? 'w-16' : 'w-64'}
        hidden lg:block
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          )}
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-3 py-3 mb-2 rounded-lg transition-colors
                ${isActive(item.path) 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? item.label : ''}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom section */}
        {!isCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-sm text-gray-400">Music Producer</p>
              <p className="text-sm text-white font-medium">Admin Dashboard</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700
        transform transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          <button
            onClick={onMobileClose}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="mt-4 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onMobileClose}
              className={`
                flex items-center px-3 py-3 mb-2 rounded-lg transition-colors
                ${isActive(item.path) 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }
              `}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3 font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Bottom section */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <p className="text-sm text-gray-400">Music Producer</p>
            <p className="text-sm text-white font-medium">Admin Dashboard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;