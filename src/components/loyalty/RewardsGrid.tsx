"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { REWARDS } from "../../../lib/datas";
import { PointsBadge } from "../../../src/components/loyalty/Ui";

export function RewardsGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
      gap: "0.75rem",
    }}>
      {REWARDS.map((r, i) => (
        <motion.div
          key={i}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ y: -4 }}
          style={{
            background: hovered === i
              ? "color-mix(in srgb, var(--color-primary) 8%, var(--color-bg-card))"
              : "var(--color-bg-card)",
            border: hovered === i
              ? "1px solid color-mix(in srgb, var(--color-primary) 35%, transparent)"
              : "1px solid var(--color-border)",
            borderRadius: 14, padding: "1.1rem 1rem",
            cursor: "default", transition: "all 0.2s",
            position: "relative", overflow: "hidden",
          }}
        >
          {/* Points pill */}
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <PointsBadge pts={r.pts} size="sm" />
          </div>

          {/* Value badge */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            border: "1px solid color-mix(in srgb, var(--color-secondary) 35%, transparent)",
            color: "var(--color-text-secondary)", borderRadius: 6,
            padding: "0.18rem 0.45rem", fontSize: "0.65rem", fontWeight: 500,
            fontFamily: "var(--font-sans)", marginBottom: "0.65rem",
          }}>
            Worth {r.value}
          </div>

          <div style={{
            fontFamily: "var(--font-display)", fontSize: "0.92rem",
            color: "var(--color-heading)", fontWeight: 700,
            textTransform: "uppercase", lineHeight: 1.2, marginBottom: "0.3rem",
            paddingRight: "2.5rem",
          }}>
            {r.label}
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
            {r.sub}
          </div>
        </motion.div>
      ))}
    </div>
  );
}