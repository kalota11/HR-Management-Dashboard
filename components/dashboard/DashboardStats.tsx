"use client";

import {
  Users,
  Building2,
  UserCheck,
  CalendarClock,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Employees"
        value={245}
        icon={Users}
        color="bg-cyan-500"
      />

      <StatsCard
        title="Departments"
        value={12}
        icon={Building2}
        color="bg-blue-500"
      />

      <StatsCard
        title="Present Today"
        value={228}
        icon={UserCheck}
        color="bg-green-500"
      />

      <StatsCard
        title="Pending Leaves"
        value={8}
        icon={CalendarClock}
        color="bg-red-500"
      />
    </div>
  );
}