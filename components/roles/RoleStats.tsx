"use client";

import { useState } from "react";

import {
  ShieldCheck,
  UserCog,
  Power,
  KeyRound,
  Users2,
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

function RoleIcon({ name, active }: { name: string; active: boolean }) {
  return (
    <div
      className={`p-3 rounded-xl shrink-0 transition-colors ${
        active ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      {name === "Admin" ? (
        <ShieldCheck
          size={22}
          className={active ? "text-[#0000ff]" : "text-gray-400"}
        />
      ) : (
        <UserCog
          size={22}
          className={active ? "text-[#0000ff]" : "text-gray-400"}
        />
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: Role["status"] }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
        status === "Active"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "Active" ? "bg-green-500" : "bg-red-500"
        }`}
      />
      {status}
    </span>
  );
}

export default function RolesList() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  // Kisi bhi role (Admin sameet) ko Active <-> Inactive toggle karo
  const toggleStatus = (id: number) => {
    setRoles(
      roles.map((role) =>
        role.id === id
          ? {
              ...role,
              status: role.status === "Active" ? "Inactive" : "Active",
            }
          : role
      )
    );
  };

  const activeCount = roles.filter((r) => r.status === "Active").length;

  return (
    <div className="space-y-6">
      {/* Summary strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-xl">
            <KeyRound className="text-[#0000ff]" size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-xs sm:text-sm">Total Roles</p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0000ff]">
              {roles.length}
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 flex items-center gap-3">
          <div className="bg-green-100 p-3 rounded-xl">
            <ShieldCheck className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-xs sm:text-sm">Active</p>
            <h2 className="text-xl sm:text-2xl font-bold text-green-600">
              {activeCount}
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 flex items-center gap-3 col-span-2 sm:col-span-1">
          <div className="bg-red-100 p-3 rounded-xl">
            <Power className="text-red-600" size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-xs sm:text-sm">Inactive</p>
            <h2 className="text-xl sm:text-2xl font-bold text-red-600">
              {roles.length - activeCount}
            </h2>
          </div>
        </div>
      </div>

      {/* Role boxes grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {roles.map((role) => {
          const active = role.status === "Active";
          return (
            <div
              key={role.id}
              className={`group relative bg-white rounded-2xl border p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300 ${
                active
                  ? "border-gray-100 hover:border-blue-200"
                  : "border-gray-100 opacity-80"
              }`}
            >
              {/* Top row: icon + status */}
              <div className="flex items-start justify-between">
                <RoleIcon name={role.name} active={active} />
                <StatusBadge status={role.status} />
              </div>

              {/* Name + permissions */}
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">
                  {role.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-gray-500 text-sm">
                  <Users2 size={14} />
                  <span>{role.permissions} permissions</span>
                </div>
              </div>

              {/* Permission bar (visual flourish) */}
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0000ff] rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (role.permissions / 24) * 100)}%` }}
                />
              </div>

              {/* Action button */}
              <button
                onClick={() => toggleStatus(role.id)}
                className={`mt-auto flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active
                    ? "bg-red-50 text-red-600 hover:bg-red-100"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                <Power size={16} />
                {active ? "Deactivate" : "Activate"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}