"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.8, ease: spring1, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const eyebrowVariants: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: t1({ delay: 0.1 }) },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 32, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 } },
};

const wordVariants: Variants = {
  hidden:  { opacity: 0, y: 40, skewY: 4 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

/* ── Component ─────────────────────────────────────────────────────── */
export function AboutHero() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  const words = ["Where", "Tradition", "Meets", "Innovation."];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-end"
      style={{
        background: "var(--color-surface-ink)",
        minHeight:  "clamp(280px,40vw,420px)",
        paddingTop: "72px",
      }}
    >
      {/* Gold glow top-right — drifts slowly */}
      <motion.div
        className="absolute top-0 right-0 w-125 h-125 rounded-full pointer-events-none"
        style={{ background: "var(--color-secondary)", filter: "blur(80px)" }}
        animate={{ opacity: [0.08, 0.14, 0.08], x: [0, 16, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Red glow bottom-left — counter-drifts */}
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "var(--color-primary)", filter: "blur(80px)" }}
        animate={{ opacity: [0.06, 0.12, 0.06], x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ padding: "clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={eyebrowVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="h-px shrink-0"
            style={{ background: "var(--color-secondary)" }}
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
          <span
            className="text-xs font-semibold tracking-widest"
            style={{ color: "var(--color-secondary)", fontFamily: "var(--font-helvena)" }}
          >
            Our Story
          </span>
        </motion.div>

        {/* Headline — each word unmasks upward */}
        <motion.h1
          className=" font-black leading-tight"
          style={{
            fontFamily: "var(--font-nord)",
            color:    "var(--color-on-ink)",
            fontSize: "clamp(2.4rem,6vw,4.5rem)",
            maxWidth: "min(90vw,720px)",
          }}
          variants={headlineContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {words.map((word) => (
            /* Each word clips from a hidden overflow container */
            <span
              key={word}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em", textTransform: "capitalize" }}
            >
              <motion.span
                style={{
                  display: "inline-block",
                  color: word === "Meets" ? undefined : "var(--color-on-ink)",
                }}
                className={word === "Meets" ? "text-gradient" : ""}
                variants={wordVariants}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Animated bottom border line */}
        <motion.div
          className="mt-8 h-px"
          style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary), transparent)", originX: 0 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        />
      </div>
    </section>
  );
}