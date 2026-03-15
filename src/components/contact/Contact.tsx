import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="section-label">Visit Us</span>
          <h1 className="mt-4 mb-4 sm:mb-6">Our Locations</h1>
          <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base">
            Experience the future of Nigerian dining at any of our physical
            locations. Book a table or order takeaway directly through our app.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">

          {/* Lekki 1 */}
          <Card hover className="p-5 sm:p-6 flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4">Lekki, Lagos</h3>
              <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15850.774102664149!2d3.3086787999999996!3d6.6848344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sng!4v1773413415037!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-xs text-muted flex gap-2">
                  <span>📍</span> 32b Admiralty Way, Opposite Prince Ebeano Supermarket, Lekki Phase 1
                </p>
                <p className="text-xs text-muted flex gap-2">
                  <span>📞</span> +234 916 600 0777
                </p>
                <a href="mailto:ordersfoodies2@foodieshotandspicy.com"
                  className="text-xs text-primary font-medium flex gap-2">
                  <span>✉️</span> ordersfoodies2@foodieshotandspicy.com
                </a>
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

          {/* Lekki 2 */}
          <Card hover className="p-5 sm:p-6 flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4">Lekki, Lagos</h3>
              <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15850.774102664149!2d3.3086787999999996!3d6.6848344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sng!4v1773413542286!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-xs text-muted flex gap-2">
                  <span>📍</span> 23 Admiralty Way opposite Wole Ariyo Street Lekki Phase 1
                </p>
                <p className="text-xs text-muted flex gap-2">
                  <span>📞</span> +234 916 600 0666
                </p>
                <a href="mailto:Orderfoodies1@foodieshotandspicy.com"
                  className="text-xs text-primary font-medium flex gap-2">
                  <span>✉️</span> Orderfoodies1@foodieshotandspicy.com
                </a>
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

          {/* Maitama */}
          <Card hover className="p-5 sm:p-6 flex flex-col h-full opacity-90 border-dashed border-primary/30">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4">Maitama, Abuja</h3>
              <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8419931523435!2d7.496495999999999!3d9.078155400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b39cc5957c7%3A0xc95b4a106d955ce6!2sFoodies%20Hot%20and%20Spicy%20Abuja%20-%20Best%20Restaurant%20In%20Abuja!5e0!3m2!1sen!2sng!4v1773413622836!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-xs text-muted flex gap-2">
                  <span>📍</span> AP Filling Station, Ardova Mall, opposite Transcorp Hilton, Maitama, Abuja
                </p>
                <p className="text-xs text-muted flex gap-2">
                  <span>📞</span> +234 916 600 0888
                </p>
                <a href="mailto:Orderfoodies3@foodieshotandspicy.com"
                  className="text-xs text-primary font-medium flex gap-2">
                  <span>✉️</span> Orderfoodies3@foodieshotandspicy.com
                </a>
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

        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* Contact Form */}
          <Card className="p-6 sm:p-8">
            <h2 className="text-h3 mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-muted">Your Message</label>
                <textarea placeholder="How can we help you today?" rows={4}
                  className="w-full p-3 rounded-sm bg-input border border-border focus:border-primary outline-none transition-all text-sm" />
              </div>
              <Button fullWidth className="mt-2">Send Message</Button>
            </form>
          </Card>

          {/* Private Dining & Events */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-6 sm:p-8 border-l-4 border-primary">
              <h2 className="text-h3 mb-4">Private Dining & Events</h2>
              <p className="text-muted text-sm mb-6">
                Host your next celebration with us. From intimate anniversaries to corporate lunches,
                we bring our world-class digital hospitality to your special moments.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Private dining sections available at both locations",
                  "Capacity: Up to 20 guests",
                  "Customizable menus for special dietary needs",
                  "Dedicated event coordinator for every booking",
                ].map((item) => (
                  <li key={item} className="text-xs flex items-start gap-2">
                    <span className="text-primary mt-0.5">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" fullWidth>Inquire About Your Event</Button>
            </Card>

            <div className="p-5 sm:p-6 rounded-sm bg-(--color-bg-soft) border border-border">
              <h4 className="text-sm font-bold mb-2">Corporate & Bulk Bookings</h4>
              <p className="text-xs text-muted mb-4">
                For strategic partnerships, event catering, bulk office orders, or corporate credit lines:
              </p>
              <a href="mailto:corporate@foodies.com.ng"
                className="text-primary font-bold text-sm hover:underline break-all">
                corporate@foodies.com.ng
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}