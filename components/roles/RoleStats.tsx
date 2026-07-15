"use client";

import { useState } from "react";

import {
  ShieldCheck,
  UserCog,
  Power,
} from "lucide-react";


interface Role {
  id: number;
  name: string;
  permissions: number;
  status: "Active" | "Inactive";
}


const initialRoles: Role[] = [
  { id: 1, name: "Admin", permissions: 24, status: "Active" },
  { id: 2, name: "HR Manager", permissions: 12, status: "Active" },
  { id: 3, name: "Team Lead", permissions: 10, status: "Active" },
  { id: 4, name: "Employee", permissions: 6, status: "Active" },
  { id: 5, name: "Finance Officer", permissions: 9, status: "Active" },
  { id: 6, name: "Recruiter", permissions: 8, status: "Inactive" },
  { id: 7, name: "Support Staff", permissions: 5, status: "Active" },
  { id: 8, name: "Guest", permissions: 2, status: "Inactive" },
];


export default function RolesList() {


  const [roles, setRoles] = useState<Role[]>(initialRoles);


  // Kisi bhi role (Admin sameet) ko Active <-> Inactive toggle karo
  const toggleStatus = (id: number) => {

    setRoles(

      roles.map((role) =>

        role.id === id

          ? {
              ...role,
              status:
                role.status === "Active"
                  ? "Inactive"
                  : "Active",
            }

          : role

      )

    );

  };



  return (

    <div className="
      bg-white
      border
      rounded-2xl
      shadow-sm
      overflow-hidden
    ">


      <div className="overflow-x-auto">


        <table className="w-full text-left">


          <thead className="bg-slate-50 border-b">

            <tr>

              <th className="p-4">Role</th>
              <th className="p-4">Permissions</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>

            </tr>

          </thead>


          <tbody>

            {
              roles.map((role) => (

                <tr
                  key={role.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="bg-blue-100 p-2 rounded-lg">

                        {
                          role.name === "Admin"
                            ? <ShieldCheck size={18} className="text-[#0000ff]" />
                            : <UserCog size={18} className="text-[#0000ff]" />
                        }

                      </div>

                      <p className="font-semibold">
                        {role.name}
                      </p>

                    </div>

                  </td>


                  <td className="p-4">
                    {role.permissions}
                  </td>


                  <td className="p-4">

                    <span className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${
                        role.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}>

                      {role.status}

                    </span>

                  </td>


                  <td className="p-4">

                    <button

                      onClick={() => toggleStatus(role.id)}

                      className={`
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        text-sm
                        font-medium
                        ${
                          role.status === "Active"
                            ? "bg-red-100 text-red-600 hover:bg-red-200"
                            : "bg-green-100 text-green-700 hover:bg-green-200"
                        }
                      `}

                    >

                      <Power size={16} />

                      {
                        role.status === "Active"
                          ? "Deactivate"
                          : "Activate"
                      }

                    </button>

                  </td>


                </tr>

              ))
            }

          </tbody>


        </table>


      </div>


    </div>

  );

}