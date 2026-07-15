"use client";

import {
  Users,
  UserCheck,
  Briefcase,
} from "lucide-react";

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
    role: "UI/UX Designer",
    department: "Design",
    status: "Inactive",
  },
];

export default function RecentEmployees() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF] shadow-lg">
            <Users className="text-white" size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0000FF]">
              Team Members
            </h2>

            <p className="text-sm text-gray-500">
              Recently added team members
            </p>
          </div>

        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0000FF]">
          {employees.length} Members
        </span>

      </div>

      {/* Employees */}
      <div className="space-y-4">

        {employees.map((employee, index) => (

          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border border-blue-100 bg-[#F8FAFF] p-5 transition-all duration-300 hover:border-[#0000FF] hover:shadow-lg"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0000FF] text-white">
                <UserCheck size={22} />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {employee.name}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <Briefcase size={15} />
                  <span>{employee.role}</span>

                  <span>•</span>

                  <span>{employee.department}</span>
                </div>

              </div>

            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                employee.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
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