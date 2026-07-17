"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react";

import { useEmployee } from "@/context/Employeecontext";

export default function RoleTable() {
  const { employees } = useEmployee();

  const [search, setSearch] = useState("");
  const [openRole, setOpenRole] = useState<string | null>(null);

  const roleMap = employees.reduce((acc, employee) => {
    if (!acc[employee.role]) {
      acc[employee.role] = [];
    }

    acc[employee.role].push(employee);

    return acc;
  }, {} as Record<string, typeof employees>);

  const filteredRoles = Object.entries(roleMap).filter(([role]) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow p-6 border border-blue-100">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0000ff]">
          Roles & Permissions
        </h1>

        <p className="text-gray-500 mt-1">
          Manage employee roles
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            border
            rounded-xl
            pl-10
            pr-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* Roles */}
      <div className="space-y-4">

        {filteredRoles.length === 0 && (

          <div className="text-center py-10 text-gray-500">
            No roles found.
          </div>

        )}

        {filteredRoles.map(([role, members]) => (

          <div
            key={role}
            className="border rounded-xl overflow-hidden"
          >

            <button
              onClick={() =>
                setOpenRole(openRole === role ? null : role)
              }
              className="
                w-full
                flex
                justify-between
                items-center
                p-4
                hover:bg-blue-50
              "
            >

              <div className="flex items-center gap-3">

                <div className="bg-blue-100 p-2 rounded-lg">

                  <Users
                    size={20}
                    className="text-blue-600"
                  />

                </div>

                <div className="text-left">

                  <h2 className="font-semibold text-lg">
                    {role}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {members.length} Employee(s)
                  </p>

                </div>

              </div>

              {openRole === role ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}

            </button>

            {openRole === role && (

              <div className="border-t bg-gray-50">

                {members.map((employee) => (

                  <div
                    key={employee.id}
                    className="
                      flex
                      justify-between
                      items-center
                      px-5
                      py-4
                      border-b
                      last:border-b-0
                    "
                  >

                    <div>

                      <h3 className="font-semibold">
                        {employee.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {employee.email}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="font-medium">
                        {employee.department}
                      </p>

                      <span
                        className={`
                          text-xs
                          px-3
                          py-1
                          rounded-full
                          ${
                            employee.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {employee.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}