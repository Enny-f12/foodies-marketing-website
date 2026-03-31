import { Zap, Star, Award, Medal, Crown } from "lucide-react";

export type Tier = "bronze" | "silver" | "gold";

export const EARNING_ACTIONS = [
  { icon: Zap, label: "Every ₦100 spent", pts: "10 pts", note: "On food subtotal only" },
  { icon: Star, label: "First order bonus", pts: "+500 pts", note: "One-time welcome gift" },
  // ... rest of your EARNING_ACTIONS
];

export const REWARDS = [
  { pts: 500, label: "₦500 Off", sub: "Your next order", value: "₦500" },
  // ... rest of your REWARDS
];

export const TIERS: Record<Tier, unknown> = {
  bronze: { label: "Bronze", pts: "0 – 2,499 pts", color: "#b87333", Icon: Award, /*...*/ },
  silver: { label: "Silver", pts: "2,500 – 9,999 pts", color: "#9BA4B5", Icon: Medal, /*...*/ },
  gold: { label: "Gold", pts: "10,000+ pts", color: "#FCD063", Icon: Crown, /*...*/ },
};

// Add TIER_FEATURES, CALC_TABLE, NOTIFICATIONS here too