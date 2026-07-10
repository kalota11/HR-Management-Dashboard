"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "IT", value: 40 },
  { name: "HR", value: 20 },
  { name: "Design", value: 15 },
  { name: "Marketing", value: 25 },
];

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
];

export default function DepartmentAnalytics() {
  return (
    <div className="w-full rounded-2xl border bg-white p-4 shadow-lg sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
          Department Analytics
        </h2>

        <p className="text-xs text-gray-500 sm:text-sm">
          Employee distribution by department
        </p>
      </div>

      <div className="h-64 w-full sm:h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="70%"
              dataKey="value"
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}