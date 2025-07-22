import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  Package,
  Menu,
  X,
  Phone,
  Mail,
  Search,
  User,
  ChevronDown,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Tracking", href: "/#tracking" },
    { name: "Coverage", href: "/#coverage" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">CamTrack</span>
              <span className="text-xs text-emerald-600 font-medium">
                Cameroon Delivery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a // Using <a> for hash links to scroll on the same page
                key={link.name}
                href={link.href}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                    : "text-gray-900 hover:text-emerald-600 hover:bg-white/20"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions - UPDATED */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span className="font-medium">Login</span>
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu - UPDATED */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-screen opacity-100 pb-6"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 mt-2 p-4 space-y-2">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg text-center"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
