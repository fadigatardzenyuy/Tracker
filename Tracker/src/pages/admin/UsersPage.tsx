import React from "react";
import { motion } from "framer-motion";

const UsersPage: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-4xl font-bold text-gray-800">User Management</h1>
      <p className="text-slate-600 mt-1">
        This page will contain tools for managing users.
      </p>
      <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
        Content coming soon...
      </div>
    </motion.div>
  );
};

export default UsersPage;
