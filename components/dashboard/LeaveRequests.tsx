"use client";

import { CalendarCheck } from "lucide-react";

const requests = [
  {
    name: "Ahmed Ali",
    reason: "Medical Leave",
    days: "3 Days",
    status: "Pending",
  },
  {
    name: "Fatima Noor",
    reason: "Personal Work",
    days: "1 Day",
    status: "Approved",
  },
  {
    name: "Hassan Raza",
    reason: "Family Event",
    days: "2 Days",
    status: "Pending",
  },
];

export default function LeaveRequests() {
  return (
    <div className="w-full rounded-2xl border bg-white p-4 shadow-lg sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-2 sm:p-3">
          <CalendarCheck className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
            Leave Requests
          </h2>

          <p className="text-xs text-gray-500 sm:text-sm">
            Recent employee leave applications
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {requests.map((request, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-2xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                {request.name}
              </h3>

              <p className="text-xs text-gray-500 sm:text-sm">
                {request.reason} • {request.days}
              </p>
            </div>

            <span
              className={`self-start rounded-full px-4 py-1 text-xs font-medium sm:self-auto sm:text-sm ${
                request.status === "Approved"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {request.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}