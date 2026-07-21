"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Clock3,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "John Smith checked in",
    description: "Attendance marked successfully",
    time: "5 min ago",
    icon: Clock3,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "New Employee Added",
    description: "Sarah Johnson joined IT Department",
    time: "20 min ago",
    icon: UserPlus,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Department Created",
    description: "Research & Development Department",
    time: "1 hour ago",
    icon: Building2,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Leave Approved",
    description: "Annual Leave approved by HR",
    time: "2 hours ago",
    icon: CalendarCheck,
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Attendance Updated",
    description: "Today's attendance synchronized",
    time: "Today",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
];

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-lg

        dark:bg-slate-900
        dark:border-slate-700
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest updates from your HR Management System
          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition

            hover:bg-blue-700
          "
        >
          View All
          <ArrowRight size={16} />
        </button>

      </div>

      {/* Timeline */}

      <div className="relative">

        <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" />

        <div className="space-y-6">

          {activities.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 5,
                }}
                className="
                  relative
                  flex
                  gap-4
                  rounded-2xl
                  p-3
                  transition-all

                  hover:bg-slate-50

                  dark:hover:bg-slate-800
                "
              >

                {/* Icon */}

                <div
                  className={`
                    ${item.color}

                    relative
                    z-10

                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    text-white

                    shadow-lg
                  `}
                >
                  <Icon size={22} />
                </div>

                {/* Content */}

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-slate-500

                        dark:bg-slate-800
                      "
                    >
                      {item.time}
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </motion.div>
  );
}