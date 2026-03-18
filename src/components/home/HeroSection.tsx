"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
  type Transition,
} from "framer-motion";
import { Calendar, Database, Gift, MapPin } from "lucide-react";
import { AppStoreButtons } from "../ui/AppStoreButtons";


type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];

const t1 = (extra?: Partial<Transition>): Transition => ({
  duration: 0.72, ease: spring1, ...extra,
});
const t2 = (extra?: Partial<Transition>): Transition => ({
  duration: 0.45, ease: spring2, ...extra,
});
const t3 = (extra?: Partial<Transition>): Transition => ({
  duration: 0.55, ease: spring1, ...extra,
});
const tEase = (extra?: Partial<Transition>): Transition => ({
  duration: 0.6, ease: "easeOut" as const, ...extra,
});

/* ── Shared variants ─── */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tEase() },
};

const pillContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } },
};

const pillItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: t2() },
};

const statContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } },
};

const statItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: t3() },
};

/* ── 3-D magnetic dish card ─── */
function DishCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* Float loop */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* 3-D tilt */}
        <motion.div
          className="flex flex-col items-center gap-5"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <div style={{ position: "relative", width: "300px", height: "300px" }}>

            {/* Spinning dashed ring 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 },
                rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              }}
              style={{
                position: "absolute", inset: "-10px", borderRadius: "50%",
                border: "1.5px dashed rgba(200,64,42,0.4)",
              }}
            />

            {/* Spinning dashed ring 2 — counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, rotate: -360 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.8 },
                scale: { duration: 0.8, delay: 0.8 },
                rotate: { duration: 28, repeat: Infinity, ease: "linear" },
              }}
              style={{
                position: "absolute", inset: "-22px", borderRadius: "50%",
                border: "0.5px dashed rgba(200,169,110,0.2)",
              }}
            />

            {/* Solid accent ring */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.75 }}
              transition={{ duration: 0.9, ease: spring2, delay: 0.5 }}
              style={{
                position: "absolute", inset: "-4px", borderRadius: "50%",
                border: "2px solid var(--color-primary)",
              }}
            />

            {/* Circle image — clip reveal */}
            <motion.div
              initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
              animate={{ clipPath: "circle(50% at 50% 50%)", opacity: 1 }}
              transition={{ duration: 1, ease: spring1, delay: 0.35 }}
              style={{
                position: "relative", width: "100%", height: "100%",
                borderRadius: "50%", overflow: "hidden",
              }}
            >
              <Image
                src="https://i.pinimg.com/736x/a0/94/e6/a094e650124f0595a342b833a2e17b1a.jpg"
                alt="Party Jollof"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "linear-gradient(to top, rgba(6,4,2,0.65) 0%, transparent 55%)",
              }} />
            </motion.div>

            {/* Trending badge */}
            <motion.div
              initial={{ opacity: 0, x: 16, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: spring2, delay: 1.1 }}
              style={{
                position: "absolute", top: "14px", right: "-8px",
                background: "var(--color-primary)", color: "var(--color-on-ink)",
                fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em",
                textTransform: "uppercase", padding: "4px 10px",
              }}
            >
              Trending
            </motion.div>

            {/* Price badge */}
            <motion.div
              initial={{ opacity: 0, x: -16, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: spring2, delay: 1.2 }}
              style={{
                position: "absolute", bottom: "18px", left: "-12px",
                background: "rgba(6,4,2,0.92)", border: "0.5px solid rgba(255,255,255,0.1)",
                padding: "6px 12px",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--color-secondary)" }}>
                ₦3,000
              </span>
            </motion.div>

            {/* Open dot */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.3 }}
              style={{
                position: "absolute", bottom: "24px", right: "8px",
                display: "flex", alignItems: "center", gap: "5px",
                background: "rgba(6,4,2,0.85)", padding: "4px 8px",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ position: "relative", display: "flex", width: "7px", height: "7px" }}>
                <motion.span
                  animate={{ scale: [1, 2], opacity: [0.7, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                  style={{
                    position: "absolute", inset: 0, borderRadius: "50%",
                    background: "var(--color-success)",
                  }}
                />
                <span style={{
                  position: "relative", width: "7px", height: "7px",
                  borderRadius: "50%", background: "var(--color-success)",
                }} />
              </span>
              <span style={{
                fontSize: "9px", fontWeight: 600, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
              }}>
                Open
              </span>
            </motion.div>

          </div>

          {/* Dish name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            style={{ textAlign: "center" }}
          >
            <p style={{
              fontSize: "9px", fontWeight: 600, letterSpacing: "0.28em",
              textTransform: "uppercase", color: "var(--color-secondary)", marginBottom: "4px",
            }}>
              Fan Favourite
            </p>
            <p className="font-display font-black" style={{
              fontSize: "1.4rem", color: "var(--color-on-ink)", letterSpacing: "-0.02em",
            }}>
              Party Jollof
            </p>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Main export ─── */
export function HeroSection() {
  return (
    <>
      <div style={{ height: "72px" }} />

      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "calc(100svh - 72px)" }}
      >
        {/* Background ken-burns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 12, ease: "easeOut" }}
          >
            <Image
              src="https://i.pinimg.com/1200x/bd/b9/ab/bdb9abb6d73a15e466c244fd8d23aeaa.jpg"
              alt="Smoky Jollof background"
              fill className="object-cover" priority sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0" style={{
            background: "linear-gradient(105deg, rgba(6,4,2,0.97) 0%, rgba(6,4,2,0.88) 38%, rgba(6,4,2,0.55) 62%, rgba(6,4,2,0.15) 100%)",
          }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to top, rgba(6,4,2,0.6) 0%, transparent 40%)",
          }} />
        </div>

        {/* Ambient glow */}
        <motion.div
          className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.09 }}
          transition={{ duration: 2, delay: 0.3 }}
          style={{ background: "var(--color-primary)", filter: "blur(120px)" }}
        />

        {/* Main layout */}
        <motion.div
          className="relative z-10 max-w-350 mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_380px] gap-0"
          style={{ minHeight: "calc(100svh - 72px)" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* ── LEFT: COPY ────── */}
          <div
            className="flex flex-col justify-between"
            style={{ padding: "clamp(2.5rem,5vw,4.5rem) clamp(1.5rem,5vw,4rem)" }}
          >
            <div>
              {/* Headline lines — slide in from left */}
              <div className="mb-4 ">
                {([
                  {
                    text: "Not",
                    style: {
                      fontFamily: "var(--font-nord)",  
                      textTransform: "uppercase",      
                      fontSize: "clamp(4rem, 9vw, 9.5rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
                      color: "transparent",
                      lineHeight: 0.9,
                    },
                    delay: 0.05,
                  },
                  {
                    text: "Just Our",
                    style: {
                      fontFamily: "var(--font-nord)", 
                      textTransform: "uppercase",       
                      fontSize: "clamp(4rem, 9vw, 9.5rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      color: "var(--color-on-ink)",
                      lineHeight: 0.9,
                    },
                    delay: 0.15,
                  },
                  {
                    text: "Meals —",
                    style: {
                      fontFamily: "var(--font-nord)",   
                      textTransform: "uppercase",     
                      fontSize: "clamp(3.4rem, 7.5vw, 8rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      color: "var(--color-primary)",
                      lineHeight: 0.92,
                      marginBottom: "0.15em",
                      textShadow:
                        "0 0 20px color-mix(in srgb, var(--color-primary) 40%, transparent), 0 0 60px color-mix(in srgb, var(--color-primary) 20%, transparent)",
                    },
                    delay: 0.25,
                  },
                ] as const).map(({ text, style, delay }) => (
                  <motion.div
                    key={text}
                    className="uppercase leading-none"   
                    style={style as React.CSSProperties}
                    initial={{ opacity: 0, x: -48 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: spring1, delay }}
                  >
                    {text}
                  </motion.div>
                ))}

                {/* Italic sub */}
                <motion.div
                  className="font-display italic font-medium"
                  style={{
                    fontSize: "clamp(1.2rem, 2.6vw, 2.5rem)",
                    color: "var(--color-on-ink-muted)",
                    letterSpacing: "0.01em",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
                >
                  An Experience in Taste &amp; Hospitality.
                </motion.div>
              </div>

              {/* Body copy */}
              <motion.p
                className="leading-relaxed mb-6"
                style={{
                  color: "var(--color-on-ink-muted)",
                  fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)",
                  maxWidth: "min(100%, 400px)",
                }}
                variants={fadeUp}
              >
                Welcome to Foodies Hot &amp; Spicy – where the vibrant flavors of Nigeria meet
                world-class digital convenience. We&apos;re not just redefining food; we&apos;re
                redefining how you experience it.
              </motion.p>

              {/* Pills */}
              <motion.div className="flex flex-wrap gap-2 mb-4" variants={pillContainer}>
                {[
                  { label: "Real-time reservations", icon: Calendar },
                  { label: "Live inventory", icon: Database },
                  { label: "Live tracking", icon: MapPin },
                  { label: "Loyalty rewards", icon: Gift },
                ].map(({ label, icon: Icon }) => (
                  <motion.span
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-semibold rounded-lg cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                      color: "var(--color-on-ink-muted)",
                    }}
                    variants={pillItem}
                    whileHover={{
                      background: "rgba(255,255,255,0.1)",
                      borderColor: "rgba(255,255,255,0.25)",
                      color: "#fff",
                      scale: 1.04,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Icon size={14} strokeWidth={1.5} className="opacity-80" />
                    {label}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Bottom */}
            <div>
              <motion.div
                variants={fadeIn}
                style={{ height: "0.5px", background: "rgba(255,255,255,0.08)", marginBottom: "1.5rem" }}
              />

              <motion.div variants={fadeUp} className="mb-4">
                <AppStoreButtons />
              </motion.div>

              {/* QR line */}
              <motion.div className="flex items-center gap-2.5 mb-8" variants={fadeUp}>
                <div
                  className="w-7 h-7 shrink-0 flex items-center justify-center text-xs"
                  style={{ border: "1.5px dashed rgba(255,255,255,0.12)", color: "var(--color-on-ink-muted)" }}
                >
                  ⊞
                </div>
                <p className="text-[11px]" style={{ color: "var(--color-on-ink-muted)" }}>
                  Scan to download ·{" "}
                  <strong style={{ color: "var(--color-secondary)" }}>₦2,000 off</strong>{" "}
                  first order.{" "}
                  <span style={{ color: "var(--color-on-ink-muted)" }}>New users only.</span>
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-0"
                variants={statContainer}
                style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)", paddingTop: "1.2rem" }}
              >
                {[
                  { value: "3", label: "Locations" },
                  { value: "255+", label: "Dishes" },
                  { value: "5★", label: "Avg Rating" },
                ].map((s, i, arr) => (
                  <motion.div
                    key={s.label}
                    className="flex flex-col items-center gap-0.5"
                    style={{
                      borderRight: i < arr.length - 1 ? "0.5px solid rgba(255,255,255,0.08)" : "none",
                      paddingRight: i < arr.length - 1 ? "0.75rem" : 0,
                      paddingLeft: i > 0 ? "0.75rem" : 0,
                    }}
                    variants={statItem}
                    whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      className="font-display font-bold"
                      style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)", color: "rgba(255,255,255,1)" }}
                      animate={{ opacity: [1, 0.6, 0.9, 1] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
                    >
                      {s.value}
                    </motion.span>
                    <span
                      className="text-[9px] uppercase tracking-[0.18em] font-semibold text-center"
                      style={{ color: "var(--color-on-ink-muted)" }}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT: Dish card ───────────────────────────── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            style={{ padding: "2rem 2rem 2rem 0" }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: spring1, delay: 0.3 }}
          >
            <DishCard />
          </motion.div>

        </motion.div>
      </section>
    </>
  );
}