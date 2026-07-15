"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";


export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: string;
}


interface Props {
  open: boolean;
  onClose: () => void;
  addEmployee: (employee: Employee) => void;
  editEmployee?: Employee | null;
}


const emptyForm = {
  name: "",
  email: "",
  department: "",
  role: "",
  status: "Active",
};


export default function AddEmployeeModal({
  open,
  onClose,
  addEmployee,
  editEmployee,
}: Props) {


  const [formData, setFormData] = useState(emptyForm);


  // Jab modal edit mode mein khule (ya editEmployee change ho),
  // form ko us employee ki values se fill kar do.
  useEffect(() => {

    if (editEmployee) {

      setFormData({
        name: editEmployee.name,
        email: editEmployee.email,
        department: editEmployee.department,
        role: editEmployee.role,
        status: editEmployee.status,
      });

    } else {

      setFormData(emptyForm);

    }

  }, [editEmployee, open]);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (editEmployee) {

      // Update: purana id hi use karo, naya mat banao
      addEmployee({
        id: editEmployee.id,
        ...formData,
      });

    } else {

      // Naya employee: naya id generate karo
      addEmployee({
        id: Date.now(),
        ...formData,
      });

    }

    setFormData(emptyForm);

    onClose();

  };



  if (!open) return null;



  return (

    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
        px-4
      "
    >


      <div
        className="
          bg-white
          rounded-2xl
          w-full
          max-w-lg
          p-6
          shadow-xl
        "
      >



        {/* Header */}

        <div className="
          flex
          justify-between
          items-center
          mb-6
        ">

          <h2 className="
            text-xl
            font-bold
          ">
            {editEmployee ? "Edit Employee" : "Add New Employee"}
          </h2>


          <button
            onClick={onClose}
            className="
              p-2
              hover:bg-gray-100
              rounded-lg
            "
          >

            <X size={20}/>

          </button>


        </div>





        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >



          {/* Name */}

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Employee Name"
            required
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />



          {/* Email */}

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            required
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />




          {/* Department */}

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          >

            <option value="">
              Select Department
            </option>

            <option>
              Development
            </option>

            <option>
              Design
            </option>

            <option>
              HR
            </option>

            <option>
              Marketing
            </option>


          </select>





          {/* Role */}

          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Employee Role"
            required
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />





          {/* Status */}

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          >

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>


          </select>





          {/* Buttons */}


          <div className="
            flex
            gap-3
            pt-4
          ">


            <button
              type="button"
              onClick={onClose}
              className="
                flex-1
                border
                py-3
                rounded-xl
              "
            >
              Cancel
            </button>




            <button
              type="submit"
              className="
                flex-1
                bg-blue-600
                text-white
                py-3
                rounded-xl
                hover:bg-blue-700
              "
            >
              {editEmployee ? "Save Changes" : "Add Employee"}
            </button>



          </div>



        </form>



      </div>


    </div>

  );
}