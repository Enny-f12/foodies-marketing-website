"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Sparkles, Utensils, ArrowRight } from "lucide-react";
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
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 32, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.15 } },
};

const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const lineUnmask: Variants = {
  hidden:  { opacity: 0, y: 36, skewY: 2 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

/* Image panel — from left for even, right for odd */
const imgVariants = (isFlip: boolean): Variants => ({
  hidden:  { opacity: 0, x: isFlip ? 60 : -60 },
  visible: { opacity: 1, x: 0, transition: t1() },
});

/* Info panel — opposite direction */
const infoVariants = (isFlip: boolean): Variants => ({
  hidden:  { opacity: 0, x: isFlip ? -40 : 40 },
  visible: { opacity: 1, x: 0, transition: t1({ delay: 0.1 }) },
});

const infoRowsContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const infoRow: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: t2() },
};

const badgeVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: t2({ delay: 0.4 }) },
};

const ctaVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const ctaItem: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: t2() },
};

/* ── Data ──────────────────────────────────────────────────────────── */
const locations = [
  {
    id:      "lekki",
    name:    "Lekki, Lagos",
    address: "32b Admiralty Way, Opposite Prince Ebeano Supermarket, Lekki Phase 1, Lagos",
    hours:   "Monday – Sunday: 11:00 AM – 9:00 PM",
    note:    "Private dining available for up to 20 guests",
    images:  [
      "https://i.pinimg.com/736x/51/a7/ed/51a7edcd6c26ea2bccee7eb87039aca4.jpg",
      "https://i.pinimg.com/736x/51/a7/ed/51a7edcd6c26ea2bccee7eb87039aca4.jpg",
    ],
  },
  {
    id:      "abuja",
    name:    "Maitama, Abuja",
    address: "Plot 12, Gana Street, Maitama, Abuja",
    hours:   "Monday – Sunday: 11:00 AM – 9:00 PM",
    note:    "Private dining available",
    images:  [
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg",
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg",
    ],
  },
  {
    id:      "lekki-2",
    name:    "Lekki, Lagos",
    address: "23 Admiralty Way opposite wole ariyo street Lekki phase 1",
    hours:   "Monday – Sunday: 11:00 AM – 9:00 PM",
    note:    "Private dining available",
    images:  [
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg",
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg",
    ],
  },
];

const infoRows = [
  { icon: MapPin,    key: "address" },
  { icon: Clock,     key: "hours"   },
  { icon: Sparkles,  key: "note"    },
] as const;

/* ── Location block ─────────────────────────────────────────────────── */
function LocationBlock({ loc, index }: { loc: typeof locations[0]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const isFlip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
      style={{ direction: isFlip ? "rtl" : "ltr" }}
    >
      {/* ── Image grid ── */}
      <motion.div
        className="grid grid-cols-2 gap-4"
        style={{ direction: "ltr" }}
        variants={imgVariants(isFlip)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* First image */}
        <motion.div
          className="relative aspect-4/5 rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: spring2 } }}
        >
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={loc.images[0]}
              alt={loc.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </motion.div>
          {/* Overlay dims on hover to let image breathe */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.2)" }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Second image — offset down */}
        <motion.div
          className="relative aspect-4/5 rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.05)", translateY: "2rem" }}
          whileHover={{ scale: 1.02, y: "1.5rem", transition: { duration: 0.4, ease: spring2 } }}
        >
          <motion.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={loc.images[1]}
              alt={loc.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.2)" }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* ── Info panel ── */}
      <motion.div
        className="flex flex-col"
        style={{ direction: "ltr" }}
        variants={infoVariants(isFlip)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Number + name */}
        <div className="flex items-baseline gap-4 mb-8">
          <motion.span
            className="font-display font-black text-7xl leading-none"
            style={{ color: "var(--color-primary)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.3 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <motion.h3
            className="font-display font-black uppercase"
            style={{
              color:    "var(--color-heading)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: spring1, delay: 0.25 }}
          >
            {loc.name}
          </motion.h3>
        </div>

        {/* Info rows */}
        <motion.div
          className="flex flex-col gap-6 mb-10"
          variants={infoRowsContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {infoRows.map(({ icon: Icon, key }) => (
            <motion.div
              key={key}
              className="flex items-start gap-4"
              variants={infoRow}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--color-primary-faint)" }}
                whileHover={{
                  scale:      1.15,
                  rotate:     -6,
                  background: "color-mix(in srgb, var(--color-primary) 20%, transparent)",
                  transition: { duration: 0.3, ease: spring2 },
                }}
              >
                <Icon size={16} strokeWidth={2} style={{ color: "var(--color-primary)" }} />
              </motion.div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {loc[key]}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          variants={badgeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{ borderColor: "var(--color-border)", background: "var(--color-bg-card)" }}
            whileHover={{
              borderColor: "var(--color-secondary)",
              background:  "color-mix(in srgb, var(--color-secondary) 8%, transparent)",
              scale: 1.04,
              transition:  { duration: 0.2 },
            }}
          >
            <Utensils size={12} style={{ color: "var(--color-secondary)" }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--color-text-secondary)" }}>
              Private Dining
            </span>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={ctaVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={ctaItem}>
            <motion.div
              whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.2, ease: spring2 } }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest"
                style={{ background: "var(--color-primary)", color: "white", position: "relative", overflow: "hidden" }}
              >
                {/* Shimmer */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    x: "-100%",
                  }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                Book a Table
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={ctaItem}>
            <motion.div
              whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.2, ease: spring2 } }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/menu"
                className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest border transition-colors"
                style={{
                  color:       "var(--color-heading)",
                  borderColor: "var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background    = "var(--color-bg-soft)";
                  (e.currentTarget as HTMLElement).style.borderColor   = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background    = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor   = "var(--color-border)";
                }}
              >
                View Private Dining
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export function OurSpacesSection() {
  const headerRef    = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px 0px" });

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >

        {/* ── Header ── */}
        <div ref={headerRef}>
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <motion.div
              className="h-px shrink-0"
              style={{ background: "var(--color-primary)" }}
              variants={lineVariants}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            />
            <span className="section-label text-primary">Our Spaces</span>
          </motion.div>

          <motion.h2
            className="font-display font-black mb-16"
            style={{
              color:         "var(--color-heading)",
              fontSize:      "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
            variants={headlineContainer}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            {["Three Locations.", "One Standard of Excellence."].map((line, i) => (
              <span key={line} style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  style={{
                    display: "block",
                    fontStyle: i === 1 ? "italic" : "normal",
                    color:     i === 1 ? "var(--color-primary)" : "var(--color-heading)",
                  }}
                  variants={lineUnmask}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </div>

        {/* ── Location blocks ── */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {locations.map((loc, i) => (
            <LocationBlock key={loc.id} loc={loc} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}