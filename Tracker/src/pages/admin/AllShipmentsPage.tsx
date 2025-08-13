import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlusCircle, Search } from "lucide-react";
import ShipmentTable from "../../components/admin/ShipmentTable";

const AllShipmentsPage: React.FC = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            All Shipments
          </h1>
          <p className="text-slate-600 mt-1">
            Search, view, and manage all shipments.
          </p>
        </div>
        <Link
          to="/admin/shipments/create"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Create Shipment
        </Link>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow-md border flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-grow w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by tracking code or receiver..."
            className="w-full pl-10 p-2 border border-slate-300 rounded-md"
          />
        </div>
        <button className="px-4 py-2 w-full sm:w-auto font-semibold text-gray-800 bg-white border rounded-lg hover:bg-gray-100">
          Filter
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-lg shadow-lg border">
        <ShipmentTable /> {/* The responsive table component */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border hover:bg-gray-100">
          Previous
        </button>
        <span className="text-sm text-gray-700">Page 1 of 10</span>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border hover:bg-gray-100">
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default AllShipmentsPage;
