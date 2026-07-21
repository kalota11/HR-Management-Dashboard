"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AttendanceTable from "@/components/attendance/AttendanceTable";
import AttendanceActions from "@/components/attendance/AttendanceActions";
import AttendanceStats from "@/components/attendance/AttendanceStats";
import AttendanceFilter from "@/components/attendance/AttendanceFilter";


interface Attendance {

  id:number;

  name:string;

  avatar:string;

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





function parseHours(value:string){

if(!value)
return 0;


const num =
parseFloat(
value.replace(
/[^0-9.]/g,
""
)
);


return isNaN(num)
?
0
:
num;

}







export default function AttendancePage(){



const [search,setSearch]=useState("");

const [month,setMonth]=useState("");

const [year,setYear]=useState("");





const [todayAttendance,setTodayAttendance]=useState({

checkIn:"",
breakIn:"",
breakOut:"",
checkOut:"",

});








const [attendance,setAttendance]=useState<Attendance[]>([

{

id:1,

name:"Ali Ahmed",

avatar:"https://i.pravatar.cc/150?img=12",

department:"IT",

date:"2026-07-10",

checkIn:"09:00 AM",

breakIn:"01:00 PM",

breakOut:"01:30 PM",

checkOut:"05:00 PM",

workingHours:"8 Hours",

status:"Present",

}

]);








const getTime=()=>{

return new Date().toLocaleTimeString();

};







const checkIn=()=>{


setTodayAttendance({

...todayAttendance,

checkIn:getTime()

});


};







const breakIn=()=>{


setTodayAttendance({

...todayAttendance,

breakIn:getTime()

});


};







const breakOut=()=>{


setTodayAttendance({

...todayAttendance,

breakOut:getTime()

});


};







const checkOut=()=>{


const time=getTime();



setTodayAttendance({

...todayAttendance,

checkOut:time

});





setAttendance([

...attendance,


{

id:Date.now(),

name:"Ebad",

avatar:"https://i.pravatar.cc/150?img=13",

department:"IT",

date:new Date()
.toISOString()
.split("T")[0],


checkIn:todayAttendance.checkIn,

breakIn:todayAttendance.breakIn,

breakOut:todayAttendance.breakOut,

checkOut:time,

workingHours:"8 Hours",

status:"Present"

}


]);


};









const filteredAttendance =

attendance.filter((item)=>{


const searchMatch =

item.name
.toLowerCase()
.includes(
search.toLowerCase()
);




const monthMatch =

month===""

?

true

:

new Date(item.date)
.toLocaleString(
"default",
{
month:"long"
}
)
===month;





const yearMatch =

year===""

?

true

:

new Date(item.date)
.getFullYear()
.toString()
===year;




return (

searchMatch

&&

monthMatch

&&

yearMatch

);


});









const summary={


present:
attendance.filter(
(a)=>a.status==="Present"
)
.length,


late:
attendance.filter(
(a)=>a.status==="Late"
)
.length,



absent:
attendance.filter(
(a)=>a.status==="Absent"
)
.length,



totalHours:

attendance.reduce(

(sum,a)=>

sum+
parseHours(
a.workingHours
),

0

)


};










return (


<DashboardLayout>


<div

className="
p-4
sm:p-6
space-y-8
min-h-screen
bg-gray-50
dark:bg-slate-950
transition-colors
duration-300
"

>





{/* HEADER */}


<div

className="
flex
flex-col
md:flex-row
md:justify-between
md:items-center
gap-4
"

>


<div>


<h1

className="
text-3xl
font-bold
text-gray-800
dark:text-white
"

>

Attendance Management

</h1>





<p

className="
text-gray-500
dark:text-gray-400
mt-2
"

>

Track employee attendance, breaks and working hours

</p>



</div>







<button


className="
bg-blue-600
hover:bg-blue-700
text-white
px-6
py-3
rounded-xl
shadow
transition
hover:scale-105
"

>

Export Report

</button>





</div>









{/* ACTIONS */}



<AttendanceActions

attendance={todayAttendance}

checkIn={checkIn}

breakIn={breakIn}

breakOut={breakOut}

checkOut={checkOut}

/>









{/* STATS */}


<AttendanceStats

summary={summary}

/>








{/* FILTER */}


<AttendanceFilter


search={search}

setSearch={setSearch}


month={month}

setMonth={setMonth}


year={year}

setYear={setYear}


/>









{/* TABLE */}



<AttendanceTable

attendance={filteredAttendance}

/>







</div>


</DashboardLayout>


);


}