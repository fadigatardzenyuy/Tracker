import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu, X, Package } from "lucide-react";

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar for mobile, including hamburger menu */}
        <header className="lg:hidden bg-white shadow-md p-4 flex justify-between items-center z-30">
          <div className="flex items-center space-x-2">
            <Package className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold">Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* The actual page content, with its own scrollbar */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
