"use client";

import { useRef } from "react";
import Image from "next/image"; 
import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const headlineContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const wordVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AboutHero() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  const words = ["Where", "Tradition", "Meets", "Innovation."];

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-end"
      style={{
        background: "var(--color-surface-ink)",
        minHeight:  "clamp(350px,50vw,520px)",
        paddingTop: "72px",
      }}
    >
      {/* ── BACKGROUND & OVERLAY ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/foodies/Comfy Studio 9.jpg.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-top  w-full h-full"
          sizes="100vw"
        />
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: "linear-gradient(to top, var(--color-surface-ink) 20%, rgba(0,0,0,0.5) 100%)",
          }} 
        />
      </div>

      {/* ── CONTENT LAYER ── */}
      <div
        className="relative z-30 max-w-7xl mx-auto w-full"
        style={{ padding: "clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem)" }}
      >
       {/* Eyebrow */}
               <motion.div
                 className="flex items-center gap-3 mb-4"
                 variants={eyebrowVariants}
                 initial="hidden"
                 animate={inView ? "visible" : "hidden"}
               >
                 <motion.div
                   className="h-px w-12"
                   style={{ background: "var(--color-secondary)" }}
                   variants={lineVariants}
                   initial="hidden"
                   animate={inView ? "visible" : "hidden"}
                 />
                 <span
                   className="text-xs font-semibold uppercase tracking-widest"
                   style={{ color: "var(--color-secondary)" }}
                 >
                   Our Story
                 </span>
               </motion.div>

        {/* Headline — Capitalized */}
        <motion.h1
          className="font-black leading-tight capitalize" 
          style={{
            textTransform: "capitalize",
            fontFamily: "var(--font-nord)",
            color: "var(--color-on-ink)",
            fontSize: "clamp(2.4rem,6vw,4.5rem)",
            maxWidth: "min(90vw,720px)",
          }}
          variants={headlineContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {words.map((word) => (
            <span
              key={word}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em" , textTransform: "capitalize" }}
            >
              <motion.span
                style={{
                  display: "inline-block",
                  color: word === "Meets" ? undefined : "var(--color-on-ink)",
                  textTransform: "capitalize" // Forces each word to be fully capitalized
                }}
                className={word === "Meets" ? "text-gradient" : ""}
                variants={wordVariants}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-8 h-px"
          style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary), transparent)", originX: 0 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        />
      </div>
    </section>
  );
}