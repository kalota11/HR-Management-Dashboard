"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  month: string;
  setMonth: (value: string) => void;

  year: string;
  setYear: (value: string) => void;
}

const MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

export default function AttendanceFilter({
  search,
  setSearch,
  month,
  setMonth,
  year,
  setYear,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Year currently shown inside the popover (navigable independently of
  // the actually-selected year, so the user can browse before picking).
  const [viewYear, setViewYear] = useState<number>(
    year ? Number(year) : new Date().getFullYear()
  );

  const popoverRef = useRef<HTMLDivElement>(null);

  // Close the popover on outside click.
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelectMonth(m: string) {
    setMonth(m);
    setYear(String(viewYear));
    setIsOpen(false);
  }

  function openPopover() {
    setViewYear(year ? Number(year) : new Date().getFullYear());
    setIsOpen((v) => !v);
  }

  const label = month && year ? `${month} ${year}` : "Select Month";

  return (
    <div className="w-full rounded-3xl border border-blue-100 bg-white p-4 sm:p-6 shadow-lg">
      <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2">
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

        {/* Calendar month/year picker */}
        <div className="relative" ref={popoverRef}>
          <button
            type="button"
            onClick={openPopover}
            className="
              w-full
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-blue-200
              bg-white
              px-4
              py-3.5
              text-left
              text-[15px]
              font-medium
              text-gray-700
              outline-none
              transition-all
              duration-300
              focus:border-[#0000FF]
              focus:ring-4
              focus:ring-blue-100
              hover:border-[#0000FF]
            "
          >
            <Calendar size={20} className="text-[#0000FF] shrink-0" />
            <span className={month ? "text-gray-800" : "text-gray-400"}>
              {label}
            </span>
          </button>

          {isOpen && (
            <div
              className="
                absolute
                z-20
                mt-2
                w-full
                min-w-[280px]
                rounded-2xl
                border
                border-blue-100
                bg-white
                p-4
                shadow-xl
              "
            >
              {/* Year navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={() => setViewYear((y) => y - 1)}
                  className="p-1.5 rounded-lg hover:bg-blue-50 text-[#0000FF] transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>

                <span className="text-sm font-bold text-gray-800">
                  {viewYear}
                </span>

                <button
                  type="button"
                  onClick={() => setViewYear((y) => y + 1)}
                  className="p-1.5 rounded-lg hover:bg-blue-50 text-[#0000FF] transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Month grid */}
              <div className="grid grid-cols-3 gap-2">
                {MONTHS.map((m) => {
                  const selected = m === month && String(viewYear) === year;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => handleSelectMonth(m)}
                      className={`
                        rounded-xl
                        px-2
                        py-2
                        text-xs
                        font-semibold
                        transition-colors
                        ${
                          selected
                            ? "bg-[#0000FF] text-white"
                            : "text-gray-600 hover:bg-blue-50"
                        }
                      `}
                    >
                      {m.slice(0, 3)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}