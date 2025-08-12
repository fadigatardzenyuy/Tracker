import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, CheckCircle, Package, MapPin } from "lucide-react";
import Card, { CardContent, CardHeader } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";

// --- Interfaces for our Data Shape ---
interface TrackingUpdate {
  status: string;
  location: string;
  timestamp: string;
}

interface TrackingData {
  trackingCode: string;
  status: string;
  origin: string;
  destination: string;
  eta: string; // Estimated Time of Arrival
  history: TrackingUpdate[];
}

// --- Mock Data to Simulate an API Response ---
const mockTrackingData: TrackingData = {
  trackingCode: "CT12345",
  status: "In Transit",
  origin: "Douala",
  destination: "Yaoundé",
  eta: "2023-10-27, 5:00 PM",
  history: [
    {
      status: "Package information received",
      location: "Douala",
      timestamp: "2023-10-26 09:00",
    },
    {
      status: "Package picked up from sender",
      location: "Douala",
      timestamp: "2023-10-26 15:00",
    },
    {
      status: "Departed from sorting facility",
      location: "Douala",
      timestamp: "2023-10-27 08:30",
    },
    {
      status: "In transit to destination city",
      location: "Between Douala & Yaoundé",
      timestamp: "2023-10-27 10:30",
    },
  ],
};

const TrackPackagePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [trackingCode, setTrackingCode] = useState(
    searchParams.get("code") || ""
  );
  const [searchResult, setSearchResult] = useState<TrackingData | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This effect runs the search automatically if a tracking code is in the URL
  useEffect(() => {
    if (trackingCode) {
      handleSearch();
    }
  }, []); // Run only on initial page load

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!trackingCode) return;

    setError("");
    setSearchResult(null);
    setIsLoading(true);

    // --- Mock API Call Simulation ---
    setTimeout(() => {
      if (trackingCode.toUpperCase() === mockTrackingData.trackingCode) {
        setSearchResult(mockTrackingData);
      } else {
        setError(
          "Tracking code not found. Please check the code and try again."
        );
      }
      setIsLoading(false);
    }, 1500); // Simulate a 1.5-second network delay
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-3xl py-12"
    >
      <Card>
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold">Track Your Package</h1>
          <p className="text-slate-600 mt-2">
            Enter your tracking code to see the live status of your delivery.
          </p>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-end gap-2"
          >
            <div className="w-full flex-grow">
              <Label htmlFor="tracking">Tracking Code</Label>
              <Input
                id="tracking"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="e.g., CT12345"
                className="h-14 text-lg"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              isLoading={isLoading}
              disabled={isLoading}
            >
              {!isLoading && <Search className="mr-2 h-5 w-5" />}
              Track
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <p className="bg-red-100 text-red-700 p-4 rounded-lg text-center mt-8 font-medium">
          {error}
        </p>
      )}

      {searchResult && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">Shipment Details</h2>
                  <p className="text-slate-500">
                    Tracking Code: {searchResult.trackingCode}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    searchResult.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {searchResult.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8 p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm text-slate-500">Origin</p>
                  <p className="font-bold text-lg flex items-center justify-center">
                    <MapPin size={16} className="mr-1" />
                    {searchResult.origin}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Destination</p>
                  <p className="font-bold text-lg flex items-center justify-center">
                    <MapPin size={16} className="mr-1" />
                    {searchResult.destination}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Est. Delivery</p>
                  <p className="font-bold text-lg">{searchResult.eta}</p>
                </div>
              </div>

              <div className="bg-gray-200 h-64 rounded-lg mb-8 flex items-center justify-center">
                <p className="text-gray-500 font-medium">
                  Live Google Map Placeholder
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4">Tracking History</h3>
              <div className="space-y-8 relative pl-6 border-l-2 border-slate-200">
                {searchResult.history
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <div
                      key={index}
                      className="relative flex items-start space-x-4"
                    >
                      <div
                        className={`absolute -left-[1.3rem] top-1 flex items-center justify-center w-8 h-8 rounded-full text-white ${
                          index === 0 ? "bg-emerald-500" : "bg-slate-400"
                        }`}
                      >
                        <Package size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {item.status}
                        </p>
                        <p className="text-sm text-slate-500">
                          {item.location} - {item.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div> // <-- FIXED: This closing tag was missing.
  );
};

export default TrackPackagePage;
