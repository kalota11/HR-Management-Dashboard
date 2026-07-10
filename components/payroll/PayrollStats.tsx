import {
  DollarSign,
  Users,
  CheckCircle,
  Clock
} from "lucide-react";


export default function PayrollStats(){

return(

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">


<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">

<div className="bg-green-100 p-3 rounded-xl">
<DollarSign className="text-green-600"/>
</div>


<div>

<p className="text-gray-500">
Total Salary
</p>

<h2 className="text-2xl font-bold">
$25,000
</h2>

</div>

</div>

</div>





<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">

<div className="bg-blue-100 p-3 rounded-xl">
<Users className="text-blue-600"/>
</div>


<div>

<p className="text-gray-500">
Employees
</p>

<h2 className="text-2xl font-bold">
50
</h2>

</div>

</div>

</div>






<div className="bg-white rounded-2xl shadow p-5">

<div className="flex items-center gap-3">

<div className="bg-green-100 p-3 rounded-xl">
<CheckCircle className="text-green-600"/>
</div>


<div>

<p className="text-gray-500">
Paid
</p>

<h2 className="text-2xl font-bold">
45
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
Pending
</p>

<h2 className="text-2xl font-bold">
5
</h2>

</div>

</div>

</div>



</div>

)

}