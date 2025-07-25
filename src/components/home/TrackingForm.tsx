import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const TrackingForm: React.FC = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/track/${trackingId.trim()}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full mx-auto bg-white rounded-xl shadow-lg p-3 flex items-center"
    >
      <Search className="w-6 h-6 text-gray-400 mx-3" />
      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter your tracking ID (e.g., CT-2025-123456)"
        className="flex-grow p-2 text-lg bg-transparent focus:outline-none"
      />
      <button
        type="submit"
        className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
      >
        Track
      </button>
    </form>
  );
};

export default TrackingForm;
