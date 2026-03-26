export type Location = "all" | "lekki" | "abuja";
export type Department = "all" | "kitchen" | "service" | "operations";

export interface Job {
  id: string;
  title: string;
  location: "lekki" | "abuja";
  locationLabel: string;
  department: "kitchen" | "service" | "operations";
  type: string;
  typeNote: string;
  blurb: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  isPhase4?: boolean;
  about: string;
  responsibilities: string[];
  requirements: string[];
  weOffer: string[];
}

export interface Testimonial {
  image: string ;
  quote: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  color: string;
}

export interface CultureValue {
  Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  label: string;
  desc: string;
  color: string;
}

export interface Benefit {
  Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  label: string;
  desc: string;
  color: string;
}

export interface HowItWorksStep {
  step: string;
  label: string;
  desc: string;
}