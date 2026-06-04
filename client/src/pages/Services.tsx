/* ============================================================
   BRANDT MANAGEMENT SERVICES — Services Page
   Design: High-Contrast Urban Professional
   ============================================================ */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import {
  Paintbrush, Wrench, Home, Shield, Layers, Droplets, Pipette,
  Lightbulb, Wind, Sparkles, DoorOpen, Leaf, Zap, Waves, ArrowRight, Phone
} from "lucide-react";

const TOOLS_IMG = "/manus-storage/brandt-services_26bfcebf.jpg";

const services = [
  {
    icon: <Shield size={28} />,
    title: "Warranty Support",
    desc: "Comprehensive warranty support services to protect your property investment and ensure all work meets the highest standards.",
    category: "Management",
  },
  {
    icon: <Wrench size={28} />,
    title: "Rehabilitation Services",
    desc: "Full property rehabilitation and renovation — restoring homes and commercial spaces to their best condition.",
    category: "Renovation",
  },
  {
    icon: <Paintbrush size={28} />,
    title: "Painting Services",
    desc: "Interior and exterior painting with premium materials, meticulous preparation, and a lasting professional finish.",
    category: "Renovation",
  },
  {
    icon: <Home size={28} />,
    title: "Property Preservation",
    desc: "Protecting and maintaining properties to preserve their value and structural integrity over the long term.",
    category: "Management",
  },
  {
    icon: <Layers size={28} />,
    title: "Flooring & Tiling",
    desc: "Expert installation and repair of hardwood, laminate, tile, and other flooring materials for any space.",
    category: "Renovation",
  },
  {
    icon: <Droplets size={28} />,
    title: "Gutter Services",
    desc: "Professional gutter installation, repair, and cleaning to protect your property from water damage.",
    category: "Exterior",
  },
  {
    icon: <Pipette size={28} />,
    title: "Faucet & Toilet Services",
    desc: "New installations and repairs for faucets, toilets, and plumbing fixtures — fast and reliable.",
    category: "Plumbing",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Fixture Replacements",
    desc: "Updating and replacing light fixtures, hardware, and other property fixtures to refresh any space.",
    category: "Interior",
  },
  {
    icon: <Wind size={28} />,
    title: "Ceiling Fan Installations",
    desc: "Professional ceiling fan installation for improved comfort and energy efficiency in any room.",
    category: "Interior",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Janitorial Services",
    desc: "Thorough cleaning and janitorial services for residential and commercial properties.",
    category: "Cleaning",
  },
  {
    icon: <DoorOpen size={28} />,
    title: "Door & Screen Replacements",
    desc: "Installation and replacement of interior and exterior doors, screen doors, and window screens.",
    category: "Exterior",
  },
  {
    icon: <Leaf size={28} />,
    title: "Lawn Maintenance",
    desc: "Regular lawn care, mowing, edging, and grounds maintenance to keep your property looking its best.",
    category: "Exterior",
  },
  {
    icon: <Zap size={28} />,
    title: "Pressure Washing",
    desc: "High-powered pressure and power washing for driveways, siding, decks, and walkways.",
    category: "Exterior",
  },
  {
    icon: <Waves size={28} />,
    title: "Pool Maintenance",
    desc: "Regular pool cleaning, chemical balancing, and maintenance to keep your pool safe and sparkling.",
    category: "Exterior",
  },
];

const categories = ["All", "Renovation", "Exterior", "Interior", "Plumbing", "Cleaning", "Management"];

export default function Services() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#111111" }}>
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #FFB800 0, #FFB800 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container relative z-10">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What We Offer
          </p>
          <h1
            className="font-extrabold text-white leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Our<br />
            <span style={{ color: "#FFB800" }}>Services</span>
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Link href="/" className="transition-colors duration-150" style={{ color: "#9E9E9E" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}>
              Home
            </Link>
            <span style={{ color: "#4A4A4A" }}>/</span>
            <span style={{ color: "#FFB800" }}>Services</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16" style={{ backgroundColor: "#111111" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="section-heading font-extrabold text-white mb-5 reveal"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", textTransform: "uppercase" }}
              >
                Welcome to<br />
                <span style={{ color: "#FFB800" }}>Our World</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-4 reveal reveal-delay-1"
                style={{ color: "#C8C8C8", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Brandt Management Services offers a comprehensive range of property services to meet every need. From routine maintenance to full rehabilitation, our skilled team handles it all with professionalism and care.
              </p>
              <p
                className="text-base leading-relaxed reveal reveal-delay-2"
                style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Browse our full list of 14+ services below. Don't see what you need? Contact us — we do more than what's listed.
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <img
                src={TOOLS_IMG}
                alt="Professional property service tools"
                className="w-full rounded-sm object-cover"
                style={{ maxHeight: "320px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 pb-24" style={{ backgroundColor: "#161616" }}>
        <div className="container">
          <div className="mb-12 reveal">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Full Service List
            </p>
            <h2
              className="font-extrabold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase" }}
            >
              Brandt Does the Following<br />
              <span style={{ color: "#FFB800" }}>and More</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`service-card rounded-sm p-6 reveal reveal-delay-${(i % 6) + 1}`}
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,184,0,0.12)", color: "#FFB800" }}
                  >
                    {svc.icon}
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-sm"
                    style={{ backgroundColor: "rgba(255,184,0,0.08)", color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {svc.category}
                  </span>
                </div>
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "0.04em" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#FFB800" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                className="font-extrabold mb-3 reveal"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#111111" }}
              >
                Need a Service?<br />Let's Talk.
              </h2>
              <p
                className="text-base reveal reveal-delay-1"
                style={{ color: "rgba(17,17,17,0.75)", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "420px" }}
              >
                Call us or send a message to discuss your property service needs. We're ready to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 reveal reveal-delay-2">
              <a
                href="tel:8005929092"
                className="inline-flex items-center gap-2 font-bold tracking-widest uppercase px-8 py-3 rounded-sm transition-all duration-150"
                style={{ backgroundColor: "#111111", color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
              >
                <Phone size={16} />
                (800) 592-9092
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold tracking-widest uppercase px-8 py-3 rounded-sm transition-all duration-150"
                style={{ backgroundColor: "transparent", color: "#111111", border: "2px solid #111111", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
