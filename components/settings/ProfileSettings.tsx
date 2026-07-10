"use client";

import { useState } from "react";


export default function ProfileSettings(){


const [name,setName]=useState("Admin User");

const [email,setEmail]=useState("admin@company.com");

const [phone,setPhone]=useState("0300-0000000");



const saveSettings=()=>{

alert("Settings Updated Successfully");

};



return(

<div className="bg-white rounded-2xl shadow p-6 mt-6">


<h2 className="text-2xl font-bold mb-6">
Profile Settings
</h2>




<div className="grid grid-cols-1 md:grid-cols-2 gap-5">


<div>

<label className="text-gray-600">
Full Name
</label>


<input

value={name}

onChange={(e)=>setName(e.target.value)}

className="w-full border rounded-xl px-4 py-3 mt-2"

/>

</div>




<div>

<label className="text-gray-600">
Email
</label>


<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border rounded-xl px-4 py-3 mt-2"

/>

</div>





<div>

<label className="text-gray-600">
Phone
</label>


<input

value={phone}

onChange={(e)=>setPhone(e.target.value)}

className="w-full border rounded-xl px-4 py-3 mt-2"

/>

</div>



</div>




<button

onClick={saveSettings}

className="mt-6 bg-cyan-600 text-white px-6 py-3 rounded-xl"

>

Save Changes

</button>



</div>

)

}