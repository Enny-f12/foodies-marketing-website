"use client";

import { useState } from "react";
import { Zap, Layers, Trophy, Bot, ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  Icon:    LucideIcon;
  num:     string;
  title:   string;
  desc:    string;
  badge:   string | null;
  bullets: string[];
}

const features: Feature[] = [
  {
    Icon:  Zap,
    num:   "01",
    title: "Real-Time Inventory",
    desc:  "Never order what's out of stock. Our app shows live availability across all branches. If it says \"Only 2 left,\" it's really only 2 left.",
    badge: null,
    bullets: [
      "Live stock across all branches",
      "Instant out-of-stock alerts",
      "No order disappointments",
    ],
  },
  {
    Icon:  Layers,
    num:   "02",
    title: "Seamless Omnichannel",
    desc:  "One app. Three ways to enjoy. Reserve a table, order takeaway with QR pickup, or get delivery via Chowdeck, Bolt Food, or Glovo.",
    badge: null,
    bullets: [
      "Table reservations in-app",
      "QR-code takeaway pickup",
      "Chowdeck · Bolt Food · Glovo",
    ],
  },
  {
    Icon:  Trophy,
    num:   "03",
    title: "Smart Loyalty",
    desc:  "Earn points on every order. Redeem for discounts, unlock VIP tiers, and get exclusive access to new menu items and events.",
    badge: null,
    bullets: [
      "Points on every order",
      "VIP tier unlocks",
      "Exclusive menu early access",
    ],
  },
  {
    Icon:  Bot,
    num:   "04",
    title: "AI-Powered Recommendations",
    desc:  "Our app learns your preferences and suggests dishes you'll love. The more you order, the smarter it gets.",
    badge: "Coming Soon",
    bullets: [
      "Learns your taste profile",
      "Personalised dish suggestions",
      "Smarter with every order",
    ],
  },
];

export function WhyFoodiesSection() {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <>
      <style>{`
        /* Number watermark */
        .wf-num {
          font-family: var(--font-display);
          font-weight: 900;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        /* Tab button */
        .wf-tab {
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        /* Icon box */
        .wf-icon-box {
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1),
                      background 0.3s ease, border-color 0.3s ease;
        }
        .wf-tab:hover .wf-icon-box,
        .wf-tab.active .wf-icon-box {
          transform: scale(1.1) rotate(-5deg);
        }

        /* Bullet fade-in */
        @keyframes bulletIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        .bullet-item {
          animation: bulletIn 0.35s ease both;
        }
        .bullet-item:nth-child(1) { animation-delay: 0.05s; }
        .bullet-item:nth-child(2) { animation-delay: 0.12s; }
        .bullet-item:nth-child(3) { animation-delay: 0.19s; }

        /* Detail panel slide */
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .panel-in { animation: panelIn 0.4s cubic-bezier(.22,.68,0,1.1) both; }

        /* Progress bar */
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .progress-fill { animation: progressFill 3.2s linear both; }
      `}</style>

      <section style={{ background: "var(--color-bg)" }}>
        <div
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
        >

          {/* ── HEADER ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 shrink-0" style={{ background: "var(--color-primary)" }} />
                <span className="section-label">The Foodies Digital Experience</span>
              </div>
              <h2
                className="font-display font-black leading-tight"
                style={{ color: "var(--color-heading)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
              >
                Why Foodies Is{" "}
                <span className="text-gradient">Different</span>
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)", maxWidth: "260px" }}
            >
              Technology built to enhance the dining experience — never to replace it.
            </p>
          </div>

          {/* ── MAIN LAYOUT: tabs left + detail right  */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-3 lg:gap-4">

            {/* ─── LEFT: TAB LIST ──── */}
            <div className="flex flex-col gap-3">
              {features.map((feat, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={feat.title}
                    className={`wf-tab relative flex items-center gap-5 p-5 ${isActive ? "active" : ""}`}
                    style={{
                      background:  isActive ? "var(--color-bg-card)"  : "transparent",
                      border:      isActive
                        ? "1px solid var(--color-border)"
                        : "1px solid transparent",
                      cursor: "pointer",
                    }}
                    onClick={() => setActive(i)}
                  >
                    {/* Active left bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.75 transition-opacity duration-200"
                      style={{
                        background: "var(--color-primary)",
                        opacity:    isActive ? 1 : 0,
                      }}
                    />

                    {/* Icon box */}
                    <div
                      className="wf-icon-box shrink-0 flex items-center justify-center"
                      style={{
                        width:      "52px",
                        height:     "52px",
                        background: isActive
                          ? "color-mix(in srgb, var(--color-primary) 12%, transparent)"
                          : "var(--color-bg-soft)",
                        border: isActive
                          ? "1.5px solid color-mix(in srgb, var(--color-primary) 30%, transparent)"
                          : "1.5px solid var(--color-border)",
                      }}
                    >
                      <feat.Icon
                        size={22}
                        strokeWidth={1.6}
                        style={{
                          color: isActive
                            ? "var(--color-primary)"
                            : "var(--color-text-secondary)",
                        }}
                      />
                    </div>

                    {/* Title + desc preview */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3
                          className="font-display font-bold uppercase text-sm tracking-wide"
                          style={{
                            color: isActive ? "var(--color-heading)" : "var(--color-text-secondary)",
                            fontSize: "clamp(0.95rem,1.5vw,1.1rem)",
                            
                          }}
                        >
                          {feat.title}
                        </h3>
                        {feat.badge && (
                          <span
                            className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5"
                            style={{
                              background: "var(--color-on-ink-faint)",
                              color:      "var(--color-surface-ink)",
                            }}
                          >
                            {feat.badge}
                          </span>
                        )}
                      </div>
                      {/* Progress bar — only on active */}
                      {isActive && (
                        <div
                          className="h-0.5 w-full mt-2"
                          style={{ background: "var(--color-border)" }}
                        >
                          <div
                            key={`progress-${i}`}
                            className="progress-fill h-full"
                            style={{ background: "var(--color-primary)" }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Number */}
                    <span
                      className="wf-num shrink-0 text-xl"
                      style={{
                        color:   isActive ? "var(--color-primary)" : "var(--color-border)",
                        opacity: isActive ? 1 : 0.8,
                      }}
                    >
                      {feat.num}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ─── RIGHT: DETAIL PANEL ─────────────────────────────── */}
            <div
              key={active}
              className="panel-in relative flex flex-col justify-between overflow-hidden rounded-xl"
              style={{
                background: "var(--color-surface-ink)",
                minHeight:  "clamp(300px, 40vw, 420px)",
                padding:    "clamp(2rem,4vw,3rem)",
              }}
            >
              {/* Ambient glow */}
              <div
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none"
                style={{ background: "var(--color-primary)", opacity: 0.12 }}
              />

              {/* Watermark number */}
              <div
                className="wf-num absolute bottom-4 right-6 pointer-events-none select-none"
                style={{
                  fontSize: "clamp(7rem,12vw,11rem)",
                  color:    "var(--color-on-ink)",
                  opacity:  0.05,
                }}
              >
                {f.num}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width:      "64px",
                      height:     "64px",
                      background: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
                      border:     "1.5px solid color-mix(in srgb, var(--color-primary) 35%, transparent)",
                    }}
                  >
                    <f.Icon
                      size={28}
                      strokeWidth={1.5}
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  {f.badge && (
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.22em] px-3 py-1.5"
                      style={{
                        background: "var(--color-on-ink-faint)",
                        color:      "var(--color-surface-ink)",
                      }}
                    >
                      {f.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-black mb-4 leading-tight"
                  style={{
                    color:    "var(--color-on-ink)",
                    fontSize: "clamp(1.3rem,2.5vw,1.8rem)",
                  }}
                >
                  {f.title}
                </h3>

                {/* Desc */}
                <p
                  className="text-sm leading-relaxed mb-7"
                  style={{
                    color:    "var(--color-on-ink-muted)",
                    maxWidth: "420px",
                  }}
                >
                  {f.desc}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-3 mb-8">
                  {f.bullets.map((b) => (
                    <li key={b} className="bullet-item flex items-center gap-3">
                      <span
                        className="shrink-0 flex items-center justify-center w-5 h-5"
                        style={{
                          background: "var(--color-primary)",
                        }}
                      >
                        <Check size={11} strokeWidth={2.5} style={{ color: "var(--color-on-ink)" }} />
                      </span>
                      <span className="text-sm font-medium" style={{ color: "var(--color-on-ink-muted)" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA row */}
              <div
                className="relative z-10 flex items-center justify-between pt-5"
                style={{ borderTop: "1px solid var(--color-surface-ink-border)" }}
              >
                {/* Dot nav */}
                <div className="flex items-center gap-2">
                  {features.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="transition-all duration-200"
                      style={{
                        width:      active === i ? "24px" : "6px",
                        height:     "6px",
                        background: active === i ? "var(--color-primary)" : "var(--color-surface-ink-border)",
                        cursor:     "pointer",
                        border:     "none",
                        padding:    0,
                      }}
                    />
                  ))}
                </div>

                {/* Next feature arrow */}
                <button
                  onClick={() => setActive((active + 1) % features.length)}
                  className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
                  style={{ color: "var(--color-secondary)", background: "transparent", border: "none", cursor: "pointer" }}
                >
                  Next
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}