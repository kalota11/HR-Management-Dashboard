"use client";

import { LogIn, Coffee, Clock, LogOut } from "lucide-react";

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
      icon: <LogIn size={22} />,
      action: checkIn,
    },
    {
      title: "Break-In",
      time: attendance.breakIn,
      icon: <Coffee size={22} />,
      action: breakIn,
    },
    {
      title: "Break-Out",
      time: attendance.breakOut,
      icon: <Clock size={22} />,
      action: breakOut,
    },
    {
      title: "Check-Out",
      time: attendance.checkOut,
      icon: <LogOut size={22} />,
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
    if (index === 0) return action();
    if (index === 1 && attendance.checkIn) return action();
    if (index === 2 && attendance.breakIn) return action();
    if (index === 3 && attendance.breakOut) return action();
  };

  return (
    <div className="w-full rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
      <h2 className="mb-10 text-3xl font-bold text-[#0000FF]">
        Todays Attendance
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="relative flex items-start justify-between">
          {/* Progress Line */}
          <div className="absolute left-6 right-6 top-8 h-1 rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-[#0000FF] transition-all duration-500"
              style={{
                width:
                  activeStep === -1
                    ? "0%"
                    : `${(activeStep / 3) * 100}%`,
              }}
            />
          </div>

          {steps.map((step, index) => {
            const disabled =
              (index === 1 && !attendance.checkIn) ||
              (index === 2 && !attendance.breakIn) ||
              (index === 3 && !attendance.breakOut);

            return (
              <div
                key={index}
                className="relative z-10 flex w-28 flex-col items-center"
              >
                <button
                  onClick={() => handleClick(index, step.action)}
                  disabled={disabled}
                  className={`
                    flex h-16 w-16 items-center justify-center rounded-full border-4
                    transition-all duration-300

                    ${
                      step.time
                        ? "border-[#0000FF] bg-[#0000FF] text-white shadow-lg"
                        : "border-blue-200 bg-white text-blue-500"
                    }

                    ${
                      disabled
                        ? "cursor-not-allowed opacity-40"
                        : "cursor-pointer hover:scale-105 hover:shadow-2xl"
                    }
                  `}
                >
                  {step.icon}
                </button>

                <h3 className="mt-4 text-base font-semibold text-gray-800 text-center">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {step.time || "--:--"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}