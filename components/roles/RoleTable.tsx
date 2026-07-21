"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Users,
  ShieldCheck,
} from "lucide-react";

import { useEmployee } from "@/context/Employeecontext";


export default function RoleTable() {

  const { employees } = useEmployee();


  const [search, setSearch] = useState("");

  const [openRole, setOpenRole] =
    useState<string | null>(null);



  const roleMap =
    employees.reduce((acc, employee) => {


      if(!acc[employee.role]){
        acc[employee.role] = [];
      }


      acc[employee.role].push(employee);


      return acc;


    }, {} as Record<string, typeof employees>);





  const filteredRoles =
    Object.entries(roleMap)
    .filter(([role])=>

      role
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

    );






return (

<div
className="
mt-8
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



{/* HEADER */}


<div
className="
mb-6
flex
items-center
justify-between
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
bg-blue-600
text-white
"
>

<ShieldCheck size={24}/>

</div>


<div>

<h1
className="
text-2xl
font-bold
text-slate-900

dark:text-white
"
>

Roles & Permissions

</h1>


<p
className="
text-sm
text-slate-500
"
>

Manage employee roles and access

</p>


</div>


</div>


</div>


</div>







{/* SEARCH */}


<div
className="
relative
mb-6
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

type="text"

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="Search role..."

className="
h-12
w-full
rounded-2xl
border
border-slate-200
bg-slate-50
pl-12
pr-4
text-sm
outline-none

focus:border-blue-600

dark:border-slate-700
dark:bg-slate-800
dark:text-white
"

/>


</div>








{/* ROLE LIST */}


<div
className="
space-y-4
"
>


{
filteredRoles.length === 0 && (


<div
className="
rounded-2xl
bg-slate-50
py-12
text-center

dark:bg-slate-800
"
>

<Users
size={40}
className="
mx-auto
mb-3
text-slate-400
"
/>


<p
className="
text-slate-500
"
>

No roles found

</p>


</div>


)

}






{
filteredRoles.map(
([role,members])=>(


<div

key={role}

className="
overflow-hidden
rounded-2xl
border
border-slate-200

dark:border-slate-700
"

>



{/* ROLE HEADER */}


<button

onClick={()=>


setOpenRole(
openRole === role
?
null
:
role
)


}


className="
flex
w-full
items-center
justify-between
p-5
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
h-11
w-11
items-center
justify-center
rounded-xl
bg-blue-100

dark:bg-blue-900/40
"
>

<Users
size={22}
className="
text-blue-600
"
/>


</div>




<div
className="text-left"
>

<h2
className="
font-bold
text-slate-900

dark:text-white
"
>

{role}

</h2>


<p
className="
text-sm
text-slate-500
"
>

{members.length} Employees

</p>


</div>


</div>





{
openRole === role
?
<ChevronUp/>
:
<ChevronDown/>

}



</button>








{/* EMPLOYEES */}


{
openRole === role && (


<div
className="
border-t
bg-slate-50

dark:border-slate-700
dark:bg-slate-800/50
"
>


{
members.map((employee)=>(


<div

key={employee.id}

className="
flex
flex-col
gap-4
border-b
px-5
py-4

last:border-none

sm:flex-row
sm:items-center
sm:justify-between

dark:border-slate-700
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
h-10
w-10
items-center
justify-center
rounded-xl
bg-gradient-to-br
from-blue-600
to-indigo-600
font-bold
text-white
"
>

{
employee.name.charAt(0)
}


</div>




<div>

<h3
className="
font-semibold
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
text-left
sm:text-right
"
>


<p
className="
font-medium
dark:text-white
"
>

{employee.department}

</p>



<span

className={`
inline-block
mt-1
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


</div>






</div>


))


}



</div>


)

}


</div>


)


)

}


</div>


</div>


);


}