"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, CircleDot, Users } from "lucide-react";

const KPIS = [
  { value: "25%",  label: "Repeat order rate target",    Icon: TrendingUp },
  { value: "+10%", label: "Average order value uplift",  Icon: Zap        },
  { value: "40%",  label: "Points redemption rate goal", Icon: CircleDot  },
  { value: "15%",  label: "Referral conversion target",  Icon: Users      },
];

export function KPIStrip() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,160px), 1fr))",
      gap: "0.75rem",
    }}>
      {KPIS.map((k, i) => {
        const KIcon = k.Icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            style={{
              background: "var(--color-bg-card)", border: "1px solid var(--color-border)",
              borderRadius: 14, padding: "1.1rem 1rem", textAlign: "center",
            }}
          >
            <KIcon size={18} color="var(--color-primary)" strokeWidth={1.8} style={{ marginBottom: "0.5rem" }} />
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--color-primary)", fontWeight: 700, lineHeight: 1 }}>
              {k.value}
            </div>
            <div style={{ fontSize: "0.68rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginTop: "0.3rem", lineHeight: 1.3 }}>
              {k.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}