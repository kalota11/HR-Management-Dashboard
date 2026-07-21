"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  CheckCircle2,
  Clock,
  XCircle,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";


export interface Attendance {

  id:number;

  name:string;

  department:string;

  date:string;

  checkIn:string;

  breakIn:string;

  breakOut:string;

  checkOut:string;

  workingHours:string;

  status:
  "Present"
  |
  "Late"
  |
  "Absent";

}



type SortKey =
"name"
|
"date"
|
"workingHours";


type SortOrder =
"asc"
|
"desc";



const PAGE_SIZE = 8;



function parseHours(value:string){

  const number =
  parseFloat(
    value?.replace(
      /[^0-9.]/g,
      ""
    )
  );


  return isNaN(number)
  ? 0
  : number;

}







function StatusBadge({
status
}:{
status:Attendance["status"]
}){


const config={


Present:{
icon:<CheckCircle2 size={16}/>,
style:
"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
},


Late:{
icon:<Clock size={16}/>,
style:
"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
},


Absent:{
icon:<XCircle size={16}/>,
style:
"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
}


};



return (

<span

className={`
inline-flex
items-center
gap-2
rounded-full
px-3
py-1.5
text-xs
font-bold
${config[status].style}
`}

>

{config[status].icon}

{status}

</span>

)

}









function SortIcon({
column,
sortKey,
sortOrder
}:{
column:SortKey;
sortKey:SortKey;
sortOrder:SortOrder;
}){


if(column!==sortKey)
return null;


return (

sortOrder==="asc"

?

<ChevronUp size={14}/>

:

<ChevronDown size={14}/>

)

}








interface Props{

attendance:Attendance[];

}








export default function AttendanceTable({

attendance=[]

}:Props){



const [sortKey,setSortKey]=
useState<SortKey>("date");


const [sortOrder,setSortOrder]=
useState<SortOrder>("desc");


const [page,setPage]=
useState(1);





const sorted =
useMemo(()=>{


const data=[...attendance];


data.sort((a,b)=>{


let value=0;



if(sortKey==="name")

value =
a.name.localeCompare(
b.name
);



if(sortKey==="date")

value =
new Date(a.date).getTime()
-
new Date(b.date).getTime();




if(sortKey==="workingHours")

value =
parseHours(a.workingHours)
-
parseHours(b.workingHours);



return sortOrder==="asc"
?
value
:
-value;



});



return data;



},[
attendance,
sortKey,
sortOrder
]);







const totalPages =
Math.max(
1,
Math.ceil(
sorted.length / PAGE_SIZE
)
);





const currentPage =
Math.min(
page,
totalPages
);





const paginated =
sorted.slice(

(currentPage-1)
*
PAGE_SIZE,

currentPage
*
PAGE_SIZE

);







function toggleSort(
key:SortKey
){


if(sortKey===key){


setSortOrder(
sortOrder==="asc"
?
"desc"
:
"asc"
);


}

else{


setSortKey(key);

setSortOrder("asc");


}


}






return (

<div

className="
space-y-6
text-gray-900
dark:text-white
"

>
 {/* DESKTOP TABLE */}


<div
className="
hidden
lg:block
bg-white
dark:bg-slate-900
rounded-3xl
border
border-gray-200
dark:border-slate-700
shadow-lg
overflow-hidden
"
>


<div
className="
overflow-x-auto
"
>


<table
className="
w-full
min-w-[1200px]
"
>


<thead
className="
bg-blue-50
dark:bg-slate-800
"
>


<tr>


<th
onClick={()=>toggleSort("name")}
className="
cursor-pointer
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>

<div className="flex items-center gap-2">

Employee

<SortIcon
column="name"
sortKey={sortKey}
sortOrder={sortOrder}
/>

</div>

</th>




<th
className="
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>
Department
</th>




<th
onClick={()=>toggleSort("date")}
className="
cursor-pointer
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>


<div className="flex items-center gap-2">

Date


<SortIcon
column="date"
sortKey={sortKey}
sortOrder={sortOrder}
/>


</div>


</th>




<th
className="
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>
Check In
</th>



<th
className="
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>
Break
</th>




<th
className="
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>
Check Out
</th>





<th
onClick={()=>toggleSort("workingHours")}
className="
cursor-pointer
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>


<div className="flex items-center gap-2">


Hours


<SortIcon
column="workingHours"
sortKey={sortKey}
sortOrder={sortOrder}
/>


</div>


</th>





<th
className="
px-6
py-5
text-left
text-sm
font-bold
text-blue-700
dark:text-blue-400
"
>

Status

</th>


</tr>


</thead>





<tbody>


{

paginated.map((item)=>(


<tr

key={item.id}

className="
border-t
border-gray-200
dark:border-slate-700
hover:bg-blue-50/50
dark:hover:bg-slate-800
transition
"

>


<td
className="
px-6
py-5
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
h-12
w-12
rounded-2xl
bg-gradient-to-br
from-blue-600
to-indigo-700
flex
items-center
justify-center
text-white
font-bold
"

>

{item.name.charAt(0)}

</div>




<div>


<h3
className="
font-bold
text-gray-800
dark:text-white
"
>

{item.name}

</h3>



<p
className="
text-sm
text-gray-500
dark:text-gray-400
"
>

Employee

</p>



</div>


</div>


</td>







<td
className="
px-6
py-5
"
>


<span
className="
rounded-full
bg-blue-100
dark:bg-blue-900/30
px-3
py-1
text-blue-700
dark:text-blue-400
text-sm
font-semibold
"
>

{item.department}

</span>


</td>







<td
className="
px-6
py-5
text-gray-700
dark:text-gray-300
"
>

{item.date}

</td>







<td
className="
px-6
py-5
font-bold
text-blue-600
dark:text-blue-400
"
>

{item.checkIn || "--"}

</td>







<td
className="
px-6
py-5
text-gray-700
dark:text-gray-300
"
>

{item.breakIn || "--"}

-

{item.breakOut || "--"}


</td>







<td
className="
px-6
py-5
text-gray-700
dark:text-gray-300
"
>

{item.checkOut || "--"}

</td>







<td
className="
px-6
py-5
"
>


<span

className="
rounded-full
bg-blue-100
dark:bg-blue-900/30
px-4
py-2
font-bold
text-blue-700
dark:text-blue-400
"

>

{item.workingHours}

</span>


</td>







<td
className="
px-6
py-5
"
>


<StatusBadge
status={item.status}
/>


</td>






</tr>


))

}


</tbody>


</table>


</div>


</div> 
{/* MOBILE VIEW */}


<div
className="
lg:hidden
space-y-4
"
>


{
paginated.map((item)=>(


<div

key={item.id}

className="
bg-white
dark:bg-slate-900
rounded-2xl
border
border-blue-100
dark:border-slate-700
shadow-sm
p-5
"

>


<div
className="
flex
justify-between
items-start
gap-3
"
>


<div
className="
flex
items-center
gap-3
"
>


<div
className="
h-12
w-12
rounded-2xl
bg-gradient-to-br
from-blue-600
to-indigo-700
flex
items-center
justify-center
text-white
font-bold
text-lg
"
>

{item.name.charAt(0)}

</div>




<div>


<h3
className="
font-bold
text-gray-800
dark:text-white
"
>

{item.name}

</h3>



<p
className="
text-sm
text-gray-500
dark:text-gray-400
"
>

{item.department}

</p>



</div>


</div>





<StatusBadge
status={item.status}
/>


</div>








<div

className="
grid
grid-cols-2
gap-4
mt-5
text-sm
"

>


<div>

<p className="
text-gray-400
">

Date

</p>

<p className="
font-semibold
dark:text-gray-200
">

{item.date}

</p>

</div>





<div>

<p className="
text-gray-400
">

Working Hours

</p>


<p
className="
font-semibold
text-blue-700
dark:text-blue-400
"
>

{item.workingHours}

</p>


</div>







<div>

<p className="
text-gray-400
">

Check In

</p>


<p className="
font-semibold
dark:text-gray-200
">

{item.checkIn || "--"}

</p>


</div>







<div>

<p className="
text-gray-400
">

Check Out

</p>


<p className="
font-semibold
dark:text-gray-200
">

{item.checkOut || "--"}

</p>


</div>







<div>

<p className="
text-gray-400
">

Break In

</p>


<p className="
font-semibold
dark:text-gray-200
">

{item.breakIn || "--"}

</p>


</div>







<div>

<p className="
text-gray-400
">

Break Out

</p>


<p className="
font-semibold
dark:text-gray-200
">

{item.breakOut || "--"}

</p>


</div>



</div>




</div>


))


}


</div>








{/* EMPTY STATE */}



{

paginated.length===0 && (


<div

className="
rounded-3xl
bg-white
dark:bg-slate-900
border
border-gray-200
dark:border-slate-700
p-12
text-center
shadow-sm
"

>


<div

className="
mx-auto
h-16
w-16
rounded-full
bg-blue-100
dark:bg-blue-900/30
flex
items-center
justify-center
"

>


<Clock

className="
text-blue-600
dark:text-blue-400
"

size={30}

/>


</div>





<h3

className="
mt-4
text-xl
font-bold
text-gray-700
dark:text-white
"

>

No Attendance Found

</h3>





<p

className="
mt-2
text-gray-500
dark:text-gray-400
"

>

No employee attendance record available.

</p>



</div>


)

}









{/* PAGINATION */}



{

sorted.length > 0 && (


<div

className="
flex
flex-col
sm:flex-row
items-center
justify-between
gap-4
bg-white
dark:bg-slate-900
rounded-2xl
border
border-gray-200
dark:border-slate-700
p-5
shadow-sm
"

>


<p

className="
text-sm
text-gray-500
dark:text-gray-400
"

>


Showing{" "}


{(currentPage-1)*PAGE_SIZE+1}


{" - "}



{

Math.min(
currentPage*PAGE_SIZE,
sorted.length
)

}



{" of "}



{sorted.length}



records


</p>







<div

className="
flex
items-center
gap-3
"

>



<button


disabled={
currentPage===1
}


onClick={()=>{


setPage(
prev =>
Math.max(
1,
prev-1
)
)


}}


className="
h-10
w-10
rounded-xl
bg-blue-100
dark:bg-blue-900/30
text-blue-700
dark:text-blue-400
flex
items-center
justify-center
disabled:opacity-40
hover:bg-blue-200
transition
"

>


<ChevronLeft size={18}/>


</button>








<div

className="
px-4
py-2
rounded-xl
bg-blue-50
dark:bg-blue-900/30
text-blue-700
dark:text-blue-400
font-bold
text-sm
"

>


{currentPage}

/

{totalPages}


</div>








<button


disabled={
currentPage===totalPages
}


onClick={()=>{


setPage(
prev =>
Math.min(
totalPages,
prev+1
)
)


}}


className="
h-10
w-10
rounded-xl
bg-blue-100
dark:bg-blue-900/30
text-blue-700
dark:text-blue-400
flex
items-center
justify-center
disabled:opacity-40
hover:bg-blue-200
transition
"

>


<ChevronRight size={18}/>


</button>





</div>



</div>


)

}



</div>


);

}