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
  { day: "Sun", present: 82 },
];

export default function AttendanceChart() {
  return (
    <div className="rounded-3xl bg-white border border-blue-100 shadow-xl p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold text-[#0000FF]">
            Attendance Overview
          </h2>

          <p className="mt-1 text-gray-500">
            Weekly employee attendance statistics
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0000FF]">
            This Week
          </span>
        </div>

      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-blue-50 p-4 text-center">
          <p className="text-sm text-gray-500">Average</p>
          <h3 className="mt-1 text-2xl font-bold text-[#0000FF]">
            85%
          </h3>
        </div>

        <div className="rounded-2xl bg-blue-50 p-4 text-center">
          <p className="text-sm text-gray-500">Highest</p>
          <h3 className="mt-1 text-2xl font-bold text-[#0000FF]">
            95%
          </h3>
        </div>

        <div className="rounded-2xl bg-blue-50 p-4 text-center">
          <p className="text-sm text-gray-500">Lowest</p>
          <h3 className="mt-1 text-2xl font-bold text-[#0000FF]">
            70%
          </h3>
        </div>

      </div>

      {/* Chart */}
      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="5 5"
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <YAxis
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #D9E2FF",
                background: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="present"
              stroke="#0000FF"
              strokeWidth={4}
              dot={{
                r: 6,
                fill: "#0000FF",
                strokeWidth: 2,
                stroke: "#fff",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}