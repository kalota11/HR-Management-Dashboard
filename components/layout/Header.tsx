"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Bell,
  Moon,
  Sun,
  Search,
  ChevronDown,
  Menu,
  X,
  User,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function Header({
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target as Node
        )
      ) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(
          event.target as Node
        )
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className="
      sticky
      top-0
      z-40
      flex
      h-20
      items-center
      justify-between
      border-b
      border-slate-200
      bg-white/90
      backdrop-blur-xl
      px-6
      shadow-sm

      dark:border-slate-800
      dark:bg-slate-900/90
    "
    >
      {/* Left Side */}

      <div className="flex items-center gap-5">
        <button
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
          className="
          rounded-xl
          border
          border-slate-200
          p-2.5
          transition
          hover:bg-slate-100

          dark:border-slate-700
          dark:hover:bg-slate-800
          lg:hidden
        "
        >
          {sidebarOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

        {/* Search */}

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
          />

          <input
            type="text"
            placeholder="Search employees, teams..."
            className="
            w-[340px]
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            py-3
            pl-11
            pr-4
            text-sm
            outline-none
            transition

            focus:border-blue-500
            focus:bg-white

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
          "
          />
        </div>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">
                {/* Dark Mode */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-3
            transition-all
            hover:scale-105
            hover:bg-slate-100

            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-slate-600" />
          )}
        </button>

        {/* Notifications */}

        <div className="relative" ref={notificationRef}>
          <button
            onClick={() =>
              setNotificationOpen(!notificationOpen)
            }
            className="
              relative
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-3
              transition-all
              hover:scale-105
              hover:bg-slate-100

              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:bg-slate-700
            "
          >
            <Bell size={20} />

            <span
              className="
                absolute
                right-2
                top-2
                h-2.5
                w-2.5
                rounded-full
                bg-red-500
              "
            />
          </button>

          {notificationOpen && (
            <div
              className="
                absolute
                right-0
                mt-4
                w-80
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-2xl

                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <h3 className="mb-4 text-lg font-semibold">
                Notifications
              </h3>

              <div className="space-y-3">

                <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                  <p className="font-medium">
                    Ahmed joined Team
                  </p>

                  <p className="text-xs text-slate-500">
                    2 minutes ago
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                  <p className="font-medium">
                    New Department Created
                  </p>

                  <p className="text-xs text-slate-500">
                    10 minutes ago
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                  <p className="font-medium">
                    Role Updated Successfully
                  </p>

                  <p className="text-xs text-slate-500">
                    1 hour ago
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Profile */}

        <div
          className="relative"
          ref={profileRef}
        >
          <button
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-3
              py-2
              transition-all
              hover:bg-slate-100

              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:bg-slate-700
            "
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Admin"
              className="h-11 w-11 rounded-full border-2 border-blue-500"
            />

            <div className="hidden text-left lg:block">
              <h4 className="font-semibold text-slate-800 dark:text-white">
                Administrator
              </h4>

              <p className="text-xs text-slate-500">
                Super Admin
              </p>
            </div>

            <ChevronDown size={18} />
          </button>
                    {profileOpen && (
            <div
              className="
                absolute
                right-0
                mt-4
                w-72
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-2xl

                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Profile Header */}

              <div className="border-b border-slate-200 p-5 dark:border-slate-700">
                <div className="flex items-center gap-4">
                 <Image
  src="/ikftech-logo.png"
  alt="Admin"
  width={56}
  height={56}
  className="rounded-full border-2 border-blue-500"
/>

                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">
                      Administrator
                    </h3>

                    <p className="text-sm text-slate-500">
                      admin@ikftech.com
                    </p>

                    <span className="mt-1 inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-900/40 dark:text-green-400">
                      ● Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu */}

              <div className="p-2">

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    transition
                    hover:bg-slate-100

                    dark:hover:bg-slate-800
                  "
                >
                  <User size={18} />
                  My Profile
                </button>

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    transition
                    hover:bg-slate-100

                    dark:hover:bg-slate-800
                  "
                >
                  <Settings size={18} />
                  Account Settings
                </button>

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    transition
                    hover:bg-slate-100

                    dark:hover:bg-slate-800
                  "
                >
                  <HelpCircle size={18} />
                  Help & Support
                </button>

                <div className="my-2 border-t border-slate-200 dark:border-slate-700" />

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    font-medium
                    text-red-600
                    transition
                    hover:bg-red-50

                    dark:hover:bg-red-900/20
                  "
                >
                  <LogOut size={18} />
                  Logout
                </button>

              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}