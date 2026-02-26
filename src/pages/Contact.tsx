import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
              Contact
            </span>
            <h1 className="editorial-heading mb-6">
              Begin a <span className="italic">Professional</span>
              <br />
              <span className="gold-text">Partnership.</span>
            </h1>
          </div>
        </ScrollReveal>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-padding pb-24 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT – Contact Info */}
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-2xl text-primary mb-10">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+919994531999"
                      className="font-serif text-lg text-primary hover:text-accent transition-colors"
                    >
                      +91 99945 31999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:joyknitts@gmail.com"
                      className="font-serif text-lg text-primary hover:text-accent transition-colors"
                    >
                      joyknitts@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                      Address
                    </p>
                    <p className="font-serif text-lg text-primary leading-relaxed">
                      No.200/3, Tharapathy Privu,
                      <br />
                      Melakkal Main Road, Kodimangalam,
                      <br />
                      Madurai – 625016,
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxury-divider-left mt-12" />
            </div>
          </ScrollReveal>

          {/* RIGHT – Form */}
          <ScrollReveal delay={200}>
            <div className="bg-card p-8 md:p-12 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] border border-border">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="luxury-divider mb-8" />
                  <h3 className="font-serif text-2xl text-primary mb-4">
                    Thank You
                  </h3>
                  <p className="body-elegant">
                    We've received your enquiry and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-xl text-primary mb-2">
                    Request a Quote
                  </h3>
                  <p className="text-sm text-muted-foreground mb-8">
                    Fill in the details below and our team will get back to you.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Product Interest
                      </label>
                      <select className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors appearance-none">
                        <option value="">Select a product</option>
                        <option>Cotton Socks</option>
                        <option>Sports Socks</option>
                        <option>Loafer Socks</option>
                        <option>Diabetic Socks</option>
                        <option>Kids Socks</option>
                        <option>Ladies Socks</option>
                        <option>Long & Ankle Socks</option>
                        <option>Arm Sleeves</option>
                        <option>Sweat Bands</option>
                        <option>Knee Support</option>
                        <option>Anti-Slip Socks</option>
                        <option>Industrial Cotton Gloves</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                        Quantity (Pairs)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="e.g. 1,000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary/90 transition-all duration-300"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
