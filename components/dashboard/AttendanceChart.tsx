"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    present: 85,
  },
  {
    day: "Tue",
    present: 92,
  },
  {
    day: "Wed",
    present: 78,
  },
  {
    day: "Thu",
    present: 95,
  },
  {
    day: "Fri",
    present: 88,
  },
  {
    day: "Sat",
    present: 70,
  },
];

export default function AttendanceChart() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg border">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Attendance Overview
        </h2>

        <p className="text-sm text-gray-500">
          Weekly employee attendance percentage
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="present"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}