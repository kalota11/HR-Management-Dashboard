"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            <CountUp end={value} duration={2} />
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} text-white shadow-lg`}
        >
          <Icon size={28} />
        </div>
      </div>
    </motion.div>
  );
}