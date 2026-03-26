"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { Tier } from "../../../types/Loyaltyindex";
import { TIERS, TIER_FEATURES } from "../../../lib/loyaltydata";

export function TierComparison() {
  const [highlighted, setHighlighted] = useState<Tier>("silver");

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ minWidth: 560 }}>
        {/* Header row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <div />
          {(["bronze", "silver", "gold"] as Tier[]).map((t) => {
            const td     = TIERS[t];
            const TIcon  = td.Icon;
            const active = highlighted === t;
            return (
              <motion.button
                key={t}
                onClick={() => setHighlighted(t)}
                whileHover={{ y: -2 }}
                style={{
                  padding: "1rem 0.75rem", borderRadius: 12, cursor: "pointer",
                  border: active ? `2px solid ${td.color}` : "2px solid var(--color-border)",
                  background: active ? td.bg : "var(--color-bg-card)",
                  textAlign: "center", transition: "all 0.2s",
                }}
              >
                <TIcon size={22} color={td.color} strokeWidth={1.8} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: td.color, fontWeight: 700, textTransform: "uppercase", marginTop: "0.3rem" }}>
                  {td.label}
                </div>
                <div style={{ fontSize: "0.6rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginTop: "0.15rem" }}>
                  {td.pts}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Feature rows */}
        {TIER_FEATURES.map(({ key, label }) => (
          <div
            key={key}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.5rem", marginBottom: "0.35rem" }}
          >
            <div style={{
              padding: "0.65rem 0.75rem", borderRadius: 8,
              background: "var(--color-bg-soft)",
              fontSize: "0.78rem", color: "var(--color-text-secondary)",
              fontFamily: "var(--font-sans)", fontWeight: 500,
              display: "flex", alignItems: "center",
            }}>
              {label}
            </div>
            {(["bronze", "silver", "gold"] as Tier[]).map((t) => {
              const td     = TIERS[t];
              const val    = td[key as keyof typeof td];
              const active = highlighted === t;
              return (
                <div
                  key={t}
                  style={{
                    padding: "0.65rem 0.75rem", borderRadius: 8, textAlign: "center",
                    background: active ? td.bg : "var(--color-bg-card)",
                    border: active ? `1px solid ${td.border}` : "1px solid transparent",
                    fontSize: "0.78rem", fontFamily: "var(--font-sans)", color: "var(--color-text)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                >
                  {typeof val === "boolean" ? (
                    val
                      ? <Check size={15} color={td.color} strokeWidth={2.5} />
                      : <X size={15} color="var(--color-text-secondary)" strokeWidth={2} />
                  ) : (
                    <span style={{ fontWeight: 500 }}>{val as string}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}