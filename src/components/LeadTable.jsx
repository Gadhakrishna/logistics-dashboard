import { FaEye } from "react-icons/fa";

export default function LeadTable({ leads, onView }) {

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700 border border-blue-300";

      case "Qualified":
        return "bg-green-100 text-green-700 border border-green-300";

      case "Won":
        return "bg-purple-100 text-purple-700 border border-purple-300";

      case "Lost":
        return "bg-red-100 text-red-700 border border-red-300";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (

    <div className="bg-white rounded-xl shadow-md mt-8 overflow-hidden">

      <div className="px-6 py-5 border-b">

        <h2 className="text-2xl font-bold text-slate-800">
          Lead List
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-[900px] w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">Lead</th>

              <th className="px-6 py-4 text-left">Company</th>

              <th className="px-6 py-4 text-left">Service</th>

              <th className="px-6 py-4 text-left">Status</th>

              <th className="px-6 py-4 text-left">Owner</th>

              <th className="px-6 py-4 text-left">Follow-up</th>

              <th className="px-6 py-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (

              <tr
                key={lead.id}
                className={`border-b hover:bg-cyan-50 transition ${
                  new Date(lead.followup) < new Date()
                    ? "bg-red-50"
                    : ""
                }`}
              >

                <td className="px-6 py-4 font-medium">
                  {lead.name}
                </td>

                <td className="px-6 py-4">
                  {lead.company}
                </td>

                <td className="px-6 py-4">
                  {lead.service}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>

                </td>

                <td className="px-6 py-4">
                  {lead.owner}
                </td>

                <td className="px-6 py-4">

                  <div className="flex flex-col gap-1">

                    <span
                      className={`${
                        new Date(lead.followup) < new Date()
                          ? "text-red-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {lead.followup}
                    </span>

                    {new Date(lead.followup) < new Date() && (

                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full w-fit">

                        Overdue

                      </span>

                    )}

                  </div>

                </td>

                <td className="px-6 py-4 text-center">

                  <button
                    onClick={() => onView(lead)}
                    className="bg-cyan-500 hover:bg-cyan-600 transition text-white p-3 rounded-lg"
                  >

                    <FaEye />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}