export function OurStorySection() {
  const paragraphs = [
    "Foodies Hot & Spicy was born from a simple belief: that exceptional Nigerian cuisine deserves an equally exceptional dining experience.",
    "What started as a passion project in Lagos has grown into a destination for food lovers across Nigeria, with locations in Lekki and Maitama, Abuja.",
    "But we're not just about great food. We're about reimagining what a restaurant can be in the digital age. We asked ourselves: Why should technology diminish hospitality when it could enhance it?",
    "The answer became our mission: to blend the rich, authentic flavors of Nigeria with world-class digital convenience. To create an experience where tradition meets innovation.",
  ];

  const stats = [
    { value: "2",    label: "Locations" },
    { value: "255+", label: "Menu Items" },
    { value: "20",   label: "Guests (Private Dining)" },
    { value: "2026", label: "Founded" },
  ];

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Two-column: text left, stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — story copy */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 shrink-0" style={{ background: "var(--color-primary)" }} />
              <span className="section-label">Our Story</span>
            </div>

            <h2
              className="font-display font-black leading-tight mb-2"
              style={{
                color:    "var(--color-heading)",
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
              }}
            >
              A Passion Project That Became a Movement
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="leading-relaxed"
                style={{
                  color:    "var(--color-text-secondary)",
                  fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right — stat cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 lg:pt-16">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center text-center p-5 aspect-square"
                style={{
                  background: "var(--color-bg-card)",
                  border:     "1px solid var(--color-border)",
                }}
              >
                <span
                  className="font-display font-black block mb-1"
                  style={{
                    color:    "var(--color-primary)",
                    fontSize: "clamp(1.8rem,3vw,2.4rem)",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-xs uppercase tracking-widest font-semibold leading-tight"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}