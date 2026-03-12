"use client";

import {
  UtensilsCrossed,
  Smartphone,
  Zap,
  Globe2,
  Gift,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
/* ── Data ──────── */
interface Item {
  Icon:      LucideIcon;
  num:       string;
  title:     string;
  desc:      string;
  tag:       string;
  accentVar: string; /* CSS variable name */
}

const items: Item[] = [
  {
    Icon:      UtensilsCrossed,
    num:       "01",
    title:     "Premium Dining",
    desc:      "Indoor & private dining sections across both locations — every seat designed for intimacy, every detail crafted for memory.",
    tag:       "Dine-In",
    accentVar: "--color-primary",
  },
  {
    Icon:      Smartphone,
    num:       "02",
    title:     "Digital Convenience",
    desc:      "Book tables, order takeaway, and track delivery in real-time — all from one beautifully designed app.",
    tag:       "App-Powered",
    accentVar: "--color-secondary",
  },
  {
    Icon:      Zap,
    num:       "03",
    title:     "Real-Time Inventory",
    desc:      "See live stock levels before you place your order. If it says available, it is available — no disappointments.",
    tag:       "Live Data",
    accentVar: "--color-primary",
  },
  {
    Icon:      Globe2,
    num:       "04",
    title:     "Authentic Cuisine",
    desc:      "Rich Nigerian heritage with a modern twist — 255+ dishes spanning soups, swallows, proteins, and intercontinental favourites.",
    tag:       "255+ Dishes",
    accentVar: "--color-secondary",
  },
  {
    Icon:      Gift,
    num:       "05",
    title:     "Loyalty Rewards",
    desc:      "Earn points on every order. Redeem for discounts, unlock VIP tiers, and get exclusive early access to new menu drops.",
    tag:       "VIP Tiers",
    accentVar: "--color-primary",
  },
  {
    Icon:      Briefcase,
    num:       "06",
    title:     "Corporate Services",
    desc:      "Bulk orders, event catering, and credit lines for businesses. Dedicated account managers for every corporate client.",
    tag:       "B2B",
    accentVar: "--color-secondary",
  },
];

/* ── Component ─────────────────────────────────────────────────────────────── */
export function ValuePropsSection() {
  return (
    <>
      <style>{`
        .vp-row {
          display: grid;
          grid-template-columns: 1fr;
          position: relative;
          transition: background 0.25s ease;
        }
        @media (min-width: 768px) {
          .vp-row { grid-template-columns: 1fr 1fr; }
          .vp-row.flip { direction: rtl; }
          .vp-row.flip > * { direction: ltr; }
        }

        /* accent bar slides in on hover */
        .vp-accent-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(.22,.68,0,1.2);
        }
        .vp-row:hover .vp-accent-bar { transform: scaleY(1); }

        /* icon container */
        .vp-icon-wrap {
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1);
        }
        .vp-row:hover .vp-icon-wrap { transform: scale(1.12) rotate(-4deg); }

        /* watermark number */
        .vp-watermark {
          font-family: var(--font-display);
          font-weight: 900;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          transition: opacity 0.3s ease;
        }
        .vp-row:hover .vp-watermark { opacity: 0.12 !important; }
      `}</style>

      <section style={{ background: "var(--color-bg)" }}>

        {/* Section header */}
        <div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          style={{ padding: "clamp(4rem,8vw,5.5rem) clamp(1.25rem,5vw,3rem) 0" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 shrink-0" style={{ background: "var(--color-primary)" }} />
              <span className="section-label">The Experience</span>
            </div>
            <h2
              className="font-display font-black leading-tight"
              style={{
                color:    "var(--color-heading)",
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
              }}
            >
             Dining is Better with  
              <span className="text-gradient"> Foodies</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "260px" }}
          >
            Technology that enhances hospitality — never replaces it.
          </p>
        </div>

        {/* Rows */}
        <div
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(2.5rem,5vw,4rem) clamp(1.25rem,5vw,3rem)" }}
        >
          {/* Top border */}
          <div className="h-px w-full mb-0" style={{ background: "var(--color-border)" }} />

          {items.map((item, i) => {
            const isFlip = i % 2 === 1;
            const { Icon, num, title, desc, tag, accentVar } = item;

            return (
              <div
                key={title}
                className={`vp-row group ${isFlip ? "flip" : ""}`}
                style={{
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {/* Sliding accent bar */}
                <div
                  className="vp-accent-bar"
                  style={{ background: `var(${accentVar})` }}
                />

                {/* ── LEFT CELL: icon + number ── */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    padding:     "clamp(2rem,4vw,3rem)",
                    borderRight: !isFlip ? "1px solid var(--color-border)" : "none",
                    borderLeft:  isFlip  ? "1px solid var(--color-border)" : "none",
                    minHeight:   "clamp(160px,18vw,220px)",
                    background:  "var(--color-bg-card)",
                  }}
                >
                  {/* Giant watermark number */}
                  <span
                    className="vp-watermark absolute inset-0 flex items-center justify-center"
                    style={{
                      fontSize: "clamp(7rem,14vw,11rem)",
                      color:    `var(${accentVar})`,
                      opacity:  0.15,
                    }}
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div
                    className="vp-icon-wrap relative z-10 flex items-center justify-center"
                    style={{
                      width:      "clamp(64px,8vw,88px)",
                      height:     "clamp(64px,8vw,88px)",
                      background: `color-mix(in srgb, var(${accentVar}) 10%, transparent)`,
                      border:     `1.5px solid color-mix(in srgb, var(${accentVar}) 40%, transparent)`,
                    }}
                  >
                    <Icon
                      size={32}
                      style={{ color: `var(${accentVar})` }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* ── RIGHT CELL: copy ── */}
                <div
                  className="flex flex-col justify-center"
                  style={{
                    padding:    "clamp(1.8rem,4vw,3rem) clamp(1.8rem,4vw,3rem)",
                    background: "var(--color-bg-soft)",
                  }}
                >
                  {/* Tag pill + number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.22em] px-2.5 py-1"
                      style={{
                        background: `color-mix(in srgb, var(${accentVar}) 12%, transparent)`,
                        color:      `var(${accentVar})`,
                        border:     `1px solid color-mix(in srgb, var(${accentVar}) 25%, transparent)`,
                      }}
                    >
                      {tag}
                    </span>
                    <span
                      className="font-display font-black text-xs"
                      style={{ color: "var(--color-on-ink-faint)" }}
                    >
                      {num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-black mb-3 leading-tight"
                    style={{
                      color:    "var(--color-heading)",
                      fontSize: "clamp(1.1rem,2vw,1.5rem)",
                    }}
                  >
                    {title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      color:    "var(--color-text-secondary)",
                      maxWidth: "380px",
                    }}
                  >
                    {desc}
                  </p>

                  {/* Animated underline link */}
                  <div className="flex items-center gap-2">
                    <Link href="/about" className="text-xs font-bold uppercase tracking-widest" style={{ color: `var(${accentVar})` }}>
                      Learn more
                    </Link>
                    <span
                      className="text-xs transition-transform duration-200 group-hover:translate-x-1 inline-block"
                      style={{ color: `var(${accentVar})` }}
                    >
                      →
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}