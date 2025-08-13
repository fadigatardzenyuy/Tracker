import React from "react";
import { Link } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

// Mock data remains the same
const mockShipments = [
  {
    id: "sh123",
    trackingCode: "CT12345",
    receiver: "Jane Doe",
    destination: "Douala",
    status: "Delivered",
    date: "2023-10-26",
  },
  {
    id: "sh124",
    trackingCode: "CT67890",
    receiver: "Mark Essien",
    destination: "Yaoundé",
    status: "In Transit",
    date: "2023-10-28",
  },
  {
    id: "sh125",
    trackingCode: "CT11223",
    receiver: "Amina Bello",
    destination: "Kribi",
    status: "Pending",
    date: "2023-11-02",
  },
  {
    id: "sh126",
    trackingCode: "CT44556",
    receiver: "David Fotso",
    destination: "Bamenda",
    status: "Issue",
    date: "2023-11-03",
  },
];

// Helper function to get the correct CSS classes for our custom badge
const getStatusClasses = (status: string): string => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "In Transit":
      return "bg-blue-100 text-blue-800";
    case "Issue":
      return "bg-red-100 text-red-800";
    default:
      return "bg-yellow-100 text-yellow-800";
  }
};

interface ShipmentTableProps {
  limit?: number;
}

const ShipmentTable: React.FC<ShipmentTableProps> = ({ limit }) => {
  const shipments = limit ? mockShipments.slice(0, limit) : mockShipments;

  return (
    // Replaced Shadcn <Table> with a standard HTML <table>
    <table className="w-full text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 font-semibold">Tracking Code</th>
          <th className="p-4 font-semibold">Receiver</th>
          <th className="p-4 font-semibold">Destination</th>
          <th className="p-4 font-semibold">Status</th>
          <th className="p-4 font-semibold">Date</th>
          <th className="p-4 font-semibold text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment) => (
          <tr key={shipment.id} className="border-b hover:bg-gray-50">
            <td className="p-4 font-medium text-gray-800">
              {shipment.trackingCode}
            </td>
            <td className="p-4 text-gray-600">{shipment.receiver}</td>
            <td className="p-4 text-gray-600">{shipment.destination}</td>
            <td className="p-4">
              {/* This is our custom, in-built Badge component */}
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
                  shipment.status
                )}`}
              >
                {shipment.status}
              </span>
            </td>
            <td className="p-4 text-gray-600">{shipment.date}</td>
            <td className="p-4 text-right">
              {/* Replaced Dropdown with a simple, clean "View" link */}
              <Link
                to={`/admin/shipments/${shipment.id}`}
                className="font-medium text-emerald-600 hover:text-emerald-800 hover:underline"
              >
                View Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShipmentTable;
