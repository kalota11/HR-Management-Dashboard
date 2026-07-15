"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import DashboardStats from "@/components/dashboard/DashboardStats";
import AttendanceChart from "@/components/dashboard/AttendanceChart";
import RecentEmployees from "@/components/dashboard/RecentEmployees";
import DepartmentAnalytics from "@/components/dashboard/DepartmentAnalytics";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Welcome */}
        <WelcomeBanner />

        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Charts */}
        <AttendanceChart />

        {/* Team Management */}
        <RecentEmployees />

        {/* Department Analytics */}
        <DepartmentAnalytics />

      </div>
    </DashboardLayout>
  );
}