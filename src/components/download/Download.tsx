import Link from "next/link";
import Image from "next/image";
import {
  Apple,
  Play,
  Zap,
  CalendarCheck,
  Truck,
  Gift,
  MessageCircle,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────── */
const features = [
  {
    icon:  ShoppingBag,
    title: "Seamless Ordering",
    desc:  "Browse 255+ items, customize your dishes, and checkout in seconds.",
  },
  {
    icon:  Zap,
    title: "Real-Time Inventory",
    desc:  "See live stock availability before you order. No more disappointment.",
  },
  {
    icon:  CalendarCheck,
    title: "Easy Reservations",
    desc:  "Book tables in real-time, make special requests, and get instant confirmations.",
  },
  {
    icon:  Truck,
    title: "Live Tracking",
    desc:  "Track your driver live on the map with accurate ETA updates.",
  },
  {
    icon:  Gift,
    title: "Loyalty & Rewards",
    desc:  "Earn points on every order, unlock VIP tiers, and get exclusive offers.",
  },
  {
    icon:  MessageCircle,
    title: "Concierge Chat",
    desc:  "Chat with our team for assistance, recommendations, or dietary needs.",
  },
];

const screens = [
  { id: 1, label: "Home",     desc: "Real-time discovery"      },
  { id: 2, label: "Menu",     desc: "255+ authentic dishes"     },
  { id: 3, label: "Order",    desc: "Seamless digital checkout" },
  { id: 4, label: "Tracking", desc: "Live delivery updates"     },
  { id: 5, label: "Profile",  desc: "Exclusive loyalty tiers"   },
];

/* ─── SHARED APP BUTTONS ────────────────────────────────────── */
function AppButtons({ variant = "ink" }: { variant?: "ink" | "light" }) {
  const isInk = variant === "ink";
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/download"
        className="inline-flex items-center gap-3 px-6 py-3.5 font-semibold rounded-xl transition-all hover:opacity-90 active:scale-95"
        style={{
          background: isInk ? "var(--color-on-ink)" : "var(--color-heading)",
          color:      isInk ? "var(--color-surface-ink)" : "var(--color-bg)",
        }}
      >
        <Apple size={20} strokeWidth={2} />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[9px] uppercase tracking-widest opacity-50 font-semibold">
            Download on the
          </span>
          <span className="text-sm font-bold">App Store</span>
        </span>
      </Link>

      <Link
        href="/download"
        className="inline-flex items-center gap-3 px-6 py-3.5 font-semibold rounded-xl transition-all hover:opacity-90 active:scale-95"
        style={{ background: "var(--color-primary)", color: "#fff" }}
      >
        <Play size={18} strokeWidth={2} fill="currentColor" />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[9px] uppercase tracking-widest opacity-75 font-semibold">
            Get it on
          </span>
          <span className="text-sm font-bold">Google Play</span>
        </span>
      </Link>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function AppDownloadPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >

     
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-surface-ink)", paddingTop: "72px" }}
      >
        {/* Ambient glows */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full pointer-events-none"
          style={{ background: "var(--color-primary)", opacity: 0.07, filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "var(--color-secondary)", opacity: 0.05, filter: "blur(80px)" }}
        />

        <div
          className="relative z-10 max-w-7xl mx-auto text-center"
          style={{ padding: "clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,3rem) clamp(3rem,6vw,5rem)" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 shrink-0" style={{ background: "var(--color-secondary)" }} />
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--color-secondary)" }}
            >
              The Foodies App
            </span>
            <div className="h-px w-10 shrink-0" style={{ background: "var(--color-secondary)" }} />
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold uppercase leading-none mb-6 mx-auto"
            style={{
              fontSize:      "clamp(2.8rem,6vw,6rem)",
              letterSpacing: "-0.03em",
              color:         "var(--color-on-ink)",
              maxWidth:      "min(90vw,820px)",
            }}
          >
            Your passport to{" "}
            <span style={{ color: "var(--color-primary)" }}>premium</span>
            <br />Nigerian dining.
          </h1>

          {/* Sub */}
          <p
            className="mx-auto mb-10 leading-relaxed"
            style={{
              fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
              color:    "var(--color-on-ink-muted)",
              maxWidth: "min(90vw,500px)",
            }}
          >
            Real-time inventory, seamless reservations, and exclusive loyalty
            rewards — all in one app. Never order what&#39;s out of stock again.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <AppButtons variant="ink" />
          </div>

          {/* QR promo strip */}
          <div
            className="inline-flex items-center gap-4 px-5 py-3 rounded-xl mx-auto"
            style={{
              background: "rgba(255,255,255,0.05)",
              border:     "0.5px solid var(--color-surface-ink-border)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{
                border: "1.5px dashed var(--color-surface-ink-border)",
                color:  "var(--color-on-ink-faint)",
              }}
            >
              <Smartphone size={18} strokeWidth={1.5} />
            </div>
            <p className="text-[12px]" style={{ color: "var(--color-on-ink-muted)" }}>
              Scan to download ·{" "}
              <strong style={{ color: "var(--color-secondary)" }}>₦2,000 off</strong>{" "}
              your first order
            </p>
          </div>

          {/* Stats strip */}
          <div
            className="grid grid-cols-3 max-w-sm mx-auto mt-14"
            style={{ borderTop: "0.5px solid var(--color-surface-ink-border)", paddingTop: "1.5rem" }}
          >
            {[
              { value: "255+", label: "Dishes" },
              { value: "5★",   label: "Rating" },
              { value: "20K+", label: "Users"  },
            ].map((s, i, arr) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1"
                style={{
                  borderRight: i < arr.length - 1
                    ? "0.5px solid var(--color-surface-ink-border)"
                    : "none",
                }}
              >
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "var(--color-secondary)" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "var(--color-on-ink-faint)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURES GRID
          ════════════════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 shrink-0" style={{ background: "var(--color-secondary)" }} />
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--color-secondary)" }}
            >
              What&rsquo;s in the App
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <h2
              className="font-display font-bold uppercase leading-none"
              style={{
                fontSize:      "clamp(2rem,4vw,3rem)",
                letterSpacing: "-0.03em",
                color:         "var(--color-heading)",
              }}
            >
              Everything you need for a{" "}
              <span style={{ color: "var(--color-primary)" }}>world-class</span>
              <br />culinary journey.
            </h2>
            <p
              className="text-sm shrink-0"
              style={{ color: "var(--color-text-secondary)", maxWidth: "200px" }}
            >
              Six powerful features, one seamless experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 rounded-xl"
                style={{
                  background: "var(--color-bg-card)",
                  border:     "0.5px solid var(--color-border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: i % 2 === 0
                      ? "rgba(225,11,28,0.08)"
                      : "rgba(252,208,99,0.12)",
                  }}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    style={{
                      color: i % 2 === 0
                        ? "var(--color-primary)"
                        : "var(--color-secondary-hover)",
                    }}
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-heading)" }}>
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FIRST ORDER OFFER
          ════════════════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: "var(--color-bg)" }}>
        <div
          className="max-w-3xl mx-auto rounded-xl overflow-hidden"
          style={{ border: "0.5px solid var(--color-border)" }}
        >
          {/* Image banner */}
          <div className="relative h-52 overflow-hidden">
            <Image
              src="https://i.pinimg.com/1200x/73/f8/a9/73f8a962194665f8ff4a72d0267f0fff.jpg"
              alt="Nigerian food spread"
              fill
              className="object-cover object-center"
              sizes="800px"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.65))" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display font-bold uppercase text-white"
                style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", letterSpacing: "-0.02em" }}
              >
                First Order Offer
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-10 text-center" style={{ background: "var(--color-bg-card)" }}>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "var(--color-text)" }}>
              Download now and get{" "}
              <span className="font-bold" style={{ color: "var(--color-primary)" }}>
                ₦2,000 off
              </span>{" "}
              your first order.
            </p>

            <div
              className="inline-block px-8 py-3 rounded-xl font-mono font-bold mb-8"
              style={{
                background:    "var(--color-bg-soft)",
                border:        "1.5px dashed var(--color-primary)",
                color:         "var(--color-primary)",
                fontSize:      "1.1rem",
                letterSpacing: "0.12em",
              }}
            >
              FOODIESAPP
            </div>

            <div className="flex justify-center mb-6">
              <AppButtons variant="light" />
            </div>

            <p
              className="text-[10px] uppercase tracking-widest"
              style={{ color: "var(--color-text-disabled)" }}
            >
              Valid for new users only. Minimum order applies.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          APP SCREEN PREVIEWS
          ════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 shrink-0" style={{ background: "var(--color-secondary)" }} />
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Interface
                </span>
              </div>
              <h2
                className="font-display font-bold uppercase leading-none"
                style={{
                  fontSize:      "clamp(1.8rem,3.5vw,2.8rem)",
                  letterSpacing: "-0.03em",
                  color:         "var(--color-heading)",
                }}
              >
                See the App{" "}
                <span style={{ color: "var(--color-primary)" }}>in Action</span>
              </h2>
            </div>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)", maxWidth: "240px" }}
            >
              Designed for speed and your appetite. Swipe to explore.
            </p>
          </div>

          {/* Scroll container */}
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
            {screens.map((screen) => (
              <div key={screen.id} className="min-w-65 snap-center shrink-0">
                <div
                  className="relative rounded-xl overflow-hidden flex flex-col items-center justify-center group"
                  style={{
                    aspectRatio: "9/18",
                    background:  "var(--color-bg-card)",
                    border:      "0.5px solid var(--color-border)",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-2xl"
                    style={{
                      background: "var(--color-bg-soft)",
                      border:     "0.5px solid var(--color-border)",
                      borderTop:  "none",
                    }}
                  />

                  {/* Hover tint */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ background: "rgba(225,11,28,0.03)" }}
                  />

                  <div className="z-10 text-center px-8">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm"
                      style={{ background: "rgba(225,11,28,0.08)", color: "var(--color-primary)" }}
                    >
                      {screen.id}
                    </div>
                    <h4 className="font-semibold text-base mb-1" style={{ color: "var(--color-heading)" }}>
                      {screen.label}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {screen.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screens.map((s, i) => (
              <div
                key={s.id}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width:      i === 0 ? "2rem" : "0.5rem",
                  background: i === 0 ? "var(--color-primary)" : "var(--color-border)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA STRIP
          ════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "var(--color-surface-ink)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-bold uppercase leading-none mb-4"
            style={{
              fontSize:      "clamp(2rem,4vw,3rem)",
              letterSpacing: "-0.03em",
              color:         "var(--color-on-ink)",
            }}
          >
            Ready to order?
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "var(--color-on-ink-muted)" }}>
            Download the app and get ₦2,000 off your first order.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <AppButtons variant="ink" />
          </div>
        </div>
      </section>

    </main>
  );
}