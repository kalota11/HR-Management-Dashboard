"use client";

import { CheckCircle2, Clock, XCircle } from "lucide-react";

interface Attendance {
  id: number;
  name: string;
  department: string;
  date: string;
  checkIn: string;
  breakIn: string;
  breakOut: string;
  checkOut: string;
  workingHours: string;
  status: string;
}

interface Props {
  attendance: Attendance[];
}

export default function AttendanceTable({ attendance }: Props) {
  return (
    <div className="bg-white rounded-3xl border border-blue-100 shadow-lg p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0000FF]">
          Attendance Records
        </h2>

        <p className="mt-2 text-gray-500 text-base font-medium">
          Employee attendance history
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px]">
          <thead>
            <tr className="bg-blue-50 border-b border-blue-100">
              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Employee
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Department
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Date
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Check-In
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Break-In
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Break-Out
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Check-Out
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Working Hours
              </th>

              <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-300"
              >
                <td className="p-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-xs font-medium text-gray-500 mt-1">
                      Employee
                    </p>
                  </div>
                </td>

                <td className="p-4 text-[15px] font-medium text-gray-700">
                  {item.department}
                </td>

                <td className="p-4 text-[15px] font-medium text-gray-700">
                  {item.date}
                </td>

                <td className="p-4 text-[15px] font-bold text-[#0000FF]">
                  {item.checkIn || "--"}
                </td>

                <td className="p-4 text-[15px] font-medium text-gray-700">
                  {item.breakIn || "--"}
                </td>

                <td className="p-4 text-[15px] font-medium text-gray-700">
                  {item.breakOut || "--"}
                </td>

                <td className="p-4 text-[15px] font-medium text-gray-700">
                  {item.checkOut || "--"}
                </td>

                <td className="p-4">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-[#0000FF]">
                    {item.workingHours || "0h"}
                  </span>
                </td>

                <td className="p-4">
                  {item.status === "Present" && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      <CheckCircle2 size={18} />
                      Present
                    </span>
                  )}

                  {item.status === "Late" && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      <Clock size={18} />
                      Late
                    </span>
                  )}

                  {item.status === "Absent" && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                      <XCircle size={18} />
                      Absent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}