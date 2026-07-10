"use client";

import {
  Check,
  X,
  Trash2
} from "lucide-react";

import { useState } from "react";


interface Leave {

  id:number;
  employee:string;
  department:string;
  type:string;
  startDate:string;
  endDate:string;
  reason:string;
  status:string;

}



export default function LeaveTable(){


const [leaves,setLeaves]=useState<Leave[]>([

{
 id:1,
 employee:"Ali Ahmed",
 department:"IT",
 type:"Casual Leave",
 startDate:"2026-07-12",
 endDate:"2026-07-14",
 reason:"Family Event",
 status:"Pending"
},


{
 id:2,
 employee:"Sara Khan",
 department:"HR",
 type:"Sick Leave",
 startDate:"2026-07-15",
 endDate:"2026-07-16",
 reason:"Not feeling well",
 status:"Approved"
},


{
 id:3,
 employee:"Usman Raza",
 department:"Design",
 type:"Annual Leave",
 startDate:"2026-07-20",
 endDate:"2026-07-22",
 reason:"Personal Work",
 status:"Rejected"
}

]);



const updateStatus=(id:number,status:string)=>{

setLeaves(
 leaves.map((leave)=>
 leave.id===id
 ?
 {
 ...leave,
 status
 }
 :
 leave
 )
)

};



const deleteLeave=(id:number)=>{

setLeaves(
 leaves.filter((leave)=>leave.id!==id)
)

};



return(

<div className="bg-white rounded-2xl shadow p-6">


<div className="mb-6">

<h1 className="text-2xl font-bold">
Leave Management
</h1>

<p className="text-gray-500">
Manage employee leave requests
</p>

</div>



<table className="w-full">


<thead>

<tr className="border-b text-left">

<th className="py-4">
Employee
</th>

<th>
Department
</th>

<th>
Leave Type
</th>

<th>
Dates
</th>

<th>
Reason
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
leaves.map((leave)=>(


<tr
key={leave.id}
className="border-b"
>


<td className="py-4 font-semibold">
{leave.employee}
</td>


<td>
{leave.department}
</td>


<td>
{leave.type}
</td>


<td>

{leave.startDate}

<br/>

{leave.endDate}

</td>


<td>
{leave.reason}
</td>



<td>

<span className={

leave.status==="Approved"
?
"bg-green-100 text-green-600 px-3 py-1 rounded-full"
:
leave.status==="Rejected"
?
"bg-red-100 text-red-600 px-3 py-1 rounded-full"
:
"bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full"

}>

{leave.status}

</span>

</td>




<td className="flex gap-2 py-4">


<button

onClick={()=>updateStatus(leave.id,"Approved")}

className="bg-green-100 text-green-600 p-2 rounded-lg"

>

<Check size={18}/>

</button>




<button

onClick={()=>updateStatus(leave.id,"Rejected")}

className="bg-red-100 text-red-600 p-2 rounded-lg"

>

<X size={18}/>

</button>




<button

onClick={()=>deleteLeave(leave.id)}

className="bg-gray-100 text-gray-600 p-2 rounded-lg"

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