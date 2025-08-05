import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card, { CardContent, CardHeader } from "../components/ui/Card";
import Button from "../components/ui/Button";

// Mock data to simulate fetching a user's order history from an API
const mockOrders = [
  {
    id: "1",
    date: "2023-10-26",
    receiver: "Jane Doe",
    destination: "Douala",
    status: "Delivered",
    trackingCode: "CT12345",
  },
  {
    id: "2",
    date: "2023-10-28",
    receiver: "Mark Essien",
    destination: "Yaoundé",
    status: "In Transit",
    trackingCode: "CT67890",
  },
  {
    id: "3",
    date: "2023-11-02",
    receiver: "Amina Bello",
    destination: "Kribi",
    status: "Pending",
    trackingCode: "CT11223",
  },
];

const OrderHistoryPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-5xl py-12"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">My Order History</h1>
        <p className="text-slate-600 mt-2">
          A list of all your past and current shipments.
        </p>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-sm font-semibold text-slate-600 uppercase">
                    Date
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 uppercase">
                    Receiver
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 uppercase">
                    Destination
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 uppercase">
                    Status
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 uppercase text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium text-slate-800">
                      {order.date}
                    </td>
                    <td className="p-4 text-slate-700">{order.receiver}</td>
                    <td className="p-4 text-slate-700">{order.destination}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="text-right p-4">
                      <Link to={`/track?code=${order.trackingCode}`}>
                        <Button variant="ghost">View Tracking</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default OrderHistoryPage;
