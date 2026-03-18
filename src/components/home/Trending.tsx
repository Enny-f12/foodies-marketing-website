"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, ArrowRight, Star } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.5, ease: spring2, ...extra });

/* ── Data ──────────────────────────────────────────────────────────── */
const dishes = [
  {
    name:   "Jollof Rice",
    price:  "₦3,000",
    tag:    "Most Ordered",
    spicy:  false,
    rating: 4.9,
    image:  "https://i.pinimg.com/1200x/bc/00/d2/bc00d298bcf0d9f64b4a8dc96ba4629a.jpg",
  },
  {
    name:   "Egusi Soup with Pounded Yam",
    price:  "₦4,700",
    tag:    "Chef's Favourite",
    spicy:  false,
    rating: 4.8,
    image:  "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg",
  },
  {
    name:   "Asun Goat Meat",
    price:  "₦5,500",
    tag:    "Spicy Pick",
    spicy:  true,
    rating: 4.7,
    image:  "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg",
  },
  {
    name:   "Catfish Pepper Soup",
    price:  "₦6,000",
    tag:    "Weekend Special",
    spicy:  true,
    rating: 4.8,
    image:  "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg",
  },
  {
    name:   "Nkwobi",
    price:  "₦10,000",
    tag:    "Premium",
    spicy:  false,
    rating: 4.9,
    image:  "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg",
  },
  {
    name:   "Coconut Fried Rice",
    price:  "₦5,500",
    tag:    "Fan Favourite",
    spicy:  false,
    rating: 4.7,
    image:  "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg",
  },
];

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const lineVariants: Variants = {
  hidden: { width: 0 },
  visible: { width: 32, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 } },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: t2({ delay: 0.3 }) },
};

/* Entry animations — hero gets a dramatic reveal, others stagger in */
function getCardVariants(isHero: boolean, index: number): Variants {
  if (isHero) {
    return {
      hidden: { opacity: 0, scale: 0.92, y: 40 },
      visible: {
        opacity: 1, scale: 1, y: 0,
        transition: t1({ delay: 0.1 }),
      },
    };
  }
  /* Non-hero: alternate slide from left/right based on column */
  const col = (index - 1) % 2;
  return {
    hidden: { opacity: 0, x: col === 0 ? -30 : 30, y: 20 },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: t1({ delay: 0.1 + (index - 1) * 0.08 }),
    },
  };
}

/* ── Hero card — magnetic 3D tilt ──────────────────────────────────── */
function HeroCard({ dish }: { dish: typeof dishes[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 100, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 100, damping: 20 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0); };

  const variants = getCardVariants(true, 0);

  return (
    <div ref={ref} className="sm:row-span-2" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        className="relative overflow-hidden cursor-pointer rounded-xl h-full"
        style={{
          rotateX, rotateY,
          transformStyle: "preserve-3d",
          minHeight: "clamp(360px, 55vw, 560px)",
        }}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
      >
        {/* Image with parallax shift */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ scale: 1.08 }}
        >
          <motion.div
            className="w-full h-full"
            style={{ y: useTransform(springY, [-0.5, 0.5], [-12, 12]) }}
          >
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              sizes="(max-width:640px) 100vw, 33vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Animated pulse ring */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{ border: "2px solid var(--color-primary)" }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top badge */}
        <motion.div
          className="absolute top-3 left-3 right-3 flex items-start justify-between z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span
            className="text-[9px] font-black uppercase tracking-[0.22em] px-2.5 py-1"
            style={{ background: "var(--color-primary)", color: "white" }}
          >
            {dish.tag}
          </span>
        </motion.div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <motion.div
            className="flex items-center gap-1.5 mb-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Star size={10} fill="var(--color-secondary)" style={{ color: "var(--color-secondary)" }} />
            <span className="text-[10px] font-bold" style={{ color: "var(--color-secondary)" }}>
              {dish.rating}
            </span>
            <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>avg rating</span>
          </motion.div>

          <div className="flex items-end justify-between gap-2">
            <motion.h4
              className="font-display font-black leading-tight"
              style={{ color: "white", fontSize: "clamp(1.1rem,2vw,1.4rem)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: spring1, delay: 0.55 }}
            >
              {dish.name}
            </motion.h4>
            <motion.span
              className="font-display font-black shrink-0"
              style={{ color: "var(--color-secondary)", fontSize: "1.15rem" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: spring2, delay: 0.65 }}
            >
              {dish.price}
            </motion.span>
          </div>

          {/* CTA — always visible on hero, slides up */}
          <motion.div
            className="mt-3 flex items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: "var(--color-secondary)" }}>
              Order in app
            </span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={11} style={{ color: "var(--color-secondary)" }} />
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Regular card ───────────────────────────────────────────────────── */
function DishCard({ dish, index }: { dish: typeof dishes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const variants = getCardVariants(false, index);

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden cursor-pointer rounded-xl"
      style={{ minHeight: "clamp(180px, 22vw, 260px)" }}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: spring2 } }}
    >
      {/* Image zoom on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="(max-width:640px) 50vw, 22vw"
          />
        </motion.div>
      </div>

      {/* Gradient — deepens on hover */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Left accent bar — slides in on hover */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.75 z-20"
        style={{ background: "var(--color-primary)", originY: 0 }}
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.35, ease: spring2 }}
      />

      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
        <motion.span
          className="text-[9px] font-black uppercase tracking-[0.22em] px-2.5 py-1"
          style={{
            background: index === 4 ? "var(--color-secondary)" : "rgba(0,0,0,0.55)",
            color:      index === 4 ? "var(--color-surface-ink)" : "white",
            backdropFilter: "blur(4px)",
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
        >
          {dish.tag}
        </motion.span>

        {dish.spicy && (
          <motion.span
            className="flex items-center gap-1 px-2 py-1 text-[9px] font-bold uppercase tracking-wider"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
              color: "var(--color-warning)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: spring2, delay: 0.3 + index * 0.05 }}
          >
            {/* Spicy flame — wiggles on card hover */}
            <motion.span
              animate={{ rotate: [0, -8, 8, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
              style={{ display: "inline-flex" }}
            >
              <Flame size={10} fill="currentColor" />
            </motion.span>
            Spicy
          </motion.span>
        )}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="flex items-center gap-1.5 mb-2">
          <Star size={10} fill="var(--color-secondary)" style={{ color: "var(--color-secondary)" }} />
          <span className="text-[10px] font-bold" style={{ color: "var(--color-secondary)" }}>
            {dish.rating}
          </span>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>avg rating</span>
        </div>

        <div className="flex items-end justify-between gap-2">
          <h4
            className="font-display font-black leading-tight"
            style={{ color: "white", fontSize: "clamp(0.85rem,1.5vw,1rem)" }}
          >
            {dish.name}
          </h4>
          <motion.span
            className="font-display font-black shrink-0"
            style={{ color: "var(--color-secondary)", fontSize: "0.95rem" }}
            whileHover={{ y: -2, transition: { duration: 0.2, ease: spring2 } }}
          >
            {dish.price}
          </motion.span>
        </div>

        {/* CTA slides up on hover */}
        <motion.div
          className="flex items-center gap-2 mt-3"
          initial={{ opacity: 0, y: 8 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <span
            className="text-[10px] font-black uppercase tracking-[0.2em]"
            style={{ color: "var(--color-secondary)" }}
          >
            Order in app
          </span>
          <ArrowRight size={11} style={{ color: "var(--color-secondary)" }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export function TrendingSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px 0px" });
  const bottomRef = useRef<HTMLDivElement>(null);
  const bottomInView = useInView(bottomRef, { once: true, margin: "-40px 0px" });

  return (
    <section style={{ background: "var(--color-bg-soft)" }}>
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10"
        >
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="h-px shrink-0"
                style={{ background: "var(--color-primary)" }}
                variants={lineVariants}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
              />
              <span className="section-label">Featured Dishes</span>
            </div>
            <h2
              className="font-display font-black leading-tight"
              style={{ color: "var(--color-heading)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
            >
              Trending This Week
              <br />
              <span className="text-gradient">at Foodies</span>
            </h2>
          </motion.div>

          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 px-5 py-3 font-bold text-xs uppercase tracking-widest transition-colors duration-200 shrink-0"
                style={{
                  border: "1px solid var(--color-border)",
                  color:  "var(--color-heading)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background  = "var(--color-primary)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
                  (e.currentTarget as HTMLElement).style.color       = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background  = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLElement).style.color       = "var(--color-heading)";
                }}
              >
                View Full Menu
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={14} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {dishes.map((dish, i) =>
            i === 0 ? (
              <HeroCard key={dish.name} dish={dish} />
            ) : (
              <DishCard key={dish.name} dish={dish} index={i} />
            )
          )}
        </div>

        {/* Bottom strip */}
        <motion.div
          ref={bottomRef}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-5"
          style={{ borderTop: "1px solid var(--color-border)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
            <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>255+</span>
            {" "}dishes available with live stock visibility in the app.
          </p>
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ color: "var(--color-primary)" }}
            >
              Download App to Order
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}