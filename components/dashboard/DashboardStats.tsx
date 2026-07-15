"use client";

import {
  Users,
  Building2,
  UserCheck,
  Clock3,
} from "lucide-react";
import StatsCard from "./StatsCard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Team Members"
        value={245}
        icon={Users}
        color="#0000FF"
      />

      <StatsCard
        title="Departments"
        value={12}
        icon={Building2}
        color="#0000FF"
      />

      <StatsCard
        title="Present Today"
        value={228}
        icon={UserCheck}
        color="#0000FF"
      />

      <StatsCard
        title="Late Today"
        value={8}
        icon={Clock3}
        color="#0000FF"
      />
    </div>
  );
}