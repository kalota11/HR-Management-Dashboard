"use client";

import { Edit, Trash2, UserPlus, Briefcase, Building2 } from "lucide-react";

import { Employee } from "./AddEmployeeModal";


interface Props {
  employees: Employee[];
  setEmployees: React.Dispatch<
    React.SetStateAction<Employee[]>
  >;
  onAdd: () => void;
  onEdit: (employee: Employee) => void;
}


export default function EmployeeTable({
  employees,
  setEmployees,
  onAdd,
  onEdit,
}: Props) {


  const deleteEmployee = (id:number)=>{

    const confirmDelete = confirm(
      "Are you sure you want to delete this employee?"
    );

    if(confirmDelete){

      setEmployees((prev)=>
        prev.filter(
          employee=>employee.id !== id
        )
      );

    }

  };


  return (

    <div
    className="
    bg-white
    rounded-2xl
    shadow-sm
    border
    p-6
    "
    >


      {/* Header */}

      <div
      className="
      flex
      items-center
      justify-between
      mb-6
      "
      >

        <div>

          <h2
          className="
          text-xl
          font-bold
          text-gray-800
          "
          >
            Team Management
          </h2>


          <p
          className="
          text-sm
          text-gray-500
          mt-1
          "
          >
            Manage your employees
          </p>


        </div>



        <button

        onClick={onAdd}

        className="
        flex
        items-center
        gap-2
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-4
        py-2
        rounded-xl
        transition
        "

        >

          <UserPlus size={18}/>

          Add Employee

        </button>


      </div>





      {/* Empty State */}

      {
        employees.length === 0 && (

          <div

          className="
          rounded-xl
          border
          border-dashed
          p-10
          text-center
          text-gray-400
          "

          >

            No employees found.

          </div>

        )
      }





      {/* Employee Cards */}

      <div

      className="
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-5
      "

      >


      {
        employees.map((employee)=>(


          <div

          key={employee.id}

          className="
          border
          rounded-2xl
          p-5
          hover:shadow-md
          transition
          "

          >


            {/* Top */}

            <div
            className="
            flex
            justify-between
            items-start
            "
            >


              <div>

                <h3
                className="
                font-semibold
                text-gray-800
                "
                >
                  {employee.name}
                </h3>


                <p
                className="
                text-sm
                text-gray-500
                "
                >
                  {employee.email}
                </p>


              </div>



              <span

              className={`
              text-xs
              px-3
              py-1
              rounded-full

              ${
                employee.status === "Active"
                ?
                "bg-green-100 text-green-700"
                :
                "bg-red-100 text-red-700"
              }

              `}

              >

                {employee.status}

              </span>


            </div>






            {/* Details */}


            <div
            className="
            mt-5
            space-y-3
            text-sm
            "
            >


              <div
              className="
              flex
              items-center
              gap-2
              text-gray-600
              "
              >

                <Briefcase size={16}/>

                {employee.role}

              </div>



              <div
              className="
              flex
              items-center
              gap-2
              text-gray-600
              "
              >

                <Building2 size={16}/>

                {employee.department}

              </div>


            </div>






            {/* Actions */}


            <div

            className="
            flex
            gap-3
            mt-5
            "

            >


              <button

              onClick={()=>onEdit(employee)}

              className="
              flex
              items-center
              gap-2
              px-3
              py-2
              rounded-lg
              bg-yellow-100
              text-yellow-700
              hover:bg-yellow-200
              "

              >

                <Edit size={16}/>

                Edit

              </button>





              <button

              onClick={()=>deleteEmployee(employee.id)}

              className="
              flex
              items-center
              gap-2
              px-3
              py-2
              rounded-lg
              bg-red-100
              text-red-700
              hover:bg-red-200
              "

              >

                <Trash2 size={16}/>

                Delete

              </button>



            </div>




          </div>


        ))
      }


      </div>



    </div>

  );

}