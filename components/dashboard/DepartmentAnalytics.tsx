"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Building2 } from "lucide-react";

const data = [
  { name: "IT", value: 40 },
  { name: "HR", value: 20 },
  { name: "Design", value: 15 },
  { name: "Marketing", value: 25 },
];

const COLORS = [
  "#0000FF",
  "#3B82F6",
  "#60A5FA",
  "#BFDBFE",
];

export default function DepartmentAnalytics() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF] shadow-lg">
            <Building2 className="text-white" size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0000FF]">
              Department Analytics
            </h2>

            <p className="text-sm text-gray-500">
              Employee distribution across departments
            </p>
          </div>

        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0000FF]">
          {data.length} Departments
        </span>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Chart */}
        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "14px",
                  border: "1px solid #D9E2FF",
                  background: "#fff",
                }}
              />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center space-y-5">

          {data.map((item, index) => (

            <div
              key={index}
              className="flex items-center justify-between rounded-2xl border border-blue-100 bg-[#F8FAFF] p-4 hover:border-[#0000FF] transition-all duration-300"
            >

              <div className="flex items-center gap-3">

                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                />

                <span className="font-semibold text-gray-800">
                  {item.name}
                </span>

              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-[#0000FF]">
                {item.value}%
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}