import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Truck,
  Users,
  Settings,
  LogOut,
  Package,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const linkClass =
    "flex items-center px-4 py-3 text-gray-300 hover:bg-emerald-700 hover:text-white rounded-lg transition-colors";
  const activeLinkClass =
    "flex items-center px-4 py-3 text-white bg-emerald-600 rounded-lg font-semibold";

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full p-4">
      <div className="flex items-center space-x-2 border-b border-gray-700 pb-4 mb-4">
        <Package className="w-8 h-8 text-emerald-500 flex-shrink-0" />
        <span className="text-2xl font-bold whitespace-nowrap">
          CamTrack Admin
        </span>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                isActive ? activeLinkClass : linkClass
              }
            >
              <LayoutDashboard className="mr-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/shipments"
              className={({ isActive }) =>
                isActive ? activeLinkClass : linkClass
              }
            >
              <Truck className="mr-3" />
              Shipments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                isActive ? activeLinkClass : linkClass
              }
            >
              <Users className="mr-3" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                isActive ? activeLinkClass : linkClass
              }
            >
              <Settings className="mr-3" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <button className={`${linkClass} w-full`}>
          <LogOut className="mr-3" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
