"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AttendanceTable from "@/components/attendance/AttendanceTable";
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

  status:string;

}




export default function AttendancePage(){



const [search,setSearch]=useState("");

const [month,setMonth]=useState("");

const [year,setYear]=useState("");





const [todayAttendance,setTodayAttendance]=useState({

checkIn:"",
breakIn:"",
breakOut:"",
checkOut:""

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

status:"Present"

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

date:new Date().toISOString().split("T")[0],

checkIn:todayAttendance.checkIn,

breakIn:todayAttendance.breakIn,

breakOut:todayAttendance.breakOut,

checkOut:time,

workingHours:"8 Hours",

status:"Present"

}


]);



};









const filteredAttendance = attendance.filter((item)=>{


const searchMatch =

item.name
.toLowerCase()
.includes(search.toLowerCase());





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






return searchMatch && monthMatch && yearMatch;



});











return(


<DashboardLayout>


<div className="
p-4
sm:p-6
space-y-8
bg-gray-50
min-h-screen
">





{/* Header */}


<div className="
flex
flex-col
md:flex-row
md:justify-between
md:items-center
gap-4
">


<div>


<h1 className="
text-3xl
font-bold
text-gray-800
">

Attendance Management

</h1>


<p className="
text-gray-500
mt-2
">

Track employee attendance, breaks and working hours

</p>


</div>





<button

className="
bg-[#00AEEF]
text-white
px-6
py-3
rounded-xl
shadow
hover:scale-105
transition
"

>

Export Report

</button>



</div>









{/* Progress */}


<AttendanceStats


attendance={todayAttendance}

checkIn={checkIn}

breakIn={breakIn}

breakOut={breakOut}

checkOut={checkOut}


/>









{/* Summary */}


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
">



{

[

["Present","22"],

["Absent","3"],

["Late","2"],

["Working Hours","176h"]

].map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
shadow-sm
border
p-5
"

>


<p className="text-gray-500">

{item[0]}

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

{item[1]}

</h2>


</div>


))


}



</div>









{/* Filter */}



<AttendanceFilter


search={search}

setSearch={setSearch}


month={month}

setMonth={setMonth}


year={year}

setYear={setYear}


/>









{/* Table */}



<AttendanceTable


attendance={filteredAttendance}


/>






</div>


</DashboardLayout>


)

}