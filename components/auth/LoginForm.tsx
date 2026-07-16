"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Building2,
} from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // UI Only
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white items-center justify-center p-14 relative overflow-hidden">

        <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20" />
        <div className="absolute w-80 h-80 rounded-full bg-white/10 bottom-0 right-0" />

        <div className="relative z-10 max-w-lg">

          <div className="flex items-center gap-4 mb-10">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Building2 size={40} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                HR Management
              </h1>

              <p className="text-blue-100">
                Admin Dashboard
              </p>
            </div>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Welcome Back 👋
          </h2>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Manage Employees, Departments, Attendance,
            Roles and your complete HR system from one
            professional dashboard.
          </p>

         <div className="mt-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8">

  <h3 className="text-3xl font-bold leading-tight">
    Smart HR Platform
  </h3>

  <p className="mt-4 text-blue-100 leading-8">
    Experience a modern Human Resource Management System built
    to simplify employee operations, attendance monitoring,
    department management, and role-based access from one
    centralized dashboard.
  </p>

  <div className="mt-8 space-y-5">

    <div className="flex items-center gap-4">
      <div className="h-3 w-3 rounded-full bg-white"></div>
      <span className="text-lg text-blue-50">
        Employee & Team Management
      </span>
    </div>

    <div className="flex items-center gap-4">
      <div className="h-3 w-3 rounded-full bg-white"></div>
      <span className="text-lg text-blue-50">
        Attendance & Leave Management
      </span>
    </div>

    <div className="flex items-center gap-4">
      <div className="h-3 w-3 rounded-full bg-white"></div>
      <span className="text-lg text-blue-50">
        Department & Role Management
      </span>
    </div>

    <div className="flex items-center gap-4">
      <div className="h-3 w-3 rounded-full bg-white"></div>
      <span className="text-lg text-blue-50">
        Secure, Fast & Responsive Experience
      </span>
    </div>

  </div>

</div>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center px-6 py-10">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

          <div className="text-center mb-8">

            <h2 className="text-4xl font-bold text-slate-800">
              Sign In
            </h2>

            <p className="text-slate-500 mt-2">
              Login to continue
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >

            {/* Email */}

            <div>

              <label className="text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="mt-2 relative">

                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  defaultValue="admin@gmail.com"
                  className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Email"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="mt-2 relative">

                <Lock
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  defaultValue="123456"
                  className="w-full border rounded-xl py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm">

                <input
                  type="checkbox"
                  className="rounded"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-blue-600 text-sm font-medium"
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 transition"
            >
              Login

              <ArrowRight size={18} />

            </button>

          </form>

          <p className="text-center text-gray-500 mt-8 text-sm">
            © 2026 HR Management System
          </p>

        </div>

      </div>

    </div>
  );
}