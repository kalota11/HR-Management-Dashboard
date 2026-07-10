import { Users, UserCheck, UserX, Clock } from "lucide-react";


export default function AttendanceStats(){

return(

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">


<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">

<div className="bg-blue-100 p-3 rounded-xl">
<Users className="text-blue-600"/>
</div>

<div>

<p className="text-gray-500">
Total Employees
</p>

<h2 className="text-2xl font-bold">
25
</h2>

</div>

</div>

</div>




<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">

<div className="bg-green-100 p-3 rounded-xl">
<UserCheck className="text-green-600"/>
</div>


<div>

<p className="text-gray-500">
Present Today
</p>

<h2 className="text-2xl font-bold">
20
</h2>

</div>


</div>

</div>





<div className="bg-white rounded-2xl shadow p-5">


<div className="flex items-center gap-3">


<div className="bg-red-100 p-3 rounded-xl">
<UserX className="text-red-600"/>
</div>


<div>

<p className="text-gray-500">
Absent Today
</p>

<h2 className="text-2xl font-bold">
3
</h2>

</div>


</div>


</div>






<div className="bg-white rounded-2xl shadow p-5">


<div className="flex items-center gap-3">


<div className="bg-yellow-100 p-3 rounded-xl">
<Clock className="text-yellow-600"/>
</div>


<div>

<p className="text-gray-500">
Late Arrivals
</p>


<h2 className="text-2xl font-bold">
2
</h2>


</div>


</div>


</div>



</div>

)

}