import {
  Star, Zap, Gift, Users, Share2,
  Sparkles, Award, Medal, Crown,
} from "lucide-react";
import type {
  EarningAction, CalcRow, Reward, Tier, TierData, TierFeature, Notification,
} from "../types/Loyaltyindex";

export const EARNING_ACTIONS: EarningAction[] = [
  { icon: Zap,      label: "Every ₦100 spent",     pts: "10 pts",     note: "On food subtotal only" },
  { icon: Star,     label: "First order bonus",     pts: "+500 pts",   note: "One-time welcome gift" },
  { icon: Gift,     label: "Birthday month",        pts: "+250 pts",   note: "Scales with your tier" },
  { icon: Users,    label: "Successful referral",   pts: "+1,000 pts", note: "Per friend who orders ₦5k+" },
  { icon: Sparkles, label: "Write a review",        pts: "+50 pts",    note: "Up to 4 reviews/month" },
  { icon: Share2,   label: "Social media check-in", pts: "+50 pts",    note: "Once per month" },
];

export const CALC_TABLE: CalcRow[] = [
  { order: "₦1,000",  pts: 100  },
  { order: "₦2,500",  pts: 250  },
  { order: "₦5,000",  pts: 500  },
  { order: "₦10,000", pts: 1000 },
  { order: "₦25,000", pts: 2500 },
  { order: "₦50,000", pts: 5000 },
];

export const REWARDS: Reward[] = [
  { pts: 500,  label: "₦500 Off",          sub: "Your next order",            color: "#E10B1C", value: "₦500"    },
  { pts: 600,  label: "Free Zobo Drink",   sub: "Small chilled Zobo",         color: "#c40917", value: "₦2,500"  },
  { pts: 800,  label: "Free Fresh Juice",  sub: "Any flavour",                color: "#E10B1C", value: "₦4,000"  },
  { pts: 1000, label: "Free Pastry Item",  sub: "Puff puff, meat pie & more", color: "#c40917", value: "₦2,500"  },
  { pts: 1800, label: "₦2,000 Off",        sub: "Your next order",            color: "#E10B1C", value: "₦2,000"  },
  { pts: 2500, label: "Free Regular Meal", sub: "Any rice dish or single soup",color: "#c40917", value: "₦6,000" },
  { pts: 3500, label: "Free Food Trail",   sub: "15 portions — rice only",    color: "#E10B1C", value: "₦20,000" },
  { pts: 8000, label: "Free Catering Tray",sub: "Medium Jollof or Fried Rice",color: "#c40917", value: "₦47,000" },
];

export const TIERS: Record<Tier, TierData> = {
  bronze: {
    label: "Bronze", pts: "0 – 2,499 pts", color: "#b87333",
    bg: "rgba(184,115,51,0.08)", border: "rgba(184,115,51,0.3)",
    Icon: Award,
    earning: "10 pts / ₦100", birthday: "250 pts", anniversary: "—",
    delivery: false, support: "Standard",
    earlyAccess: false, events: false, cateringTray: false,
  },
  silver: {
    label: "Silver", pts: "2,500 – 9,999 pts", color: "#9BA4B5",
    bg: "rgba(155,164,181,0.08)", border: "rgba(155,164,181,0.3)",
    Icon: Medal,
    earning: "11 pts / ₦100", birthday: "500 pts", anniversary: "500 pts",
    delivery: false, support: "Priority queue",
    earlyAccess: false, events: false, cateringTray: false,
  },
  gold: {
    label: "Gold", pts: "10,000+ pts", color: "#FCD063",
    bg: "rgba(252,208,99,0.08)", border: "rgba(252,208,99,0.35)",
    Icon: Crown,
    earning: "12 pts / ₦100", birthday: "1,000 pts", anniversary: "1,000 pts",
    delivery: true, support: "VIP dedicated line",
    earlyAccess: true, events: true, cateringTray: true,
  },
};

export const TIER_FEATURES: TierFeature[] = [
  { key: "earning",      label: "Earning rate" },
  { key: "birthday",     label: "Birthday bonus" },
  { key: "anniversary",  label: "Anniversary bonus" },
  { key: "delivery",     label: "Free delivery" },
  { key: "support",      label: "Customer support" },
  { key: "earlyAccess",  label: "Early menu access" },
  { key: "events",       label: "VIP event invites" },
  { key: "cateringTray", label: "Annual catering tray" },
];

export const NOTIFICATIONS: Notification[] = [
  { icon: "🎉", text: "You just earned 500 points from your order!", sub: "New balance: 2,150 pts" },
  { icon: "🏆", text: "Congratulations! You've reached Silver tier!", sub: "Enjoy your new benefits" },
  { icon: "⚠️", text: "350 points expiring in 7 days — use them!", sub: "Tap to redeem now" },
  { icon: "🎁", text: "Your friend just ordered! +1,000 referral pts", sub: "Credited to your account" },
  { icon: "🎂", text: "Happy Birthday! We've added 500 points!", sub: "Our gift to you today" },
];