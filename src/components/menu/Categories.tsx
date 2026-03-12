"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./Data";
import { MenuTabs } from "./Tabs";

export function MenuCategories() {
  const [activeId, setActiveId] = useState(categories[0].id);

  const cat = categories.find((c) => c.id === activeId) ?? categories[0];
  const catIndex = categories.findIndex((c) => c.id === activeId);
  const sectionBg = catIndex % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-soft)";

  return (
    <>
      <MenuTabs active={activeId} onSelect={setActiveId} />

      <section style={{ background: sectionBg, minHeight: "60vh" }} className="transition-colors duration-500">
        <div
          className="max-w-7xl mx-auto"
          style={{ padding: "clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem)" }}
        >
          {/* Category header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 shrink-0" style={{ background: "var(--color-primary)" }} />
            <span className="section-label">{cat.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-10">

            {/* Left — description + item chips */}
            <div>
              <h2 className="font-display font-black leading-tight mb-4" style={{ color: "var(--color-heading)", fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
                {cat.title}
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)", fontSize: "clamp(0.95rem,1.8vw,1.05rem)", maxWidth: "min(100%,480px)" }}>
                {cat.desc}
              </p>

              {/* THE CHIPS (RESTORED DESIGN) */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => {
                  const Icon = item.icon; // Lucide Fix
                  return (
                    <div
                      key={`${activeId}-${item.name}`}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-border bg-card text-muted hover:border-primary/30 transition-colors"
                    >
                      <Icon size={14} className="text-primary" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}

                <Link
                  href="/download"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-opacity"
                >
                  + More in App
                </Link>
              </div>
            </div>

            {/* Right — Staggered Image Grid */}
            <div key={activeId} className="grid grid-cols-2 gap-4 animate-fade-in">
              {cat.items.slice(0, 2).map((item, i) => (
                <div
                  key={`${activeId}-img-${i}`}
                  className="relative overflow-hidden rounded-2xl border border-border group shadow-md"
                  style={{
                    aspectRatio: i === 0 ? "4/5" : "1/1",
                    marginTop: i === 1 ? "2rem" : "0"
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">{cat.title}</p>
                    <p className="text-xs font-bold text-neutral-900">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-border">
            <p className="text-sm font-medium text-muted">
              <span className="text-primary font-black">255+ dishes</span> available with real-time stock visibility.
            </p>
            <Link href="/download" className="btn-label  text-primary px-6 py-3 rounded-xl hover:scale-105 transition-all">
              View Full Menu in App →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}