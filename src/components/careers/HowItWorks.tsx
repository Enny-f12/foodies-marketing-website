"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "../../../lib/data";
import { SectionLabel } from "./SectionLabel";

export function HowItWorks() {
  return (
    <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <SectionLabel text="How to Apply" />
      <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "2rem", marginTop: 0 }}>
        4 Simple Steps
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,200px), 1fr))", gap: "8px",  borderRadius: 14, overflow: "hidden" }}>
        {HOW_IT_WORKS.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{ background: "var(--color-bg-card)", padding: "1.5rem", position: "relative" }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "color-mix(in srgb, var(--color-primary) 15%, transparent)", fontWeight: 700, lineHeight: 1, marginBottom: "0.65rem", userSelect: "none" }}>
              {step.step}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--color-heading)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.4rem" }}>
              {step.label}
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", lineHeight: 1.6 }}>
              {step.desc}
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}