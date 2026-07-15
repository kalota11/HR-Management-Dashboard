"use client";

import { Building2 } from "lucide-react";

const departments = [
  {
    name: "Development",
    employees: 52,
    progress: 90,
    color: "bg-blue-600",
  },
  {
    name: "Human Resources",
    employees: 18,
    progress: 70,
    color: "bg-green-600",
  },
  {
    name: "Finance",
    employees: 15,
    progress: 60,
    color: "bg-yellow-500",
  },
  {
    name: "Marketing",
    employees: 12,
    progress: 45,
    color: "bg-purple-600",
  },
];

export default function TopDepartments() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <Building2 size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Top Departments
          </h2>

          <p className="text-sm text-slate-500">
            Department performance overview
          </p>
        </div>

      </div>

      <div className="space-y-6">

        {departments.map((dept) => (
          <div key={dept.name}>

            <div className="mb-2 flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-slate-800">
                  {dept.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {dept.employees} Employees
                </p>
              </div>

              <span className="font-bold text-slate-700">
                {dept.progress}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className={`h-full rounded-full ${dept.color}`}
                style={{
                  width: `${dept.progress}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}