export default function Filters({
  search,
  setSearch,
  status,
  setStatus,
  followUpFilter,
  setFollowUpFilter,
}) {
  return (

    <div className="bg-white rounded-xl shadow-md p-5 mb-8">

      <div className="flex flex-col lg:flex-row gap-4">

        <input
          type="text"
          placeholder="Search by Lead or Company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full lg:w-48 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >

          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Qualified">Qualified</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>

        </select>

        <select
          value={followUpFilter}
          onChange={(e) => setFollowUpFilter(e.target.value)}
          className="w-full lg:w-52 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >

          <option value="All">All Follow-ups</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Overdue">Overdue</option>

        </select>

      </div>

      <div className="mt-5">

        <button
          onClick={() => {
            setSearch("");
            setStatus("All");
            setFollowUpFilter("All");
          }}
          className="bg-cyan-500 hover:bg-cyan-600 transition text-white px-5 py-2 rounded-lg"
        >
          Reset Filters
        </button>

      </div>

    </div>

  );
}