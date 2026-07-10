"use client";

import {
  Bell,
  Search,
  Moon,
  Sun,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">

      {/* Search */}
      <div className="relative hidden w-full max-w-md lg:block">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employees, departments..."
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-100 pl-12 pr-4 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-4">

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-xl bg-slate-100 p-3 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white dark:bg-slate-800"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <button className="relative rounded-xl bg-slate-100 p-3 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white dark:bg-slate-800">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* Settings */}
        <button className="rounded-xl bg-slate-100 p-3 transition-all duration-300 hover:rotate-90 hover:bg-cyan-500 hover:text-white dark:bg-slate-800">
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-md">
            A
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
              Administrator
            </h3>

            <p className="text-xs text-slate-500">
              HR Management System
            </p>
          </div>

          <ChevronDown
            size={18}
            className="text-slate-500"
          />
        </div>

      </div>
    </header>
  );
}