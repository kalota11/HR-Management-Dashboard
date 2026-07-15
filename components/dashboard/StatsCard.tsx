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
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="
      group
      bg-white
      rounded-3xl
      border
      border-blue-100
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      p-6
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            <CountUp
              end={value}
              duration={2}
            />
          </h2>

        </div>

        <div
          style={{
            backgroundColor: color,
          }}
          className="
          h-16
          w-16
          rounded-2xl
          flex
          items-center
          justify-center
          shadow-xl
          group-hover:rotate-6
          transition-all
          duration-300
          "
        >
          <Icon
            size={30}
            className="text-white"
          />
        </div>

      </div>

      <div
        className="mt-6 h-1 rounded-full"
        style={{
          backgroundColor: color,
        }}
      />
    </motion.div>
  );
}