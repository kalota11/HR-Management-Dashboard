"use client";

import { Check, X, Trash2 } from "lucide-react";
import { useState } from "react";

interface Leave {
  id: number;
  employee: string;
  department: string;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
}

function StatusBadge({ status }: { status: string }) {
  const classes =
    status === "Approved"
      ? "bg-green-100 text-green-600"
      : status === "Rejected"
      ? "bg-red-100 text-red-600"
      : "bg-yellow-100 text-yellow-600";

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${classes}`}>
      {status}
    </span>
  );
}

export default function LeaveTable() {
  const [leaves, setLeaves] = useState<Leave[]>([
    {
      id: 1,
      employee: "Ali Ahmed",
      department: "IT",
      type: "Casual Leave",
      startDate: "2026-07-12",
      endDate: "2026-07-14",
      reason: "Family Event",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Sara Khan",
      department: "HR",
      type: "Sick Leave",
      startDate: "2026-07-15",
      endDate: "2026-07-16",
      reason: "Not feeling well",
      status: "Approved",
    },
    {
      id: 3,
      employee: "Usman Raza",
      department: "Design",
      type: "Annual Leave",
      startDate: "2026-07-20",
      endDate: "2026-07-22",
      reason: "Personal Work",
      status: "Rejected",
    },
  ]);

  const updateStatus = (id: number, status: string) => {
    setLeaves(
      leaves.map((leave) => (leave.id === id ? { ...leave, status } : leave))
    );
  };

  const deleteLeave = (id: number) => {
    setLeaves(leaves.filter((leave) => leave.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Leave Management</h1>
        <p className="text-sm sm:text-base text-gray-500">
          Manage employee leave requests
        </p>
      </div>

      {/* Desktop / tablet table view (md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-4">Employee</th>
              <th>Department</th>
              <th>Leave Type</th>
              <th>Dates</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} className="border-b">
                <td className="py-4 font-semibold">{leave.employee}</td>
                <td>{leave.department}</td>
                <td>{leave.type}</td>
                <td>
                  {leave.startDate}
                  <br />
                  {leave.endDate}
                </td>
                <td>{leave.reason}</td>
                <td>
                  <StatusBadge status={leave.status} />
                </td>

                <td className="flex gap-2 py-4">
                  <button
                    onClick={() => updateStatus(leave.id, "Approved")}
                    className="bg-green-100 text-green-600 p-2 rounded-lg"
                  >
                    <Check size={18} />
                  </button>

                  <button
                    onClick={() => updateStatus(leave.id, "Rejected")}
                    className="bg-red-100 text-red-600 p-2 rounded-lg"
                  >
                    <X size={18} />
                  </button>

                  <button
                    onClick={() => deleteLeave(leave.id)}
                    className="bg-gray-100 text-gray-600 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {leaves.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-400">
                  No leave requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view (below md) */}
      <div className="md:hidden space-y-4">
        {leaves.map((leave) => (
          <div key={leave.id} className="border rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="font-semibold">{leave.employee}</h3>
                <p className="text-sm text-gray-500">{leave.department}</p>
              </div>

              <StatusBadge status={leave.status} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Leave Type</p>
                <p className="font-medium">{leave.type}</p>
              </div>
              <div>
                <p className="text-gray-400">Dates</p>
                <p className="font-medium">
                  {leave.startDate} - {leave.endDate}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400">Reason</p>
                <p className="font-medium">{leave.reason}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => updateStatus(leave.id, "Approved")}
                className="flex-1 flex items-center justify-center gap-2 bg-green-100 text-green-600 p-2 rounded-lg text-sm"
              >
                <Check size={16} />
                Approve
              </button>

              <button
                onClick={() => updateStatus(leave.id, "Rejected")}
                className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-600 p-2 rounded-lg text-sm"
              >
                <X size={16} />
                Reject
              </button>

              <button
                onClick={() => deleteLeave(leave.id)}
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-600 p-2 rounded-lg text-sm"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}

        {leaves.length === 0 && (
          <p className="py-6 text-center text-gray-400">
            No leave requests found.
          </p>
        )}
      </div>
    </div>
  );
}