"use client";

import { CheckCircle2, Clock, XCircle, Timer } from "lucide-react";

interface Summary {
  present: number;
  late: number;
  absent: number;
  totalHours: number;
}

interface Props {
  summary: Summary;
}

export default function AttendanceStats({ summary }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-white rounded-2xl shadow p-5 border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-3 rounded-xl">
            <CheckCircle2 className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Present</p>
            <h2 className="text-2xl font-bold text-green-600">{summary.present}</h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-5 border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-100 p-3 rounded-xl">
            <Clock className="text-yellow-600" size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Late</p>
            <h2 className="text-2xl font-bold text-yellow-600">{summary.late}</h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-5 border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-3 rounded-xl">
            <XCircle className="text-red-600" size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Absent</p>
            <h2 className="text-2xl font-bold text-red-600">{summary.absent}</h2>
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
  );
}