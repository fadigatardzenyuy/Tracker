import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Package,
  Truck,
  MapPin,
  Calculator,
  Clock,
  Shield,
  ArrowRight,
  Info,
  Smartphone,
  Luggage,
  ShoppingBag,
  FileText,
  Zap,
} from "lucide-react";

// Cameroon cities with realistic distances and pricing
const CAMEROON_CITIES = {
  Douala: { region: "Littoral", zone: "coastal" },
  Yaoundé: { region: "Centre", zone: "central" },
  Bamenda: { region: "North-West", zone: "highlands" },
  Bafoussam: { region: "West", zone: "highlands" },
  Garoua: { region: "North", zone: "northern" },
  Maroua: { region: "Far North", zone: "far-north" },
  Ngaoundéré: { region: "Adamawa", zone: "northern" },
  Kribi: { region: "South", zone: "coastal" },
  Bertoua: { region: "East", zone: "eastern" },
  Ebolowa: { region: "South", zone: "southern" },
};

// Package categories with specific handling requirements
const PACKAGE_CATEGORIES = {
  electronics: {
    icon: <Smartphone size={20} />,
    name: "Electronics",
    description: "Phones, laptops, gadgets",
    basePrice: 2500,
    insuranceRate: 0.02,
    fragileHandling: 1500,
  },
  luggage: {
    icon: <Luggage size={20} />,
    name: "Personal Items",
    description: "Clothes, bags, personal effects",
    basePrice: 1500,
    insuranceRate: 0.01,
    fragileHandling: 0,
  },
  documents: {
    icon: <FileText size={20} />,
    name: "Documents",
    description: "Papers, certificates, contracts",
    basePrice: 800,
    insuranceRate: 0.005,
    fragileHandling: 0,
  },
  general: {
    icon: <Package size={20} />,
    name: "General Items",
    description: "Food, books, general goods",
    basePrice: 2000,
    insuranceRate: 0.015,
    fragileHandling: 500,
  },
  commercial: {
    icon: <ShoppingBag size={20} />,
    name: "Commercial Goods",
    description: "Business items, samples",
    basePrice: 3000,
    insuranceRate: 0.025,
    fragileHandling: 1000,
  },
};

// Delivery speed options
const DELIVERY_OPTIONS = {
  standard: {
    name: "Standard Delivery",
    description: "3-5 business days",
    multiplier: 1.0,
    icon: <Truck size={16} />,
  },
  express: {
    name: "Express Delivery",
    description: "1-2 business days",
    multiplier: 1.8,
    icon: <Zap size={16} />,
  },
  same_day: {
    name: "Same Day",
    description: "Within same city only",
    multiplier: 3.0,
    icon: <Clock size={16} />,
  },
};

const TenderCalculator: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [fromCity, setFromCity] = useState("Douala");
  const [toCity, setToCity] = useState("Yaoundé");
  const [category, setCategory] =
    useState<keyof typeof PACKAGE_CATEGORIES>("electronics");
  const [weight, setWeight] = useState(1);
  const [dimensions, setDimensions] = useState({
    length: 30,
    width: 20,
    height: 15,
  });
  const [declaredValue, setDeclaredValue] = useState(50000);
  const [deliverySpeed, setDeliverySpeed] =
    useState<keyof typeof DELIVERY_OPTIONS>("standard");
  const [requiresInsurance, setRequiresInsurance] = useState(true);
  const [isFragile, setIsFragile] = useState(false);

  const calculateDistancePrice = (from: string, to: string): number => {
    if (from === to) return 500;
    const fromZone =
      CAMEROON_CITIES[from as keyof typeof CAMEROON_CITIES]?.zone;
    const toZone = CAMEROON_CITIES[to as keyof typeof CAMEROON_CITIES]?.zone;
    const zonePricing: Record<string, Record<string, number>> = {
      coastal: {
        coastal: 1500,
        central: 2500,
        highlands: 3500,
        northern: 5000,
        "far-north": 6000,
        eastern: 4000,
        southern: 2000,
      },
      central: {
        coastal: 2500,
        central: 1200,
        highlands: 2800,
        northern: 4500,
        "far-north": 5500,
        eastern: 3500,
        southern: 2500,
      },
      highlands: {
        coastal: 3500,
        central: 2800,
        highlands: 1000,
        northern: 4000,
        "far-north": 5000,
        eastern: 4500,
        southern: 3500,
      },
      northern: {
        coastal: 5000,
        central: 4500,
        highlands: 4000,
        northern: 1500,
        "far-north": 2500,
        eastern: 4000,
        southern: 5500,
      },
      "far-north": {
        coastal: 6000,
        central: 5500,
        highlands: 5000,
        northern: 2500,
        "far-north": 800,
        eastern: 5000,
        southern: 6500,
      },
      eastern: {
        coastal: 4000,
        central: 3500,
        highlands: 4500,
        northern: 4000,
        "far-north": 5000,
        eastern: 1000,
        southern: 3000,
      },
      southern: {
        coastal: 2000,
        central: 2500,
        highlands: 3500,
        northern: 5500,
        "far-north": 6500,
        eastern: 3000,
        southern: 1200,
      },
    };
    return zonePricing[fromZone]?.[toZone] || 3000;
  };

  const calculateVolumetricWeight = (
    length: number,
    width: number,
    height: number
  ): number => {
    return (length * width * height) / 5000;
  };

  const calculationDetails = useMemo(() => {
    const selectedCategory = PACKAGE_CATEGORIES[category];
    const selectedSpeed = DELIVERY_OPTIONS[deliverySpeed];
    const distancePrice = calculateDistancePrice(fromCity, toCity);
    const volumetricWeight = calculateVolumetricWeight(
      dimensions.length,
      dimensions.width,
      dimensions.height
    );
    const chargeableWeight = Math.max(weight, volumetricWeight);
    const basePrice = selectedCategory.basePrice;
    const weightPrice = chargeableWeight * 800;
    const speedMultiplier = selectedSpeed.multiplier;
    const fragileHandling = isFragile ? selectedCategory.fragileHandling : 0;
    const insurance = requiresInsurance
      ? Math.max(declaredValue * selectedCategory.insuranceRate, 500)
      : 0;
    const subtotal =
      (basePrice + distancePrice + weightPrice + fragileHandling) *
      speedMultiplier;
    const total = subtotal + insurance;
    const canDeliverSameDay = fromCity === toCity;
    return {
      total: Math.round(total),
      canDeliverSameDay,
      chargeableWeight,
      volumetricWeight,
      breakdown: {
        "Base Rate": basePrice,
        Distance: distancePrice,
        Weight: weightPrice,
        "Speed Premium": Math.round(
          (subtotal / speedMultiplier - subtotal) * -1
        ),
        "Fragile Handling": fragileHandling,
        Insurance: Math.round(insurance),
      },
    };
  }, [
    fromCity,
    toCity,
    category,
    weight,
    dimensions,
    declaredValue,
    deliverySpeed,
    requiresInsurance,
    isFragile,
  ]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 sm:p-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <Calculator size={32} />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
            Shipping Cost Calculator
          </h2>
          <p className="text-emerald-100 text-center text-sm sm:text-base">
            Get accurate pricing for delivery across Cameroon
          </p>
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin
                      size={16}
                      className="inline mr-1 text-emerald-600"
                    />
                    From City
                  </label>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all bg-white"
                  >
                    {Object.entries(CAMEROON_CITIES).map(([city, info]) => (
                      <option key={city} value={city}>
                        {city} ({info.region})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin
                      size={16}
                      className="inline mr-1 text-emerald-600"
                    />
                    To City
                  </label>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all bg-white"
                  >
                    {Object.entries(CAMEROON_CITIES).map(([city, info]) => (
                      <option key={city} value={city}>
                        {city} ({info.region})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Package Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {Object.entries(PACKAGE_CATEGORIES).map(([key, cat]) => (
                    <button
                      key={key}
                      onClick={() =>
                        setCategory(key as keyof typeof PACKAGE_CATEGORIES)
                      }
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        category === key
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className="flex justify-center mb-2">{cat.icon}</div>
                      <div className="text-xs font-medium">{cat.name}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) =>
                      setWeight(Math.max(0.1, parseFloat(e.target.value) || 0))
                    }
                    min="0.1"
                    step="0.1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Declared Value (XAF)
                  </label>
                  <input
                    type="number"
                    value={declaredValue}
                    onChange={(e) =>
                      setDeclaredValue(
                        Math.max(1000, parseInt(e.target.value) || 0)
                      )
                    }
                    min="1000"
                    step="1000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Dimensions (cm)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    value={dimensions.length}
                    onChange={(e) =>
                      setDimensions((prev) => ({
                        ...prev,
                        length: Math.max(1, parseInt(e.target.value) || 0),
                      }))
                    }
                    placeholder="Length"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                  <input
                    type="number"
                    value={dimensions.width}
                    onChange={(e) =>
                      setDimensions((prev) => ({
                        ...prev,
                        width: Math.max(1, parseInt(e.target.value) || 0),
                      }))
                    }
                    placeholder="Width"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                  <input
                    type="number"
                    value={dimensions.height}
                    onChange={(e) =>
                      setDimensions((prev) => ({
                        ...prev,
                        height: Math.max(1, parseInt(e.target.value) || 0),
                      }))
                    }
                    placeholder="Height"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
                {calculationDetails.volumetricWeight > weight && (
                  <p className="text-xs text-amber-600 mt-1 flex items-center">
                    <Info size={12} className="mr-1" />
                    Volumetric weight (
                    {calculationDetails.volumetricWeight.toFixed(1)} kg) applies
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Delivery Speed
                </label>
                <div className="space-y-2">
                  {Object.entries(DELIVERY_OPTIONS).map(([key, option]) => {
                    const disabled =
                      key === "same_day" &&
                      !calculationDetails.canDeliverSameDay;
                    return (
                      <label
                        key={key}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                          deliverySpeed === key
                            ? "border-emerald-500 bg-emerald-50"
                            : disabled
                            ? "border-gray-200 bg-gray-50 cursor-not-allowed opacity-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="deliverySpeed"
                          value={key}
                          checked={deliverySpeed === key}
                          onChange={(e) =>
                            setDeliverySpeed(
                              e.target.value as keyof typeof DELIVERY_OPTIONS
                            )
                          }
                          disabled={disabled}
                          className="mr-3 text-emerald-600 focus:ring-emerald-500"
                        />
                        <div className="flex items-center flex-grow">
                          <div className="mr-3">{option.icon}</div>
                          <div>
                            <div className="font-medium text-sm">
                              {option.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              {option.description}
                            </div>
                          </div>
                          {key !== "standard" && (
                            <div className="ml-auto text-xs text-emerald-600 font-medium">
                              +{Math.round((option.multiplier - 1) * 100)}%
                            </div>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={requiresInsurance}
                    onChange={(e) => setRequiresInsurance(e.target.checked)}
                    className="mr-3 text-emerald-600 focus:ring-emerald-500 rounded"
                  />
                  <div>
                    <span className="font-medium text-sm">
                      Insurance Coverage
                    </span>
                    <div className="text-xs text-gray-600">
                      Recommended for valuable items
                    </div>
                  </div>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isFragile}
                    onChange={(e) => setIsFragile(e.target.checked)}
                    className="mr-3 text-emerald-600 focus:ring-emerald-500 rounded"
                  />
                  <div>
                    <span className="font-medium text-sm">Fragile Item</span>
                    <div className="text-xs text-gray-600">
                      Special handling required
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                  <h3 className="font-bold text-gray-800 mb-4 text-center">
                    Shipping Cost
                  </h3>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-extrabold text-emerald-600">
                      {calculationDetails.total.toLocaleString()} XAF
                    </div>
                    <div className="text-sm text-emerald-700 mt-1">
                      Central African Francs
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    {Object.entries(calculationDetails.breakdown).map(
                      ([label, amount]) =>
                        amount > 0 && (
                          <div
                            key={label}
                            className="flex justify-between text-gray-700"
                          >
                            <span>{label}:</span>
                            <span>{amount.toLocaleString()} XAF</span>
                          </div>
                        )
                    )}
                  </div>
                  <div className="border-t border-emerald-300 mt-3 pt-3">
                    <div className="flex justify-between font-bold text-emerald-800">
                      <span>Total:</span>
                      <span>
                        {calculationDetails.total.toLocaleString()} XAF
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Package size={16} className="mr-2 text-emerald-600" />
                    <span>
                      Chargeable Weight:{" "}
                      {calculationDetails.chargeableWeight.toFixed(1)} kg
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck size={16} className="mr-2 text-emerald-600" />
                    <span>{DELIVERY_OPTIONS[deliverySpeed].description}</span>
                  </div>
                  {requiresInsurance && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield size={16} className="mr-2 text-emerald-600" />
                      <span>
                        Insured up to {declaredValue.toLocaleString()} XAF
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => navigate("/send-package")}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Proceed to Send Package{" "}
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Prices include all handling fees. Final cost confirmed at
                  booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TenderCalculator;
