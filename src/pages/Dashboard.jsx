import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import Filters from "../components/Filters";
import LeadTable from "../components/LeadTable";
import LeadDrawer from "../components/LeadDrawer";
import LoadingState from "../components/LoadingState";
import EmptyState from "../components/EmptyState";
import leads from "../data/leads";

export default function Dashboard() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [followUpFilter, setFollowUpFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState(null);

  const loading = false;

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

  const overdueLeads = leads.filter(
    lead => new Date(lead.followup) < today
  ).length;

  const filteredLeads = leads.filter((lead) => {

    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ||
      lead.status === status;

    const followDate = new Date(lead.followup);

    let matchesFollow = true;

    if (followUpFilter === "Upcoming") {
      matchesFollow = followDate >= today;
    }

    if (followUpFilter === "Overdue") {
      matchesFollow = followDate < today;
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

          ) : filteredLeads.length === 0 ? (

            <EmptyState />

          ) : (

            <LeadTable
              leads={filteredLeads}
              onView={setSelectedLead}
            />

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