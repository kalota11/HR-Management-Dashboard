"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import Header from "./Header";


interface DashboardLayoutProps {
  children: React.ReactNode;
}


export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (

    <div
      className="
        flex
        min-h-screen

        bg-slate-50
        text-slate-900

        transition-colors
        duration-300

        dark:bg-slate-950
        dark:text-white
      "
    >


      {/* Mobile Overlay */}

      {sidebarOpen && (

        <div
          className="
            fixed
            inset-0
            z-40

            bg-black/40
            backdrop-blur-sm

            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />

      )}





      {/* Mobile Sidebar */}

      <motion.div

        initial={false}

        animate={{
          x: sidebarOpen ? 0 : -300,
        }}

        transition={{
          duration:0.3
        }}

        className="
          fixed
          left-0
          top-0
          z-50

          h-screen

          lg:hidden
        "

      >

        <Sidebar />

      </motion.div>






      {/* Desktop Sidebar */}

      <aside
        className="
          hidden

          lg:block
        "
      >

        <Sidebar />

      </aside>








      {/* Main Area */}


      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
        "
      >



        {/* Header */}

        <Header

          sidebarOpen={sidebarOpen}

          setSidebarOpen={setSidebarOpen}

        />







        {/* Content */}


        <motion.main

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.5
          }}


          className="
            flex-1

            overflow-x-hidden
            overflow-y-auto

            bg-transparent

            p-4
            sm:p-6
            lg:p-8

            transition-colors
            duration-300
          "

        >


          <div
            className="
              mx-auto

              w-full

              max-w-7xl
            "
          >

            {children}

          </div>


        </motion.main>




      </div>


    </div>

  );

}