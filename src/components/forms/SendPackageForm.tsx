import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card, { CardHeader, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { User, Phone, MapPin, Package, Scale, Ruler } from "lucide-react";

interface SenderDetails {
  name: string;
  email: string;
  phone: string;
}

interface SendPackageFormProps {
  sender: SenderDetails;
}

const SendPackageForm: React.FC<SendPackageFormProps> = ({ sender }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<"electronics" | "luggage">(
    "electronics"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const packageData = {
      category,
      ...Object.fromEntries(formData.entries()),
    };

    // --- Mock API Call Simulation ---
    setTimeout(() => {
      console.log("Submitting Package Data:", {
        senderDetails: sender,
        packageDetails: packageData,
      });
      alert(
        "Package submitted for delivery! You will be redirected to your order history."
      );
      setIsLoading(false);
      navigate("/history");
    }, 2000); // Simulate a 2-second API call
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* --- Sender Details Card --- */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">
            Your Information (Sender)
          </h2>
          <p className="text-slate-500">
            This data is from your profile and cannot be edited here.
          </p>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="text-sm text-slate-500">Full Name</p>
            <p className="font-medium text-slate-800">{sender.name}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Email Address</p>
            <p className="font-medium text-slate-800">{sender.email}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Phone Number</p>
            <p className="font-medium text-slate-800">{sender.phone}</p>
          </div>
        </CardContent>
      </Card>

      {/* --- Receiver Details Card --- */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">
            Receiver's Information
          </h2>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-6">
          <div className="sm:col-span-1">
            <Label htmlFor="recipientName">Full Name</Label>
            <Input
              id="recipientName"
              name="recipientName"
              type="text"
              placeholder="Jane Doe"
              icon={<User size={18} />}
              required
            />
          </div>
          <div className="sm:col-span-1">
            <Label htmlFor="recipientPhone">Phone Number</Label>
            <Input
              id="recipientPhone"
              name="recipientPhone"
              type="tel"
              placeholder="+237..."
              icon={<Phone size={18} />}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="deliveryAddress">Full Delivery Address</Label>
            <Input
              id="deliveryAddress"
              name="deliveryAddress"
              type="text"
              placeholder="123 Market Rd, Bonapriso, Douala"
              icon={<MapPin size={18} />}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* --- Package Details Card --- */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">Package Details</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Package Category</Label>
            <div className="grid grid-cols-2 gap-2 p-1 mt-1 bg-slate-100 rounded-lg">
              <button
                type="button"
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
                type="button"
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
          </div>

          {category === "luggage" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="e.g., 5.5"
                    icon={<Scale size={18} />}
                  />
                </div>
                <div>
                  <Label htmlFor="size">Size (L x W x H cm)</Label>
                  <Input
                    id="size"
                    name="size"
                    type="text"
                    placeholder="e.g., 50x30x20"
                    icon={<Ruler size={18} />}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div>
            <Label htmlFor="description">Brief Description of Contents</Label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              placeholder="e.g., One box containing a used laptop, charger, and clothing."
              className="w-full mt-1 p-3 border border-slate-300 rounded-lg text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none transition-all"
            />
          </div>
        </CardContent>
      </Card>

      {error && (
        <p className="text-red-600 text-center font-semibold">{error}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? "Submitting Package..." : "Confirm and Send Package"}
      </Button>
    </form>
  );
};

export default SendPackageForm;
