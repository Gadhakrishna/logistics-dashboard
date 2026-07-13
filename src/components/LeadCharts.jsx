import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { status: "New", count: 5 },
  { status: "Qualified", count: 8 },
  { status: "Won", count: 3 },
  { status: "Lost", count: 2 },
];

export default function LeadChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">
        Lead Pipeline
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}