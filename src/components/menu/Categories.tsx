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

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */

/* Category panel — fades + slight Y on tab switch */
const panelVariants: Variants = {
  enter:  { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: t1() },
  exit:   { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const headerVariants: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: t1() },
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
  visible: { opacity: 1, y: 0, transition: t1({ delay: 0.2 }) },
};

/* Chips stagger */
const chipsContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const chipItem: Variants = {
  hidden:  { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1,    y: 0, transition: t2() },
};

/* Images stagger */
const imagesContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const imageCard = (i: number): Variants => ({
  hidden:  { opacity: 0, y: i === 0 ? 30 : 50, scale: 0.96 },
  visible: { opacity: 1, y: 0,                  scale: 1,    transition: t1({ delay: i * 0.1 }) },
});

/* Bottom strip */
const stripVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: t1({ delay: 0.4 }) },
};

/* ── Component ─────────────────────────────────────────────────────── */
export function MenuCategories() {
  const [activeId, setActiveId] = useState(categories[0].id);

  const cat      = categories.find((c) => c.id === activeId) ?? categories[0];
  const catIndex = categories.findIndex((c) => c.id === activeId);
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

                {/* ── Left: copy + chips ── */}
                <div>
                  {/* Headline — line unmask */}
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

                  {/* Description */}
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
                            y: -2,
                            scale: 1.03,
                            transition: { duration: 0.2 },
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
                              x: "-100%",
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

                {/* ── Right: image grid ── */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={imagesContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {cat.items.slice(0, 2).map((item, i) => (
                    <motion.div
                      key={`${activeId}-img-${i}`}
                      className="relative overflow-hidden rounded-2xl border"
                      style={{
                        aspectRatio:  i === 0 ? "4/5" : "1/1",
                        marginTop:    i === 1 ? "2rem" : "0",
                        borderColor:  "var(--color-border)",
                      }}
                      variants={imageCard(i)}
                      /* Card lifts on hover */
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                        transition: { duration: 0.35, ease: spring2 },
                      }}
                    >
                      {/* Image zooms inside */}
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.09 }}
                        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={i === 0}
                          loading="eager"
                        />
                      </motion.div>

                      {/* Dark overlay fades on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ background: "rgba(0,0,0,0.12)" }}
                      />

                      {/* Info card — slides up on hover */}
                      <motion.div
                        className="absolute bottom-4 left-4 right-4 p-3 rounded-lg shadow-lg"
                        style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: spring2 }}
                      >
                        <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>
                          {cat.title}
                        </p>
                        <p className="text-xs font-bold text-neutral-900">{item.name}</p>
                      </motion.div>
                    </motion.div>
                  ))}
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

                <motion.div
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                >
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