import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlusCircle, MoreHorizontal } from "lucide-react";

// Mock data for agents list
const mockAgents = [
  {
    id: "ag1",
    name: "John Doe",
    phone: "+237 677 123 456",
    email: "john@camtrack.cm",
    location: "Douala - Akwa",
  },
  {
    id: "ag2",
    name: "Marie Claire",
    phone: "+237 655 987 654",
    email: "marie@camtrack.cm",
    location: "Yaoundé - Bastos",
  },
  {
    id: "ag3",
    name: "Ahmed Bello",
    phone: "+237 699 111 222",
    email: "ahmed@camtrack.cm",
    location: "Garoua",
  },
];

const AgentsPage: React.FC = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Agents Management
          </h1>
          <p className="text-slate-600 mt-1">
            View, create, and manage your delivery agents.
          </p>
        </div>
        <Link
          to="/admin/agents/create"
          className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Add New Agent
        </Link>
      </header>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <header className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">All Agents</h2>
          <p className="text-slate-500 mt-1">
            A list of all registered agents in the system.
          </p>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Name</th>
                <th className="p-4 font-semibold text-slate-600">
                  Phone Number
                </th>
                <th className="p-4 font-semibold text-slate-600">Email</th>
                <th className="p-4 font-semibold text-slate-600">Location</th>
                <th className="p-4 font-semibold text-slate-600 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockAgents.map((agent) => (
                <tr key={agent.id} className="border-b hover:bg-slate-50">
                  <td className="p-4 font-medium text-gray-800">
                    {agent.name}
                  </td>
                  <td className="p-4 text-gray-600">{agent.phone}</td>
                  <td className="p-4 text-gray-600">{agent.email}</td>
                  <td className="p-4 text-gray-600">{agent.location}</td>
                  <td className="p-4 text-right">
                    {/* Dropdown can be implemented here with a library like Headless UI if needed */}
                    <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-full">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentsPage;
