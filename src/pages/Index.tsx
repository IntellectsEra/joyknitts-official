import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-knitting.jpg";
import factoryImage from "@/assets/factory-interior.jpg";
import textileDetail from "@/assets/textile-detail.jpg";
import socksCotton from "@/assets/socks-cotton.jpg";
import socksSports from "@/assets/socks-sports.jpg";
import socksDiabetic from "@/assets/socks-diabetic.jpg";
import socksKids from "@/assets/socks-kids.jpg";
import socksLadies from "@/assets/socks-ladies.jpg";
import socksSchool from "@/assets/socks-school.jpg";
import socksBamboo from "@/assets/socks-bamboo.jpg";
import socksHeelSupport from "@/assets/socks-heel-support.jpg";
import socksUnisex from "@/assets/socks-unisex.jpg";

const products = [
  { name: "Cotton Socks", image: socksCotton, desc: "Everyday comfort" },
  { name: "Sports Socks", image: socksSports, desc: "Performance-driven" },
  { name: "Diabetic Socks", image: socksDiabetic, desc: "Gentle care" },
  { name: "Kids Socks", image: socksKids, desc: "Playful comfort" },
  { name: "Ladies Socks", image: socksLadies, desc: "Refined softness" },
  { name: "School Socks", image: socksSchool, desc: "Durable daily wear" },
  { name: "Bamboo Socks", image: socksBamboo, desc: "Breathable eco comfort" },
  {
    name: "Heel Support",
    image: socksHeelSupport,
    desc: "Enhanced stability",
  },
  { name: "Unisex Socks", image: socksUnisex, desc: "Universal fit for all" },
];
const testimonials = [
  {
    text: "Excellent quality and comfort. The socks are durable and perfect for daily use.",
    author: "Wholesale Partner, Chennai",
  },
  {
    text: "Reliable supplier with timely delivery and consistent finishing quality.",
    author: "Distributor, Mumbai",
  },
  {
    text: "Premium materials with competitive wholesale pricing. Highly recommended.",
    author: "Retail Chain, Bangalore",
  },
];

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium knitting machinery crafting fine cotton fabric"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="relative section-padding pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-sans text-accent mb-8">
                Est. 2019 — Madurai, India
              </span>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h1 className="editorial-heading mb-6 leading-snug">
                Crafted for <span className="italic">Comfort.</span>
                <br />
                Engineered for <span className="gold-text">Scale.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="body-elegant max-w-lg mb-10">
                Joy Knitts is a Madurai-based manufacturing company specializing
                in high-quality cotton, performance, and specialty socks
                designed for durability, comfort, and large-scale distribution.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={450}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary/90 transition-all duration-300"
                >
                  Explore Collection
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 border border-primary text-primary text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Request Private Quote
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── BRAND PHILOSOPHY ─── */}
      <section className="py-28 md:py-40 section-padding">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="luxury-divider mb-10" />
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-primary mb-8">
              Precision in Every Thread.
            </h2>
            <p className="body-elegant max-w-xl mx-auto">
              We combine craftsmanship, advanced knitting technology, and strict
              quality control to deliver consistent excellence in every pair.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── COMPANY OVERVIEW – SPLIT LAYOUT ─── */}
      <section className="section-padding pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={textileDetail}
                alt="Premium cotton weave textile detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="lg:pl-8">
              <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
                Our Story
              </span>
              <h2 className="editorial-subheading mb-8">
                A Modern
                <br />
                Manufacturing House
              </h2>
              <div className="space-y-5">
                <p className="body-elegant">
                  Founded in 2019 in Madurai, Tamil Nadu, Joy Knitts has
                  steadily built a reputation for quality-driven socks
                  manufacturing.
                </p>
                <p className="body-elegant">
                  We specialize in cotton, poly, and performance socks crafted
                  for wholesalers, distributors, and institutional buyers.
                </p>
                <p className="body-elegant">
                  Every product undergoes detailed inspection to ensure
                  long-term durability, comfort, and structural integrity.
                </p>
              </div>
              <div className="luxury-divider-left mt-10" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── MANUFACTURING EXCELLENCE ─── */}
      <section className="py-24 md:py-36 bg-secondary">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
                  Infrastructure
                </span>
                <h2 className="editorial-subheading mb-8">
                  Where Craft
                  <br />
                  Meets <span className="italic">Technology</span>
                </h2>
                <div className="space-y-5">
                  <p className="body-elegant">
                    From premium fiber selection to knitting, shaping,
                    stitching, and packaging — every stage is carefully
                    monitored.
                  </p>
                  <p className="body-elegant">
                    Our infrastructure includes advanced knitting machines,
                    skilled professionals, and quality inspection processes that
                    ensure consistent output.
                  </p>
                  <p className="body-elegant">
                    We prioritize reliability, precision, and timely delivery
                    for our supply partners.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={factoryImage}
                  alt="Modern textile manufacturing facility interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT SHOWCASE ─── */}
      <section className="py-24 md:py-36 section-padding">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
              Collection
            </span>
            <h2 className="editorial-subheading mb-6">Our Collection</h2>
            <p className="body-elegant max-w-lg mx-auto">
              A curated range of comfort-focused and performance-driven socks
              for diverse applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 100}>
              <Link to="/products" className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-secondary mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-lg text-primary">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.desc}
                    </p>
                  </div>
                  <span className="text-xs tracking-[0.15em] uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Enquire →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-14">
            <Link
              to="/products"
              className="inline-flex px-8 py-3.5 border border-primary text-primary text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Full Collection
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 md:py-36 bg-secondary">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="luxury-divider mb-10" />
              <h2 className="editorial-subheading">Trusted by Our Partners</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <blockquote className="text-center">
                  <p className="font-serif text-lg md:text-xl italic leading-relaxed text-primary mb-6">
                    "{t.text}"
                  </p>
                  <cite className="text-xs tracking-[0.15em] uppercase text-muted-foreground not-italic">
                    — {t.author}
                  </cite>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-28 md:py-40 section-padding">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-primary mb-6">
              Let's Build a Reliable
              <br />
              <span className="italic gold-text">Supply Partnership.</span>
            </h2>
            <p className="body-elegant max-w-lg mx-auto mb-10">
              Partner with Joy Knitts for consistent quality, scalable
              production, and professional service.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary/90 transition-all duration-300"
            >
              Request Custom Quote
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Index;
