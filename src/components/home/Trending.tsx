"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, ArrowRight, Star } from "lucide-react";

const dishes = [
  {
    name:    "Jollof Rice",
    price:   "₦3,000",
    tag:     "Most Ordered",
    spicy:   false,
    rating:  4.9,
    image:   "https://i.pinimg.com/1200x/bc/00/d2/bc00d298bcf0d9f64b4a8dc96ba4629a.jpg",
  },
  {
    name:    "Egusi Soup with Pounded Yam",
    price:   "₦4,700",
    tag:     "Chef's Favourite",
    spicy:   false,
    rating:  4.8,
    image:   "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg",
  },
  {
    name:    "Asun Goat Meat",
    price:   "₦5,500",
    tag:     "Spicy Pick",
    spicy:   true,
    rating:  4.7,
    image:   "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg",
  },
  {
    name:    "Catfish Pepper Soup",
    price:   "₦6,000",
    tag:     "Weekend Special",
    spicy:   true,
    rating:  4.8,
    image:   "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg",
  },
  {
    name:    "Nkwobi",
    price:   "₦10,000",
    tag:     "Premium",
    spicy:   false,
    rating:  4.9,
    image:   "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg",
  },
  {
    name:    "Coconut Fried Rice",
    price:   "₦5,500",
    tag:     "Fan Favourite",
    spicy:   false,
    rating:  4.7,
    image:   "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg",
  },
];

export function TrendingSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{`
        /* Card image zoom */
        .trend-img {
          transition: transform 0.6s cubic-bezier(.25,.46,.45,.94);
        }
        .trend-card:hover .trend-img { transform: scale(1.08); }

        /* Overlay slides up on hover */
        .trend-overlay {
          transition: opacity 0.35s ease, transform 0.35s ease;
          transform: translateY(6px);
          opacity: 0;
        }
        .trend-card:hover .trend-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        /* Price tag lifts */
        .trend-price {
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), color 0.2s ease;
        }
        .trend-card:hover .trend-price { transform: translateY(-2px); }

        /* Featured (first) card subtle pulse ring */
        @keyframes featuredPulse {
          0%,100% { box-shadow: 0 0 0 0   color-mix(in srgb, var(--color-primary) 40%, transparent); }
          50%      { box-shadow: 0 0 0 6px color-mix(in srgb, var(--color-primary) 0%,  transparent); }
        }
        .featured-ring { animation: featuredPulse 2.4s ease-out infinite; }
      `}</style>

      <section style={{ background: "var(--color-bg-soft)" }}>
        <div
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
        >

          {/* ── HEADER ─────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 shrink-0" style={{ background: "var(--color-primary)" }} />
                <span className="section-label">Featured Dishes</span>
              </div>
              <h2
                className="font-display font-black leading-tight"
                style={{
                  color:    "var(--color-heading)",
                  fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                }}
              >
                Trending This Week
                <br />
                <span className="text-gradient">at Foodies</span>
              </h2>
            </div>

            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 px-5 py-3 font-bold text-xs uppercase tracking-widest transition-all duration-200 shrink-0 self-start sm:self-auto"
              style={{
                border: "1px solid var(--color-border)",
                color:  "var(--color-heading)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background    = "var(--color-primary)";
                (e.currentTarget as HTMLElement).style.borderColor   = "var(--color-primary)";
                (e.currentTarget as HTMLElement).style.color         = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background    = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor   = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.color         = "var(--color-heading)";
              }}
            >
              View Full Menu
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── ASYMMETRIC GRID ────────────────────────────────────── */}
          {/*
            Desktop: 3-column grid
              Col 1: first card tall (spans 2 rows) — HERO dish
              Col 2 + 3: 5 remaining cards in a 2×3 grid
            Mobile: single column stack
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

            {dishes.map((dish, i) => {
              const isHero   = i === 0; /* spans 2 rows on desktop */
              const isActive = hovered === i;

              return (
                <div
                  key={dish.name}
                  className={`trend-card group relative overflow-hidden cursor-pointer rounded-xl ${
                    isHero ? "sm:row-span-2" : ""
                  }`}
                  style={{
                    aspectRatio:   isHero ? undefined : "4/3",
                    height:        isHero ? undefined : undefined,
                    minHeight:     isHero ? "clamp(360px, 55vw, 560px)" : "clamp(180px, 22vw, 260px)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* ── IMAGE ── */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="trend-img object-cover"
                      sizes={isHero ? "(max-width:640px) 100vw, 33vw" : "(max-width:640px) 50vw, 22vw"}
                    />
                  </div>

                  {/* ── GRADIENT OVERLAY — always dark at bottom ── */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isHero
                        ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.05) 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0) 100%)",
                      transition: "background 0.3s ease",
                    }}
                  />

                  {/* ── TOP BADGES ── */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                    {/* Tag */}
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.22em] px-2.5 py-1"
                      style={{
                        background: i === 0 ? "var(--color-primary)"
                                  : i === 4 ? "var(--color-secondary)"
                                  : "rgba(0,0,0,0.55)",
                        color:      i === 4 ? "var(--color-surface-ink)" : "white",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {dish.tag}
                    </span>

                    {/* Spicy flame */}
                    {dish.spicy && (
                      <span
                        className="flex items-center gap-1 px-2 py-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{
                          background: "rgba(0,0,0,0.55)",
                          backdropFilter: "blur(4px)",
                          color: "var(--color-warning)",
                        }}
                      >
                        <Flame size={10} fill="currentColor" />
                        Spicy
                      </span>
                    )}
                  </div>

                  {/* ── BOTTOM INFO ── */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">

                    {/* Rating row */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <Star
                        size={10}
                        fill="var(--color-secondary)"
                        style={{ color: "var(--color-secondary)" }}
                      />
                      <span className="text-[10px] font-bold" style={{ color: "var(--color-secondary)" }}>
                        {dish.rating}
                      </span>
                      <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                        avg rating
                      </span>
                    </div>

                    {/* Name + Price */}
                    <div className="flex items-end justify-between gap-2">
                      <h4
                        className="font-display font-black leading-tight"
                        style={{
                          color:    "white",
                          fontSize: isHero ? "clamp(1.1rem,2vw,1.4rem)" : "clamp(0.85rem,1.5vw,1rem)",
                        }}
                      >
                        {dish.name}
                      </h4>
                      <span
                        className="trend-price font-display font-black shrink-0"
                        style={{
                          color:    "var(--color-secondary)",
                          fontSize: isHero ? "1.15rem" : "0.95rem",
                        }}
                      >
                        {dish.price}
                      </span>
                    </div>

                    {/* Hover CTA — slides up */}
                    <div className="trend-overlay mt-3 flex items-center gap-2">
                      <span
                        className="text-[10px] font-black uppercase tracking-[0.2em]"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        Order in app
                      </span>
                      <ArrowRight size={11} style={{ color: "var(--color-secondary)" }} />
                    </div>
                  </div>

                  {/* ── HERO: featured ring on border ── */}
                  {isHero && (
                    <div
                      className="featured-ring absolute inset-0 pointer-events-none"
                      style={{ border: "2px solid var(--color-primary)", opacity: 0.5 }}
                    />
                  )}

                  {/* ── ACTIVE: left accent bar ── */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.75 transition-opacity duration-200"
                    style={{
                      background: "var(--color-primary)",
                      opacity:    isActive ? 1 : 0,
                    }}
                  />
                </div>
              );
            })}

          </div>

          {/* ── BOTTOM STRIP ───────────────────────────────────────── */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-5"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>255+</span>
              {" "}dishes available with live stock visibility in the app.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ color: "var(--color-primary)" }}
            >
              Download App to Order
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}