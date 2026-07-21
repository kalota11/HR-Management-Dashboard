"use client";

import { useState } from "react";

import {
  Building2,
  Search,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react";

import { useEmployee } from "@/context/Employeecontext";



export default function DepartmentTable() {


const { employees } = useEmployee();



const [search,setSearch] =
useState("");

const [openDepartment,setOpenDepartment] =
useState<string | null>(null);





const departmentMap =
employees.reduce((acc,employee)=>{


if(!acc[employee.department]){

acc[employee.department]=[];

}


acc[employee.department].push(employee);


return acc;


},{} as Record<string,typeof employees>);







const filteredDepartments =
Object.entries(departmentMap)
.filter(([department])=>

department
.toLowerCase()
.includes(
search.toLowerCase()
)

);








return (


<div
className="
space-y-6
"
>







{/* HEADER */}



<div

className="
rounded-3xl
border
bg-white
p-6
shadow-lg

dark:border-slate-800
dark:bg-slate-900
"

>


<div

className="
flex
flex-col
gap-5

lg:flex-row
lg:items-center
lg:justify-between
"

>



<div>


<div
className="
flex
items-center
gap-3
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-blue-100

dark:bg-blue-900/40
"
>

<Building2
className="text-blue-600"
/>

</div>




<div>


<h1
className="
text-2xl
font-bold
dark:text-white
"
>

Departments

</h1>


<p
className="
text-sm
text-slate-500
"
>

Manage department employees

</p>


</div>


</div>


</div>






{/* SEARCH */}


<div
className="
relative
w-full
lg:w-80
"
>


<Search

size={19}

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

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="Search department..."

className="
h-12
w-full
rounded-2xl
border
bg-slate-50
pl-12
pr-4
outline-none

focus:border-blue-600

dark:border-slate-700
dark:bg-slate-800
dark:text-white
"

/>



</div>




</div>


</div>









{/* DEPARTMENT LIST */}



<div
className="
space-y-5
"
>


{
filteredDepartments.map(
([department,deptEmployees])=>(


<div

key={department}

className="
overflow-hidden
rounded-3xl
border
bg-white
shadow-sm

dark:border-slate-800
dark:bg-slate-900
"

>






{/* HEADER */}


<button

onClick={()=>


setOpenDepartment(

openDepartment===department

?

null

:

department

)

}

className="
flex
w-full
items-center
justify-between
p-6
transition

hover:bg-blue-50

dark:hover:bg-slate-800
"

>



<div
className="
flex
items-center
gap-4
"
>



<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-blue-100

dark:bg-blue-900/40
"
>


<Building2

size={26}

className="text-blue-600"

/>


</div>




<div
className="text-left"
>


<h2
className="
text-xl
font-bold
dark:text-white
"
>

{department}

</h2>


<p
className="
text-sm
text-slate-500
"
>

{deptEmployees.length}
Employees

</p>


<p
className="
text-xs
text-slate-400
"
>

Manager:
{deptEmployees[0]?.name || "Not Assigned"}

</p>



</div>



</div>





{
openDepartment===department

?

<ChevronUp className="text-blue-600"/>

:

<ChevronDown className="text-blue-600"/>

}



</button>









{/* EMPLOYEES */}



{
openDepartment===department && (


<div

className="
border-t
bg-slate-50
p-6

dark:border-slate-700
dark:bg-slate-800/50
"

>



<div

className="
grid
gap-5

md:grid-cols-2
lg:grid-cols-3

"

>


{
deptEmployees.map(employee=>(


<div

key={employee.id}

className="
rounded-2xl
border
bg-white
p-5
transition

hover:-translate-y-1
hover:shadow-lg

dark:border-slate-700
dark:bg-slate-900
"

>



<div
className="
flex
items-center
gap-4
"
>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-blue-600
font-bold
text-white
"

>

{employee.name.charAt(0)}

</div>




<div>


<h3
className="
font-bold
dark:text-white
"
>

{employee.name}

</h3>


<p
className="
text-sm
text-slate-500
"
>

{employee.email}

</p>


</div>


</div>








<div
className="
mt-5
space-y-2
text-sm
"
>


<p className="dark:text-white">

<span className="font-semibold">
Role:
</span>

{" "}

{employee.role}

</p>



<p>

<span className="font-semibold dark:text-white">
Status:
</span>


{" "}


<span
className={`
rounded-full
px-3
py-1
text-xs
font-semibold

${
employee.status==="Active"

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}

`}
>

{employee.status}

</span>


</p>


</div>




</div>


))

}


</div>



</div>


)

}



</div>


)


)

}



</div>









{
filteredDepartments.length===0 && (


<div
className="
rounded-3xl
border
bg-white
p-12
text-center
shadow-sm

dark:border-slate-800
dark:bg-slate-900
"
>


<Users

size={50}

className="
mx-auto
mb-4
text-slate-300
"

/>


<h2
className="
text-xl
font-bold
dark:text-white
"
>

No Department Found

</h2>


<p
className="
mt-2
text-slate-500
"
>

No employees available.

</p>


</div>


)

}




</div>


);


}