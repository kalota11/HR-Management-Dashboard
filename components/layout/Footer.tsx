"use client";

import Link from "next/link";
import { Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white shadow-sm">

      <div className="mx-auto flex flex-col items-center justify-between gap-5 px-6 py-5 lg:flex-row">

        {/* Left */}
        <div>

          <h3 className="text-lg font-bold text-[#0000FF]">
            IKFTECH HR Management System
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            © {new Date().getFullYear()} IKFTECH. All Rights Reserved.
          </p>

        </div>

        {/* Center */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">

          <Link
            href="/dashboard"
            className="text-gray-600 transition hover:text-[#0000FF]"
          >
            Dashboard
          </Link>

          <Link
            href="/employees"
            className="text-gray-600 transition hover:text-[#0000FF]"
          >
            Team Management
          </Link>

          <Link
            href="/departments"
            className="text-gray-600 transition hover:text-[#0000FF]"
          >
            Departments
          </Link>

          <Link
            href="/attendance"
            className="text-gray-600 transition hover:text-[#0000FF]"
          >
            Attendance
          </Link>

          <Link
            href="/roles"
            className="text-gray-600 transition hover:text-[#0000FF]"
          >
            Roles (RBAC)
          </Link>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-blue-200 bg-white p-3 text-[#0000FF] transition hover:bg-[#0000FF] hover:text-white">

            <Globe size={18} />

          </button>

          <button className="rounded-xl border border-blue-200 bg-white p-3 text-[#0000FF] transition hover:bg-[#0000FF] hover:text-white">

            <Mail size={18} />

          </button>

          <div className="ml-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0000FF]">
            Version 1.0.0
          </div>

        </div>

      </div>

    </footer>
  );
}