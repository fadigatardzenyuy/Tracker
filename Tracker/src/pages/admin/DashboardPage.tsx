import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Truck,
  CheckCircle,
  Clock,
  AlertTriangle,
  PlusCircle,
} from "lucide-react";
import StatCard from "../../components/admin/StatCard";

// Mock data for recent activity
const recentShipments = [
  { id: "sh127", receiver: "Elise Kameni", status: "In Transit" },
  { id: "sh126", receiver: "David Fotso", status: "Issue" },
  { id: "sh125", receiver: "Amina Bello", status: "Pending" },
];

const getStatusClasses = (status: string) => {
  if (status === "In Transit") return "bg-blue-100 text-blue-800";
  if (status === "Issue") return "bg-red-100 text-red-800";
  return "bg-yellow-100 text-yellow-800";
};

const DashboardPage: React.FC = () => {
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
            Dashboard
          </h1>
          <p className="text-slate-600 mt-1">
            A high-level overview of logistics.
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

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="In Transit" value="12" icon={<Truck />} />
        <StatCard title="Delivered Today" value="34" icon={<CheckCircle />} />
        <StatCard title="Pending Pickup" value="5" icon={<Clock />} />
        <StatCard title="Shipment Issues" value="1" icon={<AlertTriangle />} />
      </div>

      {/* Recent Activity Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg border">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentShipments.map((shipment) => (
            <div
              key={shipment.id}
              className="flex flex-col sm:flex-row justify-between sm:items-center p-3 bg-slate-50 rounded-lg"
            >
              <div>
                <p className="font-semibold text-gray-700">
                  {shipment.receiver}
                </p>
                <p className="text-sm text-gray-500">ID: {shipment.id}</p>
              </div>
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
                    shipment.status
                  )}`}
                >
                  {shipment.status}
                </span>
                <Link
                  to={`/admin/shipments/${shipment.id}`}
                  className="font-medium text-emerald-600 hover:underline"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPage;
