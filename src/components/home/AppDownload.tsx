"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";
import { AppStoreButtons } from "../ui/AppStoreButtons";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7,  ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};



const qrVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.7, rotate: -6 },
  visible: { opacity: 1, scale: 1,   rotate: 0,  transition: t2({ delay: 0.6 }) },
};

const lineVariants: Variants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.2 } },
};

/* ── Component ─────────────────────────────────────────────────────── */
export default function AppDownload() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section
      ref={ref}
      className="py-20 px-6 text-center relative overflow-hidden"
      style={{ background: "var(--color-surface-ink)" }}
    >

      {/* Ambient glow — breathes slowly */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 rounded-full pointer-events-none"
        style={{ background: "var(--color-primary)", filter: "blur(120px)" }}
        animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-2xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >

        {/* Section label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          variants={fadeIn}
        >
          <motion.div
            className="h-px"
            style={{ background: "var(--color-primary)", originX: 1 }}
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom="right"
          />
          <span className="section-label" style={{ color: "var(--color-on-ink-muted)" }}>
            Get the App
          </span>
          <motion.div
            className="h-px"
            style={{ background: "var(--color-primary)", originX: 0 }}
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        </motion.div>

        {/* Headline — words slide up individually */}
        <motion.h2
          className="font-display font-bold leading-none mb-4"
          style={{
            fontSize:      "clamp(2rem,4vw,3rem)",
            letterSpacing: "-0.03em",
            color:         "var(--color-on-ink)",
          }}
          variants={fadeUp}
        >
          Ready to Experience the{" "}
          <motion.span
            className="text-gradient"
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: spring1, delay: 0.3 }}
          >
            Future
          </motion.span>
          {" "}of Nigerian Dining?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mb-8 text-sm leading-relaxed"
          style={{ color: "var(--color-on-ink-muted)" }}
          variants={fadeUp}
        >
          Download the Foodies app today and get{" "}
          <motion.strong
            style={{ color: "var(--color-secondary)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, ease: spring2, delay: 0.4 }}
          >
            ₦2,000 off
          </motion.strong>{" "}
          your first order.
        </motion.p>

        {/* App buttons */}
        <div className="flex items-center justify-center mb-6">
          <AppStoreButtons/>
        </div>

        {/* Divider text */}
        <motion.p
          className="text-sm mb-4"
          style={{ color: "var(--color-on-ink-muted)" }}
          variants={fadeIn}
        >
          Or scan to download:
        </motion.p>

        {/* QR Code — pops in with rotation */}
        <motion.div
          className="flex justify-center mb-6"
          variants={qrVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="w-32 h-32 flex items-center justify-center rounded-lg bg-white p-2"
            whileHover={{
              scale: 1.08,
              rotate: 2,
              boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
              transition: { duration: 0.3, ease: spring2 },
            }}
          >
            <Image
              src="/qr-code.png"
              alt="Scan to download Foodies app"
              width={112}
              height={112}
            />
          </motion.div>
        </motion.div>

        {/* Terms */}
        <motion.p
          className="text-xs"
          style={{ color: "var(--color-on-ink-muted)" }}
          variants={fadeIn}
        >
          *Terms and conditions apply. New users only.
        </motion.p>

      </motion.div>
    </section>
  );
}