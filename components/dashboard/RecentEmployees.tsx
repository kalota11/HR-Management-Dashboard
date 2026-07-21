"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Mail,
  Phone,
} from "lucide-react";


interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  status: "Active" | "Inactive";
}


const employees: Employee[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 234 567 890",
    department: "Development",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 234 567 891",
    department: "HR",
    role: "HR Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david@example.com",
    phone: "+1 234 567 892",
    department: "Finance",
    role: "Accountant",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Emma Brown",
    email: "emma@example.com",
    phone: "+1 234 567 893",
    department: "Marketing",
    role: "Marketing Lead",
    status: "Active",
  },
];


export default function RecentEmployees() {


return (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
overflow-hidden
rounded-3xl
border
border-slate-200

bg-white

shadow-xl

dark:border-slate-800
dark:bg-slate-900
"

>


<div className="overflow-x-auto">


<table className="min-w-full">


<thead>


<tr className="
bg-slate-50

dark:bg-slate-800
">


<th className="px-6 py-5 text-left text-sm font-semibold">
Employee
</th>


<th className="px-6 py-5 text-left text-sm font-semibold">
Contact
</th>


<th className="px-6 py-5 text-left text-sm font-semibold">
Department
</th>


<th className="px-6 py-5 text-left text-sm font-semibold">
Role
</th>


<th className="px-6 py-5 text-left text-sm font-semibold">
Status
</th>


<th className="px-6 py-5 text-right text-sm font-semibold">
Action
</th>


</tr>


</thead>





<tbody>


{employees.map((employee,index)=>(


<motion.tr

key={employee.id}

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*0.05
}}


className="
border-t

border-slate-100

transition

hover:bg-blue-50/50

dark:border-slate-800

dark:hover:bg-slate-800
"

>


<td className="px-6 py-5">


<div className="flex items-center gap-4">


<div
className="
h-12
w-12

flex
items-center
justify-center

rounded-2xl

bg-gradient-to-br
from-blue-600
to-indigo-700

font-bold
text-white

shadow-lg
"
>

{employee.name.charAt(0)}

</div>



<div>


<h3 className="
font-semibold

text-slate-900

dark:text-white
">

{employee.name}

</h3>


<p className="
text-sm
text-slate-500
">

EMP-00{employee.id}

</p>


</div>


</div>


</td>





<td className="px-6 py-5">


<div className="space-y-2">


<div className="flex items-center gap-2 text-sm">

<Mail size={15} className="text-blue-600"/>

{employee.email}

</div>


<div className="
flex
items-center
gap-2

text-sm

text-slate-500
">

<Phone size={15} className="text-green-600"/>

{employee.phone}

</div>


</div>


</td>






<td className="px-6 py-5">


<span
className="
rounded-full

bg-blue-100

px-4
py-2

text-sm

font-semibold

text-blue-700

dark:bg-blue-500/10

dark:text-blue-400
"
>

{employee.department}

</span>


</td>






<td className="
px-6
py-5

font-medium

text-slate-700

dark:text-slate-300
">


{employee.role}


</td>







<td className="px-6 py-5">


<span
className={`
rounded-full
px-4
py-2

text-sm
font-semibold

${
employee.status==="Active"

?

"bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"

:

"bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
}

`}
>

{employee.status}

</span>


</td>







<td className="px-6 py-5">


<div className="
flex
justify-end
gap-2
">


<button className="
rounded-xl
p-2

hover:bg-blue-100

text-blue-600
">

<Eye size={18}/>

</button>



<button className="
rounded-xl
p-2

hover:bg-green-100

text-green-600
">

<Edit size={18}/>

</button>




<button className="
rounded-xl
p-2

hover:bg-red-100

text-red-600
">

<Trash2 size={18}/>

</button>



<button className="
rounded-xl
p-2

hover:bg-slate-200
">

<MoreHorizontal size={18}/>

</button>



</div>


</td>




</motion.tr>


))}



</tbody>


</table>


</div>






{/* Footer */}

<div
className="
flex
items-center
justify-between

border-t

border-slate-200

bg-slate-50

px-6
py-5

dark:border-slate-800

dark:bg-slate-900
"
>


<p className="text-sm text-slate-500">

Total Employees

<span className="
ml-2

rounded-full

bg-blue-600

px-3
py-1

font-semibold

text-white
">

{employees.length}

</span>

</p>




<div className="flex gap-2">


<button className="rounded-xl border px-4 py-2 text-sm">
Previous
</button>


<button className="
rounded-xl

bg-blue-600

px-4
py-2

text-white
">

1

</button>



<button className="rounded-xl border px-4 py-2 text-sm">
Next
</button>



</div>



</div>



</motion.div>


);

}