"use client";

import { Building2, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Development",
    employees: 52,
    progress: 90,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Human Resources",
    employees: 18,
    progress: 70,
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "Finance",
    employees: 15,
    progress: 60,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Marketing",
    employees: 12,
    progress: 45,
    color: "from-purple-500 to-pink-600",
  },
];


export default function TopDepartments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-xl
        transition
        hover:shadow-2xl

        dark:border-slate-800
        dark:bg-slate-900
      "
    >

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">


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

              text-white
              shadow-lg
            "
          >
            <Building2 size={26}/>
          </div>


          <div>

            <h2 className="
              text-xl
              font-bold
              text-slate-900
              dark:text-white
            ">
              Top Departments
            </h2>


            <p className="
              text-sm
              text-slate-500
            ">
              Department performance overview
            </p>


          </div>


        </div>


        <div
          className="
            hidden
            rounded-xl
            bg-blue-50
            px-3
            py-2
            text-blue-600
            md:flex
            items-center
            gap-2
            text-sm
            font-semibold
          "
        >

          <TrendingUp size={16}/>

          Growth

        </div>


      </div>



      {/* Departments */}


      <div className="space-y-6">


        {departments.map((dept,index)=>(


          <motion.div
            key={dept.name}
            initial={{
              opacity:0,
              x:-20
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              delay:index * 0.1
            }}
            className="
              rounded-2xl
              border
              border-slate-100
              p-4
              transition

              hover:bg-slate-50

              dark:border-slate-800
              dark:hover:bg-slate-800
            "
          >


            <div className="
              mb-4
              flex
              items-center
              justify-between
            ">


              <div>


                <h3 className="
                  font-bold
                  text-slate-800
                  dark:text-white
                ">
                  {dept.name}
                </h3>


                <div className="
                  mt-1
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-500
                ">

                  <Users size={15}/>

                  {dept.employees} Employees

                </div>


              </div>



              <div
                className="
                  rounded-full
                  bg-slate-100
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-slate-700

                  dark:bg-slate-800
                  dark:text-white
                "
              >

                {dept.progress}%

              </div>


            </div>




            {/* Progress */}


            <div
              className="
                h-3
                overflow-hidden
                rounded-full
                bg-slate-200

                dark:bg-slate-700
              "
            >

              <motion.div

                initial={{
                  width:0
                }}

                animate={{
                  width:`${dept.progress}%`
                }}

                transition={{
                  duration:1
                }}

                className={`
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  ${dept.color}
                `}

              />

            </div>


          </motion.div>


        ))}


      </div>


    </motion.div>
  );
}