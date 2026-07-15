"use client";

import {
  Bell,
  Search,
  Settings,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-blue-100 bg-white px-4 sm:px-6 lg:px-8 shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-xl bg-[#0000FF] p-2.5 text-white transition hover:scale-105 lg:hidden"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Search */}
        <div className="relative hidden md:block w-64 lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0000FF]"
          />

          <input
            type="text"
            placeholder="Search..."
            className="h-11 w-full rounded-2xl border border-blue-200 bg-white pl-12 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#0000FF] focus:ring-2 focus:ring-blue-200"
          />

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Notification */}
        <button className="relative rounded-xl border border-blue-200 bg-white p-3 text-[#0000FF] transition hover:bg-[#0000FF] hover:text-white">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Settings */}
        <button className="hidden sm:flex rounded-xl border border-blue-200 bg-white p-3 text-[#0000FF] transition hover:bg-[#0000FF] hover:text-white">

          <Settings size={20} />

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-white px-3 py-2 shadow-sm">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0000FF] text-lg font-bold text-white">
            A
          </div>

          <div className="hidden lg:block">

            <h3 className="text-sm font-bold text-gray-800">
              Administrator
            </h3>

            <p className="text-xs text-gray-500">
              HR Management System
            </p>

          </div>

          <ChevronDown
            size={18}
            className="hidden sm:block text-[#0000FF]"
          />

        </div>

      </div>

    </header>
  );
}