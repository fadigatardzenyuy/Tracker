import React from "react";
import { useParams } from "react-router-dom";
import { mockShipmentData, mockTrackingUpdates } from "../data/mockData";
import ShipmentDetailsCard from "../components/tracking/ShipmentDetailsCard";
import UpdatesFeed from "../components/tracking/UpdatesFeed";
import TrackingMap from "../components/tracking/TrackingMap";

const TrackingPage: React.FC = () => {
  const { trackingId } = useParams<{ trackingId: string }>();

  const shipment = mockShipmentData;
  const updates = mockTrackingUpdates;

  // The commented-out useEffect for a real API call can remain for future development.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // ... API call logic
  //   };
  //   fetchData();
  // }, [trackingId]);

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Tracking ID: {trackingId}
        </h2>
        <p className="text-lg text-emerald-600 font-medium">
          {shipment.status}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TrackingMap />
          <UpdatesFeed updates={updates} />
        </div>
        <div className="lg:col-span-1">
          <ShipmentDetailsCard shipment={shipment} />
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
