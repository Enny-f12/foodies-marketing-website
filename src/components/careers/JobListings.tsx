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

const LOCATIONS: { value: Location; label: string }[] = [
  { value: "all",   label: "All Locations"  },
  { value: "lekki", label: "Lekki, Lagos"   },
  { value: "abuja", label: "Maitama, Abuja" },
];

const DEPARTMENTS: { value: Department; label: string }[] = [
  { value: "all",        label: "All Roles"   },
  { value: "kitchen",    label: "Kitchen"     },
  { value: "service",    label: "Service"     },
  { value: "operations", label: "Operations"  },
];

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-[0.78rem] uppercase tracking-[0.06em] transition-all duration-200 border-[1.5px] cursor-pointer font-sans
        ${active
          ? "border-primary bg-primary/10 text-primary font-bold"
          : "border-border bg-bg-card text-text-secondary font-normal hover:border-primary/40 hover:text-heading"
        }`}
    >
      {children}
    </button>
  );
}

export function JobListings({ onViewDetails, onApply }: JobListingsProps) {
  const [locationFilter, setLocationFilter] = useState<Location>("all");
  const [deptFilter, setDeptFilter]         = useState<Department>("all");

  const filteredJobs = JOBS.filter((j) => {
    const locMatch  = locationFilter === "all" || j.location === locationFilter;
    const deptMatch = deptFilter === "all"     || j.department === deptFilter;
    return locMatch && deptMatch;
  });

  return (
    <section id="openings" className="py-[clamp(3rem,6vw,5rem)]">
      <SectionLabel text="Current Openings" />

      {/* Header row */}
      <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
        <h2 className="font-display text-heading uppercase m-0 text-[clamp(1.5rem,3vw,2.2rem)]">
          Find Your <span className="text-primary">Role</span>
        </h2>
        <span className="text-[0.78rem] text-text-secondary font-sans">
          {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} available
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {/* Location filters */}
        <div className="flex flex-wrap gap-1.5">
          {LOCATIONS.map((l) => (
            <FilterBtn
              key={l.value}
              active={locationFilter === l.value}
              onClick={() => setLocationFilter(l.value)}
            >
              {l.label}
            </FilterBtn>
          ))}
        </div>

        {/* Divider — hidden on mobile */}
        <div className="hidden sm:block w-px bg-border mx-1 self-stretch" />

        {/* Department filters */}
        <div className="flex flex-wrap gap-1.5">
          {DEPARTMENTS.map((d) => (
            <FilterBtn
              key={d.value}
              active={deptFilter === d.value}
              onClick={() => setDeptFilter(d.value)}
            >
              {d.label}
            </FilterBtn>
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
          className="flex flex-col gap-3"
        >
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 text-text-secondary font-sans text-[0.9rem]">
              No roles match your filters right now. Try a different combination.
            </div>
          ) : (
            filteredJobs.map((job, i) => {
              const JobIcon = job.icon;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-bg-card border border-border rounded-[14px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-colors duration-200"
                  whileHover={{
                    boxShadow: "0 4px 24px var(--color-shadow)",
                    borderColor: "color-mix(in srgb, var(--color-primary) 40%, transparent)",
                  }}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-[11px] shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <JobIcon size={20} color="var(--color-primary)" strokeWidth={1.8} />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    {/* Title + badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-display text-[1rem] text-heading font-bold uppercase">
                        {job.title}
                      </span>
                      {job.isPhase4 && (
                        <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-secondary/15 border border-secondary/35 text-secondary font-bold font-sans tracking-[0.08em]">
                          Phase 4
                        </span>
                      )}
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-3 mb-1">
                      <span className="flex items-center gap-1 text-[0.78rem] text-text-secondary font-sans">
                        <MapPin size={11} strokeWidth={2} /> {job.locationLabel}
                      </span>
                      <span className="flex items-center gap-1 text-[0.78rem] text-text-secondary font-sans">
                        <Briefcase size={11} strokeWidth={2} /> {job.type}
                      </span>
                      <span className="text-[0.75rem] text-text-secondary font-sans">
                        {job.typeNote}
                      </span>
                    </div>

                    {/* Blurb */}
                    <p className="text-[0.8rem] text-text-secondary font-sans leading-relaxed">
                      {job.blurb}
                    </p>
                  </div>

                  {/* Actions — stacked on mobile, row on sm+ */}
                  <div className="flex flex-row sm:flex-col lg:flex-row gap-2 shrink-0 w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onViewDetails(job)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border-[1.5px] border-border bg-transparent text-[0.75rem] text-text-secondary font-semibold font-sans cursor-pointer hover:border-primary/40 hover:text-heading transition-colors"
                    >
                      <ExternalLink size={12} strokeWidth={2} /> Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onApply(job)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-[0.75rem] font-bold font-display uppercase tracking-[0.06em] cursor-pointer border-none"
                    >
                      {job.isPhase4 ? "Register" : "Apply"} <ChevronRight size={12} strokeWidth={2.5} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}