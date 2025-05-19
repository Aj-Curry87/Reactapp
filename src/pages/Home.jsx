import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark((prev) => !prev);

  const navLink = (to, label) => (
    <Link to={to} className="text-indigo-600 hover:underline">
      {label}
    </Link>
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome to your Favorite Support Desk's Favorite Support Desk!</h2>
      <p className="mb-4">
        Please leave your worries at the DNS Server, whatever your problem, Here, lies the Solution
      </p>

      <h3 className="text-2xl font-semibold mb-2">How can we help?</h3>
      <ul className="list-disc list-inside">
        <li>{navLink("/", "Home")}</li>
        <li>{navLink("/knowledge", "Knowledge Base")}</li>
        <li>{navLink("/dashboard", "Dashboard")}</li>
        <li>
          <button
            onClick={toggleDark}
            className="px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </div>
  );
}
