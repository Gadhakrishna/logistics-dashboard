import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import LeadCharts from "../components/LeadCharts";
import NextAction from "../components/NextAction";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 lg:flex">

      <Sidebar />

      <main className="flex-1 overflow-x-hidden">

        <Header />

        <div className="p-4 md:p-6 lg:p-8">

          <StatsCards
            newLeads={18}
            qualifiedLeads={10}
            overdueLeads={3}
            wonLeads={7}
          />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            <div className="xl:col-span-2">

              <LeadCharts />

            </div>

            <div>

              <NextAction />

            </div>

          </div>

         

        </div>

      </main>

    </div>
  );
}