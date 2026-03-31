"use client";

import { motion } from "framer-motion";
import { Share2, Users, Flame, Star, Sparkles } from "lucide-react";

const STEPS = [
  { icon: Share2, label: "Share your link",      desc: "Get your unique referral link from Profile → Refer a Friend" },
  { icon: Users,  label: "Friend signs up",      desc: "They download the app and create their account" },
  { icon: Flame,  label: "Friend orders ₦5k+",  desc: "Their first order must be ₦5,000 or more" },
  { icon: Star,   label: "Both get rewarded",    desc: "You earn 1,000 pts · They get ₦2,000 off" },
];

const REWARD_CALLOUTS = [
  { label: "You earn",    value: "1,000 pts", sub: "per successful referral", color: "var(--color-primary)" },
  { label: "Friend gets", value: "₦2,000 off", sub: "their first order",     color: "var(--color-secondary)" },
];

export function ReferralBlock() {
  return (
    <div>
      {/* Reward callouts */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }} className="referral-rewards-grid">
        {REWARD_CALLOUTS.map((item) => (
          <div key={item.label} style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "1.25rem", textAlign: "center" }}>
            <div style={{ fontSize: "0.65rem", color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--font-sans)", marginBottom: "0.4rem" }}>
              {item.label}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", color: item.color, fontWeight: 700, lineHeight: 1 }}>
              {item.value}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginTop: "0.3rem" }}>
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Steps */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {STEPS.map((step, i) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                border: "1px solid color-mix(in srgb, var(--color-primary) 25%, transparent)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <StepIcon size={17} color="var(--color-primary)" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-heading)", fontWeight: 600, marginBottom: "0.15rem" }}>
                  <span style={{ color: "var(--color-primary)", fontWeight: 700, marginRight: 6 }}>0{i + 1}.</span>
                  {step.label}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>
                  {step.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* No-limit note */}
      <div style={{
        marginTop: "1.5rem", padding: "0.85rem 1rem", borderRadius: 10,
        background: "color-mix(in srgb, var(--color-secondary) 8%, transparent)",
        border: "1px solid color-mix(in srgb, var(--color-secondary) 25%, transparent)",
        display: "flex", alignItems: "center", gap: "0.6rem",
      }}>
        <Sparkles size={15} color="var(--color-secondary)" strokeWidth={2} />
        <span style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
          <strong style={{ color: "var(--color-secondary)" }}>No limit on referrals.</strong>{" "}
          10 friends = 10,000 points = Gold tier automatically.
        </span>
      </div>
    </div>
  );
}