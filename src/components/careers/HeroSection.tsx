"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-neutral-950 flex items-center"
    >
      {/* ── Background image with dark overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/df/a2/f6/dfa2f64e7d7e34b0765d695d3e87cb32.jpg"
          alt="Foodies kitchen background"
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-neutral-950/60" />
      </div>

      {/* ── Decorative glow blobs ── */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(225,11,28,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 -left-10 w-60 h-60 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(252,208,99,0.08) 0%, transparent 70%)" }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-0.5 bg-red-600 rounded-full" />
              <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-amber-400">
                Careers at Foodies Hot &amp; Spicy
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-black uppercase leading-[1.02] text-white mb-5 text-5xl sm:text-6xl lg:text-[4.5rem] tracking-tight">
              JOIN THE<br />
              <span className="text-red-600">FOODIES</span>{" "}
              FAMILY
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8 max-w-md">
              We&#39;re not just serving food — we&#39;re creating experiences, building
              community, and sharing our passion for Nigerian cuisine with every guest.
              Come be part of something delicious.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#openings"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           bg-red-600 hover:bg-red-700 text-white font-bold text-sm
                           uppercase tracking-widest transition-colors"
              >
                View Open Roles <ArrowRight size={15} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href="#internships"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           border border-white/20 hover:bg-white/5 text-white font-bold
                           text-sm uppercase tracking-widest bg-transparent transition-colors"
              >
                Internships
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: Two equal side-by-side columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
            className="relative hidden lg:grid grid-cols-2 gap-4 items-end"
          >
            {/* Column 1 — taller, starts higher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/60"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="https://i.pinimg.com/736x/72/8f/5a/728f5a88489d3a06a3c66da00d0cd532.jpg"
                alt="Foodies chef at work"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-4 left-3 right-3">
                <div className="backdrop-blur-sm bg-black/40 rounded-xl px-3 py-2.5 ring-1 ring-white/10">
                  <p className="text-[0.6rem] text-amber-400 font-bold uppercase tracking-widest mb-0.5">
                    Kitchen Team
                  </p>
                  <p className="text-xs text-white font-semibold leading-snug">
                    Where the magic happens
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Column 2 — shorter, offset down with a top label */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-col gap-4"
            >
              {/* "Now Hiring" pill floating above */}
              <div className="flex justify-center">
                <span className="inline-block bg-red-600 text-white text-[0.58rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                  Now Hiring
                </span>
              </div>

              {/* Image */}
              <div
                className="relative rounded-2xl overflow-hidden ring-2 ring-red-600/40 shadow-xl shadow-black/50"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="https://i.pinimg.com/736x/ef/07/d0/ef07d0b8045148a8fa6dcb46382f262b.jpg"
                  alt="Foodies dining experience"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-4 left-3 right-3">
                  <div className="backdrop-blur-sm bg-black/40 rounded-xl px-3 py-2.5 ring-1 ring-white/10">
                    <p className="text-[0.6rem] text-amber-400 font-bold uppercase tracking-widest mb-0.5">
                      Our Team
                    </p>
                    <p className="text-xs text-white font-semibold leading-snug">
                      People who love what they do
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-neutral-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}