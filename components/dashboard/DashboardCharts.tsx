"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", attendance: 85 },
  { month: "Feb", attendance: 92 },
  { month: "Mar", attendance: 88 },
  { month: "Apr", attendance: 96 },
  { month: "May", attendance: 90 },
  { month: "Jun", attendance: 98 },
];

export default function DashboardCharts() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Monthly Attendance
        </h2>

        <p className="text-sm text-slate-500">
          Attendance overview
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <Tooltip />

            <Bar
              dataKey="attendance"
              fill="#2563EB"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}