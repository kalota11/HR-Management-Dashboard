"use client";

import {
  LogIn,
  Coffee,
  Clock,
  LogOut,
} from "lucide-react";



interface AttendanceState {

  checkIn:string;

  breakIn:string;

  breakOut:string;

  checkOut:string;

}



interface Props {

  attendance:AttendanceState;

  checkIn:()=>void;

  breakIn:()=>void;

  breakOut:()=>void;

  checkOut:()=>void;

}







export default function AttendanceActions({

attendance,

checkIn,

breakIn,

breakOut,

checkOut,

}:Props){





const steps=[


{
title:"Check-In",
time:attendance.checkIn,
icon:<LogIn size={22}/>,
action:checkIn
},


{
title:"Break-In",
time:attendance.breakIn,
icon:<Coffee size={22}/>,
action:breakIn
},


{
title:"Break-Out",
time:attendance.breakOut,
icon:<Clock size={22}/>,
action:breakOut
},


{
title:"Check-Out",
time:attendance.checkOut,
icon:<LogOut size={22}/>,
action:checkOut
},


];






const activeStep =
attendance.checkOut
?
3
:
attendance.breakOut
?
2
:
attendance.breakIn
?
1
:
attendance.checkIn
?
0
:
-1;






function handleClick(
index:number,
action:()=>void
){


if(index===0)
return action();


if(index===1 && attendance.checkIn)
return action();


if(index===2 && attendance.breakIn)
return action();


if(index===3 && attendance.breakOut)
return action();


}







return (


<div

className="
w-full
rounded-3xl
border
border-blue-100
dark:border-slate-700
bg-white
dark:bg-slate-900
p-5
sm:p-6
shadow-lg
"

>


<h2

className="
mb-10
text-2xl
sm:text-3xl
font-extrabold
text-blue-600
dark:text-blue-400
"

>

Todays Attendance Activity

</h2>









<div

className="
relative
"

>





{/* DESKTOP HEARTBEAT */}

<svg

className="
absolute
top-8
left-10
right-10
w-[calc(100%-80px)]
h-14
hidden
md:block
"

viewBox="0 0 400 50"

preserveAspectRatio="none"

fill="none"

>


<path

d="
M0 25
H45
L60 10
L80 40
L100 25
H145
L165 5
L190 45
L215 25
H260
L280 12
L300 38
L320 25
H400
"

stroke="currentColor"

strokeWidth="4"

strokeLinecap="round"

strokeLinejoin="round"

className="
text-blue-100
dark:text-slate-700
"

/>





<path

d="
M0 25
H45
L60 10
L80 40
L100 25
H145
L165 5
L190 45
L215 25
H260
L280 12
L300 38
L320 25
H400
"

stroke="#2563eb"

strokeWidth="4"

strokeLinecap="round"

strokeLinejoin="round"

className="
animate-pulse
"

/>


</svg>










{/* MOBILE LINE */}

<div

className="
md:hidden
absolute
left-8
top-8
bottom-8
w-1
rounded-full
bg-blue-100
dark:bg-slate-700
"

>


<div

className="
w-full
rounded-full
bg-blue-600
dark:bg-blue-400
transition-all
duration-700
"

style={{

height:
activeStep===-1
?
"0%"
:
`${((activeStep+1)/4)*100}%`

}}


/>


</div>









<div

className="
relative
z-10
flex
flex-col
md:flex-row
items-center
justify-between
gap-8
"

>





{

steps.map((step,index)=>{


const disabled =

(index===1 && !attendance.checkIn)

||

(index===2 && !attendance.breakIn)

||

(index===3 && !attendance.breakOut);




const completed =
Boolean(step.time);





return (


<div

key={index}

className="
flex
md:flex-col
items-center
gap-4
md:gap-0
w-full
md:w-32
"

>








<button


disabled={disabled}


onClick={()=>handleClick(index,step.action)}


className={`

h-16
w-16
rounded-full
border-4
flex
items-center
justify-center
shrink-0
transition-all
duration-500


${
completed

?

`
bg-blue-600
border-blue-600
text-white
shadow-[0_0_30px_rgba(37,99,235,.5)]
scale-110
`

:

`
bg-white
dark:bg-slate-800
border-blue-200
dark:border-slate-600
text-blue-600
dark:text-blue-400
`

}



${
disabled

?

`
opacity-40
cursor-not-allowed
`

:

`
cursor-pointer
hover:scale-110
`

}

`

}


>

{step.icon}


</button>








<div

className="
md:text-center
"

>


<h3

className="
mt-0
md:mt-4
font-bold
text-gray-800
dark:text-white
"

>

{step.title}

</h3>




<p

className="
text-sm
mt-1
text-gray-500
dark:text-gray-400
"

>

{step.time || "--:--"}

</p>



</div>






</div>


)



})


}



</div>





</div>






</div>


);


}