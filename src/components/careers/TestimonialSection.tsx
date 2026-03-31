"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "../../../lib/data";
import { SectionLabel } from "./SectionLabel";

export function TestimonialsSection() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-60px" });

  return (
    <section ref={testimonialRef} style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <SectionLabel text="Voices from Our Team" />
      <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "2rem", marginTop: 0 }}>
        Our People <span style={{ color: "var(--color-primary)" }}>Speak</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,280px), 1fr))", gap: "1rem" }}>
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              background: "var(--color-bg-card)", border: "1px solid var(--color-border)",
              borderRadius: 16, padding: "1.75rem",
              display: "flex", flexDirection: "column", gap: "1.25rem",
            }}
          >
            <Quote size={28} color={t.color} strokeWidth={1.5} style={{ opacity: 0.6 }} />
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "0.92rem",
              color: "var(--color-text)", lineHeight: 1.75,
              margin: 0, flex: 1, fontStyle: "italic",
            }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {/* Portrait replacing initials */}
              <div style={{
                width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                overflow: "hidden",
                border: `2px solid ${t.color}`,
                position: "relative",
              }}>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700, color: "var(--color-heading)" }}>{t.name}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>{t.role} · {t.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}