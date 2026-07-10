"use client";

import { useState } from "react";
import { X } from "lucide-react";


interface Props {

  onClose:()=>void;

  addPayroll:(data:{
    employee:string;
    department:string;
    salary:number;
  })=>void;

}



export default function AddPayrollModal({
  onClose,
  addPayroll
}:Props){


const [employee,setEmployee]=useState("");

const [department,setDepartment]=useState("");

const [salary,setSalary]=useState("");




function submit(){


if(!employee || !department || !salary) return;


addPayroll({

employee,

department,

salary:Number(salary)

});


setEmployee("");

setDepartment("");

setSalary("");

}




return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">


<div className="bg-white w-[400px] rounded-2xl p-6">



<div className="flex justify-between mb-5">


<h2 className="text-xl font-bold">
Add Payroll
</h2>


<button onClick={onClose}>
<X/>
</button>


</div>




<input

placeholder="Employee Name"

className="w-full border p-3 rounded-lg mb-4"

value={employee}

onChange={(e)=>setEmployee(e.target.value)}

/>




<input

placeholder="Department"

className="w-full border p-3 rounded-lg mb-4"

value={department}

onChange={(e)=>setDepartment(e.target.value)}

/>




<input

placeholder="Salary"

type="number"

className="w-full border p-3 rounded-lg mb-5"

value={salary}

onChange={(e)=>setSalary(e.target.value)}

/>




<button

onClick={submit}

className="w-full bg-cyan-600 text-white py-3 rounded-lg"

>

Save Payroll

</button>



</div>


</div>

)

}