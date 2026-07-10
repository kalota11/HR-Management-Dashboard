import {
  Building2,
  User,
  Bell,
  Shield
} from "lucide-react";


export default function SettingsCard(){


const settings=[

{
 title:"Company Settings",
 description:"Manage company information and details",
 icon:Building2
},


{
 title:"Profile Settings",
 description:"Update your personal information",
 icon:User
},


{
 title:"Notification Settings",
 description:"Manage email and alerts",
 icon:Bell
},


{
 title:"Security Settings",
 description:"Password and account security",
 icon:Shield
}

];



return(

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">


{
settings.map((item,index)=>{


const Icon=item.icon;


return(

<div

key={index}

className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition cursor-pointer"

>


<div className="flex items-center gap-4">


<div className="bg-cyan-100 p-3 rounded-xl">

<Icon 
size={28}
className="text-cyan-600"
/>

</div>



<div>

<h2 className="text-xl font-bold">
{item.title}
</h2>


<p className="text-gray-500">
{item.description}
</p>


</div>


</div>


</div>

)


})

}



</div>

)

}