import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggleDark, dark }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="font-bold text-xl">IT Support Portal</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/knowledge">Knowledge Base</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>
          <button onClick={toggleDark} className="px-2 py-1 bg-indigo-500 text-white rounded">
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
