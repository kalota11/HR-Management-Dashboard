"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import Header from "./Header";


interface DashboardLayoutProps {
  children: React.ReactNode;
}



export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {


  const [sidebarOpen,setSidebarOpen] = useState(false);



  useEffect(()=>{


    const theme =
      localStorage.getItem("theme");



    if(theme==="dark"){

      document.documentElement.classList.add("dark");

    }else{

      document.documentElement.classList.remove("dark");

    }


  },[]);







  return (


<div


className="
flex
min-h-screen

bg-slate-50
text-slate-900

dark:bg-slate-950
dark:text-white

transition-colors
duration-300
"


>





{/* MOBILE OVERLAY */}


{
sidebarOpen && (


<div

className="
fixed
inset-0
z-40

bg-black/40
backdrop-blur-sm

lg:hidden
"


onClick={()=>setSidebarOpen(false)}


/>


)

}









{/* MOBILE SIDEBAR */}


<motion.div


initial={false}


animate={{

x:
sidebarOpen
?
0
:
-300

}}



transition={{

duration:0.3

}}



className="
fixed
left-0
top-0
z-50

h-screen

lg:hidden
"


>


<Sidebar />


</motion.div>









{/* DESKTOP SIDEBAR */}



<aside

className="
hidden
lg:block
"


>


<Sidebar />


</aside>









{/* MAIN */}



<div

className="
flex
min-w-0
flex-1
flex-col
"


>




<Header

sidebarOpen={sidebarOpen}

setSidebarOpen={setSidebarOpen}

/>







<motion.main


initial={{

opacity:0,
y:20

}}


animate={{

opacity:1,
y:0

}}



transition={{

duration:0.4

}}




className="
flex-1

overflow-x-hidden
overflow-y-auto


bg-slate-50
dark:bg-slate-950


p-4
sm:p-6
lg:p-8


transition-colors
duration-300
"


>



<div

className="
mx-auto
w-full
max-w-7xl
"


>


{children}


</div>



</motion.main>







</div>






</div>


);


}