"use client";

import {
  Users,
  UserCheck,
  UserX,
  Building2,
} from "lucide-react";

import { Employee } from "./AddEmployeeModal";


interface Props {
  employees: Employee[];
}



export default function EmployeeStats({
  employees,
}: Props) {



  const totalEmployees = employees.length;



  const activeEmployees = employees.filter(
    (employee) =>
      employee.status === "Active"
  ).length;




  const onLeaveEmployees = employees.filter(
    (employee) =>
      employee.status === "On Leave"
  ).length;




  const inactiveEmployees = employees.filter(
    (employee) =>
      employee.status === "Inactive"
  ).length;




  const totalDepartments = new Set(

    employees.map(
      (employee)=>
      employee.department
    )

  ).size;





  const stats = [

    {
      title:"Total Employees",
      value:totalEmployees,
      icon:Users,
      bg:"bg-blue-100",
      iconColor:"text-[#0000FF]",
    },


    {
      title:"Active Employees",
      value:activeEmployees,
      icon:UserCheck,
      bg:"bg-green-100",
      iconColor:"text-green-600",
    },


    {
      title:"On Leave",
      value:onLeaveEmployees,
      icon:UserX,
      bg:"bg-orange-100",
      iconColor:"text-orange-500",
    },


    {
      title:"Departments",
      value:totalDepartments,
      icon:Building2,
      bg:"bg-purple-100",
      iconColor:"text-purple-600",
    },


  ];





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



      {
        stats.map((item,index)=>{


          const Icon = item.icon;



          return (

            <div

              key={index}

              className="
              rounded-3xl
              border
              border-blue-100
              bg-white
              p-6
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "

            >



              <div
                className="
                flex
                items-center
                justify-between
                "
              >



                <div>


                  <p
                    className="
                    text-sm
                    font-medium
                    text-gray-500
                    "
                  >

                    {item.title}

                  </p>




                  <h2
                    className="
                    mt-3
                    text-4xl
                    font-bold
                    text-gray-800
                    "
                  >

                    {item.value}

                  </h2>



                </div>






                <div

                  className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${item.bg}
                  `}

                >


                  <Icon

                    size={30}

                    className={item.iconColor}

                  />


                </div>



              </div>




            </div>


          );


        })
      }



    </div>


  );

}