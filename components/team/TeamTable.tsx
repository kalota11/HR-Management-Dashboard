"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { 
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Plus,
  Mail,
  Building2
} from "lucide-react";


import { useEmployee } from "@/context/Employeecontext";

import AddEmployeeModal, {
  Employee,
} from "./AddEmployeeModal";



export default function TeamTable() {


const {
  employees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = useEmployee();



const [search,setSearch] = useState("");

const [status,setStatus] = useState("All");

const [openModal,setOpenModal] = useState(false);

const [editEmployee,setEditEmployee] =
useState<Employee | null>(null);

const [viewEmployee,setViewEmployee] =
useState<Employee | null>(null);





const handleSaveEmployee = (employee:Employee)=>{


if(editEmployee){

updateEmployee(employee);

setEditEmployee(null);


}else{


addEmployee({
...employee,
id:Date.now()
});


}


setOpenModal(false);


};





const filteredEmployees =
employees.filter((employee)=>{


const searchMatch =
employee.name
.toLowerCase()
.includes(search.toLowerCase())

||
employee.email
.toLowerCase()
.includes(search.toLowerCase());



const statusMatch =
status==="All"
||
employee.status===status;



return searchMatch && statusMatch;



});






return (

<div className="space-y-6">



<AddEmployeeModal

open={openModal}

onClose={()=>{

setOpenModal(false);

setEditEmployee(null);

}}

addEmployee={handleSaveEmployee}

editEmployee={editEmployee}

/>



{/* HEADER TOOLBAR */}


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
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-lg

dark:border-slate-800
dark:bg-slate-900
"

>



<div className="
flex
flex-col
gap-5

lg:flex-row
lg:items-center
lg:justify-between
">





<div>


<h2 className="
text-2xl
font-bold
text-slate-900

dark:text-white
">

Team Management

</h2>


<p className="
mt-1
text-sm
text-slate-500
">

Manage employees and organization members

</p>


</div>






<div className="
flex
flex-col
gap-3

sm:flex-row
">





<div className="
relative
">


<Search

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"

/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search employee..."

className="
h-11
w-full
rounded-xl
border
border-slate-200

bg-slate-50

pl-11
pr-4

outline-none

focus:border-blue-600

dark:border-slate-700
dark:bg-slate-800
"

/>


</div>





<div className="
flex
items-center
gap-2
rounded-xl
border
px-4
dark:border-slate-700
">


<Filter size={18}/>


<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

className="
bg-transparent
outline-none
"

>

<option>
All
</option>

<option>
Active
</option>


<option>
Inactive
</option>


</select>


</div>




<button

onClick={()=>setOpenModal(true)}

className="
flex
items-center
justify-center
gap-2

rounded-xl

bg-blue-600

px-5
py-3

font-semibold
text-white

transition

hover:bg-blue-700

shadow-lg
"

>


<Plus size={18}/>

Add Employee


</button>




</div>



</div>


</motion.div>
{/* TABLE */}

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:0.2
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


<table className="w-full">


<thead
className="
bg-slate-50

dark:bg-slate-800
"
>

<tr>


<th className="
px-6
py-5
text-left
text-sm
font-semibold
text-slate-600

dark:text-slate-300
">
Employee
</th>



<th className="
px-6
py-5
text-left
text-sm
font-semibold
text-slate-600

dark:text-slate-300
">
Department
</th>



<th className="
px-6
py-5
text-left
text-sm
font-semibold
text-slate-600

dark:text-slate-300
">
Role
</th>



<th className="
px-6
py-5
text-left
text-sm
font-semibold
text-slate-600

dark:text-slate-300
">
Status
</th>



<th className="
px-6
py-5
text-right
text-sm
font-semibold
text-slate-600

dark:text-slate-300
">
Actions
</th>


</tr>


</thead>





<tbody>



{filteredEmployees.map((employee,index)=>(


<motion.tr

key={employee.id}

initial={{
opacity:0,
y:15
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index * 0.05
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



{/* Employee */}


<td className="
px-6
py-5
">


<div className="
flex
items-center
gap-4
">


<div
className="
flex
h-12
w-12
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


<div className="
flex
items-center
gap-2

text-sm
text-slate-500
">

<Mail size={14}/>

{employee.email}

</div>



</div>



</div>


</td>








{/* Department */}


<td className="
px-6
py-5
">


<div className="
flex
items-center
gap-2
"
>

<Building2
size={16}
className="text-blue-600"
/>



<span className="
rounded-full

bg-blue-100

px-4
py-2

text-sm
font-semibold

text-blue-700


dark:bg-blue-500/10

dark:text-blue-400
">

{employee.department}

</span>


</div>


</td>








{/* Role */}


<td className="
px-6
py-5
">


<p className="
font-medium

text-slate-700

dark:text-slate-300
">

{employee.role}

</p>


</td>








{/* Status */}


<td className="
px-6
py-5
">


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









{/* Actions */}


<td className="
px-6
py-5
">


<div className="
flex
justify-end
gap-2
">


<button

onClick={()=>setViewEmployee(employee)}

className="
rounded-xl

bg-slate-100

p-3

text-blue-600

transition

hover:bg-blue-100

dark:bg-slate-800
"

>

<Eye size={18}/>

</button>





<button

onClick={()=>{

setEditEmployee(employee);

setOpenModal(true);

}}

className="
rounded-xl

bg-slate-100

p-3

text-yellow-600

transition

hover:bg-yellow-100

dark:bg-slate-800
"

>


<Edit size={18}/>


</button>






<button

onClick={()=>deleteEmployee(employee.id)}

className="
rounded-xl

bg-slate-100

p-3

text-red-600

transition

hover:bg-red-100

dark:bg-slate-800
"

>

<Trash2 size={18}/>

</button>




</div>


</td>




</motion.tr>


))}





</tbody>


</table>


</div>


</motion.div>
{/* Empty State */}

{filteredEmployees.length === 0 && (

<div
className="
flex
flex-col
items-center
justify-center

py-16

text-center
"
>

<div
className="
mb-4

flex
h-16
w-16

items-center
justify-center

rounded-full

bg-slate-100

text-slate-400

dark:bg-slate-800
"
>

<Search size={30}/>

</div>


<h3 className="
text-lg
font-semibold

text-slate-700

dark:text-white
">

No employees found

</h3>


<p className="
mt-2
text-sm
text-slate-500
">

Try changing your search or filter

</p>


</div>

)}







{/* View Employee Modal */}


{
viewEmployee && (

<div
className="
fixed
inset-0

z-50

flex
items-center
justify-center

bg-black/50

backdrop-blur-sm

px-4
"
>


<motion.div

initial={{
scale:0.9,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

className="
w-full
max-w-md

rounded-3xl

bg-white

p-6

shadow-2xl


dark:bg-slate-900
"

>


<div className="
flex
items-center
justify-between

mb-6
">


<div>

<h2 className="
text-2xl
font-bold

text-slate-900

dark:text-white
">

Employee Details

</h2>


<p className="
text-sm
text-slate-500
">

Profile information

</p>


</div>



<div
className="
flex
h-12
w-12

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

{viewEmployee.name.charAt(0)}

</div>



</div>






<div className="
space-y-4
">



<div
className="
rounded-2xl

bg-slate-50

p-4


dark:bg-slate-800
"
>

<p className="
text-xs
text-slate-500
">

Name

</p>


<p className="
font-semibold

text-slate-900

dark:text-white
">

{viewEmployee.name}

</p>


</div>







<div
className="
rounded-2xl

bg-slate-50

p-4


dark:bg-slate-800
"
>

<p className="
text-xs
text-slate-500
">

Email

</p>


<p className="
font-semibold

text-slate-900

dark:text-white
">

{viewEmployee.email}

</p>


</div>







<div
className="
grid
grid-cols-2
gap-4
"
>


<div
className="
rounded-2xl

bg-slate-50

p-4


dark:bg-slate-800
"
>

<p className="
text-xs
text-slate-500
">

Department

</p>


<p className="
font-semibold

text-slate-900

dark:text-white
">

{viewEmployee.department}

</p>


</div>





<div
className="
rounded-2xl

bg-slate-50

p-4


dark:bg-slate-800
"
>

<p className="
text-xs
text-slate-500
">

Role

</p>


<p className="
font-semibold

text-slate-900

dark:text-white
">

{viewEmployee.role}

</p>


</div>


</div>







<div
className="
rounded-2xl

bg-slate-50

p-4


dark:bg-slate-800
"
>

<p className="
text-xs
text-slate-500
">

Status

</p>


<span
className={`
inline-block
mt-1

rounded-full

px-4
py-1

text-sm
font-semibold


${
viewEmployee.status==="Active"

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}

`}
>

{viewEmployee.status}

</span>


</div>




</div>






<button

onClick={()=>setViewEmployee(null)}

className="
mt-6

w-full

rounded-2xl

bg-blue-600

py-3

font-semibold

text-white

transition

hover:bg-blue-700
"

>

Close

</button>




</motion.div>



</div>

)

}





</div>


);

}