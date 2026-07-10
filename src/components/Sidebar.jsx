import { Link } from "react-router-dom";

import {
  FaHome,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaUser,
  FaCog
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 bg-pink-600 text-white min-h-screen">

      <div className="text-3xl font-bold p-6 border-b border-pink-500">

        🛡 SheShield

      </div>

      <nav className="mt-8">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-6 py-4 hover:bg-pink-700"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/map"
          className="flex items-center gap-3 px-6 py-4 hover:bg-pink-700"
        >
          <FaMapMarkedAlt />
          Safe Route
        </Link>

        <Link
          to="/reports"
          className="flex items-center gap-3 px-6 py-4 hover:bg-pink-700"
        >
          <FaExclamationTriangle />
          Reports
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 px-6 py-4 hover:bg-pink-700"
        >
          <FaUser />
          Profile
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 px-6 py-4 hover:bg-pink-700"
        >
          <FaCog />
          Settings
          <FaMapMarkedAlt />
  Safe Route
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;