"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./Data";
import { MenuTabs } from "./Tabs";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ─────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.65, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.4,  ease: spring2, ...extra });

/* ── Variants ────────────────────────────────────────────────────────── */
const panelVariants: Variants = {
  enter:  { opacity: 0, y: 22 },
  center: { opacity: 1, y: 0,   transition: t1() },
  exit:   { opacity: 0, y: -14, transition: { duration: 0.22, ease: "easeIn" as const } },
};

const eyebrowVariants: Variants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0,   transition: t1() },
};

const lineVariants: Variants = {
  hidden:  { scaleX: 0, originX: "0%" },
  visible: { scaleX: 1, originX: "0%", transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 } },
};

const titleVariants: Variants = {
  hidden:  { opacity: 0, y: 32, skewY: 1.5 },
  visible: { opacity: 1, y: 0,  skewY: 0,   transition: t1({ delay: 0.08 }) },
};

const descVariants: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0,  transition: t1({ delay: 0.18 }) },
};

const chipsContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.28 } },
};

const chipItem: Variants = {
  hidden:  { opacity: 0, scale: 0.82, y: 6 },
  visible: { opacity: 1, scale: 1,    y: 0, transition: t2() },
};

const dividerVariants: Variants = {
  hidden:  { scaleY: 0, originY: "0%" },
  visible: { scaleY: 1, originY: "0%", transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.15 } },
};

const heroVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.97, y: 28 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: t1({ delay: 0.12 }) },
};

const imageCard = (delay: number): Variants => ({
  hidden:  { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: t1({ delay }) },
});

const stripVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: t1({ delay: 0.35 }) },
};

/* ── Component ───────────────────────────────────────────────────────── */
export function MenuCategories() {
  const [activeId, setActiveId] = useState(categories[0].id);

  const cat       = categories.find((c) => c.id === activeId) ?? categories[0];
  const catIndex  = categories.findIndex((c) => c.id === activeId);
  const sectionBg = catIndex % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-soft)";

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px 0px" });

  /*
   * Image slot mapping from cat.items:
   *   [0] hero     — tall left card, spans full grid height
   *   [1] topRight — wide image, top of right column
   *   [2] botLeft  — small image, bottom-left of right column
   *   [3] botRight — small image, bottom-right of right column
   */
  const hero     = cat.items[0];
  const topRight = cat.items[1];
  const botLeft  = cat.items[2];
  const botRight = cat.items[3];

  return (
    <>
      <MenuTabs active={activeId} onSelect={setActiveId} />

      <section
        style={{ background: sectionBg }}
        className="w-full transition-colors duration-500"
      >
        <div
          ref={sectionRef}
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >

              {/* ══════════════════════════════════════════════════════════
                  HEADER
                  Eyebrow row, then: [giant title] | [divider] | [desc + chips]
                  ══════════════════════════════════════════════════════════ */}
              <div className="mb-12 lg:mb-16">

                {/* Eyebrow */}
                <motion.div
                  className="flex items-center gap-3 mb-5"
                  variants={eyebrowVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <motion.div
                    className="h-px shrink-0"
                    style={{ background: "var(--color-primary)", width: 28 }}
                    variants={lineVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />
                  <span
                    className="uppercase tracking-widest font-semibold"
                    style={{ fontSize: "10px", color: "var(--color-text-secondary)" }}
                  >
                    {cat.label}
                  </span>
                </motion.div>

                {/* Title | divider | desc + chips */}
                <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-14">

                  {/* Giant display title — uses titleLine1 & titleLine2 */}
                  <div className="lg:w-[42%] shrink-0 overflow-hidden">
                    <motion.h2
                      className="font-display font-black leading-none"
                      style={{
                        color:    "var(--color-heading)",
                        fontSize: "clamp(3rem, 7vw, 5.5rem)",
                      }}
                      variants={titleVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {cat.titleLine1}{" "}
                      <span style={{ color: "var(--color-primary)" }}>&amp;</span>
                      <br />
                      {cat.titleLine2}
                    </motion.h2>
                  </div>

                  {/* Vertical divider */}
                  <motion.div
                    className="hidden lg:block w-px self-stretch shrink-0"
                    style={{ background: "var(--color-border)" }}
                    variants={dividerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />

                  {/* Right: description + chips */}
                  <div className="flex flex-col justify-center gap-6">
                    <motion.p
                      className="leading-relaxed"
                      style={{
                        color:    "var(--color-text-secondary)",
                        fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
                        maxWidth: "min(100%, 520px)",
                      }}
                      variants={descVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {cat.desc}
                    </motion.p>

                    {/* Pill chips */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={chipsContainer}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {cat.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={`${activeId}-chip-${item.name}`}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium cursor-default"
                            style={{
                              borderColor: "var(--color-border)",
                              background:  "var(--color-bg-card)",
                              color:       "var(--color-text-secondary)",
                            }}
                            variants={chipItem}
                            whileHover={{
                              borderColor: "color-mix(in srgb, var(--color-primary) 50%, transparent)",
                              color:       "var(--color-heading)",
                              y:           -2,
                              transition:  { duration: 0.18 },
                            }}
                            whileTap={{ scale: 0.96 }}
                          >
                            <Icon size={12} style={{ color: "var(--color-primary)" }} />
                            <span>{item.name}</span>
                          </motion.div>
                        );
                      })}

                      {/* + More in App chip */}
                      <motion.div variants={chipItem}>
                        <motion.div
                          whileHover={{ y: -2, scale: 1.04, transition: { duration: 0.18, ease: spring2 } }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <Link
                            href="/download"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                            style={{
                              background: "var(--color-primary)",
                              color:      "white",
                              position:   "relative",
                              overflow:   "hidden",
                            }}
                          >
                            + More in App
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  IMAGE GRID
                  ┌──────────────────────┬──────────────────┐
                  │                      │  topRight (wide) │
                  │   hero  (tall)       ├─────────┬────────┤
                  │                      │ botLeft │botRight│
                  └──────────────────────┴─────────┴────────┘
                  ══════════════════════════════════════════════════════════ */}
              <div
                className="grid gap-4 "
                style={{ gridTemplateColumns: "55fr 45fr" }}
              >

                {/* ── HERO — left, full height ── */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ minHeight: "clamp(400px, 62vh, 660px)" }}
                  variants={heroVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.01, transition: { duration: 0.4, ease: spring2 } }}
                >
                  {hero?.image && (
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        fill
                        className="object-cover"
                        sizes="55vw"
                        priority
                      />
                    </motion.div>
                  )}

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.22) 45%, transparent 100%)",
                    }}
                  />

                  {/* Hero content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p
                      className="uppercase tracking-widest font-bold mb-2"
                      style={{ fontSize: "10px", color: "var(--color-primary)" }}
                    >
                      Signature Dish
                    </p>
                    <h3
                      className="font-display font-black leading-tight text-white dark:text-white mb-3"
                      style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)" }}
                    >
                      {hero?.name}
                    </h3>
                    {hero?.desc && (
                      <p
                        className="leading-relaxed mb-5"
                        style={{ fontSize: "13px", color: "rgba(255,255,255,0.68)", maxWidth: "28ch" }}
                      >
                        {hero.desc}
                      </p>
                    )}

                    {/* Arrow circle button */}
                    <motion.button
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "var(--color-primary)" }}
                      whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.88 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M2.5 12.5L12.5 2.5M12.5 2.5H5.5M12.5 2.5V9.5"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* ── RIGHT COLUMN ── */}
                <div className="flex flex-col gap-4">

                  {/* Top-right: wide single image */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl flex-1"
                    style={{ minHeight: "clamp(170px, 28vh, 300px)" }}
                    variants={imageCard(0.18)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    whileHover={{ scale: 1.02, transition: { duration: 0.32, ease: spring2 } }}
                  >
                    {topRight?.image && (
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <Image
                          src={topRight.image}
                          alt={topRight.name}
                          fill
                          className="object-cover"
                          sizes="45vw"
                        />
                      </motion.div>
                    )}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 55%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold leading-tight" style={{ fontSize: "13px" }}>
                        {topRight?.name}
                      </p>
                    </div>
                  </motion.div>

                  {/* Bottom row: two equal images */}
                  <div className="grid grid-cols-2 gap-4">
                    {([botLeft, botRight] as const).map((item, i) => (
                      <motion.div
                        key={`${activeId}-bot-${i}`}
                        className="relative overflow-hidden rounded-2xl"
                        style={{ aspectRatio: "4/3" }}
                        variants={imageCard(0.26 + i * 0.09)}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: spring2 } }}
                      >
                        {item?.image && (
                          <motion.div
                            className="absolute inset-0"
                            whileHover={{ scale: 1.09 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="22vw"
                            />
                          </motion.div>
                        )}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p
                            className="text-white font-bold leading-tight"
                            style={{ fontSize: "12px" }}
                          >
                            {item?.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </div>

              
              <motion.div
                className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 lg:p-8 rounded-2xl border"
                style={{
                  background:  "var(--color-bg-card)",
                  borderColor: "var(--color-border)",
                }}
                variants={stripVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span style={{ color: "var(--color-primary)", fontWeight: 900 }}>255+ dishes</span>{" "}
                  available with real-time stock visibility.
                </p>

                <div className="flex items-center gap-4 shrink-0">
                  <motion.div whileHover={{ x: 3, transition: { duration: 0.18 } }}>
                    <Link
                      href="/download"
                      className="text-sm font-black uppercase tracking-widest"
                      style={{ color: "var(--color-primary)" }}
                    >
                      View Full Menu in App →
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.18, ease: spring2 } }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Link
                      href="/order"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
                      style={{ background: "var(--color-primary)" }}
                    >
                      Order Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

export default MenuCategories;