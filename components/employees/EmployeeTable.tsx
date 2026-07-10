"use client";

import { useState } from "react";
import { Search, Edit, Trash2, UserPlus } from "lucide-react";
import AddEmployeeModal, { Employee } from "./AddEmployeeModal";


export default function EmployeeTable() {


  const [openModal,setOpenModal] = useState(false);


  const [selectedEmployee,setSelectedEmployee] =
    useState<Employee | null>(null);



  const [employees,setEmployees] = useState<Employee[]>([

    {
      id:1,
      name:"Ali Khan",
      email:"ali@gmail.com",
      role:"Frontend Developer",
      department:"IT",
      status:"Active",
    },


    {
      id:2,
      name:"Sara Ahmed",
      email:"sara@gmail.com",
      role:"HR Manager",
      department:"HR",
      status:"Active",
    },


    {
      id:3,
      name:"Usman Raza",
      email:"usman@gmail.com",
      role:"UI Designer",
      department:"Design",
      status:"On Leave",
    }

  ]);




  const addEmployee = (employee:Omit<Employee,"id">)=>{


    setEmployees([

      ...employees,

      {
        id:Date.now(),
        ...employee
      }

    ]);


    setOpenModal(false);

  };





  const editEmployee = (data:Omit<Employee,"id">)=>{


    if(!selectedEmployee) return;



    setEmployees(

      employees.map(employee =>

        employee.id === selectedEmployee.id

        ? {

          ...employee,

          ...data

        }

        : employee

      )

    );



    setSelectedEmployee(null);

    setOpenModal(false);


  };





  const deleteEmployee = (id:number)=>{


    setEmployees(

      employees.filter(

        employee => employee.id !== id

      )

    );


  };





  const openEdit = (employee:Employee)=>{


    setSelectedEmployee(employee);

    setOpenModal(true);


  };





  const closeModal = ()=>{


    setOpenModal(false);

    setSelectedEmployee(null);


  };





  return (

    <div className="rounded-3xl bg-white p-6 shadow-lg border">


      <div className="mb-6 flex justify-between items-center">


        <div>

          <h2 className="text-2xl font-bold">
            Employees
          </h2>


          <p className="text-gray-500">
            Manage all company employees
          </p>


        </div>




        <button

          onClick={()=>{

            setSelectedEmployee(null);

            setOpenModal(true);

          }}

          className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-white"

        >

          <UserPlus size={18}/>

          Add Employee

        </button>


      </div>





      <div className="mb-6 flex items-center gap-3 rounded-xl border px-4 py-3">


        <Search size={20}/>


        <input

          placeholder="Search employee..."

          className="w-full outline-none"

        />


      </div>





      <table className="w-full text-left">


        <thead>


          <tr className="border-b text-gray-500">


            <th className="p-4">
              Name
            </th>


            <th className="p-4">
              Role
            </th>


            <th className="p-4">
              Department
            </th>


            <th className="p-4">
              Status
            </th>


            <th className="p-4">
              Action
            </th>


          </tr>


        </thead>




        <tbody>


          {employees.map(employee=>(


            <tr key={employee.id} className="border-b">


              <td className="p-4">


                <h3 className="font-semibold">

                  {employee.name}

                </h3>


                <p className="text-sm text-gray-500">

                  {employee.email}

                </p>


              </td>




              <td className="p-4">

                {employee.role}

              </td>



              <td className="p-4">

                {employee.department}

              </td>




              <td className="p-4">


                <span className="rounded-full bg-green-100 px-3 py-1 text-green-600">

                  {employee.status}

                </span>


              </td>





              <td className="p-4 flex gap-3">


                <button

                  onClick={()=>openEdit(employee)}

                  className="rounded-lg bg-blue-100 p-2 text-blue-600"

                >

                  <Edit size={17}/>

                </button>




                <button

                  onClick={()=>deleteEmployee(employee.id)}

                  className="rounded-lg bg-red-100 p-2 text-red-600"

                >

                  <Trash2 size={17}/>

                </button>



              </td>



            </tr>


          ))}


        </tbody>


      </table>





      <AddEmployeeModal


        open={openModal}


        onClose={closeModal}


        addEmployee={addEmployee}


        editEmployee={editEmployee}


        selectedEmployee={selectedEmployee}


      />



    </div>

  );

}