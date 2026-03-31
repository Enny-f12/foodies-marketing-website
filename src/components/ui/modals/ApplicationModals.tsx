"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Check, ArrowRight } from "lucide-react";
import type { Job } from "../../../../types";
import { JOBS } from "../../../../lib/data";

interface ApplicationModalProps {
  job: Job;
  onClose: () => void;
}

export function ApplicationModal({ job, onClose }: ApplicationModalProps) {
  return (
    <AnimatePresence>
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
          style={{ width: "100%", maxWidth: 560, maxHeight: "95vh", overflowY: "auto" }}
          className="no-scrollbar"
        >
          <ApplicationForm preselectedJob={job} onClose={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Inner form ─────────────────────────────── */
function ApplicationForm({ preselectedJob, onClose }: { preselectedJob?: Job; onClose?: () => void }) {
  const [position, setPosition] = useState(preselectedJob?.id || "");
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [phone, setPhone]       = useState("");
  const [location, setLocation] = useState(preselectedJob?.location || "");
  const [cover, setCover]       = useState("");
  const [source, setSource]     = useState("");
  const [eligible, setEligible] = useState(false);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]     = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim())  e.name     = "Full name is required";
    if (!email.trim()) e.email    = "Email is required";
    if (!phone.trim()) e.phone    = "Phone number is required";
    if (!position)     e.position = "Please select a position";
    if (!eligible)     e.eligible = "You must confirm work eligibility";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const inputStyle = (hasErr?: boolean): React.CSSProperties => ({
    width: "100%", padding: "0.75rem 1rem",
    background: "var(--color-bg-input)",
    border: `1.5px solid ${hasErr ? "var(--color-error)" : "var(--color-border)"}`,
    borderRadius: 10, color: "var(--color-text)",
    fontFamily: "var(--font-sans)", fontSize: "0.88rem",
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.18s",
  });

  const labelStyle: React.CSSProperties = {
    fontSize: "0.75rem", fontWeight: 700, color: "var(--color-heading)",
    textTransform: "uppercase", letterSpacing: "0.1em",
    fontFamily: "var(--font-sans)", display: "block", marginBottom: "0.4rem",
  };

  const errStyle: React.CSSProperties = {
    fontSize: "0.7rem", color: "var(--color-error)",
    fontFamily: "var(--font-sans)", marginTop: "0.25rem",
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          textAlign: "center", padding: "3rem 2rem",
          background: "var(--color-bg-card)", borderRadius: 16,
          border: "1px solid var(--color-border)",
        }}
      >
        <div style={{
          width: 64, height: 64, borderRadius: "50%", margin: "0 auto 1.25rem",
          background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
          border: "2px solid var(--color-primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Check size={28} color="var(--color-primary)" strokeWidth={2.5} />
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-heading)", textTransform: "uppercase", marginBottom: "0.5rem", marginTop: 0 }}>
          Application Submitted!
        </h3>
        <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 360, margin: "0 auto 1.5rem" }}>
          Thank you, {name}! We&#39;ve received your application and will be in touch within{" "}
          <strong style={{ color: "var(--color-heading)" }}>5 business days</strong>.
        </p>
        {onClose && (
          <button onClick={onClose} style={{
            padding: "0.75rem 1.5rem", borderRadius: 10,
            background: "var(--color-primary)", color: "#fff",
            border: "none", cursor: "pointer",
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            Done
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 16, overflow: "hidden" }}>
      {/* Header */}
      <div style={{
        background: "var(--color-primary)", padding: "1.25rem 1.75rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", fontWeight: 700, textTransform: "uppercase" }}>
            Apply Now
          </div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)", marginTop: "0.15rem" }}>
            We&#39;ll respond within 5 business days
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <X size={15} color="#fff" strokeWidth={2} />
          </button>
        )}
      </div>

      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
        {/* Position */}
        <div>
          <label style={labelStyle}>Position</label>
          <select value={position} onChange={(e) => setPosition(e.target.value)} style={{ ...inputStyle(!!errors.position), cursor: "pointer" }}>
            <option value="">Select a position…</option>
            <optgroup label="Lekki, Lagos">
              {JOBS.filter(j => j.location === "lekki").map(j => (
                <option key={j.id} value={j.id}>{j.title} — {j.locationLabel}</option>
              ))}
            </optgroup>
            <optgroup label="Maitama, Abuja">
              {JOBS.filter(j => j.location === "abuja").map(j => (
                <option key={j.id} value={j.id}>{j.title} — {j.locationLabel}</option>
              ))}
            </optgroup>
          </select>
          {errors.position && <div style={errStyle}>{errors.position}</div>}
        </div>

        {/* Name + Email */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }} className="form-row">
          <div>
            <label style={labelStyle}>Full Name</label>
            <input type="text" placeholder="Adaeze Okonkwo" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle(!!errors.name)} />
            {errors.name && <div style={errStyle}>{errors.name}</div>}
          </div>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle(!!errors.email)} />
            {errors.email && <div style={errStyle}>{errors.email}</div>}
          </div>
        </div>

        {/* Phone + Location */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }} className="form-row">
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input type="tel" placeholder="+234 800 000 0000" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle(!!errors.phone)} />
            {errors.phone && <div style={errStyle}>{errors.phone}</div>}
          </div>
          <div>
            <label style={labelStyle}>Preferred Location</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)} style={{ ...inputStyle(), cursor: "pointer" }}>
              <option value="">Select location…</option>
              <option value="lekki">Lekki, Lagos</option>
              <option value="abuja">Maitama, Abuja</option>
              <option value="either">Either location</option>
            </select>
          </div>
        </div>

        {/* CV Upload */}
        <div>
          <label style={labelStyle}>Attach CV</label>
          <label style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.75rem 1rem", borderRadius: 10, cursor: "pointer",
            border: "1.5px dashed var(--color-border)",
            background: "var(--color-bg-soft)", transition: "border-color 0.18s",
          }}>
            <Upload size={16} color="var(--color-primary)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: fileName ? "var(--color-heading)" : "var(--color-text-secondary)" }}>
              {fileName || "Choose file — PDF, DOC, DOCX (max 5 MB)"}
            </span>
            <input type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
          </label>
        </div>

        {/* Cover letter */}
        <div>
          <label style={labelStyle}>Cover Letter <span style={{ fontWeight: 400, opacity: 0.55 }}>(Optional)</span></label>
          <textarea
            placeholder="Tell us why you'd be a great fit for Foodies…"
            value={cover} onChange={(e) => setCover(e.target.value)}
            rows={4}
            style={{ ...inputStyle(), resize: "vertical", minHeight: 100 }}
          />
        </div>

        {/* How did you hear */}
        <div>
          <label style={labelStyle}>How did you hear about us?</label>
          <select value={source} onChange={(e) => setSource(e.target.value)} style={{ ...inputStyle(), cursor: "pointer" }}>
            <option value="">Select option…</option>
            <option value="instagram">Instagram</option>
            <option value="friend">Friend / Family</option>
            <option value="job-board">Job Board</option>
            <option value="walk-in">Walk-in / In-restaurant</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Eligibility checkbox */}
        <label style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", cursor: "pointer" }}>
          <div
            onClick={() => setEligible(!eligible)}
            style={{
              width: 20, height: 20, borderRadius: 5, flexShrink: 0, marginTop: 1,
              border: `2px solid ${errors.eligible ? "var(--color-error)" : eligible ? "var(--color-primary)" : "var(--color-border)"}`,
              background: eligible ? "var(--color-primary)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.18s", cursor: "pointer",
            }}
          >
            {eligible && <Check size={11} color="#fff" strokeWidth={3} />}
          </div>
          <span style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-sans)", lineHeight: 1.5 }}>
            I confirm I am eligible to work in Nigeria
          </span>
        </label>
        {errors.eligible && <div style={{ fontSize: "0.7rem", color: "var(--color-error)", fontFamily: "var(--font-sans)", marginTop: "-0.6rem" }}>{errors.eligible}</div>}

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          onClick={handleSubmit}
          style={{
            padding: "1rem", borderRadius: 12, border: "none",
            background: "var(--color-primary)", color: "#fff",
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.12em",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", gap: "0.5rem", marginTop: "0.25rem",
          }}
        >
          Submit Application <ArrowRight size={16} strokeWidth={2.5} />
        </motion.button>
      </div>
    </div>
  );
}