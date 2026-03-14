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
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15850.774102664149!2d3.3086787999999996!3d6.6848344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sng!4v1773413415037!5m2!1sen!2sng"
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
                <span>📞</span> +234 916 600 0777
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
            <Button variant="outline" size="sm">Order Takeaway</Button>
          </div>
        </Card>

        {/* Victoria Island Location */}
        <Card hover className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Lekki, Lagos</h3>

            {/* Embedded Map for VI */}
            <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15850.774102664149!2d3.3086787999999996!3d6.6848344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sng!4v1773413542286!5m2!1sen!2sng"
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
                <span>📍</span> 23 Admiralty Way  opposite wole ariyo street Lekki phase 1
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>📞</span> +234 916 600 0666
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
            <Button variant="outline" size="sm">Order Takeaway</Button>
          </div>
        </Card>

        {/* Maitama Location */}
        <Card hover className="p-6 flex flex-col h-full opacity-90 border-dashed border-primary/30">
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg">Maitama, Abuja</h3>
              {/*<span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Coming Soon</span>*/}
            </div>

            
            {/* Embedded Map for maitama */}
            <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8419931523435!2d7.496495999999999!3d9.078155400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b39cc5957c7%3A0xc95b4a106d955ce6!2sFoodies%20Hot%20and%20Spicy%20Abuja%20-%20Best%20Restaurant%20In%20Abuja!5e0!3m2!1sen!2sng!4v1773413622836!5m2!1sen!2sng"
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
                <span>📍</span> AP Filling Station, Ardova Mall, opposite Transcorp Hilton, Maitama, Abuja 900026, Federal Capital Territory
              </p>
              <p className="text-xs text-muted flex gap-2">
                <span>📞</span> +234 916 600 0888
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
            <Button variant="outline" size="sm"> Order Takeaway</Button>
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
             For Strategic partnerships for event catering, bulk office orders, or corporate credit lines:
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