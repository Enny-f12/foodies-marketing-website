"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { EARNING_ACTIONS, CALC_TABLE } from "../../../lib/datas";
import { SectionLabel } from "@/components/loyalty/Ui";
import { PointsCalculator } from "@/components/loyalty/PointsCalculator";

export function EarningSection() {
  return (
    <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
      <SectionLabel text="How to Earn" />
      <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "1.5rem", marginTop: 0 }}>
        Points on Everything
      </h3>

      <div className="earning-layout">
        {/* Actions grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,220px), 1fr))", gap: "0.65rem" }}>
          {EARNING_ACTIONS.map((a, i) => {
            const AIcon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                style={{
                  background: "var(--color-bg-card)", border: "1px solid var(--color-border)",
                  borderRadius: 14, padding: "1.1rem",
                  display: "flex", alignItems: "flex-start", gap: "0.75rem",
                  cursor: "default", transition: "border-color 0.2s",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                  background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--color-primary) 22%, transparent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <AIcon size={16} color="var(--color-primary)" strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-heading)", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.2rem" }}>
                    {a.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-primary)", fontWeight: 700 }}>
                    {a.pts}
                  </div>
                  <div style={{ fontSize: "0.68rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginTop: "0.15rem" }}>
                    {a.note}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <PointsCalculator />
      </div>

      {/* Quick reference table */}
      <div style={{ marginTop: "1.25rem", background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "0.85rem 1rem", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Trophy size={14} color="var(--color-secondary)" strokeWidth={2} />
          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--color-heading)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}>
            Quick Reference — Points per Order
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,170px), 1fr))" }}>
          {CALC_TABLE.map((row, i) => (
            <div key={i} style={{
              padding: "0.85rem 1rem", textAlign: "center",
              borderRight: i < CALC_TABLE.length - 1 ? "1px solid var(--color-border)" : "none",
            }}>
              <div style={{ fontSize: "0.72rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginBottom: "0.3rem" }}>{row.order}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--color-primary)", fontWeight: 700 }}>{row.pts.toLocaleString()}</div>
              <div style={{ fontSize: "0.6rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>pts</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}