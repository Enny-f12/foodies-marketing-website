import React from 'react';
import { 
  ShieldCheck, 
  Database, 
  UserCheck, 
  Lock, 
  Eye, 
  RefreshCw, 
  Mail, 
  Phone, 
  ChevronRight,
  Clock,
  Share2,
  Trash2} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white w-full">

      {/* --- HERO SECTION --- */}
      {/* py-16 on mobile, py-24/32 on desktop */}
      <header className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-surface-ink w-full">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          {/* Responsive font size for the heading */}
          <h1 className="font-sans font-bold text-on-ink mb-6 text-3xl md:text-5xl lg:text-6xl">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <div className="mt-6 md:mt-10 flex items-center justify-center gap-2 text-[10px] md:text-caption text-on-ink-faint uppercase tracking-widest font-sans">
            <Clock size={14} />
            <span>Last Updated: March 17, 2026</span>
          </div>
        </div>
      </header>

      {/* --- CONTENT SECTION --- */}
      {/* Standardized responsive horizontal padding (px-6 to px-10) */}
      <main className="container mx-auto px-6 md:px-10 py-12 md:py-20 max-w-7xl">
        <div className="space-y-12 md:space-y-16">

          {/* INTRODUCTION */}
          <section className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-body-lg text-muted leading-relaxed mb-4 font-sans">
              At Foodies Hot &amp; Spicy Nigeria (&quot;Foodies,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), we respect your privacy and are committed to protecting your personal data.
            </p>
            <p className="text-sm md:text-body-lg text-muted leading-relaxed font-sans">
              This policy explains how we collect, use, and safeguard your information when you use our mobile app, website, and services.
            </p>
          </section>

          {/* 1. INFORMATION WE COLLECT */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <Database className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">1. Information We Collect</h3>
            </div>
            <p className="text-muted font-sans text-sm md:text-base">We collect information to provide and improve our services.</p>

            {/* Changed md:grid-cols-3 to grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for smoother scaling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-card border border-border shadow-sm">
                <h4 className="font-sans font-bold text-primary mb-6 text-[10px] md:text-sm uppercase tracking-wider">1.1 Information You Provide</h4>
                <ul className="space-y-4 text-sm md:text-body text-muted font-sans">
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Account information:</span>
                    <span>name, email, phone number, password</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Profile information:</span>
                    <span>delivery addresses, payment methods, order history</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Communications:</span>
                    <span>when you contact us for support</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-card border border-border shadow-sm">
                <h4 className="font-sans font-bold text-secondary mb-6 text-[10px] md:text-sm uppercase tracking-wider">1.2 Automatically Collected</h4>
                <ul className="space-y-4 text-sm md:text-body text-muted font-sans">
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Device information:</span>
                    <span>IP address, device type, OS, unique identifiers</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Usage data:</span>
                    <span>app features used, time spent, pages viewed</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Location data:</span>
                    <span>approximate location (precise for delivery tracking)</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-card border border-border shadow-sm md:col-span-2 lg:col-span-1">
                <h4 className="font-sans font-bold text-heading mb-6 text-[10px] md:text-sm uppercase tracking-wider">1.3 Third Parties</h4>
                <ul className="space-y-4 text-sm md:text-body text-muted font-sans">
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Payment processors:</span>
                    <span>payment confirmation (we don&#39;t store card details)</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Delivery partners:</span>
                    <span>delivery status and tracking information</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-heading">Social login:</span>
                    <span>basic profile information you authorize</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. HOW WE USE YOUR INFORMATION */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <UserCheck className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">2. How We Use Your Information</h3>
            </div>
            <p className="text-muted font-sans text-sm md:text-base">We use your information for these purposes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-4">
              {[
                "To create and manage your account",
                "To process and deliver your orders",
                "To communicate order updates",
                "To respond to support requests",
                "To personalize your experience",
                "To administer loyalty points",
                "To improve our app and menu",
                "To send promotional offers",
                "To detect and prevent fraud",
                "To comply with legal obligations"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 py-2 border-b border-border/30">
                  <ChevronRight size={16} className="text-primary shrink-0" />
                  <span className="text-sm md:text-body text-muted font-sans">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. LEGAL BASIS */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <ShieldCheck className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">3. Legal Basis</h3>
            </div>
            <p className="text-muted font-sans text-sm md:text-base">Under the NDPR, we rely on these legal bases:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { title: "Contract performance:", body: "To fulfill our agreement (e.g., processing orders)" },
                { title: "Consent:", body: "For marketing and optional features" },
                { title: "Legitimate interests:", body: "To improve services and prevent fraud" },
                { title: "Legal obligation:", body: "To comply with applicable laws" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-bg-soft rounded-2xl border border-border">
                  <h4 className="font-sans font-bold text-heading mb-2 text-base">{item.title}</h4>
                  <p className="text-muted text-sm md:text-body font-sans">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. SHARING */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <Share2 className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">4. Sharing Your Information</h3>
            </div>
            <p className="text-muted font-sans text-sm md:text-base">We share your information only when necessary:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { strong: "With delivery partners:", rest: "To fulfill delivery orders" },
                { strong: "With payment processors:", rest: "To process transactions" },
                { strong: "With service providers:", rest: "Cloud hosting and analytics" },
                { strong: "For legal reasons:", rest: "To comply with laws" },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-xl border border-border hover:bg-bg-soft transition-colors text-sm md:text-base">
                  <span className="font-bold text-primary shrink-0">•</span>
                  <span className="text-muted font-sans"><strong className="font-bold text-heading">{item.strong}</strong> {item.rest}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-6 md:p-8 bg-primary/5 rounded-3xl md:rounded-4xl border-2 border-dashed border-primary/20 text-center">
              <p className="font-sans font-bold text-primary text-base md:text-lg">We never sell your personal information to third parties.</p>
            </div>
          </section>

          {/* 5. DATA RETENTION */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <RefreshCw className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">5. Data Retention</h3>
            </div>
            <div className="space-y-4 max-w-3xl">
              {[
                { strong: "Account information:", rest: "As long as your account is active" },
                { strong: "Order history:", rest: "For our records and improvements" },
                { strong: "Marketing:", rest: "Until you withdraw consent" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 text-sm md:text-base">
                  <span className="text-secondary font-bold">•</span>
                  <p className="text-muted font-sans"><span className="text-heading font-bold">{item.strong}</span> {item.rest}</p>
                </div>
              ))}
              <div className="mt-6 flex items-center gap-3 p-4 bg-bg-soft rounded-lg text-heading font-bold font-sans text-sm md:text-base">
                <Trash2 size={18} className="text-error shrink-0" />
                <span>You may request deletion of your account at any time.</span>
              </div>
            </div>
          </section>

          {/* 6. YOUR RIGHTS */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <Eye className="text-primary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-heading text-lg md:text-xl">6. Your Rights</h3>
            </div>
            <p className="text-muted font-sans text-sm md:text-base">Under NDPR, you have the right to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                "Access your personal information",
                "Correct inaccurate information",
                "Request deletion of your information",
                "Restrict or object to processing",
                "Withdraw consent at any time",
                "Lodge a complaint with the DPB"
              ].map((right, idx) => (
                <div key={idx} className="p-4 md:p-5 rounded-2xl bg-card border border-border flex items-start gap-3">
                  <ShieldCheck className="text-success mt-1 shrink-0" size={18} />
                  <span className="text-sm md:text-body text-muted leading-tight font-sans">{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. SECURITY */}
          {/* Adjusted padding p-6 for mobile, p-10 for desktop */}
          <section className="space-y-8 bg-surface-ink p-6 md:p-10 rounded-4xl md:rounded-[3rem] text-on-ink">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <Lock className="text-secondary" size={24} />
              <h3 className="font-sans font-bold uppercase tracking-tight text-on-ink text-lg md:text-xl">7. Security</h3>
            </div>
            <p className="text-on-ink-muted font-sans text-sm md:text-base opacity-80">
              We implement appropriate technical measures to protect your information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { t: "Encryption in transit", d: "TLS 1.3 Protocol", icon: <RefreshCw size={20} /> },
                { t: "Encryption at rest", d: "AES-256 Standard", icon: <ShieldCheck size={20} /> },
                { t: "Security Audits", d: "Regular assessments", icon: <Eye size={20} /> },
                { t: "Access controls", d: "Human safeguards", icon: <UserCheck size={20} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-surface-ink-deep rounded-2xl border border-border/50">
                  <div className="text-secondary shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-sans font-bold text-on-ink text-sm md:text-base">{item.t}</p>
                    <p className="text-on-ink-faint text-[10px] md:text-caption font-sans">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. CONTACT */}
          <section className="pt-12 md:pt-16 border-t-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
              <div>
                <h3 className="font-sans font-bold uppercase tracking-tight text-heading mb-6 text-lg md:text-xl">10. Contact Us</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-heading uppercase font-bold font-sans text-xs md:text-sm">Email</p>
                      <a href="mailto:info@foodieshotandspicy.com" className="text-blue-500 underline font-sans truncate block text-sm md:text-base">
                        info@foodieshotandspicy.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-heading uppercase font-bold font-sans text-xs md:text-sm">Phone</p>
                      <p className="font-sans text-sm md:text-base text-muted">+234 [Privacy Officer Phone]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-surface-ink-deep py-12 text-center border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-[10px] md:text-caption text-on-ink-faint font-sans leading-relaxed">
            © 2026 Foodies Hot &amp; Spicy Nigeria. All Rights Reserved. Compliant with NDPR.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;