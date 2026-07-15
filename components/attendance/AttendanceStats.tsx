"use client";

import {
  LogIn,
  Coffee,
  Clock,
  LogOut,
} from "lucide-react";

interface AttendanceState {
  checkIn: string;
  breakIn: string;
  breakOut: string;
  checkOut: string;
}

interface Props {
  attendance: AttendanceState;
  checkIn: () => void;
  breakIn: () => void;
  breakOut: () => void;
  checkOut: () => void;
}

export default function AttendanceStats({
  attendance,
  checkIn,
  breakIn,
  breakOut,
  checkOut,
}: Props) {
  const steps = [
    {
      title: "Check-In",
      time: attendance.checkIn,
      icon: <LogIn size={20} />,
      action: checkIn,
    },
    {
      title: "Break-In",
      time: attendance.breakIn,
      icon: <Coffee size={20} />,
      action: breakIn,
    },
    {
      title: "Break-Out",
      time: attendance.breakOut,
      icon: <Clock size={20} />,
      action: breakOut,
    },
    {
      title: "Check-Out",
      time: attendance.checkOut,
      icon: <LogOut size={20} />,
      action: checkOut,
    },
  ];

  const activeStep = attendance.checkOut
    ? 3
    : attendance.breakOut
    ? 2
    : attendance.breakIn
    ? 1
    : attendance.checkIn
    ? 0
    : -1;

  const handleClick = (index: number, action: () => void) => {
    if (index === 0) action();

    if (index === 1 && attendance.checkIn) action();

    if (index === 2 && attendance.breakIn) action();

    if (index === 3 && attendance.breakOut) action();
  };

  return (
    <div className="w-full rounded-3xl border border-blue-100 bg-white p-5 sm:p-8 shadow-lg">
      <h2 className="mb-8 sm:mb-12 text-xl sm:text-3xl font-extrabold tracking-tight text-[#0000FF]">
        Today&apos;s Attendance
      </h2>

      <div className="relative w-full overflow-x-auto">
        <div className="relative flex min-w-[420px] sm:min-w-[650px] items-start justify-between">
          {/* Progress Line */}
          <div className="absolute left-8 right-8 sm:left-12 sm:right-12 top-6 sm:top-7 h-1 rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-[#0000FF] transition-all duration-700"
              style={{
                width:
                  activeStep === -1
                    ? "0%"
                    : `${(activeStep / 3) * 100}%`,
              }}
            />
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex w-20 sm:w-32 flex-col items-center"
            >
              <button
                onClick={() => handleClick(index, step.action)}
                disabled={
                  (index === 1 && !attendance.checkIn) ||
                  (index === 2 && !attendance.breakIn) ||
                  (index === 3 && !attendance.breakOut)
                }
                className={`
                  flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 transition-all duration-300

                  ${
                    step.time
                      ? "border-[#0000FF] bg-[#0000FF] text-white shadow-xl"
                      : "border-blue-200 bg-white text-blue-500"
                  }

                  ${
                    (index === 1 && !attendance.checkIn) ||
                    (index === 2 && !attendance.breakIn) ||
                    (index === 3 && !attendance.breakOut)
                      ? "cursor-not-allowed opacity-40"
                      : "hover:scale-110 hover:shadow-xl"
                  }
                `}
              >
                {step.icon}
              </button>

              <h3 className="mt-3 sm:mt-5 text-xs sm:text-base font-bold tracking-wide text-gray-800 text-center">
                {step.title}
              </h3>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-500">
                {step.time || "--:--"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}