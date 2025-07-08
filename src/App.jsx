import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import UploadPage from "./pages/UploadPage";
import AdminLayout from "./components/admin/AdminLayout";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import TuneUploadPage from "./pages/admin/TuneUploadPage";
import AddFeaturedProject from "./pages/admin/AddFeatured";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/upload" element={<UploadPage />} />

        {/* Admin Layout with nested routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tunelUploadPage" element={<TuneUploadPage />} />
          <Route path="add-featured-project" element={<AddFeaturedProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
