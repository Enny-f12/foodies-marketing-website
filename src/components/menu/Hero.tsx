import Link from "next/link";
import Image from "next/image";

export function MenuHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-end"
      style={{
        background: "var(--color-surface-ink)",
        minHeight:  "clamp(260px,38vw,400px)",
        paddingTop: "72px",
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/1200x/73/f8/a9/73f8a962194665f8ff4a72d0267f0fff.jpg"
          alt="Nigerian food spread"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Directional overlay — heavy left, fades right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(6,4,2,0.95) 0%, rgba(6,4,2,0.78) 45%, rgba(6,4,2,0.4) 100%)",
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,4,2,0.7) 0%, transparent 50%)",
          }}
        />
      </div>

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
            Our Culinary Heritage
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black leading-tight mb-4"
          style={{
            color:    "var(--color-on-ink)",
            fontSize: "clamp(2.4rem,6vw,4.5rem)",
            maxWidth: "min(90vw,640px)",
          }}
        >
          Explore Our{" "}
          <span style={{ color: "var(--color-primary)" }}>Menu</span>
        </h1>

        {/* Sub-copy + CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-between">
          <p
            className="leading-relaxed"
            style={{
              color:    "var(--color-on-ink-muted)",
              fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
              maxWidth: "min(90vw,460px)",
              width:    "100%",
            }}
          >
            Over 255 authentic Nigerian and international dishes,
            crafted with passion and precision.
          </p>

          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-widest rounded-xl transition-opacity hover:opacity-90 shrink-0"
            style={{
              background: "var(--color-primary)",
              color:      "var(--color-bg-input)",
            }}
          >
            View Full Menu in App →
          </Link>
        </div>
      </div>
    </section>
  );
}