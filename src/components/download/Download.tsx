"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Zap, CalendarCheck, Truck,
  Gift, MessageCircle, ShoppingBag,
} from "lucide-react";
import {
  motion,
  useInView,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";
import { AppStoreButtons } from "../ui/AppStoreButtons";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const wordUnmaskContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const wordUnmask: Variants = {
  hidden:  { opacity: 0, y: 44, skewY: 3 },
  visible: { opacity: 1, y: 0,  skewY: 0, transition: t1() },
};

const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: t1() },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 32, transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.15 } },
};






/* ── Data ──── */
const features = [
  { icon: ShoppingBag,   title: "Seamless Ordering",    desc: "Browse our full menu, customize your dishes, and checkout in seconds."                    },
  { icon: Zap,           title: "Real-Time Inventory",  desc: "See live stock availability before you order. No more disappointment."                    },
  { icon: CalendarCheck, title: "Easy Reservations",    desc: "Book tables in real-time, make special requests, and get instant confirmations."          },
  { icon: Truck,         title: "Live Tracking",        desc: "Track your driver live on the map with accurate ETA updates."                             },
  { icon: Gift,          title: "Loyalty & Rewards",    desc: "Earn points on every order, unlock VIP tiers, and get exclusive offers."                  },
  { icon: MessageCircle, title: "Concierge Chat",       desc: "Chat with our team for assistance, recommendations, or dietary needs."                    },
];

const screens = [
  { id: 1, label: "Home",     desc: "Real-time discovery"       },
  { id: 2, label: "Menu",     desc: "255+ authentic dishes"      },
  { id: 3, label: "Order",    desc: "Seamless digital checkout"  },
  { id: 4, label: "Tracking", desc: "Live delivery updates"      },
  { id: 5, label: "Profile",  desc: "Exclusive loyalty tiers"    },
];

/* ── Page ───── */
export default function AppDownloadPage() {
  const [activeScreen, setActiveScreen] = useState(0);

  const heroRef     = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const offerRef    = useRef<HTMLElement>(null);
  const screensRef  = useRef<HTMLElement>(null);

  const heroInView     = useInView(heroRef,     { once: true, margin: "-60px 0px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px 0px" });
  const offerInView    = useInView(offerRef,    { once: true, margin: "-60px 0px" });
  const screensInView  = useInView(screensRef,  { once: true, margin: "-60px 0px" });

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>

      {/* ══ HERO ══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ background: "var(--color-surface-ink)", paddingTop: "72px" }}
      >
        {/* Breathing ambient glow */}
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full pointer-events-none"
          style={{ background: "var(--color-primary)", filter: "blur(100px)" }}
          animate={{ opacity: [0.06, 0.12, 0.06], scaleX: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="relative z-10 max-w-7xl mx-auto text-center"
          style={{ padding: "clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,3rem) clamp(3rem,6vw,5rem)" }}
        >
          {/* Headline — word unmask */}
          <motion.h1
            className="font-display font-bold  leading-none mb-6 mx-auto"
            style={{
              textTransform: "capitalize",
              fontSize:      "clamp(2.8rem,7vw,6rem)",
              letterSpacing: "-0.03em",
              color:         "var(--color-on-ink)",
              maxWidth:      "min(90vw,820px)",
            }}
            variants={wordUnmaskContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {["Download", "the"].map((w) => (
              <span key={w} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em" }}>
                <motion.span style={{ display: "inline-block" }} variants={wordUnmask}>{w}</motion.span>
              </span>
            ))}
            {/* "Foodies" in red */}
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em" }}>
              <motion.span style={{ display: "inline-block", color: "var(--color-primary)" }} variants={wordUnmask}>Foodies</motion.span>
            </span>
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
              <motion.span style={{ display: "inline-block" }} variants={wordUnmask}>App</motion.span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mx-auto mb-12 leading-relaxed"
            style={{
              fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
              color:    "var(--color-on-ink-muted)",
              maxWidth: "min(90vw,480px)",
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.55 }}
          >
            Your passport to premium Nigerian dining, now in your pocket.
          </motion.p>

          {/* App buttons */}
          <div className="flex justify-center mb-10">
            <AppStoreButtons/>
          </div>

          {/* Mockup image */}
          <motion.div
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              maxWidth:    "900px",
              aspectRatio: "16/9",
              border:      "0.5px solid var(--color-surface-ink-border)",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: spring1, delay: 0.4 }}
            whileHover={{ scale: 1.015, transition: { duration: 0.4, ease: spring2 } }}
          >
            <Image
              src="/images/app-mockup.png"
              alt="Foodies app screens"
              fill
              className="object-cover object-top"
              sizes="900px"
              priority
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-on-ink-faint)" }}>
                [ App Mockup Image ]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURES GRID ══ */}
      <section ref={featuresRef} className="py-24 px-6" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="h-px shrink-0"
              style={{ background: "var(--color-secondary)" }}
              variants={lineVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-secondary)" }}>
              What&rsquo;s in the App
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
            variants={fadeUp}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <h2
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em", color: "var(--color-heading)" }}
            >
              Everything you need for a{" "}
              <span style={{ color: "var(--color-primary)" }}>world-class</span>
              <br />culinary journey.
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="flex flex-col gap-4 p-6 rounded-xl"
                style={{
                  background: "var(--color-bg-card)",
                  border:     "0.5px solid var(--color-border)",
                }}
                variants={staggerItem}
                whileHover={{
                  y:           -5,
                  borderColor: i % 2 === 0
                    ? "color-mix(in srgb, var(--color-primary) 35%, transparent)"
                    : "color-mix(in srgb, var(--color-secondary) 35%, transparent)",
                  background: i % 2 === 0
                    ? "color-mix(in srgb, var(--color-primary) 4%, var(--color-bg-card))"
                    : "color-mix(in srgb, var(--color-secondary) 4%, var(--color-bg-card))",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                  transition: { duration: 0.25 },
                }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: i % 2 === 0 ? "rgba(225,11,28,0.08)" : "rgba(252,208,99,0.12)",
                  }}
                  whileHover={{
                    scale:  1.15,
                    rotate: -6,
                    transition: { duration: 0.3, ease: spring2 },
                  }}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    style={{ color: i % 2 === 0 ? "var(--color-primary)" : "var(--color-secondary-hover)" }}
                  />
                </motion.div>
                <div>
                  <motion.p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--color-heading)" }}
                    whileHover={{ color: i % 2 === 0 ? "var(--color-primary)" : "var(--color-secondary)", transition: { duration: 0.2 } }}
                  >
                    {title}
                  </motion.p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══ FIRST ORDER OFFER ══ */}
      <section ref={offerRef} className="py-24 px-6" style={{ background: "var(--color-bg)" }}>
        <motion.div
          className="max-w-3xl mx-auto rounded-xl overflow-hidden"
          style={{ border: "0.5px solid var(--color-border)" }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={offerInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: spring1 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.3, ease: spring2 } }}
        >
          {/* Banner image — zoom on hover */}
          <div className="relative h-52 overflow-hidden">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="https://i.pinimg.com/1200x/73/f8/a9/73f8a962194665f8ff4a72d0267f0fff.jpg"
                alt="Nigerian food spread"
                fill
                className="object-cover object-center"
                sizes="800px"
              />
            </motion.div>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.65))" }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={offerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: spring1, delay: 0.3 }}
            >
              <span
                className="font-display font-bold uppercase text-white"
                style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", letterSpacing: "-0.02em" }}
              >
                First Order Offer
              </span>
            </motion.div>
          </div>

          {/* Body */}
          <div className="p-10 text-center" style={{ background: "var(--color-bg-card)" }}>
            <motion.p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: "var(--color-text)" }}
              initial={{ opacity: 0, y: 14 }}
              animate={offerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Download now and get{" "}
              <motion.span
                className="font-bold"
                style={{ color: "var(--color-primary)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={offerInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, ease: spring2, delay: 0.4 }}
              >
                ₦2,000 off
              </motion.span>{" "}
              your first order.
            </motion.p>

            {/* Promo code — pulses */}
            <motion.div
              className="inline-block px-8 py-3 rounded-xl font-mono font-bold mb-8"
              style={{
                background:    "var(--color-bg-soft)",
                border:        "1.5px dashed var(--color-primary)",
                color:         "var(--color-primary)",
                fontSize:      "1.1rem",
                letterSpacing: "0.12em",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={offerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: spring2, delay: 0.45 }}
              whileHover={{
                scale:     1.04,
                boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent)",
                transition: { duration: 0.2 },
              }}
            >
              use code: FOODIESAPP
            </motion.div>

            <div className="flex justify-center items-center mb-6">
              <AppStoreButtons/>
            </div>

            <motion.p
              className="text-[10px] uppercase tracking-widest"
              style={{ color: "var(--color-text-disabled)" }}
              initial={{ opacity: 0 }}
              animate={offerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Valid for new users only. Minimum order applies.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ══ SCREEN PREVIEWS ══ */}
      <section ref={screensRef} className="py-24" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
            variants={fadeUp}
            initial="hidden"
            animate={screensInView ? "visible" : "hidden"}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="h-px shrink-0"
                  style={{ background: "var(--color-secondary)" }}
                  variants={lineVariants}
                  initial="hidden"
                  animate={screensInView ? "visible" : "hidden"}
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-secondary)" }}>
                  Interface
                </span>
              </div>
              <h2
                className="font-display font-bold leading-none"
                style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "-0.03em", color: "var(--color-heading)" }}
              >
                See the App{" "}
                <span style={{ color: "var(--color-primary)" }}>in Action</span>
              </h2>
            </div>
            <p className="text-sm" style={{ color: "var(--color-text-secondary)", maxWidth: "240px" }}>
              Designed for speed and your appetite. Swipe to explore.
            </p>
          </motion.div>

          {/* Screen cards */}
          <motion.div
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
            variants={staggerContainer}
            initial="hidden"
            animate={screensInView ? "visible" : "hidden"}
          >
            {screens.map((screen, i) => (
              <motion.div
                key={screen.id}
                className="min-w-65 snap-center shrink-0"
                variants={staggerItem}
                onClick={() => setActiveScreen(i)}
              >
                <motion.div
                  className="relative rounded-xl overflow-hidden flex flex-col items-center justify-center cursor-pointer"
                  style={{
                    aspectRatio: "9/18",
                    background:  "var(--color-bg-card)",
                    border:      `0.5px solid ${activeScreen === i ? "var(--color-primary)" : "var(--color-border)"}`,
                  }}
                  whileHover={{
                    y:           -6,
                    scale:       1.02,
                    borderColor: "var(--color-primary)",
                    background:  "color-mix(in srgb, var(--color-primary) 4%, var(--color-bg-card))",
                    transition:  { duration: 0.25, ease: spring2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={activeScreen === i ? { borderColor: "var(--color-primary)" } : {}}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-2xl"
                    style={{ background: "var(--color-bg-soft)", border: "0.5px solid var(--color-border)", borderTop: "none" }}
                  />

                  {/* Active indicator line at top */}
                  <AnimatePresence>
                    {activeScreen === i && (
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-0.5"
                        style={{ background: "var(--color-primary)" }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.35, ease: spring2 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="z-10 text-center px-8">
                    <motion.div
                      className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm"
                      style={{ background: "rgba(225,11,28,0.08)", color: "var(--color-primary)" }}
                      whileHover={{ scale: 1.15, rotate: -6, transition: { duration: 0.3, ease: spring2 } }}
                    >
                      {screen.id}
                    </motion.div>
                    <h4 className="font-semibold text-base mb-1" style={{ color: "var(--color-heading)" }}>
                      {screen.label}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {screen.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screens.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => setActiveScreen(i)}
                style={{
                  height:     "4px",
                  background: i === activeScreen ? "var(--color-primary)" : "var(--color-border)",
                  border:     "none",
                  padding:    0,
                  cursor:     "pointer",
                  borderRadius: "2px",
                }}
                animate={{ width: i === activeScreen ? 32 : 8 }}
                transition={{ duration: 0.3, ease: spring2 }}
                whileHover={{ opacity: 0.7 }}
              />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}