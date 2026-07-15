import {
  ShieldCheck,
  Users,
  UserCog,
  Lock
} from "lucide-react";


export default function RoleStats(){

return(

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">


<div className="bg-white rounded-2xl shadow p-5 border border-blue-100">

<div className="flex items-center gap-3">

<div className="bg-blue-100 p-3 rounded-xl">
<ShieldCheck className="text-[#0000ff]"/>
</div>

<div>

<p className="text-gray-500">
Total Roles
</p>

<h2 className="text-2xl font-bold text-[#0000ff]">
8
</h2>

</div>

</div>

</div>





<div className="bg-white rounded-2xl shadow p-5 border border-blue-100">

<div className="flex items-center gap-3">

<div className="bg-blue-100 p-3 rounded-xl">
<Users className="text-[#0000ff]"/>
</div>

<div>

<p className="text-gray-500">
Employees
</p>

<h2 className="text-2xl font-bold text-[#0000ff]">
50
</h2>

</div>

</div>

</div>





<div className="bg-white rounded-2xl shadow p-5 border border-blue-100">

<div className="flex items-center gap-3">

<div className="bg-blue-100 p-3 rounded-xl">
<UserCog className="text-[#0000ff]"/>
</div>

<div>

<p className="text-gray-500">
Admin Roles
</p>

<h2 className="text-2xl font-bold text-[#0000ff]">
3
</h2>

</div>

</div>

</div>





<div className="bg-white rounded-2xl shadow p-5 border border-blue-100">

<div className="flex items-center gap-3">

<div className="bg-blue-100 p-3 rounded-xl">
<Lock className="text-[#0000ff]"/>
</div>

<div>

<p className="text-gray-500">
Permissions
</p>

<h2 className="text-2xl font-bold text-[#0000ff]">
24
</h2>

</div>

</div>

</div>



</div>

)

}