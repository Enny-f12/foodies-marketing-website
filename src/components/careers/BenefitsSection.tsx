"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BENEFITS } from "../../../lib/data";
import { SectionLabel } from "./SectionLabel";

export function BenefitsSection() {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-60px" });

  return (
    <section ref={benefitsRef} style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <SectionLabel text="Why Join Foodies?" />
      <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "2rem", marginTop: 0 }}>
        What We Offer <span style={{ color: "var(--color-primary)" }}>You</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,260px), 1fr))", gap: "0.75rem" }}>
        {BENEFITS.map((b, i) => {
          const BIcon = b.Icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--color-bg-card)", border: "1px solid var(--color-border)",
                borderRadius: 16, padding: "1.5rem",
                display: "flex", flexDirection: "column", gap: "0.75rem",
                transition: "box-shadow 0.2s",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 11,
                background: `color-mix(in srgb, ${b.color} 10%, transparent)`,
                border: `1px solid color-mix(in srgb, ${b.color} 22%, transparent)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <BIcon size={20} color={b.color} strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--color-heading)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>{b.label}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}