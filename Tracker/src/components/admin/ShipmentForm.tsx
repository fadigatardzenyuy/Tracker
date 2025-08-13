import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// A reusable input component for this form
const FormInput = ({
  id,
  label,
  type = "text",
  required = false,
  ...props
}: any) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
      {...props}
    />
  </div>
);

const ShipmentForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // In a real app, you would collect form data and send it to an API
    console.log("Form submitted");

    setTimeout(() => {
      setIsLoading(false);
      alert("Shipment created successfully!");
      navigate("/admin/dashboard");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Sender Information */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">
          Sender Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput id="sender_name" label="Full Name" required />
          <FormInput
            id="sender_email"
            label="Email Address"
            type="email"
            required
          />
          <FormInput id="sender_phone" label="Phone Number" required />
          <FormInput
            id="sender_address"
            label="Full Address"
            required
            className="md:col-span-2"
          />
        </div>
      </div>

      {/* Recipient Information */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">
          Recipient Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput id="recipient_name" label="Full Name" required />
          <FormInput id="recipient_phone" label="Phone Number" required />
          <FormInput
            id="recipient_address"
            label="Full Delivery Address"
            required
            className="md:col-span-2"
          />
        </div>
      </div>

      {/* Package & Logistics Information */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">
          Package & Logistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FormInput id="origin" label="Origin City" required />
          <FormInput id="destination" label="Destination City" required />
          <FormInput
            id="travel_date"
            label="Shipment Date"
            type="date"
            required
          />
          <div className="md:col-span-2 lg:col-span-3">
            <label
              htmlFor="item_description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Item Description
            </label>
            <textarea
              id="item_description"
              name="item_description"
              rows={3}
              required
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-6 py-3 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 disabled:bg-emerald-300 flex items-center"
        >
          {isLoading ? "Saving..." : "Save Shipment"}
        </button>
      </div>
    </form>
  );
};

export default ShipmentForm;
