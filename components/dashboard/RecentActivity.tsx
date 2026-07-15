"use client";

import {
  UserPlus,
  Clock3,
  Building2,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "John Smith checked in",
    time: "5 minutes ago",
    icon: Clock3,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "New Employee Added",
    time: "20 minutes ago",
    icon: UserPlus,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Department Created",
    time: "1 hour ago",
    icon: Building2,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Leave Approved",
    time: "2 hours ago",
    icon: CalendarCheck,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    title: "Attendance Updated",
    time: "Today",
    icon: CheckCircle2,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Recent Activity
          </h2>

          <p className="text-sm text-slate-500">
            Latest updates from your HR system
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-4"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}