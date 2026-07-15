"use client";

import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  month: string;
  setMonth: (value: string) => void;

  year: string;
  setYear: (value: string) => void;
}

export default function AttendanceFilter({
  search,
  setSearch,
  month,
  setMonth,
  year,
  setYear,
}: Props) {
  return (
    <div className="w-full rounded-3xl border border-blue-100 bg-white p-4 sm:p-6 shadow-lg">
      <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Search */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0000FF]"
          />

          <input
            type="text"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-blue-200
              bg-white
              py-3.5
              pl-12
              pr-4
              text-[15px]
              font-medium
              text-gray-800
              placeholder:text-gray-400
              outline-none
              transition-all
              duration-300
              focus:border-[#0000FF]
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        {/* Month */}
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-blue-200
            bg-white
            px-4
            py-3.5
            text-[15px]
            font-medium
            text-gray-700
            outline-none
            transition-all
            duration-300
            focus:border-[#0000FF]
            focus:ring-4
            focus:ring-blue-100
          "
        >
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        {/* Year */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-blue-200
            bg-white
            px-4
            py-3.5
            text-[15px]
            font-medium
            text-gray-700
            outline-none
            transition-all
            duration-300
            focus:border-[#0000FF]
            focus:ring-4
            focus:ring-blue-100
          "
        >
          <option value="">Select Year</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
    </div>
  );
}