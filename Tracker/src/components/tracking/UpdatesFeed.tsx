import { CheckCircle } from "lucide-react";

const UpdatesFeed = ({ updates }: { updates: any[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Tracking History</h3>
      <ol className="relative border-l border-gray-200">
        {/* FIXED: Removed the unused 'index' from the map function */}
        {updates
          .slice()
          .reverse()
          .map((update) => (
            <li key={update.id} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full -left-3 ring-8 ring-white">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </span>
              <h4 className="flex items-center mb-1 text-base font-semibold text-gray-900">
                {update.status_update}
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {new Date(update.created_at).toLocaleString()} -{" "}
                {update.location}
              </time>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default UpdatesFeed;
