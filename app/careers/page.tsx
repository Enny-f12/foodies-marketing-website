"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Sections
import { HeroSection }         from "../../src/components/careers/HeroSection";
import { HowItWorks }          from "../../src/components/careers/HowItWorks";
import { CultureSection }      from "../../src/components/careers/CultureSection";
import { BenefitsSection }     from "../../src/components/careers/BenefitsSection";
import { JobListings }         from "../../src/components/careers/JobListings";
import { InternshipsSection }  from "../../src/components/careers/InternshipsSection";
import { TestimonialsSection } from "../../src/components/careers/TestimonialSection";

// Modals
import { JobModal }            from "../../src/components/ui/modals/JobModals";
import { ApplicationModal }    from "../../src/components/ui/modals/ApplicationModals";

// Data & Types
import { JOBS }                from "../../lib/data";
import type { Job }            from "../../types/index";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyJob, setApplyJob]       = useState<Job | null>(null);

  const handleApply = (job: Job) => {
    setSelectedJob(null);
    setApplyJob(job);
  };

  return (
    <main style={{ background: "var(--color-bg)" }}>

      <HeroSection />

      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(1rem, 5vw, 3rem)" }}>
        <HowItWorks />
        <CultureSection />
        <BenefitsSection />

        <JobListings
          onViewDetails={(job) => setSelectedJob(job)}
          onApply={handleApply}
        />

        <InternshipsSection
          fallbackJob={JOBS[0]}
          onRegisterInterest={handleApply}
        />

        <TestimonialsSection />
      </div>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <JobModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
            onApply={() => handleApply(selectedJob)}
          />
        )}
      </AnimatePresence>

      {/* Application Form Modal */}
      <AnimatePresence>
        {applyJob && (
          <ApplicationModal
            job={applyJob}
            onClose={() => setApplyJob(null)}
          />
        )}
      </AnimatePresence>

      {/* Responsive styles shared across sections */}
      <style>{`
        .culture-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        .internship-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 3rem);
          align-items: start;
        }
        .modal-cols {
          grid-template-columns: 1fr 1fr;
        }
        .form-row {
          grid-template-columns: 1fr 1fr;
        }
        .how-arrow {
          display: block;
        }
        @media (max-width: 860px) {
          .culture-layout    { grid-template-columns: 1fr; }
          .internship-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .modal-cols { grid-template-columns: 1fr !important; }
          .form-row   { grid-template-columns: 1fr !important; }
          .how-arrow  { display: none; }
        }
      `}</style>
    </main>
  );
}