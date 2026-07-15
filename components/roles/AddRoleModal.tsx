"use client";

import { useState } from "react";
import { X } from "lucide-react";


interface Props {

  onClose:()=>void;

  addRole:(data:{
    name:string;
    description:string;
  })=>void;

}



export default function AddRoleModal({
  onClose,
  addRole
}:Props){


const [name,setName]=useState("");

const [description,setDescription]=useState("");




function submit(){


if(!name || !description) return;


addRole({

name,
description

});


setName("");

setDescription("");

}




return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">


<div className="bg-white w-full max-w-[400px] rounded-2xl p-6">


<div className="flex justify-between items-center mb-5">


<h2 className="text-xl font-bold text-[#0000ff]">
Add Role
</h2>


<button
onClick={onClose}
className="text-gray-400 hover:text-[#0000ff] transition-colors"
>
<X/>
</button>


</div>




<input

placeholder="Role Name"

className="w-full border border-blue-200 p-3 rounded-lg mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:border-transparent"

value={name}

onChange={(e)=>setName(e.target.value)}

/>





<textarea

placeholder="Role Description"

className="w-full border border-blue-200 p-3 rounded-lg mb-5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:border-transparent"

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>





<button

onClick={submit}

className="w-full bg-[#0000ff] hover:bg-blue-700 transition-colors text-white py-3 rounded-lg font-medium"

>

Save Role

</button>



</div>


</div>

)

}