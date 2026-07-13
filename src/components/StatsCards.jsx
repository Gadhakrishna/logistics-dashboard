import {
  FaUserPlus,
  FaCheckCircle,
  FaClock,
  FaHandshake,
} from "react-icons/fa";

export default function StatsCards({
  newLeads,
  qualifiedLeads,
  overdueLeads,
  wonLeads,
}) {

  const cards = [

    {
      title: "New Leads",
      value: newLeads,
      icon: <FaUserPlus />,
      color: "bg-blue-500",
    },

    {
      title: "Qualified",
      value: qualifiedLeads,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },

    {
      title: "Overdue",
      value: overdueLeads,
      icon: <FaClock />,
      color: "bg-red-500",
    },

    {
      title: "Won",
      value: wonLeads,
      icon: <FaHandshake />,
      color: "bg-purple-500",
    },

  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex justify-between items-center"
        >

          <div>

            <p className="text-gray-500">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {card.value}
            </h2>

          </div>

          <div
            className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl`}
          >
            {card.icon}
          </div>

        </div>

      ))}

    </div>

  );

}