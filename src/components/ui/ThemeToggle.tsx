"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        fixed bottom-6 right-6 z-50
        w-16 h-8
        rounded-full
        border border-border
        bg-card
        shadow-lg shadow-black/30
        transition-all duration-300
        hover:border-primary
        hover:shadow-[0_0_16px_var(--color-primary)]/30
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        focus:ring-offset-background
        cursor-pointer
      "
    >
      {/* Track */}
      <span className="relative flex items-center w-full h-full px-1">

        {/* Sun icon — left side */}
        <span
          aria-hidden="true"
          className={`
            absolute left-1.5 text-[11px] transition-all duration-300
            ${isDark ? "opacity-30 scale-90" : "opacity-100 scale-100"}
          `}
        >
          ☀️
        </span>

        {/* Moon icon — right side */}
        <span
          aria-hidden="true"
          className={`
            absolute right-1.5 text-[11px] transition-all duration-300
            ${isDark ? "opacity-100 scale-100" : "opacity-30 scale-90"}
          `}
        >
          🌙
        </span>

        {/* Sliding pill thumb */}
        <span
          className={`
            absolute top-1 w-6 h-6 rounded-full
            bg-primary
            shadow-md
            transition-all duration-300 ease-in-out
            ${isDark ? "left-[calc(100%-1.75rem)]" : "left-1"}
          `}
        />
      </span>
    </button>
  );
}