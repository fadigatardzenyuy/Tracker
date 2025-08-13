import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ShipmentForm from "../../components/admin/ShipmentForm";

const CreateShipmentPage: React.FC = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center mb-4 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold text-gray-800">
          Create New Shipment
        </h1>
        <p className="text-slate-600 mt-1">
          Fill in all the details below to register a new package for delivery.
        </p>
      </div>
      <ShipmentForm />
    </motion.div>
  );
};

export default CreateShipmentPage;
