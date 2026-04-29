// constants/faq.ts
import { Bike, CalendarDays, UtensilsCrossed, Smartphone, MapPin, PartyPopper, Star } from "lucide-react";

export const FAQ_CATEGORIES = [
  {
    id: "orders",
    label: "Orders & Delivery",
    Icon: Bike,
    faqs: [
      {
        question: `How do I place an order?`,
        answer: `Download the Foodies app (iOS or Android), create an account or continue as guest, browse our menu, select your dishes, choose Pickup or Delivery, select your branch (Lekki or Maitama), pick your time, then proceed to checkout. You'll receive instant confirmation with a QR code for pickup or tracking details for delivery.`,
      },
      {
        question: `What's the difference between pickup and delivery?`,
        answer: `Pickup is free — you collect your food at a scheduled slot and receive a QR code for contactless collection. Delivery incurs a fee that varies by distance, provides live driver tracking, and may require a minimum order depending on your location.`,
      },
      {
        question: `How can I track my order?`,
        answer: `Open the app and go to My Orders. Pickup orders show real-time status (Received to Preparing to Ready for Pickup) with a QR code. Delivery orders through our partners (Chowdeck) include SMS tracking links. Our own fleet will offer live map tracking with driver details and ETA(coming soon).`,
      },
      {
        question: `What delivery partners do you use?`,
        answer: `We partner with Chowdeck — all covering Lagos and Abuja. Once you place a delivery order, we prepare your food fresh, hand it to a trusted partner, and you receive tracking info.`,
      },
      {
        question: `Do you offer contactless delivery?`,
        answer: `Yes. During checkout, add a note such as "Please leave at door." Choose online payment to avoid cash handling, and our driver will leave your order at your doorstep without physical contact. For pickup, show your QR code from a distance — no need to hand over your phone.`,
      },
      {
        question: `Can I schedule an order for later?`,
        answer: `Yes! At checkout select "Schedule for later," then choose your preferred date and time from the calendar. Orders can be scheduled up to 7 days in advance. Changes must be made at least 2 hours before the scheduled time.`,
      },
      {
        question: `What if my order is wrong or missing?`,
        answer: `Contact us immediately via in-app chat (Help → Report Order Issue), call us, or email orderfoodies1@foodieshotandspicy.com, orderfoodies2@foodieshotandspicy.com, orderfoodies3@foodieshotandspicy.com, . We resolve missing items with a refund or redelivery, wrong items with the correct replacement, and full order issues with a full refund plus a discount on your next order. Please report within 24 hours.`,
      },
      {
        question: `What areas do you deliver to?`,
        answer: `Lagos (from Lekki): Zone 1 — Lekki Phase 1, Admiralty, Chevron (25-35 min); Zone 2 — Ikoyi, VI, Maroko (35-45 min); Zone 3 — Ajah, Sangotedo (45-60 min); Zone 4 — Surulere, Yaba (60-75 min). Abuja (from Maitama): Zone 1 — Maitama, Wuse 2, Asokoro (25-35 min); Zone 2 — Wuse, Garki, Jabi (35-45 min); Zone 3 — Utako, Durumi, Life Camp (45-60 min); Zone 4 — Gwarimpa, Kubwa (60-75 min, minimum order applies).`,
      },
    ],
  },
  {
    id: "reservations",
    label: "Reservations",
    Icon: CalendarDays,
    faqs: [
      {
        question: `How do I make a reservation?`,
        answer: `Via the app: tap Reservations, select your branch, choose party size (1-20), pick a date (up to 30 days ahead), select a time slot, add any special requests, and confirm. You can also call Lekki(foodies 1 branch) on 0916 600 0666 or Lekki(foodies 2 branch) 0916 600 0777 or Abuja on 0916 600 0888 (foodies 3 branch). Walk-ins are always welcome but reservations guarantee your table.`,
      },
      {
        question: `Can I book the private dining section?`,
        answer: `Yes! Both Lekki branches and Abuja feature private dining for up to 20 guests. In the app, add "Please book private dining section" in the Special Requests field and we'll follow up within 2 hours. You can also call or email events@foodies.com.ng with your date, guest count, occasion, and any special requirements. Minimum 24 hours notice required; no additional charge for the space.`,
      },
      {
        question: `What's your cancellation policy?`,
        answer: `Standard (1-7 guests): Cancel more than 2 hours before for free; cancellations under 2 hours receive a first-time warning and repeated late cancellations may affect future booking privileges. Large groups (8+) or Private Dining: Cancel 48+ hours ahead for full deposit refund; 24-48 hours gets 50% back; under 24 hours forfeits the deposit. Cancel in-app, by phone, or at orderfoodies1@foodies.com, orderfoodies2@foodies.com, or orderfoodies3@foodies.com.`,
      },
      {
        question: `How far in advance can I book?`,
        answer: `Up to 30 days via app or phone (Private Dining up to 60 days by special arrangement). Recommended lead times: weekday lunch 1-2 days; weekday dinner 2-3 days; weekend lunch 3-5 days; weekend dinner 5-7 days; public holidays 7-14 days; private dining 2-4 weeks. For popular slots, join our in-app waitlist.`,
      },
      {
        question: `What if I'm running late?`,
        answer: `Under 15 minutes: your table is held automatically. 15-30 minutes: please call us so we can hold your table. Over 30 minutes: your table may be released to waitlisted guests — call immediately and we'll try to accommodate you or help reschedule. Contact Lekki (Foodies 1) on 0916 600 0666, Lekki (Foodies 2) on 0916 600 0777, or Abuja (Foodies 3) on 0916 600 0888.`,
      },
      {
        question: `Do you accommodate large parties?`,
        answer: `Absolutely! 8-12 guests: combined tables in the main dining room. 12-20 guests: private dining section. 20-40 guests: semi-private area with advance notice. 40+ guests: full restaurant buyout available. We offer pre-selected or customised menus, dedicated servers, separate billing, decorations on request, and cake service (500 naira per person). Contact us at least 48 hours ahead (1-2 weeks for 20+ guests).`,
      },
      {
        question: `Can I request a specific table or area?`,
        answer: `Yes — while we can't guarantee specific tables, we note all preferences. High-likelihood requests: quiet corner, away from busy areas. Medium-likelihood: window view, near the bar. Weather-dependent: outdoor seating. Add your preference in the Special Requests field when booking, or call the branch directly. Arriving on time significantly improves your chances.`,
      },
      {
        question: `Do you take walk-ins?`,
        answer: `Always! We keep seating available for walk-ins. Weekday lunch: high likelihood, 0-10 min wait. Weekday dinner: medium, 10-20 min. Weekend lunch: medium, 15-30 min. Weekend dinner: low, 30-60 min. Best walk-in times: early dinner (5:30-6:30 pm) or late lunch (after 2:30 pm). Check in with our host at the front desk and we'll give you a wait time or text you when your table is ready.`,
      },
    ],
  },
  {
    id: "menu",
    label: "Menu & Dietary",
    Icon: UtensilsCrossed,
    faqs: [
      {
        question: `Do you offer vegetarian options?`,
        answer: `Yes! Nigerian cuisine naturally provides many plant-based choices. All swallow (Eba, Pounded Yam, Amala, etc.), all sides (fried yam, plantain, boiled potatoes), and all fresh juices are vegetarian/vegan. Many soups and rice dishes can be made vegetarian on request. Look for the leaf icon or use the dietary filter in the app. Most vegetarian dishes can also be made vegan — request no eggs or dairy.`,
      },
      {
        question: `What dishes are gluten-free?`,
        answer: `Many traditional Nigerian dishes are naturally gluten-free: all swallow options, most soups (no wheat thickeners), plain grilled proteins, most rice dishes, and all fresh juices. Pastries contain wheat flour and are not gluten-free. For celiac guests: our kitchen handles wheat products and we cannot guarantee a 100% contamination-free environment. For severe allergies, please call ahead so we can prepare more safely.`,
      },
      {
        question: `How spicy are your dishes?`,
        answer: `We use a four-level system: Mild (No Heat) for rice dishes, pastries, and salads; Medium (Warm) for Egusi, Vegetable, and Oha soups; Hot (Spicy) for peppered dishes, Asun, and Pepper Soup; Extra Hot on special request ("Nigerian spicy" level). You can adjust spice levels in the app's customisation options or add notes like "Less pepper please." First-time trying Nigerian food? Start mild!`,
      },
      {
        question: `Can I customise my order?`,
        answer: `Absolutely! You can adjust: spice level (mild to extra hot), protein choice (chicken, beef, goat, fish, or vegetarian), add extras (meat, vegetables, sauce), remove ingredients, request sauce on the side, specify cooking preference, choose portion size, and flag dietary modifications. On the Dish Details screen, use the Customisations section or the Special Instructions field. Dine-in guests can simply tell their server.`,
      },
      {
        question: `Do you cater to food allergies?`,
        answer: `Yes, we take allergies very seriously. Common allergens we manage: peanuts (groundnut soup, suya spice), shellfish, fish, dairy, eggs (Moi-moi, egg sauce), gluten/wheat (pastries), and soy. In Special Instructions clearly state your allergen. For severe allergies, also call the branch after ordering so the kitchen can flag your order for special handling. Cross-contamination is possible as our kitchen handles all allergens.`,
      },
      {
        question: `What's your most popular dish?`,
        answer: `Our top 5: Number 1 Jollof Rice — our legendary signature, 1,500+ orders per week. Number 2 Egusi Soup with Pounded Yam. Number 3 Asun — Spicy Roasted Goat Meat. Number 4 Catfish Pepper Soup. Number 5 Nkwobi. Rising stars: Seafood Rice, Coconut Fried Rice, Asun Pasta. Chef's pick: Seafood Okro at Lekki; Abacha at Maitama.`,
      },
      {
        question: `Do you offer takeaway packaging?`,
        answer: `Yes! We offer standard foil containers (microwave-safe), plastic containers with secure lids for salads and pastries, leak-proof soup containers, compartment containers for combo meals, and eco-friendly biodegradable options on request. All delivery orders include complimentary napkins and cutlery. Dine-in leftovers get the first container free; additional containers are 200 naira each.`,
      },
      {
        question: `How do I see what's available today?`,
        answer: `Use the Foodies app for live availability. Each dish card shows Available, Low Stock (e.g. "Only 2 left"), or Out of Stock (greyed out). Tap "Notify Me" on any out-of-stock dish and we'll push a notification when it's back. Best availability: weekday mornings (fully stocked) and dinner (kitchen restocked). Order early on weekend evenings — popular dishes sell out fast.`,
      },
    ],
  },
  {
    id: "app",
    label: "App & Technology",
    Icon: Smartphone,
    faqs: [
      {
        question: `Is the Foodies app free?`,
        answer: `Yes, completely free to download and use! No charges for downloading, creating an account, browsing the menu, making reservations, earning and redeeming loyalty points, saving favourites, or writing reviews. You only pay for food ordered. Standard mobile data charges from your provider apply.`,
      },
      {
        question: `What phones does the app work on?`,
        answer: `iOS: iPhone 6s or newer running iOS 14.0 or later. Android: Android 8.0 (Oreo) or later. You'll need approximately 80 MB free storage and a 3G/4G/5G or Wi-Fi connection. For the best experience, we recommend iPhone X or newer (latest iOS) or a 2019+ Android device with 3 GB+ RAM on 4G. Check compatibility by searching "Foodies Hot & Spicy" in your app store.`,
      },
      {
        question: `How do I create an account?`,
        answer: `Download the app, tap Create Account, then choose: Phone Number (OTP via SMS), Email (verify via link), Google, or Apple (iOS only). Complete your profile with name, email, and phone number. Optional: delivery address and birthday (for birthday rewards!). Benefits of registering include order history, one-click reorder, saved addresses, loyalty points, favourites list, and reviews.`,
      },
      {
        question: `I forgot my password — what do I do?`,
        answer: `Tap "Forgot Password?" on the login screen. Choose Email (receive a reset link valid for 30 minutes) or Phone/SMS (receive a 6-digit code). Create a new password with at least 8 characters, 1 uppercase letter, 1 number, and 1 special character. You can also reset via the website at www.foodieshotandspicy.com. Enable "Remember Me" to stay logged in for 30 days on personal devices.`,
      },
      {
        question: `How do loyalty points work? (coming soon)`,
        answer: `Earn 10 points per 100 naira spent. Bonuses: 500 points on first order, 250 on your birthday, 1,000 per successful referral, 50 per review. Redeem for: 500 naira off (500 pts), free juice (800 pts), free starter (1,200 pts), 2,000 naira off (1,800 pts), free meal (2,500 pts), VIP Silver status (5,000 pts). Points expire after 12 months of inactivity. Track your balance under Profile → Loyalty Card.`,
      },
      {
        question: `Can I order as a guest without an account?`,
        answer: `Yes! At checkout tap "Continue as Guest" and enter your name, phone number, and delivery address. You'll receive SMS order updates. Guest data is deleted after 90 days. The trade-off: no order history, no reorder, no loyalty points, no saved addresses or payment methods. After ordering as a guest, register with the same phone/email and your past orders (and points!) will link automatically — up to 30 days back.`,
      },
      {
        question: `Is my payment information secure?`,
        answer: `Absolutely. We are PCI DSS compliant and use TLS 1.3 encryption for all data transmission. Payments are processed exclusively by Paystack and Flutterwave (both PCI DSS Level 1). We never store your full card number, CVV, or PIN — only secure tokens. Additional security features include biometric authentication, transaction limits (500,000 naira per transaction, 1 million naira daily), and 24/7 fraud monitoring.`,
      },
      {
        question: `The app isn't working — who do I contact?`,
        answer: `First try: force close and restart (fixes 40% of issues), check for an app update (25%), restart your phone (10%), check your internet connection (5%). If the issue persists, contact us via: in-app chat (Profile → Help & Support → Chat with Us, 5-10 min response), email orderfoodies1@foodieshotandspicy.com, orderfoodies2@foodieshotandspicy.com, or orderfoodies3@foodieshotandspicy.com, phone: lekki (foodies 1) 0910 600 0666, lekki (foodies 2) 0910 600 0777, or Abuja (foodies 3) 0910 600 0888.`,
      },
    ],
  },
  {
    id: "locations",
    label: "Locations & Hours",
    Icon: MapPin,
    faqs: [
      {
        question: `Where are Foodies locations?`,
        answer: `Foodies 1 (Lekki): 23 Admiralty Way, Opposite Wole Ariyo Street, Lekki Phase 1, Lagos — call 0916 600 0666. Foodies 2 (Lekki): 32a Admiralty Way, Opposite Ebeano Supermarket, Lekki Phase 1, Lagos — call 0916 600 0777. Foodies Abuja: AP Filling Station, Ardova Mall, Opposite Transcorp Hilton, Maitama, Abuja — call 0916 600 0888. All locations are on Google Maps.`,
      },
      {
        question: `What are your opening hours?`,
        answer: `Lekki (Foodies 1 and 2): Monday to Thursday 11am to 9pm (last orders 8:30pm), Friday to Saturday 11am to 10pm (last orders 9:30pm), Sunday 12pm to 8pm (last orders 7:30pm). Abuja (Maitama): Open every day 8am to 12am Midnight (last orders 11:30pm) — the same extended schedule all week.`,
      },
      {
        question: `Are weekend hours different?`,
        answer: `For Lekki branches: yes — Friday and Saturday extend to 10pm instead of 9pm. The Abuja branch maintains its consistent 8am to midnight schedule seven days a week, including weekends and public holidays.`,
      },
      {
        question: `Do you open on public holidays?`,
        answer: `Yes, all branches are typically open on public holidays. Lekki branches usually operate on Sunday hours (12pm to 8pm). Abuja typically operates on regular hours (8am to midnight). We recommend calling ahead for major holidays like Christmas and New Year's Day — Foodies 1: 0916 600 0666, Foodies 2: 0916 600 0777, Abuja: 0916 600 0888.`,
      },
      {
        question: `Is there parking available?`,
        answer: `Yes at all three locations. Foodies 1 (23 Admiralty Way): on-site parking available. Foodies 2 (32a Admiralty Way): on-site dedicated parking for guests — note the area can be busy as it's opposite Ebeano Supermarket. Foodies Abuja (Ardova Mall, Maitama): ample parking across the entire mall complex.`,
      },
      {
        question: `Do all locations have private dining?`,
        answer: `Yes! All three branches offer private dining spaces. Foodies 1 (Lekki): up to 20 guests, call 0916 600 0666. Foodies 2 (Lekki): up to 20 guests, call 0916 600 0777. Foodies Abuja: available, call 0916 600 0888. For all locations, book at least 24 hours in advance — no extra charge for the space.`,
      },
      {
        question: `Is the Abuja location open yet?`,
        answer: `Yes, absolutely! Our Maitama branch is fully open. Location: AP Filling Station, Ardova Mall, Opposite Transcorp Hilton, Maitama, Abuja. Hours: 8am to 12am Midnight, 7 days a week. Phone: 0916 600 0888. Your Foodies account and loyalty points work seamlessly across all three branches.`,
      },
    ],
  },
  {
    id: "catering",
    label: "Catering & Events",
    Icon: PartyPopper,
    faqs: [
      {
        question: `Do you cater for events?`,
        answer: `Yes! We cater for corporate events (board meetings, staff lunches, end-of-year parties), social events (birthdays, anniversaries, weddings), private gatherings, and community events. Options include: Drop-off Catering (food delivered, you serve), Full-Service Catering (food + staff + setup + cleanup), Food Stations (interactive buffet with chefs), Family-Style (large platters), and Individual Boxed Meals.`,
      },
      {
        question: `What's the difference between regular orders and Food Trails?`,
        answer: `Regular orders are individual servings with stews/sauces included, ideal for 1-4 people. Food Trails are bulk portions (15 or 30) of rice only — no sauces — designed for events and parties. Food Trails are more cost-effective per portion, come in catering trays, and require 24-48 hours advance notice. For events, many customers combine Food Trails with separate protein orders for maximum flexibility and savings.`,
      },
      {
        question: `How do I order a Food Trail?`,
        answer: `In the app: Menu → Intercontinental → Food Trails. Choose Small (15 portions) or Big (30 portions), select your rice variety (Jollof, Fried, Coconut, Basmati Jollof, Vegetable, Chinese, Biryani, Coconut Fried, or Seafood Rice), choose quantity, add to cart, and checkout. By phone: call Lekki(foodies 1) 0916 600 0666, Lekki(foodies 2) 0916 6000777 or  Abuja 0916 600 0888. Recommended lead times: 1-2 trails = 24 hrs; 3-5 trails = 48 hrs; 6+ trails = 72 hrs.`,
      },
      {
        question: `What's your minimum order for catering?`,
        answer: `Food Trails: no minimum — one trail (15 portions) is fine! Full-menu catering: 50,000 naira minimum. Delivery catering: 75,000 naira minimum. Full-service catering with staff: 150,000 naira minimum. Budget guide: 25k-50k gets 1-2 Food Trails + small proteins; 50k-100k gets 2-3 Trails + assorted proteins + drinks; 100k-200k covers a full selection; 200k+ unlocks a complete catering package.`,
      },
      {
        question: `Do you provide delivery for events?`,
        answer: `Yes, within our delivery zones. Standard drop-off: 5,000-15,000 naira (by distance). White-glove delivery (food delivered and set up): 20,000 naira+. Full-service (delivery + serving staff + cleanup): quoted individually. Lagos Zone 1 (Lekki area): 5,000 naira; Zone 2 (Ikoyi/VI): 8,000 naira; Zone 3 (Ajah/Sangotedo): 12,000 naira; Zone 4 (Surulere/Yaba): 15,000 naira+. Minimum order 75,000 naira; minimum 48 hours notice required.`,
      },
      {
        question: `How far in advance should I book catering?`,
        answer: `Small office lunch (15-30 people): 2-3 days. Birthday party (30-50 people): 1 week. Corporate event (50-100 people): 2 weeks. Wedding reception (100-300 people): 3-4 weeks. Large gala (300+ people): 1-2 months. For December/January festive season, book 4-8 weeks ahead. Last-minute (48-72 hrs) is usually possible for small-medium orders — call us directly to confirm.`,
      },
      {
        question: `Can I sample dishes before ordering for an event?`,
        answer: `Absolutely! Three options: Dine-in sampling — visit any branch and order the dishes you're considering. Catering Tasting Platter (25,000 naira, serves 2-4) — includes samples of Jollof Rice, Fried Rice, Egusi Soup, Grilled Chicken, Asun, Moi-Moi, Puff Puff, Coleslaw, and Zobo; order 48 hours ahead. Private Tasting Session (50,000 naira, waived if you book with us) — 1-2 hours with our head chef in private dining, available for events of 100+ guests; book 2 weeks ahead.`,
      },
    ],
  },
  {
    id: "loyalty",
    label: "Loyalty & Rewards (coming soon)",
    Icon: Star,
    faqs: [
      {
        question: `How do I earn points?`,
        answer: `Automatically on every order: 10 points per 100 naira spent. Bonus points: 500 on your first order, 250 in your birthday month, 100 on app download and registration, 1,000 per successful referral (friend orders 5,000 naira+), 50 per review (up to 200 pts/month), and 50 per social media check-in once per month. Points appear immediately after order completion (bonus points within 24 hours).`,
      },
      {
        question: `What can I redeem points for?`,
        answer: `Rewards catalogue: 500 naira off (500 pts), Free Small Zobo (600 pts), Free Fresh Juice (800 pts), Free Pastry Item (1,000 pts), 2,000 naira off (1,800 pts), Free Regular Meal (2,500 pts), Free Small Food Trail — 15 portions (3,500 pts), Silver VIP Status (5,000 pts), Free Catering Tray — medium jollof or fried rice (8,000 pts, up to 47,000 naira value), Gold VIP Status (10,000 pts). Redeem at checkout by tapping "Use Loyalty Points."`,
      },
      {
        question: `Do points expire?`,
        answer: `Regular earned points expire after 12 months of account inactivity. Bonus points (first order, birthday, referral) expire after 6 months. "Active" means placing an order, earning points, redeeming points, or logging in. Oldest points expire first (FIFO). We send expiry reminders at 30 days, 14 days, 7 days, and 1 day before expiry. Even redeeming a small amount resets your activity clock.`,
      },
      {
        question: `How do I know how many points I have?`,
        answer: `In the app: Profile → Loyalty Card (shows balance and points history). Also visible at checkout before payment, and on each order confirmation screen. On the website: My Account → Loyalty Points. By phone: call any branch with your registered number. By email: write to loyalty@foodies.com.ng.`,
      },
      {
        question: `What are VIP tiers?`,
        answer: `Three tiers: Bronze (0-2,499 pts) — 10 pts per 100 naira, birthday reward. Silver (2,500-9,999 pts) — 11 pts per 100 naira, priority support, exclusive Silver offers, 500-pt birthday bonus. Gold (10,000+ pts) — 12 pts per 100 naira, unlimited free delivery, VIP dedicated support, early menu access, VIP event invitations, 1,000-pt birthday bonus, one free catering tray per year. Tiers are reviewed annually. Platinum and Diamond tiers are coming in Phase 5.`,
      },
      {
        question: `How do I refer a friend?`,
        answer: `Go to Profile → Refer a Friend → Get Your Referral Link. Share via WhatsApp, SMS, email, or social media. When your friend downloads the app using your link and places their first order of 5,000 naira or more, you earn 1,000 points and they get 2,000 naira off. No limit on referrals — 10 friends = 10,000 points (Gold tier!). Points are credited within 24 hours of your friend's completed order.`,
      },
      {
        question: `When will I receive my referral bonus?`,
        answer: `Within 24 hours after your friend completes their first qualifying order (5,000 naira+). Track referrals under Profile → Refer a Friend → View Referrals. If your bonus hasn't appeared after 48 hours, confirm your friend used your unique link, that their first order was 5,000 naira+, and that they are a new Foodies customer. Contact loyalty@foodies.com.ng with both your names and phone numbers.`,
      },
      {
        question: `What are the loyalty program terms?`,
        answer: `Key terms: Points earned on food subtotal only (not delivery fees or taxes), 10 pts per 100 naira rounded down, no cash value, non-transferable between accounts. Minimum redemption: 500 points. Redeemed points are non-refundable. Points from refunded orders are deducted. Tier status reviewed annually; if activity drops, you may move down one level. Referrals: friend must be new, one-time per friend, must use your unique link. Program may be modified with 30 days' notice.`,
      },
    ],
  },
];