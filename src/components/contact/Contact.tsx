"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ── Easing ────────────────────────────────────────────────────────── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];
const spring2: Bezier = [0.22, 0.68, 0, 1.2];
const t1 = (extra?: Partial<Transition>): Transition => ({ duration: 0.7, ease: spring1, ...extra });
const t2 = (extra?: Partial<Transition>): Transition => ({ duration: 0.45, ease: spring2, ...extra });

/* ── Variants ──────────────────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: t1() },
};

const headlineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const lineUnmask: Variants = {
  hidden: { opacity: 0, y: 28, skewY: 2 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: t1() },
};

const cardsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: t1() },
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

const sidebarVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const sidebarItem: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: t1() },
};

const listItemVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const listChild: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: t2() },
};

const inputVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const inputItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: t2() },
};

/* ── Reusable animated location card ───────────────────────────────── */
function LocationCard({
  children,
  isDashed,
}: {
  children: React.ReactNode;
  isDashed?: boolean;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        transition: { duration: 0.3, ease: spring2 },
      }}
    >
      <Card
        hover
        className={`p-5 sm:p-6 flex flex-col h-full ${isDashed ? "opacity-90 border-dashed border-primary/30" : ""}`}
      >
        {children}
      </Card>
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px 0px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px 0px" });
  const bottomInView = useInView(bottomRef, { once: true, margin: "-60px 0px" });

  return (
    <main className=" pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          className="text-center mb-10 sm:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Visit Us
          </motion.span>

          <motion.h1
            className="mt-4 mb-4 sm:mb-6 font-display"
            variants={headlineContainer}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            {["Our", "Locations"].map((word) => (
              <span
                key={word}
                style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em", textTransform: "capitalize" }}
              >
                <motion.span style={{ display: "inline-block" }} variants={lineUnmask}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="text-muted max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            Experience the future of Nigerian dining at any of our physical
            locations. Book a table or order takeaway directly through our app.
          </motion.p>
        </motion.div>

        {/* ── Location cards ── */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20"
          variants={cardsContainer}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >

          {/* Lekki 1 */}
          <LocationCard index={0} inView={cardsInView}>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4 font-display">Lekki, Lagos</h3>
              <motion.div
                className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border"
                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: spring2 } }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15850.774102664149!2d3.3086787999999996!3d6.6848344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sng!4v1773413415037!5m2!1sen!2sng"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
              <div className="space-y-3 mb-6">
                {[
                  { icon: "📍", text: "32b Admiralty Way, Opposite Prince Ebeano Supermarket, Lekki Phase 1" },
                  { icon: "📞", text: "+234 916 600 0777" },
                  { icon: "✉️", text: "orderfoodies2@foodieshotandspicy.com", isEmail: true, href: "mailto:orderfoodies2@foodieshotandspicy.com" },
                  { icon: "🕒", text: "Monday – Sunday: 11:00 AM – 9:00 PM" },
                ].map(({ icon, text, isEmail, href }) => (
                  <motion.p
                    key={text}
                    className={`text-xs flex gap-2 ${isEmail ? "text-primary font-medium" : "text-muted"}`}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <span>{icon}</span>
                    {isEmail ? <a href={href}>{text}</a> : text}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Button size="md" className="w-full">Book a Table</Button>
              </motion.div>
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Button variant="outline" size="md" className="w-full">Order Takeaway</Button>
              </motion.div>
            </div>
          </LocationCard>

          {/* Lekki 2 */}
          <LocationCard index={1} inView={cardsInView}>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4 font-display">Lekki, Lagos</h3>
              <motion.div
                className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border"
                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: spring2 } }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15850.774102664149!2d3.3086787999999996!3d6.6848344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sng!4v1773413542286!5m2!1sen!2sng"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
              <div className="space-y-3 mb-6">
                {[
                  { icon: "📍", text: "23 Admiralty Way opposite Wole Ariyo Street Lekki Phase 1" },
                  { icon: "📞", text: "+234 916 600 0666" },
                  { icon: "✉️", text: "orderfoodies1@foodieshotandspicy.com", isEmail: true, href: "mailto:orderfoodies1@foodieshotandspicy.com" },
                  { icon: "🕒", text: "Monday – Sunday: 11:00 AM – 9:00 PM" },
                ].map(({ icon, text, isEmail, href }) => (
                  <motion.p
                    key={text}
                    className={`text-xs flex gap-2 ${isEmail ? "text-primary font-medium" : "text-muted"}`}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <span>{icon}</span>
                    {isEmail ? <a href={href}>{text}</a> : text}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Button size="md" className="w-full">Book a Table</Button>
              </motion.div>
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Button variant="outline" size="md" className="w-full">Order Takeaway</Button>
              </motion.div>
            </div>
          </LocationCard>

          {/* Maitama */}
          <LocationCard index={2} isDashed inView={cardsInView}>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4 font-display">Maitama, Abuja</h3>
              <motion.div
                className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border"
                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: spring2 } }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8419931523435!2d7.496495999999999!3d9.078155400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b39cc5957c7%3A0xc95b4a106d955ce6!2sFoodies%20Hot%20and%20Spicy%20Abuja%20-%20Best%20Restaurant%20In%20Abuja!5e0!3m2!1sen!2sng!4v1773413622836!5m2!1sen!2sng"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
              <div className="space-y-3 mb-6">
                {[
                  { icon: "📍", text: "AP Filling Station, Ardova Mall, opposite Transcorp Hilton, Maitama, Abuja" },
                  { icon: "📞", text: "+234 916 600 0888" },
                  { icon: "✉️", text: "orderfoodies3@foodieshotandspicy.com", isEmail: true, href: "mailto:orderfoodies3@foodieshotandspicy.com" },
                  { icon: "🕒", text: "Monday – Sunday: 11:00 AM – 9:00 PM" },
                ].map(({ icon, text, isEmail, href }) => (
                  <motion.p
                    key={text}
                    className={`text-xs flex gap-2 ${isEmail ? "text-primary font-medium" : "text-muted"}`}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <span>{icon}</span>
                    {isEmail ? <a href={href}>{text}</a> : text}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Button size="md" className="w-full">Book a Table</Button>
              </motion.div>
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Button variant="outline" size="md" className="w-full">Order Takeaway</Button>
              </motion.div>
            </div>
          </LocationCard>

        </motion.div>

        {/* ── Bottom grid ── */}
        <div
          ref={bottomRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start"
        >

          {/* Contact form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={bottomInView ? "visible" : "hidden"}
          >
            <Card className="p-6 sm:p-8">
              <motion.h2
                className="text-h3 mb-6 font-display"
                initial={{ opacity: 0, y: 12 }}
                animate={bottomInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                Get in Touch
              </motion.h2>

              <motion.form
                className="space-y-4"
                variants={inputVariants}
                initial="hidden"
                animate={bottomInView ? "visible" : "hidden"}
              >
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={inputItem}>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-muted">Full Name</label>
                    <input type="text" placeholder="e.g. Tunde Ade"
                      className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-muted">Email Address</label>
                    <input type="email" placeholder="e.g. tunde@example.com"
                      className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
                  </div>
                </motion.div>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={inputItem}>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-muted">Phone Number</label>
                    <input type="tel" placeholder="+234..."
                      className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-muted">Subject</label>
                    <select className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm">
                      <option>General Inquiry</option>
                      <option>Table Reservation Help</option>
                      <option>Corporate Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div className="space-y-1" variants={inputItem}>
                  <label className="text-[10px] uppercase font-bold text-muted">Your Message</label>
                  <textarea placeholder="How can we help you today?" rows={4}
                    className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
                </motion.div>

                <motion.div variants={inputItem}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2, ease: spring2 } }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button fullWidth className="mt-2">Send Message</Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={sidebarVariants}
            initial="hidden"
            animate={bottomInView ? "visible" : "hidden"}
          >
            {/* Private dining card */}
            <motion.div variants={sidebarItem}>
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3, ease: spring2 },
                }}
              >
                <Card className="p-6 sm:p-8 border-l-4 border-primary">
                  <h2 className="text-h3 mb-4 font-display">Private Dining &amp; Events</h2>
                  <p className="text-muted text-sm mb-6">
                    Host your next celebration with us. From intimate anniversaries to corporate lunches,
                    we bring our world-class digital hospitality to your special moments.
                  </p>

                  <motion.ul
                    className="space-y-3 mb-8"
                    variants={listItemVariants}
                    initial="hidden"
                    animate={bottomInView ? "visible" : "hidden"}
                  >
                    {[
                      "Private dining sections available at both locations",
                      "Capacity: Up to 20 guests",
                      "Customizable menus for special dietary needs",
                      "Dedicated event coordinator for every booking",
                    ].map((item) => (
                      <motion.li
                        key={item}
                        className="text-xs flex items-start gap-2"
                        variants={listChild}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <motion.span
                          className="text-primary mt-0.5"
                          initial={{ scale: 0 }}
                          animate={bottomInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.35, ease: spring2 }}
                        >
                          ✔
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2, ease: spring2 } }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button variant="outline" fullWidth>Inquire About Your Event</Button>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Corporate box */}
            <motion.div
              variants={sidebarItem}
              whileHover={{
                y: -4,
                borderColor: "var(--color-primary)",
                transition: { duration: 0.25, ease: spring2 },
              }}
              className="p-5 sm:p-6 rounded-sm border border-border"
              style={{ background: "var(--color-bg-soft)" }}
            >
              <h4 className="text-sm font-bold mb-2">Corporate &amp; Bulk Bookings</h4>
              <p className="text-xs text-muted mb-4">
                For strategic partnerships, event catering, bulk office orders, or corporate credit lines:
              </p>
              <motion.a
                href="mailto:orderfoodies1@foodieshotandspicy.com"
                className="text-primary font-bold text-sm break-all"
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                orderfoodies1@foodieshotandspicy.com
              </motion.a> <br />
              <motion.a
                href="mailto:orderfoodies2@foodieshotandspicy.com"
                className="text-primary font-bold text-sm break-all"
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                orderfoodies2@foodieshotandspicy.com
              </motion.a> <br />
              <motion.a
                href="mailto:orderfoodies3@foodieshotandspicy.com"
                className="text-primary font-bold text-sm break-all"
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                orderfoodies3@foodieshotandspicy.com
              </motion.a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}