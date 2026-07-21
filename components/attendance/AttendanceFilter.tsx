"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  Search,
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";



interface Props {

  search:string;

  setSearch:(value:string)=>void;


  month:string;

  setMonth:(value:string)=>void;


  year:string;

  setYear:(value:string)=>void;

}





const MONTHS = [

"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",

];








export default function AttendanceFilter({

search,
setSearch,

month,
setMonth,

year,
setYear,

}:Props){



const [isOpen,setIsOpen]=useState(false);



const [viewYear,setViewYear]=useState<number>(

year
?
Number(year)
:
new Date().getFullYear()

);



const popoverRef =
useRef<HTMLDivElement>(null);







useEffect(()=>{


function handleClickOutside(e:MouseEvent){


if(
popoverRef.current &&
!popoverRef.current.contains(
e.target as Node
)
){

setIsOpen(false);

}


}



document.addEventListener(
"mousedown",
handleClickOutside
);



return ()=>{

document.removeEventListener(
"mousedown",
handleClickOutside
);

};


},[]);







function handleSelectMonth(m:string){


setMonth(m);

setYear(
String(viewYear)
);

setIsOpen(false);


}







function openPopover(){


setViewYear(

year
?
Number(year)
:
new Date().getFullYear()

);


setIsOpen(
(v)=>!v
);


}






const label =
month && year
?
`${month} ${year}`
:
"Select Month";








return (


<div

className="
w-full
rounded-3xl
border
border-blue-100
dark:border-slate-700
bg-white
dark:bg-slate-900
p-4
sm:p-6
shadow-lg
"

>


<div

className="
grid
grid-cols-1
gap-4
sm:grid-cols-2
"

>







{/* SEARCH */}



<div className="relative">


<Search

size={20}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-blue-600
dark:text-blue-400
"

/>





<input


type="text"


placeholder="Search employee..."


value={search}


onChange={(e)=>
setSearch(e.target.value)
}


className="
w-full
rounded-2xl
border
border-blue-200
dark:border-slate-700
bg-white
dark:bg-slate-800
py-3.5
pl-12
pr-4
text-[15px]
font-medium
text-gray-800
dark:text-white
placeholder:text-gray-400
outline-none
transition
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
dark:focus:ring-blue-900/30
"

/>


</div>










{/* CALENDAR */}



<div

className="
relative
"

ref={popoverRef}

>


<button


type="button"


onClick={openPopover}


className="
w-full
flex
items-center
gap-3
rounded-2xl
border
border-blue-200
dark:border-slate-700
bg-white
dark:bg-slate-800
px-4
py-3.5
text-left
text-[15px]
font-medium
text-gray-700
dark:text-gray-200
outline-none
transition
hover:border-blue-600
focus:ring-4
focus:ring-blue-100
dark:focus:ring-blue-900/30
"


>


<Calendar

size={20}

className="
text-blue-600
dark:text-blue-400
shrink-0
"

/>



<span

className={
month
?
"text-gray-800 dark:text-white"
:
"text-gray-400"
}

>


{label}


</span>



</button>









{isOpen && (


<div


className="
absolute
z-20
mt-2
w-full
min-w-[280px]
rounded-2xl
border
border-blue-100
dark:border-slate-700
bg-white
dark:bg-slate-900
p-4
shadow-xl
"


>



{/* YEAR */}



<div

className="
flex
items-center
justify-between
mb-4
"

>


<button


type="button"


onClick={()=>
setViewYear(
(y)=>y-1
)
}


className="
p-1.5
rounded-lg
hover:bg-blue-50
dark:hover:bg-slate-800
text-blue-600
dark:text-blue-400
"


>


<ChevronLeft size={18}/>


</button>






<span

className="
text-sm
font-bold
text-gray-800
dark:text-white
"

>


{viewYear}


</span>






<button


type="button"


onClick={()=>
setViewYear(
(y)=>y+1
)
}


className="
p-1.5
rounded-lg
hover:bg-blue-50
dark:hover:bg-slate-800
text-blue-600
dark:text-blue-400
"


>


<ChevronRight size={18}/>


</button>



</div>








{/* MONTHS */}



<div

className="
grid
grid-cols-3
gap-2
"

>


{

MONTHS.map((m)=>{


const selected =
m===month &&
String(viewYear)===year;



return (



<button


key={m}


type="button"


onClick={()=>
handleSelectMonth(m)
}


className={`

rounded-xl
px-2
py-2
text-xs
font-semibold
transition


${
selected

?

"bg-blue-600 text-white"

:

"text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-800"

}

`}


>


{m.slice(0,3)}


</button>


)


})


}



</div>







</div>


)}




</div>








</div>


</div>


);


}