"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { Tier } from "../../../types/Loyaltyindex";
import { TIERS } from "../../../lib/loyaltydata";

export function PointsCalculator() {
  const [input, setInput] = useState(5000);
  const [tier, setTier]   = useState<Tier>("bronze");

  const multipliers: Record<Tier, number> = { bronze: 1, silver: 1.1, gold: 1.2 };
  const base  = Math.floor(input / 100) * 10;
  const total = Math.floor(base * multipliers[tier]);

  return (
    <div style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
        <TrendingUp size={18} color="var(--color-primary)" strokeWidth={2} />
        <h4 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", margin: 0, fontSize: "1rem", fontWeight: 700, textTransform: "uppercase" }}>
          Points Calculator
        </h4>
      </div>

      {/* Slider */}
      <div style={{ marginBottom: "1.2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <label style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
            Order amount
          </label>
          <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-heading)", fontFamily: "var(--font-display)" }}>
            ₦{input.toLocaleString()}
          </span>
        </div>
        <input
          type="range" min={1000} max={50000} step={500} value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          style={{ width: "100%", accentColor: "var(--color-primary)", cursor: "pointer" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.2rem" }}>
          <span style={{ fontSize: "0.62rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>₦1,000</span>
          <span style={{ fontSize: "0.62rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>₦50,000</span>
        </div>
      </div>

      {/* Tier selector */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", fontWeight: 500, marginBottom: "0.5rem" }}>
          Your tier
        </div>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {(["bronze", "silver", "gold"] as Tier[]).map((t) => {
            const td     = TIERS[t];
            const active = tier === t;
            return (
              <button
                key={t}
                onClick={() => setTier(t)}
                style={{
                  flex: 1, padding: "0.5rem 0", borderRadius: 8, cursor: "pointer",
                  border: active ? `1.5px solid ${td.color}` : "1.5px solid var(--color-border)",
                  background: active ? td.bg : "transparent",
                  color: active ? td.color : "var(--color-text-secondary)",
                  fontSize: "0.75rem", fontWeight: active ? 700 : 400,
                  fontFamily: "var(--font-sans)", transition: "all 0.18s",
                  textTransform: "uppercase", letterSpacing: "0.06em",
                }}
              >
                {td.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result */}
      <motion.div
        key={total}
        initial={{ scale: 0.95, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          background: "color-mix(in srgb, var(--color-primary) 8%, transparent)",
          border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
          borderRadius: 12, padding: "1rem", textAlign: "center",
        }}
      >
        <div style={{ fontSize: "0.65rem", color: "var(--color-text-secondary)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-sans)", marginBottom: "0.3rem" }}>
          You&apos;ll earn
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--color-primary)", fontWeight: 700, lineHeight: 1 }}>
          {total.toLocaleString()}
        </div>
        <div style={{ fontSize: "0.7rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginTop: "0.2rem" }}>
          points
          {tier !== "bronze" && (
            <span style={{ color: TIERS[tier].color, fontWeight: 600, marginLeft: 4 }}>
              (+{tier === "silver" ? "10%" : "20%"} {tier} bonus)
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}