import { NavLink } from "react-router-dom";

export default function Dashboard({ toggleDark, dark }) {

  const navLink = (path, label) => (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        `relative px-2 py-1 rounded transition font-medium
        ${isActive
          ? "text-indigo-600 font-semibold after:scale-x-100"
          : "text-gray-700 dark:text-gray-200 hover:text-indigo-500"}
        after:block after:h-[2px] after:bg-indigo-600 after:origin-left after:transition-transform after:scale-x-0 hover:after:scale-x-100`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="font-bold text-xl">IT Support Portal</h1>
      <ul className="flex space-x-4 items-center">
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
    </nav>
  );
}
