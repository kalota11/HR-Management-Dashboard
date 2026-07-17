"use client";

import { useState } from "react";
import { useEmployee } from "@/context/Employeecontext";

import {
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Plus,
} from "lucide-react";

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

const [search,setSearch] =
useState("");


const [status,setStatus] =
useState("All");


const [openModal,setOpenModal] =
useState(false);


const [editEmployee,setEditEmployee] =
useState<Employee | null>(null);


const [viewEmployee,setViewEmployee] =
useState<Employee | null>(null);


const handleSaveEmployee = (employee: Employee) => {
  if (editEmployee) {
    updateEmployee(employee);
    setEditEmployee(null);
  } else {
    addEmployee({
      ...employee,
      id: Date.now(),
    });
  }

  setOpenModal(false);
};

const filteredEmployees =
employees.filter((employee)=>{


const matchSearch =
employee.name
.toLowerCase()
.includes(search.toLowerCase())
||
employee.email
.toLowerCase()
.includes(search.toLowerCase());



const matchStatus =
status==="All" ||
employee.status===status;



return matchSearch && matchStatus;


});





return (

<div className="mt-8">



<AddEmployeeModal

open={openModal}

onClose={()=>{

setOpenModal(false);
setEditEmployee(null);

}}

addEmployee={handleSaveEmployee}

editEmployee={editEmployee}

/>





{/* VIEW MODAL */}

{
viewEmployee && (

<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
">


<div className="
bg-white
rounded-xl
p-6
w-96
">


<h2 className="
text-xl
font-bold
mb-4
">
Employee Details
</h2>


<p>
<b>Name:</b> {viewEmployee.name}
</p>


<p>
<b>Email:</b> {viewEmployee.email}
</p>


<p>
<b>Department:</b> {viewEmployee.department}
</p>


<p>
<b>Role:</b> {viewEmployee.role}
</p>


<p>
<b>Status:</b> {viewEmployee.status}
</p>



<button

onClick={()=>setViewEmployee(null)}

className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded-lg
"

>

Close

</button>


</div>


</div>

)

}






{/* TOOLBAR */}


<div className="
bg-white
rounded-xl
border
p-5
shadow-sm
mb-5
">


<div className="
flex
flex-col
md:flex-row
gap-4
justify-between
">



<div className="
flex
items-center
gap-3
border
rounded-xl
px-4
py-3
w-full
md:w-96
">


<Search
size={20}
className="text-gray-400"
/>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search employee..."

className="
outline-none
w-full
text-sm
"

/>


</div>






<div className="flex gap-3">



<div className="
flex
items-center
gap-2
border
rounded-xl
px-4
">


<Filter size={18}/>


<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

className="outline-none"

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
gap-2
bg-blue-600
text-white
px-5
rounded-xl
hover:bg-blue-700
"

>


<Plus size={18}/>

Add Employee


</button>



</div>



</div>


</div>







{/* TABLE */}


<div className="
bg-white
border
rounded-xl
shadow-sm
overflow-hidden
">


<div className="overflow-x-auto">


<table className="
w-full
text-left
">


<thead className="
bg-slate-50
border-b
">


<tr>


<th className="p-4">
Employee
</th>


<th className="p-4">
Department
</th>


<th className="p-4">
Role
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Action
</th>


</tr>


</thead>





<tbody>


{
filteredEmployees.map((employee)=>(


<tr
key={employee.id}
className="
border-b
hover:bg-slate-50
"
>



<td className="p-4">


<div className="
flex
items-center
gap-3
">


<div className="
w-10
h-10
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
font-bold
">


{employee.name.charAt(0)}


</div>


<div>


<p className="font-semibold">

{employee.name}

</p>


<p className="text-sm text-gray-500">

{employee.email}

</p>


</div>


</div>


</td>





<td className="p-4">
{employee.department}
</td>



<td className="p-4">
{employee.role}
</td>




<td className="p-4">


<span className={`
px-3
py-1
rounded-full
text-xs
font-semibold

${
employee.status==="Active"
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"
}

`}>

{employee.status}

</span>


</td>





<td className="p-4">


<div className="flex gap-2">



<button

onClick={()=>setViewEmployee(employee)}

className="
p-2
rounded-lg
hover:bg-blue-100
text-blue-600
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
p-2
rounded-lg
hover:bg-yellow-100
text-yellow-600
"

>

<Edit size={18}/>

</button>





<button
  onClick={() => deleteEmployee(employee.id)}
  className="
    p-2
    rounded-lg
    hover:bg-red-100
    text-red-600
  "
>
  <Trash2 size={18} />
</button>



</div>


</td>




</tr>


))

}



</tbody>


</table>


</div>


</div>



</div>


);


}