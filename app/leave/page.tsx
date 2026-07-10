import DashboardLayout from "@/components/layout/DashboardLayout";
import LeaveStats from "@/components/leave/LeaveStats";
import LeaveTable from "@/components/leave/LeaveTable";


export default function LeavePage(){

return(

<DashboardLayout>

<div className="p-6">


<LeaveStats/>


<LeaveTable/>


</div>

</DashboardLayout>

)

}