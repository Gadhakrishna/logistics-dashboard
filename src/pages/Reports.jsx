import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import leads from "../data/leads";

import {
  FaFileAlt,
  FaDownload,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

export default function Reports() {
  const today = new Date();

  const isSameDay = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const qualifiedLeads = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

  const wonLeads = leads.filter(
    (lead) => lead.status === "Won"
  ).length;

  const lostLeads = leads.filter(
    (lead) => lead.status === "Lost"
  ).length;

  const overdueLeads = leads.filter((lead) => {
    const followDate = new Date(lead.followup);

    return (
      (lead.status === "New" ||
        lead.status === "Qualified") &&
      followDate < today &&
      !isSameDay(followDate, today)
    );
  }).length;

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      <Sidebar />

      <main className="flex-1 overflow-x-hidden">

        <Header />

        <div className="p-4 md:p-6 lg:p-8">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-slate-800">
              Reports
            </h1>

            <p className="text-slate-500 mt-2">
              Generate and review logistics lead reports.
            </p>

          </div>

          {/* Report Summary */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow-md p-6">

              <FaUsers className="text-cyan-500 text-3xl mb-4" />

              <h3 className="font-semibold text-lg">
                Total Leads
              </h3>

              <p className="text-3xl font-bold mt-2">
                {totalLeads}
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <FaCheckCircle className="text-green-500 text-3xl mb-4" />

              <h3 className="font-semibold text-lg">
                Qualified
              </h3>

              <p className="text-3xl font-bold mt-2">
                {qualifiedLeads}
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <FaHandshake className="text-purple-500 text-3xl mb-4" />

              <h3 className="font-semibold text-lg">
                Won
              </h3>

              <p className="text-3xl font-bold mt-2">
                {wonLeads}
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <FaClock className="text-red-500 text-3xl mb-4" />

              <h3 className="font-semibold text-lg">
                Overdue
              </h3>

              <p className="text-3xl font-bold mt-2">
                {overdueLeads}
              </p>

            </div>

          </div>

          {/* Reports */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-bold">
                    Lead Summary Report
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Complete summary of all logistics enquiries.
                  </p>

                </div>

                <FaFileAlt className="text-cyan-500 text-4xl" />

              </div>

              <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">

                <FaDownload />

                Download Report

              </button>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-bold">
                    Follow-up Report
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Review overdue and upcoming follow-ups.
                  </p>

                </div>

                <FaClock className="text-red-500 text-4xl" />

              </div>

              <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">

                <FaDownload />

                Download Report

              </button>

            </div>

          </div>

          {/* Report Statistics */}

          <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-6">
              Report Summary
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              <div>

                <p className="text-slate-500">
                  New Leads
                </p>

                <h3 className="text-2xl font-bold">
                  {newLeads}
                </h3>

              </div>

              <div>

                <p className="text-slate-500">
                  Qualified
                </p>

                <h3 className="text-2xl font-bold">
                  {qualifiedLeads}
                </h3>

              </div>

              <div>

                <p className="text-slate-500">
                  Won
                </p>

                <h3 className="text-2xl font-bold">
                  {wonLeads}
                </h3>

              </div>

              <div>

                <p className="text-slate-500">
                  Lost
                </p>

                <h3 className="text-2xl font-bold">
                  {lostLeads}
                </h3>

              </div>

              <div>

                <p className="text-slate-500">
                  Overdue
                </p>

                <h3 className="text-2xl font-bold">
                  {overdueLeads}
                </h3>

              </div>

              <div>

                <p className="text-slate-500">
                  Total Leads
                </p>

                <h3 className="text-2xl font-bold">
                  {totalLeads}
                </h3>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}