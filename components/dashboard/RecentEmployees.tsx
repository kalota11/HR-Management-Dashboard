"use client";

import { useState } from "react";
import {
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: "Active" | "Inactive";
}

const employees: Employee[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    department: "Development",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    department: "HR",
    role: "HR Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david@example.com",
    department: "Finance",
    role: "Accountant",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Emma Brown",
    email: "emma@example.com",
    department: "Marketing",
    role: "Marketing Lead",
    status: "Active",
  },
  {
    id: 5,
    name: "Michael Lee",
    email: "michael@example.com",
    department: "Design",
    role: "UI/UX Designer",
    status: "Active",
  },
];

export default function RecentEmployees() {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex flex-col gap-4 border-b p-6 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Recent Employees
          </h2>

          <p className="text-sm text-slate-500">
            Manage your employees
          </p>

        </div>

        <div className="relative w-full md:w-80">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 pl-11 pr-4 outline-none focus:border-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b bg-slate-50 text-left text-sm text-slate-600">

              <th className="px-6 py-4">Employee</th>

              <th className="px-6 py-4">Department</th>

              <th className="px-6 py-4">Role</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-right">
                Action
              </th>

            </tr>

          </thead>

          <tbody>
                      {filteredEmployees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b transition hover:bg-slate-50"
            >
              {/* Employee */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {employee.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {employee.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {employee.email}
                    </p>
                  </div>
                </div>
              </td>

              {/* Department */}
              <td className="px-6 py-4">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                  {employee.department}
                </span>
              </td>

              {/* Role */}
              <td className="px-6 py-4 text-slate-700">
                {employee.role}
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    employee.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {employee.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-6 py-4">
                <div className="flex justify-end gap-2">

                  <button className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600">
                    <Eye size={18} />
                  </button>

                  <button className="rounded-lg p-2 text-slate-500 transition hover:bg-green-50 hover:text-green-600">
                    <Edit size={18} />
                  </button>

                  <button className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>

                  <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100">
                    <MoreVertical size={18} />
                  </button>

                </div>
              </td>
            </tr>
          ))}

          {filteredEmployees.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="py-12 text-center text-slate-500"
              >
                No employees found.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t px-6 py-4">

        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold">
            {filteredEmployees.length}
          </span>{" "}
          Employees
        </p>

        <div className="flex gap-2">

          <button className="rounded-lg border px-4 py-2 text-sm transition hover:bg-slate-100">
            Previous
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700">
            1
          </button>

          <button className="rounded-lg border px-4 py-2 text-sm transition hover:bg-slate-100">
            Next
          </button>

        </div>

      </div>
    </div>
  );
}