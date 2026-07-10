"use client";

import { CheckCircle, XCircle, Clock } from "lucide-react";

interface Attendance {
  id: number;
  name: string;
  department: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: string;
}

interface Props {
  attendance: Attendance[];
}

function StatusBadge({ status }: { status: string }) {
  if (status === "Present") {
    return (
      <span className="flex items-center gap-2 text-green-600">
        <CheckCircle size={18} />
        Present
      </span>
    );
  }

  if (status === "Late") {
    return (
      <span className="flex items-center gap-2 text-yellow-600">
        <Clock size={18} />
        Late
      </span>
    );
  }

  if (status === "Absent") {
    return (
      <span className="flex items-center gap-2 text-red-600">
        <XCircle size={18} />
        Absent
      </span>
    );
  }

  return null;
}

export default function AttendanceTable({ attendance }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Attendance</h1>
        <p className="text-sm sm:text-base text-gray-500">
          Manage employee attendance
        </p>
      </div>

      {/* Desktop / tablet table view (md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-4">Employee</th>
              <th>Department</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 font-semibold">{item.name}</td>
                <td>{item.department}</td>
                <td>{item.date}</td>
                <td>{item.checkIn}</td>
                <td>{item.checkOut}</td>
                <td>
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}

            {attendance.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-400">
                  No attendance records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view (below md) */}
      <div className="md:hidden space-y-4">
        {attendance.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.department}</p>
              </div>

              <StatusBadge status={item.status} />
            </div>

            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Date</p>
                <p className="font-medium">{item.date}</p>
              </div>
              <div>
                <p className="text-gray-400">Check In</p>
                <p className="font-medium">{item.checkIn}</p>
              </div>
              <div>
                <p className="text-gray-400">Check Out</p>
                <p className="font-medium">{item.checkOut}</p>
              </div>
            </div>
          </div>
        ))}

        {attendance.length === 0 && (
          <p className="py-6 text-center text-gray-400">
            No attendance records found.
          </p>
        )}
      </div>
    </div>
  );
}