import { FaSpinner } from "react-icons/fa";

export default function LoadingState() {
  return (
    <div className="bg-white rounded-xl shadow-md p-16 text-center">

      <FaSpinner className="animate-spin text-5xl text-cyan-500 mx-auto mb-6" />

      <h2 className="text-2xl font-bold">
        Loading Leads...
      </h2>

      <p className="text-gray-500 mt-2">
        Please wait while lead information is loading.
      </p>

    </div>
  );
}