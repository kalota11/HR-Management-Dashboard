"use client";

import {
  X,
  ShieldCheck,
  FileText,
  Users,
  CheckCircle2,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";



export interface Role {

  id:number;

  name:string;

  description:string;

  users:number;

  permissions:number;

  status:"Active" | "Inactive";

}



interface Props {

  open:boolean;

  onClose:()=>void;

  saveRole:(role:Role)=>void;

  editRole?:Role | null;

}



const emptyForm = {

  name:"",

  description:"",

  permissions:0,

  status:"Active" as "Active" | "Inactive",

};







export default function RoleModal({

  open,

  onClose,

  saveRole,

  editRole,

}:Props){



const [formData,setFormData]=
useState(emptyForm);





useEffect(()=>{


if(editRole){


setFormData({

name:editRole.name,

description:editRole.description,

permissions:editRole.permissions,

status:editRole.status,

});


}

else{


setFormData(emptyForm);


}


},[editRole,open]);








const handleChange=(

e:React.ChangeEvent<
HTMLInputElement |
HTMLTextAreaElement |
HTMLSelectElement
>

)=>{


const {

name,

value

}=e.target;



setFormData(prev=>({

...prev,


[name]:

name==="permissions"

?

Number(value)

:

value


}));

};








const handleSubmit=(

e:React.FormEvent

)=>{


e.preventDefault();



saveRole({

id:

editRole

?

editRole.id

:

Date.now(),



users:

editRole

?

editRole.users

:

0,



...formData,

});



setFormData(emptyForm);

onClose();


};






if(!open)
return null;








return(



<div

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/50
px-4
backdrop-blur-sm
"

>



<div

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




{/* HEADER */}


<div

className="
mb-6
flex
items-center
justify-between
"

>


<div
className="
flex
items-center
gap-3
"
>


<div

className="
flex
h-11
w-11
items-center
justify-center
rounded-2xl
bg-blue-100

dark:bg-blue-900/40
"

>


<ShieldCheck

size={23}

className="text-blue-600"

/>


</div>




<div>


<h2

className="
text-xl
font-bold
dark:text-white
"

>

{
editRole
?
"Edit Role"
:
"Create New Role"
}

</h2>



<p

className="
text-sm
text-slate-500
"

>

Manage permissions and access

</p>


</div>



</div>







<button

onClick={onClose}

className="
rounded-xl
p-2
transition
hover:bg-slate-100

dark:hover:bg-slate-800
"

>

<X size={20}/>

</button>




</div>










<form

onSubmit={handleSubmit}

className="
space-y-4
"

>







{/* NAME */}


<div className="relative">


<ShieldCheck

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

placeholder="Role Name"

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










{/* DESCRIPTION */}


<div className="relative">


<FileText

size={18}

className="
absolute
left-4
top-4
text-slate-400
"

/>



<textarea


name="description"

value={formData.description}

onChange={handleChange}

placeholder="Role Description"

rows={3}

required


className="
w-full
resize-none
rounded-2xl
border
bg-slate-50
px-12
py-4
outline-none

focus:border-blue-600

dark:border-slate-700
dark:bg-slate-800
dark:text-white
"

/>



</div>










{/* PERMISSIONS */}



<div className="relative">


<Users

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

type="number"

min={0}

name="permissions"

value={formData.permissions}

onChange={handleChange}

placeholder="Permissions Count"

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

/>



</div>









{/* STATUS */}



<div className="relative">


<CheckCircle2

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


name="status"

value={formData.status}

onChange={handleChange}


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


<option value="Active">
Active
</option>


<option value="Inactive">
Inactive
</option>



</select>


</div>









{/* BUTTONS */}


<div

className="
flex
gap-3
pt-5
"

>


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
bg-blue-600
py-3
font-semibold
text-white
shadow-lg
transition
hover:bg-blue-700
"

>


{
editRole
?
"Save Changes"
:
"Add Role"
}


</button>



</div>






</form>




</div>


</div>


);


}