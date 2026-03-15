"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Sparkles, Utensils, ArrowRight } from "lucide-react";

const locations = [
  {
    id: "lekki",
    name: "Lekki, Lagos",
    address: "32b Admiralty Way, Opposite Prince Ebeano Supermarket, Lekki Phase 1, Lagos",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    note: "Private dining available for up to 20 guests",
    images: [
      "https://i.pinimg.com/736x/51/a7/ed/51a7edcd6c26ea2bccee7eb87039aca4.jpg",
      "https://i.pinimg.com/736x/51/a7/ed/51a7edcd6c26ea2bccee7eb87039aca4.jpg",
    ],
  },
  {
    id: "abuja",
    name: "Maitama, Abuja",
    address: "Plot 12, Gana Street, Maitama, Abuja",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    note: "Private dining available",
    images: [
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg",
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg"
    ],
  },
   {
    id: "lekki-2",
    name: "Lekki, Lagos",
    address: "23 Admiralty Way  opposite wole ariyo street Lekki phase 1",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    note: "Private dining available",
    images: [
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg",
      "https://i.pinimg.com/736x/53/14/52/531452de613131d384f31ddb76d43139.jpg"
    ],
  },
];

const infoRows = [
  { icon: MapPin, key: "address" },
  { icon: Clock, key: "hours" },
  { icon: Sparkles, key: "note" },
] as const;

export function OurSpacesSection() {
  return (
    <section className="transition-colors duration-500" style={{ background: "var(--color-bg)" }}>
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 shrink-0" style={{ background: "var(--color-primary)" }} />
          <span className="section-label text-primary">Our Spaces</span>
        </div>
        <h2
          className="font-display font-black mb-16"
          style={{
            color: "var(--color-heading)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Three Locations. <br />
          <span className="text-primary italic">One Standard of Excellence.</span>
        </h2>

        {/* Location blocks */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {locations.map((loc, li) => (
            <div
              key={loc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                li % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ direction: li % 2 === 1 ? "rtl" : "ltr" }}
            >
              {/* Image Grid - Editorial Style */}
              <div className="grid grid-cols-2 gap-4" style={{ direction: "ltr" }}>
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-white/5">
                  <Image src={loc.images[0]} alt={loc.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"/>
                </div>
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-white/5 translate-y-8">
                  <Image src={loc.images[1]} alt={loc.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"/>
                </div>
              </div>

              {/* Info Panel */}
              <div className="flex flex-col" style={{ direction: "ltr" }}>
                <div className="flex items-baseline gap-4 mb-8">
                  <span
                    className="font-display font-black text-7xl leading-none opacity-30"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {String(li + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display font-black uppercase"
                    style={{
                      color: "var(--color-heading)",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    }}
                  >
                    {loc.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-6 mb-10">
                  {infoRows.map(({ icon: Icon, key }) => (
                    <div key={key} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--color-primary-faint)" }}>
                         <Icon size={16} strokeWidth={2} style={{ color: "var(--color-primary)" }} />
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {loc[key]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Status & Feature Badges */}
                <div className="flex flex-wrap gap-3 mb-10">
                   
                   <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card">
                      <Utensils size={12} className="text-secondary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Private Dining</span>
                   </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-primary-hover hover:-translate-y-1"
                    style={{ background: "var(--color-primary)", color: "white" }}
                  >
                    Book a Table
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/menu"
                    className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest border border-border hover:bg-bg-soft transition-all"
                    style={{ color: "var(--color-heading)" }}
                  >
                    View Private dining
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}