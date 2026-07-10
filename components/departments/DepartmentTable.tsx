"use client";

import { Building2, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import AddDepartmentModal from "./AddDepartmentModal";

interface Department {
  id: number;
  name: string;
  manager: string;
  employees: number;
  status: string;
}

export default function DepartmentTable() {
  const [open, setOpen] = useState(false);
  const [editDept, setEditDept] = useState<Department | null>(null);
  const [search, setSearch] = useState("");

  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      name: "IT",
      manager: "Ahmed Khan",
      employees: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "HR",
      manager: "Sara Ahmed",
      employees: 5,
      status: "Active",
    },
    {
      id: 3,
      name: "Design",
      manager: "Usman Raza",
      employees: 8,
      status: "Active",
    },
  ]);

  // Add Department
  const addDepartment = (data: { name: string; manager: string }) => {
    setDepartments([
      ...departments,
      {
        id: Date.now(),
        name: data.name,
        manager: data.manager,
        employees: 0,
        status: "Active",
      },
    ]);

    setOpen(false);
  };

  // Delete Department
  const deleteDepartment = (id: number) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  // Open Edit
  const editDepartment = (dept: Department) => {
    setEditDept(dept);
    setOpen(true);
  };

  // Update Department
  const updateDepartment = (data: { name: string; manager: string }) => {
    setDepartments(
      departments.map((dept) =>
        dept.id === editDept?.id
          ? {
              ...dept,
              name: data.name,
              manager: data.manager,
            }
          : dept
      )
    );

    setEditDept(null);
    setOpen(false);
  };

  const filteredDepartments = departments.filter((dept) =>
    [dept.name, dept.manager].join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Departments</h1>
          <p className="text-sm sm:text-base text-gray-500">
            Manage company departments
          </p>
        </div>

        <button
          onClick={() => {
            setEditDept(null);
            setOpen(true);
          }}
          className="bg-cyan-600 text-white px-4 sm:px-5 py-3 rounded-xl text-sm sm:text-base w-full sm:w-auto"
        >
          + Add Department
        </button>
      </div>

      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search department..."
        className="w-full border rounded-xl px-4 py-3 mb-6 text-sm sm:text-base"
      />

      {/* Desktop / tablet table view (md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-4">Department</th>
              <th>Manager</th>
              <th>Employees</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredDepartments.map((dept) => (
              <tr key={dept.id} className="border-b">
                <td className="py-4 flex gap-3 items-center">
                  <div className="bg-cyan-100 p-2 rounded-lg shrink-0">
                    <Building2 size={20} />
                  </div>
                  <span className="font-semibold">{dept.name}</span>
                </td>

                <td>{dept.manager}</td>
                <td>{dept.employees}</td>

                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    {dept.status}
                  </span>
                </td>

                <td className="flex gap-3 py-4">
                  <button
                    onClick={() => editDepartment(dept)}
                    className="bg-blue-100 p-2 rounded-lg text-blue-600"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => deleteDepartment(dept.id)}
                    className="bg-red-100 p-2 rounded-lg text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {filteredDepartments.length === 0 && (
              <tr>
                <td colSpan={5} className="py-6 text-center text-gray-400">
                  No departments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view (below md) */}
      <div className="md:hidden space-y-4">
        {filteredDepartments.map((dept) => (
          <div key={dept.id} className="border rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start gap-3">
              <div className="flex gap-3 items-center">
                <div className="bg-cyan-100 p-2 rounded-lg shrink-0">
                  <Building2 size={20} />
                </div>
                <span className="font-semibold">{dept.name}</span>
              </div>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs shrink-0">
                {dept.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Manager</p>
                <p className="font-medium">{dept.manager}</p>
              </div>
              <div>
                <p className="text-gray-400">Employees</p>
                <p className="font-medium">{dept.employees}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={() => editDepartment(dept)}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-100 p-2 rounded-lg text-blue-600 text-sm"
              >
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteDepartment(dept.id)}
                className="flex-1 flex items-center justify-center gap-2 bg-red-100 p-2 rounded-lg text-red-600 text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}

        {filteredDepartments.length === 0 && (
          <p className="py-6 text-center text-gray-400">No departments found.</p>
        )}
      </div>

      {open && (
        <AddDepartmentModal
          onClose={() => {
            setOpen(false);
            setEditDept(null);
          }}
          addDepartment={editDept ? updateDepartment : addDepartment}
          editData={editDept}
        />
      )}
    </div>
  );
}