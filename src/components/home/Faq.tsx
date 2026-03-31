"use client";

import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FAQ_CATEGORIES } from "../../../constants/faq"; // Adjust path as needed

export function FAQSection() {
  const [activeId, setActiveId] = useState("orders");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const activeCategory = FAQ_CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section className="w-full bg-background">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 py-14 md:px-12 md:py-24">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-8 md:mb-12"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-0.5 w-7 rounded bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Concierge & Support
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-heading md:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        {/* --- Mobile Tabs (Horizontal Scroll) --- */}
        <div className="mb-6 flex overflow-x-auto pb-2 md:hidden no-scrollbar gap-2">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex flex-col items-center min-w-20 p-3 rounded-xl border transition-all ${
                  isActive ? "bg-primary border-primary text-white" : "bg-card border-border text-muted-foreground"
                }`}
              >
                <cat.Icon size={20} className={isActive ? "text-white" : "text-muted-foreground"} />
                <span className="mt-1 text-[10px] font-bold whitespace-nowrap">
                  {cat.label.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
          
          {/* Desktop Sidebar */}
          <nav className="sticky top-24 hidden md:block">
            <div className="mb-5 border-b border-border pb-4">
              <span className="block font-display text-5xl font-bold text-secondary leading-none">
                {activeCategory.faqs.length}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Questions in<br />this section
              </span>
            </div>

            <ul className="flex flex-col gap-1">
              {FAQ_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setActiveId(cat.id)}
                    className={`group relative flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left transition-colors ${
                      activeId === cat.id ? "bg-primary/10 text-heading" : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {activeId === cat.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute left-0 top-[15%] h-[70%] w-0.5 bg-primary rounded-r"
                      />
                    )}
                    <cat.Icon size={16} className={activeId === cat.id ? "text-primary" : ""} />
                    <span className={`text-sm ${activeId === cat.id ? "font-semibold" : "font-normal"}`}>
                      {cat.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* FAQ Accordion List */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-4 border-b-2 border-muted pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <activeCategory.Icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-heading">
                  {activeCategory.label}
                </h3>
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">
                  {activeCategory.faqs.length} answers
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeCategory.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} faq={faq} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AccordionItem({ faq, index }: { faq: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium leading-relaxed text-heading md:text-lg">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? "var(--color-primary)" : "rgba(6,4,2,0)" }}
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary transition-colors`}
        >
          {isOpen ? (
            <Minus size={12} strokeWidth={3} className="text-white" />
          ) : (
            <Plus size={12} strokeWidth={3} className="text-primary" />
          )}
        </motion.div>
      </button>

     <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-7 text-muted-foreground md:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}