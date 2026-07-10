"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarCheck,
  CalendarDays,
  Wallet,
  ShieldCheck,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Departments", href: "/departments", icon: Building2 },
  { name: "Attendance", href: "/attendance", icon: CalendarCheck },
  { name: "Leave", href: "/leave", icon: CalendarDays },
  { name: "Payroll", href: "/payroll", icon: Wallet },
  { name: "Roles", href: "/roles", icon: ShieldCheck },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-slate-900 text-white shadow-2xl">
      {/* Logo */}
      <div className="flex h-20 items-center justify-center border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-wide">
          IKF<span className="text-cyan-400">TECH</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}