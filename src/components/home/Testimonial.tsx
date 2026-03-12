"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "The app is incredible. I booked a table for my anniversary in under 2 minutes, and they had wine waiting when we arrived. This is how dining should be.",
    name: "Adeola O.",
    location: "Lekki",
    stars: 5,
  },
  {
    quote: "I order takeaway 3–4 times a week. Being able to see live stock means I never get disappointed. And the points add up fast!",
    name: "Tunde A.",
    location: "Ikoyi",
    stars: 5,
  },
  {
    quote: "As a restaurant manager, the admin dashboard is a game-changer. I can manage orders, track inventory, and train staff all from one place. We've cut phone orders by 60%.",
    name: "Chioma N.",
    location: "Operations Manager",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className="text-lg" 
          style={{ color: i < count ? "var(--color-secondary)" : "var(--color-border)" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: (typeof testimonials)[0];
  active: boolean;
}) {
  return (
    <div
      className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-500 rounded-xl"
      style={{
        background: "var(--color-bg-card)",
        border: `1px solid ${active ? "var(--color-primary)" : "var(--color-border)"}`,
        padding: "clamp(1.5rem, 4vw, 2rem)",
        opacity: active ? 1 : 0.6,
        transform: active ? "scale(1)" : "scale(0.97)",
        boxShadow: active ? "0 20px 40px var(--color-shadow)" : "none",
      }}
    >
      {/* Quote Icon */}
      <div
        className="text-5xl font-black leading-none mb-4 select-none opacity-20"
        style={{ color: "var(--color-primary)", fontFamily: "serif" }}
      >
        &ldquo;
      </div>

      <p
        className="text-sm leading-relaxed mb-8 min-h-20"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="h-px w-full mb-6 opacity-10" style={{ background: "var(--color-text)" }} />

      <div className="flex items-center justify-between">
        <div>
          <p
            className="text-sm font-bold leading-tight mb-1"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
          >
            {testimonial.name}
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-60">
            {testimonial.location}
          </p>
        </div>
        <StarRating count={testimonial.stars} />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section style={{ background: "var(--color-bg-soft)" }} className="w-full overflow-hidden">
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)" }}
      >
        {/* Header - Centered & Premium */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-md text-center md:text-left">
            <span className="section-label mb-3 block">Guest Stories</span>
            <h2
              className="font-display font-black leading-tight"
              style={{
                color: "var(--color-heading)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              What Our 
              <span className="text-primary italic">Guests are Saying.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all border border-border hover:border-primary hover:text-primary cursor-pointer active:scale-90"
            >
              ←
            </button>
            <div className="text-[10px] font-black tracking-widest uppercase">
               {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all border border-border hover:border-primary hover:text-primary cursor-pointer active:scale-90"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="flex gap-6 overflow-hidden transition-all">
          {/* Tablet/Desktop Logic */}
          <div className="hidden sm:flex w-full gap-6">
            {[0, 1, 2].map((offset) => {
              const idx = (active + offset) % testimonials.length;
              // On desktop, we highlight the first one in the view
              return (
                <TestimonialCard
                  key={idx}
                  testimonial={testimonials[idx]}
                  active={offset === 0}
                />
              );
            })}
          </div>

          {/* Mobile Logic: Single focused card */}
          <div className="flex sm:hidden w-full">
            <TestimonialCard testimonial={testimonials[active]} active={true} />
          </div>
        </div>

        {/* Dynamic Dot Indicators */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-500 rounded-full h-1.5 cursor-pointer"
              style={{
                width: i === active ? "32px" : "8px",
                background: i === active ? "var(--color-primary)" : "var(--color-border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;