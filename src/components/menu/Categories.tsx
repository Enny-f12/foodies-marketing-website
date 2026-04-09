"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./Data";
import { MenuTabs } from "./Tabs";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ─────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

/* ── Variants ─────────────── */
const panelVariants: Variants = {
  enter:  { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0,   transition: t1() },
  exit:   { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const headerVariants: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0,   transition: t1() },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 32, transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 } },
};

const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const lineUnmask: Variants = {
  hidden:  { opacity: 0, y: 28, skewY: 2 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

const subCopy: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: t1({ delay: 0.2 }) },
};

const chipsContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const chipItem: Variants = {
  hidden:  { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1,    y: 0, transition: t2() },
};

const imagesContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const imageCard = (i: number): Variants => ({
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: t1({ delay: i * 0.08 }) },
});

const stripVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: t1({ delay: 0.4 }) },
};

/* ── Offset amounts — col 0 sits high, col 1 sits low ── */
const offsets = ["-2rem", "2rem", "-2rem", "2rem"];

/* ── Component ─────────────────────────────────────────────────────── */
export function MenuCategories() {
  const [activeId, setActiveId] = useState(categories[0].id);

  const cat       = categories.find((c) => c.id === activeId) ?? categories[0];
  const catIndex  = categories.findIndex((c) => c.id === activeId);
  const sectionBg = catIndex % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-soft)";

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <MenuTabs active={activeId} onSelect={setActiveId} />

      <section
        style={{ background: sectionBg, minHeight: "60vh" }}
        className="transition-colors duration-500"
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
              {/* ── Category header ── */}
              <motion.div
                className="flex items-center gap-3 mb-3"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="h-px shrink-0"
                  style={{ background: "var(--color-primary)" }}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />
                <span className="section-label">{cat.title}</span>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-10">

                {/* ══ LEFT: copy + chips ══ */}
                <div>
                  <motion.h2
                    className="font-display font-black leading-tight mb-4"
                    style={{
                      color:    "var(--color-heading)",
                      fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    }}
                    variants={headlineContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <span style={{ display: "block", overflow: "hidden" }}>
                      <motion.span style={{ display: "block" }} variants={lineUnmask}>
                        {cat.title}
                      </motion.span>
                    </span>
                  </motion.h2>

                  <motion.p
                    className="leading-relaxed mb-8"
                    style={{
                      color:    "var(--color-text-secondary)",
                      fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
                      maxWidth: "min(100%,480px)",
                    }}
                    variants={subCopy}
                    initial="hidden"
                    animate="visible"
                  >
                    {cat.desc}
                  </motion.p>

                  {/* Chips */}
                  <motion.div
                    className="flex flex-wrap gap-2.5"
                    variants={chipsContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {cat.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={`${activeId}-${item.name}`}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border"
                          style={{
                            borderColor: "var(--color-border)",
                            background:  "var(--color-bg-card)",
                            color:       "var(--color-text-secondary)",
                          }}
                          variants={chipItem}
                          whileHover={{
                            borderColor: "color-mix(in srgb, var(--color-primary) 40%, transparent)",
                            background:  "color-mix(in srgb, var(--color-primary) 6%, transparent)",
                            color:       "var(--color-heading)",
                            y:           -2,
                            scale:       1.03,
                            transition:  { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <Icon size={14} style={{ color: "var(--color-primary)" }} />
                          <span>{item.name}</span>
                        </motion.div>
                      );
                    })}

                    {/* "+ More in App" chip */}
                    <motion.div variants={chipItem}>
                      <motion.div
                        whileHover={{ y: -2, scale: 1.04, transition: { duration: 0.2, ease: spring2 } }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <Link
                          href="/download"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl"
                          style={{
                            background: "var(--color-primary)",
                            color:      "white",
                            position:   "relative",
                            overflow:   "hidden",
                          }}
                        >
                          <motion.span
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                              x:          "-100%",
                            }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.45 }}
                          />
                          + More in App
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* ══ RIGHT: offset 2-column image grid ══ */}
                <motion.div
                  className="relative"
                  variants={imagesContainer}
                  initial="hidden"
                  animate="visible"
                  /* extra bottom padding so offset cards don't clip */
                  style={{ paddingBottom: "2rem" }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {cat.items.slice(0, 4).map((item, i) => (
                      <motion.div
                        key={`${activeId}-img-${i}`}
                        className="relative overflow-hidden rounded-2xl border"
                        style={{
                          aspectRatio: "3/4",
                          borderColor: "var(--color-border)",
                          /* col 0 & 2 shift up, col 1 & 3 shift down */
                          marginTop:   offsets[i],
                        }}
                        variants={imageCard(i)}
                        whileHover={{
                          y:          -8,
                          scale:      1.02,
                          transition: { duration: 0.35, ease: spring2 },
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Image — zooms on hover */}
                        <motion.div
                          className="w-full h-full relative"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                          />
                        </motion.div>

                        {/* Always-visible bottom gradient overlay */}
                        <div
                          className="absolute bottom-0 left-0 right-0 pointer-events-none"
                          style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                            padding:    "1.25rem 1rem 0.85rem",
                            /* stretch gradient tall enough to always cover text */
                            height:     "55%",
                            display:    "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap:        "2px",
                          }}
                        >
                          {/* Category pill */}
                          <span
                            style={{
                              display:       "inline-block",
                              fontSize:      "9px",
                              fontWeight:    800,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color:         "var(--color-primary)",
                              marginBottom:  "2px",
                            }}
                          >
                            {cat.title}
                          </span>

                          {/* Dish name */}
                          <p
                            style={{
                              fontSize:   "13px",
                              fontWeight: 700,
                              color:      "#fff",
                              lineHeight: 1.25,
                              margin:     0,
                            }}
                          >
                            {item.name}
                          </p>
                        </div>

                        {/* Subtle red corner accent on first card */}
                        {i === 0 && (
                          <div
                            className="absolute top-3 right-3"
                            style={{
                              width:        "28px",
                              height:       "28px",
                              borderRadius: "50%",
                              background:   "var(--color-primary)",
                              display:      "flex",
                              alignItems:   "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 9.5l7-7M9.5 9.5V2.5H2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                
                </motion.div>

              </div>

              {/* ── Bottom CTA strip ── */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border"
                style={{
                  background:  "var(--color-bg-card)",
                  borderColor: "var(--color-border)",
                }}
                variants={stripVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  <span style={{ color: "var(--color-primary)", fontWeight: 900 }}>255+ dishes</span>{" "}
                  available with real-time stock visibility.
                </p>

                <motion.div whileHover={{ x: 3, transition: { duration: 0.2 } }}>
                  <Link
                    href="/download"
                    className="text-sm font-black uppercase tracking-widest px-3 md:px-6 py-3 rounded-xl transition-all"
                    style={{ color: "var(--color-primary)" }}
                  >
                    View Full Menu in App →
                  </Link>
                </motion.div>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}