"use client";

import {
  Users,
  UserCheck,
  UserX,
  UserPlus,
} from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "120",
    icon: Users,
    description: "All team members",
  },
  {
    title: "Active Employees",
    value: "105",
    icon: UserCheck,
    description: "Currently active",
  },
  {
    title: "Inactive Employees",
    value: "15",
    icon: UserX,
    description: "Inactive accounts",
  },
  {
    title: "New Employees",
    value: "8",
    icon: UserPlus,
    description: "Joined this month",
  },
];

export default function TeamStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              bg-white 
              rounded-xl 
              border 
              border-gray-200 
              p-5 
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  {item.value}
                </h2>

                <p className="text-xs text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>


              <div
                className="
                  w-12 
                  h-12 
                  rounded-xl 
                  bg-black 
                  flex 
                  items-center 
                  justify-center
                "
              >
                <Icon 
                  size={24} 
                  className="text-white"
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}