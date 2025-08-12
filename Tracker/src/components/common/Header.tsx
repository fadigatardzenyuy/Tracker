import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Package, Menu, X, LogOut, Send, History } from "lucide-react";
import Button from "../ui/Button"; // Our custom button

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Helper function for NavLink styling
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-lg font-medium transition-colors ${
      isActive
        ? "text-emerald-600 bg-emerald-50"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center space-x-2"
          >
            <Package className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-800">CamTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-600"
                  : "text-slate-600 hover:text-emerald-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/track"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-600"
                  : "text-slate-600 hover:text-emerald-700"
              }
            >
              Track Package
            </NavLink>
            {user && (
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-600"
                    : "text-slate-600 hover:text-emerald-700"
                }
              >
                My Orders
              </NavLink>
            )}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <>
                <Button onClick={() => navigate("/send-package")}>
                  Send Package
                </Button>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 text-slate-500 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-semibold text-slate-600 hover:text-emerald-600 px-4 py-2"
                >
                  Login
                </Link>
                <Button onClick={() => navigate("/register")}>Register</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {user ? (
              <>
                <NavLink
                  to="/send-package"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  <Send size={20} className="mr-2" />
                  Send Package
                </NavLink>
                <NavLink
                  to="/history"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  <History size={20} className="mr-2" />
                  My Orders
                </NavLink>
                <NavLink
                  to="/track"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  <Package size={20} className="mr-2" />
                  Track Package
                </NavLink>
                <div className="pt-4 border-t mt-2">
                  <Button
                    onClick={handleLogout}
                    variant="destructive"
                    className="w-full"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
                  Home
                </NavLink>
                <NavLink
                  to="/track"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Track Package
                </NavLink>
                <div className="pt-4 border-t mt-2 flex flex-col space-y-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="w-full text-center px-4 py-3 rounded-lg font-semibold bg-slate-100 text-slate-800"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="w-full text-center px-4 py-3 rounded-lg font-semibold bg-emerald-600 text-white"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
