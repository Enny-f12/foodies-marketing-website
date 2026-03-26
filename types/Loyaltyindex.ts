export type Tier = "bronze" | "silver" | "gold";

export interface EarningAction {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  label: string;
  pts: string;
  note: string;
}

export interface CalcRow {
  order: string;
  pts: number;
}

export interface Reward {
  pts: number;
  label: string;
  sub: string;
  color: string;
  value: string;
}

export interface TierData {
  label: string;
  pts: string;
  color: string;
  bg: string;
  border: string;
  Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  earning: string;
  birthday: string;
  anniversary: string;
  delivery: boolean;
  support: string;
  earlyAccess: boolean;
  events: boolean;
  cateringTray: boolean;
}

export interface TierFeature {
  key: keyof TierData;
  label: string;
}

export interface Notification {
  icon: string;
  text: string;
  sub: string;
}