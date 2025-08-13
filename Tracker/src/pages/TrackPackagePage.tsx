import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Truck,
  Building2,
  Search,
  Calendar,
  Navigation,
  Phone,
  User,
  Copy,
  Loader2,
  Shield,
  FileText,
  Star,
  ExternalLink,
} from "lucide-react";

// Enhanced mock data with more realistic tracking information
const mockTrackingData = {
  TRK123456: {
    id: "TRK123456",
    status: "out_for_delivery",
    currentLocation: "Yaoundé Distribution Center",
    estimatedDelivery: "2024-08-16",
    deliveryInstructions: "Please call recipient before delivery",
    priority: "Standard",
    recipient: {
      name: "Marie Tchinda",
      phone: "+237 677 123 456",
      address: "Bastos Quarter, Yaoundé",
      alternatePhone: "+237 655 789 012",
    },
    sender: {
      name: "Jean Fotso",
      phone: "+237 699 987 654",
      location: "Akwa, Douala",
      company: "TechStore Douala",
    },
    package: {
      weight: "2.5 kg",
      dimensions: "30×20×15 cm",
      value: "75,000 XAF",
      category: "Electronics",
      description: "Smartphone and accessories",
      serviceType: "Express Delivery",
    },
    updates: [
      {
        id: 1,
        status: "out_for_delivery",
        title: "Out for Delivery",
        description:
          "Your package is loaded on delivery vehicle and will arrive today",
        location: "Yaoundé Distribution Center",
        timestamp: "2024-08-16T08:15:00",
        employee: "Driver: Paul Mbarga",
        icon: "truck",
        isCompleted: false,
        isCurrent: true,
      },
      {
        id: 2,
        status: "in_transit",
        title: "Arrived at Destination Hub",
        description:
          "Package arrived at destination facility for final processing",
        location: "Yaoundé Distribution Center",
        timestamp: "2024-08-15T16:45:00",
        employee: "Handler: Marie Ngo",
        icon: "building",
        isCompleted: true,
        isCurrent: false,
      },
      {
        id: 3,
        status: "in_transit",
        title: "In Transit Between Hubs",
        description:
          "Package successfully transported between distribution centers",
        location: "Bafoussam Transit Hub",
        timestamp: "2024-08-15T09:20:00",
        employee: "Transport Team",
        icon: "truck",
        isCompleted: true,
        isCurrent: false,
      },
      {
        id: 4,
        status: "collected",
        title: "Package Collected",
        description: "Package successfully picked up from sender and processed",
        location: "Douala Collection Point",
        timestamp: "2024-08-14T11:30:00",
        employee: "Collector: Samuel Kwe",
        icon: "package",
        isCompleted: true,
        isCurrent: false,
      },
      {
        id: 5,
        status: "created",
        title: "Shipment Created",
        description: "Tracking number generated and shipping label created",
        location: "Douala",
        timestamp: "2024-08-14T09:15:00",
        employee: "System Generated",
        icon: "check",
        isCompleted: true,
        isCurrent: false,
      },
    ],
  },
  TRK789012: {
    id: "TRK789012",
    status: "delivered",
    currentLocation: "Delivered to Recipient",
    estimatedDelivery: "2024-08-15",
    deliveryInstructions: "Leave at front door if no answer",
    priority: "Express",
    recipient: {
      name: "Paul Ndong",
      phone: "+237 680 456 789",
      address: "Mendong, Yaoundé",
      alternatePhone: "+237 677 123 456",
    },
    sender: {
      name: "Electronics Hub",
      phone: "+237 699 111 222",
      location: "Bonaberi, Douala",
      company: "Electronics Hub Ltd",
    },
    package: {
      weight: "1.2 kg",
      dimensions: "25×15×10 cm",
      value: "45,000 XAF",
      category: "Electronics",
      description: "Laptop charger and cables",
      serviceType: "Express Delivery",
    },
    updates: [
      {
        id: 1,
        status: "delivered",
        title: "Package Delivered Successfully",
        description:
          "Package delivered and received by Marie Ndong (recipient's wife)",
        location: "Mendong, Yaoundé",
        timestamp: "2024-08-15T14:30:00",
        employee: "Driver: Thomas Kom",
        icon: "delivered",
        isCompleted: true,
        isCurrent: true,
      },
      {
        id: 2,
        status: "out_for_delivery",
        title: "Out for Delivery",
        description: "Package loaded onto delivery vehicle",
        location: "Yaoundé Distribution Center",
        timestamp: "2024-08-15T08:00:00",
        employee: "Driver: Thomas Kom",
        icon: "truck",
        isCompleted: true,
        isCurrent: false,
      },
    ],
  },
};

const statusConfig = {
  created: {
    color: "bg-blue-500",
    textColor: "text-blue-700",
    bgColor: "bg-blue-50",
    label: "Created",
  },
  collected: {
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgColor: "bg-orange-50",
    label: "Collected",
  },
  in_transit: {
    color: "bg-yellow-500",
    textColor: "text-yellow-700",
    bgColor: "bg-yellow-50",
    label: "In Transit",
  },
  out_for_delivery: {
    color: "bg-purple-500",
    textColor: "text-purple-700",
    bgColor: "bg-purple-50",
    label: "Out for Delivery",
  },
  delivered: {
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-50",
    label: "Delivered",
  },
  exception: {
    color: "bg-red-500",
    textColor: "text-red-700",
    bgColor: "bg-red-50",
    label: "Exception",
  },
};

const getStatusIcon = (
  iconType: string,
  isCompleted: boolean,
  isCurrent: boolean
) => {
  const iconClass = `w-5 h-5 ${
    isCurrent
      ? "text-white animate-pulse"
      : isCompleted
      ? "text-white"
      : "text-gray-400"
  }`;

  switch (iconType) {
    case "package":
      return <Package className={iconClass} />;
    case "truck":
      return <Truck className={iconClass} />;
    case "building":
      return <Building2 className={iconClass} />;
    case "delivered":
      return <CheckCircle2 className={iconClass} />;
    case "check":
      return <CheckCircle2 className={iconClass} />;
    default:
      return <MapPin className={iconClass} />;
  }
};

const TrackPackagePage: React.FC = () => {
  const [trackingId, setTrackingId] = useState("TRK123456");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Simulate API call
  const handleTrackPackage = async () => {
    if (!trackingId.trim()) return;

    setIsLoading(true);
    setTrackingData(null);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const data = mockTrackingData[trackingId as keyof typeof mockTrackingData];
    setTrackingData(data || null);
    setIsLoading(false);
  };

  const copyTrackingId = async () => {
    try {
      await navigator.clipboard.writeText(trackingId);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.log("Failed to copy tracking ID");
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calculateProgress = () => {
    if (!trackingData) return 0;
    const statusOrder = [
      "created",
      "collected",
      "in_transit",
      "out_for_delivery",
      "delivered",
    ];
    const currentIndex = statusOrder.indexOf(trackingData.status);
    return ((currentIndex + 1) / statusOrder.length) * 100;
  };

  useEffect(() => {
    if (trackingId === "TRK123456") {
      handleTrackPackage();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 sm:px-8 py-8 text-white">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm mb-4">
                <Search size={32} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                Track Your Package
              </h1>
              <p className="text-emerald-100 text-lg">
                Enter your tracking ID to get real-time delivery updates
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) =>
                    setTrackingId(
                      e.target.value.toUpperCase().replace(/\s/g, "")
                    )
                  }
                  placeholder="Enter your tracking ID (e.g. TRK123456)"
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-12 transition-all"
                  onKeyPress={(e) => e.key === "Enter" && handleTrackPackage()}
                />
                {trackingId && (
                  <button
                    onClick={copyTrackingId}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded transition-colors ${
                      copySuccess
                        ? "text-emerald-600"
                        : "text-gray-400 hover:text-emerald-600"
                    }`}
                  >
                    <Copy size={20} />
                  </button>
                )}
              </div>
              <button
                onClick={handleTrackPackage}
                disabled={isLoading || !trackingId.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center min-w-[140px]"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <Search size={20} className="mr-2" />
                    Track Package
                  </>
                )}
              </button>
            </div>
            {copySuccess && (
              <p className="text-center text-emerald-600 text-sm mt-2">
                Tracking ID copied to clipboard!
              </p>
            )}
          </div>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center"
            >
              <Loader2 className="w-16 h-16 animate-spin text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Searching for your package...
              </h3>
              <p className="text-gray-600">
                Please wait while we locate your shipment
              </p>
            </motion.div>
          )}

          {!isLoading && trackingData && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Main Package Information Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Package Status & Progress */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Status Overview Card */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 p-6 border-b">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Package #{trackingData.id}
                          </h2>
                          <div
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                              statusConfig[
                                trackingData.status as keyof typeof statusConfig
                              ]?.bgColor
                            } ${
                              statusConfig[
                                trackingData.status as keyof typeof statusConfig
                              ]?.textColor
                            }`}
                          >
                            <div
                              className={`w-3 h-3 rounded-full mr-2 animate-pulse ${
                                statusConfig[
                                  trackingData.status as keyof typeof statusConfig
                                ]?.color
                              }`}
                            />
                            {
                              statusConfig[
                                trackingData.status as keyof typeof statusConfig
                              ]?.label
                            }
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">
                            Current Location
                          </p>
                          <p className="font-semibold text-gray-800 flex items-center">
                            <MapPin
                              size={16}
                              className="mr-1 text-emerald-600"
                            />
                            {trackingData.currentLocation}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-8">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-gray-700">
                            Delivery Progress
                          </span>
                          <span className="text-sm font-bold text-emerald-600">
                            {Math.round(calculateProgress())}% Complete
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${calculateProgress()}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Estimated Delivery */}
                      <div className="mt-6 p-4 bg-white/80 rounded-xl border border-emerald-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-700">
                            <Calendar
                              size={20}
                              className="mr-2 text-emerald-600"
                            />
                            <span className="font-medium">
                              Estimated Delivery
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-emerald-600">
                              {new Date(
                                trackingData.estimatedDelivery
                              ).toLocaleDateString("en-GB", {
                                weekday: "short",
                                day: "2-digit",
                                month: "short",
                              })}
                            </p>
                            <p className="text-sm text-gray-600">
                              {trackingData.priority} Priority
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Package Details Grid */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Package size={20} className="mr-2 text-emerald-600" />
                        Package Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Description:</span>
                            <span className="font-medium text-gray-800">
                              {trackingData.package.description}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Category:</span>
                            <span className="font-medium text-gray-800">
                              {trackingData.package.category}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Service Type:</span>
                            <span className="font-medium text-gray-800">
                              {trackingData.package.serviceType}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Weight:</span>
                            <span className="font-medium text-gray-800">
                              {trackingData.package.weight}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Dimensions:</span>
                            <span className="font-medium text-gray-800">
                              {trackingData.package.dimensions}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">
                              Declared Value:
                            </span>
                            <span className="font-medium text-emerald-600">
                              {trackingData.package.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Information */}
                <div className="space-y-6">
                  {/* Sender Information */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <User size={20} className="mr-2 text-emerald-600" />
                      Sender Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Company</p>
                        <p className="font-semibold text-gray-800">
                          {trackingData.sender.company}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Contact Person</p>
                        <p className="font-medium text-gray-800">
                          {trackingData.sender.name}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone size={16} className="mr-2 text-emerald-600" />
                        <span>{trackingData.sender.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin size={16} className="mr-2 text-emerald-600" />
                        <span>{trackingData.sender.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recipient Information */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Navigation size={20} className="mr-2 text-emerald-600" />
                      Delivery Address
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Recipient</p>
                        <p className="font-semibold text-gray-800">
                          {trackingData.recipient.name}
                        </p>
                      </div>
                      <div className="flex items-start text-gray-700">
                        <MapPin
                          size={16}
                          className="mr-2 mt-1 text-emerald-600 flex-shrink-0"
                        />
                        <span>{trackingData.recipient.address}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone size={16} className="mr-2 text-emerald-600" />
                        <span>{trackingData.recipient.phone}</span>
                      </div>
                      {trackingData.recipient.alternatePhone && (
                        <div className="flex items-center text-gray-700">
                          <Phone size={16} className="mr-2 text-gray-400" />
                          <span className="text-sm">
                            Alt: {trackingData.recipient.alternatePhone}
                          </span>
                        </div>
                      )}
                    </div>
                    {trackingData.deliveryInstructions && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <strong>Delivery Instructions:</strong>{" "}
                          {trackingData.deliveryInstructions}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                        <Phone size={16} className="mr-2" />
                        Call Support
                      </button>
                      <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-700 rounded-lg transition-colors">
                        <ExternalLink size={16} className="mr-2" />
                        Share Tracking
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking History Section */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Package Journey
                  </h3>
                  <p className="text-gray-600">
                    Complete timeline of your package's journey
                  </p>
                </div>

                <div className="p-6">
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
                    <div className="space-y-8">
                      {trackingData.updates.map(
                        (update: any, index: number) => (
                          <motion.div
                            key={update.id}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex items-start space-x-6 relative"
                          >
                            <div
                              className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 shadow-lg transition-all duration-300 ${
                                update.isCurrent
                                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 ring-4 ring-emerald-200"
                                  : update.isCompleted
                                  ? statusConfig[
                                      update.status as keyof typeof statusConfig
                                    ]?.color
                                  : "bg-gray-300"
                              }`}
                            >
                              {getStatusIcon(
                                update.icon,
                                update.isCompleted,
                                update.isCurrent
                              )}
                            </div>

                            <div className="flex-1">
                              <div
                                className={`p-6 rounded-2xl transition-all duration-300 ${
                                  update.isCurrent
                                    ? "bg-emerald-50 border-2 border-emerald-200"
                                    : "bg-gray-50 border border-gray-200"
                                }`}
                              >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                                  <div>
                                    <h4
                                      className={`text-lg font-semibold mb-1 ${
                                        update.isCurrent
                                          ? "text-emerald-800"
                                          : "text-gray-800"
                                      }`}
                                    >
                                      {update.title}
                                      {update.isCurrent && (
                                        <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                          Current Status
                                        </span>
                                      )}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                      {update.description}
                                    </p>
                                  </div>
                                  <div className="flex items-center text-sm text-gray-500 bg-white px-3 py-2 rounded-lg">
                                    <Clock size={14} className="mr-2" />
                                    {formatDate(update.timestamp)}
                                  </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-center text-gray-600">
                                    <MapPin
                                      size={16}
                                      className="mr-2 text-emerald-600"
                                    />
                                    <span>
                                      <strong>Location:</strong>{" "}
                                      {update.location}
                                    </span>
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <User
                                      size={16}
                                      className="mr-2 text-emerald-600"
                                    />
                                    <span>
                                      <strong>Handler:</strong>{" "}
                                      {update.employee}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {!isLoading && trackingData === null && trackingId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center"
            >
              <AlertCircle className="w-20 h-20 text-red-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Package Not Found
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                We couldn't find a package with tracking ID "
                <strong>{trackingId}</strong>".
              </p>
              <p className="text-gray-500">
                Please check your tracking number and try again, or contact our
                customer support for assistance.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => setTrackingId("")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Try Another Tracking ID
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TrackPackagePage;
