"use client";

import { Clock, ShieldCheck } from "lucide-react";

const EXPIRY_RULES = [
  { label: "Regular earned points", expiry: "12 months", note: "from last account activity" },
  { label: "Bonus points",          expiry: "6 months",  note: "first order, birthday, referral" },
  { label: "Expiry order",          expiry: "FIFO",      note: "oldest points expire first" },
];

const REMINDER_NOTIFICATIONS = [
  { days: "30 days", methods: ["Email", "In-app"] },
  { days: "14 days", methods: ["Email", "In-app"] },
  { days: "7 days",  methods: ["Email", "In-app", "SMS"] },
  { days: "1 day",   methods: ["Push"] },
];

export function ExpiryBlock() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }} className="expiry-grid">
      {/* Expiry policy */}
      <div style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
          <Clock size={15} color="var(--color-primary)" strokeWidth={2} />
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-heading)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}>
            Expiry Policy
          </span>
        </div>
        {EXPIRY_RULES.map((r, i) => (
          <div
            key={i}
            style={{
              paddingBottom: i < EXPIRY_RULES.length - 1 ? "0.85rem" : 0,
              marginBottom: i < EXPIRY_RULES.length - 1 ? "0.85rem" : 0,
              borderBottom: i < EXPIRY_RULES.length - 1 ? "1px solid var(--color-border)" : "none",
            }}
          >
            <div style={{ fontSize: "0.78rem", color: "var(--color-heading)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{r.label}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.2rem" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-primary)", fontFamily: "var(--font-display)" }}>{r.expiry}</span>
              <span style={{ fontSize: "0.7rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>{r.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Reminder schedule */}
      <div style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
          <ShieldCheck size={15} color="var(--color-secondary)" strokeWidth={2} />
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-heading)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}>
            We Remind You
          </span>
        </div>
        {REMINDER_NOTIFICATIONS.map((n, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: i < REMINDER_NOTIFICATIONS.length - 1 ? "0.65rem" : 0 }}>
            <span style={{ fontSize: "0.8rem", color: "var(--color-heading)", fontFamily: "var(--font-sans)", fontWeight: 600, minWidth: 60 }}>{n.days}</span>
            <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {n.methods.map((m) => (
                <span key={m} style={{
                  fontSize: "0.6rem", padding: "0.15rem 0.45rem", borderRadius: 10,
                  background: "var(--color-bg-soft)", border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", fontWeight: 500,
                }}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}