"use client";

import { CheckCircle, XCircle, Clock } from "lucide-react";


interface Attendance {

  id:number;
  name:string;
  department:string;
  date:string;
  checkIn:string;
  checkOut:string;
  status:string;

}


interface Props {
  attendance: Attendance[];
}



export default function AttendanceTable({
  attendance
}:Props){


return(

<div className="bg-white rounded-2xl shadow p-6">


<div className="mb-6">

<h1 className="text-2xl font-bold">
Attendance
</h1>

<p className="text-gray-500">
Manage employee attendance
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
Date
</th>

<th>
Check In
</th>

<th>
Check Out
</th>

<th>
Status
</th>

</tr>

</thead>



<tbody>

{
attendance.map((item)=>(


<tr
key={item.id}
className="border-b"
>


<td className="py-4 font-semibold">
{item.name}
</td>


<td>
{item.department}
</td>


<td>
{item.date}
</td>


<td>
{item.checkIn}
</td>


<td>
{item.checkOut}
</td>


<td>


{
item.status==="Present" &&

<span className="flex items-center gap-2 text-green-600">

<CheckCircle size={18}/>

Present

</span>

}



{
item.status==="Late" &&

<span className="flex items-center gap-2 text-yellow-600">

<Clock size={18}/>

Late

</span>

}



{
item.status==="Absent" &&

<span className="flex items-center gap-2 text-red-600">

<XCircle size={18}/>

Absent

</span>

}



</td>


</tr>


))

}


</tbody>


</table>


</div>

)

}