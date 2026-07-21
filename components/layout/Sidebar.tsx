"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  Menu,
  PanelLeftClose,
  LogOut,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";


interface MenuItem {
  title: string;
  icon: LucideIcon;
  href?: string;

  children?: {
    title: string;
    href: string;
    icon?: LucideIcon;
  }[];
}



const menuItems: MenuItem[] = [

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },


  {
    title: "Team Management",
    icon: Users,

    children: [

      {
        title: "Teams",
        href: "/dashboard/team",
      },

      {
        title: "Roles & Permissions",
        href: "/dashboard/rbac",
      },

    ],
  },



  {
    title: "Departments",
    icon: Building2,
    href: "/dashboard/departments",
  },



  {
    title: "Attendance",
    icon: CalendarCheck,
    href: "/dashboard/attendance",
  },


];
export default function Sidebar() {

  const pathname = usePathname();


  const [collapsed,setCollapsed] = useState(false);


  const [openMenu,setOpenMenu] =
  useState("Team Management");



return (

<aside

className={`
sticky
top-0
h-screen
flex
flex-col

border-r
border-slate-200

bg-white

shadow-xl

transition-all
duration-300

dark:bg-slate-900
dark:border-slate-800


${collapsed ? "w-24" : "w-80"}

`}

>



{/* LOGO */}


<div

className="
flex
h-24
items-center
justify-between

border-b

px-6

dark:border-slate-800

"

>


<div className="flex items-center gap-4">


<div

className="
flex
h-14
w-14

items-center
justify-center

rounded-2xl

bg-gradient-to-br
from-blue-600
to-indigo-700

shadow-lg
"

>

<Image

src="/ikftech-logo.png"

alt="Logo"

width={38}

height={38}

/>


</div>



{!collapsed && (

<div>

<h2

className="
text-xl
font-bold
text-slate-800
dark:text-white
"

>

HR Management

</h2>


<p className="text-xs text-slate-500">

Enterprise Dashboard

</p>


</div>

)}


</div>





<button

onClick={()=>setCollapsed(!collapsed)}

className="
rounded-xl
p-2
hover:bg-slate-100
dark:hover:bg-slate-800
"

>


{
collapsed
?
<Menu size={22}/>
:
<PanelLeftClose size={22}/>
}


</button>



</div>
{/* MENU */}

<div className="flex-1 overflow-y-auto px-4 py-6">


{!collapsed && (

<p
className="
mb-4
px-2
text-xs
font-semibold
uppercase
tracking-widest
text-slate-400
"
>
Main Menu
</p>

)}



<nav className="space-y-2">


{
menuItems.map((item)=>{


const Icon = item.icon;



const isActive =
item.href &&
pathname === item.href;



const isOpen =
openMenu === item.title;



return (

<div key={item.title}>


{/* SIMPLE MENU */}


{
!item.children && (

<Link

href={item.href!}

className={`

group

relative

flex

items-center

gap-4

rounded-2xl

px-4

py-3.5

transition-all


${
isActive

?

`
bg-gradient-to-r
from-blue-600
to-indigo-600

text-white

shadow-lg
shadow-blue-500/20
`

:

`

text-slate-600

hover:bg-slate-100


dark:text-slate-300

dark:hover:bg-slate-800

`

}


`}

>


{
isActive && (

<div

className="
absolute
left-0
top-2
h-10
w-1
rounded-r-full
bg-white
"

/>

)

}



<Icon size={21}/>



{
!collapsed && (

<span className="font-medium">

{item.title}

</span>

)

}



</Link>

)

}





{/* DROPDOWN MENU */}


{
item.children && (

<div>


<button

onClick={()=>


setOpenMenu(
isOpen
?
""
:
item.title
)


}

className="
flex
w-full
items-center
justify-between

rounded-2xl

px-4
py-3.5

text-slate-700

hover:bg-slate-100


dark:text-slate-300

dark:hover:bg-slate-800

"

>


<div className="flex items-center gap-4">


<Icon size={21}/>



{
!collapsed && (

<span className="font-medium">

{item.title}

</span>

)

}


</div>




{
!collapsed &&

(
isOpen

?

<ChevronDown size={18}/>

:

<ChevronRight size={18}/>

)

}



</button>





{
!collapsed && isOpen && (

<div

className="
ml-6
mt-2

space-y-2

border-l-2

border-slate-200

pl-5

dark:border-slate-700

"

>


{
item.children.map((child)=>{


const active =
pathname === child.href;



return (

<Link

key={child.title}

href={child.href}

className={`

flex
items-center

rounded-xl

px-3
py-2.5

text-sm

transition-all


${
active

?

`
bg-blue-50
font-semibold
text-blue-700

dark:bg-slate-800
dark:text-blue-400
`

:

`

text-slate-600

hover:bg-slate-100


dark:text-slate-400

dark:hover:bg-slate-800

`

}

`}

>


<ShieldCheck

size={16}

className="mr-3"

/>


{child.title}


</Link>

)


})

}


</div>

)

}


</div>

)

}



</div>

)


})


}


</nav>


</div>
{/* BOTTOM SECTION */}

<div

className="
mt-auto

border-t
border-slate-200

bg-white

p-5


dark:border-slate-800

dark:bg-slate-900

"

>



{/* USER CARD */}


<div

className={`

flex
items-center

${
collapsed
?
"justify-center"
:
"justify-between"
}

`}

>


<div className="flex items-center gap-3">


<div className="relative">


<Image

src="/ikftech-logo.png"

alt="Admin"

width={48}

height={48}

className="
rounded-full
border-2
border-blue-500
"

/>


<span

className="
absolute
bottom-0
right-0

h-3.5
w-3.5

rounded-full

border-2
border-white

bg-green-500

"

/>


</div>





{
!collapsed && (

<div>


<h3

className="
text-sm
font-semibold

text-slate-800

dark:text-white

"

>

Administrator

</h3>


<p className="text-xs text-slate-500">

Super Admin

</p>


</div>

)

}



</div>


</div>






{/* LOGOUT BUTTON */}


<button


className={`

mt-5

flex

w-full

items-center


${
collapsed
?
"justify-center"
:
"justify-start"
}


gap-3

rounded-2xl


border

border-red-200


bg-red-50


px-4

py-3.5


text-red-600


transition-all


hover:bg-red-100

hover:shadow-lg



dark:border-red-900

dark:bg-red-900/20

dark:hover:bg-red-900/30


`}


>


<LogOut size={20}/>



{
!collapsed && (

<span className="font-medium">

Logout

</span>

)

}



</button>








{/* FOOTER */}


{
!collapsed && (


<div


className="

mt-6

rounded-2xl

border

border-slate-200

bg-slate-50

p-4

text-center



dark:border-slate-700

dark:bg-slate-800


"

>


<p

className="
text-sm
font-semibold

text-slate-700

dark:text-white

"

>

HR Management System

</p>


<p className="mt-1 text-xs text-slate-500">

Enterprise Dashboard

</p>




<div

className="

mt-3

rounded-xl

bg-blue-600

py-2

text-xs

font-semibold

text-white

"

>

Version 2.0.0

</div>


</div>


)

}



</div>



</aside>


);

}