"use client";
import Link from "next/link";
import { Zap, CalendarCheck, Truck, Gift, Apple, Play } from "lucide-react";

const features = [
  { icon: Zap, title: "Real-Time Inventory", desc: "See live stock before you order. No more disappointment." },
  { icon: CalendarCheck, title: "Table Reservations", desc: "Book in seconds, get confirmed instantly." },
  { icon: Truck, title: "Live Delivery Tracking", desc: "Track your order from kitchen to door." },
  { icon: Gift, title: "Loyalty Rewards", desc: "Earn points on every order. Redeem for discounts." },
];

export function MenuCTA() {
  return (
    <section
      className="relative overflow-hidden transition-colors duration-500"
      // Swapped surface-ink for a variable that changes based on theme
      style={{ background: "var(--color-bg)" }} 
    >
      {/* Decorative glow — adjusted to be visible but subtle in both modes */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-48 blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary)", opacity: 0.06 }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 shrink-0" style={{ background: "var(--color-primary)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-primary)" }}
              >
                Get the App
              </span>
            </div>
            <h2
              className="font-display font-black leading-tight mb-4"
              style={{
                color: "var(--color-heading)",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              }}
            >
              Hungry for More?
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
                maxWidth: "min(100%,460px)",
              }}
            >
              Our full menu with 255+ items, complete descriptions, and
              real-time availability is waiting for you in the app.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* App Store */}
              <Link
                href="/download"
                className="btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm"
                style={{
                  background: "var(--color-heading)", // Dark in light mode, Light in dark mode
                  color: "var(--color-bg)",
                }}
              >
                <Apple size={22} strokeWidth={2.5} fill="currentColor" />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[9px] uppercase tracking-widest opacity-60 font-semibold">Download on the</span>
                  <span className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-helvena)" }}>App Store</span>
                </span>
              </Link>

              {/* Google Play */}
              <Link
                href="/download"
                className="btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm"
                style={{
                  background: "var(--color-primary)",
                  color: "white",
                }}
              >
                <Play size={20} strokeWidth={2.5} fill="currentColor" />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[9px] uppercase tracking-widest opacity-80 font-semibold">Get it on</span>
                  <span className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-helvena)" }}>Google Play</span>
                </span>
              </Link>
            </div>

            <p className="mt-6 text-sm font-medium italic opacity-60" style={{ color: "var(--color-text-secondary)" }}>
              See what&apos;s fresh. Order what&apos;s good.
            </p>
          </div>

          {/* Right — feature list */}
          <div className="flex flex-col gap-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all hover:translate-x-1"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="shrink-0 mt-0.5 flex items-center justify-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "var(--color-primary-faint)",
                  }}
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5" style={{ color: "var(--color-heading)" }}>
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}