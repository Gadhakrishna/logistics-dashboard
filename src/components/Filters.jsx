export default function Filters({
  search,
  setSearch,
  status,
  setStatus,
  followUpFilter,
  setFollowUpFilter,
}) {
  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setFollowUpFilter("All");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-8">

      <div className="flex flex-col lg:flex-row gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by Lead or Company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Status Filter */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full lg:w-52 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Qualified">Qualified</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>

        {/* Follow-up Filter */}
        <select
          value={followUpFilter}
          onChange={(e) => setFollowUpFilter(e.target.value)}
          className="w-full lg:w-56 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="All">All Follow-ups</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Overdue">Overdue</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Reset
        </button>

      </div>

    </div>
  );
}