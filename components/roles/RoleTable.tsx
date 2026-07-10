"use client";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";


interface Role {

  id:number;
  name:string;
  description:string;
  users:number;
  permissions:number;
  status:string;

}



export default function RoleTable(){


const [roles,setRoles]=useState<Role[]>([

{
 id:1,
 name:"Admin",
 description:"Full system access",
 users:3,
 permissions:24,
 status:"Active"
},


{
 id:2,
 name:"HR Manager",
 description:"Manage employees and leaves",
 users:5,
 permissions:15,
 status:"Active"
},


{
 id:3,
 name:"Employee",
 description:"Basic employee access",
 users:42,
 permissions:8,
 status:"Active"
}

]);



const deleteRole=(id:number)=>{

setRoles(
 roles.filter((role)=>role.id!==id)
)

};



return(

<div className="bg-white rounded-2xl shadow p-6">


<div className="mb-6">

<h1 className="text-2xl font-bold">
Roles & Permissions
</h1>


<p className="text-gray-500">
Manage user roles and access control
</p>

</div>




<table className="w-full">


<thead>

<tr className="border-b text-left">


<th className="py-4">
Role Name
</th>


<th>
Description
</th>


<th>
Users
</th>


<th>
Permissions
</th>


<th>
Status
</th>


<th>
Action
</th>


</tr>


</thead>




<tbody>


{
roles.map((role)=>(


<tr
key={role.id}
className="border-b"
>


<td className="py-4 font-semibold">
{role.name}
</td>



<td>
{role.description}
</td>



<td>
{role.users}
</td>



<td>
{role.permissions}
</td>



<td>


<span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">

{role.status}

</span>


</td>




<td className="flex gap-3 py-4">


<button

className="bg-blue-100 text-blue-600 p-2 rounded-lg"

>

<Pencil size={18}/>

</button>



<button

onClick={()=>deleteRole(role.id)}

className="bg-red-100 text-red-600 p-2 rounded-lg"

>

<Trash2 size={18}/>

</button>



</td>



</tr>


))

}



</tbody>



</table>


</div>

)

}