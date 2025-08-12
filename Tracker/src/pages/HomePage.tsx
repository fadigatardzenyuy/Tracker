import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

import TenderCalculator from "../components/ui/TenderCalculator";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card, { CardContent } from "../components/ui/Card";

// --- Reusable Animation Variants for Framer Motion ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Sub-components (Included in this file for completeness) ---

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div variants={itemVariants}>
    <Card className="text-center h-full transform hover:-translate-y-2 transition-transform duration-300">
      <CardContent className="pt-8">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
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
  <motion.div
    variants={itemVariants}
    className="relative text-center md:text-left"
  >
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
  </motion.div>
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
  <motion.div variants={itemVariants}>
    <Card className="h-full">
      <CardContent className="pt-6">
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
        <div className="font-bold text-gray-800">{name}</div>
        <div className="text-sm text-emerald-600">{location}</div>
      </CardContent>
    </Card>
  </motion.div>
);

const HeroImages = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const imageBaseClass =
    "hidden lg:block absolute rounded-xl shadow-2xl transform transition-all duration-700 ease-in-out";

  return (
    <>
      <motion.img
        src="https://www.abksupplychain.com/wp-content/uploads/2024/08/Transport-Services.png"
        alt="Delivery truck on a road"
        className={`${imageBaseClass} w-64 -rotate-6 top-20 left-16`}
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={isMounted ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.img
        src="https://www.abksupplychain.com/wp-content/uploads/2024/08/Transport-Services.png"
        alt="Happy customer receiving a package"
        className={`${imageBaseClass} w-72 rotate-3 top-24 right-16`}
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={isMounted ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      />
    </>
  );
};

// --- MAIN HOMEPAGE COMPONENT ---
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/track?code=${trackingId.trim()}`);
    }
  };

  return (
    <div className="-mx-4 -my-8 sm:-mx-6 sm:-my-12">
      {/* 1. Hero Section */}
      <section className="relative text-center py-24 md:py-32 px-4 bg-slate-50 overflow-hidden">
        <HeroImages />
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariants}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Fast, Safe, & Reliable Delivery
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8"
          >
            Send your electronics and luggage anywhere in Cameroon with just a
            few clicks.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" onClick={() => navigate("/send-package")}>
              Send a Package <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Public Tracking Form Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        id="track"
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-4 text-gray-800"
          >
            Track Your Package
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-center mb-6"
          >
            Enter your tracking code below to see the current status of your
            delivery.
          </motion.p>
          <motion.form
            variants={itemVariants}
            onSubmit={handleTrackSubmit}
            className="flex items-center gap-2"
          >
            <Input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking code (e.g., CT12345)"
              icon={<Search size={18} />}
              className="text-lg h-14 flex-grow"
            />
            <Button type="submit" size="lg" className="h-14">
              Track
            </Button>
          </motion.form>
        </div>
      </motion.section>

      {/* 3. Tender Calculator Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        id="tender-calculator"
        className="py-20 bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <TenderCalculator />
        </div>
      </motion.section>

      {/* 4. Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Ship With CamTrack?
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              Service you can trust, from people who care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title="Unmatched Reliability"
              description="We treat every package with care, ensuring it reaches its destination safely."
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Nationwide Coverage"
              description="Our network spans all 10 regions of Cameroon, from major cities to rural areas."
            />
            <FeatureCard
              icon={<Smile size={32} />}
              title="User-Friendly Platform"
              description="Our dedicated support team is ready to assist you with any questions or custom needs."
            />
            <FeatureCard
              icon={<Truck size={32} />}
              title="Transparent Tracking"
              description="Our live tracking page gives you real-time updates and complete peace of mind."
            />
          </div>
        </div>
      </motion.section>

      {/* 5. How It Works Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        id="how-it-works"
        className="py-20 bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Simple 3-Step Process
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              Shipping your goods has never been easier.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            <StepCard
              icon={<Phone size={28} />}
              step="Step 1"
              title="Register & Send"
              description="Create an account and fill out our simple form with your package and receiver details."
            />
            <StepCard
              icon={<MessageSquare size={28} />}
              step="Step 2"
              title="We Pick It Up"
              description="Our team will contact you to arrange a convenient pickup time from your specified address."
            />
            <StepCard
              icon={<PackageCheck size={28} />}
              step="Step 3"
              title="Track Your Goods"
              description="Use your unique tracking code on our website to follow your package's journey in real-time."
            />
          </div>
        </div>
      </motion.section>

      {/* 6. Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Our Customers Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The most reliable service I've used to send goods from Douala to my family in Bamenda. The live tracking is fantastic!"
              name="Marie T."
              location="Douala"
            />
            <TestimonialCard
              quote="CamTrack's platform is so easy to use. I registered and sent my package in minutes. Highly recommended."
              name="Ahmed B."
              location="Yaoundé"
            />
            <TestimonialCard
              quote="I was worried about sending fragile electronics, but they arrived in perfect condition. Excellent service and communication."
              name="Esther N."
              location="Kribi"
            />
          </div>
        </div>
      </motion.section>

      {/* 7. Call-to-Action (CTA) Section */}
      <section className="bg-slate-800">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-lg text-slate-300 mt-2 mb-8 max-w-2xl mx-auto">
            Create an account today and experience the easiest way to send goods
            across Cameroon.
          </p>
          <Button size="lg" onClick={() => navigate("/register")}>
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
