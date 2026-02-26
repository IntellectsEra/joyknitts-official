import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-padding flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-primary">
            Joy Knitts
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans">
            Premium Socks
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "text-primary" : ""
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-accent"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-sans border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Get Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="section-padding py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-serif text-2xl text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex w-fit px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-sans border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-4"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
