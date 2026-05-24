/* ============================================================
   BRANDT MANAGEMENT SERVICES — Home Page
   Design: High-Contrast Urban Professional
   Sections: Navbar, Hero, Stats Bar, Services Preview,
             About Teaser, CTA Banner, Footer
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone, Star, Wrench, Paintbrush, Leaf, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663692315913/6dQMTfvF4LGTu7uMM699bT/brandt-hero-S6gu378aqBmPtLWpfVDK4L.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663692315913/6dQMTfvF4LGTu7uMM699bT/brandt-about-G5cHGSoHVZvJWRe42y2DoM.webp";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663692315913/6dQMTfvF4LGTu7uMM699bT/brandt-cta-bg-354m7pZaXV9NqEeEfirTqJ.webp";

const stats = [
  { value: "2012", label: "Est. Year" },
  { value: "14+", label: "Services Offered" },
  { value: "100%", label: "Customer Focus" },
  { value: "SE", label: "US Coverage" },
];

const featuredServices = [
  {
    icon: <Paintbrush size={28} />,
    title: "Painting Services",
    desc: "Interior and exterior painting with premium materials and meticulous preparation for a lasting finish.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Rehabilitation",
    desc: "Full property rehabilitation and renovation services — restoring homes and commercial spaces to their best condition.",
  },
  {
    icon: <Leaf size={28} />,
    title: "Lawn Maintenance",
    desc: "Regular lawn care, landscaping, and grounds maintenance to keep your property looking pristine year-round.",
  },
  {
    icon: <Droplets size={28} />,
    title: "Pressure Washing",
    desc: "Professional power washing for driveways, siding, decks, and more — restoring curb appeal fast.",
  },
];

const reasons = [
  "Established and trusted since 2012",
  "Serving the Southeast United States",
  "Quality work on every project",
  "Responsive and reliable team",
  "Comprehensive property service solutions",
  "Excellent customer service, always",
];

export default function Home() {
  useScrollReveal();

  // Hero text entrance
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      (child as HTMLElement).style.opacity = "0";
      (child as HTMLElement).style.transform = "translateY(28px)";
      setTimeout(() => {
        (child as HTMLElement).style.transition = "opacity 500ms cubic-bezier(0.23,1,0.32,1), transform 500ms cubic-bezier(0.23,1,0.32,1)";
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, 120 + i * 100);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#111111" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Brandt Management Services professional property worker"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.45)" }}
          />
          {/* Yellow gradient overlay on left */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.70) 50%, rgba(17,17,17,0.15) 100%)",
            }}
          />
        </div>

        <div className="container relative z-10 py-24" ref={heroRef}>
          <div className="max-w-2xl">
            <div
              className="hero-animate inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase mb-6"
              style={{ backgroundColor: "rgba(255,184,0,0.15)", color: "#FFB800", border: "1px solid rgba(255,184,0,0.3)", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <Star size={12} fill="#FFB800" />
              Orlando, FL — Est. 2012
            </div>

            <h1
              className="hero-animate font-extrabold leading-none mb-4 text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              The Property<br />
              <span style={{ color: "#FFB800" }}>Service</span><br />
              People.
            </h1>

            <p
              className="hero-animate text-lg mb-8 leading-relaxed"
              style={{ color: "#C8C8C8", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "480px" }}
            >
              Quality work. Excellent customer service. Brandt Management Services handles every aspect of property care — from painting and flooring to lawn maintenance and rehabilitation.
            </p>

            <div className="hero-animate flex flex-wrap items-center gap-4">
              <Link href="/services" className="btn-yellow">
                Our Services
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-yellow">
                Get a Quote
              </Link>
            </div>

            <div className="hero-animate flex items-center gap-3 mt-8">
              <a
                href="tel:8005929092"
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#FFB800", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone size={16} />
                (800) 592-9092
              </a>
              <span style={{ color: "#4A4A4A" }}>|</span>
              <span className="text-sm" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
                info@brandtmgt.com
              </span>
            </div>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "80px", background: "linear-gradient(to bottom right, transparent 49%, #111111 50%)" }}
        />
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#FFB800" }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className="font-extrabold leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.5rem", color: "#111111" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-bold tracking-widest uppercase mt-1"
                  style={{ color: "rgba(17,17,17,0.65)", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container">
          <div className="mb-14 reveal">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              What We Do
            </p>
            <h2
              className="section-heading font-extrabold leading-tight text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase" }}
            >
              Property Services<br />
              <span style={{ color: "#FFB800" }}>Done Right</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((svc, i) => (
              <div
                key={i}
                className={`service-card rounded-sm p-6 reveal reveal-delay-${i + 1}`}
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255,184,0,0.12)", color: "#FFB800" }}
                >
                  {svc.icon}
                </div>
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.04em" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 reveal">
            <Link href="/services" className="btn-outline-yellow">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24" style={{ backgroundColor: "#161616" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="reveal relative">
              <img
                src={ABOUT_IMG}
                alt="Brandt Management Services team"
                className="w-full rounded-sm object-cover"
                style={{ maxHeight: "480px", filter: "brightness(0.9)" }}
              />
              {/* Yellow accent block */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-sm"
                style={{ backgroundColor: "#FFB800", zIndex: -1 }}
              />
              {/* Stat badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-4 rounded-sm"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,184,0,0.3)" }}
              >
                <div
                  className="font-extrabold leading-none text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem" }}
                >
                  10+
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Years of Trust
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-3 reveal"
                style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                About Brandt
              </p>
              <h2
                className="section-heading font-extrabold leading-tight text-white mb-6 reveal reveal-delay-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase" }}
              >
                Infinite<br />
                <span style={{ color: "#FFB800" }}>Possibilities</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-6 reveal reveal-delay-2"
                style={{ color: "#C8C8C8", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Founded in 2012 by Luther Brandt, what began as a simple handyman service has grown into a comprehensive property management and services company serving the Southeast United States.
              </p>
              <p
                className="text-base leading-relaxed mb-8 reveal reveal-delay-3"
                style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                The Brandt team prides itself on the ability to coordinate and complete every aspect of property service with reliability, responsiveness, and care.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 reveal reveal-delay-4">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#C8C8C8", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#FFB800" }} />
                    {reason}
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-delay-5">
                <Link href="/about" className="btn-yellow">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "#111111" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${CTA_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="container relative z-10 text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4 reveal"
            style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ready to Get Started?
          </p>
          <h2
            className="font-extrabold text-white mb-6 reveal reveal-delay-1"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Let's Solve Your<br />
            <span style={{ color: "#FFB800" }}>Property Challenges</span>
          </h2>
          <p
            className="text-base mb-10 mx-auto reveal reveal-delay-2"
            style={{ color: "#C8C8C8", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "520px" }}
          >
            Call us today or send a message. Our team is ready to assess your property needs and deliver quality results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 reveal reveal-delay-3">
            <a href="tel:8005929092" className="btn-yellow text-base">
              <Phone size={18} />
              Call (800) 592-9092
            </a>
            <Link href="/contact" className="btn-outline-yellow text-base">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
