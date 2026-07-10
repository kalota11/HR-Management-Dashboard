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
  { day: "Mon", present: 85 },
  { day: "Tue", present: 92 },
  { day: "Wed", present: 78 },
  { day: "Thu", present: 95 },
  { day: "Fri", present: 88 },
  { day: "Sat", present: 70 },
];

export default function AttendanceChart() {
  return (
    <div className="w-full rounded-2xl border bg-white p-4 shadow-lg sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
          Attendance Overview
        </h2>

        <p className="text-xs text-gray-500 sm:text-sm">
          Weekly employee attendance percentage
        </p>
      </div>

      <div className="h-64 w-full sm:h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="present"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}