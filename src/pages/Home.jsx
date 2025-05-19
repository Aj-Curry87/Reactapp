import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png"; // Optional image

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <img
        src={avatar}
        alt="Support Hero"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
      />
      <h1 className="text-4xl font-bold mb-2">
        Welcome to your Favorite Support Desk's Favorite Support Desk!
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Your all-in-one solution hub for IT fixes, quick tips, and internal tools.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/dashboard"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/knowledge"
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Browse Knowledge Base
        </Link>
      </div>
    </div>
  );
}