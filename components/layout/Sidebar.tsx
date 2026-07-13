"use client";

import Image from "next/image";
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
    <aside className="flex h-screen w-72 flex-col bg-gradient-to-b from-[#0F172A] via-[#1D4ED8] to-[#2563EB] text-white shadow-2xl">

 {/* ================= Logo ================= */}
<div className="flex justify-center py-8">
  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-transparent">
    <Image
      src="/ikftech-logo.png"
      alt="IKFTech Logo"
      width={100}
      height={100}
      priority
      className="rounded-full object-cover"
    />
  </div>
</div>      {/* ================= Menu ================= */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                active
                  ? "bg-white text-blue-700 shadow-lg"
                  : "text-white hover:bg-white/10 hover:translate-x-1"
              }`}
            >
              <Icon
                size={22}
                className={`transition-transform duration-300 ${
                  active
                    ? "text-blue-700"
                    : "text-white group-hover:scale-110"
                }`}
              />

              <span className="text-[16px] font-semibold tracking-wide">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ================= Logout ================= */}
      <div className="p-5">
        <button className="flex w-full items-center gap-4 rounded-2xl border border-white/20 px-5 py-4 text-white transition-all duration-300 hover:bg-red-500 hover:border-red-500">
          <LogOut size={22} />
          <span className="font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  );
}