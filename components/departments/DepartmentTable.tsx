"use client";

import { useState } from "react";
import { Building2, Search, ChevronDown, ChevronUp } from "lucide-react";
import { useEmployee } from "@/context/Employeecontext";

export default function DepartmentTable() {
  const { employees } = useEmployee();

  const [search, setSearch] = useState("");
  const [openDepartment, setOpenDepartment] = useState<string | null>(null);

  // Department Wise Group
  const departmentMap = employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = [];
    }

    acc[employee.department].push(employee);

    return acc;
  }, {} as Record<string, typeof employees>);

  // Search Filter
  const filteredDepartments = Object.entries(departmentMap).filter(
    ([department]) =>
      department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-blue-700">
            Departments
          </h1>

          <p className="text-gray-500">
            Department wise employee management
          </p>

        </div>

        <div className="relative w-full md:w-80">

          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Department..."
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

      </div>

      {/* Department Cards */}

      <div className="space-y-5">
              {filteredDepartments.map(([department, deptEmployees]) => (
        <div
          key={department}
          className="bg-white rounded-2xl border shadow-sm overflow-hidden"
        >
          {/* Card Header */}

          <div
            onClick={() =>
              setOpenDepartment(
                openDepartment === department ? null : department
              )
            }
            className="
              flex
              justify-between
              items-center
              p-5
              cursor-pointer
              hover:bg-blue-50
              transition
            "
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Building2
                  size={24}
                  className="text-blue-700"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  {department}
                </h2>

                <p className="text-gray-500">
                  Total Employees : {deptEmployees.length}
                </p>

                <p className="text-sm text-gray-400">
                  Manager : {deptEmployees[0]?.name}
                </p>
              </div>
            </div>

            {openDepartment === department ? (
              <ChevronUp className="text-blue-700" />
            ) : (
              <ChevronDown className="text-blue-700" />
            )}
          </div>

          {/* Employee List */}

          {openDepartment === department && (
            <div className="border-t bg-gray-50 p-5">

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                {deptEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    className="
                      bg-white
                      rounded-xl
                      border
                      p-4
                      hover:shadow-md
                      transition
                    "
                  >
                    <div className="flex items-center gap-3">

                      <div
                        className="
                          w-12
                          h-12
                          rounded-full
                          bg-blue-600
                          text-white
                          flex
                          items-center
                          justify-center
                          font-bold
                          text-lg
                        "
                      >
                        {employee.name.charAt(0)}
                      </div>

                      <div>

                        <h3 className="font-semibold">
                          {employee.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {employee.email}
                        </p>

                      </div>

                    </div>

                    <div className="mt-4 space-y-1">

                      <p className="text-sm">
                        <span className="font-semibold">
                          Role :
                        </span>{" "}
                        {employee.role}
                      </p>

                      <p className="text-sm">
                        <span className="font-semibold">
                          Status :
                        </span>{" "}
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            employee.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}
        </div>
      ))}
            </div>

      {filteredDepartments.length === 0 && (
        <div
          className="
            bg-white
            rounded-2xl
            border
            p-12
            text-center
            shadow-sm
          "
        >
          <Building2
            size={60}
            className="mx-auto text-gray-300 mb-4"
          />

          <h2 className="text-2xl font-semibold text-gray-700">
            No Department Found
          </h2>

          <p className="text-gray-500 mt-2">
            No employees are available in this department.
          </p>
        </div>
      )}

    </div>
  );
}