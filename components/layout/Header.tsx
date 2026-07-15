"use client";

import { useState } from "react";
import {
  Bell,
  Moon,
  Sun,
  ChevronDown,
  Menu,
  X,
  User,
  Settings,
  LogOut,
} from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  const [dark, setDark] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-5">

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden rounded-xl border p-2 hover:bg-slate-100"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

       
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Dark Mode */}

        <button
          onClick={() => setDark(!dark)}
          className="rounded-full border p-3 hover:bg-slate-100"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notification */}

        <button className="relative rounded-full border p-3 hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-500"></span>

        </button>

        {/* Profile */}

        <div className="relative">

          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 rounded-full border px-3 py-2 hover:bg-slate-50"
          >

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="h-11 w-11 rounded-full"
            />

            <div className="hidden lg:block text-left">

              <h4 className="font-semibold">
                Administrator
              </h4>

              <p className="text-xs text-gray-500">
                Admin
              </p>

            </div>

            <ChevronDown size={18} />

          </button>

          {profileOpen && (

            <div className="absolute right-0 mt-3 w-56 rounded-2xl border bg-white p-2 shadow-xl">

              <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-slate-100">
                <User size={18} />
                Profile
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-slate-100">
                <Settings size={18} />
                Settings
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl p-3 text-red-600 hover:bg-red-50">
                <LogOut size={18} />
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}