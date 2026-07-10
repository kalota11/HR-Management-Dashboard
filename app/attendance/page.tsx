"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import AttendanceTable from "@/components/attendance/AttendanceTable";
import AttendanceStats from "@/components/attendance/AttendanceStats";
import AttendanceFilter from "@/components/attendance/AttendanceFilter";


interface Attendance {

  id:number;
  name:string;
  department:string;
  date:string;
  checkIn:string;
  checkOut:string;
  status:string;

}



export default function AttendancePage(){


const [search,setSearch]=useState("");

const [status,setStatus]=useState("");

const [date,setDate]=useState("");



const [attendance]=useState<Attendance[]>([

{
 id:1,
 name:"Ali Ahmed",
 department:"IT",
 date:"2026-07-10",
 checkIn:"09:00 AM",
 checkOut:"05:00 PM",
 status:"Present"
},

{
 id:2,
 name:"Sara Khan",
 department:"HR",
 date:"2026-07-10",
 checkIn:"09:30 AM",
 checkOut:"05:10 PM",
 status:"Late"
},

{
 id:3,
 name:"Usman Raza",
 department:"Design",
 date:"2026-07-10",
 checkIn:"-",
 checkOut:"-",
 status:"Absent"
}

]);



const filteredAttendance = attendance.filter((item)=>{


const searchMatch =
item.name
.toLowerCase()
.includes(search.toLowerCase());


const statusMatch =
status === ""
?
true
:
item.status === status;



const dateMatch =
date === ""
?
true
:
item.date === date;



return searchMatch && statusMatch && dateMatch;


});



return(

<DashboardLayout>

<div className="p-6">


<AttendanceStats/>


<AttendanceFilter

search={search}

setSearch={setSearch}

status={status}

setStatus={setStatus}

date={date}

setDate={setDate}

/>



<AttendanceTable

attendance={filteredAttendance}

/>



</div>

</DashboardLayout>

)

}