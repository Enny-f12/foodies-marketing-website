"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./Data";
import { MenuTabs } from "./Tabs";
import { Button } from "@/components/ui/Button";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ────── */
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

/* ── Overlay gradients ───────────────────────────────────────────────── */
const overlayGradient = "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)";
const heroOverlay     = "linear-gradient(to top, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.22) 45%, transparent 100%)";

/*
 * Accurate sizes per slot per breakpoint.
 * Each layout section is hidden at other breakpoints via Tailwind,
 * so sizes only needs to be accurate for the breakpoint where it renders.
 * The "1px" fallback tells Next.js the image isn't used in other ranges.
 */
const SIZES = {
  mobileHero:  "(max-width: 767px) calc(100vw - 2rem), 1px",
  mobileSmall: "(max-width: 767px) 33vw, 1px",
  tabletHero:  "(min-width: 768px) and (max-width: 1023px) calc(100vw - 2rem), 1px",
  tabletSmall: "(min-width: 768px) and (max-width: 1023px) 33vw, 1px",
  desktopHero: "(min-width: 1024px) 55vw, 1px",
  desktopTopR: "(min-width: 1024px) 45vw, 1px",
  desktopBot:  "(min-width: 1024px) 22vw, 1px",
} as const;

/* ── Component ───────────────────────────────────────────────────────── */
export function MenuCategories() {
  const [activeId, setActiveId] = useState(categories[0].id);

  const cat       = categories.find((c) => c.id === activeId) ?? categories[0];
  const catIndex  = categories.findIndex((c) => c.id === activeId);
  const sectionBg = catIndex % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-soft)";

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px 0px" });

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
          style={{ padding: "clamp(2.5rem,6vw,5rem) clamp(1rem,5vw,3rem)" }}
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
                  ══════════════════════════════════════════════════════════ */}
              <div className="mb-10 lg:mb-16">

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
                    style={{ fontSize: "10px", color: "var(--color-secondary)" }}
                  >
                    {cat.label}
                  </span>
                </motion.div>

                {/* Title | divider | desc + chips */}
                <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-14">

                  {/* Giant display title */}
                  <div className="lg:w-[42%] shrink-0 overflow-hidden">
                    <motion.h2
                      className="font-display font-black leading-none"
                      style={{
                        color:    "var(--color-heading)",
                        fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
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

                  {/* Vertical divider — desktop only */}
                  <motion.div
                    className="hidden lg:block w-px self-stretch shrink-0"
                    style={{ background: "var(--color-border)" }}
                    variants={dividerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />

                  {/* Horizontal rule — mobile/tablet only */}
                  <motion.div
                    className="block lg:hidden h-px w-full"
                    style={{ background: "var(--color-border)" }}
                    initial={{ scaleX: 0, originX: "0%" }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                  />

                  {/* Right: desc + chips */}
                  <div className="flex flex-col justify-center gap-5">
                    <motion.p
                      className="leading-relaxed"
                      style={{
                        color:    "var(--color-text-secondary)",
                        fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                        maxWidth: "min(100%, 520px)",
                      }}
                      variants={descVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {cat.desc}
                    </motion.p>

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
                            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm font-medium cursor-default"
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

                      <motion.div variants={chipItem}>
                        <Link href="/download">
                          <Button variant="primary" size="sm">+ More in App</Button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  IMAGE GRID — MOBILE  (< md)
                  Hero 4:3 full width · 3 equal squares below
                  No priority — mobile layout is hidden on desktop load
                  ══════════════════════════════════════════════════════════ */}
              <div className="flex flex-col gap-3 md:hidden">

                <motion.div
                  className="relative overflow-hidden rounded-xl w-full"
                  style={{ aspectRatio: "4/3" }}
                  variants={heroVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {hero?.image && (
                    <Image
                      src={hero.image}
                      alt={hero.name}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes={SIZES.mobileHero}
                    />
                  )}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: heroOverlay }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="uppercase tracking-widest font-bold mb-1" style={{ fontSize: "9px", color: "var(--color-primary)" }}>
                      Signature Dish
                    </p>
                    <h3 className="font-display font-black leading-tight text-white text-base mb-1" 
                    style={{color: "#ffffff"}}>{hero?.name}</h3>
                    {hero?.desc && (
                      <p className="leading-relaxed line-clamp-2" style={{ fontSize: "11px", color: "rgba(255,255,255,0.62)" }}>
                        {hero.desc}
                      </p>
                    )}
                  </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-3">
                  {([topRight, botLeft, botRight] as const).map((item, i) => (
                    <motion.div
                      key={`${activeId}-mob-${i}`}
                      className="relative overflow-hidden rounded-xl"
                      style={{ aspectRatio: "1" }}
                      variants={imageCard(0.1 + i * 0.08)}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {item?.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          loading="lazy"
                          className="object-cover"
                          sizes={SIZES.mobileSmall}
                        />
                      )}
                      <div className="absolute inset-0 pointer-events-none" style={{ background: overlayGradient }} />
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <p className="text-white font-bold leading-tight" style={{ fontSize: "9px" }}>{item?.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  IMAGE GRID — TABLET  (md → lg)
                  Hero 16:7 panoramic · 3 equal 4:3 images below
                  No priority — tablet layout is hidden on desktop load
                  ══════════════════════════════════════════════════════════ */}
              <div className="hidden md:flex lg:hidden flex-col gap-3">

                <motion.div
                  className="relative overflow-hidden rounded-xl w-full"
                  style={{ aspectRatio: "16/7" }}
                  variants={heroVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.01, transition: { duration: 0.35, ease: spring2 } }}
                >
                  {hero?.image && (
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes={SIZES.tabletHero}
                      />
                    </motion.div>
                  )}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: heroOverlay }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="uppercase tracking-widest font-bold mb-1" style={{ fontSize: "9px", color: "var(--color-primary)" }}>
                      Signature Dish
                    </p>
                    <h3
                      className="font-display font-black leading-tight text-white mb-2"
                      style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#ffffff" }}
                    >
                      {hero?.name}
                    </h3>
                    {hero?.desc && (
                      <p className="leading-relaxed mb-3" style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", maxWidth: "40ch" }}>
                        {hero.desc}
                      </p>
                    )}
                    <motion.button
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--color-primary)" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.88 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                        <path d="M2.5 12.5L12.5 2.5M12.5 2.5H5.5M12.5 2.5V9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-3">
                  {([topRight, botLeft, botRight] as const).map((item, i) => (
                    <motion.div
                      key={`${activeId}-tab-${i}`}
                      className="relative overflow-hidden rounded-xl"
                      style={{ aspectRatio: "4/3" }}
                      variants={imageCard(0.15 + i * 0.09)}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: spring2 } }}
                    >
                      {item?.image && (
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.07 }}
                          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            loading="lazy"
                            className="object-cover"
                            sizes={SIZES.tabletSmall}
                          />
                        </motion.div>
                      )}
                      <div className="absolute inset-0 pointer-events-none" style={{ background: overlayGradient }} />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white font-bold leading-tight" style={{ fontSize: "12px" }}>{item?.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  IMAGE GRID — DESKTOP  (≥ lg)
                  Tall hero 55% left · right column: wide top + 2-col bottom
                  Only the desktop hero gets priority — it is the only image
                  that is genuinely above-the-fold on a desktop page load.
                  ══════════════════════════════════════════════════════════ */}
              <div
                className="hidden lg:grid gap-4"
                style={{ gridTemplateColumns: "55fr 45fr" }}
              >

                {/* Desktop hero — only image with priority */}
                <motion.div
                  className="relative overflow-hidden rounded-xl"
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
                        priority
                        className="object-cover"
                        sizes={SIZES.desktopHero}
                      />
                    </motion.div>
                  )}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: heroOverlay }} />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="uppercase tracking-widest font-bold mb-2" style={{ fontSize: "10px", color: "var(--color-primary)" }}>
                      Signature Dish
                    </p>
                    <h3
                      className="font-display font-black leading-tight text-white mb-3"
                      style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)", color: "#ffffff" }}
                    >
                      {hero?.name}
                    </h3>
                    {hero?.desc && (
                      <p className="leading-relaxed mb-5" style={{ fontSize: "13px", color: "rgba(255,255,255,0.68)", maxWidth: "28ch" }}>
                        {hero.desc}
                      </p>
                    )}
                    <motion.button
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--color-primary)" }}
                      whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.88 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M2.5 12.5L12.5 2.5M12.5 2.5H5.5M12.5 2.5V9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Desktop right column — all lazy */}
                <div className="flex flex-col gap-4">

                  <motion.div
                    className="relative overflow-hidden rounded-xl flex-1"
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
                          loading="lazy"
                          className="object-cover"
                          sizes={SIZES.desktopTopR}
                        />
                      </motion.div>
                    )}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: overlayGradient }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold leading-tight" style={{ fontSize: "13px" }}>{topRight?.name}</p>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    {([botLeft, botRight] as const).map((item, i) => (
                      <motion.div
                        key={`${activeId}-bot-${i}`}
                        className="relative overflow-hidden rounded-xl"
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
                              loading="lazy"
                              className="object-cover"
                              sizes={SIZES.desktopBot}
                            />
                          </motion.div>
                        )}
                        <div className="absolute inset-0 pointer-events-none" style={{ background: overlayGradient }} />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-white font-bold leading-tight" style={{ fontSize: "12px" }}>{item?.name}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  BOTTOM CTA STRIP
                  ══════════════════════════════════════════════════════════ */}
              <motion.div
                className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 lg:p-7 rounded-xl border"
                style={{
                  background:  "var(--color-bg-card)",
                  borderColor: "var(--color-border)",
                }}
                variants={stripVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <p className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  <span style={{ color: "var(--color-primary)", fontWeight: 900 }}>255+ dishes</span>{" "}
                  available with real-time stock visibility.
                </p>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                  <Link href="/download" className="flex-1 sm:flex-none">
                    <Button variant="ghost" size="sm" fullWidth>
                      View Full Menu →
                    </Button>
                  </Link>
                  <Link href="/download" className="flex-1 sm:flex-none">
                    <Button variant="primary" size="sm" fullWidth>
                      Order Now
                    </Button>
                  </Link>
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