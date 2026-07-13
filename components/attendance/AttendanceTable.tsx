"use client";


import {
CheckCircle2,
Clock,
XCircle
} from "lucide-react";



interface Attendance {

 id:number;

 name:string;

 department:string;

 date:string;

 checkIn:string;

 breakIn:string;

 breakOut:string;

 checkOut:string;

 workingHours:string;

 status:string;

}



interface Props {

attendance:Attendance[];

}



export default function AttendanceTable({

attendance

}:Props){


return(


<div className="
bg-white
rounded-3xl
shadow-lg
border
p-6
">


<div className="mb-6">

<h2 className="text-2xl font-bold">
Attendance Records
</h2>

<p className="text-gray-500">
Employee attendance history
</p>

</div>




<div className="overflow-x-auto">


<table className="
w-full
min-w-[1200px]
">


<thead>


<tr className="
bg-gray-50
border-b
text-gray-600
">


<th className="p-4 text-left">
Employee
</th>


<th className="p-4">
Department
</th>


<th className="p-4">
Date
</th>


<th className="p-4">
Check-In
</th>


<th className="p-4">
Break-In
</th>


<th className="p-4">
Break-Out
</th>


<th className="p-4">
Check-Out
</th>


<th className="p-4">
Working Hours
</th>


<th className="p-4">
Status
</th>


</tr>


</thead>





<tbody>


{

attendance.map((item)=>(


<tr

key={item.id}

className="
border-b
hover:bg-cyan-50
transition
"


>



<td className="p-4">


<div>

<h3 className="font-semibold">

{item.name}

</h3>


<p className="text-sm text-gray-500">

Employee

</p>


</div>


</td>





<td className="p-4">

{item.department}

</td>





<td className="p-4">

{item.date}

</td>





<td className="p-4 text-cyan-600 font-medium">

{item.checkIn || "--"}

</td>




<td className="p-4">

{item.breakIn || "--"}

</td>




<td className="p-4">

{item.breakOut || "--"}

</td>





<td className="p-4">

{item.checkOut || "--"}

</td>





<td className="p-4">


<span className="
bg-cyan-100
text-cyan-700
px-3
py-1
rounded-full
font-semibold
">


{item.workingHours || "0h"}


</span>


</td>





<td className="p-4">


{

item.status==="Present"

&&

<span className="
flex
items-center
gap-2
text-green-600
">

<CheckCircle2 size={18}/>

Present

</span>


}



{

item.status==="Late"

&&

<span className="
flex
items-center
gap-2
text-yellow-600
">

<Clock size={18}/>

Late

</span>


}




{

item.status==="Absent"

&&

<span className="
flex
items-center
gap-2
text-red-600
">

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


</div>


)


}