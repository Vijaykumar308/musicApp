import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/upload",
    element: <UploadPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, // This makes /admin redirect to /admin/dashboard
        element: <Dashboard />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "tune-upload",
        element: <TuneUploadPage />
      },
      {
        path: "add-featured-project",
        element: <AddFeaturedProject />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;