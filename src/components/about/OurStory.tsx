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
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const leftPanelVariants: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const lineUnmask: Variants = {
  hidden:  { opacity: 0, y: 36, skewY: 3 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

const ruleVariants: Variants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.5 } },
};

const paragraphContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const paragraphItem: Variants = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

const dividerVariants: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 } },
};

/* ── Component ─────────────────────────────────────────────────────── */
const paragraphs = [
  "Foodies Hot & Spicy was born from a simple belief: that exceptional Nigerian cuisine deserves an equally exceptional dining experience.",
  "What started as a passion project in Lagos has grown into a destination for food lovers across Nigeria, with locations in Lekki and Maitama, Abuja.",
  "We're not just about great food. We're about reimagining what a restaurant can be in the digital age — why should technology diminish hospitality when it could enhance it?",
  "The answer became our mission: to blend the rich, authentic flavors of Nigeria with world-class digital convenience. To create an experience where tradition meets innovation.",
];

const headlineLines = ["A Passion Project", "That Became", "a Movement."];

export function OurStorySection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div
        ref={ref}
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
          style={{
            border:       "1px solid var(--color-border)",
            borderRadius: "var(--border-radius-lg, 12px)",
          }}
        >

          {/* ── LEFT PANEL ── */}
          <motion.div
            className="flex flex-col justify-between p-6 sm:p-10"
            style={{
              background:  "var(--color-bg-card)",
              borderRight: "1px solid var(--color-border)",
            }}
            variants={leftPanelVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div>
              {/* Label */}
              <motion.span
                className="block uppercase tracking-widest text-xs font-semibold mb-6"
                style={{ color: "var(--color-text-secondary)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our Story
              </motion.span>

              {/* Headline — line by line unmask */}
              <motion.h2
                className="font-display font-black leading-tight mb-6"
                style={{
                  color:    "var(--color-heading)",
                  fontSize: "clamp(1.6rem,3vw,2.2rem)",
                }}
                variants={headlineContainer}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {headlineLines.map((line) => (
                  <span
                    key={line}
                    style={{ display: "block", overflow: "hidden" }}
                  >
                    <motion.span
                      style={{ display: "block" }}
                      variants={lineUnmask}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>

              {/* Red rule — draws itself */}
              <motion.div
                style={{
                  width:      "2rem",
                  height:     "2px",
                  background: "var(--color-primary)",
                  originX:    0,
                  marginBottom: "1.5rem",
                }}
                variants={ruleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
            </div>
          </motion.div>

          {/* ── RIGHT PANEL: paragraphs ── */}
          <div
            className="flex flex-col p-6 sm:p-10"
            style={{ background: "var(--color-bg)" }}
          >
            <motion.div
              className="flex flex-col gap-5 flex-1"
              variants={paragraphContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {paragraphs.map((p, i) => (
                <motion.div key={i} variants={paragraphItem}>
                  <motion.p
                    className="leading-relaxed text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                    whileHover={{
                      color: "var(--color-heading)",
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {p}
                  </motion.p>

                  {i < paragraphs.length - 1 && (
                    <motion.div
                      className="mt-5"
                      style={{ height: "1px", background: "var(--color-border)" }}
                      variants={dividerVariants}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}