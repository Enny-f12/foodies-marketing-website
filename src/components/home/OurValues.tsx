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
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";
import { useRef } from "react";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];

const t1 = (extra?: Partial<Transition>): Transition => ({
  duration: 0.7, ease: spring1, ...extra,
});
const t2 = (extra?: Partial<Transition>): Transition => ({
  duration: 0.5, ease: spring2, ...extra,
});

/* ── Data ──────────────────────────────────────────────────────────── */
interface Item {
  Icon:      LucideIcon;
  num:       string;
  title:     string;
  desc:      string;
  tag:       string;
  accentVar: string;
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

/* ── Variants ──────────────────────────────────────────────────────── */
const rowVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -12 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: t2({ delay: 0.15 }) },
};

const watermarkVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 0.15, x: 0, transition: t1({ delay: 0.1 }) },
};

const copyVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const copyChild: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

/* ── Row component (each row observes itself) ──────────────────────── */
function ValueRow({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const isFlip = index % 2 === 1;
  const { Icon, num, title, desc, tag, accentVar } = item;

  return (
    <motion.div
      ref={ref}
      className={`vp-row group ${isFlip ? "flip" : ""}`}
      style={{ borderBottom: "1px solid var(--color-border)", position: "relative" }}
      variants={rowVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Sliding accent bar */}
      <motion.div
        className="vp-accent-bar"
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: "3px",
          background: `var(${accentVar})`,
          originY: 0,
        }}
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: spring2 }}
      />

      {/* ── LEFT CELL: icon + watermark ── */}
      <motion.div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          padding:     "clamp(2rem,4vw,3rem)",
          borderRight: !isFlip ? "1px solid var(--color-border)" : "none",
          borderLeft:  isFlip  ? "1px solid var(--color-border)" : "none",
          minHeight:   "clamp(160px,18vw,220px)",
          background:  "var(--color-bg-card)",
        }}
      >
        {/* Watermark number */}
        <motion.span
          className="vp-watermark absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            fontSize: "clamp(7rem,14vw,11rem)",
            color: `var(${accentVar})`,
          }}
          variants={watermarkVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{ opacity: 0.08, transition: { duration: 0.3 } }}
        >
          {num}
        </motion.span>

        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          style={{
            width:      "clamp(64px,8vw,88px)",
            height:     "clamp(64px,8vw,88px)",
            background: `color-mix(in srgb, var(${accentVar}) 10%, transparent)`,
            border:     `1.5px solid color-mix(in srgb, var(${accentVar}) 40%, transparent)`,
          }}
          variants={iconVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.12,
            rotate: -4,
            transition: { duration: 0.4, ease: spring2 },
          }}
        >
          <Icon
            size={32}
            style={{ color: `var(${accentVar})` }}
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>

      {/* ── RIGHT CELL: copy ── */}
      <motion.div
        className="flex flex-col justify-center"
        style={{
          padding:    "clamp(1.8rem,4vw,3rem)",
          background: "var(--color-bg-soft)",
        }}
        variants={copyVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Tag + number */}
        <motion.div className="flex items-center gap-3 mb-3" variants={copyChild}>
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
        </motion.div>

        {/* Title */}
        <motion.h3
          className="font-display font-black mb-3 leading-tight"
          style={{
            color:    "var(--color-heading)",
            fontSize: "clamp(1.1rem,2vw,1.5rem)",
          }}
          variants={copyChild}
        >
          {title}
        </motion.h3>

        {/* Desc */}
        <motion.p
          className="text-sm leading-relaxed mb-4"
          style={{
            color:    "var(--color-text-secondary)",
            maxWidth: "380px",
          }}
          variants={copyChild}
        >
          {desc}
        </motion.p>

        {/* Link */}
        <motion.div
          className="flex items-center gap-2"
          variants={copyChild}
        >
          <Link
            href="/about"
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: `var(${accentVar})` }}
          >
            Learn more
          </Link>
          <motion.span
            className="text-xs inline-block"
            style={{ color: `var(${accentVar})` }}
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main component ────────────────────────────────────────────────── */
export function ValuePropsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px 0px" });

  return (
    <section style={{ background: "var(--color-bg)" }}>

      {/* Section header */}
      <motion.div
        ref={headerRef}
        className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        style={{ padding: "clamp(4rem,8vw,5.5rem) clamp(1.25rem,5vw,3rem) 0" }}
        variants={headerVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="h-px shrink-0"
              style={{ background: "var(--color-primary)" }}
              initial={{ width: 0 }}
              animate={headerInView ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
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
      </motion.div>

      {/* Rows */}
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(2.5rem,5vw,4rem) clamp(1.25rem,5vw,3rem)" }}
      >
        <div className="h-px w-full mb-0" style={{ background: "var(--color-border)" }} />

        {items.map((item, i) => (
          <ValueRow key={item.title} item={item} index={i} />
        ))}
      </div>

      {/* CSS for flip grid */}
      <style>{`
        .vp-row {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .vp-row { grid-template-columns: 1fr 1fr; }
          .vp-row.flip { direction: rtl; }
          .vp-row.flip > * { direction: ltr; }
        }
      `}</style>
    </section>
  );
}