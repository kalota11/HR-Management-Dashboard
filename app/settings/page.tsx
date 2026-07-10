import DashboardLayout from "@/components/layout/DashboardLayout";

import SettingsCard from "@/components/settings/SettingsCard";
import ProfileSettings from "@/components/settings/ProfileSettings";


export default function SettingsPage(){


return(

<DashboardLayout>


<div className="p-6">


<div className="mb-6">


<h1 className="text-3xl font-bold">
Settings
</h1>


<p className="text-gray-500">
Manage your account and company settings
</p>


</div>




<SettingsCard/>



<ProfileSettings/>



</div>


</DashboardLayout>

)

}