export function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
      <div style={{ width: 28, height: 2, background: "var(--color-primary)", borderRadius: 2 }} />
      <span className="section-label">{text}</span>
    </div>
  );
}