"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const data = [
  { month: "Jan", attendance: 85 },
  { month: "Feb", attendance: 92 },
  { month: "Mar", attendance: 88 },
  { month: "Apr", attendance: 96 },
  { month: "May", attendance: 90 },
  { month: "Jun", attendance: 98 },
  { month: "Jul", attendance: 94 },
  { month: "Aug", attendance: 99 },
  { month: "Sep", attendance: 97 },
  { month: "Oct", attendance: 100 },
  { month: "Nov", attendance: 95 },
  { month: "Dec", attendance: 98 },
];

export default function DashboardCharts() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-7
      shadow-sm
      transition-all
      duration-300
      hover:shadow-xl

      dark:bg-slate-900
      dark:border-slate-700
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl

            bg-gradient-to-br
            from-blue-600
            to-indigo-700

            text-white
            shadow-lg
            "
          >
            <CalendarDays size={28} />
          </div>

          <div>

            <h2
              className="
              text-2xl
              font-bold
              text-slate-800

              dark:text-white
              "
            >
              Monthly Attendance
            </h2>

            <p
              className="
              text-sm
              text-slate-500

              dark:text-slate-400
              "
            >
              Employee attendance overview
            </p>

          </div>

        </div>

        <div
          className="
          flex
          items-center
          gap-2

          rounded-full
          bg-emerald-50
          px-4
          py-2

          text-sm
          font-semibold
          text-emerald-600

          dark:bg-emerald-500/10
          "
        >
          <TrendingUp size={16} />
          +8.4%
        </div>

      </div>

      {/* Chart */}

      <div className="h-[380px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="attendanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#2563EB"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#2563EB"
                  stopOpacity={0.03}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="5 5"
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #E2E8F0",
                background: "#fff",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#2563EB"
              strokeWidth={4}
              fill="url(#attendanceGradient)"
              dot={{
                r: 5,
                fill: "#2563EB",
                strokeWidth: 3,
                stroke: "#fff",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}