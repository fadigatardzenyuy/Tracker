import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card, { CardContent, CardHeader } from "./Card";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

const TenderCalculator: React.FC = () => {
  const [category, setCategory] = useState<"electronics" | "luggage">(
    "electronics"
  );
  const [weight, setWeight] = useState(1);
  const [size, setSize] = useState(50); // Represents the largest dimension in cm for simplicity

  // useMemo ensures the price is only recalculated when a relevant value changes
  const price = useMemo(() => {
    if (category === "electronics") {
      return 5000; // Fixed price for all electronics
    }

    // Custom pricing logic for luggage
    const baseCost = 2000;
    const weightCost = Math.max(0, weight) * 300; // 300 XAF per kg
    const sizeSurcharge = size > 100 ? 1000 : 0; // 1000 XAF surcharge for items over 100cm

    return baseCost + weightCost + sizeSurcharge;
  }, [category, weight, size]);

  return (
    <Card className="max-w-2xl mx-auto shadow-2xl shadow-slate-900/10 border-slate-200">
      <CardHeader className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Calculate Shipping Cost
        </h2>
        <p className="text-lg text-slate-600 mt-2">
          Get an instant estimate for your delivery.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Custom Tab Implementation */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setCategory("electronics")}
            className={`py-2.5 rounded-md font-medium transition-colors duration-300 ${
              category === "electronics"
                ? "bg-white shadow text-emerald-600"
                : "text-slate-500 hover:bg-slate-200"
            }`}
          >
            Electronics
          </button>
          <button
            onClick={() => setCategory("luggage")}
            className={`py-2.5 rounded-md font-medium transition-colors duration-300 ${
              category === "luggage"
                ? "bg-white shadow text-emerald-600"
                : "text-slate-500 hover:bg-slate-200"
            }`}
          >
            Luggage
          </button>
        </div>

        {/* Conditional Inputs for Luggage with Animation */}
        {category === "luggage" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div>
                <Label htmlFor="size">Largest Dimension (cm)</Label>
                <Input
                  id="size"
                  type="number"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  min="0"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Price Display */}
        <div className="text-center bg-emerald-50 p-6 rounded-lg border border-emerald-100">
          <p className="text-slate-600 font-medium">Estimated Cost</p>
          <p className="text-5xl font-extrabold text-emerald-600 tracking-tight">
            ₣{price.toLocaleString()}
          </p>
        </div>

        {/* Call to Action Button */}
        <Link to="/send-package">
          <Button size="lg" className="w-full">
            Proceed to Send Package
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TenderCalculator;
