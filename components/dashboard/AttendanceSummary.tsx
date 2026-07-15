"use client";

import {
  UserCheck,
  UserX,
  Clock3,
  Plane,
} from "lucide-react";

const attendance = [
  {
    title: "Present",
    value: "228",
    color: "bg-green-100 text-green-600",
    icon: UserCheck,
  },
  {
    title: "Absent",
    value: "12",
    color: "bg-red-100 text-red-600",
    icon: UserX,
  },
  {
    title: "Late",
    value: "8",
    color: "bg-yellow-100 text-yellow-600",
    icon: Clock3,
  },
  {
    title: "On Leave",
    value: "6",
    color: "bg-blue-100 text-blue-600",
    icon: Plane,
  },
];

export default function AttendanceSummary() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Attendance Summary
        </h2>

        <p className="text-sm text-slate-500">
          Todays employee attendance overview
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">

        {attendance.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 p-5 transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-800">
                    {item.value}
                  </h3>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}