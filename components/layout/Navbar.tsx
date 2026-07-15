"use client";

import Link from "next/link";
import { Bell, Search, Menu, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-blue-100 bg-white px-4 sm:px-6 lg:px-8 shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-4">

        <button className="rounded-xl bg-[#0000FF] p-2.5 text-white transition hover:scale-105 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>

        <h1 className="text-2xl font-bold text-[#0000FF] tracking-wide">
          IKFTECH HRMS
        </h1>

      </div>

      {/* Center */}
      <div className="relative hidden w-full max-w-md lg:block">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0000FF]"
          size={18}
        />

        <input
          type="text"
          placeholder="Search employees..."
          className="h-11 w-full rounded-2xl border border-blue-200 bg-white pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#0000FF] focus:ring-2 focus:ring-blue-200"
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Notification */}
        <button className="relative rounded-xl border border-blue-200 bg-white p-3 text-[#0000FF] transition hover:bg-[#0000FF] hover:text-white">

          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Settings */}
        <button className="rounded-xl border border-blue-200 bg-white p-3 text-[#0000FF] transition hover:bg-[#0000FF] hover:text-white">

          <Settings className="h-5 w-5" />

        </button>

        {/* Profile */}
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-lg"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0000FF] font-bold text-white">
            A
          </div>

          <div className="hidden md:block">

            <p className="text-sm font-bold text-gray-800">
              Administrator
            </p>

            <span className="text-xs text-gray-500">
              HR Management System
            </span>

          </div>

        </Link>

      </div>

    </nav>
  );
}