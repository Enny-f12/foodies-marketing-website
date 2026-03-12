export function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-end"
      style={{
        background: "var(--color-surface-ink)",
        minHeight:  "clamp(280px,40vw,420px)",
        paddingTop: "72px",
      }}
    >
      {/* Gold glow top-right */}
      <div
        className="absolute top-0 right-0 w-125 h-125 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--color-secondary)", opacity: 0.10 }}
      />
      {/* Red glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary)", opacity: 0.08 }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ padding: "clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 shrink-0" style={{ background: "var(--color-secondary)" }} />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Story
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black leading-tight"
          style={{
            color:    "var(--color-on-ink)",
            fontSize: "clamp(2.4rem,6vw,4.5rem)",
            maxWidth: "min(90vw,720px)",
          }}
        >
          Where Tradition{" "}
          <span className="text-gradient">Meets</span>{" "}
          Innovation.
        </h1>
      </div>
    </section>
  );
}