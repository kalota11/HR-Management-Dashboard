"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarCheck,
  ShieldCheck,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Team Management",
    href: "/employees",
    icon: Users,
  },
  {
    name: "Departments",
    href: "/departments",
    icon: Building2,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: CalendarCheck,
  },
  {
    name: "Roles (RBAC)",
    href: "/roles",
    icon: ShieldCheck,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-[#0000FF] text-white shadow-2xl">

      {/* Logo */}
      <div className="flex justify-center py-8">

        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-2 shadow-xl overflow-hidden">

          <Image
            src="/ikftech-logo.png"
            alt="IKFTech Logo"
            width={80}
            height={80}
            priority
            className="h-full w-full rounded-2xl object-contain"
          />

        </div>

      </div>

      {/* Company Name */}

      <div className="mb-8 text-center">

        <h2 className="text-2xl font-bold tracking-wide">
          IKFTech
        </h2>

        <p className="mt-1 text-sm text-blue-100">
          HR Management System
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-3 px-4 overflow-y-auto">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

              ${
                active
                  ? "bg-white text-[#0000FF] shadow-xl"
                  : "text-white hover:bg-white/20"
              }
              
              `}
            >

              <Icon size={22} />

              <span className="text-[16px] font-semibold">
                {item.name}
              </span>

            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="p-5">

        <button
          className="
          flex
          w-full
          items-center
          gap-4
          rounded-2xl
          border
          border-white/30
          px-5
          py-4
          text-white
          transition-all
          duration-300
          hover:bg-red-500
          hover:border-red-500
          "
        >
          <LogOut size={22} />

          <span className="font-semibold">
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}