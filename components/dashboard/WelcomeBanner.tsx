"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl"
    >
      {/* Background Effects */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        {/* Left */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
            <Sparkles size={18} className="text-yellow-300" />
            <span className="text-sm font-medium">
              Welcome Back, Admin
            </span>
          </div>

          <h1 className="text-4xl font-bold lg:text-5xl">
            HR Management Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-cyan-100">
            Manage employees, departments, attendance, payroll, leave requests,
            and company operations from one modern dashboard.
          </p>
        </div>

        {/* Right */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-cyan-700 shadow-xl transition"
        >
          View Reports
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}