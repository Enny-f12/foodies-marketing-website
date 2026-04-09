"use client";

import { useState, useRef } from "react";
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
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7,  ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

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

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const navVariants: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: t1({ delay: 0.2 }) },
};

/* Card slides in direction of navigation */
const cardVariants = (dir: number): Variants => ({
  enter:  { opacity: 0, x: dir * 60, scale: 0.95 },
  center: { opacity: 1, x: 0,        scale: 1,    transition: t1() },
  exit:   { opacity: 0, x: dir * -40, scale: 0.97, transition: { duration: 0.3, ease: "easeIn" as const } },
});

const quoteVariants: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: t1({ delay: 0.15 }) },
};

const authorVariants: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: t2({ delay: 0.3 }) },
};

const starVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
};

const starChild: Variants = {
  hidden:  { opacity: 0, scale: 0, rotate: -30 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: t2() },
};

/* ── Star rating ───────────────────────────────────────────────────── */
function StarRating({ count, animate }: { count: number; animate: boolean }) {
  return (
    <motion.div
      className="flex items-center gap-0.5"
      variants={starVariants}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
    >
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="text-lg"
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
  active,
  direction,
  animateIn,
}: {
  testimonial: (typeof testimonials)[0];
  active: boolean;
  direction: number;
  animateIn: boolean;
}) {
  const variants = cardVariants(direction);

  return (
    <motion.div
      className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-xl"
      style={{
        background: "var(--color-bg-card)",
        border:     `1px solid ${active ? "var(--color-primary)" : "var(--color-border)"}`,
        padding:    "clamp(1.5rem, 4vw, 2rem)",
      }}
      variants={animateIn ? variants : undefined}
      initial={animateIn ? "enter" : false}
      animate={animateIn ? "center" : { opacity: active ? 1 : 0.6, scale: active ? 1 : 0.97 }}
      exit={animateIn ? "exit" : undefined}
      transition={animateIn ? undefined : { duration: 0.3 }}
      whileHover={
        active
          ? { y: -4, boxShadow: "0 24px 48px var(--color-shadow)", transition: { duration: 0.3, ease: spring2 } }
          : {}
      }
    >
      {/* Opening quote mark — floats in */}
      <motion.div
        className="text-5xl font-black leading-none mb-4 select-none"
        style={{ color: "var(--color-primary)", fontFamily: "serif", opacity: 0.2 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        &ldquo;
      </motion.div>

      {/* Quote text */}
      <motion.p
        className="text-sm leading-relaxed mb-8 min-h-20"
        style={{ color: "var(--color-text-secondary)" }}
        variants={quoteVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonial.quote}
      </motion.p>

      {/* Divider — draws itself */}
      <motion.div
        className="w-full mb-6"
        style={{ height: "1px", background: "var(--color-text)", opacity: 0.1 }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
      />

      {/* Author + stars */}
      <div className="flex items-center justify-between">
        <motion.div
          variants={authorVariants}
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
        <StarRating count={testimonial.stars} animate={true} />
      </div>

      {/* Active border pulse */}
      {active && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ border: "1px solid var(--color-primary)" }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
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

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px 0px" });

  const go = (dir: number) => {
    setDirection(dir);
    setActive((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{ background: "var(--color-bg-soft)" }} className="w-full overflow-hidden">
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
            <motion.div
              className="flex items-center gap-3 mb-3 justify-center md:justify-start"
            >
              <motion.div
                className="h-px shrink-0"
                style={{ background: "var(--color-primary)" }}
                initial={{ width: 0 }}
                animate={inView ? { width: 32 } : { width: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              />
              <span className="section-label">Guest Stories</span>
            </motion.div>
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
              whileHover={{
                borderColor: "var(--color-primary)",
                color:       "var(--color-primary)",
                scale: 1.08,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>

            {/* Counter */}
            <div className="text-[10px] font-black tracking-widest uppercase relative overflow-hidden" style={{ minWidth: 48, textAlign: "center" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  className="block"
                  initial={{ y: direction > 0 ? 12 : -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction > 0 ? -12 : 12, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Next */}
            <motion.button
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full flex items-center justify-center border cursor-pointer"
              style={{ borderColor: "var(--color-border)", color: "var(--color-heading)" }}
              whileHover={{
                borderColor: "var(--color-primary)",
                color:       "var(--color-primary)",
                scale: 1.08,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </motion.div>
        </div>

        {/* ── CAROUSEL ── */}

        {/* Desktop / tablet: show 3 cards, animate active */}
        <div className="hidden sm:flex w-full gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {[0, 1, 2].map((offset) => {
              const idx = (active + offset) % testimonials.length;
              return (
                <TestimonialCard
                  key={`${idx}-${active}`}
                  testimonial={testimonials[idx]}
                  active={offset === 0}
                  direction={direction}
                  animateIn={offset === 0}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile: single card with directional slide */}
        <div className="flex sm:hidden w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <TestimonialCard
              key={active}
              testimonial={testimonials[active]}
              active={true}
              direction={direction}
              animateIn={true}
            />
          </AnimatePresence>
        </div>

        {/* ── DOT NAV ── */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
              style={{
                height:     "6px",
                background: i === active ? "var(--color-primary)" : "var(--color-border)",
                border:     "none",
                padding:    0,
                cursor:     "pointer",
                borderRadius: "3px",
              }}
              animate={{ width: i === active ? 32 : 8 }}
              transition={{ duration: 0.3, ease: spring2 }}
              whileHover={{ opacity: 0.7 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;