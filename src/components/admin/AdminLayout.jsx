import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header 
        onMobileMenuToggle={toggleMobileMenu} 
        isMobileMenuOpen={isMobileMenuOpen}
        onSidebarToggle={toggleSidebar}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      <div className="flex relative">
        <Sidebar 
          isMobileOpen={isMobileMenuOpen} 
          onMobileClose={closeMobileMenu}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />

        {/* Main content area with dynamic width based on sidebar state */}
        <main className={`
          flex-1 
          transition-all 
          duration-300 
          ease-in-out 
          p-6
          ${isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}
          ${isMobileMenuOpen ? 'lg:ml-64' : ''}
        `}>
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </div>
    </div>
  );
};

export default AdminLayout;