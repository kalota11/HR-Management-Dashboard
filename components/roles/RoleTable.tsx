"use client";

import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Role {
  id: number;
  name: string;
  description: string;
  users: number;
  permissions: number;
  status: string;
}

export default function RoleTable() {
  const [roles, setRoles] = useState<Role[]>([
    {
      id: 1,
      name: "Admin",
      description: "Full system access",
      users: 3,
      permissions: 24,
      status: "Active",
    },
    {
      id: 2,
      name: "HR Manager",
      description: "Manage employees and leaves",
      users: 5,
      permissions: 15,
      status: "Active",
    },
    {
      id: 3,
      name: "Employee",
      description: "Basic employee access",
      users: 42,
      permissions: 8,
      status: "Active",
    },
  ]);

  const deleteRole = (id: number) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6 border border-blue-100">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-[#0000ff]">Roles & Permissions</h1>
        <p className="text-sm sm:text-base text-gray-500">
          Manage user roles and access control
        </p>
      </div>

      {/* Desktop / tablet table view (md and up) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-blue-100 bg-blue-50/50 text-left">
              <th className="py-4 px-2 text-[#0000ff]">Role Name</th>
              <th className="text-[#0000ff]">Description</th>
              <th className="text-[#0000ff]">Users</th>
              <th className="text-[#0000ff]">Permissions</th>
              <th className="text-[#0000ff]">Status</th>
              <th className="text-[#0000ff]">Action</th>
            </tr>
          </thead>

          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b border-blue-50 hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-2 font-semibold">{role.name}</td>
                <td>{role.description}</td>
                <td>{role.users}</td>
                <td>{role.permissions}</td>
                <td>
                  <span className="bg-blue-100 text-[#0000ff] px-3 py-1 rounded-full text-sm">
                    {role.status}
                  </span>
                </td>

                <td className="flex gap-3 py-4">
                  <button className="bg-blue-100 hover:bg-blue-200 transition-colors text-[#0000ff] p-2 rounded-lg">
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => deleteRole(role.id)}
                    className="bg-blue-50 hover:bg-red-100 transition-colors text-red-600 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {roles.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-400">
                  No roles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view (below md) */}
      <div className="md:hidden space-y-4">
        {roles.map((role) => (
          <div key={role.id} className="border border-blue-100 rounded-xl p-4 flex flex-col gap-3 bg-white shadow-sm">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="font-semibold">{role.name}</h3>
                <p className="text-sm text-gray-500">{role.description}</p>
              </div>

              <span className="bg-blue-100 text-[#0000ff] px-3 py-1 rounded-full text-xs shrink-0">
                {role.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Users</p>
                <p className="font-medium">{role.users}</p>
              </div>
              <div>
                <p className="text-gray-400">Permissions</p>
                <p className="font-medium">{role.permissions}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-200 transition-colors text-[#0000ff] p-2 rounded-lg text-sm">
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteRole(role.id)}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-red-100 transition-colors text-red-600 p-2 rounded-lg text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}

        {roles.length === 0 && (
          <p className="py-6 text-center text-gray-400">No roles found.</p>
        )}
      </div>
    </div>
  );
}