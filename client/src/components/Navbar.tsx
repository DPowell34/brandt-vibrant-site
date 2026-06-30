/* ============================================================
   BRANDT MANAGEMENT SERVICES — Navbar
   Design: High-Contrast Urban Professional
   Dark background, yellow logo accent, yellow active links
============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(17,17,17,0.97)" : "rgba(17,17,17,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,184,0,0.2)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="container flex items-center justify-between" style={{ minHeight: "112px" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="Brandt Management Services — Home">
          <img
            src={`${import.meta.env.BASE_URL}brandt-logo.png`}
            alt="Brandt Management Services — Infinite Possibilities"
            className="w-auto object-contain"
            width={260}
            height={100}
            style={{ height: "100px", maxWidth: "260px" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase transition-colors duration-150"
                aria-current={isActive ? "page" : undefined}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: isActive ? "#FFB800" : "#D1D1D1",
                  borderBottom: isActive ? "2px solid #FFB800" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:8005929092"
          className="hidden md:flex items-center gap-2 btn-yellow text-sm"
          style={{ padding: "0.5rem 1.25rem" }}
          aria-label="Call Brandt Management Services at (800) 592-9092"
        >
          <Phone size={15} aria-hidden="true" />
          (800) 592-9092
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden"
          style={{ backgroundColor: "#111111", borderTop: "1px solid rgba(255,184,0,0.2)" }}
        >
          <nav className="container py-4 flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-bold tracking-widest uppercase py-2"
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: isActive ? "#FFB800" : "#D1D1D1",
                    borderLeft: isActive ? "4px solid #FFB800" : "4px solid transparent",
                    paddingLeft: "1rem",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:8005929092"
              className="flex items-center gap-2 btn-yellow text-sm mt-2"
              style={{ padding: "0.5rem 1.25rem", alignSelf: "flex-start" }}
              aria-label="Call Brandt Management Services"
            >
              <Phone size={15} aria-hidden="true" />
              (800) 592-9092
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
