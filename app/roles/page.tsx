"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import RoleStats from "@/components/roles/RoleStats";
import RoleTable from "@/components/roles/RoleTable";
import AddRoleModal from "@/components/roles/AddRoleModal";


export default function RolesPage(){


const [open,setOpen]=useState(false);



const addRole=(data:{
  name:string;
  description:string;
})=>{

console.log(data);

setOpen(false);

};



return(

<DashboardLayout>


<div className="p-6">


<div className="flex justify-between items-center mb-6">


<div>

<h1 className="text-3xl font-bold">
Roles & Permissions
</h1>


<p className="text-gray-500">
Manage user access and permissions
</p>


</div>




<button

onClick={()=>setOpen(true)}

className="bg-cyan-600 text-white px-5 py-3 rounded-xl"

>

+ Add Role

</button>


</div>




<RoleStats/>


<RoleTable/>





{
open &&

<AddRoleModal

onClose={()=>setOpen(false)}

addRole={addRole}

/>

}



</div>


</DashboardLayout>

)

}