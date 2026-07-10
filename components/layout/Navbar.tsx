"use client";

import Link from "next/link";
import { Bell, Search, Menu, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Menu className="h-5 w-5" />
        </button>

        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-2xl font-bold text-transparent">
          IKFTECH HRMS
        </h1>
      </div>

      {/* Center */}
      <div className="relative hidden w-full max-w-md lg:block">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-100 pl-10 pr-4 outline-none transition focus:border-cyan-500 focus:bg-white"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-cyan-500 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>

        <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-cyan-500 hover:text-white">
          <Settings className="h-5 w-5" />
        </button>

        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-md"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white">
            A
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">Administrator</p>
            <span className="text-xs text-slate-500">
              HR Management
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}