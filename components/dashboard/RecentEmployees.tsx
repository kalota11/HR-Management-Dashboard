"use client";

import { Users } from "lucide-react";

const employees = [
  {
    name: "Ali Khan",
    role: "Frontend Developer",
    department: "IT",
    status: "Active",
  },
  {
    name: "Sara Ahmed",
    role: "HR Manager",
    department: "HR",
    status: "Active",
  },
  {
    name: "Usman Raza",
    role: "UI Designer",
    department: "Design",
    status: "Leave",
  },
];

export default function RecentEmployees() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg border">
      
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-cyan-100 p-3">
          <Users className="text-cyan-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Recent Employees
          </h2>

          <p className="text-sm text-gray-500">
            Latest added employees
          </p>
        </div>
      </div>


      <div className="space-y-4">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {employee.name}
              </h3>

              <p className="text-sm text-gray-500">
                {employee.role} • {employee.department}
              </p>
            </div>


            <span
              className={`rounded-full px-4 py-1 text-sm font-medium ${
                employee.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {employee.status}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}