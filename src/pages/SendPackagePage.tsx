import React from "react";
import { useAuth } from "../hooks/useAuth";
import SendPackageForm from "../components/forms/SendPackageForm";
import { motion } from "framer-motion";

const SendPackagePage: React.FC = () => {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-4xl py-12"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Send a New Package</h1>
        <p className="text-slate-600 mt-2">
          Confirm your details and provide the package info below.
        </p>
      </div>
      <SendPackageForm sender={user} />
    </motion.div>
  );
};
export default SendPackagePage;
