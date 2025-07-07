import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AdminLayout = ({children}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
      const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
    return <>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            <Header onMobileMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />

            <div className="flex">
                <Sidebar isMobileOpen={isMobileMenuOpen} onMobileClose={closeMobileMenu} />

               {children}
            </div>
        </div>
    </>
}

export default AdminLayout;