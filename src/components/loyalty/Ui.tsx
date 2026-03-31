import { Star } from "lucide-react";

export function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
      <div style={{ width: 28, height: 2, background: "var(--color-primary)", borderRadius: 2 }} />
      <span className="section-label">{text}</span>
    </div>
  );
}

export function PointsBadge({ pts, size = "md" }: { pts: number; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "0.62rem", md: "0.72rem", lg: "0.82rem" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "0.2rem",
      background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
      border: "1px solid color-mix(in srgb, var(--color-primary) 30%, transparent)",
      color: "var(--color-primary)", borderRadius: 20,
      padding: "0.18rem 0.55rem", fontSize: sizes[size],
      fontWeight: 700, fontFamily: "var(--font-sans)", letterSpacing: "0.04em",
    }}>
      <Star size={9} strokeWidth={2.5} color="var(--color-primary)" />
      {pts.toLocaleString()} pts
    </span>
  );
}