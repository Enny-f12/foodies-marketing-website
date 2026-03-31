"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.8, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.5, ease: spring2, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const eyebrowVariants: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: t1({ delay: 0.1 }) },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 32, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 } },
};

const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const wordUnmask: Variants = {
  hidden:  { opacity: 0, y: 44, skewY: 3 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

const subRowVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.55 } },
};

const subCopy: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const ctaVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.9, y: 12 },
  visible: { opacity: 1, scale: 1,   y: 0,  transition: t2({ delay: 0.65 }) },
};

/* ── Component ─────────────────────────────────────────────────────── */
export function MenuHero() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-end"
      style={{
        background: "var(--color-surface-ink)",
        minHeight:  "clamp(260px,38vw,400px)",
        paddingTop: "72px",
      }}
    >
      {/* Background image — ken-burns zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.07 }}
          transition={{ duration: 12, ease: "easeOut" }}
        >
          <Image
            src="https://i.pinimg.com/1200x/73/f8/a9/73f8a962194665f8ff4a72d0267f0fff.jpg"
            alt="Nigerian food spread"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Directional overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(6,4,2,0.95) 0%, rgba(6,4,2,0.78) 45%, rgba(6,4,2,0.4) 100%)",
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(6,4,2,0.7) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Ambient red glow — breathes */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none z-1"
        style={{ background: "var(--color-primary)", filter: "blur(100px)" }}
        animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Culinary Heritage
          </span>
        </motion.div>

        {/* Headline — word by word unmask */}
        <motion.h1
          className="font-display font-black leading-tight mb-4"
          style={{
            textTransform: "capitalize",
            color:    "var(--color-on-ink)",
            fontSize: "clamp(2.4rem,6vw,4.5rem)",
            maxWidth: "min(90vw,640px)",
          }}
          variants={headlineContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {(["Explore", "Our"] as const).map((word) => (
            <span
              key={word}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em" }}
            >
              <motion.span style={{ display: "inline-block" }} variants={wordUnmask}>
                {word}
              </motion.span>
            </span>
          ))}
          {/* "Menu" — accent colour, same unmask */}
          <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
            <motion.span
              style={{ display: "inline-block", color: "var(--color-primary)" }}
              variants={wordUnmask}
            >
              Menu
            </motion.span>
          </span>
        </motion.h1>

        {/* Bottom gradient line after headline */}
        <motion.div
          className="mb-6"
          style={{
            height:     "1.5px",
            maxWidth:   "320px",
            background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary), transparent)",
            originX:    0,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
        />

        {/* Sub-copy + CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-between"
          variants={subRowVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p
            className="leading-relaxed"
            style={{
              color:    "var(--color-on-ink-muted)",
              fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
              maxWidth: "min(90vw,460px)",
            }}
            variants={subCopy}
          >
            Over 255 authentic Nigerian and international dishes,
            crafted with passion and precision.
          </motion.p>

          <motion.div variants={ctaVariants}>
            <motion.div
              whileHover={{ y: -3, scale: 1.04, transition: { duration: 0.2, ease: spring2 } }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/download"
                className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-widest rounded-xl shrink-0"
                style={{
                  background: "var(--color-primary)",
                  color:      "var(--color-bg-input)",
                  position:   "relative",
                  overflow:   "hidden",
                }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    x: "-100%",
                  }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                View Full Menu in App →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}