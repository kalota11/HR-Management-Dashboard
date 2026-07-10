import { 
  ClipboardList, 
  CheckCircle, 
  Clock, 
  XCircle 
} from "lucide-react";


export default function LeaveStats(){

return(

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">


{/* Total Requests */}

<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">

<div className="bg-blue-100 p-3 rounded-xl">
<ClipboardList className="text-blue-600"/>
</div>


<div>

<p className="text-gray-500">
Total Requests
</p>

<h2 className="text-2xl font-bold">
30
</h2>

</div>


</div>

</div>





{/* Approved */}

<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">

<div className="bg-green-100 p-3 rounded-xl">
<CheckCircle className="text-green-600"/>
</div>


<div>

<p className="text-gray-500">
Approved
</p>

<h2 className="text-2xl font-bold">
18
</h2>

</div>


</div>

</div>





{/* Pending */}

<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">


<div className="bg-yellow-100 p-3 rounded-xl">
<Clock className="text-yellow-600"/>
</div>


<div>

<p className="text-gray-500">
Pending
</p>

<h2 className="text-2xl font-bold">
8
</h2>

</div>


</div>

</div>






{/* Rejected */}

<div className="bg-white rounded-2xl shadow p-5">


<div className="flex items-center gap-3">


<div className="bg-red-100 p-3 rounded-xl">
<XCircle className="text-red-600"/>
</div>


<div>

<p className="text-gray-500">
Rejected
</p>


<h2 className="text-2xl font-bold">
4
</h2>


</div>


</div>


</div>




</div>

)

}