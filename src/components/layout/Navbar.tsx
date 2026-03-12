"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "Menu",    href: "/menu" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md"
      style={{
        background:   "var(--color-surface-ink)",
        borderBottom: "1px solid var(--color-surface-ink-border)",
        height:       "72px",
      }}
    >
      <div
        className="max-w-7xl mx-auto h-full flex items-center justify-between gap-6"
        style={{ padding: "0 clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Logo - Yellow used as a small high-impact accent */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div
            className="w-8 h-8 flex items-center justify-center font-black text-sm transition-transform group-hover:rotate-12"
            style={{
              background: "var(--color-primary)",
              color:      "var(--color-surface-ink)",
            }}
          >
            F
          </div>
          <div className="leading-none">
            <p
              className="font-display font-black text-sm tracking-tight"
              style={{ color: "var(--color-on-ink)" }}
            >
              FOODIES
            </p>
            <p
              className="text-[9px] uppercase tracking-[0.2em] font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              HOT &amp; SPICY
            </p>
          </div>
        </Link>

        {/* Nav links - Neutral White/Gray for high-end look */}
        <nav className="hidden md:flex items-center gap-10 flex-1 justify-center">
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
                {/* Modern Indicator: Red line for active, Yellow for hover */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    active ? "w-full bg-primary" : "w-0 bg-primary group-hover:w-full"
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Refined Theme toggle 
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-(--color-surface-ink-border) transition-colors hover:bg-white/5 cursor-pointer"
          >
            <span className="text-sm">{theme === "dark" ? "☀️" : "🌙"}</span>
          </button>*/}

          {/* Primary CTA - Brand Red */}
          <Link
            href="/download"
            className="hidden rounded-xl sm:inline-flex items-center gap-2 px-6 py-2.5 font-bold text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            style={{
              background: "var(--color-primary)",
              color:      "var(--color-on-ink)",
            }}
          >
            Download App
          </Link>
        </div>
      </div>
    </header>
  );
}