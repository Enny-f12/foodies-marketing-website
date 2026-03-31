"use client";

import { motion } from "framer-motion";
import { Clock, Users, ChefHat, Star, TrendingUp, ArrowRight } from "lucide-react";
import type { Job } from "../../../types";

interface InternshipsSectionProps {
  onRegisterInterest: (job: Job) => void;
  fallbackJob: Job;
}

const INTERNSHIP_FEATURES = [
  { Icon: Clock,      text: "3-month paid internship" },
  { Icon: Users,      text: "Mentorship from experienced chefs" },
  { Icon: ChefHat,    text: "Hands-on training in all kitchen stations" },
  { Icon: Star,       text: "Certificate of completion" },
  { Icon: TrendingUp, text: "Potential for full-time employment" },
];

export function InternshipsSection({ onRegisterInterest, fallbackJob }: InternshipsSectionProps) {
  return (
    <section id="internships" style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <div style={{
        background: "var(--color-surface-ink)", borderRadius: 20,
        padding: "clamp(2rem, 5vw, 3rem)", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(225,11,28,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="internship-layout">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
              <div style={{ width: 28, height: 2, background: "var(--color-primary)", borderRadius: 2 }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-secondary)", fontFamily: "var(--font-sans)" }}>
                Internships & Apprenticeships
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-on-ink)", textTransform: "uppercase", margin: "0 0 1rem" }}>
              New to the<br /><span style={{ color: "var(--color-primary)" }}>Industry?</span>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-on-ink-muted)", lineHeight: 1.7, margin: "0 0 1.5rem", maxWidth: 420 }}>
              Passionate about food but just starting out? We offer structured
              training programs for aspiring chefs and hospitality professionals.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => onRegisterInterest(fallbackJob)}
              style={{
                padding: "0.9rem 1.75rem", borderRadius: 10, border: "none",
                background: "var(--color-primary)", color: "#fff", cursor: "pointer",
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              Register Interest for Next Cohort <ArrowRight size={15} strokeWidth={2.5} />
            </motion.button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {INTERNSHIP_FEATURES.map((item, i) => {
              const IIcon = item.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.85rem 1.1rem", borderRadius: 10,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <IIcon size={16} color="var(--color-secondary)" strokeWidth={1.8} />
                  <span style={{ fontSize: "0.85rem", color: "var(--color-on-ink)", fontFamily: "var(--font-sans)" }}>{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}