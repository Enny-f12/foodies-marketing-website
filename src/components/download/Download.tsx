"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  { icon: ShoppingBag,   title: "Seamless Ordering",    desc: "Browse our full menu, customize your dishes, and checkout in seconds."           },
  { icon: Zap,           title: "Real-Time Inventory",  desc: "See live stock availability before you order. No more disappointment."           },
  { icon: CalendarCheck, title: "Easy Reservations",    desc: "Book tables in real-time, make special requests, and get instant confirmations." },
  { icon: Truck,         title: "Live Tracking",        desc: "Track your driver live on the map with accurate ETA updates."                    },
  { icon: Gift,          title: "Loyalty & Rewards",    desc: "Earn points on every order, unlock VIP tiers, and get exclusive offers."         },
  { icon: MessageCircle, title: "Concierge Chat",       desc: "Chat with our team for assistance, recommendations, or dietary needs."           },
];

// ── Each screen has its own unique image path and href ──
const screens = [
  { id: 1, label: "Home",     desc: "Real-time discovery",       image: "/assets/download/Home.png",     href: "/screens/home"     },
  { id: 2, label: "Menu",     desc: "255+ authentic dishes",     image: "/assets/download/Menu.png",     href: "/screens/menu"     },
  { id: 3, label: "Order",    desc: "Seamless digital checkout", image: "/assets/download/Cart.png",    href: "/screens/order"    },
  { id: 4, label: "Tracking", desc: "Live delivery updates",     image: "/assets/download/Track Order.png", href: "/screens/tracking" },
  { id: 5, label: "Reservation",  desc: "Private dining experiences",   image: "/assets/download/Reservation.png",  href: "/screens/profile"  },
];

/* ── Page ───── */
export default function AppDownloadPage() {
  const [activeScreen, setActiveScreen] = useState(0);
  // Tracks which screen images failed to load — keyed by screen id
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const featuresRef = useRef<HTMLElement>(null);
  const screensRef  = useRef<HTMLElement>(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px 0px" });
  const screensInView  = useInView(screensRef,  { once: true, margin: "-60px 0px" });

  return (
    <main style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>


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
                  boxShadow:  "0 12px 32px rgba(0,0,0,0.08)",
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
                key={screen.id}           // ← unique per card (1–5)
                className="min-w-65 snap-center shrink-0"
                variants={staggerItem}
              >
                <Link
                  href={screen.href}
                  onClick={(e) => {
                    // First click selects; if already active the Link navigates normally
                    if (activeScreen !== i) {
                      e.preventDefault();
                      setActiveScreen(i);
                    }
                  }}
                  style={{ textDecoration: "none", display: "block" }}
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
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-2xl z-20"
                      style={{ background: "var(--color-bg-soft)", border: "0.5px solid var(--color-border)", borderTop: "none" }}
                    />

                    {/* Active indicator line */}
                    <AnimatePresence>
                      {activeScreen === i && (
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-0.5 z-20"
                          style={{ background: "var(--color-primary)" }}
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.35, ease: spring2 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* ── Image with label fallback ── */}
                    {!failedImages[screen.id] ? (
                      <>
                        <Image
                          src={screen.image}
                          alt={screen.label}
                          fill
                          className="object-cover object-top"
                          sizes="260px"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [screen.id]: true }))
                          }
                        />
                        {/* Gradient label overlay */}
                        <div
                          className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-10"
                          style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                          }}
                        >
                          <h4 className="font-semibold text-sm mb-0.5" style={{ color: "#fff" }}>
                            {screen.label}
                          </h4>
                          <p className="text-xs" style={{ color: "rgba(255,255,255,0.72)" }}>
                            {screen.desc}
                          </p>
                        </div>
                      </>
                    ) : (
                      /* Fallback — numbered label block (same as original) */
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
                    )}
                  </motion.div>
                </Link>
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
                  height:       "4px",
                  background:   i === activeScreen ? "var(--color-primary)" : "var(--color-border)",
                  border:       "none",
                  padding:      0,
                  cursor:       "pointer",
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