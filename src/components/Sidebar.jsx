import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaTruck,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Leads",
      path: "/leads",
      icon: <FaUsers />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileAlt />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-slate-900 text-white shadow-xl">

      {/* Logo */}
      <div className="px-6 py-7 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="bg-cyan-500 p-3 rounded-xl">

            <FaTruck className="text-white text-xl" />

          </div>

          <div>

            <h2 className="text-xl font-bold">
              Logistics CRM
            </h2>

            <p className="text-slate-400 text-sm">
              Lead Management
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 mt-6 px-3">

        {menu.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 mb-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >

            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.name}
            </span>

          </NavLink>

        ))}

      </nav>

      {/* User */}
      <div className="border-t border-slate-800 p-5">

        <h4 className="font-semibold">
          Gadha Krishna C H
        </h4>

        <p className="text-slate-400 text-sm">
          Associate Developer
        </p>

      </div>

    </aside>
  );
}