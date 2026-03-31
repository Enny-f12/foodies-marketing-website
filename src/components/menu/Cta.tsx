"use client";

import { useRef } from "react";
import { Zap, CalendarCheck, Truck, Gift } from "lucide-react";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";
import { AppStoreButtons } from "../ui/AppStoreButtons";

/* ── Easing ──── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });

/* ── Variants ──── */
const leftVariants: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 32, transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.15 } },
};

const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const lineUnmask: Variants = {
  hidden:  { opacity: 0, y: 32, skewY: 2 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

const subCopy: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: t1({ delay: 0.25 }) },
};



const taglineVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 0.6, transition: { duration: 0.6, delay: 0.65 } },
};

const featureListVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const featureItem: Variants = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

/* ── Data ──────────────────────────────────────────────────────────── */
const features = [
  { icon: Zap,           title: "Real-Time Inventory",   desc: "See live stock before you order. No more disappointment."   },
  { icon: CalendarCheck, title: "Table Reservations",    desc: "Book in seconds, get confirmed instantly."                   },
  { icon: Truck,         title: "Live Delivery Tracking",desc: "Track your order from kitchen to door."                     },
  { icon: Gift,          title: "Loyalty Rewards",       desc: "Earn points on every order. Redeem for discounts."          },
];

/* ── Component ─────────────────────────────────────────────────────── */
export function MenuCTA() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      className="relative overflow-hidden transition-colors duration-500"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Decorative glow — breathes */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-48 pointer-events-none"
        style={{ background: "var(--color-primary)", filter: "blur(80px)" }}
        animate={{ opacity: [0.05, 0.1, 0.05], scaleX: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── Left: text + buttons ── */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Eyebrow */}
            <motion.div className="flex items-center gap-3 mb-4">
              <motion.div
                className="h-px shrink-0"
                style={{ background: "var(--color-primary)" }}
                variants={lineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-secondary)" }}
              >
                Get the App
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-display font-black leading-tight mb-4"
              style={{
                color:    "var(--color-primary)",
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              }}
              variants={headlineContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {["Hungry", "for More?"].map((word) => (
                <span
                  key={word}
                  style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em" }}
                >
                  <motion.span style={{ display: "inline-block" }} variants={lineUnmask}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h2>

            {/* Sub copy */}
            <motion.p
              className="mb-8 leading-relaxed"
              style={{
                color:    "var(--color-text-secondary)",
                fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
                maxWidth: "min(100%,460px)",
              }}
              variants={subCopy}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Our full menu with 255+ items, complete descriptions, and
              real-time availability is waiting for you in the app.
            </motion.p>

            {/* App buttons */}
           <div className=" mb-6">
            <AppStoreButtons align="left"/>
           </div>
            {/* Tagline */}
            <motion.p
              className="mt-6 text-sm font-medium italic"
              style={{ color: "var(--color-text-secondary)" }}
              variants={taglineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              See what&apos;s fresh. Order what&apos;s good.
            </motion.p>
          </motion.div>

          {/* ── Right: feature cards ── */}
          <motion.div
            className="flex flex-col gap-3"
            variants={featureListVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background:  "var(--color-bg-card)",
                  border:      "1px solid var(--color-border)",
                }}
                variants={featureItem}
                whileHover={{
                  x: 6,
                  borderColor: "color-mix(in srgb, var(--color-primary) 35%, transparent)",
                  background:  "color-mix(in srgb, var(--color-primary) 4%, var(--color-bg-card))",
                  transition:  { duration: 0.2 },
                }}
              >
                {/* Icon box */}
                <motion.div
                  className="shrink-0 mt-0.5 flex items-center justify-center"
                  style={{
                    width:        "40px",
                    height:       "40px",
                    borderRadius: "12px",
                    background:   "var(--color-primary-faint)",
                  }}
                  whileHover={{
                    scale:      1.15,
                    rotate:     -6,
                    background: "color-mix(in srgb, var(--color-primary) 18%, transparent)",
                    transition: { duration: 0.3, ease: spring2 },
                  }}
                >
                  <Icon size={18} strokeWidth={2} style={{ color: "var(--color-primary)" }} />
                </motion.div>

                <div>
                  <motion.p
                    className="font-bold text-sm mb-0.5"
                    style={{ color: "var(--color-heading)" }}
                    whileHover={{ color: "var(--color-primary)", transition: { duration: 0.2 } }}
                  >
                    {title}
                  </motion.p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}