"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";


interface Props {

  onClose:()=>void;

  addDepartment:(data:{
    name:string;
    manager:string;
  })=>void;

  editData?: {
    name:string;
    manager:string;
  } | null;

}



export default function AddDepartmentModal({
  onClose,
  addDepartment,
  editData
}:Props){


const [name,setName]=useState("");
const [manager,setManager]=useState("");



useEffect(()=>{

  if(editData){

    setName(editData.name);
    setManager(editData.manager);

  }

},[editData]);




function submit(){

 if(!name || !manager) return;


 addDepartment({
  name,
  manager
 });


 setName("");
 setManager("");

}




return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">


<div className="bg-white w-full max-w-[400px] rounded-2xl p-6">


<div className="flex justify-between items-center mb-5">


<h2 className="text-xl font-bold text-[#0000ff]">

{
 editData 
 ?
 "Edit Department"
 :
 "Add Department"
}

</h2>



<button
onClick={onClose}
className="text-gray-400 hover:text-[#0000ff] transition-colors"
>
<X/>
</button>


</div>




<input

placeholder="Department Name"

className="w-full border border-blue-200 p-3 rounded-lg mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:border-transparent"

value={name}

onChange={(e)=>setName(e.target.value)}

/>




<input

placeholder="Manager Name"

className="w-full border border-blue-200 p-3 rounded-lg mb-5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:border-transparent"

value={manager}

onChange={(e)=>setManager(e.target.value)}

/>





<button

onClick={submit}

className="w-full bg-[#0000ff] hover:bg-blue-700 transition-colors text-white py-3 rounded-lg font-medium"

>

{
 editData
 ?
 "Update Department"
 :
 "Save Department"
}

</button>



</div>


</div>

)

}