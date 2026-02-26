import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Joy Knitts
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold-light font-sans mt-1">
                Premium Socks
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              Crafted for Comfort. Engineered for Scale. Premium socks
              manufacturing from Madurai, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans mb-6 text-gold-light">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans mb-6 text-gold-light">
              Products
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Cotton Socks",
                "Sports Socks",
                "Diabetic Socks",
                "Kids Socks",
                "Ladies Socks",
                "School Socks",
                "Bamboo Socks",
                "Unisex socks",
                "Heel Support",
              ].map((product) => (
                <span key={product} className="text-sm opacity-70">
                  {product}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans mb-6 text-gold-light">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <a
                href="tel:+919994531999"
                className="hover:opacity-100 transition-opacity"
              >
                +91 99945 31999, +91 99940 31999.
              </a>
              <a
                href="mailto:joyknitts@gmail.com"
                className="hover:opacity-100 transition-opacity"
              >
                md.joyknitts@gmail.com
              </a>
              <p className="leading-relaxed">
                No.200/3, Tharapathy Privu,
                <br />
                Melakkal Main Road, Kodimangalam,
                <br />
                Madurai – 625 234, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-padding py-6 border-t border-primary-foreground/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Joy Knitts. All rights reserved.
          </p>
          <p className="text-xs opacity-50">Madurai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
