import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-4 md:px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

      <div>

        <h2 className="text-xl md:text-3xl font-bold text-slate-800">
          Lead Management Dashboard
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Manage logistics enquiries efficiently
        </p>

      </div>

      <div className="flex items-center justify-between md:justify-end gap-6">

        <button className="text-xl text-slate-500 hover:text-cyan-500 transition">
          <FaBell />
        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-cyan-500" />

          <div>

            <p className="font-semibold text-slate-800">
              Gadha Krishna C H 
            </p>

            <p className="text-xs text-slate-500">
              Associate Developer
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}