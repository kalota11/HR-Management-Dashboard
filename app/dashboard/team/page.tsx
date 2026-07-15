"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import TeamStats from "@/components/team/TeamStats";
import TeamTable from "@/components/team/TeamTable";

export default function TeamPage() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>
          <h1 className="text-2xl font-bold">
            Team Management
          </h1>
        </div>


        <TeamStats />

        <TeamTable />

      </div>

    </DashboardLayout>
  );
}