export default function NextAction() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        Recommended Next Action
      </h2>

      <div className="space-y-4">

        <div className="border-l-4 border-cyan-500 pl-4">
          <h3 className="font-semibold">
            Follow up overdue enquiries
          </h3>
          <p className="text-gray-500 text-sm">
            Contact customers with overdue follow-ups.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold">
            Convert qualified leads
          </h3>
          <p className="text-gray-500 text-sm">
            Schedule discussions with qualified prospects.
          </p>
        </div>

      </div>
    </div>
  );
}