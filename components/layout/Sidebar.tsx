"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarClock,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";


interface MenuItem {
  title: string;
  icon: LucideIcon;
  href?: string;
  children?: {
    title: string;
    href: string;
  }[];
}
const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },

  {
    title: "Team Management",
    icon: Users,
    children: [
      {
        title: "team",
        href: "/dashboard/team",
      },
      {
        title: "Roles & Permissions",
        href: "/dashboard/rbac",
      },
    ],
  },

  {
    title: "Departments",
    icon: Building2,
    href: "/dashboard/departments",
  },

  {
    title: "Attendance",
    icon: CalendarClock,
    href: "/dashboard/attendance",
  },

  {
    title: "RBAC",
    icon: ShieldCheck,
    href: "/dashboard/rbac",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const [openMenu, setOpenMenu] = useState("Team Management");

  return (
<aside
  className={`
    h-screen
    sticky
    top-0
    flex
    flex-col
    bg-white
    border-r
    border-slate-200
    shadow-sm
    transition-all
    duration-300
    ${collapsed ? "w-20" : "w-72"}
  `}
>      {/* Logo */}

      <div className="h-20 border-b flex items-center justify-between px-6">

        <div className="flex items-center gap-3">

         <div className="w-11 h-11 rounded-xl overflow-hidden">
  <Image
    src="/ikftech-logo.png"
    width={44}
    height={44}
    alt="Ikftech Logo"
  />
</div>
          {!collapsed && (
            <div>
           <h2 className="font-bold text-slate-800 text-lg">
  Ikftech
</h2>

<p className="text-xs text-slate-500">
  Admin Dashboard
</p>
            </div>
          )}

        </div>

        <button
          onClick={() =>
            setCollapsed(!collapsed)
          }
          className="text-slate-500 hover:text-blue-600"
        >
          {collapsed ? (
            <Menu size={22} />
          ) : (
            <X size={22} />
          )}
        </button>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p
          className={`text-xs uppercase text-slate-400 mb-3 ${
            collapsed && "hidden"
          }`}
        >
          Main Menu
        </p>

        <nav className="space-y-2">
                    {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href && pathname === item.href;

            const isOpen =
              openMenu === item.title;

            return (
              <div key={item.title}>

                {/* Single Menu */}

                {!item.children && (
                  <Link
                    href={item.href!}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      transition-all
                      duration-200
                      group

                      ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-600 hover:bg-slate-100"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">

                      <Icon size={20} />

                      {!collapsed && (
                        <span className="font-medium">
                          {item.title}
                        </span>
                      )}

                    </div>

                  </Link>
                )}

                {/* Dropdown */}

                {item.children && (

                  <div>

                    <button
                      onClick={() =>
                        setOpenMenu(
                          isOpen
                            ? ""
                            : item.title
                        )
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        hover:bg-slate-100
                        transition
                      "
                    >

                      <div className="flex items-center gap-3">

                        <Icon
                          size={20}
                          className="text-slate-600"
                        />

                        {!collapsed && (
                          <span className="font-medium text-slate-700">
                            {item.title}
                          </span>
                        )}

                      </div>

                      {!collapsed &&
                        (isOpen ? (
                          <ChevronDown
                            size={18}
                            className="text-slate-500"
                          />
                        ) : (
                          <ChevronRight
                            size={18}
                            className="text-slate-500"
                          />
                        ))}

                    </button>

                    {!collapsed &&
                      isOpen && (

                        <div className="ml-12 mt-2 space-y-2">

                          {item.children.map(
                            (child) => {

                              const active =
                                pathname ===
                                child.href;

                              return (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  className={`
                                  block
                                  rounded-lg
                                  px-3
                                  py-2
                                  text-sm
                                  transition

                                  ${
                                    active
                                      ? "bg-blue-100 text-blue-700 font-semibold"
                                      : "text-slate-600 hover:bg-slate-100"
                                  }
                                `}
                                >
                                  {child.title}
                                </Link>
                              );
                            }
                          )}

                        </div>

                      )}

                  </div>

                )}

              </div>
            );
          })}

        </nav>

      </div>
            {/* Bottom Section */}

     <div className="mt-auto border-t border-slate-200 bg-white p-4">

        {/* User Profile */}

        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div className="flex items-center gap-3">

            <div className="h-11 w-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              A
            </div>

            {!collapsed && (
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Admin User
                </h3>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Logout */}

        <button
          className={`
            mt-4
            w-full
            flex
            items-center
            ${
              collapsed
                ? "justify-center"
                : "justify-start"
            }
            gap-3
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-red-600
            transition
            hover:bg-red-100
          `}
        >
          <LogOut size={20} />

          {!collapsed && (
            <span className="font-medium">
              Logout
            </span>
          )}
        </button>

        {/* Footer */}

        {!collapsed && (
          <div className="mt-6 border-t border-slate-100 pt-4 text-center">
            <p className="text-xs text-slate-400">
              HR Management System
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Version 1.0.0
            </p>
          </div>
        )}

      </div>

    </aside>
  );
}