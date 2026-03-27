"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Gavel,
  UserPlus,
  CreditCard,
  Truck,
  XCircle,
  Star,
  Scale,
  AlertTriangle,
  ShieldAlert,
  HelpCircle,
  Mail,
  ChevronRight,
  Clock,
  CheckCircle2,
  ShieldCheck,
  RefreshCw,
  UserCheck
} from 'lucide-react';

/* ── Animation variants ───────── */
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  animate: {
    transition: { staggerChildren: 0.08 }
  }
};

const TermsOfService = () => {
  return (
    <div className="w-full bg-background text-foreground font-sans  mt-10">

      {/* --- HERO SECTION --- */}
      {/* Added responsive padding py-16 for mobile, py-32 for desktop */}
      <header className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-surface-ink w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            className="section-label mb-4 block font-sans text-xs md:text-sm"
          >
            PAGE 9: TERMS OF SERVICE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-bold text-on-ink mb-6 text-3xl md:text-5xl lg:text-6xl"
          >
            Terms of <span className="text-gradient-gold">Service</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 md:mt-10 flex items-center justify-center gap-2 text-[10px] md:text-caption text-on-ink-faint uppercase tracking-widest font-sans"
          >
            <Clock size={14} />
            <span>Last Updated: March 17, 2026</span>
          </motion.div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      {/* Changed px-10 to px-6 (mobile) and md:px-10 (desktop) */}
      <main className="container mx-auto px-6 md:px-10 py-12 md:py-20 max-w-7xl">
        <div className="space-y-16 md:space-y-24">

          {/* WELCOME */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="text-body md:text-body-lg text-muted leading-relaxed font-sans">
              Welcome to Foodies Hot &amp; Spicy Nigeria. By downloading, accessing, or using our mobile application,
              website, or services, you agree to be bound by these Terms.
            </p>
          </motion.section>

          {/* 1. DEFINITIONS */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <HelpCircle className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">1. Definitions</h3>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
             
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {[
                { term: '"App"', def: 'The Foodies mobile application for iOS and Android' },
                { term: '"Website"', def: 'www.foodieshotandspicy.com' },
                { term: '"Services"', def: 'All offerings including dine-in, takeaway, delivery, and catering' },
                { term: '"User," "you," "your"', def: 'The person using our Services' },
                { term: '"We," "us," "our"', def: 'Foodies Hot & Spicy Nigeria' },
                { term: '"Content"', def: 'Menu items, descriptions, images, reviews' },
                { term: '"Order"', def: 'A request for food through our platform' },
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="p-5 md:p-6 rounded-3xl md:rounded-4xl bg-card border border-border shadow-sm">
                  <span className="font-sans font-bold text-primary block mb-2">{item.term}</span>
                  <p className="text-sm md:text-body text-muted font-sans">{item.def}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* 2. ELIGIBILITY */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <CheckCircle2 className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">2. Eligibility</h3>
            </motion.div>
            <p className="text-muted font-sans text-sm md:text-base">By using our Services, you represent that:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "You are at least 18 years old, or if under 18, you have parental consent to use the Services",
                "You have the legal capacity to enter into binding contracts",
                "You are not located in a country subject to trade sanctions",
                "You will comply with these Terms and all applicable laws",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-bg-soft rounded-2xl border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-sm md:text-body text-muted font-sans">{item}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. ACCOUNT REGISTRATION */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <UserPlus className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">3. Account Registration</h3>
            </motion.div>
            <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-card border border-border">
              <p className="text-muted mb-6 font-sans text-sm md:text-base">
                To access certain features, you may need to create an account. You agree to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Provide accurate and complete information",
                  "Update your information promptly if it changes",
                  "Keep your login credentials confidential",
                  "Not share your account with others",
                  "Notify us immediately of unauthorized use",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm md:text-body text-muted font-sans">
                    <ChevronRight size={18} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border text-sm md:text-heading font-bold italic font-sans leading-relaxed">
                You are responsible for all activities under your account. We reserve the right to suspend or terminate accounts for violations.
              </div>
            </div>
          </section>

          {/* 4. ORDERS AND PAYMENT */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <CreditCard className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">4. Orders and Payment</h3>
            </motion.div>
            {/* grid-cols-1 on mobile/tablet, lg:grid-cols-3 for desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl md:rounded-4xl border border-border bg-card">
                <h4 className="font-sans font-bold text-primary mb-4 uppercase text-[10px] md:text-xs tracking-widest">4.1 Order Acceptance</h4>
                <ul className="space-y-3 text-muted text-sm md:text-body font-sans">
                  <li>• Your order is an offer to purchase. We may accept or decline for any reason.</li>
                  <li>• We&apos;ll confirm acceptance via app notification or email.</li>
                  <li>• Prices are in Nigerian Naira and include applicable taxes.</li>
                </ul>
              </div>
              <div className="p-6 rounded-3xl md:rounded-4xl border border-border bg-card">
                <h4 className="font-sans font-bold text-secondary mb-4 uppercase text-[10px] md:text-xs tracking-widest">4.2 Payment</h4>
                <ul className="space-y-3 text-muted text-sm md:text-body font-sans">
                  <li>• Payment is due at the time of ordering, except Pay on Delivery options.</li>
                  <li>• We use secure third-party payment processors (Paystack, Flutterwave).</li>
                  <li>• By providing payment information, you authorize us to charge the amount shown.</li>
                </ul>
              </div>
              <div className="p-6 rounded-3xl md:rounded-4xl border border-border bg-card">
                <h4 className="font-sans font-bold text-heading mb-4 uppercase text-[10px] md:text-xs tracking-widest">4.3 Pricing</h4>
                <ul className="space-y-3 text-muted text-sm md:text-body font-sans">
                  <li>• Prices are subject to change without notice.</li>
                  <li>• In case of a pricing error, we&apos;ll notify you and give you the option to cancel.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. FOOD TRAILS AND CATERING */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <CheckCircle2 className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">5. Food Trails and Catering</h3>
            </motion.div>
            <div className="p-6 md:p-10 rounded-3xl md:rounded-4xl bg-bg-soft/50 border border-border">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-muted text-sm md:text-body font-sans">
                {[
                  "Food Trails are rice dishes sold without stews/sauces.",
                  "You must select the rice variety when ordering.",
                  "Catering orders may require 24–48 hours advance notice.",
                  "Special cancellation policies may apply to large orders.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="font-bold text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. DELIVERY AND PICKUP */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <Truck className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">6. Delivery and Pickup</h3>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "6.1 Pickup",
                  items: [
                    "Please arrive at your selected time.",
                    "QR code must be presented for order collection.",
                    "Unclaimed orders may be held for 30 minutes, then cancelled.",
                  ],
                },
                {
                  title: "6.2 Delivery",
                  items: [
                    "Delivery times are estimates, not guarantees.",
                    "You're responsible for accurate address details.",
                    "Failed deliveries may incur additional fees.",
                    "Risk of loss passes to you upon delivery.",
                  ],
                },
                {
                  title: "6.3 Delivery Partners",
                  items: [
                    "We use third-party services (Chowdeck, Bolt Food). Their terms apply.",
                    "For our own drivers, we're directly responsible.",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="space-y-4">
                  <h4 className="font-sans font-bold text-heading text-base md:text-lg">{col.title}</h4>
                  <ul className="space-y-2 text-muted text-sm md:text-body font-sans">
                    {col.items.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 7. CANCELLATIONS AND REFUNDS */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <XCircle className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">7. Cancellations and Refunds</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <ul className="space-y-4 text-muted text-sm md:text-body font-sans">
                  <li className="flex gap-4">
                    <CheckCircle2 size={20} className="text-success shrink-0" />
                    <span>Orders can be cancelled within 5 minutes of placement without charge.</span>
                  </li>
                  <li className="flex gap-4">
                    <AlertTriangle size={20} className="text-warning shrink-0" />
                    <span>After 5 minutes, cancellations may not be possible if preparation has begun.</span>
                  </li>
                  <li className="flex gap-4">
                    <RefreshCw size={20} className="text-primary shrink-0" />
                    <span>Refunds processed to original payment method within 5–7 business days.</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-card border border-border shadow-lg">
                <p className="text-sm md:text-body text-heading font-bold mb-4 italic font-sans leading-relaxed">
                  If your order is wrong or unsatisfactory, contact us immediately. We&apos;ll address issues case by case.
                </p>
                <div className="p-4 bg-error/5 text-error rounded-xl text-[10px] md:text-caption font-bold font-sans">
                  No refunds for change of mind after food is prepared.
                </div>
              </div>
            </div>
          </section>

          {/* 8. RESERVATIONS */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <Clock className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">8. Reservations</h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                "Tables are held for 15 minutes past reservation time.",
                "Late arrivals may result in cancellation of reservation.",
                "For parties of 8 or more, special policies may apply.",
                "We reserve the right to decline reservations at our discretion.",
              ].map((item, idx) => (
                <div key={idx} className="p-5 md:p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors">
                  <p className="text-sm md:text-body text-muted leading-relaxed italic font-sans">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. LOYALTY PROGRAM */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-b border-border pb-4"
            >
              <Star className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">9. Loyalty Program</h3>
            </motion.div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-muted text-sm md:text-body">
              {[
                "Points are earned on qualifying purchases.",
                "Points have no cash value and are non-transferable.",
                "Points expire after 12 months of inactivity.",
                "We may modify or terminate the program with notice.",
                "Fraudulent activity may result in forfeiture of points.",
              ].map((item, idx) => (
                <li key={idx} className="p-4 bg-card rounded-xl border border-border flex gap-4 font-sans">
                  <CheckCircle2 className="text-primary shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 10 & 11 — USER CONTENT + INTELLECTUAL PROPERTY */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <UserCheck className="text-primary" size={24} />
                <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">10. User Content</h3>
              </div>
              <div className="space-y-4 text-muted text-sm md:text-body font-sans leading-relaxed">
                <p>You may submit reviews, photos, and feedback.</p>
                <p>You grant us a non-exclusive, royalty-free license to use, reproduce, and display your content.</p>
                <p>You warrant that your content doesn&apos;t violate third-party rights.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <ShieldCheck className="text-primary" size={24} />
                <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">11. Intellectual Property</h3>
              </div>
              <div className="space-y-4 text-muted text-sm md:text-body font-sans leading-relaxed">
                <p>The App, Website, and all content are owned by Foodies or our licensors.</p>
                <p>You may not copy, modify, or reverse engineer any part of our Services.</p>
                <p>Foodies Hot &amp; Spicy marks are our trademarks.</p>
              </div>
            </div>
          </section>

          {/* 12. PROHIBITED ACTIVITIES */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <ShieldAlert className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">12. Prohibited Activities</h3>
            </div>
            <p className="text-muted font-sans text-sm md:text-base">You agree NOT to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                "Use our Services for any illegal purpose",
                "Attempt unauthorized access to systems",
                "Interfere with App functioning",
                "Harass, abuse, or harm others",
                "Impersonate any person or entity",
                "Use bots to place orders",
                "Submit false or fraudulent orders",
                "Violate any applicable laws",
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-error/5 border border-error/10 text-error rounded-xl text-[10px] md:text-caption font-bold font-sans text-center md:text-left">
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* 13 & 14 — DISCLAIMER + LIABILITY */}
          {/* Changed padding from px-auto to responsive values */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-surface-ink rounded-4xl md:rounded-[4rem] text-on-ink p-8 md:p-16 lg:p-20">
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-surface-ink-border pb-4">
                <AlertTriangle className="text-secondary" size={28} />
                <h3 className="font-sans font-bold uppercase tracking-tight text-on-ink text-lg md:text-xl">13. Disclaimer</h3>
              </div>
              <p className="text-muted lowercase text-[10px] md:text-caption tracking-widest leading-relaxed font-sans opacity-80">
                OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE FULLEST EXTENT PERMITTED BY LAW,
                WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-surface-ink-border pb-4">
                <Scale className="text-secondary" size={28} />
                <h3 className="font-sans font-bold uppercase tracking-tight text-on-ink text-lg md:text-xl">14. Liability</h3>
              </div>
              <p className="text-muted lowercase text-[10px] md:text-caption tracking-widest leading-relaxed font-sans opacity-80">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FOODIES SHALL NOT BE LIABLE FOR ANY INDIRECT OR CONSEQUENTIAL DAMAGES.
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID FOR THE SPECIFIC ORDER.
              </p>
            </div>
          </section>

          {/* 15, 16, 17 */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2">
            {[
              {
                num: "15.Indemnification",
                body: "You agree to indemnify and hold Foodies harmless from any claims arising from your violation of these Terms.",
              },
              {
                num: "16.Termination",
                body: "We may suspend access at any time for violations. You may delete your account through app settings.",
              },
              {
                num: "17.Governing Law",
                body: "These Terms are governed by the laws of Nigeria. Disputes subject to exclusive jurisdiction of Lagos State courts.",
              },
            ].map((item) => (
              <div key={item.num} className="px-6 py-8 md:py-10 rounded-3xl md:rounded-4xl bg-card border border-border">
                <h3 className="font-sans font-bold text-heading uppercase text-[10px] md:text-xs tracking-widest mb-4">{item.num}</h3>
                <p className="text-muted text-sm md:text-body leading-relaxed font-sans">{item.body}</p>
              </div>
            ))}
          </section>

          {/* 18. DISPUTE RESOLUTION */}
          <section className="space-y-8 p-6 md:p-10 rounded-4xl md:rounded-[3rem] border-2 border-border bg-bg-soft/30">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <Gavel className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">18. Dispute Resolution</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-muted text-sm md:text-body leading-relaxed font-sans">
              <p>Before taking legal action, you agree to contact us to attempt informal resolution.</p>
              <p>Disputes shall be resolved through binding arbitration in Lagos, Nigeria, in accordance with the Arbitration Act.</p>
            </div>
          </section>

          {/* 19. CHANGES TO TERMS */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <RefreshCw className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">19. Changes to Terms</h3>
            </div>
            <p className="text-sm md:text-body-lg text-muted max-w-4xl font-sans leading-relaxed">
              We may modify these Terms at any time. We&apos;ll notify you of significant changes through the App or email.
              Your continued use constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* 20. CONTACT INFORMATION */}
          <section className="pt-16 md:pt-24 border-t-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-sans font-bold uppercase text-heading mb-6 md:mb-8 text-lg md:text-xl">20. Contact Information</h3>
                <p className="text-muted mb-6 md:mb-10 text-sm md:text-body-lg font-sans">For questions about these Terms:</p>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-caption text-text-disabled uppercase font-bold tracking-widest mb-1 font-sans">Legal Support</p>
                    <a
                      href="mailto:info@foodieshotandspicy.com"
                      className="text-base md:text-xl font-bold text-heading hover:text-primary transition-colors font-sans truncate block"
                    >
                      info@foodieshotandspicy.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-surface-ink-deep py-12 md:py-16 text-center border-t border-surface-ink-border">
        <div className="container mx-auto px-6 text-on-ink-faint text-sm md:text-body font-sans">
          <p>© 2026 Foodies Hot &amp; Spicy Nigeria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;