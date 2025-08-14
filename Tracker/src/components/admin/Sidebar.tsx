import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Truck,
  Users, // We'll use this for "Users"
  UserCheck, // A more specific icon for "Agents"
  Settings,
  LogOut,
  Package,
} from "lucide-react";

const Sidebar: React.FC = () => {
  // --- Reusable classes for consistency ---
  const linkBaseClass =
    "flex items-center px-4 py-3 rounded-lg transition-colors duration-200";
  const linkInactiveClass =
    "text-gray-300 hover:bg-emerald-700 hover:text-white";
  const linkActiveClass = "text-white bg-emerald-600 font-semibold shadow-md";

  // Helper function to combine classes for NavLink
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBaseClass} ${isActive ? linkActiveClass : linkInactiveClass}`;

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full p-4">
      {/* Header */}
      <div className="flex items-center space-x-3 border-b border-gray-700 pb-4 mb-6">
        <Package className="w-8 h-8 text-emerald-500 flex-shrink-0" />
        <span className="text-2xl font-bold whitespace-nowrap">
          CamTrack Admin
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <NavLink to="/admin/dashboard" className={getLinkClass}>
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/shipments" className={getLinkClass}>
              <Truck className="mr-3 h-5 w-5" />
              Shipments
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className={getLinkClass}>
              <Users className="mr-3 h-5 w-5" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/agents" className={getLinkClass}>
              <UserCheck className="mr-3 h-5 w-5" />
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/settings" className={getLinkClass}>
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Footer / Logout */}
      <div className="pt-4 border-t border-gray-700">
        <button className={`${linkBaseClass} ${linkInactiveClass} w-full`}>
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
