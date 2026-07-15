"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock,
  XCircle,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Users,
  Timer,
} from "lucide-react";

interface Attendance {
  id: number;
  name: string;
  department: string;
  date: string; // expected format: YYYY-MM-DD
  checkIn: string;
  breakIn: string;
  breakOut: string;
  checkOut: string;
  workingHours: string; // e.g. "8h" or "7.5h"
  status: string; // "Present" | "Late" | "Absent"
}

interface Props {
  attendance: Attendance[];
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type SortKey = "name" | "date" | "workingHours";
type SortOrder = "asc" | "desc";

const PAGE_SIZE = 8;

function parseHours(value: string) {
  if (!value) return 0;
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  return isNaN(num) ? 0 : num;
}

// Moved outside the main component so it isn't re-created on every render
function SortIcon({
  column,
  sortKey,
  sortOrder,
}: {
  column: SortKey;
  sortKey: SortKey;
  sortOrder: SortOrder;
}) {
  if (sortKey !== column) return null;
  return sortOrder === "asc" ? (
    <ChevronUp size={14} className="inline ml-1" />
  ) : (
    <ChevronDown size={14} className="inline ml-1" />
  );
}

// Moved outside the main component so it isn't re-created on every render
function StatusBadge({ status }: { status: string }) {
  if (status === "Present") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
        <CheckCircle2 size={16} />
        Present
      </span>
    );
  }
  if (status === "Late") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
        <Clock size={16} />
        Late
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
      <XCircle size={16} />
      Absent
    </span>
  );
}

export default function AttendanceTable({ attendance }: Props) {
  const now = new Date();

  const [search, setSearch] = useState("");
  const [month, setMonth] = useState<number>(now.getMonth()); // 0-11
  const [year, setYear] = useState<number>(now.getFullYear());
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [page, setPage] = useState(1);

  // Years available from data (fallback to current year range)
  const years = useMemo(() => {
    const set = new Set<number>();
    attendance.forEach((a) => {
      const d = new Date(a.date);
      if (!isNaN(d.getTime())) set.add(d.getFullYear());
    });
    set.add(now.getFullYear());
    return Array.from(set).sort((a, b) => b - a);
  }, [attendance]);

  // Filter by month + year
  const monthlyFiltered = useMemo(() => {
    return attendance.filter((item) => {
      const d = new Date(item.date);
      if (isNaN(d.getTime())) return false;
      return d.getMonth() === month && d.getFullYear() === year;
    });
  }, [attendance, month, year]);

  // Search on top of monthly filter
  const searched = useMemo(() => {
    if (!search.trim()) return monthlyFiltered;
    const q = search.toLowerCase();
    return monthlyFiltered.filter((item) =>
      [item.name, item.department].join(" ").toLowerCase().includes(q)
    );
  }, [monthlyFiltered, search]);

  // Sorting
  const sorted = useMemo(() => {
    const copy = [...searched];
    copy.sort((a, b) => {
      let compareValue = 0;

      if (sortKey === "name") {
        compareValue = a.name.localeCompare(b.name);
      } else if (sortKey === "date") {
        compareValue = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortKey === "workingHours") {
        compareValue = parseHours(a.workingHours) - parseHours(b.workingHours);
      }

      return sortOrder === "asc" ? compareValue : -compareValue;
    });
    return copy;
  }, [searched, sortKey, sortOrder]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = sorted.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Summary (based on the full monthly filter, not search/pagination)
  const summary = useMemo(() => {
    const present = monthlyFiltered.filter((a) => a.status === "Present").length;
    const late = monthlyFiltered.filter((a) => a.status === "Late").length;
    const absent = monthlyFiltered.filter((a) => a.status === "Absent").length;
    const totalHours = monthlyFiltered.reduce(
      (sum, a) => sum + parseHours(a.workingHours),
      0
    );
    return { present, late, absent, totalHours };
  }, [monthlyFiltered]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setPage(1);
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow p-5 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="text-[#0000ff]" size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Present</p>
              <h2 className="text-2xl font-bold text-green-600">
                {summary.present}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Clock className="text-[#0000ff]" size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Late</p>
              <h2 className="text-2xl font-bold text-yellow-600">
                {summary.late}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <XCircle className="text-[#0000ff]" size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Absent</p>
              <h2 className="text-2xl font-bold text-red-600">
                {summary.absent}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Timer className="text-[#0000ff]" size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Working Hours</p>
              <h2 className="text-2xl font-bold text-[#0000ff]">
                {summary.totalHours.toFixed(1)}h
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-3xl border border-blue-100 shadow-lg p-4 sm:p-6">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0000FF]">
            Attendance Records
          </h2>

          <p className="mt-2 text-gray-500 text-sm sm:text-base font-medium">
            Employee attendance history
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search by name or department..."
              className="w-full border border-blue-200 rounded-xl pl-10 pr-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:border-transparent"
            />
          </div>

          <select
            value={month}
            onChange={(e) => {
              setMonth(Number(e.target.value));
              setPage(1);
            }}
            className="border border-blue-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0000ff]"
          >
            {MONTHS.map((m, idx) => (
              <option key={m} value={idx}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value));
              setPage(1);
            }}
            className="border border-blue-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0000ff]"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop / tablet table view */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-blue-50 border-b border-blue-100">
                <th
                  onClick={() => toggleSort("name")}
                  className="p-4 text-left text-sm font-bold uppercase tracking-wider text-[#0000FF] cursor-pointer select-none"
                >
                  Employee{" "}
                  <SortIcon column="name" sortKey={sortKey} sortOrder={sortOrder} />
                </th>

                <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                  Department
                </th>

                <th
                  onClick={() => toggleSort("date")}
                  className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF] cursor-pointer select-none"
                >
                  Date{" "}
                  <SortIcon column="date" sortKey={sortKey} sortOrder={sortOrder} />
                </th>

                <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                  Check-In
                </th>

                <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                  Break-In
                </th>

                <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                  Break-Out
                </th>

                <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                  Check-Out
                </th>

                <th
                  onClick={() => toggleSort("workingHours")}
                  className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF] cursor-pointer select-none"
                >
                  Working Hours{" "}
                  <SortIcon
                    column="workingHours"
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                  />
                </th>

                <th className="p-4 text-sm font-bold uppercase tracking-wider text-[#0000FF]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {paginated.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-300"
                >
                  <td className="p-4">
                    <div>
                      <h3 className="text-[15px] font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-500 mt-1">
                        Employee
                      </p>
                    </div>
                  </td>

                  <td className="p-4 text-[15px] font-medium text-gray-700">
                    {item.department}
                  </td>

                  <td className="p-4 text-[15px] font-medium text-gray-700">
                    {item.date}
                  </td>

                  <td className="p-4 text-[15px] font-bold text-[#0000FF]">
                    {item.checkIn || "--"}
                  </td>

                  <td className="p-4 text-[15px] font-medium text-gray-700">
                    {item.breakIn || "--"}
                  </td>

                  <td className="p-4 text-[15px] font-medium text-gray-700">
                    {item.breakOut || "--"}
                  </td>

                  <td className="p-4 text-[15px] font-medium text-gray-700">
                    {item.checkOut || "--"}
                  </td>

                  <td className="p-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-[#0000FF]">
                      {item.workingHours || "0h"}
                    </span>
                  </td>

                  <td className="p-4">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))}

              {paginated.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-gray-400">
                    No attendance records found for this period.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="md:hidden space-y-4">
          {paginated.map((item) => (
            <div
              key={item.id}
              className="border border-blue-100 rounded-xl p-4 flex flex-col gap-3 bg-white shadow-sm"
            >
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.department}</p>
                </div>
                <StatusBadge status={item.status} />
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-400">Date</p>
                  <p className="font-medium">{item.date}</p>
                </div>
                <div>
                  <p className="text-gray-400">Working Hours</p>
                  <p className="font-medium text-[#0000ff]">
                    {item.workingHours || "0h"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Check-In</p>
                  <p className="font-medium">{item.checkIn || "--"}</p>
                </div>
                <div>
                  <p className="text-gray-400">Check-Out</p>
                  <p className="font-medium">{item.checkOut || "--"}</p>
                </div>
                <div>
                  <p className="text-gray-400">Break-In</p>
                  <p className="font-medium">{item.breakIn || "--"}</p>
                </div>
                <div>
                  <p className="text-gray-400">Break-Out</p>
                  <p className="font-medium">{item.breakOut || "--"}</p>
                </div>
              </div>
            </div>
          ))}

          {paginated.length === 0 && (
            <p className="py-8 text-center text-gray-400">
              No attendance records found for this period.
            </p>
          )}
        </div>

        {/* Pagination */}
        {sorted.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-blue-50">
            <p className="text-sm text-gray-500">
              Showing {(currentPage - 1) * PAGE_SIZE + 1}-
              {Math.min(currentPage * PAGE_SIZE, sorted.length)} of{" "}
              {sorted.length} records
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-blue-100 text-[#0000ff] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-200 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="text-sm font-medium text-gray-700 px-2">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-blue-100 text-[#0000ff] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-200 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}