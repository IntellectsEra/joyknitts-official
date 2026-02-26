import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import socksCotton from "@/assets/socks-cotton.jpg";
import socksSports from "@/assets/socks-sports.jpg";
import socksLoafer from "@/assets/socks-loafer.jpg";
import socksDiabetic from "@/assets/socks-diabetic.jpg";
import socksKids from "@/assets/socks-kids.jpg";
import socksLadies from "@/assets/socks-ladies.jpg";
import socksLong from "@/assets/socks-long.jpg";
import armSleeves from "@/assets/arm-sleeves.jpg";
import glovesIndustrial from "@/assets/gloves-industrial.jpg";

import socksSchool from "@/assets/socks-school.jpg";
import socksBamboo from "@/assets/socks-bamboo.jpg";
import socksHeelSupport from "@/assets/socks-heel-support.jpg";
import socksUnisex from "@/assets/socks-unisex.jpg";

const allProducts = [
  {
    name: "Cotton Socks",
    image: socksCotton,
    desc: "Breathable, soft cotton socks designed for everyday comfort and durability.",
    size: "large",
  },
  {
    name: "Sports Socks",
    image: socksSports,
    desc: "Performance-engineered socks offering support, grip, and moisture management.",
    size: "medium",
  },
  {
    name: "Loafer Socks",
    image: socksLoafer,
    desc: "Low-cut invisible socks designed for a clean look with loafers and sneakers.",
    size: "medium",
  },
  {
    name: "Diabetic Socks",
    image: socksDiabetic,
    desc: "Soft, non-binding construction designed for sensitive comfort and gentle care.",
    size: "large",
  },
  {
    name: "Kids Socks",
    image: socksKids,
    desc: "Playful, colorful designs crafted with soft cotton for all-day comfort.",
    size: "medium",
  },
  {
    name: "Ladies Socks",
    image: socksLadies,
    desc: "Refined softness in elegant designs for everyday wear.",
    size: "medium",
  },
  {
    name: "Unisex Socks",
    image: socksUnisex,
    desc: "Versatile designs crafted to suit all genders with universal comfort and fit.",
    size: "medium",
  },
  {
    name: "School Socks",
    image: socksSchool,
    desc: "Durable and breathable socks designed for daily school wear and long-lasting comfort.",
    size: "medium",
  },
  {
    name: "Bamboo Socks",
    image: socksBamboo,
    desc: "Eco-friendly bamboo fabric offering superior softness, breathability, and odor resistance.",
    size: "large",
  },
  {
    name: "Heel Support",
    image: socksHeelSupport,
    desc: "Enhanced heel cushioning and arch support for improved stability and reduced strain.",
    size: "medium",
  },
  {
    name: "Long & Ankle Socks",
    image: socksLong,
    desc: "Classic length options for versatile styling and complete coverage.",
    size: "large",
  },
  {
    name: "Arm Sleeves",
    image: armSleeves,
    desc: "Compression arm sleeves for sports performance and UV protection.",
    size: "medium",
  },
  {
    name: "Industrial Cotton Gloves",
    image: glovesIndustrial,
    desc: "Durable cotton gloves suitable for industrial and general applications.",
    size: "medium",
  },
];

const Products = () => {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-accent mb-4 block">
              Products
            </span>
            <h1 className="editorial-heading mb-6">
              Designed to <span className="italic">Wear.</span>
              <br />
              Built to <span className="gold-text">Endure.</span>
            </h1>
            <p className="body-elegant max-w-lg">
              Explore our complete range of socks and performance accessories
              crafted for everyday comfort and professional-grade supply.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* PRODUCT GRID – Editorial asymmetric layout */}
      <section className="section-padding pb-24 md:pb-36">
        <div className="space-y-8 md:space-y-12">
          {allProducts.map((product, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={product.name} delay={50}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
                    !isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={`${!isEven ? "lg:order-2" : ""}`}>
                    <div
                      className={`overflow-hidden bg-secondary ${
                        product.size === "large"
                          ? "aspect-[4/5]"
                          : "aspect-[3/4]"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div
                    className={`${!isEven ? "lg:order-1 lg:text-right" : ""} py-6`}
                  >
                    <span className="text-xs tracking-[0.2em] uppercase text-accent mb-3 block">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">
                      {product.name}
                    </h3>
                    <p className="body-elegant max-w-md mb-6 inline-block">
                      {product.desc}
                    </p>
                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex px-6 py-2.5 border border-primary text-primary text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
                {i < allProducts.length - 1 && (
                  <div className="luxury-divider mt-8 md:mt-12" />
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="section-padding text-center">
          <ScrollReveal>
            <div className="luxury-divider mb-10" />
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              Need a Custom Order?
            </h2>
            <p className="body-elegant max-w-md mx-auto mb-10">
              We accommodate custom specifications, bulk orders, and private
              label requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-sans hover:bg-primary/90 transition-all duration-300"
            >
              Request Custom Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Products;
