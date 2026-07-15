import DashboardLayout from "@/components/layout/DashboardLayout";
import DepartmentTable from "@/components/departments/DepartmentTable";


export default function DepartmentsPage(){

return(

<DashboardLayout>

<div className="p-6">

<DepartmentTable/>

</div>

</DashboardLayout>

)

}