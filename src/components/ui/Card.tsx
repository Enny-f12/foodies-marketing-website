"use client";

import React from "react";
import Image from "next/image";

// ─── Base Card ────────────────────────────────────────────────────────────────
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export function Card({ children, className = "", hover = false, id }: CardProps) {
  return (
    <div
      id={id}
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        transition: "var(--transition-theme)",
      }}
      className={[
        "rounded-sm",
        hover
          ? "hover:border-primary/40 hover:brightness-105 transition-all duration-300"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

// ─── Menu / Food Card ─────────────────────────────────────────────────────────
interface MenuCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  className?: string;
}

export function MenuCard({
  image,
  name,
  price,
  description,
  className = "",
}: MenuCardProps) {
  return (
    <Card hover className={`overflow-hidden group ${className}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-(--color-bg-soft)">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            style={{ color: "var(--color-text)" }}
            className="font-bold text-base leading-snug"
          >
            {name}
          </h3>
          <span className="text-(--color-primary-muted) font-bold text-sm whitespace-nowrap">
            {price}
          </span>
        </div>
        <p
          style={{ color: "var(--color-text-secondary)" }}
          className="text-xs leading-relaxed line-clamp-3"
        >
          {description}
        </p>
        <button className="mt-4 text-(--color-primary-muted) text-xs font-semibold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1 group/btn cursor-pointer">
          Discover More
          <span className="transition-transform group-hover/btn:translate-x-1">→</span>
        </button>
      </div>
    </Card>
  );
}

// ─── Location Card ────────────────────────────────────────────────────────────
interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  className?: string;
}

export function LocationCard({
  name,
  address,
  phone,
  className = "",
}: LocationCardProps) {
  return (
    <Card hover className={`p-6 ${className}`}>
      <div className="flex items-start gap-3 mb-4">
        <span className="text-primary text-lg mt-0.5">📍</span>
        <div>
          <h3
            style={{ color: "var(--color-text)" }}
            className="font-bold text-base mb-1"
          >
            {name}
          </h3>
          <p style={{ color: "var(--color-text-secondary)" }} className="text-xs leading-relaxed">
            {address}
          </p>
          <p style={{ color: "var(--color-text-secondary)" }} className="text-xs mt-1">
            {phone}
          </p>
        </div>
      </div>
      <button
        style={{ border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}
        className="w-full text-xs font-semibold uppercase tracking-widest py-2.5 hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
      >
        Get Directions
      </button>
    </Card>
  );
}

// ─── Feature / Heritage Card ───
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="text-primary text-2xl">{icon}</div>
      <h4 style={{ color: "var(--color-text)" }} className="font-bold text-sm">
        {title}
      </h4>
      <p style={{ color: "var(--color-text-secondary)" }} className="text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ─── FAQ Accordion Card ───
interface FAQCardProps {
  question: string;
  answer: string;
}

export function FAQCard({ question, answer }: FAQCardProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--color-border)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ color: "var(--color-text)" }}
        className="w-full flex items-center justify-between py-4 text-left text-sm font-medium hover:text-primary transition-colors cursor-pointer"
      >
        {question}
        <span
          className={`text-primary text-lg transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p
          style={{ color: "var(--color-text-secondary)" }}
          className="pb-4 text-xs leading-relaxed"
        >
          {answer}
        </p>
      )}
    </div>
  );
}