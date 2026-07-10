"use client";

import { Building2, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import AddDepartmentModal from "./AddDepartmentModal";

interface Department {
  id: number;
  name: string;
  manager: string;
  employees: number;
  status: string;
}

export default function DepartmentTable() {

  const [open, setOpen] = useState(false);

  const [editDept, setEditDept] = useState<Department | null>(null);


  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      name: "IT",
      manager: "Ahmed Khan",
      employees: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "HR",
      manager: "Sara Ahmed",
      employees: 5,
      status: "Active",
    },
    {
      id: 3,
      name: "Design",
      manager: "Usman Raza",
      employees: 8,
      status: "Active",
    },
  ]);


  // Add Department
  const addDepartment = (data:{
    name:string;
    manager:string;
  })=>{

    setDepartments([
      ...departments,
      {
        id:Date.now(),
        name:data.name,
        manager:data.manager,
        employees:0,
        status:"Active"
      }
    ]);

    setOpen(false);

  };


  // Delete Department
  const deleteDepartment=(id:number)=>{

    setDepartments(
      departments.filter((dept)=>dept.id !== id)
    );

  };


  // Open Edit
  const editDepartment=(dept:Department)=>{

    setEditDept(dept);
    setOpen(true);

  };


  // Update Department
  const updateDepartment=(data:{
    name:string;
    manager:string;
  })=>{

    setDepartments(
      departments.map((dept)=>
        dept.id === editDept?.id
        ?
        {
          ...dept,
          name:data.name,
          manager:data.manager
        }
        :
        dept
      )
    );


    setEditDept(null);
    setOpen(false);

  };


  return (
    <div className="bg-white rounded-2xl shadow p-6">


      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Departments
          </h1>

          <p className="text-gray-500">
            Manage company departments
          </p>
        </div>


        <button
          onClick={()=>{
            setEditDept(null);
            setOpen(true);
          }}
          className="bg-cyan-600 text-white px-5 py-3 rounded-xl"
        >
          + Add Department
        </button>


      </div>



      <input
        placeholder="Search department..."
        className="w-full border rounded-xl px-4 py-3 mb-6"
      />



      <table className="w-full">

        <thead>
          <tr className="text-left border-b">

            <th className="py-4">Department</th>
            <th>Manager</th>
            <th>Employees</th>
            <th>Status</th>
            <th>Action</th>

          </tr>
        </thead>


        <tbody>

        {
          departments.map((dept)=>(

            <tr key={dept.id} className="border-b">


              <td className="py-4 flex gap-3 items-center">

                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Building2 size={20}/>
                </div>

                <span className="font-semibold">
                  {dept.name}
                </span>

              </td>


              <td>{dept.manager}</td>


              <td>{dept.employees}</td>


              <td>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {dept.status}
                </span>
              </td>


              <td className="flex gap-3 py-4">


                <button
                  onClick={()=>editDepartment(dept)}
                  className="bg-blue-100 p-2 rounded-lg text-blue-600"
                >
                  <Pencil size={18}/>
                </button>



                <button
                  onClick={()=>deleteDepartment(dept.id)}
                  className="bg-red-100 p-2 rounded-lg text-red-600"
                >
                  <Trash2 size={18}/>
                </button>


              </td>


            </tr>

          ))
        }

        </tbody>

      </table>



      {
        open &&
        <AddDepartmentModal

          onClose={()=>{
            setOpen(false);
            setEditDept(null);
          }}

          addDepartment={
            editDept
            ?
            updateDepartment
            :
            addDepartment
          }

          editData={editDept}

        />
      }



    </div>
  );
}