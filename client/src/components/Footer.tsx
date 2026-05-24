/* ============================================================
   BRANDT MANAGEMENT SERVICES — Footer
   Design: High-Contrast Urban Professional
   Deep black background, yellow accents, grey text
   ============================================================ */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(255,184,0,0.2)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-sm font-extrabold text-sm flex-shrink-0"
                style={{ backgroundColor: "#FFB800", color: "#111111", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                BMS
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-extrabold text-white text-lg tracking-wide"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  Brandt Management Services
                </span>
                <span className="text-xs tracking-widest" style={{ color: "#FFB800", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, textTransform: "uppercase" }}>
                  The Property Service People
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "340px" }}>
              Established in 2012, Brandt Management Services has built a trusted reputation across the Southeast United States. From a simple handyman service to a full-spectrum property solutions company — infinite possibilities.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors duration-150"
                style={{ backgroundColor: "#1C1C1C", color: "#9E9E9E" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FFB800"; (e.currentTarget as HTMLAnchorElement).style.color = "#111111"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1C1C1C"; (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors duration-150"
                style={{ backgroundColor: "#1C1C1C", color: "#9E9E9E" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FFB800"; (e.currentTarget as HTMLAnchorElement).style.color = "#111111"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1C1C1C"; (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}
                aria-label="Twitter / X"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors duration-150"
                style={{ backgroundColor: "#1C1C1C", color: "#9E9E9E" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FFB800"; (e.currentTarget as HTMLAnchorElement).style.color = "#111111"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1C1C1C"; (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#FFB800" }} />
                <a
                  href="tel:8005929092"
                  className="text-sm transition-colors duration-150"
                  style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}
                >
                  (800) 592-9092
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#FFB800" }} />
                <a
                  href="mailto:info@brandtmgt.com"
                  className="text-sm transition-colors duration-150"
                  style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}
                >
                  info@brandtmgt.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#FFB800" }} />
                <span className="text-sm" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Orlando, FL 32801
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#4A4A4A", fontFamily: "'Nunito Sans', sans-serif" }}>
            © {new Date().getFullYear()} Brandt Management Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-xs transition-colors duration-150" style={{ color: "#4A4A4A", fontFamily: "'Nunito Sans', sans-serif" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4A4A4A"; }}>
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-xs transition-colors duration-150" style={{ color: "#4A4A4A", fontFamily: "'Nunito Sans', sans-serif" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4A4A4A"; }}>
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
