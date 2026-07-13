import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaTruck,
} from "react-icons/fa";

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      active: true,
    },
    {
      name: "Leads",
      icon: <FaUsers />,
    },
    {
      name: "Analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Reports",
      icon: <FaFileAlt />,
    },
    {
      name: "Settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="hidden lg:flex lg:w-64 min-h-screen bg-slate-900 text-white flex-col">

      <div className="p-6 border-b border-slate-700">

        <div className="flex items-center gap-3">

          <FaTruck className="text-3xl text-cyan-400" />

          <div>
            <h2 className="text-xl font-bold">
              Logistics CRM
            </h2>

            <p className="text-xs text-slate-400">
              Lead Dashboard
            </p>

          </div>

        </div>

      </div>

      <nav className="mt-6">

        {menu.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-4 px-6 py-4 transition text-left ${
              item.active
                ? "bg-cyan-500 text-slate-900 font-semibold"
                : "hover:bg-slate-800"
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}

      </nav>

    </aside>
  );
}