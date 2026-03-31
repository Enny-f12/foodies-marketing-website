"use client";

import { useRef } from "react";
import { Leaf, Users, Lightbulb, Smartphone } from "lucide-react";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 28, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.15 } },
};

const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const lineUnmask: Variants = {
  hidden:  { opacity: 0, y: 32, skewY: 2 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

const gridVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

/* ── Data ──────────────────────────────────────────────────────────── */
const pillars = [
  {
    icon:  Leaf,
    num:   "01",
    title: "Sustainability",
    desc:  "We embrace sustainability, supporting local farmers, and reducing waste through smart inventory management.",
  },
  {
    icon:  Users,
    num:   "02",
    title: "Community",
    desc:  "We give back to the communities that nourish us, actively involved in local initiatives and charities.",
  },
  {
    icon:  Lightbulb,
    num:   "03",
    title: "Innovation",
    desc:  "We innovate constantly. Our menu is never done — we find inspiration in new ingredients, new approaches, and fresh takes on old standards.",
  },
  {
    icon:  Smartphone,
    num:   "04",
    title: "You in Control",
    desc:  "We put you in control. Whether you are dining in, taking away, or ordering delivery, our digital platform puts seamless hospitality at your fingertips.",
  },
];

/* ── Component ─────────────────────────────────────────────────────── */
export function PhilosophySection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-surface-ink)" }}
    >
      {/* Ambient glow — breathes */}
      <motion.div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "var(--color-primary)", filter: "blur(100px)" }}
        animate={{ opacity: [0.04, 0.09, 0.04], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto"
        style={{ padding: "clamp(3.5rem,7vw,6rem) clamp(1.25rem,5vw,4rem)" }}
      >

        {/* ── Header ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.div className="flex items-center gap-3 mb-5" variants={fadeUp}>
            <motion.div
              className="h-px shrink-0"
              style={{ background: "var(--color-secondary)" }}
              variants={lineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.28em]"
              style={{ color: "var(--color-secondary)" }}
            >
              Our Philosophy
            </span>
          </motion.div>

          {/* Pull quote — line unmask */}
          <motion.h2
            className="font-display font-bold leading-none mb-5"
            style={{
              fontSize:      "clamp(1.8rem,4vw,3.2rem)",
              letterSpacing: "-0.03em",
              color:         "var(--color-on-ink)",
              maxWidth:      "min(100vw,900px)",
            }}
            variants={headlineContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {["Not just our meals —", "an experience", "in taste & hospitality."].map((line, i) => (
              <span key={line} style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  style={{
                    display: "block",
                    color: i === 1 ? "var(--color-primary)" : "var(--color-on-ink)",
                  }}
                  variants={lineUnmask}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* Sub */}
          <motion.p
            className="leading-relaxed mb-14"
            style={{
              color:    "rgba(255,255,255,0.6)",
              fontSize: "clamp(0.875rem,1.6vw,1rem)",
              maxWidth: "min(90vw,480px)",
            }}
            variants={fadeUp}
          >
            At Foodies, we believe technology should never replace human
            connection — it should amplify it.
          </motion.p>
        </motion.div>

        {/* ── Pillars grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
          variants={gridVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="flex flex-col relative"
                style={{
                  padding:     "32px 28px",
                  borderRight: i < pillars.length - 1
                    ? "0.5px solid rgba(255,255,255,0.07)"
                    : "none",
                  cursor: "default",
                }}
                variants={cardVariants}
                /* ── Card hover ── */
                whileHover={{
                  background: "rgba(255,255,255,0.03)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Top accent line slides down on hover */}
                <motion.div
                  style={{
                    position:   "absolute",
                    top:        0,
                    left:       "28px",
                    right:      "28px",
                    height:     "1.5px",
                    background: "var(--color-primary)",
                    originX:    0,
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: spring2 }}
                />

                {/* Number */}
                <motion.div
                  className="text-[10px] font-bold tracking-[0.2em] mb-6"
                  style={{ color: "rgba(200,64,42,0.5)" }}
                  whileHover={{ color: "rgba(200,64,42,0.85)", transition: { duration: 0.2 } }}
                >
                  {p.num}
                </motion.div>

                {/* Icon ring */}
                <motion.div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width:        "44px",
                    height:       "44px",
                    borderRadius: "50%",
                    border:       "0.5px solid rgba(255,255,255,0.1)",
                    flexShrink:   0,
                  }}
                  whileHover={{
                    scale:       1.15,
                    rotate:      -8,
                    borderColor: "rgba(200,64,42,0.5)",
                    background:  "rgba(200,64,42,0.1)",
                    transition:  { duration: 0.35, ease: spring2 },
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    style={{ color: "var(--color-on-ink)" }}
                  />
                </motion.div>

                {/* Title */}
                <motion.h5
                  className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3"
                  style={{ color: "var(--color-on-ink)" }}
                  whileHover={{ letterSpacing: "0.3em", transition: { duration: 0.3 } }}
                >
                  {p.title}
                </motion.h5>

                {/* Desc */}
                <motion.p
                  className="text-[13px] leading-relaxed flex-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  whileHover={{ color: "rgba(255,255,255,0.85)", transition: { duration: 0.2 } }}
                >
                  {p.desc}
                </motion.p>

                {/* Accent bar — expands on hover */}
                <motion.div
                  className="mt-7"
                  style={{
                    height:     "1.5px",
                    background: "var(--color-primary)",
                    originX:    0,
                  }}
                  initial={{ width: "24px" }}
                  whileHover={{ width: "48px", transition: { duration: 0.3, ease: spring2 } }}
                />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}