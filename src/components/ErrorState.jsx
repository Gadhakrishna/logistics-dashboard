import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorState() {
  return (
    <div className="bg-white rounded-xl shadow-md p-16 text-center">

      <FaExclamationTriangle className="text-red-500 text-6xl mx-auto mb-5" />

      <h2 className="text-2xl font-bold">
        Failed to Load Leads
      </h2>

      <p className="text-gray-500 mt-2">
        Something went wrong while loading lead data.
      </p>

      <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition">
        Retry
      </button>

    </div>
  );
}