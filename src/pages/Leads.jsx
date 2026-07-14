import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Filters from "../components/Filters";
import LeadTable from "../components/LeadTable";
import LeadDrawer from "../components/LeadDrawer";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import CreateLeadModal from "../components/CreateLeadModal";
import leadsData from "../data/leads";

export default function Leads() {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [followUpFilter, setFollowUpFilter] = useState("All");

  const [selectedLead, setSelectedLead] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {

      try {

        setLeads(leadsData);

        setSuccess(true);

        setTimeout(() => {

          setSuccess(false);

        },3000);

      }

      catch{

        setError(true);

      }

      finally{

        setLoading(false);

      }

    },1000);

  },[]);

  const today = new Date();

  const isSameDay = (d1,d2)=>{

    return(

      d1.getDate()===d2.getDate() &&
      d1.getMonth()===d2.getMonth() &&
      d1.getFullYear()===d2.getFullYear()

    );

  };

  const filteredLeads = leads.filter((lead)=>{

    const matchesSearch =

      lead.name.toLowerCase().includes(search.toLowerCase()) ||

      lead.company.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =

      status==="All" ||

      lead.status===status;

    const followDate = new Date(lead.followup);

    const activeLead =

      lead.status==="New" ||

      lead.status==="Qualified";

    const dueToday = isSameDay(followDate,today);

    const overdue =

      activeLead &&

      followDate<today &&

      !dueToday;

    let matchesFollow=true;

    if(followUpFilter==="Upcoming"){

      matchesFollow=

      activeLead &&

      (followDate>today || dueToday);

    }

    if(followUpFilter==="Overdue"){

      matchesFollow=overdue;

    }

    return(

      matchesSearch &&

      matchesStatus &&

      matchesFollow

    );

  });

  return(

    <div className="min-h-screen bg-slate-100 lg:flex">

      <Sidebar/>

      <main className="flex-1 overflow-x-hidden">

        <Header/>

        <div className="p-4 md:p-6 lg:p-8">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-3xl font-bold">

                Lead Management

              </h2>

              <p className="text-slate-500">

                Manage all logistics enquiries

              </p>

            </div>

            <button

              onClick={()=>setShowModal(true)}

              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-lg font-semibold"

            >

              + Create Lead

            </button>

          </div>

          <Filters

            search={search}

            setSearch={setSearch}

            status={status}

            setStatus={setStatus}

            followUpFilter={followUpFilter}

            setFollowUpFilter={setFollowUpFilter}

          />

          {loading ? (

            <LoadingState/>

          ) : error ? (

            <ErrorState/>

          ) : filteredLeads.length===0 ? (

            <EmptyState/>

          ) : (

            <>

              {success && (

                <div className="mb-4 bg-green-100 border border-green-300 text-green-700 rounded-lg px-4 py-3">

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

          onClose={()=>setSelectedLead(null)}

        />

        <CreateLeadModal

          open={showModal}

          onClose={()=>setShowModal(false)}

        />

      </main>

    </div>

  );

}