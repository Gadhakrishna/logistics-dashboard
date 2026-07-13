import { FaInbox } from "react-icons/fa";

export default function EmptyState() {
  return (
    <div className="bg-white rounded-xl shadow-md p-16 text-center">

      <FaInbox className="text-6xl text-gray-400 mx-auto mb-5" />

      <h2 className="text-2xl font-bold">
        No Leads Found
      </h2>

      <p className="text-gray-500 mt-2">
        Try changing the search or filters.
      </p>

    </div>
  );
}