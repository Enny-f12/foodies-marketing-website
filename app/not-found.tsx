"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, UtensilsCrossed, ArrowRight } from "lucide-react";

type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Mouse parallax for the big 404 */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 20 });
  const moveX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center mt-15"
      style={{ background: "var(--color-surface-ink)" }}
    >

      {/* ── Ambient glows ── */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 rounded-full pointer-events-none"
        style={{ background: "var(--color-primary)", filter: "blur(120px)" }}
        animate={{ opacity: [0.07, 0.14, 0.07], scaleX: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "var(--color-secondary)", filter: "blur(120px)" }}
        animate={{ opacity: [0.05, 0.10, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* ── Giant ghost 404 — parallax ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ x: moveX, y: moveY }}
      >
        <motion.span
          className="font-display font-black"
          style={{
            fontSize:      "clamp(18rem, 35vw, 32rem)",
            letterSpacing: "-0.06em",
            lineHeight:    1,
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            color: "transparent",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          404
        </motion.span>
      </motion.div>

      {/* ── Diagonal accent line ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width:     "2px",
          height:    "clamp(120px, 20vw, 200px)",
          background: "linear-gradient(to bottom, var(--color-primary), transparent)",
          top:        "10%",
          right:      "12%",
          rotate:     "20deg",
          originY:    0,
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1, ease: spring1, delay: 0.6 }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width:     "1px",
          height:    "clamp(80px, 12vw, 120px)",
          background: "linear-gradient(to bottom, var(--color-secondary), transparent)",
          bottom:     "15%",
          left:       "8%",
          rotate:     "-15deg",
          originY:    0,
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: spring1, delay: 0.9 }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ maxWidth: "560px" }}>

        {/* Icon */}
        <motion.div
          className="flex items-center justify-center mb-8"
          style={{
            width:        "72px",
            height:       "72px",
            borderRadius: "50%",
            border:       "1.5px solid color-mix(in srgb, var(--color-primary) 40%, transparent)",
            background:   "color-mix(in srgb, var(--color-primary) 10%, transparent)",
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: spring2, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: -8, transition: { duration: 0.3, ease: spring2 } }}
        >
          <UtensilsCrossed size={30} strokeWidth={1.5} style={{ color: "var(--color-primary)" }} />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        >
          <motion.div
            className="h-px shrink-0"
            style={{ background: "var(--color-primary)" }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "var(--color-primary)" }}>
            Not Found
          </span>
          <motion.div
            className="h-px shrink-0"
            style={{ background: "var(--color-primary)" }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Headline */}
        <div className="mb-4 overflow-hidden">
          <motion.h1
            className="font-display font-black leading-tight"
            style={{
              fontSize:      "clamp(2.2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              color:         "var(--color-on-ink)",
            }}
            initial={{ y: 60, skewY: 3 }}
            animate={{ y: 0,  skewY: 0 }}
            transition={{ duration: 0.8, ease: spring1, delay: 0.3 }}
          >
            We&apos;re working to bring you{" "}
            <span style={{ color: "var(--color-primary)" }}>the best experience.</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          className="leading-relaxed mb-10"
          style={{
            color:    "var(--color-on-ink-muted)",
            fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
            maxWidth: "400px",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.55 }}
        >
          This page is currently under construction. Something great is on its way —
          stay tuned and check back soon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: spring1, delay: 0.65 }}
        >
          {/* Primary — go home */}
          <motion.div
            whileHover={{ y: -3, scale: 1.04, transition: { duration: 0.2, ease: spring2 } }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-7 py-3.5 font-bold text-xs uppercase tracking-widest rounded-xl"
              style={{ background: "var(--color-primary)", color: "white", position: "relative", overflow: "hidden" }}
            >
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  x: "-100%",
                }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Home size={15} />
              Back to Home
            </Link>
          </motion.div>

          {/* Secondary — view menu */}
          <motion.div
            whileHover={{ y: -3, scale: 1.04, transition: { duration: 0.2, ease: spring2 } }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-xs uppercase tracking-widest rounded-xl border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color:       "var(--color-on-ink-muted)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
                (e.currentTarget as HTMLElement).style.color       = "var(--color-on-ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.color       = "var(--color-on-ink-muted)";
              }}
            >
              View Our Menu
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="mt-10 text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.2)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Error 404 · Foodies Hot &amp; Spicy
        </motion.p>

      </div>
    </main>
  );
}