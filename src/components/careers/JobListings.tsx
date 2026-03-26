"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, ChevronRight, ExternalLink } from "lucide-react";
import type { Job, Location, Department } from "../../../types/index";
import { JOBS } from "../../../lib/data";
import { SectionLabel } from "./SectionLabel";

interface JobListingsProps {
  onViewDetails: (job: Job) => void;
  onApply: (job: Job) => void;
}

export function JobListings({ onViewDetails, onApply }: JobListingsProps) {
  const [locationFilter, setLocationFilter] = useState<Location>("all");
  const [deptFilter, setDeptFilter] = useState<Department>("all");

  const filteredJobs = JOBS.filter((j) => {
    const locMatch  = locationFilter === "all" || j.location === locationFilter;
    const deptMatch = deptFilter === "all"     || j.department === deptFilter;
    return locMatch && deptMatch;
  });

  const filterBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.45rem 1rem", borderRadius: 20, cursor: "pointer",
    border: active ? "1.5px solid var(--color-primary)" : "1.5px solid var(--color-border)",
    background: active ? "color-mix(in srgb, var(--color-primary) 10%, transparent)" : "var(--color-bg-card)",
    color: active ? "var(--color-primary)" : "var(--color-text-secondary)",
    fontFamily: "var(--font-sans)", fontSize: "0.78rem",
    fontWeight: active ? 700 : 400, transition: "all 0.18s",
    textTransform: "uppercase" as const, letterSpacing: "0.06em",
  });

  return (
    <section id="openings" style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <SectionLabel text="Current Openings" />

      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
        <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", margin: 0 }}>
          Find Your <span style={{ color: "var(--color-primary)" }}>Role</span>
        </h2>
        <div style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
          {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} available
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {(["all", "lekki", "abuja"] as Location[]).map((l) => (
            <button key={l} onClick={() => setLocationFilter(l)} style={filterBtnStyle(locationFilter === l)}>
              {l === "all" ? "All Locations" : l === "lekki" ? "Lekki, Lagos" : "Maitama, Abuja"}
            </button>
          ))}
        </div>
        <div style={{ width: 1, background: "var(--color-border)", margin: "0 0.25rem" }} />
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {(["all", "kitchen", "service", "operations"] as Department[]).map((d) => (
            <button key={d} onClick={() => setDeptFilter(d)} style={filterBtnStyle(deptFilter === d)}>
              {d === "all" ? "All Roles" : d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Listings */}
      <AnimatePresence mode="wait">
        <motion.div
          key={locationFilter + deptFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}
        >
          {filteredJobs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}>
              No roles match your filters right now. Try a different combination.
            </div>
          ) : filteredJobs.map((job, i) => {
            const JobIcon = job.icon;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  background: "var(--color-bg-card)", border: "1px solid var(--color-border)",
                  borderRadius: 14, padding: "1.25rem 1.5rem",
                  display: "flex", alignItems: "center", gap: "1.25rem",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                whileHover={{
                  boxShadow: "0 4px 24px var(--color-shadow)",
                  borderColor: "color-mix(in srgb, var(--color-primary) 40%, transparent)",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 46, height: 46, borderRadius: 11, flexShrink: 0,
                  background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--color-primary) 22%, transparent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <JobIcon size={20} color="var(--color-primary)" strokeWidth={1.8} />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-heading)", fontWeight: 700, textTransform: "uppercase" }}>
                      {job.title}
                    </span>
                    {job.isPhase4 && (
                      <span style={{
                        fontSize: "0.6rem", padding: "0.1rem 0.45rem", borderRadius: 20,
                        background: "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--color-secondary) 35%, transparent)",
                        color: "var(--color-secondary)", fontWeight: 700,
                        fontFamily: "var(--font-sans)", letterSpacing: "0.08em",
                      }}>Phase 4</span>
                    )}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
                      <MapPin size={11} strokeWidth={2} /> {job.locationLabel}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.78rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
                      <Briefcase size={11} strokeWidth={2} /> {job.type}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)" }}>
                      {job.typeNote}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", marginTop: "0.35rem" }}>
                    {job.blurb}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0, flexWrap: "wrap" }}>
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => onViewDetails(job)}
                    style={{
                      padding: "0.55rem 1rem", borderRadius: 8, cursor: "pointer",
                      border: "1.5px solid var(--color-border)", background: "transparent",
                      fontFamily: "var(--font-sans)", fontSize: "0.75rem",
                      color: "var(--color-text-secondary)", fontWeight: 600,
                      display: "flex", alignItems: "center", gap: "0.3rem",
                    }}
                  >
                    <ExternalLink size={12} strokeWidth={2} /> Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => onApply(job)}
                    style={{
                      padding: "0.55rem 1.1rem", borderRadius: 8, cursor: "pointer",
                      border: "none", background: "var(--color-primary)", color: "#fff",
                      fontFamily: "var(--font-display)", fontSize: "0.75rem",
                      fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                      display: "flex", alignItems: "center", gap: "0.3rem",
                    }}
                  >
                    {job.isPhase4 ? "Register" : "Apply"} <ChevronRight size={12} strokeWidth={2.5} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}