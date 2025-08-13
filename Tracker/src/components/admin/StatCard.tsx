import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

// No Shadcn components are used here. This is a fully custom component.
const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
      <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
