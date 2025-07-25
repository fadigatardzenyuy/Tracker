import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Package, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  // State to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to style the active link
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-emerald-600 font-semibold"
      : "text-gray-600 hover:text-emerald-600";

  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center space-x-2"
        >
          <Package className="w-8 h-8 text-emerald-600" />
          <span className="text-2xl font-bold text-gray-800">CamTrack</span>
        </Link>

        {/* Desktop Navigation Links - hidden on small screens */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <a
            href="/#how-it-works"
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            How It Works
          </a>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
        </div>

        {/* Desktop CTA Button - hidden on small screens */}
        <Link
          to="/contact"
          className="hidden md:block bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-sm"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button - only visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {/* Uses CSS transitions for a smooth slide-down effect */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          <NavLink to="/" onClick={closeMenu} className={linkClass}>
            Home
          </NavLink>
          <a
            href="/#how-it-works"
            onClick={closeMenu}
            className="text-gray-600 hover:text-emerald-600"
          >
            How It Works
          </a>
          <NavLink to="/about" onClick={closeMenu} className={linkClass}>
            About Us
          </NavLink>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="bg-emerald-600 text-white w-full text-center mt-4 px-6 py-3 rounded-lg font-medium hover:bg-emerald-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
