"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
  //{ label: "Careers", href: "/careers" },
  //{ label: "Rewards", href: "/Loyalty-rewards" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-80 w-full backdrop-blur-md"
      style={{
        background: "var(--color-surface-ink)",
        borderBottom: "1px solid var(--color-surface-ink-border)",
        height: "80px",
      }}
    >
      <div
        className="max-w-7xl mx-auto h-full flex items-center justify-between gap-6"
        style={{ padding: "0 clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center  shrink-0">
          <Image
            src="/assets/Logo.png"
            alt="Foodies Hot & Spicy"
            width={60}
            height={20}
            className="object-contain mt-4 h-auto w-auto"
            loading="eager"

          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group"
                style={{
                  color: active ? "var(--color-on-ink)" : "var(--color-on-ink-muted)",
                }}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${active ? "w-full bg-primary" : "w-0 bg-primary group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300 hover:border-primary cursor-pointer focus:outline-none"
            style={{
              border: "1px solid var(--color-surface-ink-border)",
              color: "var(--color-on-ink)",
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Desktop CTA */}
          <Link
            href="/download"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-on-ink)",
            }}
          >
            Download App
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{
              border: "1px solid var(--color-surface-ink-border)",
              color: "var(--color-on-ink)",
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="lg:hidden absolute top-18 left-0 right-0 z-50 flex flex-col"
          style={{
            background: "var(--color-surface-ink)",
            borderBottom: "1px solid var(--color-surface-ink-border)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] py-3 transition-colors border-b"
                  style={{
                    color: active ? "var(--color-on-ink)" : "var(--color-on-ink-muted)",
                    borderColor: "var(--color-surface-ink-border)",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-6 py-4">
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-on-ink)",
              }}
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}