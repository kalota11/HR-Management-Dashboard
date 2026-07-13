"use client";

import { Search } from "lucide-react";


interface Props {

  search:string;
  setSearch:(value:string)=>void;

  month:string;
  setMonth:(value:string)=>void;

  year:string;
  setYear:(value:string)=>void;

}



export default function AttendanceFilter({

  search,
  setSearch,
  month,
  setMonth,
  year,
  setYear

}:Props){



return (

<div className="w-full bg-white rounded-2xl shadow-sm border p-4 sm:p-6 mb-6">


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4
">





{/* Search Employee */}


<div className="relative">


<Search

className="
absolute
left-3
top-1/2
-translate-y-1/2
text-gray-400
"

size={20}

/>



<input

type="text"

placeholder="Search employee..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
rounded-xl
border
py-3
pl-10
pr-4
outline-none
focus:ring-2
focus:ring-cyan-500
"

/>


</div>







{/* Month Filter */}


<select

value={month}

onChange={(e)=>setMonth(e.target.value)}

className="
w-full
border
rounded-xl
px-4
py-3
bg-white
outline-none
focus:ring-2
focus:ring-cyan-500
"

>


<option value="">
Select Month
</option>


<option value="January">
January
</option>


<option value="February">
February
</option>


<option value="March">
March
</option>


<option value="April">
April
</option>


<option value="May">
May
</option>


<option value="June">
June
</option>


<option value="July">
July
</option>


<option value="August">
August
</option>


<option value="September">
September
</option>


<option value="October">
October
</option>


<option value="November">
November
</option>


<option value="December">
December
</option>


</select>









{/* Year Filter */}


<select

value={year}

onChange={(e)=>setYear(e.target.value)}

className="
w-full
border
rounded-xl
px-4
py-3
bg-white
outline-none
focus:ring-2
focus:ring-cyan-500
"

>


<option value="">
Select Year
</option>


<option value="2025">
2025
</option>


<option value="2026">
2026
</option>


<option value="2027">
2027
</option>


</select>






</div>


</div>


)

}