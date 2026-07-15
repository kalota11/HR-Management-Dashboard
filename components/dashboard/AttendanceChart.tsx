"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 240 },
  { month: "Mar", value: 180 },
  { month: "Apr", value: 300 },
  { month: "May", value: 210 },
  { month: "Jun", value: 260 },
  { month: "Jul", value: 340 },
  { month: "Aug", value: 280 },
  { month: "Sep", value: 390 },
  { month: "Oct", value: 430 },
  { month: "Nov", value: 350 },
  { month: "Dec", value: 300 },
];

const attendanceData = [
  { name: "Present", value: 228 },
  { name: "Leave", value: 10 },
  { name: "Late", value: 8 },
];

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#F59E0B",
];

export default function DashboardCharts() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">

      {/* Monthly Chart */}

      <div className="xl:col-span-2 rounded-3xl border bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold">
              Monthly Attendance
            </h2>

            <p className="text-sm text-slate-500">
              Employee attendance overview
            </p>

          </div>

        </div>

        <div className="h-80">

          <ResponsiveContainer>

            <BarChart data={monthlyData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                fill="#2563EB"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Pie Chart */}

      <div className="rounded-3xl border bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold">
          Todays Attendance
        </h2>

        <p className="mb-6 text-sm text-slate-500">
          Employee Status
        </p>

        <div className="h-72">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={attendanceData}
                dataKey="value"
                outerRadius={90}
              >

                {attendanceData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="space-y-3">

          {attendanceData.map((item, index) => (

            <div
              key={item.name}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: COLORS[index],
                  }}
                />

                <span>{item.name}</span>

              </div>

              <span className="font-semibold">
                {item.value}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}