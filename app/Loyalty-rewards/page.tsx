"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, ArrowRight, ChevronRight } from "lucide-react";
import { SectionLabel }         from "@/components/loyalty/Ui";
import { LoyaltyHeroCard }      from "@/components/loyalty/LoyaltyCard";
import { EarningSection }       from "@/components/loyalty/EarningSection";
import { TierComparison }       from "@/components/loyalty/TierComparison";
import { RewardsGrid }          from "@/components/loyalty/RewardsGrid";
import { ReferralBlock }        from "@/components/loyalty/ReferralBlock";
import { NotificationsTicker }  from "@/components/loyalty/Notification";
import { ExpiryBlock }          from "@/components/loyalty/ExpiryBlock";

export default function LoyaltyPage() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  });

  return (
    <section style={{ background: "var(--color-bg)" }} className="w-full mt-10">
      <div
        ref={ref}
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(3.5rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)" }}
      >

        {/* ── HERO ── */}
        <div className="loyalty-hero">
          <motion.div {...stagger(0)} style={{ maxWidth: 520 }}>
            <SectionLabel text="Foodies Rewards Program" />

            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "1rem", marginTop: 0 }}>
              Eat More,{" "}
              <span style={{ color: "var(--color-primary)" }}>Earn More,</span>
              <br />Live Better
            </h2>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: 460 }}>
              Every naira you spend earns you points. Redeem them for free food,
              discounts, and exclusive perks — the more you order, the higher
              your VIP tier and the sweeter the rewards.
            </p>

            {/* Quick stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.75rem" }}>
              {[
                { val: "10 pts",  label: "per ₦100 spent" },
                { val: "3 tiers", label: "Bronze → Silver → Gold" },
                { val: "₦2,000", label: "off for your friends" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 10, padding: "0.55rem 0.9rem", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-heading)", fontWeight: 700 }}>{s.val}</span>
                  <span style={{ fontSize: "0.68rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>{s.label}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="/download"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                background: "var(--color-primary)", color: "#fff",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem",
                textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "0.85rem 1.75rem", borderRadius: 10, textDecoration: "none",
              }}
            >
              Start Earning Today <ArrowRight size={15} strokeWidth={2.5} />
            </motion.a>
          </motion.div>

          <motion.div {...stagger(1)} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoyaltyHeroCard />
          </motion.div>
        </div>

        

        {/* ── EARNING ──────────────────────────────── */}
        <motion.div {...stagger(3)}>
          <EarningSection />
        </motion.div>

        {/* ── VIP TIERS ────────────────────────────── */}
        <motion.div {...stagger(4)} style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <SectionLabel text="VIP Tiers" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", margin: 0 }}>
              The Higher You Climb,<br />
              <span style={{ color: "var(--color-secondary)" }}>The Better It Gets</span>
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", maxWidth: 320, lineHeight: 1.6, margin: 0 }}>
              Tap a tier to highlight its benefits. Tiers are calculated on lifetime points — the more you order, the faster you rise.
            </p>
          </div>
          <TierComparison />
        </motion.div>

        {/* ── REWARDS ──────────────────────────────── */}
        <motion.div {...stagger(5)} style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <SectionLabel text="Rewards Catalogue" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", margin: 0 }}>
              Spend Your Points <span style={{ color: "var(--color-primary)" }}>Your Way</span>
            </h3>
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              background: "color-mix(in srgb, var(--color-secondary) 10%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-secondary) 30%, transparent)",
              borderRadius: 20, padding: "0.35rem 0.85rem",
            }}>
              <ShieldCheck size={12} color="var(--color-secondary)" strokeWidth={2} />
              <span style={{ fontSize: "0.7rem", color: "var(--color-text-secondary)", fontWeight: 600, fontFamily: "var(--font-sans)" }}>
                Points combinable with promo codes
              </span>
            </div>
          </div>
          <RewardsGrid />
        </motion.div>

        {/* ── REFERRAL + NOTIFICATIONS ─────────────── */}
        <motion.div {...stagger(6)} style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div className="referral-layout">
            <div>
              <SectionLabel text="Referral Program" />
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "1.5rem", marginTop: 0 }}>
                Share Foodies,<br />
                <span style={{ color: "var(--color-primary)" }}>Earn Together</span>
              </h3>
              <ReferralBlock />
            </div>
            <div>
              <SectionLabel text="Stay Updated" />
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "1.5rem", marginTop: 0 }}>
                Always Know<br />
                <span style={{ color: "var(--color-secondary)" }}>Your Status</span>
              </h3>
              <NotificationsTicker />
            </div>
          </div>
        </motion.div>

        {/* ── EXPIRY ───────────────────────────────── */}
        <motion.div {...stagger(7)} style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <SectionLabel text="Points Expiry" />
          <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "1.25rem", marginTop: 0 }}>
            We&apos;ll Always <span style={{ color: "var(--color-primary)" }}>Remind You</span>
          </h3>
          <ExpiryBlock />
        </motion.div>

        {/* ── BOTTOM CTA ───────────────────────────── */}
        <motion.div
          {...stagger(8)}
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)",
            borderRadius: 20, padding: "clamp(2rem, 5vw, 3rem)",
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: "1.5rem",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -50, right: -20, width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 3vw, 2rem)", color: "#fff", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Ready to Start<br />Earning Rewards?
            </div>
            <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)" }}>
              Download the Foodies app and earn 100 points on registration + 500 on your first order.
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { label: "Download App", filled: true },
              { label: "Learn More",   filled: false },
            ].map((btn) => (
              <motion.a
                key={btn.label}
                href="/download"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.85rem 1.5rem", borderRadius: 10, textDecoration: "none",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.82rem",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  background: btn.filled ? "#fff" : "transparent",
                  color: btn.filled ? "var(--color-primary)" : "#fff",
                  border: btn.filled ? "none" : "2px solid rgba(255,255,255,0.5)",
                  transition: "all 0.2s",
                }}
              >
                {btn.label}
                {btn.filled && <ChevronRight size={14} strokeWidth={2.5} />}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Responsive styles */}
      <style>{`
        .loyalty-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
          margin-bottom: clamp(3rem, 6vw, 5rem);
        }
        .earning-layout {
          display: grid;
          grid-template-columns: 1fr clamp(240px, 30%, 320px);
          gap: 1rem;
          align-items: start;
        }
        .referral-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }
        .expiry-grid {
          grid-template-columns: 1fr 1fr;
        }
        .referral-rewards-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 860px) {
          .loyalty-hero    { grid-template-columns: 1fr; }
          .referral-layout { grid-template-columns: 1fr; }
          .earning-layout  { grid-template-columns: 1fr; }
        }
        @media (max-width: 580px) {
          .expiry-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}