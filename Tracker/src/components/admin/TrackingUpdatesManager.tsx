import React from "react";
import { PlusCircle, CheckCircle } from "lucide-react";

// Mock data to simulate fetching a package's history
const mockUpdates = [
  {
    status: "In Transit",
    location: "Yaoundé Hub",
    timestamp: "2023-10-27 10:30",
  },
  {
    status: "Package Picked Up",
    location: "Douala",
    timestamp: "2023-10-26 15:00",
  },
  {
    status: "Shipment Created",
    location: "System",
    timestamp: "2023-10-26 12:00",
  },
];

const TrackingUpdatesManager: React.FC = () => {
  const handleAddUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUpdate = {
      status: formData.get("status_update"),
      location: formData.get("location"),
    };
    // In a real app, you'd send this to your API
    console.log("Adding new update:", newUpdate);
    alert(`Tracking Update Added: ${newUpdate.status}`);
    e.currentTarget.reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b">
        <h3 className="text-xl font-bold text-gray-800">Tracking History</h3>
        <p className="text-slate-500 mt-1">
          Add new updates and view the package's journey.
        </p>
      </div>
      <div className="p-6">
        {/* Form to add a new update */}
        <form
          onSubmit={handleAddUpdate}
          className="bg-slate-50 p-4 rounded-lg mb-8 border"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Add New Update
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Status Description
              </label>
              <input
                name="status_update"
                placeholder="e.g., Arrived at facility"
                required
                className="w-full mt-1 p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Location
              </label>
              <input
                name="location"
                placeholder="e.g., Yaoundé"
                required
                className="w-full mt-1 p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Update
          </button>
        </form>

        {/* List of existing updates */}
        <h3 className="text-lg font-semibold mb-4 text-gray-700">History</h3>
        <div className="space-y-6 relative pl-4 border-l-2 border-slate-200">
          {mockUpdates.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-emerald-500 mt-1 absolute -left-4 bg-white rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">{item.status}</p>
                <p className="text-sm text-gray-500">
                  {item.location} - {item.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackingUpdatesManager;
