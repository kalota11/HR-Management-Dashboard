"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "IT",
    value: 40,
  },
  {
    name: "HR",
    value: 20,
  },
  {
    name: "Design",
    value: 15,
  },
  {
    name: "Marketing",
    value: 25,
  },
];

export default function DepartmentAnalytics() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg border">

      <h2 className="text-xl font-bold text-gray-800">
        Department Analytics
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        Employee distribution by department
      </p>


      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}