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

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">


<div className="bg-white w-[400px] rounded-2xl p-6">


<div className="flex justify-between mb-5">


<h2 className="text-xl font-bold">
Add Role
</h2>


<button onClick={onClose}>
<X/>
</button>


</div>




<input

placeholder="Role Name"

className="w-full border p-3 rounded-lg mb-4"

value={name}

onChange={(e)=>setName(e.target.value)}

/>





<textarea

placeholder="Role Description"

className="w-full border p-3 rounded-lg mb-5"

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>





<button

onClick={submit}

className="w-full bg-cyan-600 text-white py-3 rounded-lg"

>

Save Role

</button>



</div>


</div>

)

}