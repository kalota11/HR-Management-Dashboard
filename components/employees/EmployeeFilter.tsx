"use client";

import {
  Search,
  Building2,
  Filter,
} from "lucide-react";


interface Props {

  search: string;

  setSearch: (value:string)=>void;

  departmentFilter:string;

  setDepartmentFilter:(value:string)=>void;

  statusFilter:string;

  setStatusFilter:(value:string)=>void;

  departments:string[];

}



export default function EmployeeFilter({

  search,
  setSearch,

  departmentFilter,
  setDepartmentFilter,

  statusFilter,
  setStatusFilter,

  departments,

}:Props){



return (

<div className="
rounded-3xl
border
border-blue-100
bg-white
p-6
shadow-lg
">


<div className="
grid
grid-cols-1
gap-4
md:grid-cols-3
">







{/* Search */}


<div className="relative">


<Search

size={20}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-[#0000FF]
"

/>



<input

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

type="text"

placeholder="Search employee..."

className="
w-full
rounded-2xl
border
border-blue-200
bg-blue-50
py-3
pl-12
pr-4
outline-none
transition
focus:border-[#0000FF]
focus:ring-2
focus:ring-blue-200
"

/>



</div>








{/* Department */}



<div className="relative">


<Building2

size={20}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-[#0000FF]
"

/>



<select

value={departmentFilter}

onChange={(e)=>
setDepartmentFilter(e.target.value)
}

className="
w-full
appearance-none
rounded-2xl
border
border-blue-200
bg-blue-50
py-3
pl-12
pr-4
outline-none
transition
focus:border-[#0000FF]
focus:ring-2
focus:ring-blue-200
"

>


{

departments.map((dept)=>(

<option
key={dept}
value={dept}
>

{dept==="All"
?
"All Departments"
:
dept
}

</option>

))

}


</select>



</div>









{/* Status */}



<div className="relative">


<Filter

size={20}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-[#0000FF]
"

/>



<select


value={statusFilter}

onChange={(e)=>
setStatusFilter(e.target.value)
}


className="
w-full
appearance-none
rounded-2xl
border
border-blue-200
bg-blue-50
py-3
pl-12
pr-4
outline-none
transition
focus:border-[#0000FF]
focus:ring-2
focus:ring-blue-200
"

>


<option value="All">
All Status
</option>


<option value="Active">
Active
</option>


<option value="On Leave">
On Leave
</option>


<option value="Inactive">
Inactive
</option>


</select>



</div>





</div>


</div>

);

}