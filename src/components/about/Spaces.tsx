"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Sparkles, ArrowRight, Utensils} from "lucide-react";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ─ */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

/* ── Variants  */
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

const imgVariants = (isFlip: boolean): Variants => ({
  hidden:  { opacity: 0, x: isFlip ? 60 : -60 },
  visible: { opacity: 1, x: 0, transition: t1() },
});

const infoVariants = (isFlip: boolean): Variants => ({
  hidden:  { opacity: 0, x: isFlip ? -40 : 40 },
  visible: { opacity: 1, x: 0, transition: t1({ delay: 0.1 }) },
});

const infoRow: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: t2() },
};

/* ── Data ──────────────────────────────────────────────────────────── */
const locations = [
  {
    id: "lekki",
    name: "Lekki, Lagos",
    address: "32b Admiralty Way, Opposite Prince Ebeano Supermarket, Lekki Phase 1, Lagos",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    note: "Private dining available for up to 20 guests",
    // Use a direct search URL for links to avoid the "must be in iframe" error
    mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=32b+Admiralty+Way+Lekki+Lagos",
    images: [
      "/assets/foodies/Comfy Studio 1.jpg.jpeg",
      "/assets/foodies/Comfy Studio 2.jpg.jpeg",
    ],
  },
  {
    id: "abuja",
    name: "Maitama, Abuja",
    address: "Plot 12, Gana Street, Maitama, Abuja",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    note: "Private dining available",
    mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=Gana+Street+Maitama+Abuja",
    images: [
      "/assets/foodies/Abuja 1.jpeg",
      "/assets/foodies/Abuja 2.jpeg",
    ],
  },
  {
    id: "lekki-2",
    name: "Lekki Phase 1, Lagos",
    address: "23 Admiralty Way opposite wole ariyo street Lekki phase 1",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    note: "Private dining available",
    mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=23+Admiralty+Way+Lekki",
    images: [
      "/assets/foodies/Comfy Studio 8.jpg.jpeg",
      "/assets/foodies/Comfy Studio.jpg.jpeg",
    ],
  },
];

const infoRows = [
  { icon: MapPin,  key: "address" },
  { icon: Clock,   key: "hours"   },
  { icon: Sparkles, key: "note"    },
] as const;

/* ── Location block ─────────────────────────────────────────────────── */
function LocationBlock({ loc, index }: { loc: typeof locations[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const isFlip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
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
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="relative aspect-4/5 rounded-2xl overflow-hidden border"
            style={{ 
              borderColor: "rgba(255,255,255,0.05)", 
              translateY: i === 1 ? "2rem" : "0" 
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: spring2 } }}
          >
            <motion.div className="w-full h-full relative" whileHover={{ scale: 1.07 }} transition={{ duration: 0.5 }}>
              <Image src={loc.images[i]} alt={loc.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Info panel ── */}
      <motion.div
        className="flex flex-col"
        style={{ direction: "ltr" }}
        variants={infoVariants(isFlip)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex items-baseline gap-4 mb-8">
          <motion.span
            className="font-display font-black text-7xl leading-none opacity-30"
            style={{ color: "var(--color-primary)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          
          <a href={loc.mapSearchUrl} target="_blank" rel="noopener noreferrer" className="group">
            <motion.h3
              className="font-display font-black uppercase transition-colors group-hover:text-primary"
              style={{ color: "var(--color-heading)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              {loc.name}
            </motion.h3>
          </a>
        </div>

        <div className="flex flex-col gap-6 mb-10">
          {infoRows.map(({ icon: Icon, key }) => (
            <motion.div
              key={key}
              className="flex items-start gap-4 group/row"
              variants={infoRow}
              whileHover={{ x: 4 }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--color-primary-faint)" }}>
                <Icon size={16} strokeWidth={2} style={{ color: "var(--color-primary)" }} />
              </div>
              {key === "address" ? (
                <a href={loc.mapSearchUrl} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed hover:text-primary transition-colors" style={{ color: "var(--color-text-secondary)" }}>
                  {loc[key]}
                </a>
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{loc[key]}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest bg-primary text-white hover:brightness-110 transition-all"
          >
            Book a Table <ArrowRight size={16} />
          </Link>
          
          {/* New Button to open Map specifically */}
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest border border-border text-(--color-heading) hover:border-primary transition-all"
          >
            Private Dining Options <Utensils size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export function OurSpacesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px 0px" });

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}>
        <div ref={headerRef}>
          <motion.div className="flex items-center gap-3 mb-4" variants={headerVariants} initial="hidden" animate={headerInView ? "visible" : "hidden"}>
            <motion.div className="h-px shrink-0 bg-primary" variants={lineVariants} initial="hidden" animate={headerInView ? "visible" : "hidden"} />
            <span className="section-label text-primary">Our Spaces</span>
          </motion.div>

          <motion.h2
            className="font-display font-black mb-16"
            style={{ color: "var(--color-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            variants={headlineContainer} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          >
            {["Three Locations.", "One Standard of Excellence."].map((line, i) => (
              <span key={line} style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  style={{ display: "block", fontStyle: i === 1 ? "italic" : "normal", color: i === 1 ? "var(--color-primary)" : "var(--color-heading)" }}
                  variants={lineUnmask}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {locations.map((loc, i) => (
            <LocationBlock key={loc.id} loc={loc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}