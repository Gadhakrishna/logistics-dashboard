import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import Filters from "../components/Filters";
import LeadTable from "../components/LeadTable";
import LeadDrawer from "../components/LeadDrawer";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import leads from "../data/leads";

export default function Dashboard() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [followUpFilter, setFollowUpFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    try {
      // Simulate successful API response
      setSuccess(true);
      setError(false);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, 1200);

  return () => clearTimeout(timer);
}, []);

  const today = new Date();

  const newLeads = leads.filter(
    lead => lead.status === "New"
  ).length;

  const qualifiedLeads = leads.filter(
    lead => lead.status === "Qualified"
  ).length;

  const wonLeads = leads.filter(
    lead => lead.status === "Won"
  ).length;

  const isSameDay = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

const overdueLeads = leads.filter((lead) => {
  const followDate = new Date(lead.followup);

  return (
    (lead.status === "New" || lead.status === "Qualified") &&
    followDate < today &&
    !isSameDay(followDate, today)
  );
}).length;
  const filteredLeads = leads.filter((lead) => {

    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ||
      lead.status === status;

    const followDate = new Date(lead.followup);

const activeLead =
  lead.status === "New" ||
  lead.status === "Qualified";

const dueToday = isSameDay(followDate, today);

const overdue =
  activeLead &&
  followDate < today &&
  !dueToday;

let matchesFollow = true;

if (followUpFilter === "Upcoming") {
  matchesFollow =
    activeLead &&
    (followDate > today || dueToday);
}

if (followUpFilter === "Overdue") {
  matchesFollow = overdue;
}

    return (
      matchesSearch &&
      matchesStatus &&
      matchesFollow
    );
  });

  return (

    <div className="min-h-screen bg-slate-100 lg:flex">

      <Sidebar />

      <main className="flex-1 overflow-x-hidden">

        <Header />

        <div className="p-4 md:p-6 lg:p-8">

          <StatsCards
            newLeads={newLeads}
            qualifiedLeads={qualifiedLeads}
            overdueLeads={overdueLeads}
            wonLeads={wonLeads}
          />

          <Filters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            followUpFilter={followUpFilter}
            setFollowUpFilter={setFollowUpFilter}
          />

          {loading ? (

  <LoadingState />

) : error ? (

  <ErrorState
  onRetry={() => {
    setLoading(true);
    setError(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    }, 1200);
  }}
/>

) : filteredLeads.length === 0 ? (

  <EmptyState />

) : (

  <>
    {success && (
      <div className="mb-4 rounded-lg bg-green-100 border border-green-300 px-4 py-3 text-green-700">
        Lead data loaded successfully.
      </div>
    )}

    <LeadTable
      leads={filteredLeads}
      onView={setSelectedLead}
    />
  </>

)}

        </div>

        <LeadDrawer
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />

      </main>

    </div>

  );
}