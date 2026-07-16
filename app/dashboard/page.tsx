import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import RecentEmployees from "@/components/dashboard/RecentEmployees";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TopDepartments from "@/components/dashboard/TopDepartments";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <DashboardStats />

        <DashboardCharts />

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RecentEmployees />
          </div>

          <RecentActivity />
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
  <TopDepartments />

  {/* TopDepartments yahan aayega */}
</div>


      </div>
    </DashboardLayout>
  );
}