"use client";

import {
  Bell,
  Search,
  Moon,
  Sun,
  Settings,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 sm:h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-4 sm:px-6 lg:px-8 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      
      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-xl bg-slate-100 p-2.5 transition hover:bg-cyan-500 hover:text-white lg:hidden"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Search */}
        <div className="relative hidden md:block w-56 lg:w-80">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-100 pl-12 pr-4 text-sm outline-none transition focus:border-cyan-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-3">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-xl bg-slate-100 p-2.5 sm:p-3 transition hover:bg-cyan-500 hover:text-white dark:bg-slate-800"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="relative rounded-xl bg-slate-100 p-2.5 sm:p-3 transition hover:bg-cyan-500 hover:text-white dark:bg-slate-800">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <button className="hidden sm:flex rounded-xl bg-slate-100 p-3 transition hover:bg-cyan-500 hover:text-white dark:bg-slate-800">
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 sm:px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-800">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white">
            A
          </div>

          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
              Administrator
            </h3>

            <p className="text-xs text-slate-500">
              HR Management System
            </p>
          </div>

          <ChevronDown
            size={18}
            className="hidden sm:block text-slate-500"
          />
        </div>

      </div>
    </header>
  );
}