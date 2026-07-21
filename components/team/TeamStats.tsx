"use client";

import {
  UserCheck,
  UserX,
  UserPlus,
  Users,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";


const stats = [
  {
    title: "Total Employees",
    value: "120",
    icon: Users,
    description: "All team members",
    color: "from-blue-500 to-indigo-600",
    badge: "+12%",
  },

  {
    title: "Active Employees",
    value: "105",
    icon: UserCheck,
    description: "Currently active",
    color: "from-green-400 to-emerald-600",
    badge: "+8%",
  },

  {
    title: "Inactive Employees",
    value: "15",
    icon: UserX,
    description: "Inactive accounts",
    color: "from-red-400 to-rose-600",
    badge: "-3%",
  },

  {
    title: "New Employees",
    value: "8",
    icon: UserPlus,
    description: "Joined this month",
    color: "from-purple-500 to-pink-600",
    badge: "+5%",
  },
];



export default function TeamStats() {

  return (

    <div
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >


      {stats.map((item,index)=>{


        const Icon = item.icon;


        return (

          <motion.div

            key={item.title}

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:index * 0.1
            }}


            className="
              rounded-3xl

              border
              border-slate-200

              bg-white

              p-6

              shadow-lg

              transition

              hover:-translate-y-1

              hover:shadow-xl


              dark:border-slate-800

              dark:bg-slate-900
            "
          >



            <div
              className="
                flex
                items-start
                justify-between
              "
            >




              <div>


                <p
                  className="
                    text-sm
                    font-medium

                    text-slate-500

                    dark:text-slate-400
                  "
                >

                  {item.title}

                </p>



                <h2
                  className="
                    mt-3

                    text-4xl

                    font-bold

                    text-slate-900

                    dark:text-white
                  "
                >

                  {item.value}

                </h2>



                <div
                  className="
                    mt-3

                    flex

                    items-center

                    gap-2
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      gap-1

                      rounded-full

                      bg-green-100

                      px-3
                      py-1

                      text-xs

                      font-semibold

                      text-green-700

                      dark:bg-green-500/10

                      dark:text-green-400
                    "
                  >

                    <TrendingUp size={12}/>

                    {item.badge}

                  </span>



                  <span
                    className="
                      text-xs

                      text-slate-500
                    "
                  >

                    {item.description}

                  </span>


                </div>



              </div>







              <div
                className={`
                  flex

                  h-14

                  w-14

                  items-center

                  justify-center

                  rounded-2xl

                  bg-gradient-to-br

                  ${item.color}

                  text-white

                  shadow-lg
                `}
              >

                <Icon size={26}/>


              </div>




            </div>





          </motion.div>


        );


      })}



    </div>


  );

}