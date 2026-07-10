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

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">


<div className="bg-white w-[400px] rounded-2xl p-6">


<div className="flex justify-between mb-5">


<h2 className="text-xl font-bold">

{
 editData 
 ?
 "Edit Department"
 :
 "Add Department"
}

</h2>



<button onClick={onClose}>
<X/>
</button>


</div>




<input

placeholder="Department Name"

className="w-full border p-3 rounded-lg mb-4"

value={name}

onChange={(e)=>setName(e.target.value)}

/>




<input

placeholder="Manager Name"

className="w-full border p-3 rounded-lg mb-5"

value={manager}

onChange={(e)=>setManager(e.target.value)}

/>





<button

onClick={submit}

className="w-full bg-cyan-600 text-white py-3 rounded-lg"

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