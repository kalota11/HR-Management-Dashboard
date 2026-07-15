"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import RoleStats from "@/components/roles/RoleStats";
import RoleTable from "@/components/roles/RoleTable";

export default function RolesPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            Roles & Permissions
          </h1>

          <p className="text-gray-500">
            Manage user access and permissions
          </p>
        </div>

        <RoleStats />

        <RoleTable />
      </div>
    </DashboardLayout>
  );
}