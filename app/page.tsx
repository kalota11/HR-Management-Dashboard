import DashboardLayout from "@/components/layout/DashboardLayout";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import DashboardStats from "@/components/dashboard/DashboardStats";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <WelcomeBanner />
        <DashboardStats />
      </div>
    </DashboardLayout>
  );
}