import React from "react";
import { ShieldCheck, Globe, Users, Heart } from "lucide-react";

// A small component for feature cards to keep the code clean
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="text-center py-16 md:py-24 bg-gray-50 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          About CamTrack
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for secure and reliable goods delivery across
          Cameroon.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to bridge distances and connect communities within
            Cameroon by providing a seamless, transparent, and dependable
            tracking and delivery service. We believe that everyone deserves
            peace of mind when sending or receiving goods, and we are committed
            to making that a reality through technology and dedicated customer
            service.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mt-2">
              The principles that guide our service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title="Unmatched Reliability"
              description="We treat every package with the utmost care, ensuring it reaches its destination safely and on time."
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Nationwide Coverage"
              description="From bustling cities to remote towns, our network spans all 10 regions of Cameroon."
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Customer-Centric"
              description="Our team is always ready to assist you. Your satisfaction is our top priority."
            />
            <FeatureCard
              icon={<Heart size={32} />}
              title="Local Expertise"
              description="As a proudly Cameroonian company, we have a deep understanding of the local landscape and logistics."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
