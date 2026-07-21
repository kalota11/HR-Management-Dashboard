"use client";

import { useState } from "react";

import {
  ShieldCheck,
  UserCog,
  Power,
  KeyRound,
  Users2,
} from "lucide-react";


interface Role {

  id:number;

  name:string;

  permissions:number;

  status:"Active" | "Inactive";

}



const initialRoles:Role[]=[

{
id:1,
name:"Admin",
permissions:24,
status:"Active"
},

{
id:2,
name:"HR Manager",
permissions:12,
status:"Active"
},

{
id:3,
name:"Team Lead",
permissions:10,
status:"Active"
},

{
id:4,
name:"Employee",
permissions:6,
status:"Active"
},

{
id:5,
name:"Finance Officer",
permissions:9,
status:"Active"
},

{
id:6,
name:"Recruiter",
permissions:8,
status:"Inactive"
},

{
id:7,
name:"Support Staff",
permissions:5,
status:"Active"
},

{
id:8,
name:"Guest",
permissions:2,
status:"Inactive"
},

];






function RoleIcon({
name,
active
}:{
name:string;
active:boolean;
}){


return(

<div
className={`
flex
h-12
w-12
items-center
justify-center
rounded-2xl

${
active
?
"bg-blue-100 dark:bg-blue-900/40"
:
"bg-slate-100 dark:bg-slate-800"
}

`}
>


{
name==="Admin"

?

<ShieldCheck
size={24}
className={
active
?
"text-blue-600"
:
"text-slate-400"
}
/>

:

<UserCog

size={24}

className={
active
?
"text-blue-600"
:
"text-slate-400"
}

/>

}


</div>

)

}







function StatusBadge({
status
}:{
status:Role["status"]
}){


const active=status==="Active";


return(

<span
className={`
flex
items-center
gap-2
rounded-full
px-3
py-1
text-xs
font-semibold

${
active
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"
}

`}
>


<span
className={`
h-2
w-2
rounded-full

${
active
?
"bg-green-500"
:
"bg-red-500"
}

`}
/>


{status}


</span>

)

}








export default function RolesList(){


const [roles,setRoles]=
useState<Role[]>(initialRoles);




const toggleStatus=(id:number)=>{


setRoles(prev=>

prev.map(role=>

role.id===id

?

{
...role,

status:
role.status==="Active"
?
"Inactive"
:
"Active"

}

:

role

)

);


};




const activeCount=
roles.filter(
role=>role.status==="Active"
).length;







return(


<div
className="
space-y-6
"
>





{/* SUMMARY */}


<div
className="
grid
grid-cols-1
sm:grid-cols-3
gap-5
"
>




<div
className="
rounded-3xl
border
bg-white
p-5
shadow-sm

dark:border-slate-800
dark:bg-slate-900
"
>


<div className="flex items-center gap-4">


<div
className="
rounded-2xl
bg-blue-100
p-3

dark:bg-blue-900/40
"
>

<KeyRound
className="text-blue-600"
/>

</div>


<div>

<p className="text-sm text-slate-500">
Total Roles
</p>

<h2 className="
text-3xl
font-bold
dark:text-white
">

{roles.length}

</h2>

</div>


</div>


</div>






<div
className="
rounded-3xl
border
bg-white
p-5
shadow-sm

dark:border-slate-800
dark:bg-slate-900
"
>


<div className="flex items-center gap-4">


<div className="
rounded-2xl
bg-green-100
p-3
">

<ShieldCheck
className="text-green-600"
/>

</div>


<div>

<p className="text-sm text-slate-500">
Active
</p>

<h2 className="
text-3xl
font-bold
text-green-600
">

{activeCount}

</h2>

</div>


</div>


</div>






<div
className="
rounded-3xl
border
bg-white
p-5
shadow-sm

dark:border-slate-800
dark:bg-slate-900
"
>


<div className="flex items-center gap-4">


<div
className="
rounded-2xl
bg-red-100
p-3
"
>

<Power
className="text-red-600"
/>

</div>


<div>

<p className="text-sm text-slate-500">
Inactive
</p>


<h2 className="
text-3xl
font-bold
text-red-600
">

{roles.length-activeCount}

</h2>


</div>


</div>


</div>



</div>









{/* ROLE CARDS */}



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-5
"
>



{
roles.map(role=>{


const active =
role.status==="Active";



return(


<div

key={role.id}

className="
group
rounded-3xl
border
bg-white
p-5
shadow-sm
transition
hover:-translate-y-1
hover:shadow-xl

dark:border-slate-800
dark:bg-slate-900
"

>


<div
className="
flex
items-start
justify-between
"
>

<RoleIcon
name={role.name}
active={active}
/>


<StatusBadge
status={role.status}
/>


</div>





<div className="mt-5">


<h3
className="
text-xl
font-bold
dark:text-white
"
>

{role.name}

</h3>


<div
className="
mt-2
flex
items-center
gap-2
text-sm
text-slate-500
"
>

<Users2 size={15}/>

{role.permissions}
permissions

</div>


</div>







<div
className="
mt-5
h-2
overflow-hidden
rounded-full
bg-slate-100

dark:bg-slate-800
"
>


<div

className="
h-full
rounded-full
bg-blue-600
"

style={{
width:
`${Math.min(
100,
(role.permissions/24)*100
)}%`
}}

/>


</div>








<button

onClick={()=>toggleStatus(role.id)}

className={`
mt-5
flex
w-full
items-center
justify-center
gap-2
rounded-2xl
py-3
text-sm
font-semibold

transition

${
active

?

"bg-red-50 text-red-600 hover:bg-red-100"

:

"bg-green-50 text-green-700 hover:bg-green-100"

}

`}

>


<Power size={16}/>


{
active
?
"Deactivate"
:
"Activate"
}


</button>



</div>


)


})

}



</div>





</div>


)

}