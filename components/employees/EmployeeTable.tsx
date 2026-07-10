"use client";

import { useState } from "react";
import { Search, Edit, Trash2, UserPlus } from "lucide-react";
import AddEmployeeModal, { Employee } from "./AddEmployeeModal";

export default function EmployeeTable() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [search, setSearch] = useState("");

  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@gmail.com",
      role: "Frontend Developer",
      department: "IT",
      status: "Active",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      email: "sara@gmail.com",
      role: "HR Manager",
      department: "HR",
      status: "Active",
    },
    {
      id: 3,
      name: "Usman Raza",
      email: "usman@gmail.com",
      role: "UI Designer",
      department: "Design",
      status: "On Leave",
    },
  ]);

  const addEmployee = (employee: Omit<Employee, "id">) => {
    setEmployees([...employees, { id: Date.now(), ...employee }]);
    setOpenModal(false);
  };

  const editEmployee = (data: Omit<Employee, "id">) => {
    if (!selectedEmployee) return;
    setEmployees(
      employees.map((employee) =>
        employee.id === selectedEmployee.id ? { ...employee, ...data } : employee
      )
    );
    setSelectedEmployee(null);
    setOpenModal(false);
  };

  const deleteEmployee = (id: number) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const openEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees.filter((employee) =>
    [employee.name, employee.email, employee.role, employee.department]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const statusClasses = (status: string) =>
    status === "Active"
      ? "bg-green-100 text-green-600"
      : "bg-yellow-100 text-yellow-600";

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-lg border">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Employees</h2>
          <p className="text-sm sm:text-base text-gray-500">
            Manage all company employees
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedEmployee(null);
            setOpenModal(true);
          }}
          className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 sm:px-5 text-white text-sm sm:text-base w-full sm:w-auto"
        >
          <UserPlus size={18} />
          Add Employee
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border px-4 py-3">
        <Search size={20} className="shrink-0 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employee..."
          className="w-full outline-none text-sm sm:text-base"
        />
      </div>

      {/* Desktop / tablet table view (md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Department</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="p-4">
                  <h3 className="font-semibold">{employee.name}</h3>
                  <p className="text-sm text-gray-500">{employee.email}</p>
                </td>

                <td className="p-4">{employee.role}</td>
                <td className="p-4">{employee.department}</td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 ${statusClasses(
                      employee.status
                    )}`}
                  >
                    {employee.status}
                  </span>
                </td>

                <td className="p-4 flex gap-3">
                  <button
                    onClick={() => openEdit(employee)}
                    className="rounded-lg bg-blue-100 p-2 text-blue-600"
                  >
                    <Edit size={17} />
                  </button>

                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="rounded-lg bg-red-100 p-2 text-red-600"
                  >
                    <Trash2 size={17} />
                  </button>
                </td>
              </tr>
            ))}

            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-400">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view (below md) */}
      <div className="md:hidden space-y-4">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="rounded-xl border p-4 flex flex-col gap-3"
          >
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="font-semibold">{employee.name}</h3>
                <p className="text-sm text-gray-500 break-all">
                  {employee.email}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs ${statusClasses(
                  employee.status
                )}`}
              >
                {employee.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Role</p>
                <p className="font-medium">{employee.role}</p>
              </div>
              <div>
                <p className="text-gray-400">Department</p>
                <p className="font-medium">{employee.department}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={() => openEdit(employee)}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-100 p-2 text-blue-600 text-sm"
              >
                <Edit size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteEmployee(employee.id)}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-red-100 p-2 text-red-600 text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}

        {filteredEmployees.length === 0 && (
          <p className="p-6 text-center text-gray-400">No employees found.</p>
        )}
      </div>

      <AddEmployeeModal
        open={openModal}
        onClose={closeModal}
        addEmployee={addEmployee}
        editEmployee={editEmployee}
        selectedEmployee={selectedEmployee}
      />
    </div>
  );
}