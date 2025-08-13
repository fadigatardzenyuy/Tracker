import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global State & UI
import { AuthProvider } from "./context/AuthContext";

// User-Facing Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SendPackagePage from "./pages/SendPackagePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import TrackPackagePage from "./pages/TrackPackagePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Admin Pages
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ShipmentDetailPage from "./pages/admin/ShipmentDetailPage";

// Route Protection
import ProtectedRoute from "./components/auth/ProtectedRoute";
import MainLayout from "./components/common/MainLayout";
import AdminLayout from "./components/admin/AdminLayout";
import AuthLayout from "./components/common/AuthLayout";
import AllShipmentsPage from "./pages/admin/AllShipmentsPage";
import CreateShipmentPage from "./pages/admin/CreateShipmentPage";
import UsersPage from "./pages/admin/UsersPage";
import SettingsPage from "./pages/admin/SettingsPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Group 1: User-Facing Routes (with Header/Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/track" element={<TrackPackagePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/send-package"
              element={
                <ProtectedRoute>
                  <SendPackagePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <OrderHistoryPage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Group 2: User Auth Routes (no Header/Footer) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Group 3: Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="shipments" element={<AllShipmentsPage />} />
            <Route path="shipments/create" element={<CreateShipmentPage />} />
            <Route path="shipments/:id" element={<ShipmentDetailPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
