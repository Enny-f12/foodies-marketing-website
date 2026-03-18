"use client";

import { useRef } from "react";
import { FAQCard } from "@/components/ui/Card";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

const lineVariants: Variants = {
  hidden:  { width: 0 },
  visible: { width: 32, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 } },
};

const listVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, x: 32, scale: 0.98 },
  visible: { opacity: 1, x: 0,  scale: 1,   transition: t1() },
};

/* ── Component ─────────────────────────────────────────────────────── */
const faqs = [
  {
    question: "Do you offer vegetarian or vegan options?",
    answer:   "Yes, we have a curated selection of plant-based Nigerian dishes. Ask your server or check our full menu for labelled options.",
  },
  {
    question: "Is there a dress code?",
    answer:   "We maintain a smart-casual dress code across all our locations to ensure a refined dining atmosphere.",
  },
  {
    question: "Do you host private events?",
    answer:   "Absolutely. We offer bespoke private dining experiences for corporate events, birthdays, and more. Use the enquiry form or contact us directly.",
  },
  {
    question: "How do I modify my reservation?",
    answer:   "You can modify your reservation by calling the location directly or using our online booking system up to 2 hours before your scheduled time.",
  },
  {
    question: "Is there parking available?",
    answer:   "All three locations have dedicated parking facilities. Valet service is available at our Lekki Phase 1 and Abuja Wuse locations.",
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px 0px" });

  return (
    <section style={{ background: "var(--color-bg)" }} className="w-full">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)" }}
      >
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* ── LEFT: Header ── */}
          <motion.div
            className="lg:col-span-2 top-32"
            variants={headerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="h-px shrink-0"
                style={{ background: "var(--color-primary)" }}
                variants={lineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
              <span className="section-label">Concierge & Support</span>
            </div>

            <motion.h2
              className="font-display font-black leading-tight mb-6"
              style={{
                color:         "var(--color-heading)",
                fontSize:      "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: spring1, delay: 0.15 }}
            >
              Have a{" "}
              <motion.span
                className="text-primary italic"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: spring1, delay: 0.3 }}
              >
                Question?
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-muted text-sm max-w-sm mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            >
              Find quick answers to common inquiries about our dining experience,
              dress codes, and private events.
            </motion.p>

            {/* Decorative count */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span
                className="font-display font-black"
                style={{ fontSize: "2.5rem", color: "var(--color-primary)", lineHeight: 1 }}
              >
                {faqs.length}
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--color-text-secondary)" }}>
                Popular<br />Questions
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: FAQ list ── */}
          <motion.div
            className="lg:col-span-3 space-y-2"
            variants={listVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <FAQCard {...faq} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FAQSection;