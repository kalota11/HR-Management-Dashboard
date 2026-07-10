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
    <div className="rounded-3xl bg-white p-6 shadow-lg border">

      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <CalendarCheck className="text-blue-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Leave Requests
          </h2>

          <p className="text-sm text-gray-500">
            Recent employee leave applications
          </p>
        </div>
      </div>


      <div className="space-y-4">
        {requests.map((request, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {request.name}
              </h3>

              <p className="text-sm text-gray-500">
                {request.reason} • {request.days}
              </p>
            </div>


            <span
              className={`rounded-full px-4 py-1 text-sm font-medium ${
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