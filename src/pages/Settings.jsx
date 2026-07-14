import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  FaUser,
  FaBuilding,
  FaBell,
  FaLock,
  FaDatabase,
  FaSave,
} from "react-icons/fa";

export default function Settings() {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      <Sidebar />

      <main className="flex-1 overflow-x-hidden">

        <Header />

        <div className="p-4 md:p-6 lg:p-8">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-slate-800">
              Settings
            </h1>

            <p className="text-slate-500 mt-2">
              Manage application preferences and system configuration.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Company Settings */}

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex items-center gap-3 mb-6">

                <FaBuilding className="text-cyan-500 text-2xl" />

                <h2 className="text-xl font-bold">
                  Company Information
                </h2>

              </div>

              <div className="space-y-4">

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    value="Infython"
                    readOnly
                    className="w-full border rounded-lg px-4 py-3 bg-slate-50"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    value="info@infython.in"
                    readOnly
                    className="w-full border rounded-lg px-4 py-3 bg-slate-50"
                  />

                </div>

              </div>

            </div>

            {/* User */}

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex items-center gap-3 mb-6">

                <FaUser className="text-cyan-500 text-2xl" />

                <h2 className="text-xl font-bold">
                  User Profile
                </h2>

              </div>

              <div className="space-y-4">

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    value="Gadha Krishna C H"
                    readOnly
                    className="w-full border rounded-lg px-4 py-3 bg-slate-50"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium mb-2">
                    Role
                  </label>

                  <input
                    type="text"
                    value="Associate Developer"
                    readOnly
                    className="w-full border rounded-lg px-4 py-3 bg-slate-50"
                  />

                </div>

              </div>

            </div>

            {/* Notifications */}

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex items-center gap-3 mb-6">

                <FaBell className="text-yellow-500 text-2xl" />

                <h2 className="text-xl font-bold">
                  Notifications
                </h2>

              </div>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span>Email Notifications</span>

                  <input type="checkbox" defaultChecked />

                </div>

                <div className="flex justify-between">

                  <span>Follow-up Reminders</span>

                  <input type="checkbox" defaultChecked />

                </div>

                <div className="flex justify-between">

                  <span>Lead Status Alerts</span>

                  <input type="checkbox" defaultChecked />

                </div>

              </div>

            </div>

            {/* Security */}

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex items-center gap-3 mb-6">

                <FaLock className="text-red-500 text-2xl" />

                <h2 className="text-xl font-bold">
                  Security
                </h2>

              </div>

              <div className="space-y-4">

                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg">

                  Change Password

                </button>

                <button className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 rounded-lg">

                  Two-Factor Authentication

                </button>

              </div>

            </div>

            {/* Database */}

            <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">

              <div className="flex items-center gap-3 mb-6">

                <FaDatabase className="text-green-500 text-2xl" />

                <h2 className="text-xl font-bold">
                  System Information
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div>

                  <p className="text-slate-500">
                    Version
                  </p>

                  <h3 className="font-semibold">
                    v1.0.0
                  </h3>

                </div>

                <div>

                  <p className="text-slate-500">
                    Environment
                  </p>

                  <h3 className="font-semibold">
                    Development
                  </h3>

                </div>

                <div>

                  <p className="text-slate-500">
                    Backend Status
                  </p>

                  <h3 className="text-green-600 font-semibold">
                    Connected
                  </h3>

                </div>

              </div>

              <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <FaSave />

                Save Settings

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}