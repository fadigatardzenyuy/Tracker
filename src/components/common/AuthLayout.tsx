import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => (
  <main className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
    <Outlet />
  </main>
);

export default AuthLayout;
