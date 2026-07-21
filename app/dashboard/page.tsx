import DashboardLayout from "@/components/layout/DashboardLayout";

import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import RecentEmployees from "@/components/dashboard/RecentEmployees";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TopDepartments from "@/components/dashboard/TopDepartments";


export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">


        {/* Dashboard Stats */}

        <DashboardStats />




        {/* Charts */}

        <DashboardCharts />





        {/* Recent Employees + Activity */}

        <div
          className="
            grid
            gap-6

            xl:grid-cols-3
          "
        >

          <div
            className="
              xl:col-span-2
            "
          >

            <RecentEmployees />

          </div>



          <RecentActivity />


        </div>







        {/* Top Departments */}


        <div
          className="
            grid
            gap-6
          "
        >

          <TopDepartments />

        </div>



      </div>


    </DashboardLayout>
  );
}