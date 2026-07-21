"use client";

import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  TrendingUp,
  Users,
} from "lucide-react";

const monthlyData = [
  { month: "Jan", attendance: 120, leave: 30 },
  { month: "Feb", attendance: 210, leave: 42 },
  { month: "Mar", attendance: 180, leave: 25 },
  { month: "Apr", attendance: 290, leave: 50 },
  { month: "May", attendance: 240, leave: 32 },
  { month: "Jun", attendance: 300, leave: 48 },
  { month: "Jul", attendance: 340, leave: 41 },
  { month: "Aug", attendance: 310, leave: 38 },
  { month: "Sep", attendance: 390, leave: 54 },
  { month: "Oct", attendance: 430, leave: 45 },
  { month: "Nov", attendance: 370, leave: 36 },
  { month: "Dec", attendance: 350, leave: 40 },
];

const attendanceSummary = [
  {
    title: "Present",
    value: 228,
    percent: 92,
    color: "bg-blue-600",
  },
  {
    title: "Leave",
    value: 10,
    percent: 4,
    color: "bg-green-500",
  },
  {
    title: "Late",
    value: 8,
    percent: 4,
    color: "bg-orange-500",
  },
];

export default function DashboardCharts() {

  return (

    <div className="grid gap-6 xl:grid-cols-3">

      {/* Left Card */}

      <motion.div

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        className="
        xl:col-span-2

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
              Attendance Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Monthly employee attendance report
            </p>

          </div>

          <div className="flex gap-2">

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
              Day
            </button>

            <button className="rounded-lg border px-4 py-2 text-sm">
              Week
            </button>

            <button className="rounded-lg border px-4 py-2 text-sm">
              Month
            </button>

          </div>

        </div>

        {/* Chart */}

        <div className="h-[360px]">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={monthlyData}>

              <defs>

                <linearGradient
                  id="attendance"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#2563EB"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#2563EB"
                    stopOpacity={0}
                  />

                </linearGradient>

                <linearGradient
                  id="leave"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#14B8A6"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#14B8A6"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="month"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="attendance"
                stroke="#2563EB"
                strokeWidth={3}
                fill="url(#attendance)"
              />

              <Area
                type="monotone"
                dataKey="leave"
                stroke="#14B8A6"
                strokeWidth={3}
                fill="url(#leave)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </motion.div>
            {/* Right Side Summary */}

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.2,
        }}
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

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Attendance Summary
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Todays Employee Status
            </p>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
            <Users size={28} />
          </div>

        </div>

        {/* Summary Cards */}

        <div className="space-y-6">

          {attendanceSummary.map((item) => (

            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-slate-200
                p-4
                transition-all
                duration-300

                hover:border-blue-300
                hover:shadow-lg

                dark:border-slate-700
              "
            >

              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className={`h-4 w-4 rounded-full ${item.color}`}
                  />

                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </span>

                </div>

                <span className="font-bold text-slate-900 dark:text-white">
                  {item.value}
                </span>

              </div>

              {/* Progress */}

              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${item.percent}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className={`h-2 rounded-full ${item.color}`}
                />

              </div>

              <div className="mt-2 flex justify-end">

                <span className="text-xs font-semibold text-slate-500">
                  {item.percent}%
                </span>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Card */}

        <div
          className="
            mt-8
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            p-5
            text-white
            shadow-xl
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-blue-100">
                Monthly Growth
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                +18%
              </h2>

              <p className="mt-2 flex items-center gap-2 text-sm text-blue-100">
                <TrendingUp size={16} />
                Attendance improved this month
              </p>

            </div>

            <div className="rounded-2xl bg-white/20 p-4">
              <TrendingUp size={34} />
            </div>

          </div>

        </div>

      </motion.div>

    </div>

  );
}
