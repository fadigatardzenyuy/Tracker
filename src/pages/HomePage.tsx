import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Globe,
  Smile,
  Truck,
  ArrowRight,
  Search,
  Phone,
  MessageSquare,
  PackageCheck,
} from "lucide-react";

// --- SUB-COMPONENTS (These are already responsive due to their simple nature) ---
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard = ({
  icon,
  step,
  title,
  description,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}) => (
  <div className="relative text-center md:text-left">
    <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-emerald-600 text-white rounded-full font-bold text-2xl shadow-md">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold text-emerald-700">{step}</p>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) => (
  <div className="bg-emerald-50 p-8 rounded-xl shadow-md">
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div className="font-bold text-gray-800">{name}</div>
    <div className="text-sm text-emerald-600">{location}</div>
  </div>
);

// --- Hero Background (Now responsive) ---
const HeroBackground = () => {
  return (
    // The entire background container is now hidden on mobile and appears on large screens (lg) and up
    <div className="absolute inset-0 z-0 hidden lg:block">
      <div className="absolute left-0 top-0 h-full w-1/2">
        <img
          src="https://www.mcgrory.ie/wp-content/uploads/2020/04/sole-trader.jpg"
          alt="Warehouse logistics"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2">
        <img
          src="https://www.mcgrory.ie/wp-content/uploads/2020/04/sole-trader.jpg"
          alt="Delivery person handling a package"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent"></div>
      </div>
    </div>
  );
};

// --- MAIN HOMEPAGE COMPONENT ---
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = React.useState("");

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/track/${trackingId.trim()}`);
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Now fully responsive */}
      <section className="relative text-center py-20 md:py-28 px-4 bg-gray-50 overflow-hidden">
        <HeroBackground />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Seamless Goods Delivery Across Cameroon
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We provide a personalized concierge service. Contact us for a quote,
            and we'll handle everything.
          </p>
          {/* Button container stacks vertically on small screens */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="group w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="max-w-xl mx-auto">
            <p className="text-gray-600 mb-4">
              Already have a tracking ID? Check its status.
            </p>
            <form
              onSubmit={handleTrackSubmit}
              className="w-full bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mx-3" />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter tracking ID..."
                className="flex-grow p-2 text-base sm:text-lg bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 sm:px-8 py-3 rounded-lg font-semibold hover:bg-black transition-colors"
              >
                Track
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Statistics Section - Responsive grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                10,000+
              </div>
              <div className="text-gray-600 font-medium mt-2">
                Parcels Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                99.7%
              </div>
              <div className="text-gray-600 font-medium mt-2">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                10
              </div>
              <div className="text-gray-600 font-medium mt-2">
                Regions Covered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                24/7
              </div>
              <div className="text-gray-600 font-medium mt-2">
                Admin Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section - Responsive grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Ship With CamTrack?
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Service you can trust, from people who care.
            </p>
          </div>
          {/* Stacks to 1 column on mobile, 2 on medium, 4 on large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title="Unmatched Reliability"
              description="We treat every package with the utmost care, ensuring it reaches its destination safely."
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Nationwide Coverage"
              description="Our network spans all 10 regions of Cameroon, from major cities to rural areas."
            />
            <FeatureCard
              icon={<Smile size={32} />}
              title="Personalized Service"
              description="Our concierge team is dedicated to meeting your specific shipping needs and questions."
            />
            <FeatureCard
              icon={<Truck size={32} />}
              title="Transparent Tracking"
              description="Our live tracking page gives you real-time updates and complete peace of mind."
            />
          </div>
        </div>
      </section>

      {/* 4. How It Works Section - Responsive grid */}
      <section id="how-it-works" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Shipping your goods has never been easier.
            </p>
          </div>
          {/* Stacks to 1 column on mobile, 3 on medium */}
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              icon={<Phone size={28} />}
              step="Step 1"
              title="Contact Us"
              description="Reach out via phone or our contact form with your shipment details. We'll provide a quick, no-obligation quote."
            />
            <StepCard
              icon={<MessageSquare size={28} />}
              step="Step 2"
              title="We Create Your Shipment"
              description="Once you approve, our team creates the shipment in our system and provides you with a unique Tracking ID."
            />
            <StepCard
              icon={<PackageCheck size={28} />}
              step="Step 3"
              title="Track Your Goods"
              description="Use your Tracking ID on our website to follow your package's journey in real-time from pickup to delivery."
            />
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section - Responsive grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Our Customers Say
            </h2>
          </div>
          {/* Stacks to 1 column on mobile, 3 on medium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The most reliable service I've used to send goods from Douala to my family in Bamenda. The live tracking is fantastic!"
              name="Marie T."
              location="Douala"
            />
            <TestimonialCard
              quote="CamTrack's team was so helpful. They handled all the details for my business inventory. Highly recommended."
              name="Ahmed B."
              location="Yaoundé"
            />
            <TestimonialCard
              quote="I was worried about sending fragile items, but they arrived in perfect condition. The photo upload feature gave me peace of mind."
              name="Esther N."
              location="Kribi"
            />
          </div>
        </div>
      </section>

      {/* 6. Call-to-Action Section */}
      <section className="bg-emerald-600">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-lg text-emerald-100 mt-2 mb-8 max-w-2xl mx-auto">
            Let our team provide you with a fast, free quote and show you how
            easy shipping across Cameroon can be.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
