import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, UserPlus } from "lucide-react";

const CreateAgentPage: React.FC = () => {
  // --- Base classes for consistent styling ---
  const inputBase =
    "w-full mt-1 p-3 text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-shadow";
  const labelBase = "block text-base font-medium text-gray-700";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("New agent created successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <Link
          to="/admin/agents"
          className="inline-flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Agents List
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <header className="mb-8">
          <div className="flex items-center">
            <UserPlus className="mr-3 h-8 w-8 text-emerald-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create New Agent
              </h1>
              <p className="text-slate-500 mt-1">
                Fill in the details below to add a new agent to the system.
              </p>
            </div>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className={labelBase}>
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                required
                className={inputBase}
                placeholder="e.g., John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelBase}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                className={inputBase}
                placeholder="+237..."
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className={labelBase}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className={inputBase}
              placeholder="agent@example.com"
            />
          </div>
          <div>
            <label htmlFor="location" className={labelBase}>
              Primary Location / Hub
            </label>
            <input
              id="location"
              type="text"
              required
              className={inputBase}
              placeholder="e.g., Douala - Akwa"
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
            >
              Create Agent
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CreateAgentPage;
