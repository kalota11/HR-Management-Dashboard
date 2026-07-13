"use client";

import {
  LogIn,
  Coffee,
  Clock,
  LogOut
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




export default function AttendanceStats({

attendance,

checkIn,

breakIn,

breakOut,

checkOut

}:Props){





const steps = [

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
}


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







const handleClick = (index:number,action:()=>void)=>{


if(index===0){

action();

}



if(index===1 && attendance.checkIn){

action();

}



if(index===2 && attendance.breakIn){

action();

}



if(index===3 && attendance.breakOut){

action();

}


};








return(


<div className="
w-full
bg-white
rounded-3xl
shadow-lg
border
p-5
sm:p-8
">





<h2 className="
text-xl
sm:text-2xl
font-bold
mb-10
text-gray-800
">

Todays Attendance

</h2>









<div className="
relative
w-full
overflow-x-auto
">



<div className="
min-w-[650px]
relative
flex
items-start
justify-between
">







{/* Background Line */}


<div className="
absolute
top-7
left-12
right-12
h-1
bg-gray-200
rounded-full
">




<div

className="
h-full
rounded-full
bg-[#00AEEF]
transition-all
duration-700
"

style={{

width:

activeStep===-1

?

"0%"

:

`${(activeStep/3)*100}%`

}}

/>



</div>










{

steps.map((step,index)=>(


<div

key={index}

className="
relative
z-10
flex
flex-col
items-center
w-32
"

>







<button


onClick={()=>handleClick(index,step.action)}


disabled={

(index===1 && !attendance.checkIn)

||

(index===2 && !attendance.breakIn)

||

(index===3 && !attendance.breakOut)


}




className={`

h-14

w-14

rounded-full

flex

items-center

justify-center

border-4

transition-all

duration-300


${

step.time

?

"bg-[#00AEEF] border-[#00AEEF] text-white shadow-lg"

:

"bg-white border-gray-300 text-gray-400"

}


${

(index===1 && !attendance.checkIn)

||

(index===2 && !attendance.breakIn)

||

(index===3 && !attendance.breakOut)

?

"opacity-40 cursor-not-allowed"

:

"hover:scale-110"

}



`}


>


{step.icon}


</button>









<h3 className="
mt-4
font-semibold
text-sm
text-center
">

{step.title}

</h3>






<p className="
text-xs
text-gray-500
mt-1
text-center
">

{

step.time || "--:--"

}

</p>







</div>


))


}








</div>



</div>





</div>


)


}