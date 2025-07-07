import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PortfolioPage from "./pages/PortfolioPage"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"
import AdminDashboard from "./pages/AdminDashboard"
import UploadPage from "./pages/UploadPage"
import TuneUploadPage from "./pages/admin/TuneUploadPage"
import Dashboard from "./pages/admin/Dashboard"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="admin/tunelUploadPage" element={<TuneUploadPage />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
