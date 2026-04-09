"use client";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
  { label: "Download App", href: "/app" },
  { label: "Careers", href: "/careers" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/foodies_hotandspicy", icon: FaInstagram, color: "#E1306C" },
  { label: "Facebook", href: "https://www.facebook.com/foodieshotandspicey", icon: FaFacebookF, color: "#1877F2" },
  { label: "TikTok", href: "https://www.tiktok.com/@foodies_hotandspicy", icon: FaTiktok, color: "#ffffff" },
  { label: "Snapchat", href: "https://www.snapchat.com/add/foodiesng", icon: FaSnapchat, color: "#FFFC00" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      style={{
        background: "var(--color-surface-ink)",
        color: "var(--color-on-ink)",
      }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem)" }}
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand - Strategic Position */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-leftshrink-0 justify-left">
              <Image
                src="/assets/Logo.png"
                alt="Foodies Hot & Spicy"
                width={60}
                height={20}
                className="object-contain w-auto h-auto md:h-10 lg:h-14 "
                loading="eager"
              />
            </Link>
            <p
              className="text-xs leading-relaxed opacity-70 italic"
              style={{ color: "var(--color-on-ink-muted)", maxWidth: "220px" }}
            >
              Not Just Our Meals—An Experience in Taste and Hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6"
              style={{ color: "var(--color-on-ink)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-xs transition-colors hover:text-secondary"
                    style={{ color: "var(--color-on-ink-muted)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations - Synchronized with latest data */}
          <div>
            <h4
              className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6"
              style={{ color: "var(--color-on-ink)" }}
            >
              Locations
            </h4>
            <div className="flex flex-col gap-5">
              {[
                { city: "Lekki, Lagos", addr: "23 Admiralty Way  opposite wole ariyo street Lekki phase 1" },
                { city: "Lekki, Lagos", addr: "32a Admiralty Way opposite Ebaeno supermarket Lekki Phase 1" },
                { city: "Maitama, Abuja", addr: "AP Filling Station, Ardova Mall, opposite Transcorp Hilton, Maitama, Abuja 900026, Federal Capital Territory" },
              ].map((loc, i) => (
                <div key={i}>
                  <p className="text-xs font-bold mb-1"
                    style={{ color: "var(--color-on-ink)" }}>
                    {loc.city}
                  </p>
                  <p className="text-[11px] leading-relaxed"
                    style={{ color: "var(--color-on-ink-muted)" }}>
                    {loc.addr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6"
              style={{ color: "var(--color-on-ink)" }}
            >
              Connect
            </h4>
            <div className="flex flex-row gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:scale-110"
                  style={{
                    background: "var(--color-surface-ink-deep)",
                    border: "1px solid var(--color-surface-ink-border)",
                    color: s.color,        // ✅ brand color per icon
                  }}
                >
                  <s.icon size={16} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter - Redesigned for high impact */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-6 py-10 mb-8"
          style={{
            borderTop: "1px solid var(--color-surface-ink-border)",
            borderBottom: "1px solid var(--color-surface-ink-border)",
          }}
        >
          <div className="max-w-md">
            <h4 className="text-sm font-bold mb-1">Stay in the Loop</h4>
            <p className="text-xs" style={{ color: "var(--color-on-ink-muted)" }}>
              Subscribe for exclusive offers and new menu announcements.
            </p>
          </div>
          <div className="flex gap-2 flex-1 w-full lg:w-auto lg:max-w-md ml-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-xs px-4 py-3 outline-none min-w-0 rounded-sm transition-all focus:ring-1 focus:ring-primary"
              style={{
                background: "var(--color-surface-ink-deep)",
                border: "1px solid var(--color-surface-ink-border)",
                color: "var(--color-on-ink)",
              }}
            />
            <button
              className="px-8 py-3 text-[10px] rounded-r-xl font-black uppercase tracking-widest shrink-0 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-on-ink)",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar - Minimalist */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
          <p className="text-[10px] uppercase tracking-widest font-medium opacity-40">
            © 2026 Foodies Hot &amp; Spicy Nigeria. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[10px] uppercase tracking-widest font-medium opacity-40 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>{/*  */}
        </div>
      </div>
    </footer>
  );
}