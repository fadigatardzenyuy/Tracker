import React from "react";
import { Link } from "react-router-dom";

import { Package, ArrowLeft } from "lucide-react";
import SignupForm from "../../components/auth/Signup";

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-40 animate-pulse delay-1000" />

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4 mr-2" />
            Join Our Network
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600">
            Start tracking your goods across Cameroon
          </p>
        </div>

        <SignupForm />

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
