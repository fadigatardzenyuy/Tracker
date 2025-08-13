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
  Send,
  Star,
  Package,
  Clock,
  Users,
} from "lucide-react";
import TenderCalculator from "../components/ui/TenderCalculator";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Nationwide Coverage",
      description: "From Douala to Bamenda, Yaoundé to Kribi",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      stats: "10 Regions • 200+ Cities",
    },
    {
      id: 2,
      title: "Secure Package Handling",
      description: "Professional care for every delivery",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      stats: "99.9% Safe Delivery",
    },
    {
      id: 3,
      title: "Fast Delivery Fleet",
      description: "Modern vehicles for rapid transport",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      stats: "Same Day Delivery Available",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0, x: index > currentSlide ? 100 : -100 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                x:
                  currentSlide === index
                    ? 0
                    : index > currentSlide
                    ? 100
                    : -100,
                scale: currentSlide === index ? 1 : 0.95,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.5 },
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="w-full h-full bg-cover bg-center scale-110"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  animate={{ scale: currentSlide === index ? 1 : 1.1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    y: currentSlide === index ? 0 : 30,
                    opacity: currentSlide === index ? 1 : 0,
                  }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-white"
                >
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2" />
                    {slide.stats}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-white/20 rounded-full flex items-center justify-center">
                <div className="text-white/80 font-bold text-sm sm:text-base lg:text-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 group border border-white/20"
          aria-label="Previous slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white rotate-180 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 group border border-white/20"
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? "w-6 h-2.5 sm:w-8 sm:h-3 bg-white rounded-full"
                  : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/50 hover:bg-white/70 rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-white/10">
          <motion.div
            className="h-full bg-white/80"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "restart",
            }}
            key={currentSlide}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto pb-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 ${
              currentSlide === index
                ? "ring-2 sm:ring-4 ring-emerald-500 scale-105 sm:scale-110 shadow-lg"
                : "opacity-60 hover:opacity-90 hover:scale-105"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/20" />
            {currentSlide === index && (
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};
const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8, transition: { duration: 0.3, ease: "easeOut" } },
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    variants={fadeInUpVariants}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border border-gray-50"
  >
    <div className="mx-auto mb-4 sm:mb-6 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-xl sm:rounded-2xl shadow-lg">
      {React.cloneElement(icon as React.ReactElement, {
        size: window.innerWidth < 640 ? 28 : 36,
      })}
    </div>
    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const TestimonialCard = ({
  quote,
  name,
  location,
  rating = 5,
}: {
  quote: string;
  name: string;
  location: string;
  rating?: number;
}) => (
  <motion.div
    variants={fadeInUpVariants}
    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
  >
    <div className="flex items-center mb-3 sm:mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
    <p className="text-sm sm:text-base text-gray-600 italic mb-4 sm:mb-6 leading-relaxed">
      "{quote}"
    </p>
    <div className="flex items-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
      </div>
      <div>
        <div className="font-bold text-gray-800 text-sm sm:text-base">
          {name}
        </div>
        <div className="text-xs sm:text-sm text-emerald-600">{location}</div>
      </div>
    </div>
  </motion.div>
);

const StatCard = ({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <motion.div variants={fadeInUpVariants} className="text-center text-white">
    <div className="flex justify-center mb-3 sm:mb-4">
      <div className="bg-white/20 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm">
        {React.cloneElement(icon as React.ReactElement, {
          size: window.innerWidth < 640 ? 24 : 32,
        })}
      </div>
    </div>
    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
      {number}
    </div>
    <div className="text-emerald-100 font-medium text-sm sm:text-base">
      {label}
    </div>
  </motion.div>
);

const HomePage = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/track?code=${trackingId.trim()}`);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen flex items-center bg-gradient-to-br from-white via-emerald-50/20 to-slate-50 overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-emerald-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-center h-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left w-full"
            >
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-emerald-200">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                Trusted by 10,000+ Cameroonians
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
                Your Bridge to{" "}
                <span className="text-emerald-600 relative">
                  {" "}
                  Reliable Delivery{" "}
                  <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-emerald-200 rounded-full" />{" "}
                </span>{" "}
                <br /> <span className="text-gray-700">in Cameroon</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect every corner of Cameroon with our reliable delivery
                network. From Douala to Bamenda, from Yaoundé to Kribi - we
                deliver with care, speed, and complete transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <Link
                  to="/send-package"
                  className="group inline-flex items-center justify-center bg-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-lg sm:rounded-xl hover:bg-emerald-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Send
                    className="mr-2 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                  Send Package Now
                </Link>
                <Link
                  to="/track"
                  className="group inline-flex items-center justify-center bg-white border-2 border-emerald-600 text-emerald-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-lg sm:rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-lg"
                >
                  <Search
                    className="mr-2 group-hover:scale-110 transition-transform"
                    size={16}
                  />
                  Track Shipment
                </Link>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50 max-w-md mx-auto lg:mx-0">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Package className="mr-2 text-emerald-600" size={14} />
                  Quick Package Tracking
                </h3>
                <form
                  onSubmit={handleTrackSubmit}
                  className="flex gap-2 sm:gap-3"
                >
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter your tracking ID..."
                    className="flex-1 px-2.5 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-xs sm:text-sm bg-white/70"
                  />
                  <button
                    type="submit"
                    className="bg-emerald-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Search size={14} />
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  Get real-time updates on your package location
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-full flex items-center order-1 lg:order-2"
            >
              <ImageSlider />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
        className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <StatCard
              number="10K+"
              label="Happy Customers"
              icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
            />
            <StatCard
              number="50K+"
              label="Packages Delivered"
              icon={<Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
            />
            <StatCard
              number="99.9%"
              label="Delivery Success Rate"
              icon={
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              }
            />
            <StatCard
              number="24/7"
              label="Customer Support"
              icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        id="tender-calculator"
        className="py-16 sm:py-20 lg:py-24 bg-slate-50 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Calculate Your Shipping Cost
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Get instant pricing for your shipment with our transparent
              calculator
            </p>
          </div>
          <TenderCalculator />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
        className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Why Choose CamTrack?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just a delivery service – we're your trusted partner in
              connecting Cameroon
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <FeatureCard
              icon={<ShieldCheck size={36} />}
              title="100% Secure"
              description="Advanced security measures and insurance coverage protect your packages throughout the journey."
            />
            <FeatureCard
              icon={<Globe size={36} />}
              title="Nationwide Network"
              description="Complete coverage across all 10 regions of Cameroon, from bustling cities to remote villages."
            />
            <FeatureCard
              icon={<Smile size={36} />}
              title="24/7 Support"
              description="Our dedicated customer service team is always ready to help with any questions or concerns."
            />
            <FeatureCard
              icon={<Truck size={36} />}
              title="Real-Time Tracking"
              description="Live GPS tracking and instant notifications keep you informed every step of the way."
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
        className="bg-gradient-to-br from-slate-50 to-emerald-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Don't just take our word for it – hear from our satisfied
              customers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              quote="CamTrack revolutionized how I send goods to my family in Bamenda. The live tracking feature gives me complete peace of mind, and the delivery is always on time."
              name="Marie T."
              location="Douala"
              rating={5}
            />
            <TestimonialCard
              quote="The platform is incredibly user-friendly. I registered, sent my package, and received updates all in one seamless experience. Highly recommended for anyone in Cameroon!"
              name="Ahmed B."
              location="Yaoundé"
              rating={5}
            />
            <TestimonialCard
              quote="I was nervous about sending expensive electronics, but CamTrack handled everything perfectly. The packaging was professional and everything arrived in pristine condition."
              name="Esther N."
              location="Kribi"
              rating={5}
            />
          </div>
        </div>
      </motion.section>

      <section className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10" />
          <div className="absolute -top-12 sm:-top-24 -right-12 sm:-right-24 w-24 h-24 sm:w-48 sm:h-48 bg-white rounded-full opacity-10" />
          <div className="absolute -bottom-12 sm:-bottom-24 -left-12 sm:-left-24 w-24 h-24 sm:w-48 sm:h-48 bg-white rounded-full opacity-10" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Ship with Confidence?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust CamTrack for their
              shipping needs. Create your account today and experience the
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Get Started Free{" "}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg sm:rounded-xl hover:bg-white hover:text-emerald-600 transition-all"
              >
                Learn More
              </Link>
            </div>
            <p className="text-emerald-100 text-xs sm:text-sm mt-4 sm:mt-6">
              No setup fees • Free account • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
