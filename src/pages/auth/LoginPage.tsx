import React from "react";
import { Link } from "react-router-dom";

import { Shield, ArrowLeft } from "lucide-react";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage: React.FC = () => {
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
            <Shield className="w-4 h-4 mr-2" />
            Secure Login
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">Sign in to track your goods</p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
