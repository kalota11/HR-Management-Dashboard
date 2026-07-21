"use client";

import {
  CheckCircle2,
  Clock,
  XCircle,
  Timer
} from "lucide-react";


interface Summary {

  present:number;

  late:number;

  absent:number;

  totalHours:number;

}



interface Props {

  summary:Summary;

}





export default function AttendanceStats({
  summary
}:Props){


return (

<div
className="
grid
grid-cols-2
sm:grid-cols-4
gap-4
"
>





{/* PRESENT */}

<div
className="
bg-white
dark:bg-slate-900
rounded-2xl
shadow
border
border-blue-100
dark:border-slate-700
p-5
transition
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
bg-green-100
dark:bg-green-900/30
p-3
rounded-xl
"
>

<CheckCircle2
className="
text-green-600
dark:text-green-400
"
size={20}
/>

</div>




<div>


<p
className="
text-gray-500
dark:text-gray-400
text-sm
"
>

Present

</p>



<h2
className="
text-2xl
font-bold
text-green-600
dark:text-green-400
"
>

{summary.present}

</h2>


</div>


</div>


</div>








{/* LATE */}


<div
className="
bg-white
dark:bg-slate-900
rounded-2xl
shadow
border
border-blue-100
dark:border-slate-700
p-5
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
bg-yellow-100
dark:bg-yellow-900/30
p-3
rounded-xl
"
>


<Clock
className="
text-yellow-600
dark:text-yellow-400
"
size={20}
/>


</div>





<div>


<p
className="
text-gray-500
dark:text-gray-400
text-sm
"
>

Late

</p>



<h2
className="
text-2xl
font-bold
text-yellow-600
dark:text-yellow-400
"
>

{summary.late}

</h2>



</div>


</div>


</div>










{/* ABSENT */}


<div
className="
bg-white
dark:bg-slate-900
rounded-2xl
shadow
border
border-blue-100
dark:border-slate-700
p-5
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
bg-red-100
dark:bg-red-900/30
p-3
rounded-xl
"
>


<XCircle
className="
text-red-600
dark:text-red-400
"
size={20}
/>


</div>





<div>


<p
className="
text-gray-500
dark:text-gray-400
text-sm
"
>

Absent

</p>



<h2
className="
text-2xl
font-bold
text-red-600
dark:text-red-400
"
>

{summary.absent}

</h2>



</div>


</div>


</div>










{/* WORKING HOURS */}



<div
className="
bg-white
dark:bg-slate-900
rounded-2xl
shadow
border
border-blue-100
dark:border-slate-700
p-5
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
bg-blue-100
dark:bg-blue-900/30
p-3
rounded-xl
"
>


<Timer
className="
text-blue-600
dark:text-blue-400
"
size={20}
/>


</div>





<div>


<p
className="
text-gray-500
dark:text-gray-400
text-sm
"
>

Working Hours

</p>



<h2
className="
text-2xl
font-bold
text-blue-600
dark:text-blue-400
"
>

{summary.totalHours.toFixed(1)}h

</h2>



</div>


</div>


</div>





</div>


);


}