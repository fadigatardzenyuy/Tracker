import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, MoreHorizontal } from "lucide-react";

// Mock data to simulate fetching registered users from an API
const mockUsers = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+237 677 123 456",
    registeredDate: "2023-10-25",
    status: "Active",
  },
  {
    id: "u2",
    name: "Marie T.",
    email: "marie.t@example.com",
    phone: "+237 655 987 654",
    registeredDate: "2023-10-22",
    status: "Active",
  },
  {
    id: "u3",
    name: "Ahmed Bello",
    email: "ahmed.b@example.com",
    phone: "+237 699 111 222",
    registeredDate: "2023-10-20",
    status: "Suspended",
  },
  {
    id: "u4",
    name: "Esther N.",
    email: "esther.n@example.com",
    phone: "+237 688 333 444",
    registeredDate: "2023-10-18",
    status: "Active",
  },
];

const UsersPage: React.FC = () => {
  // Helper function to get badge colors based on status
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Users Management</h1>
          <p className="text-slate-600 mt-1">
            View and manage all registered users (senders).
          </p>
        </div>
        {/* While users register themselves, an admin might still need to add one manually */}
        <Link
          to="#" // This would link to a "Create User" page if needed
          className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
        >
          <UserPlus className="mr-2 h-5 w-5" />
          Add New User
        </Link>
      </header>

      {/* Users Table Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <header className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            All Registered Users
          </h2>
          <p className="text-slate-500 mt-1">
            A list of all users who have created an account.
          </p>
        </header>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Name</th>
                <th className="p-4 font-semibold text-slate-600">Contact</th>
                <th className="p-4 font-semibold text-slate-600">
                  Registered On
                </th>
                <th className="p-4 font-semibold text-slate-600">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-slate-50">
                  <td className="p-4 font-medium text-gray-800">{user.name}</td>
                  <td className="p-4 text-gray-600">
                    <div className="flex flex-col">
                      <span>{user.email}</span>
                      <span className="text-xs text-slate-500">
                        {user.phone}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{user.registeredDate}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-full">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                    {/* In a real app, this button would trigger a dropdown with actions */}
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

export default UsersPage;
