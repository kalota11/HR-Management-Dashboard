"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import EmployeeStats from "@/components/employees/EmployeeStats";

import EmployeeFilter from "@/components/employees/EmployeeFilter";

import EmployeeTable from "@/components/employees/EmployeeTable";

import AddEmployeeModal, {
  Employee,
} from "@/components/employees/AddEmployeeModal";



export default function EmployeesPage(){



const [employees,setEmployees]=useState<Employee[]>([


{
id:1,
name:"Ali Khan",
email:"ali@gmail.com",
role:"Frontend Developer",
department:"IT",
status:"Active",
},


{
id:2,
name:"Sara Ahmed",
email:"sara@gmail.com",
role:"HR Manager",
department:"HR",
status:"Active",
},


{
id:3,
name:"Usman Raza",
email:"usman@gmail.com",
role:"UI Designer",
department:"Design",
status:"On Leave",
},


]);






// Modal States

const [open,setOpen]=useState(false);

const [selectedEmployee,setSelectedEmployee]=useState<Employee|null>(null);







// Search Filter States


const [search,setSearch]=useState("");

const [statusFilter,setStatusFilter]=useState("All");

const [departmentFilter,setDepartmentFilter]=useState("All");







// Departments


const departments=[

"All",

...new Set(

employees.map(
(emp)=>emp.department
)

)

];







// Filter Logic


const filteredEmployees = employees.filter((employee)=>{


const searchMatch = [

employee.name,
employee.email,
employee.role,
employee.department,

]

.join(" ")

.toLowerCase()

.includes(
search.toLowerCase()
);




const statusMatch =

statusFilter==="All"

||

employee.status===statusFilter;





const departmentMatch =

departmentFilter==="All"

||

employee.department===departmentFilter;




return (

searchMatch &&
statusMatch &&
departmentMatch

);


});










// Add Employee


const addEmployee = (

employee:Omit<Employee,"id">

)=>{


setEmployees((prev)=>[

...prev,

{

id:Date.now(),

...employee,

}

]);


};









// Edit Employee


const editEmployee = (

employee:Employee

)=>{


setEmployees((prev)=>

prev.map((item)=>

item.id===employee.id

?

employee

:

item

)

);


};









// Open Edit Modal


const handleEdit=(employee:Employee)=>{


setSelectedEmployee(employee);

setOpen(true);


};








return (

<DashboardLayout>


<div className="space-y-8">





<h1

className="
text-4xl
font-bold
text-[#0000FF]
"

>

Team Management

</h1>








<EmployeeStats

employees={employees}

/>









<EmployeeFilter


search={search}

setSearch={setSearch}

departmentFilter={departmentFilter}

setDepartmentFilter={setDepartmentFilter}

statusFilter={statusFilter}

setStatusFilter={setStatusFilter}

departments={departments}

/>









<EmployeeTable


employees={filteredEmployees}

setEmployees={setEmployees}

onAdd={()=>{

setSelectedEmployee(null);

setOpen(true);

}}


onEdit={handleEdit}


/>









<AddEmployeeModal


open={open}


onClose={()=>setOpen(false)}


addEmployee={addEmployee}


editEmployee={editEmployee}


selectedEmployee={selectedEmployee}


/>







</div>


</DashboardLayout>


);


}