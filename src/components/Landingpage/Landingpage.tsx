import React, { useState, useEffect } from "react";
import {
  Package,
  MapPin,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Truck,
  Users,
} from "lucide-react";

const LandingPageContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Easy Registration",
      description:
        "Register your goods with just a few clicks and get instant tracking",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Monitor your package journey across Cameroon in real-time",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Delivery",
      description:
        "Your goods are protected with our reliable delivery network",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Service",
      description: "Quick pickup and delivery to any location in Cameroon",
    },
  ];

  const stats = [
    { number: "50K+", label: "Packages Delivered" },
    { number: "100+", label: "Cities Covered" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-green-600/10" />
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Serving All of Cameroon
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Track Your
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                {" "}
                Goods
              </span>
              <br />
              Across Cameroon
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Register your purchases and let us handle the delivery. From
              Yaoundé to Douala, from Bamenda to Garoua - we bring your goods
              safely to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center">
                Register Your Goods
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 flex items-center">
                <Package className="mr-2 w-5 h-5" />
                Track Existing Order
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-emerald-300 rounded-full opacity-50 animate-pulse delay-500" />
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and reliable. Get your goods delivered in three easy
              steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Register Your Purchase",
                description:
                  "Tell us what you bought and where. Provide seller details and item information.",
                color: "from-emerald-500 to-green-500",
              },
              {
                step: "02",
                title: "We Collect",
                description:
                  "Our team picks up your goods from the seller and begins the delivery process.",
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "03",
                title: "Safe Delivery",
                description:
                  "Track your package in real-time until it arrives safely at your location.",
                color: "from-emerald-600 to-green-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow`}
                >
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {index < 2 && (
                  <div className="hidden md:block absolute top-10 -right-6 lg:-right-12">
                    <ArrowRight className="w-8 h-8 text-emerald-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to making goods delivery across Cameroon simple
              and reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:translateY-[-4px]"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white scale-110"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nationwide Coverage
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We deliver to all major cities and towns across Cameroon's 10
            regions.
          </p>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                "Yaoundé",
                "Douala",
                "Bamenda",
                "Bafoussam",
                "Garoua",
                "Maroua",
                "Ngaoundéré",
                "Bertoua",
                "Ebolowa",
                "Kumba",
              ].map((city, index) => (
                <div
                  key={index}
                  className="bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
                    <span className="font-semibold text-gray-800">{city}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-emerald-600 font-semibold">
              + Many more locations across all regions
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their goods
            delivery across Cameroon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center">
              <Package className="mr-2 w-5 h-5" />
              Register Your First Package
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center">
              <Users className="mr-2 w-5 h-5" />
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageContent;
