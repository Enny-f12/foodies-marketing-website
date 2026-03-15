"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Apple, Calendar, Database, Gift, MapPin, Play } from "lucide-react";
/* ─── HERO ───── */
export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        /* Stagger fade-up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .fade-up { animation: fadeUp 0.72s cubic-bezier(.22,.68,0,1.1) both; }

        /* Count-up flicker for stat numbers */
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          45%       { opacity: 0.6; }
          55%       { opacity: 0.9; }
        }
        .stat-flicker { animation: flicker 3.5s ease-in-out infinite; }

        /* Shimmer on buttons */
        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::before {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-shimmer:hover::before { transform: translateX(100%); }

        /* Dish card float animation */
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .float-card { animation: floatCard 4s ease-in-out infinite; }

        /* Spinning dashed ring */
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Neon glow on accent headline */
        .neon-text {
          text-shadow:
            0 0 20px color-mix(in srgb, var(--color-primary) 40%, transparent),
            0 0 60px color-mix(in srgb, var(--color-primary) 20%, transparent);
        }

        /* Background image ken-burns slow zoom */
        @keyframes kenBurns {
          0%   { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        .bg-kenburns {
          animation: kenBurns 12s ease-out forwards;
        }

        /* Ping dot */
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>

      {/* ── 72px navbar spacer ─────────────────────────────────────────── */}
      <div style={{ height: "72px" }} />

      {/* 
          HERO — full-bleed background image + left copy + floating dish card
           */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "calc(100svh - 72px)" }}
      >

        {/* ── BACKGROUND IMAGE (dominant) ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="bg-kenburns relative w-full h-full">
            <Image
              src="https://i.pinimg.com/1200x/bd/b9/ab/bdb9abb6d73a15e466c244fd8d23aeaa.jpg"
              alt="Smoky Jollof background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          {/* Deep directional overlay — heavy left, fades right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(6,4,2,0.97) 0%, rgba(6,4,2,0.88) 38%, rgba(6,4,2,0.55) 62%, rgba(6,4,2,0.15) 100%)",
            }}
          />
          {/* Bottom vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(6,4,2,0.6) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* Ambient red glow — top left */}
        <div
          className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none z-1"
          style={{
            background: "var(--color-primary)",
            opacity: 0.09,
            filter: "blur(120px)",
          }}
        />

        {/* ── MAIN LAYOUT ─────────────────────────────────────────── */}
        <div
          className="relative z-10 max-w-350 mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_380px] gap-0"
          style={{ minHeight: "calc(100svh - 72px)" }}
        >

          {/* ─── LEFT: COPY PANEL ──────────────────────────────────── */}
          <div
            className="flex flex-col justify-between"
            style={{
              padding: "clamp(2.5rem,5vw,4.5rem) clamp(1.5rem,5vw,4rem)",
            }}
          >
            {/* TOP: headline block */}
            <div>
              {/* HEADLINE */}
              <div
                className="fade-up mb-4"
                style={{ animationDelay: "80ms", opacity: loaded ? undefined : 0 }}
              >
                {/* "NOT" — outlined ghost text */}
                <div
                  className="font-display font-black uppercase leading-none select-none"
                  style={{
                    fontSize: "clamp(4rem, 9vw, 9.5rem)",
                    letterSpacing: "-0.03em",
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
                    color: "transparent",
                    lineHeight: 0.9,
                  }}
                >
                  NOT
                </div>

                {/* "JUST OUR" — solid white */}
                <div
                  className="font-display font-black uppercase leading-none"
                  style={{
                    fontSize: "clamp(4rem, 9vw, 9.5rem)",
                    letterSpacing: "-0.03em",
                    color: "var(--color-on-ink)",
                    lineHeight: 0.9,
                  }}
                >
                  JUST OUR
                </div>

                {/* "MEALS —" — red accent + glow */}
                <div
                  className="neon-text font-display font-black uppercase leading-none"
                  style={{
                    fontSize: "clamp(3.4rem, 7.5vw, 8rem)",
                    letterSpacing: "-0.03em",
                    color: "var(--color-primary)",
                    lineHeight: 0.92,
                    marginBottom: "0.15em",
                  }}
                >
                  MEALS —
                </div>

                {/* Italic sub-phrase */}
                <div
                  className="font-display italic font-medium"
                  style={{
                    fontSize: "clamp(1.2rem, 2.6vw, 2.5rem)",
                    color: "var(--color-on-ink-muted)",
                    letterSpacing: "0.01em",
                  }}
                >
                  An Experience in Taste &amp; Hospitality.
                </div>
              </div>

              {/* Body copy */}
              <p
                className="fade-up leading-relaxed mb-6"
                style={{
                  animationDelay: "220ms",
                  opacity: loaded ? undefined : 0,
                  color: "var(--color-on-ink-muted)",
                  fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)",
                  maxWidth: "min(100%, 400px)",
                }}
              >

                Welcome to Foodies Hot & Spicy – where the vibrant flavors of Nigeria meet world-class digital convenience.
                We&apos;re not just redefining food; we&apos;re redefining how you experience it
              </p>

              {/* Feature pills */}
              <div
                className="fade-up flex flex-wrap gap-2 mb-4"
                style={{ animationDelay: "300ms", opacity: loaded ? undefined : 0 }}
              >
                {[
                  { label: "Real-time reservations", icon: Calendar },
                  { label: "Live inventory", icon: Database },
                  { label: "Live tracking", icon: MapPin },
                  { label: "Loyalty rewards", icon: Gift },
                ].map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-semibold rounded-lg transition-colors hover:bg-white/10"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                      color: "var(--color-on-ink-muted)",
                    }}
                  >
                    {/* Icon with a slightly lower opacity to keep focus on text */}
                    <Icon size={14} strokeWidth={1.5} className="opacity-80" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            {/* BOTTOM: CTAs + stats */}
            <div>
              {/* Divider */}
              <div
                className="fade-up mb-6"
                style={{
                  animationDelay: "360ms",
                  opacity: loaded ? undefined : 0,
                  height: "0.5px",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
                   
              {/* CTA row */}


              <div
                className="fade-up flex flex-wrap items-center gap-3 mb-4"
                style={{ animationDelay: "400ms", opacity: loaded ? undefined : 0 }}
              >
                {/* App Store */}
                <Link
                  href="/download"
                  className="btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 font-bold rounded-xl transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: "var(--color-on-ink)",
                    color: "var(--color-surface-ink)",
                  }}
                >
                  {/* Clean Lucide Apple Icon */}
                  <Apple size={22} strokeWidth={2.5} fill="currentColor" />

                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[9px] uppercase tracking-widest opacity-60 font-semibold">
                      Download on the
                    </span>
                    <span className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-helvena)" }}>
                      App Store
                    </span>
                  </span>
                </Link>

                {/* Google Play */}
                <Link
                  href="/download"
                  className="btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 font-bold rounded-xl transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-on-ink)",
                  }}
                >
                  {/* Clean Lucide Play Icon */}
                  <Play size={20} strokeWidth={2.5} fill="currentColor" />

                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[9px] uppercase tracking-widest opacity-80 font-semibold">
                      Get it on
                    </span>
                    <span className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-helvena)" }}>
                      Google Play
                    </span>
                  </span>
                </Link>
              </div>

              {/* QR promo line */}
              <div
                className="fade-up flex items-center gap-2.5 mb-8"
                style={{ animationDelay: "440ms", opacity: loaded ? undefined : 0 }}
              >
                <div
                  className="w-7 h-7 shrink-0 flex items-center justify-center text-xs"
                  style={{
                    border: "1.5px dashed rgba(255,255,255,0.12)",
                    color: "var(--color-on-ink-muted)",
                  }}
                >
                  ⊞
                </div>
                <p className="text-[11px]" style={{ color: "var(--color-on-ink-muted)" }}>
                  Scan to download ·{" "}
                  <strong style={{ color: "var(--color-secondary)" }}>₦2,000 off</strong>{" "}
                  first order.{" "}
                  <span style={{ color: "var(--color-on-ink-muted)" }}>New users only.</span>
                </p>
              </div>

             

              {/* Stats row */}
              <div
                className="fade-up grid grid-cols-3 gap-0"
                style={{
                  animationDelay: "480ms",
                  opacity: loaded ? undefined : 0,
                  borderTop: "0.5px solid rgba(255,255,255,0.08)",
                  paddingTop: "1.2rem",
                }}
              >
                {[
                  { value: "3", label: "Locations" },
                  { value: "255+", label: "Dishes" }, 
                  { value: "5★", label: "Avg Rating" },
                ].map((s, i, arr) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-0.5"
                    style={{
                      borderRight: i < arr.length - 1 ? "0.5px solid rgba(255,255,255,0.08)" : "none",
                      paddingRight: i < arr.length - 1 ? "0.75rem" : 0,
                      paddingLeft: i > 0 ? "0.75rem" : 0,
                    }}
                  >
                    <span
                      className="font-display font-bold stat-flicker"
                      style={{
                        fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)",
                        color: "rgba(255, 255, 255, 1)",
                        animationDelay: `${i * 0.9}s`,
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-[9px] uppercase tracking-[0.18em] font-semibold text-center"
                      style={{ color: "var(--color-on-ink-muted)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT: FLOATING DISH CIRCLE ──────────────────────── */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{ padding: "2rem 2rem 2rem 0" }}
          >
            <div className="float-card flex flex-col items-center gap-5">

              {/* Outer ring — spinning dashed border */}
              <div
                style={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                }}
              >
                {/* Spinning dashed ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-10px",
                    borderRadius: "50%",
                    border: "1.5px dashed rgba(200,64,42,0.35)",
                    animation: "spinRing 18s linear infinite",
                  }}
                />
                {/* Second counter-spin ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-20px",
                    borderRadius: "50%",
                    border: "0.5px dashed rgba(200,169,110,0.18)",
                    animation: "spinRing 28s linear infinite reverse",
                  }}
                />

                {/* Solid accent ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    borderRadius: "50%",
                    border: "2px solid var(--color-primary)",
                    opacity: 0.7,
                  }}
                />

                {/* Circle image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="https://i.pinimg.com/736x/a0/94/e6/a094e650124f0595a342b833a2e17b1a.jpg"
                    alt="Party Jollof"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  {/* Subtle bottom scrim inside circle */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(6,4,2,0.65) 0%, transparent 55%)",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* Trending badge — top right on ring */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "-8px",
                    background: "var(--color-primary)",
                    color: "var(--color-on-ink)",
                    fontSize: "9px",
                    fontWeight: 900,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                  }}
                >
                  Trending
                </div>

                {/* Price badge — bottom left on ring */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "18px",
                    left: "-12px",
                    background: "rgba(6,4,2,0.92)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    padding: "6px 12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "var(--color-secondary)",
                    }}
                  >
                    ₦3,000
                  </span>
                </div>

                {/* Open-now dot — bottom right */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    right: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "rgba(6,4,2,0.85)",
                    padding: "4px 8px",
                    border: "0.5px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      display: "flex",
                      width: "7px",
                      height: "7px",
                    }}
                  >
                    <span
                      className="animate-ping"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "var(--color-success)",
                        opacity: 0.7,
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "var(--color-success)",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Open
                  </span>
                </div>
              </div>

              {/* Dish name + sub below the circle */}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--color-secondary)",
                    marginBottom: "4px",
                  }}
                >
                  Fan Favourite
                </p>
                <p
                  className="font-display font-black"
                  style={{
                    fontSize: "1.4rem",
                    color: "var(--color-on-ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Party Jollof
                </p>
              </div>

            </div>
          </div>

        </div>{/* /main grid */}
      </section>
    </>
  );
}