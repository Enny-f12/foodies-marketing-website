"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="section-label">Visit Us</span>
        <h1 className="mt-4 mb-6">Our Locations</h1>
        <p className="text-muted max-w-2xl mx-auto">
          Experience the future of Nigerian dining at any of our physical locations.
          Book a table or order takeaway directly through our app.
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {/* Lekki Location */}
        <Card hover className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Lekki, Lagos</h3>

            {/* Embedded Map for Lekki */}
            <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728543594191!2d3.471676274478144!3d6.428886324021204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5326889417f%3A0x673c6838a063b4b5!2sAdmiralty%20Way%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-xs text-muted flex gap-2">
                <span>📍</span> 32b Admiralty Way, Opposite Prince Ebeano Supermarket, Lekki Phase 1
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>📞</span> +234 [Phone Number]
              </p>
              <p className="text-xs text-primary font-medium flex gap-2">
                <span>✉️</span> lekki@foodies.com.ng
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>🕒</span> Monday – Sunday: 11:00 AM – 9:00 PM
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button size="sm">Book a Table</Button>
            <Button variant="outline" size="sm">Takeaway</Button>
          </div>
        </Card>

        {/* Victoria Island Location */}
        <Card hover className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Lagos</h3>

            {/* Embedded Map for VI */}
            <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.578505978847!2d3.4694701735036637!3d6.448123724037766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44f99a08cdd%3A0x72edef8785ed5e85!2s31%20Admiralty%20Wy%2C%20Lekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1773309579974!5m2!1sen!2sng" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-xs text-muted flex gap-2">
                <span>📍</span> 31 Admiralty Way,
                Opposite First Bank Lekki Phase 1
                Lagos State
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>📞</span> +234 [Phone Number]
              </p>
              <p className="text-xs text-primary font-medium flex gap-2">
                <span>✉️</span> lekki@foodies.com.ng
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>🕒</span> Monday – Sunday: 11:00 AM – 9:00 PM
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button size="sm">Book a Table</Button>
            <Button variant="outline" size="sm">Takeaway</Button>
          </div>
        </Card>

        {/* Maitama Location */}
        <Card hover className="p-6 flex flex-col h-full opacity-90 border-dashed border-primary/30">
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg">Maitama, Abuja</h3>
              {/*<span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Coming Soon</span>*/}
            </div>

            {/* Map Placeholder for Maitama */}
            <div className="w-full h-40 mb-4 rounded-sm bg-muted flex items-center justify-center border border-border">
              <span className="text-xs text-muted">Map Preview Coming Soon</span>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-xs text-muted flex gap-2">
                <span>📍</span> [Address to be confirmed]
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>📞</span> +234 [Phone Number]
              </p>
              <p className="text-xs text-primary font-medium flex gap-2">
                <span>✉️</span> abuja@foodies.com.ng
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>🕒</span> Monday – Sunday: 11:00 AM – 9:00 PM
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button size="sm" >Book a Table</Button>
            <Button variant="outline" size="sm">Takeaway</Button>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Updated Contact Form with Phone Field */}
        <Card className="p-8">
          <h2 className="text-h3 mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-muted">Full Name</label>
                <input type="text" placeholder="e.g. Tunde Ade" className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-muted">Email Address</label>
                <input type="email" placeholder="e.g. tunde@example.com" className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-muted">Phone Number</label>
                <input type="tel" placeholder="+234..." className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
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
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-muted">Your Message</label>
              <textarea placeholder="How can we help you today?" rows={4} className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm"></textarea>
            </div>
            <Button fullWidth className="mt-2">Send Message</Button>
          </form>
        </Card>

        {/* Complete Private Dining & Events Section */}
        <div className="space-y-8">
          <Card className="p-8 border-l-4 border-primary">
            <h2 className="text-h3 mb-4">Private Dining & Events</h2>
            <p className="text-muted text-sm mb-6">
              Host your next celebration with us. From intimate anniversaries to corporate lunches,
              we bring our world-class digital hospitality to your special moments.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-xs flex items-center gap-2">
                <span className="text-primary">✔</span> Private dining sections available at both locations
              </li>
              <li className="text-xs flex items-center gap-2">
                <span className="text-primary">✔</span> Capacity: Up to 20 guests
              </li>
              <li className="text-xs flex items-center gap-2">
                <span className="text-primary">✔</span> Customizable menus for special dietary needs
              </li>
              <li className="text-xs flex items-center gap-2">
                <span className="text-primary">✔</span> Dedicated event coordinator for every booking
              </li>
            </ul>
            <Button variant="outline" fullWidth>Inquire About Your Event</Button>
          </Card>

          <div className="p-6 rounded-sm bg-(--color-bg-soft) border border-border">
            <h4 className="text-sm font-bold mb-2">Corporate & Bulk Bookings</h4>
            <p className="text-xs text-muted mb-4">
              Strategic partnerships for event catering, bulk office orders, or corporate credit lines.
            </p>
            <a href="mailto:corporate@foodies.com.ng" className="text-primary font-bold text-sm hover:underline">
              corporate@foodies.com.ng
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}