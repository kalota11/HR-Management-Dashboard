"use client";

import {
  X,
  Building2,
  UserRound,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";



interface Department {

  id:number;

  name:string;

  manager:string;

  employees:number;

  status:"Active" | "Inactive";

}



interface AddDepartmentModalProps {

  onClose:()=>void;

  addDepartment:(data:{
    name:string;
    manager:string;
  })=>void;

  editData:Department | null;

}





export default function AddDepartmentModal({

onClose,

addDepartment,

editData,

}:AddDepartmentModalProps){





const [name,setName]=
useState(editData?.name ?? "");


const [manager,setManager]=
useState(editData?.manager ?? "");



const [errors,setErrors]=
useState<{
name?:string;
manager?:string;
}>({});







useEffect(()=>{


if(editData){

setName(editData.name);

setManager(editData.manager);

}

else{

setName("");

setManager("");

}


},[editData]);









useEffect(()=>{


const handleKey=(e:KeyboardEvent)=>{


if(e.key==="Escape"){

onClose();

}


};


window.addEventListener(
"keydown",
handleKey
);



return()=>{

window.removeEventListener(
"keydown",
handleKey
);

};


},[onClose]);









const validate=()=>{


const error:{
name?:string;
manager?:string;
}={};



if(!name.trim()){

error.name=
"Department name is required";

}



if(!manager.trim()){

error.manager=
"Manager name is required";

}



setErrors(error);



return Object.keys(error).length===0;


};








const handleSubmit=(

e:React.FormEvent

)=>{


e.preventDefault();



if(!validate())
return;



addDepartment({

name:name.trim(),

manager:manager.trim(),

});


onClose();


};









return(


<div

onClick={onClose}

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

onClick={(e)=>e.stopPropagation()}

className="
relative
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
h-12
w-12
items-center
justify-center
rounded-2xl
bg-blue-100

dark:bg-blue-900/40
"
>


<Building2

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
editData
?
"Edit Department"
:
"Add Department"

}

</h2>


<p

className="
text-sm
text-slate-500
"

>

Manage organization departments

</p>


</div>



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

className="
space-y-5
"

>







{/* DEPARTMENT NAME */}


<div>


<label

className="
mb-2
block
text-sm
font-semibold
dark:text-white
"

>

Department Name

</label>



<div
className="
relative
"
>


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



<input


value={name}


onChange={(e)=>
setName(e.target.value)
}


placeholder="e.g Marketing"


className={`
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

${
errors.name
?
"border-red-400"
:
""
}

`}


/>


</div>



{
errors.name &&

<p className="mt-1 text-xs text-red-500">

{errors.name}

</p>

}



</div>









{/* MANAGER */}



<div>


<label

className="
mb-2
block
text-sm
font-semibold
dark:text-white
"

>

Manager

</label>




<div
className="relative"
>


<UserRound

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


value={manager}


onChange={(e)=>
setManager(e.target.value)
}


placeholder="e.g Ahmed Khan"


className={`
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

${
errors.manager
?
"border-red-400"
:
""
}

`}


/>



</div>




{
errors.manager &&

<p className="mt-1 text-xs text-red-500">

{errors.manager}

</p>

}



</div>










{/* BUTTONS */}



<div

className="
flex
gap-3
pt-3
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
hover:bg-blue-700
"

>


{
editData
?
"Save Changes"
:
"Add Department"

}



</button>




</div>






</form>






</div>





</div>


);


}