"use client";

import { FAQCard } from "@/components/ui/Card";

const faqs = [
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Yes, we have a curated selection of plant-based Nigerian dishes. Ask your server or check our full menu for labelled options.",
  },
  {
    question: "Is there a dress code?",
    answer: "We maintain a smart-casual dress code across all our locations to ensure a refined dining atmosphere.",
  },
  {
    question: "Do you host private events?",
    answer: "Absolutely. We offer bespoke private dining experiences for corporate events, birthdays, and more. Use the enquiry form or contact us directly.",
  },
  {
    question: "How do I modify my reservation?",
    answer: "You can modify your reservation by calling the location directly or using our online booking system up to 2 hours before your scheduled time.",
  },
  {
    question: "Is there parking available?",
    answer: "All three locations have dedicated parking facilities. Valet service is available at our Lekki Phase 1 and Abuja Wuse locations.",
  },
];

export function FAQSection() {
  return (
    <section style={{ background: "var(--color-bg)" }} className="w-full">
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)" }}
      >
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left: Brand Support Header */}
          <div className="lg:col-span-2  top-32">
            <span className="section-label mb-4 block">Concierge & Support</span>
            <h2
              className="font-display font-black leading-tight mb-6"
              style={{
                color: "var(--color-heading)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Have a <span className="text-primary italic">Question?</span>
            </h2>
            <p className="text-muted text-sm max-w-sm mb-8 leading-relaxed">
              Find quick answers to common inquiries about our dining experience, 
              dress codes, and private events.
            </p>
            
           
          </div>

          {/* Right: Modern Accordion List */}
          <div className="lg:col-span-3 space-y-2">
            {faqs.map((faq, i) => (
              <div 
                key={faq.question} 
                className="animate-fade-up" 
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <FAQCard {...faq} />
              </div>
            ))}
            
            
          </div>

        </div>
      </div>
      
    </section>

  );
}

export default FAQSection;