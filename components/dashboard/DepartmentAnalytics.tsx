"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import {
  Building2,
  TrendingUp,
} from "lucide-react";

const data = [
  {
    name: "IT",
    value: 40,
    employees: 98,
  },
  {
    name: "HR",
    value: 20,
    employees: 46,
  },
  {
    name: "Design",
    value: 15,
    employees: 37,
  },
  {
    name: "Marketing",
    value: 25,
    employees: 64,
  },
];

const COLORS = [
  "#2563EB",
  "#7C3AED",
  "#14B8A6",
  "#F97316",
];

export default function DepartmentAnalytics() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-slate-200

        bg-white

        p-8

        shadow-lg

        dark:bg-slate-900
        dark:border-slate-700
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Header */}

      <div className="relative mb-8 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-3xl

              bg-gradient-to-br
              from-blue-600
              to-indigo-700

              shadow-xl
            "
          >
            <Building2
              className="text-white"
              size={30}
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Department Analytics
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Employee distribution across departments
            </p>

          </div>

        </div>

        <div
          className="
            rounded-2xl

            bg-blue-50

            px-5
            py-3

            dark:bg-slate-800
          "
        >
          <div className="flex items-center gap-2">

            <TrendingUp
              size={18}
              className="text-blue-600"
            />

            <span className="font-semibold text-blue-600">
              +12%
            </span>

          </div>

          <p className="mt-1 text-xs text-slate-500">
            This Month
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Chart */}

        <div className="relative h-[340px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={4}
              >

                {data.map((item, index) => (

                  <Cell
                    key={item.name}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                  background: "#fff",
                  boxShadow:
                    "0 15px 40px rgba(0,0,0,.08)",
                }}
              />

            </PieChart>

          </ResponsiveContainer>

          {/* Center Circle */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              flex
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
              justify-center

              rounded-full

              border
              border-slate-200

              bg-white

              shadow-lg

              dark:bg-slate-800
              dark:border-slate-700
            "
          >

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              245
            </h3>

            <p className="text-xs text-slate-500">
              Employees
            </p>

          </div>

        </div>
                {/* Right Side */}

        <div className="flex flex-col justify-center gap-5">

          {data.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-5
                transition-all
                duration-300

                hover:border-blue-300
                hover:shadow-lg

                dark:border-slate-700
                dark:bg-slate-800
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className="h-4 w-4 rounded-full"
                    style={{
                      backgroundColor: COLORS[index],
                    }}
                  />

                  <div>

                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {item.employees} Employees
                    </p>

                  </div>

                </div>

                <span
                  className="rounded-full px-3 py-1 text-sm font-bold text-white"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                >
                  {item.value}%
                </span>

              </div>

              {/* Progress */}

              <div className="mt-4">

                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${item.value}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: COLORS[index],
                    }}
                  />

                </div>

              </div>

            </motion.div>

          ))}

          {/* Summary Card */}

          <div
            className="
              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-purple-600

              p-6

              text-white

              shadow-xl
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-blue-100">
                  Total Departments
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {data.length}
                </h2>

                <p className="mt-2 text-sm text-blue-100">
                  245 Employees Across All Departments
                </p>

              </div>

              <Building2 size={44} />

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}