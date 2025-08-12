import React from "react";
import { User, MapPin, Package, Calendar } from "lucide-react";

const DetailRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start">
    <div className="text-emerald-600 mt-1 mr-3">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

const ShipmentDetailsCard = ({ shipment }: { shipment: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h3 className="text-xl font-bold border-b pb-3">Shipment Details</h3>
      <img
        src={shipment.image_url}
        alt="Shipment"
        className="rounded-lg w-full"
      />

      <div className="space-y-4">
        <DetailRow
          icon={<User size={20} />}
          label="Sender"
          value={shipment.sender_name}
        />
        <DetailRow
          icon={<MapPin size={20} />}
          label="Origin"
          value={shipment.origin}
        />
        <DetailRow
          icon={<User size={20} />}
          label="Recipient"
          value={shipment.recipient_name}
        />
        <DetailRow
          icon={<MapPin size={20} />}
          label="Destination"
          value={shipment.destination}
        />
        <DetailRow
          icon={<Calendar size={20} />}
          label="Travel Date"
          value={shipment.travel_date}
        />
        <DetailRow
          icon={<Package size={20} />}
          label="Item Description"
          value={shipment.item_description}
        />
      </div>
    </div>
  );
};

export default ShipmentDetailsCard;
