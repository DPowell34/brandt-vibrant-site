/* ============================================================
   BRANDT MANAGEMENT SERVICES — About Page
   Design: High-Contrast Urban Professional
   ============================================================ */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Clock, Award, Users } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663692315913/6dQMTfvF4LGTu7uMM699bT/brandt-about-G5cHGSoHVZvJWRe42y2DoM.webp";
const TOOLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663692315913/6dQMTfvF4LGTu7uMM699bT/brandt-services-4dU4vCycHqWK68uHhgTN9c.webp";

const values = [
  {
    icon: <Shield size={24} />,
    title: "Reliability",
    desc: "We show up when we say we will and complete every job to the highest standard.",
  },
  {
    icon: <Award size={24} />,
    title: "Quality",
    desc: "Premium materials and skilled craftsmanship on every project, every time.",
  },
  {
    icon: <Clock size={24} />,
    title: "Responsiveness",
    desc: "Fast turnaround and clear communication throughout every engagement.",
  },
  {
    icon: <Users size={24} />,
    title: "Community",
    desc: "Proudly serving Orlando and the Southeast United States since 2012.",
  },
];

const milestones = [
  { year: "2012", event: "Brandt Management Services founded by Luther Brandt as a handyman service in Orlando, FL." },
  { year: "2015", event: "Expanded into full painting and flooring services, growing the team and client base." },
  { year: "2018", event: "Added property preservation, rehabilitation, and warranty support services." },
  { year: "2021", event: "Extended coverage across the Southeast US with a comprehensive 14+ service portfolio." },
  { year: "Today", event: "Continuing to grow with a commitment to quality work and excellent customer service." },
];

export default function About() {
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
            Our Story
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
            About<br />
            <span style={{ color: "#FFB800" }}>Brandt</span>
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Link href="/" className="transition-colors duration-150" style={{ color: "#9E9E9E" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}>
              Home
            </Link>
            <span style={{ color: "#4A4A4A" }}>/</span>
            <span style={{ color: "#FFB800" }}>About</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal relative">
              <img
                src={ABOUT_IMG}
                alt="Brandt Management Services team"
                className="w-full rounded-sm object-cover"
                style={{ maxHeight: "500px" }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-sm"
                style={{ backgroundColor: "#FFB800", zIndex: -1 }}
              />
            </div>

            <div>
              <h2
                className="section-heading font-extrabold text-white mb-6 reveal"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase" }}
              >
                Welcome to the<br />
                <span style={{ color: "#FFB800" }}>World of Brandt</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-5 reveal reveal-delay-1"
                style={{ color: "#C8C8C8", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Established in 2012, Brandt Management Services is based in the Southeast region of the United States. Founder Luther Brandt developed the company as a simple handyman service — and through dedication, quality work, and excellent customer care, grew it into a full-spectrum property services organization.
              </p>
              <p
                className="text-base leading-relaxed mb-8 reveal reveal-delay-2"
                style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                The Brandt team prides itself on the ability to coordinate and complete every aspect of property service with reliability, responsiveness, and care. Whether it's a fresh coat of paint, a full rehabilitation, or ongoing lawn maintenance — we bring the same commitment to quality to every job.
              </p>
              <div
                className="inline-block px-5 py-4 rounded-sm mb-8 reveal reveal-delay-3"
                style={{ backgroundColor: "#1A1A1A", borderLeft: "4px solid #FFB800" }}
              >
                <p
                  className="text-base font-semibold italic"
                  style={{ color: "#FFB800", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  "Infinite Possibilities"
                </p>
                <p className="text-xs mt-1" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
                  — Luther Brandt, Founder
                </p>
              </div>
              <div className="reveal reveal-delay-4">
                <Link href="/contact" className="btn-yellow">
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: "#161616" }}>
        <div className="container">
          <div className="text-center mb-14 reveal">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              What Drives Us
            </p>
            <h2
              className="font-extrabold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase" }}
            >
              Our Core <span style={{ color: "#FFB800" }}>Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className={`service-card rounded-sm p-6 reveal reveal-delay-${i + 1}`}
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255,184,0,0.12)", color: "#FFB800" }}
                >
                  {val.icon}
                </div>
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", textTransform: "uppercase" }}
                >
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container">
          <div className="mb-14 reveal">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Journey
            </p>
            <h2
              className="section-heading font-extrabold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase" }}
            >
              A Decade of <span style={{ color: "#FFB800" }}>Growth</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-6 reveal reveal-delay-${i + 1}`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center font-extrabold text-xs flex-shrink-0"
                      style={{ backgroundColor: "#FFB800", color: "#111111", fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {m.year.length > 4 ? "NOW" : m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 my-1" style={{ backgroundColor: "#2A2A2A", minHeight: "32px" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <div
                      className="font-bold text-sm tracking-widest uppercase mb-1"
                      style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {m.year}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#C8C8C8", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal reveal-delay-3">
              <img
                src={TOOLS_IMG}
                alt="Professional property service tools"
                className="w-full rounded-sm object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#FFB800" }}>
        <div className="container text-center">
          <h2
            className="font-extrabold mb-4 reveal"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#111111" }}
          >
            Ready to Work With Us?
          </h2>
          <p
            className="text-base mb-8 mx-auto reveal reveal-delay-1"
            style={{ color: "rgba(17,17,17,0.75)", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "480px" }}
          >
            Contact Brandt Management Services today and discover the difference quality property care makes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 reveal reveal-delay-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold tracking-widest uppercase px-8 py-3 rounded-sm transition-all duration-150"
              style={{ backgroundColor: "#111111", color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
            >
              View Services
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold tracking-widest uppercase px-8 py-3 rounded-sm transition-all duration-150"
              style={{ backgroundColor: "transparent", color: "#111111", border: "2px solid #111111", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
