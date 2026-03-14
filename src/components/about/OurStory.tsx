export function OurStorySection() {
  const paragraphs = [
    "Foodies Hot & Spicy was born from a simple belief: that exceptional Nigerian cuisine deserves an equally exceptional dining experience.",
    "What started as a passion project in Lagos has grown into a destination for food lovers across Nigeria, with locations in Lekki and Maitama, Abuja.",
    "We're not just about great food. We're about reimagining what a restaurant can be in the digital age — why should technology diminish hospitality when it could enhance it?",
    "The answer became our mission: to blend the rich, authentic flavors of Nigeria with world-class digital convenience. To create an experience where tradition meets innovation.",
  ];

 

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
          style={{
            border:       "1px solid var(--color-border)",
            borderRadius: "var(--border-radius-lg, 12px)",
          }}
        >

          {/* ── LEFT PANEL: label + headline + stats ── */}
          <div
            className="flex flex-col justify-between p-10"
            style={{
              background:  "var(--color-bg-card)",
              borderRight: "1px solid var(--color-border)",
            }}
          >
            {/* Top: label + headline + rule */}
            <div>
              <span
                className="block uppercase tracking-widest text-xs font-semibold mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Our Story
              </span>

              <h2
                className="font-display font-black leading-tight mb-6"
                style={{
                  color:    "var(--color-heading)",
                  fontSize: "clamp(1.6rem,3vw,2.2rem)",
                }}
              >
                A Passion Project<br />
                That Became<br />
                a Movement.
              </h2>

              {/* Red rule */}
              <div
                className="mb-6"
                style={{
                  width:      "2rem",
                  height:     "2px",
                  background: "var(--color-primary)",
                }}
              />

             
            </div>

            
          </div>

          {/* ── RIGHT PANEL: paragraphs ── */}
          <div
            className="flex flex-col p-10"
            style={{ background: "var(--color-bg)" }}
          >
            <div className="flex flex-col gap-5 flex-1">
              {paragraphs.map((p, i) => (
                <div key={i}>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {p}
                  </p>
                  {i < paragraphs.length - 1 && (
                    <div
                      className="mt-5"
                      style={{
                        height:     "1px",
                        background: "var(--color-border)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

           
            </div>
          </div>

        </div>
      
    </section>
  );
}