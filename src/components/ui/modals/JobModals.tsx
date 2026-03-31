"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, ChevronRight, X, Check, ArrowRight } from "lucide-react";
import type { Job } from "../../../../types";

interface JobModalProps {
  job: Job;
  onClose: () => void;
  onApply: () => void;
}

export function JobModal({ job, onClose, onApply }: JobModalProps) {
  const JobIcon = job.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--color-bg-card)",
          border: "1px solid var(--color-border)",
          borderRadius: 20, width: "100%", maxWidth: 640,
          maxHeight: "90vh", overflow: "hidden",
          display: "flex", flexDirection: "column",
          boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "1.5rem 1.75rem",
          borderBottom: "1px solid var(--color-border)",
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          gap: "1rem", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12, flexShrink: 0,
              background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-primary) 25%, transparent)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <JobIcon size={20} color="var(--color-primary)" strokeWidth={1.8} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "1.2rem",
                  color: "var(--color-heading)", margin: 0,
                  fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em",
                }}>
                  {job.title}
                </h3>
                {job.isPhase4 && (
                  <span style={{
                    fontSize: "0.6rem", padding: "0.15rem 0.5rem", borderRadius: 20,
                    background: "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--color-secondary) 35%, transparent)",
                    color: "var(--color-secondary)", fontWeight: 700,
                    fontFamily: "var(--font-sans)", letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>Phase 4</span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.25rem", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
                  <MapPin size={12} strokeWidth={2} /> {job.locationLabel}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
                  <Briefcase size={12} strokeWidth={2} /> {job.type}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
              background: "var(--color-bg-soft)", border: "1px solid var(--color-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={16} color="var(--color-text-secondary)" strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: "auto", padding: "1.5rem 1.75rem", flex: 1 }} className="no-scrollbar">
          {/* About */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-primary)", margin: "0 0 0.6rem" }}>
              About the Role
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
              {job.about}
            </p>
          </div>

          {/* Responsibilities & Requirements */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.5rem" }} className="modal-cols">
            {[
              { heading: "Responsibilities", items: job.responsibilities },
              { heading: "Requirements",     items: job.requirements },
            ].map((col) => (
              <div key={col.heading}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-primary)", margin: "0 0 0.75rem" }}>
                  {col.heading}
                </h4>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {col.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <ChevronRight size={13} color="var(--color-primary)" strokeWidth={2.5} style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* We Offer */}
          <div style={{
            background: "color-mix(in srgb, var(--color-primary) 6%, transparent)",
            border: "1px solid color-mix(in srgb, var(--color-primary) 18%, transparent)",
            borderRadius: 12, padding: "1.1rem 1.25rem",
          }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-primary)", margin: "0 0 0.7rem" }}>
              What We Offer
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {job.weOffer.map((item, i) => (
                <span key={i} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.3rem",
                  background: "var(--color-bg-card)", border: "1px solid var(--color-border)",
                  borderRadius: 20, padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem", color: "var(--color-text)", fontFamily: "var(--font-sans)",
                }}>
                  <Check size={10} color="var(--color-primary)" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{
          padding: "1.1rem 1.75rem",
          borderTop: "1px solid var(--color-border)",
          display: "flex", gap: "0.75rem", flexShrink: 0, flexWrap: "wrap",
        }}>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={onApply}
            style={{
              flex: 1, minWidth: 160, padding: "0.85rem 1.5rem",
              background: "var(--color-primary)", color: "#fff",
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em",
              borderRadius: 10, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
            }}
          >
            {job.isPhase4 ? "Register Interest" : "Apply for this Position"}
            <ArrowRight size={14} strokeWidth={2.5} />
          </motion.button>
          <button
            onClick={onClose}
            style={{
              padding: "0.85rem 1.25rem", borderRadius: 10,
              border: "1.5px solid var(--color-border)", background: "transparent",
              cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.82rem",
              color: "var(--color-text-secondary)", fontWeight: 500,
            }}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}