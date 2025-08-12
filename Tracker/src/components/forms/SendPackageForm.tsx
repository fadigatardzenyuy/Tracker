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
  // Remove token usage here since no auth
  // const { token } = useAuth();
  const [category, setCategory] = useState<"electronics" | "luggage">("electronics");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const recipientPhone = formData.get("recipientPhone") as string;
    const weight = formData.get("weight") as string;

    if (!formData.get("recipientName")) {
      errors.recipientName = "Recipient name is required";
    }
    if (!recipientPhone) {
      errors.recipientPhone = "Phone number is required";
    } else if (!/^\+?[0-9]{7,15}$/.test(recipientPhone)) {
      errors.recipientPhone = "Invalid phone number format";
    }
    if (!formData.get("deliveryAddress")) {
      errors.deliveryAddress = "Delivery address is required";
    }
    if (!formData.get("description")) {
      errors.description = "Description is required";
    }
    if (category === "luggage") {
      if (!weight) {
        errors.weight = "Weight is required for luggage";
      } else if (parseFloat(weight) <= 0) {
        errors.weight = "Weight must be greater than 0";
      }
      if (!formData.get("size")) {
        errors.size = "Dimensions are required for luggage";
      }
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setFormErrors({});
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const validationErrors = validateForm(formData);

      if (Object.keys(validationErrors).length > 0) {
        setFormErrors(validationErrors);
        throw new Error("Form validation failed");
      }

      const packageData = {
        category,
        recipientName: formData.get("recipientName") as string,
        recipientPhone: formData.get("recipientPhone") as string,
        deliveryAddress: formData.get("deliveryAddress") as string,
        description: formData.get("description") as string,
        ...(category === "luggage" && {
          weight: parseFloat(formData.get("weight") as string),
          size: formData.get("size") as string,
        }),
      };

      // Remove Authorization header since no auth
      const response = await fetch("http://localhost:5500/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`, // removed
        },
        body: JSON.stringify({
          sender,
          packageDetails: packageData,
        }),
      });

      const responseText = await response.text();
      let responseData;
      try {
        responseData = responseText ? JSON.parse(responseText) : {};
      } catch {
        responseData = { error: responseText || "Unknown error" };
      }

      if (!response.ok) {
        // Show backend error details if any
        const backendError =
          responseData.error ||
          (responseData.errors && JSON.stringify(responseData.errors)) ||
          `HTTP error! Status: ${response.status}`;
        throw new Error(backendError);
      }

      alert("Package submitted successfully! Redirecting to order history.");
      navigate("/history");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      console.error("Submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Sender Details Card */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">Your Information (Sender)</h2>
          <p className="text-slate-500">This data is from your profile and cannot be edited here.</p>
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

      {/* Receiver Details Card */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">Receiver's Information</h2>
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
              error={formErrors.recipientName}
            />
            {formErrors.recipientName && (
              <p className="text-red-500 text-sm mt-1">{formErrors.recipientName}</p>
            )}
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
              error={formErrors.recipientPhone}
            />
            {formErrors.recipientPhone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.recipientPhone}</p>
            )}
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
              error={formErrors.deliveryAddress}
            />
            {formErrors.deliveryAddress && (
              <p className="text-red-500 text-sm mt-1">{formErrors.deliveryAddress}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Package Details Card */}
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
                    error={formErrors.weight}
                  />
                  {formErrors.weight && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.weight}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="size">Size (L x W x H cm)</Label>
                  <Input
                    id="size"
                    name="size"
                    type="text"
                    placeholder="e.g., 50x30x20"
                    icon={<Ruler size={18} />}
                    error={formErrors.size}
                  />
                  {formErrors.size && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.size}</p>
                  )}
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
              className={`w-full mt-1 p-3 border rounded-lg text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none transition-all ${
                formErrors.description ? "border-red-500" : "border-slate-300"
              }`}
            />
            {formErrors.description && (
              <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {error && <p className="text-red-600 text-center font-semibold">{error}</p>}

      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting Package..." : "Confirm and Send Package"}
      </Button>
    </form>
  );
};

export default SendPackageForm;
