"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-[#0f172a] dark:via-[#111827] dark:to-[#020617]">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : -300,
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 z-50 h-screen lg:hidden"
      >
        <Sidebar />
      </motion.div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:w-72">
        <Sidebar />
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Content */}
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8"
        >
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </motion.main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}