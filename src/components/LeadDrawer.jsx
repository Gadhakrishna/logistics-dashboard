import { FaTimes } from "react-icons/fa";

export default function LeadDrawer({ lead, onClose }) {

  if (!lead) return null;

  return (
    <>

      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto transition-all duration-300">

        <div className="sticky top-0 bg-white border-b px-6 py-5 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              Lead Details
            </h2>

            <p className="text-sm text-gray-500">
              Logistics CRM
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            <FaTimes />
          </button>

        </div>

        <div className="p-6 space-y-6">

          <div>

            <p className="text-gray-500 text-sm">
              Lead Name
            </p>

            <h3 className="text-lg font-semibold">
              {lead.name}
            </h3>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Company
            </p>

            <p>{lead.company}</p>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Service
            </p>

            <p>{lead.service}</p>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Phone
            </p>

            <p>{lead.phone}</p>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Email
            </p>

            <p>{lead.email}</p>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Owner
            </p>

            <p>{lead.owner}</p>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Status
            </p>

            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium">
              {lead.status}
            </span>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Follow-up
            </p>

            <p>{lead.followup}</p>

          </div>

          <div>

            <p className="text-gray-500 text-sm">
              Notes
            </p>

            <div className="bg-slate-100 rounded-lg p-4 mt-2">
              {lead.notes}
            </div>

          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">

            <h3 className="font-bold text-cyan-700 mb-4">

              Recommended Next Action

            </h3>

            {lead.status === "New" && (
              <ul className="list-disc list-inside space-y-2">
                <li>Contact the customer.</li>
                <li>Understand the logistics requirement.</li>
                <li>Assign the lead owner.</li>
              </ul>
            )}

            {lead.status === "Qualified" && (
              <ul className="list-disc list-inside space-y-2">
                <li>Prepare the quotation.</li>
                <li>Schedule a discussion.</li>
                <li>Finalize pricing.</li>
              </ul>
            )}

            {lead.status === "Won" && (
              <ul className="list-disc list-inside space-y-2">
                <li>Begin onboarding.</li>
                <li>Coordinate with operations.</li>
                <li>Prepare project documents.</li>
              </ul>
            )}

            {lead.status === "Lost" && (
              <ul className="list-disc list-inside space-y-2">
                <li>Record the loss reason.</li>
                <li>Schedule a future follow-up.</li>
                <li>Update CRM notes.</li>
              </ul>
            )}

          </div>

        </div>

      </div>

    </>
  );
}