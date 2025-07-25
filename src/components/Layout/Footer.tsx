import React from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

// A reusable component for footer links to keep the code clean
const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);

// A reusable component for social media links
const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Branding and Social */}
          <div className="lg:col-span-2 mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <Package className="w-10 h-10 text-emerald-500" />
              <span className="text-3xl font-bold">CamTrack</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Your trusted partner for secure and reliable goods delivery across
              all 10 regions of Cameroon.
            </p>
            <div className="flex space-x-6 mt-6">
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  How It Works
                </a>
              </li>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span>123 Commercial Ave, Douala, Littoral, Cameroon</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a
                  href="mailto:contact@camtrack.cm"
                  className="hover:text-white"
                >
                  contact@camtrack.cm
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a href="tel:+237123456789" className="hover:text-white">
                  +237 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Legal Links */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-500 text-sm mb-2 sm:mb-0">
              © {new Date().getFullYear()} CamTrack. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-500 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
