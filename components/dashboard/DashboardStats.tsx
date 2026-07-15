"use client";

import {
  Users,
  Building2,
 UserCheck,
  Clock,
  Calendar,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Employees",
    value: "245",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Departments",
    value: "12",
    change: "+3%",
    icon: Building2,
  },
  {
    title: "Present Today",
    value: "228",
    change: "+6%",
    icon: UserCheck,
  },
  {
    title: "Late Today",
    value: "8",
    change: "-2%",
    icon: Clock,
  },
  {
    title: "Pending Leave",
    value: "16",
    change: "+5%",
    icon: Calendar,
  },
];
export default function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {item.value}
                </h2>

                <span className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                  {item.change}
                </span>

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Icon size={30} />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}