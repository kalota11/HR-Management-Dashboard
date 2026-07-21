"use client";

import { X, User, Mail, Building2, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export interface Employee {
  id:number;
  name:string;
  email:string;
  department:string;
  role:string;
  status:"Active"|"Inactive";
}


interface Props{
  open:boolean;
  onClose:()=>void;
  addEmployee:(employee:Employee)=>void;
  editEmployee?:Employee|null;
}


const emptyForm={
  name:"",
  email:"",
  department:"",
  role:"",
  status:"Active" as "Active"|"Inactive",
};



export default function AddEmployeeModal({
open,
onClose,
addEmployee,
editEmployee
}:Props){


const [formData,setFormData]=useState(emptyForm);



useEffect(()=>{

if(editEmployee){

setFormData({
name:editEmployee.name,
email:editEmployee.email,
department:editEmployee.department,
role:editEmployee.role,
status:editEmployee.status
});

}

else{

setFormData(emptyForm);

}

},[editEmployee,open]);





const handleChange=(

e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>

)=>{


const {name,value}=e.target;


setFormData(prev=>({

...prev,

[name]:
name==="status"
?
value as "Active"|"Inactive"
:
value

}));

};






const handleSubmit=(e:React.FormEvent)=>{

e.preventDefault();


addEmployee({

id:editEmployee?.id ?? Date.now(),

...formData

});


setFormData(emptyForm);

onClose();


};




if(!open) return null;




return (

<div

className="
fixed
inset-0

z-50

flex
items-center
justify-center

bg-black/50

backdrop-blur-sm

px-4
"

>


<motion.div

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

className="
w-full
max-w-lg

rounded-3xl

bg-white

p-6

shadow-2xl


dark:bg-slate-900
"

>





{/* Header */}

<div className="
mb-6

flex
items-center
justify-between
">


<div>


<h2 className="
text-2xl
font-bold

text-slate-900

dark:text-white
">

{
editEmployee
?
"Edit Employee"
:
"Add New Employee"
}

</h2>


<p className="
text-sm
text-slate-500
">

Employee information

</p>


</div>



<button

onClick={onClose}

className="
rounded-xl

p-2

hover:bg-slate-100

dark:hover:bg-slate-800
"

>

<X size={20}/>

</button>


</div>









<form

onSubmit={handleSubmit}

className="space-y-4"

>






{/* Name */}

<div className="relative">

<User

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2

text-slate-400
"

/>


<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Employee Name"

required

className="
h-12

w-full

rounded-2xl

border

bg-slate-50

pl-12

outline-none

focus:border-blue-600

dark:border-slate-700

dark:bg-slate-800

dark:text-white
"

/>

</div>







{/* Email */}

<div className="relative">


<Mail

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2

text-slate-400
"

/>


<input

name="email"

type="email"

value={formData.email}

onChange={handleChange}

placeholder="Email Address"

required


className="
h-12

w-full

rounded-2xl

border

bg-slate-50

pl-12

outline-none

focus:border-blue-600

dark:border-slate-700

dark:bg-slate-800

dark:text-white
"

/>


</div>







{/* Department */}


<div className="relative">


<Building2

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2

text-slate-400
"

/>



<select

name="department"

value={formData.department}

onChange={handleChange}

required


className="
h-12

w-full

rounded-2xl

border

bg-slate-50

pl-12

outline-none

dark:border-slate-700

dark:bg-slate-800

dark:text-white
"

>


<option value="">
Select Department
</option>

<option>
Development
</option>

<option>
Design
</option>

<option>
HR
</option>

<option>
Marketing
</option>


</select>


</div>









{/* Role */}


<div className="relative">


<Briefcase

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2

text-slate-400
"

/>



<input

name="role"

value={formData.role}

onChange={handleChange}

placeholder="Employee Role"

required


className="
h-12

w-full

rounded-2xl

border

bg-slate-50

pl-12

outline-none

focus:border-blue-600

dark:border-slate-700

dark:bg-slate-800

dark:text-white
"

/>


</div>








{/* Status */}

<select

name="status"

value={formData.status}

onChange={handleChange}


className="
h-12

w-full

rounded-2xl

border

bg-slate-50

px-4

outline-none

dark:border-slate-700

dark:bg-slate-800

dark:text-white
"

>

<option>
Active
</option>


<option>
Inactive
</option>


</select>









{/* Buttons */}


<div className="
flex
gap-3

pt-5
">


<button

type="button"

onClick={onClose}

className="
flex-1

rounded-2xl

border

py-3

font-semibold

dark:border-slate-700

dark:text-white
"

>

Cancel

</button>





<button

type="submit"

className="
flex-1

rounded-2xl

bg-gradient-to-r

from-blue-600

to-indigo-600

py-3

font-semibold

text-white

shadow-lg

hover:opacity-90
"

>

{
editEmployee
?
"Save Changes"
:
"Add Employee"
}


</button>


</div>





</form>


</motion.div>


</div>


);


}