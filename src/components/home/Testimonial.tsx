"use client";

import { useState, useRef, useEffect } from "react";
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
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.65, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.4,  ease: spring2, ...extra });

/* ── Data ──────────────────────────────────────────────────────────── */
const testimonials = [
  { quote: "The app is incredible. I booked a table for my anniversary in under 2 minutes, and they had wine waiting when we arrived.", name: "Adeola O.", location: "Lekki", stars: 5 },
  { quote: "I order takeaway 3–4 times a week. Being able to see live stock means I never get disappointed.", name: "Tunde A.", location: "Ikoyi", stars: 5 },
  { quote: "As a manager, the admin dashboard is a game-changer. We've cut phone orders by 60%.", name: "Chioma N.", location: "Operations", stars: 5 },
  { quote: "Best Jollof in the city, and the delivery was surprisingly fast. The packaging was neat too!", name: "Emeka K.", location: "Victoria Island", stars: 5 },
  { quote: "Love the loyalty points system! I already got a free bowl of Egusi just by ordering through the app.", name: "Sarah M.", location: "Surulere", stars: 5 },
  { quote: "The Seafood Pasta is to die for. Finding authentic flavors like this on an app is rare.", name: "Femi B.", location: "Ajah", stars: 4 },
  { quote: "Smooth UI and very easy to navigate. The live tracking of my rider actually works perfectly.", name: "Zainab H.", location: "Gbagada", stars: 5 },
  { quote: "Great customer service. I had a small issue with my order and they resolved it in minutes via chat.", name: "Victor E.", location: "Ikeja", stars: 5 },
  { quote: "The Pounded Yam was fresh and hot when it arrived. Tastes just like home cooking.", name: "Bisi T.", location: "Yaba", stars: 5 },
];

const TOTAL = testimonials.length;

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const navVariants: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: t1({ delay: 0.2 }) },
};

/* Card slides in direction of navigation, staggered by offset */
const cardVariants = (dir: number, offset: number): Variants => ({
  enter: {
    opacity: 0,
    x: dir * 60,
    scale: 0.94,
    transition: t1({ delay: offset * 0.09 }),
  },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: t1({ delay: offset * 0.09 }),
  },
  exit: {
    opacity: 0,
    x: dir * -40,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
});

const quoteVariants = (offset: number): Variants => ({
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: t1({ delay: 0.12 + offset * 0.09 }) },
});

const authorVariants = (offset: number): Variants => ({
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: t2({ delay: 0.28 + offset * 0.09 }) },
});

const starContainerVariants = (offset: number): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.28 + offset * 0.09 } },
});

const starChild: Variants = {
  hidden:  { opacity: 0, scale: 0, rotate: -30 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: t2() },
};

const dividerVariants = (offset: number): Variants => ({
  hidden:  { scaleX: 0, originX: "0%" },
  visible: { scaleX: 1, originX: "0%", transition: { duration: 0.5, ease: "easeOut", delay: 0.2 + offset * 0.09 } },
});

/* ── Star rating ───────────────────────────────────────────────────── */
function StarRating({ count, offset }: { count: number; offset: number }) {
  return (
    <motion.div
      className="flex items-center gap-0.5"
      variants={starContainerVariants(offset)}
      initial="hidden"
      animate="visible"
    >
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="text-base"
          style={{ color: i < count ? "var(--color-secondary)" : "var(--color-border)" }}
          variants={starChild}
        >
          ★
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ── Single card ───────────────────────────────────────────────────── */
function TestimonialCard({
  testimonial,
  isActive,
  direction,
  offset,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
  direction: number;
  offset: number;
}) {
  const variants = cardVariants(direction, offset);

  return (
    <motion.div
      className="relative shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] rounded-2xl"
      style={{
        background: "var(--color-bg-card)",
        border: `1px solid ${isActive ? "var(--color-primary)" : "var(--color-border)"}`,
        padding: "clamp(1.25rem, 3vw, 1.75rem)",
      }}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      whileHover={
        isActive
          ? {
              y: -5,
              boxShadow: "0 24px 48px rgba(0,0,0,0.1)",
              transition: { duration: 0.28, ease: spring2 },
            }
          : { y: -3, transition: { duration: 0.28, ease: spring2 } }
      }
    >
      {/* Opening quote mark */}
      <motion.div
        className="text-5xl font-black leading-none mb-3 select-none"
        style={{ color: "var(--color-primary)", fontFamily: "serif", opacity: 0.18 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.18, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 + offset * 0.09 }}
      >
        &ldquo;
      </motion.div>

      {/* Quote */}
      <motion.p
        className="text-sm leading-relaxed mb-7 min-h-20"
        style={{ color: "var(--color-text-secondary)" }}
        variants={quoteVariants(offset)}
        initial="hidden"
        animate="visible"
      >
        {testimonial.quote}
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-full mb-5"
        style={{ height: "1px", background: "var(--color-text)", opacity: 0.1 }}
        variants={dividerVariants(offset)}
        initial="hidden"
        animate="visible"
      />

      {/* Author + stars */}
      <div className="flex items-center justify-between">
        <motion.div
          variants={authorVariants(offset)}
          initial="hidden"
          animate="visible"
        >
          <p
            className="text-sm font-bold leading-tight mb-1"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
          >
            {testimonial.name}
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-60">
            {testimonial.location}
          </p>
        </motion.div>
        <StarRating count={testimonial.stars} offset={offset} />
      </div>

      {/* Active pulsing border ring */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: "1.5px solid var(--color-primary)" }}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export function TestimonialsSection() {
  const [active, setActive]       = useState(0);
  const [direction, setDirection] = useState(1);
  const [animKey, setAnimKey]     = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px 0px" });

  /* Auto-advance every 5s, pauses on hover */
  const isPaused = useRef(false);

  const go = (dir: number, targetIdx?: number) => {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setActive(targetIdx !== undefined
      ? targetIdx
      : (prev) => (prev + dir + TOTAL) % TOTAL
    );
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) go(1);
    }, 5000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section
      style={{ background: "var(--color-bg-soft)" }}
      className="w-full overflow-hidden"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)" }}
      >
        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">

          <motion.div
            className="max-w-md text-center md:text-left"
            variants={headerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <motion.div
                className="h-px shrink-0"
                style={{ background: "var(--color-primary)" }}
                initial={{ width: 0 }}
                animate={inView ? { width: 32 } : { width: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              />
              <span className="section-label">Guest Stories</span>
            </div>
            <h2
              className="font-display font-black leading-tight"
              style={{ color: "var(--color-heading)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              What Our{" "}
              <span className="text-primary italic">Guests are Saying.</span>
            </h2>
          </motion.div>

          {/* Nav controls */}
          <motion.div
            className="flex items-center gap-4"
            variants={navVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Prev */}
            <motion.button
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-full flex items-center justify-center border cursor-pointer"
              style={{ borderColor: "var(--color-border)", color: "var(--color-heading)" }}
              whileHover={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", scale: 1.08 }}
              whileTap={{ scale: 0.88 }}
              transition={{ duration: 0.2 }}
            >
              ←
            </motion.button>

            {/* Animated counter */}
            <div
              className="text-[10px] font-black tracking-widest uppercase relative overflow-hidden"
              style={{ minWidth: 48, textAlign: "center", height: 18 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ y: direction > 0 ? 14 : -14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction > 0 ? -14 : 14, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                >
                  {String(active + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Next */}
            <motion.button
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full flex items-center justify-center border cursor-pointer"
              style={{ borderColor: "var(--color-border)", color: "var(--color-heading)" }}
              whileHover={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", scale: 1.08 }}
              whileTap={{ scale: 0.88 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.button>
          </motion.div>
        </div>

        {/* ── CAROUSEL — Desktop/tablet: 3 cards ── */}
        <div className="hidden sm:flex w-full gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {[0, 1, 2].map((offset) => {
              const idx = (active + offset) % TOTAL;
              return (
                <TestimonialCard
                  key={`${animKey}-${offset}`}
                  testimonial={testimonials[idx]}
                  isActive={offset === 0}
                  direction={direction}
                  offset={offset}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── CAROUSEL — Mobile: single card ── */}
        <div className="flex sm:hidden w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <TestimonialCard
              key={`${animKey}-mobile`}
              testimonial={testimonials[active]}
              isActive={true}
              direction={direction}
              offset={0}
            />
          </AnimatePresence>
        </div>

        {/* ── DOT NAV ── */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => go(i > active ? 1 : -1, i)}
              style={{
                height: "5px",
                background: i === active ? "var(--color-primary)" : "var(--color-border)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                borderRadius: "3px",
              }}
              animate={{ width: i === active ? 28 : 7 }}
              transition={{ duration: 0.35, ease: spring2 }}
              whileHover={{ opacity: 0.7 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;