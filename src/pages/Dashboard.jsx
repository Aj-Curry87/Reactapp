import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const metrics = [
    { label: "Open Tickets", value: 12 },
    { label: "Resolved Today", value: 8 },
    { label: "Pending Escalations", value: 2 },
    { label: "Avg. Resolution Time", value: "1h 34m" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow rounded p-4 text-center"
          >
            <div className="text-sm text-gray-500 dark:text-gray-300 mb-1">
              {item.label}
            </div>
            <div className="text-2xl font-bold text-indigo-600">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}