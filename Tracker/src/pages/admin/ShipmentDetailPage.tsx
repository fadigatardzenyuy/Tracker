import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, User, Package as PackageIcon } from "lucide-react";
import TrackingUpdatesManager from "../../components/admin/TrackingUpdatesManager";

// Mock data for a single shipment, simulating an API fetch based on the URL ID
const mockShipmentDetail = {
  id: "sh124",
  trackingCode: "CT67890",
  status: "In Transit",
  sender: {
    name: "John Doe",
    phone: "+237123456789",
    address: "123 Main St, Akwa, Douala",
  },
  recipient: {
    name: "Mark Essien",
    phone: "+237987654321",
    address: "456 Market Rd, Bastos, Yaoundé",
  },
  package: {
    category: "Electronics",
    weight: "2.5 kg",
    size: "30x20x10 cm",
    description: "One sealed box containing a used laptop and charger.",
  },
};

// Reusable helper component for displaying details
const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-slate-500">{label}</p>
    <p className="font-medium text-slate-800">{value}</p>
  </div>
);

// Our own custom, in-built Card component
const CustomCard = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-lg shadow-lg">
    <div className="p-4 border-b flex items-center">
      {icon}
      <h3 className="text-lg font-bold text-gray-800 ml-2">{title}</h3>
    </div>
    <div className="p-4 space-y-4">{children}</div>
  </div>
);

const ShipmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you would use the 'id' to fetch data from your API.
  const shipment = mockShipmentDetail;

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header section of the page */}
      <div>
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center mb-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Shipment #{shipment.trackingCode}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-slate-600">Current Status:</p>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                {shipment.status}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 font-semibold text-gray-800 bg-white border rounded-lg hover:bg-gray-100 transition-colors">
              Edit Shipment
            </button>
            <button className="px-4 py-2 font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
              Send Status Email
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Shipment Details */}
        <div className="lg:col-span-1 space-y-6">
          <CustomCard
            title="Sender Details"
            icon={<User className="h-5 w-5 text-primary" />}
          >
            <DetailRow label="Name" value={shipment.sender.name} />
            <DetailRow label="Phone" value={shipment.sender.phone} />
            <DetailRow label="Address" value={shipment.sender.address} />
          </CustomCard>

          <CustomCard
            title="Recipient Details"
            icon={<User className="h-5 w-5 text-primary" />}
          >
            <DetailRow label="Name" value={shipment.recipient.name} />
            <DetailRow label="Phone" value={shipment.recipient.phone} />
            <DetailRow label="Address" value={shipment.recipient.address} />
          </CustomCard>

          <CustomCard
            title="Package Details"
            icon={<PackageIcon className="h-5 w-5 text-primary" />}
          >
            <DetailRow label="Category" value={shipment.package.category} />
            <DetailRow label="Weight" value={shipment.package.weight} />
            <DetailRow label="Dimensions" value={shipment.package.size} />
            <DetailRow label="Contents" value={shipment.package.description} />
          </CustomCard>
        </div>

        {/* Right Column: Tracking Updates */}
        <div className="lg:col-span-2">
          <TrackingUpdatesManager />
        </div>
      </div>
    </motion.div>
  );
};

export default ShipmentDetailPage;
