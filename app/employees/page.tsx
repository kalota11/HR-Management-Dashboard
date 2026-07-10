import DashboardLayout from "@/components/layout/DashboardLayout";
import EmployeeTable from "@/components/employees/EmployeeTable";

export default function EmployeesPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <EmployeeTable />
      </div>
    </DashboardLayout>
  );
}