"use client";

import { Search } from "lucide-react";


interface Props {

  search:string;
  setSearch:(value:string)=>void;

  status:string;
  setStatus:(value:string)=>void;

  date:string;
  setDate:(value:string)=>void;

}



export default function AttendanceFilter({
  search,
  setSearch,
  status,
  setStatus,
  date,
  setDate
}:Props){


return(

<div className="bg-white rounded-2xl shadow p-5 mb-6">


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">



<div className="relative">


<Search 
className="absolute left-3 top-3 text-gray-400"
size={20}
/>


<input

placeholder="Search employee..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full border rounded-xl py-3 pl-10 px-4"

/>


</div>





<input

type="date"

value={date}

onChange={(e)=>setDate(e.target.value)}

className="border rounded-xl px-4 py-3"

/>





<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

className="border rounded-xl px-4 py-3"

>


<option value="">
All Status
</option>


<option value="Present">
Present
</option>


<option value="Late">
Late
</option>


<option value="Absent">
Absent
</option>


</select>



</div>


</div>

)

}