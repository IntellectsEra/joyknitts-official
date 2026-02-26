import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import factoryImage from "@/assets/factory-interior.jpg";
import textileDetail from "@/assets/textile-detail.jpg";

const stats = [
  { label: "Nature of Business", value: "Manufacturer · Trader · Wholesaler" },
  { label: "Legal Status", value: "Proprietorship" },
  { label: "Annual Turnover", value: "₹40L – ₹1.5Cr" },
  { label: "Operational Base", value: "Madurai, Tamil Nadu" },
];

const capabilities = [
  "Advanced knitting machines",
  "Structured quality inspection systems",
  "Secure packaging standards",
  "Bulk-ready storage facilities",
  "Skilled and continuously trained workforce",
];

const About = () => {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={factoryImage}
            alt="Joy Knitts manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>
        <div className="relative section-padding pb-16 md:pb-24 pt-32 w-full">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
              About Joy Knitts
            </span>
            <h1 className="editorial-heading max-w-2xl">
              Built on <span className="italic">Precision.</span>
              <br />
              Guided by Purpose.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 md:py-36 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
                Our Story
              </span>
              <h2 className="editorial-subheading mb-8">
                From Madurai,
                <br />
                <span className="italic">to the World</span>
              </h2>
              <div className="space-y-5">
                <p className="body-elegant">
                  Founded in 2019, Joy Knitts was established with a commitment
                  to manufacture socks that balance durability, comfort, and
                  refined craftsmanship.
                </p>
                <p className="body-elegant">
                  Operating from Madurai, Tamil Nadu, we serve wholesalers,
                  retailers, and institutional buyers with dependable bulk supply
                  solutions.
                </p>
                <p className="body-elegant">
                  Our growth is rooted in ethical practices, quality assurance,
                  and long-term client relationships.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="aspect-square overflow-hidden">
              <img
                src={textileDetail}
                alt="Premium cotton weave detail"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BUSINESS PROFILE */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="luxury-divider mb-10" />
              <h2 className="editorial-subheading">Business Profile</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-serif text-xl md:text-2xl text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-24 md:py-36 section-padding">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
                Infrastructure
              </span>
              <h2 className="editorial-subheading">Manufacturing Excellence</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap} delay={i * 80}>
                <div className="flex items-center gap-6 py-5 border-b border-border">
                  <span className="text-xs text-accent font-sans tracking-wider">
                    0{i + 1}
                  </span>
                  <p className="font-serif text-lg text-primary">{cap}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="section-padding text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6">
              Ready to Partner?
            </h2>
            <p className="text-sm opacity-70 max-w-md mx-auto mb-10">
              Let's discuss how Joy Knitts can serve your sourcing needs with
              reliable quality and scalable capacity.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 border border-primary-foreground text-primary-foreground text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
