import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LeadCharts from "../components/LeadCharts";
import leads from "../data/leads";

import {
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

export default function Analytics() {
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

  const conversionRate =
    totalLeads > 0
      ? Math.round((wonLeads / totalLeads) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      <Sidebar />

      <main className="flex-1 overflow-x-hidden">

        <Header />

        <div className="p-4 md:p-6 lg:p-8">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-slate-800">
              Analytics
            </h1>

            <p className="text-slate-500 mt-2">
              Lead performance and business insights.
            </p>

          </div>

          {/* Summary Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500">
                    Total Leads
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {totalLeads}
                  </h2>

                </div>

                <FaUsers className="text-cyan-500 text-3xl" />

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500">
                    Qualified
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {qualifiedLeads}
                  </h2>

                </div>

                <FaCheckCircle className="text-green-500 text-3xl" />

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500">
                    Won Leads
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {wonLeads}
                  </h2>

                </div>

                <FaHandshake className="text-purple-500 text-3xl" />

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500">
                    Overdue
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {overdueLeads}
                  </h2>

                </div>

                <FaClock className="text-red-500 text-3xl" />

              </div>

            </div>

          </div>

          {/* Charts */}

          <div className="mt-8">

            <LeadCharts />

          </div>

          {/* Bottom Section */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex items-center gap-3 mb-5">

                <FaChartLine className="text-cyan-500 text-xl" />

                <h2 className="text-xl font-bold">
                  Conversion Summary
                </h2>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span>Total Leads</span>

                  <strong>{totalLeads}</strong>

                </div>

                <div className="flex justify-between">

                  <span>New Leads</span>

                  <strong>{newLeads}</strong>

                </div>

                <div className="flex justify-between">

                  <span>Qualified Leads</span>

                  <strong>{qualifiedLeads}</strong>

                </div>

                <div className="flex justify-between">

                  <span>Won Leads</span>

                  <strong>{wonLeads}</strong>

                </div>

                <div className="flex justify-between">

                  <span>Lost Leads</span>

                  <strong>{lostLeads}</strong>

                </div>

                <div className="flex justify-between">

                  <span>Conversion Rate</span>

                  <strong className="text-green-600">
                    {conversionRate}%
                  </strong>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-bold mb-5">
                Performance Insights
              </h2>

              <div className="space-y-4">

                <div className="border-l-4 border-cyan-500 pl-4">

                  <h3 className="font-semibold">
                    Active Leads
                  </h3>

                  <p className="text-slate-500">
                    {newLeads + qualifiedLeads} active enquiries require
                    follow-up.
                  </p>

                </div>

                <div className="border-l-4 border-green-500 pl-4">

                  <h3 className="font-semibold">
                    Successful Conversions
                  </h3>

                  <p className="text-slate-500">
                    {wonLeads} leads have been successfully converted.
                  </p>

                </div>

                <div className="border-l-4 border-red-500 pl-4">

                  <h3 className="font-semibold">
                    Overdue Follow-ups
                  </h3>

                  <p className="text-slate-500">
                    {overdueLeads} leads require immediate attention.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}