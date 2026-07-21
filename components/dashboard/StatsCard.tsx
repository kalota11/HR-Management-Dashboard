"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  trend?: string;
  positive?: boolean;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
  trend = "+12%",
  positive = true,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-slate-200/80

        bg-white/90
        backdrop-blur-xl

        p-6

        shadow-lg

        transition-all
        duration-300

        hover:border-blue-300
        hover:shadow-2xl

        dark:bg-slate-900
        dark:border-slate-700
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          opacity-10
          blur-3xl
        "
        style={{
          backgroundColor: color,
        }}
      />

      <div className="relative z-10 flex items-start justify-between">

        {/* Left */}

        <div>

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wide

              text-slate-500

              dark:text-slate-400
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-4

              text-4xl
              font-bold

              text-slate-900

              dark:text-white
            "
          >
            <CountUp
              end={value}
              duration={2}
              separator=","
            />
          </h2>

        </div>

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
          style={{
            backgroundColor: color,
          }}
          className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-2xl

            shadow-xl
          "
        >
          <Icon
            size={30}
            className="text-white"
          />
        </motion.div>

      </div>

      {/* Bottom */}

      <div className="relative z-10 mt-8 flex items-center justify-between">

        <span
          className={`
            rounded-full

            px-3
            py-1

            text-xs
            font-semibold

            ${
              positive
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-600"
            }
          `}
        >
          {trend}
        </span>

        <span
          className="
            text-xs

            text-slate-500

            dark:text-slate-400
          "
        >
          vs last month
        </span>

      </div>

      {/* Progress */}

      <div className="relative z-10 mt-6">

        <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "80%",
            }}
            transition={{
              duration: 1.4,
            }}
            className="h-2 rounded-full"
            style={{
              backgroundColor: color,
            }}
          />

        </div>

      </div>

    </motion.div>
  );
}