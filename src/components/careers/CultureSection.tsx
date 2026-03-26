"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CULTURE_VALUES } from "../../../lib/data";
import { SectionLabel } from "./SectionLabel";

export function CultureSection() {
  const cultureRef = useRef<HTMLDivElement>(null);
  const cultureInView = useInView(cultureRef, { once: true, margin: "-60px" });

  return (
    <section ref={cultureRef} style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <div className="culture-layout">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={cultureInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel text="Our Culture" />
          <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "1rem", marginTop: 0 }}>
            More Than<br /><span style={{ color: "var(--color-primary)" }}>A Job</span>
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: 460 }}>
            At Foodies Hot & Spicy, we believe that exceptional hospitality starts
            with exceptional people. We&#39;re not just serving food — we&#39;re creating
            experiences, building community, and sharing our passion for Nigerian
            cuisine with every guest.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.75, margin: 0, maxWidth: 460 }}>
            When you join Foodies, you become part of a family that truly values
            the people who make it all possible.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {CULTURE_VALUES.map((v, i) => {
            const VIcon = v.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={cultureInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                whileHover={{ x: 4 }}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.25rem", borderRadius: 12,
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  cursor: "default", transition: "border-color 0.2s",
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: `color-mix(in srgb, ${v.color} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${v.color} 25%, transparent)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <VIcon size={18} color={v.color} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "var(--color-heading)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{v.label}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginTop: "0.1rem" }}>{v.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}