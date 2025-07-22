// src/components/layout/Footer.tsx
import React from "react";
import {
  Package,
  MapPin,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Truck,
  Users,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* ... All of your amazing footer JSX ... */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CamTrack</h3>
                  <p className="text-emerald-400 text-sm">Goods Delivery</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for reliable goods delivery across all
                regions of Cameroon. Safe, fast, and secure.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Package Registration",
                  "Real-time Tracking",
                  "Express Delivery",
                  "Bulk Shipments",
                  "Insurance Coverage",
                  "Return Services",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-emerald-600 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Coverage Areas
              </h4>
              <ul className="space-y-3">
                {[
                  "Centre Region",
                  "Littoral Region",
                  "North-West Region",
                  "West Region",
                  "North Region",
                  "Far North Region",
                  "Adamawa Region",
                  "East Region",
                  "South Region",
                  "South-West Region",
                ].map((region, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{region}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">24/7 Support</p>
                    <a
                      href="tel:+237123456789"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +237 123 456 789
                    </a>
                    <br />
                    <a
                      href="tel:+237987654321"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +237 987 654 321
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Email Support</p>
                    <a
                      href="mailto:support@camtrack.cm"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      support@camtrack.cm
                    </a>
                    <br />
                    <a
                      href="mailto:info@camtrack.cm"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      info@camtrack.cm
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Head Office</p>
                    <p className="text-gray-400 text-sm">
                      123 Commercial Ave
                      <br />
                      Douala, Littoral
                      <br />
                      Cameroon
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center group">
                  <Package className="w-4 h-4 mr-2" />
                  Track Package
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full border border-emerald-600 text-emerald-400 py-3 px-4 rounded-lg font-semibold text-sm hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Register Goods
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 CamTrack. All rights reserved. | Proudly serving Cameroon
              </div>
              <div className="flex flex-wrap items-center space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Shipping Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start mt-6 space-x-6 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-emerald-600 mr-1" />
                Secure Delivery
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-1" />
                99% Success Rate
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-emerald-600 mr-1" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-emerald-600 mr-1" />
                50K+ Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
