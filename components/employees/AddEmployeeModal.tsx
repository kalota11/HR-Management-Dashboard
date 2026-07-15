"use client";

import { useEffect, useState } from "react";
import { X, UserPlus } from "lucide-react";


export interface Employee {

  id:number;
  name:string;
  email:string;
  role:string;
  department:string;
  status:string;

}



interface Props {

  open:boolean;

  onClose:()=>void;

  addEmployee:(employee:Omit<Employee,"id">)=>void;

  editEmployee:(employee:Employee)=>void;

  selectedEmployee:Employee|null;

}



export default function AddEmployeeModal({

open,
onClose,
addEmployee,
editEmployee,
selectedEmployee,

}:Props){



const initialState = {

name:"",
email:"",
role:"",
department:"",
status:"Active",

};



const [formData,setFormData]=useState(initialState);





useEffect(()=>{


if(selectedEmployee){

setFormData({

name:selectedEmployee.name,
email:selectedEmployee.email,
role:selectedEmployee.role,
department:selectedEmployee.department,
status:selectedEmployee.status,

});


}else{

setFormData(initialState);

}


},[selectedEmployee,open]);








const handleChange=(

e:React.ChangeEvent<
HTMLInputElement | HTMLSelectElement
>

)=>{


setFormData({

...formData,

[e.target.name]:e.target.value,

});


};







const handleSubmit=()=>{


if(

!formData.name ||
!formData.email ||
!formData.role ||
!formData.department

){

alert("Please fill all fields");

return;

}






if(selectedEmployee){


editEmployee({

...selectedEmployee,

...formData,

});


}else{


addEmployee(formData);


}





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
p-4
"

>


<div

className="
w-full
max-w-xl
rounded-3xl
bg-white
shadow-2xl
overflow-hidden
"

>






{/* Header */}


<div

className="
flex
items-center
justify-between
bg-[#0000ff]
p-5
text-white
"

>


<div className="flex items-center gap-3">


<div

className="
rounded-xl
bg-white
p-3
text-[#0000ff]
"

>

<UserPlus size={24}/>

</div>




<div>


<h2 className="text-xl font-bold">

{

selectedEmployee
?
"Edit Employee"
:
"Add Employee"

}

</h2>


<p className="text-sm text-blue-100">

Employee information

</p>


</div>



</div>





<button

onClick={onClose}

className="
rounded-xl
p-2
hover:bg-white/20
transition
"

>

<X/>

</button>



</div>










{/* Form */}


<div

className="
grid
grid-cols-1
gap-5
p-6
md:grid-cols-2
"

>




{

[

{
label:"Full Name",
name:"name",
placeholder:"Ali Khan"
},


{
label:"Email",
name:"email",
placeholder:"ali@gmail.com"
},


{
label:"Role",
name:"role",
placeholder:"Frontend Developer"
},


{
label:"Department",
name:"department",
placeholder:"IT"
}


].map((item)=>(


<div key={item.name}>


<label

className="
mb-2
block
font-semibold
text-gray-700
"

>

{item.label}

</label>



<input

name={item.name}

value={

formData[
item.name as keyof typeof formData
]

}

onChange={handleChange}

placeholder={item.placeholder}

className="
w-full
rounded-xl
border
border-blue-200
p-3
outline-none
focus:border-[#0000ff]
focus:ring-2
focus:ring-blue-100
"

/>


</div>



))


}








<div className="md:col-span-2">


<label className="
mb-2
block
font-semibold
text-gray-700
">

Status

</label>




<select

name="status"

value={formData.status}

onChange={handleChange}

className="
w-full
rounded-xl
border
border-blue-200
p-3
outline-none
focus:border-[#0000ff]
"

>


<option>Active</option>

<option>On Leave</option>

<option>Inactive</option>


</select>


</div>





</div>









{/* Footer */}


<div

className="
flex
justify-end
gap-3
border-t
p-5
"

>



<button

onClick={onClose}

className="
rounded-xl
border
px-6
py-3
font-semibold
text-gray-600
hover:bg-gray-100
"

>

Cancel

</button>






<button

onClick={handleSubmit}

className="
rounded-xl
bg-[#0000ff]
px-6
py-3
font-semibold
text-white
hover:bg-blue-700
transition
"

>


{

selectedEmployee
?
"Update Employee"
:
"Save Employee"

}


</button>



</div>






</div>


</div>


);


}