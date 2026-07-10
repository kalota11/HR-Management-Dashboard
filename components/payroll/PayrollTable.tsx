"use client";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Payroll {
  id: number;
  employee: string;
  department: string;
  salary: number;
  bonus: number;
  deduction: number;
  netSalary: number;
  status: string;
}

function StatusBadge({ status }: { status: string }) {
  const classes =
    status === "Paid"
      ? "bg-green-100 text-green-600"
      : "bg-yellow-100 text-yellow-600";

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${classes}`}>
      {status}
    </span>
  );
}

export default function PayrollTable() {
  const [payroll, setPayroll] = useState<Payroll[]>([
    {
      id: 1,
      employee: "Ali Ahmed",
      department: "IT",
      salary: 50000,
      bonus: 5000,
      deduction: 2000,
      netSalary: 53000,
      status: "Paid",
    },
    {
      id: 2,
      employee: "Sara Khan",
      department: "HR",
      salary: 45000,
      bonus: 3000,
      deduction: 1000,
      netSalary: 47000,
      status: "Pending",
    },
    {
      id: 3,
      employee: "Usman Raza",
      department: "Design",
      salary: 60000,
      bonus: 7000,
      deduction: 3000,
      netSalary: 64000,
      status: "Paid",
    },
  ]);

  const deletePayroll = (id: number) => {
    setPayroll(payroll.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Payroll Management</h1>
        <p className="text-sm sm:text-base text-gray-500">
          Manage employee salaries and payments
        </p>
      </div>

      {/* Desktop / tablet table view (md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-4">Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Bonus</th>
              <th>Deduction</th>
              <th>Net Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {payroll.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 font-semibold">{item.employee}</td>
                <td>{item.department}</td>
                <td>Rs {item.salary}</td>
                <td>Rs {item.bonus}</td>
                <td>Rs {item.deduction}</td>
                <td className="font-semibold">Rs {item.netSalary}</td>
                <td>
                  <StatusBadge status={item.status} />
                </td>

                <td className="flex gap-2 py-4">
                  <button className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => deletePayroll(item.id)}
                    className="bg-red-100 text-red-600 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {payroll.length === 0 && (
              <tr>
                <td colSpan={8} className="py-6 text-center text-gray-400">
                  No payroll records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view (below md) */}
      <div className="md:hidden space-y-4">
        {payroll.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="font-semibold">{item.employee}</h3>
                <p className="text-sm text-gray-500">{item.department}</p>
              </div>

              <StatusBadge status={item.status} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Salary</p>
                <p className="font-medium">Rs {item.salary}</p>
              </div>
              <div>
                <p className="text-gray-400">Bonus</p>
                <p className="font-medium">Rs {item.bonus}</p>
              </div>
              <div>
                <p className="text-gray-400">Deduction</p>
                <p className="font-medium">Rs {item.deduction}</p>
              </div>
              <div>
                <p className="text-gray-400">Net Salary</p>
                <p className="font-semibold">Rs {item.netSalary}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-600 p-2 rounded-lg text-sm">
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deletePayroll(item.id)}
                className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-600 p-2 rounded-lg text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}

        {payroll.length === 0 && (
          <p className="py-6 text-center text-gray-400">
            No payroll records found.
          </p>
        )}
      </div>
    </div>
  );
}