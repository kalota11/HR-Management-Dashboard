"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";


export interface Employee {

  id: number;

  name: string;

  email: string;

  role: string;

  department: string;

  status: string;

}


interface Props {

  open: boolean;

  onClose: () => void;

  addEmployee: (employee: Omit<Employee, "id">) => void;

  editEmployee: (employee: Omit<Employee, "id">) => void;

  selectedEmployee: Employee | null;

}



export default function AddEmployeeModal({

  open,
  onClose,
  addEmployee,
  editEmployee,
  selectedEmployee,

}: Props) {


  const initialState: Omit<Employee,"id"> = {

    name:"",
    email:"",
    role:"",
    department:"IT",
    status:"Active",

  };



  const [formData,setFormData] = useState<Omit<Employee,"id">>(
    initialState
  );



 useEffect(() => {
  if (!open) return;

  if (selectedEmployee) {
    setFormData({
      name: selectedEmployee.name,
      email: selectedEmployee.email,
      role: selectedEmployee.role,
      department: selectedEmployee.department,
      status: selectedEmployee.status,
    });
  } else {
    setFormData(initialState);
  }

}, [open, selectedEmployee]);



  if(!open) return null;




  const handleSubmit=(e:React.FormEvent)=>{

    e.preventDefault();


    if(selectedEmployee){

      editEmployee(formData);

    }
    else{

      addEmployee(formData);

    }


    onClose();

  };



  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">


      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">


        <div className="flex justify-between items-center mb-6">


          <h2 className="text-2xl font-bold">

            {selectedEmployee 
              ? "Edit Employee"
              : "Add New Employee"
            }

          </h2>



          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-100"
          >

            <X size={20}/>

          </button>


        </div>




        <form onSubmit={handleSubmit} className="space-y-4">


          <input

            className="w-full border rounded-xl p-3"

            placeholder="Full Name"

            value={formData.name}

            onChange={(e)=>

              setFormData({

                ...formData,

                name:e.target.value

              })

            }

            required

          />




          <input

            className="w-full border rounded-xl p-3"

            type="email"

            placeholder="Email"

            value={formData.email}

            onChange={(e)=>

              setFormData({

                ...formData,

                email:e.target.value

              })

            }

            required

          />




          <select

            className="w-full border rounded-xl p-3"

            value={formData.department}

            onChange={(e)=>

              setFormData({

                ...formData,

                department:e.target.value

              })

            }

          >

            <option>IT</option>

            <option>HR</option>

            <option>Design</option>

            <option>Marketing</option>


          </select>




          <input

            className="w-full border rounded-xl p-3"

            placeholder="Role"

            value={formData.role}

            onChange={(e)=>

              setFormData({

                ...formData,

                role:e.target.value

              })

            }

            required

          />




          <button

            className="w-full bg-cyan-600 text-white rounded-xl py-3"

            type="submit"

          >

            {selectedEmployee 
              ? "Update Employee"
              : "Add Employee"
            }

          </button>


        </form>


      </div>


    </div>

  );
}