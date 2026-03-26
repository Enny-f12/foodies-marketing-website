"use client";

import { motion } from "framer-motion";
import { Crown, Medal } from "lucide-react";

export function LoyaltyHeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.8, ease: [0.22, 0.68, 0, 1.1], delay: 0.3 }}
      style={{
        position: "relative", width: "100%", maxWidth: 360,
        background: "linear-gradient(135deg, #1a0a04 0%, #2d1208 40%, #1a0a04 100%)",
        borderRadius: 20, padding: "1.5rem 1.75rem",
        border: "1px solid rgba(252,208,99,0.2)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(252,208,99,0.1)",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(225,11,28,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -30, left: -20, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(252,208,99,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.4rem" }}>
        <div>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(252,208,99,0.6)", fontFamily: "var(--font-sans)", marginBottom: "0.2rem" }}>
            FOODIES REWARDS
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#FCD063", fontWeight: 700, letterSpacing: "0.05em" }}>
            HOT &amp; SPICY
          </div>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #FCD063, #E8B94A)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Crown size={18} color="#1a0a04" strokeWidth={2.5} />
        </div>
      </div>

      {/* Points */}
      <div style={{ marginBottom: "1.2rem" }}>
        <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}>
          Available Points
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#fff", fontWeight: 700, lineHeight: 1.1 }}
        >
          4,280
          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginLeft: 4, fontWeight: 400 }}>pts</span>
        </motion.div>
      </div>

      {/* Progress to Gold */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Silver Tier</span>
          <span style={{ fontSize: "0.62rem", color: "#FCD063", fontFamily: "var(--font-sans)", fontWeight: 600 }}>5,720 pts to Gold</span>
        </div>
        <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "43%" }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            style={{ height: "100%", background: "linear-gradient(90deg, #9BA4B5, #FCD063)", borderRadius: 4 }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.3rem" }}>
          <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)" }}>Silver 2,500</span>
          <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)" }}>Gold 10,000</span>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--font-sans)" }}>Member</div>
          <div style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 600, fontFamily: "var(--font-sans)" }}>Adaeze O.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", background: "rgba(155,164,181,0.15)", borderRadius: 20, padding: "0.3rem 0.7rem", border: "1px solid rgba(155,164,181,0.3)" }}>
          <Medal size={12} color="#9BA4B5" strokeWidth={2} />
          <span style={{ fontSize: "0.65rem", color: "#9BA4B5", fontWeight: 700, fontFamily: "var(--font-sans)", letterSpacing: "0.08em" }}>SILVER</span>
        </div>
      </div>
    </motion.div>
  );
}