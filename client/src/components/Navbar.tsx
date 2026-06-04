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
        <Link href="/" className="flex items-center group">
          <img
            src={`${import.meta.env.BASE_URL}brandt-logo.png`}
            alt="Brandt Management Services — Infinite Possibilities"
            className="w-auto object-contain"
            style={{ height: "100px", maxWidth: "260px" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase transition-colors duration-150"
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
        >
          <Phone size={15} />
          (800) 592-9092
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "#111111", borderTop: "1px solid rgba(255,184,0,0.2)" }}
        >
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-bold tracking-widest uppercase py-2"
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
              className="btn-yellow mt-2 justify-center"
            >
              <Phone size={15} />
              (800) 592-9092
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
