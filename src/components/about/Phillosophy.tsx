import { Leaf, Users, Lightbulb, Smartphone } from "lucide-react";

const pillars = [
  {
    icon:  Leaf,
    num:   "01",
    title: "Sustainability",
    desc:  "Supporting local farmers and reducing waste through smart inventory — because good food starts with good choices.",
  },
  {
    icon:  Users,
    num:   "02",
    title: "Community",
    desc:  "We give back to the communities that nourish us — actively involved in local initiatives and charities.",
  },
  {
    icon:  Lightbulb,
    num:   "03",
    title: "Innovation",
    desc:  "Our menu is never done — we find inspiration in new ingredients, new approaches, and fresh takes on old standards.",
  },
  {
    icon:  Smartphone,
    num:   "04",
    title: "You in Control",
    desc:  "Dine in, take away, or order delivery — our digital platform puts seamless hospitality at your fingertips.",
  },
];

export function PhilosophySection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-surface-ink)" }}
    >
      {/* Ambient glow — bottom left */}
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "var(--color-primary)",
          opacity:    0.04,
          filter:     "blur(100px)",
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto"
        style={{ padding: "clamp(3.5rem,7vw,6rem) clamp(1.25rem,5vw,4rem)" }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="h-px w-7 shrink-0"
            style={{ background: "var(--color-secondary)" }}
          />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Philosophy
          </span>
        </div>

        {/* Pull quote */}
        <h2
          className="font-display font-bold uppercase leading-none mb-5"
          style={{
            fontSize:     "clamp(1.8rem,4vw,3.2rem)",
            letterSpacing: "-0.03em",
            color:         "var(--color-on-ink)",
            maxWidth:      "min(100vw,900px)",
          }}
        >
          Not just our meals —{" "}
          <span style={{ color: "var(--color-primary)" }}>an experience</span>
          <br />in taste &amp; hospitality.
        </h2>

        {/* Sub */}
        <p
          className="leading-relaxed mb-14"
          style={{
            color:    "rgba(255,255,255,0.38)",
            fontSize: "clamp(0.875rem,1.6vw,1rem)",
            maxWidth: "min(90vw,480px)",
          }}
        >
          At Foodies, we believe technology should never replace human
          connection — it should amplify it.
        </p>

        {/* Pillars grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex flex-col"
                style={{
                  padding:     "32px 28px",
                  borderRight: i < pillars.length - 1
                    ? "0.5px solid rgba(255,255,255,0.07)"
                    : "none",
                }}
              >
                {/* Number */}
                <div
                  className="text-[10px] font-bold tracking-[0.2em] mb-6"
                  style={{ color: "rgba(200,64,42,0.5)" }}
                >
                  {p.num}
                </div>

                {/* Icon ring */}
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width:        "44px",
                    height:       "44px",
                    borderRadius: "50%",
                    border:       "0.5px solid rgba(255,255,255,0.1)",
                    flexShrink:   0,
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    style={{ color: "var(--color-bg-input)" }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3"
                  style={{ color: "var(--color-bg-input)" }}
                >
                  {p.title}
                </h3>

                {/* Desc */}
                <p
                  className="text-[13px] leading-relaxed flex-1"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  {p.desc}
                </p>

                {/* Accent bar */}
                <div
                  className="mt-7"
                  style={{
                    width:      "24px",
                    height:     "1.5px",
                    background: "var(--color-primary)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}