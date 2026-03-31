"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { NOTIFICATIONS } from "../../../lib/loyaltydata";

const ACTIVITY_ITEMS = [
  "Placing any order",
  "Earning points (any method)",
  "Redeeming points",
  "Logging into the app",
  "Writing a review",
];

export function NotificationsTicker() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Ticker */}
      <div style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
          <span style={{ fontSize: "0.72rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Live Notifications
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{ padding: "1rem" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.4rem" }}>{NOTIFICATIONS[active].icon}</span>
              <div>
                <div style={{ fontSize: "0.85rem", color: "var(--color-heading)", fontFamily: "var(--font-sans)", fontWeight: 500, lineHeight: 1.4, marginBottom: "0.2rem" }}>
                  {NOTIFICATIONS[active].text}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
                  {NOTIFICATIONS[active].sub}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav */}
        <div style={{ display: "flex", gap: "0.35rem", padding: "0 1rem 0.85rem", justifyContent: "center" }}>
          {NOTIFICATIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 18 : 6, height: 6, borderRadius: 3,
                background: i === active ? "var(--color-primary)" : "var(--color-border)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.22s",
              }}
            />
          ))}
        </div>
      </div>

      {/* What resets your expiry clock */}
      <div style={{ marginTop: "1rem", background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "1.1rem" }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--color-heading)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-sans)", marginBottom: "0.75rem" }}>
          What resets your expiry clock
        </div>
        {ACTIVITY_ITEMS.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: i < ACTIVITY_ITEMS.length - 1 ? "0.45rem" : 0 }}>
            <Check size={12} color="var(--color-primary)" strokeWidth={2.5} />
            <span style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}