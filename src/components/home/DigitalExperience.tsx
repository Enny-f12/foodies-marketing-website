"use client";

import { useState, useRef } from "react";
import { Zap, Layers, Trophy, Bot, ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7,  ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

/* ── Data ──────────────────────────────────────────────────────────── */
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
    bullets: ["Live stock across all branches", "Instant out-of-stock alerts", "No order disappointments"],
  },
  {
    Icon:  Layers,
    num:   "02",
    title: "Seamless Omnichannel",
    desc:  "One app. Three ways to enjoy. Reserve a table, order takeaway with QR pickup, or get delivery via Chowdeck, Bolt Food, or Glovo.",
    badge: null,
    bullets: ["Table reservations in-app", "QR-code takeaway pickup", "Chowdeck · Bolt Food · Glovo"],
  },
  {
    Icon:  Trophy,
    num:   "03",
    title: "Smart Loyalty",
    desc:  "Earn points on every order. Redeem for discounts, unlock VIP tiers, and get exclusive access to new menu items and events.",
    badge: "Coming Soon",
    bullets: ["Points on every order", "VIP tier unlocks", "Exclusive menu early access"],
  },
  {
    Icon:  Bot,
    num:   "04",
    title: "AI-Powered Recommendations",
    desc:  "Our app learns your preferences and suggests dishes you'll love. The more you order, the smarter it gets.",
    badge: "Coming Soon",
    bullets: ["Learns your taste profile", "Personalised dish suggestions", "Smarter with every order"],
  },
];

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: t1() },
};

const lineVariants: Variants = {
  hidden:   { width: 0 },
  visible:  { width: 32, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 } },
};

const tabListVariants: Variants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const tabItemVariants: Variants = {
  hidden:   { opacity: 0, x: -24 },
  visible:  { opacity: 1, x: 0, transition: t1() },
};

/* Detail panel — slides in from right, exits left */
const panelVariants: Variants = {
  enter:  { opacity: 0, x: 40, scale: 0.97 },
  center: { opacity: 1, x: 0,  scale: 1,   transition: t1() },
  exit:   { opacity: 0, x: -30, scale: 0.97, transition: { duration: 0.3, ease: "easeIn" as const } },
};

/* Bullets stagger */
const bulletContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const bulletItem: Variants = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: t2() },
};

/* Watermark */
const watermarkVariants: Variants = {
  enter:  { opacity: 0, scale: 1.3 },
  center: { opacity: 0.05, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  exit:   { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

/* Icon pop */
const iconVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.5, rotate: -15 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: t2({ delay: 0.1 }) },
};

/* ── Progress bar (key-remounted per active) ───────────────────────── */
function ProgressBar() {
  return (
    <div className="h-0.5 w-full mt-2" style={{ background: "var(--color-border)" }}>
      <motion.div
        className="h-full"
        style={{ background: "var(--color-primary)" }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3.2, ease: "linear" }}
      />
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export function WhyFoodiesSection() {
  const [active, setActive] = useState(0);
  const f = features[active];

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >

        {/* ── HEADER ── */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="h-px shrink-0"
                style={{ background: "var(--color-primary)" }}
                variants={lineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
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
        </motion.div>

        {/* ── MAIN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-3 lg:gap-4">

          {/* ─── LEFT: TAB LIST ── */}
          <motion.div
            className="flex flex-col gap-3"
            variants={tabListVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {features.map((feat, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={feat.title}
                  className="relative flex items-center gap-5 p-5 cursor-pointer"
                  style={{
                    background:  isActive ? "var(--color-bg-card)" : "transparent",
                    border:      isActive ? "1px solid var(--color-border)" : "1px solid transparent",
                  }}
                  variants={tabItemVariants}
                  onClick={() => setActive(i)}
                  whileHover={{
                    background: isActive ? "var(--color-bg-card)" : "color-mix(in srgb, var(--color-bg-card) 60%, transparent)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active left bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.75"
                    style={{ background: "var(--color-primary)", originY: 0 }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: spring2 }}
                  />

                  {/* Icon box */}
                  <motion.div
                    className="shrink-0 flex items-center justify-center"
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
                    animate={{
                      scale:  isActive ? 1.08 : 1,
                      rotate: isActive ? -5 : 0,
                    }}
                    transition={{ duration: 0.4, ease: spring2 }}
                  >
                    <feat.Icon
                      size={22}
                      strokeWidth={1.6}
                      style={{
                        color: isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
                        transition: "color 0.2s ease",
                      }}
                    />
                  </motion.div>

                  {/* Title + progress */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3
                        className="font-display font-bold uppercase text-sm tracking-wide"
                        style={{
                          color:    isActive ? "var(--color-heading)" : "var(--color-text-secondary)",
                          fontSize: "clamp(0.95rem,1.5vw,1.1rem)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {feat.title}
                      </h3>
                      {feat.badge && (
                        <motion.span
                          className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5"
                          style={{
                            background: "var(--color-on-ink-faint)",
                            color:      "var(--color-surface-ink)",
                          }}
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {feat.badge}
                        </motion.span>
                      )}
                    </div>
                    {isActive && <ProgressBar key={`pb-${i}`} />}
                  </div>

                  {/* Number */}
                  <motion.span
                    className="shrink-0 text-xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                    animate={{
                      color:   isActive ? "var(--color-primary)" : "var(--color-border)",
                      opacity: isActive ? 1 : 0.8,
                      scale:   isActive ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feat.num}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ─── RIGHT: DETAIL PANEL ── */}
          <div
            className="relative overflow-hidden rounded-xl"
            style={{
              background: "var(--color-surface-ink)",
              minHeight:  "clamp(300px, 40vw, 420px)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative flex flex-col justify-between h-full"
                style={{ padding: "clamp(2rem,4vw,3rem)" }}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Ambient glow — color shifts per feature */}
                <motion.div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
                  style={{
                    background: "var(--color-primary)",
                    filter: "blur(80px)",
                    opacity: 0.12,
                  }}
                  animate={{
                    x: [0, 12, 0],
                    y: [0, -8, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Watermark number */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`wm-${active}`}
                    className="absolute bottom-4 right-6 pointer-events-none select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      lineHeight: 1,
                      fontSize:   "clamp(7rem,12vw,11rem)",
                      color:      "var(--color-on-ink)",
                    }}
                    variants={watermarkVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {f.num}
                  </motion.div>
                </AnimatePresence>

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="flex items-center justify-center"
                      style={{
                        width:      "64px",
                        height:     "64px",
                        background: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
                        border:     "1.5px solid color-mix(in srgb, var(--color-primary) 35%, transparent)",
                      }}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <f.Icon size={28} strokeWidth={1.5} style={{ color: "var(--color-primary)" }} />
                    </motion.div>

                    {f.badge && (
                      <motion.span
                        className="text-[9px] font-black uppercase tracking-[0.22em] px-3 py-1.5"
                        style={{
                          background: "var(--color-on-ink-faint)",
                          color:      "var(--color-surface-ink)",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: spring2, delay: 0.2 }}
                      >
                        {f.badge}
                      </motion.span>
                    )}
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="font-display font-black mb-4 leading-tight"
                    style={{
                      color:    "var(--color-on-ink)",
                      fontSize: "clamp(1.3rem,2.5vw,1.8rem)",
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: spring1, delay: 0.12 }}
                  >
                    {f.title}
                  </motion.h3>

                  {/* Desc */}
                  <motion.p
                    className="text-sm leading-relaxed mb-7"
                    style={{ color: "var(--color-on-ink-muted)", maxWidth: "420px" }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: spring1, delay: 0.2 }}
                  >
                    {f.desc}
                  </motion.p>

                  {/* Bullets */}
                  <motion.ul
                    className="flex flex-col gap-3 mb-8"
                    variants={bulletContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {f.bullets.map((b) => (
                      <motion.li key={b} className="flex items-center gap-3" variants={bulletItem}>
                        <motion.span
                          className="shrink-0 flex items-center justify-center w-5 h-5"
                          style={{ background: "var(--color-primary)" }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.35, ease: spring2 }}
                        >
                          <Check size={11} strokeWidth={2.5} style={{ color: "var(--color-on-ink)" }} />
                        </motion.span>
                        <span className="text-sm font-medium" style={{ color: "var(--color-on-ink-muted)" }}>
                          {b}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Bottom CTA row */}
                <motion.div
                  className="relative z-10 flex items-center justify-between pt-5"
                  style={{ borderTop: "1px solid var(--color-surface-ink-border)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                >
                  {/* Dot nav */}
                  <div className="flex items-center gap-2">
                    {features.map((_, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setActive(i)}
                        style={{
                          height:     "6px",
                          background: active === i ? "var(--color-primary)" : "var(--color-surface-ink-border)",
                          border:     "none",
                          padding:    0,
                          cursor:     "pointer",
                        }}
                        animate={{ width: active === i ? 24 : 6 }}
                        transition={{ duration: 0.3, ease: spring2 }}
                        whileHover={{ opacity: 0.7 }}
                      />
                    ))}
                  </div>

                  {/* Next arrow */}
                  <motion.button
                    onClick={() => setActive((active + 1) % features.length)}
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--color-secondary)", background: "transparent", border: "none", cursor: "pointer" }}
                    whileHover={{ x: 2, opacity: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    Next
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                      style={{ display: "inline-flex" }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.button>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}