"use client";

import { Pencil, Trash2, CheckCircle } from "lucide-react";
import { useState } from "react";


interface Payroll {

  id:number;
  employee:string;
  department:string;
  salary:number;
  bonus:number;
  deduction:number;
  netSalary:number;
  status:string;

}



export default function PayrollTable(){


const [payroll,setPayroll]=useState<Payroll[]>([

{
 id:1,
 employee:"Ali Ahmed",
 department:"IT",
 salary:50000,
 bonus:5000,
 deduction:2000,
 netSalary:53000,
 status:"Paid"
},


{
 id:2,
 employee:"Sara Khan",
 department:"HR",
 salary:45000,
 bonus:3000,
 deduction:1000,
 netSalary:47000,
 status:"Pending"
},


{
 id:3,
 employee:"Usman Raza",
 department:"Design",
 salary:60000,
 bonus:7000,
 deduction:3000,
 netSalary:64000,
 status:"Paid"
}

]);



const deletePayroll=(id:number)=>{

setPayroll(
 payroll.filter((item)=>item.id!==id)
)

};



return(

<div className="bg-white rounded-2xl shadow p-6">


<div className="mb-6">

<h1 className="text-2xl font-bold">
Payroll Management
</h1>


<p className="text-gray-500">
Manage employee salaries and payments
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
Salary
</th>


<th>
Bonus
</th>


<th>
Deduction
</th>


<th>
Net Salary
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
payroll.map((item)=>(


<tr
key={item.id}
className="border-b"
>


<td className="py-4 font-semibold">
{item.employee}
</td>



<td>
{item.department}
</td>



<td>
Rs {item.salary}
</td>



<td>
Rs {item.bonus}
</td>



<td>
Rs {item.deduction}
</td>



<td className="font-semibold">
Rs {item.netSalary}
</td>



<td>


<span className={

item.status==="Paid"

?
"bg-green-100 text-green-600 px-3 py-1 rounded-full"

:
"bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full"

}>

{item.status}

</span>


</td>




<td className="flex gap-2 py-4">


<button

className="bg-blue-100 text-blue-600 p-2 rounded-lg"

>

<Pencil size={18}/>

</button>



<button

onClick={()=>deletePayroll(item.id)}

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