"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0000FF] via-[#1E40AF] to-[#0000FF] p-8 lg:p-10 text-white shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md border border-white/20">
            <Sparkles size={18} className="text-yellow-300" />
            <span className="text-sm font-medium tracking-wide">
              Welcome Back, Administrator
            </span>
          </div>

          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight">
            IKFTech HR Management System
          </h1>

          <p className="mt-5 max-w-2xl text-base lg:text-lg text-blue-100 leading-8">
            Manage your team members, departments, attendance records and
            role-based permissions from one secure, modern and responsive HR
            management dashboard.
          </p>

        </div>

        {/* Right */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-[#0000FF] shadow-xl transition-all hover:shadow-2xl"
        >
          Dashboard Overview

          <ArrowRight size={20} />
        </motion.button>

      </div>
    </motion.div>
  );
}