"use client";

import Link from "next/link";
import { Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 lg:flex-row">
        {/* Left */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            IKFTECH HR Management System
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} IKFTECH. All Rights Reserved.
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link
            href="/dashboard"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Dashboard
          </Link>

          <Link
            href="/employees"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Employees
          </Link>

          <Link
            href="/departments"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Departments
          </Link>

          <Link
            href="/attendance"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Attendance
          </Link>

          <Link
            href="/leave"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Leave
          </Link>

          <Link
            href="/payroll"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Payroll
          </Link>

          <Link
            href="/roles"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Roles
          </Link>

          <Link
            href="/settings"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Settings
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-slate-100 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:bg-slate-800">
            <Globe size={18} />
          </button>

          <button className="rounded-xl bg-slate-100 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:bg-slate-800">
            <Mail size={18} />
          </button>

          <div className="ml-3 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            Version 1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
}