"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PayrollStats from "@/components/payroll/PayrollStats";
import PayrollTable from "@/components/payroll/PayrollTable";
import AddPayrollModal from "@/components/payroll/AddPayrollModal";


export default function PayrollPage(){


const [open,setOpen]=useState(false);



const addPayroll=(data:{
  employee:string;
  department:string;
  salary:number;
})=>{

console.log(data);

setOpen(false);

};



return(

<DashboardLayout>


<div className="p-6">


<div className="flex justify-between items-center mb-6">


<div>

<h1 className="text-3xl font-bold">
Payroll
</h1>

<p className="text-gray-500">
Manage employee salaries
</p>

</div>



<button

onClick={()=>setOpen(true)}

className="bg-cyan-600 text-white px-5 py-3 rounded-xl"

>

+ Add Payroll

</button>


</div>



<PayrollStats/>


<PayrollTable/>




{
open &&

<AddPayrollModal

onClose={()=>setOpen(false)}

addPayroll={addPayroll}

/>

}



</div>


</DashboardLayout>

)

}