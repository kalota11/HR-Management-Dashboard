"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  UserCheck,
  Clock,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Employees",
    value: "245",
    change: "+12%",
    progress: 85,
    color: "bg-blue-600",
    positive: true,
    icon: Users,
  },
  {
    title: "Departments",
    value: "12",
    change: "+3%",
    progress: 65,
    color: "bg-violet-600",
    positive: true,
    icon: Building2,
  },
  {
    title: "Present Today",
    value: "228",
    change: "+6%",
    progress: 95,
    color: "bg-green-600",
    positive: true,
    icon: UserCheck,
  },
  {
    title: "Late Today",
    value: "8",
    change: "-2%",
    progress: 25,
    color: "bg-orange-500",
    positive: false,
    icon: Clock,
  },
  {
    title: "Pending Leave",
    value: "16",
    change: "+5%",
    progress: 40,
    color: "bg-red-500",
    positive: false,
    icon: Calendar,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300

              hover:shadow-2xl
              hover:border-blue-300

              dark:bg-slate-900
              dark:border-slate-700
            "
          >
            {/* Background Glow */}

            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-10 ${item.color}`}
            />

            {/* Header */}

            <div className="relative flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h2>

              </div>

              <div
                className={`
                  ${item.color}
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  text-white
                  shadow-lg
                  transition
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                `}
              >
                <Icon size={30} />
              </div>

            </div>

            {/* Progress */}

            <div className="mt-6">

              <div className="flex items-center justify-between text-xs">

                <span className="text-slate-500">
                  Progress
                </span>

                <span className="font-semibold">
                  {item.progress}%
                </span>

              </div>

              <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${item.progress}%`,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className={`h-2 rounded-full ${item.color}`}
                />

              </div>

            </div>

            {/* Footer */}

            <div className="mt-6 flex items-center justify-between">

              <div
                className={`
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold

                  ${
                    item.positive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }
                `}
              >
                {item.positive ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}

                {item.change}
              </div>

              <span className="text-xs text-slate-500">
                Last 30 Days
              </span>

            </div>

          </motion.div>
        );
      })}
    </div>
  );
}