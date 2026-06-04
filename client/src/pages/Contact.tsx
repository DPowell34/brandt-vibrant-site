/* ============================================================
   BRANDT MANAGEMENT SERVICES — Contact Page
   Design: High-Contrast Urban Professional
   ============================================================ */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const CTA_BG = "/manus-storage/brandt-cta-bg_7accd48e.jpg";

const contactInfo = [
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "(800) 592-9092",
    href: "tel:8005929092",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "info@brandtmgt.com",
    href: "mailto:info@brandtmgt.com",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Orlando, FL 32801",
    href: null,
  },
];

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch soon.");
    }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#1A1A1A",
    border: "1px solid #2A2A2A",
    color: "#FFFFFF",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    borderRadius: "0.25rem",
    width: "100%",
    outline: "none",
    transition: "border-color 150ms ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#9E9E9E",
    fontFamily: "'Barlow Condensed', sans-serif",
    marginBottom: "0.4rem",
  };

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
            Get In Touch
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
            Contact<br />
            <span style={{ color: "#FFB800" }}>Us</span>
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Link href="/" className="transition-colors duration-150" style={{ color: "#9E9E9E" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9E9E9E"; }}>
              Home
            </Link>
            <span style={{ color: "#4A4A4A" }}>/</span>
            <span style={{ color: "#FFB800" }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact info column */}
            <div className="lg:col-span-2">
              <h2
                className="section-heading font-extrabold text-white mb-6 reveal"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", textTransform: "uppercase" }}
              >
                Let's Start a<br />
                <span style={{ color: "#FFB800" }}>Conversation</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-10 reveal reveal-delay-1"
                style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Have a property service need? We'd love to hear from you. Call us, send an email, or fill out the form and we'll get back to you promptly.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 reveal reveal-delay-${i + 2}`}
                  >
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,184,0,0.12)", color: "#FFB800" }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-1"
                        style={{ color: "#4A4A4A", fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-semibold transition-colors duration-150"
                          style={{ color: "#FFFFFF", fontFamily: "'Nunito Sans', sans-serif" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFB800"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold" style={{ color: "#FFFFFF", fontFamily: "'Nunito Sans', sans-serif" }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick call CTA */}
              <div
                className="mt-10 p-6 rounded-sm reveal reveal-delay-5"
                style={{
                  backgroundImage: `url(${CTA_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(17,17,17,0.82)" }}
                />
                <div className="relative z-10">
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#FFB800", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Fastest Response
                  </p>
                  <p
                    className="font-extrabold text-white mb-4"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", textTransform: "uppercase" }}
                  >
                    Call Us Directly
                  </p>
                  <a href="tel:8005929092" className="btn-yellow w-full justify-center">
                    <Phone size={16} />
                    (800) 592-9092
                  </a>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <div
                className="rounded-sm p-8 reveal reveal-delay-1"
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle size={56} style={{ color: "#FFB800" }} className="mb-5" />
                    <h3
                      className="font-extrabold text-white mb-3"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", textTransform: "uppercase" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-base" style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "340px" }}>
                      Thank you for reaching out. A member of the Brandt team will be in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3
                      className="font-extrabold text-white mb-6"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.6rem", textTransform: "uppercase" }}
                    >
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="name" style={labelStyle}>Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#FFB800"; }}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "#2A2A2A"; }}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#FFB800"; }}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "#2A2A2A"; }}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="subject" style={labelStyle}>Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "#FFB800"; }}
                        onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "#2A2A2A"; }}
                      >
                        <option value="">Select a service...</option>
                        <option value="painting">Painting Services</option>
                        <option value="rehabilitation">Rehabilitation Services</option>
                        <option value="flooring">Flooring & Tiling</option>
                        <option value="lawn">Lawn Maintenance</option>
                        <option value="pressure-washing">Pressure Washing</option>
                        <option value="plumbing">Faucet & Toilet Services</option>
                        <option value="gutters">Gutter Services</option>
                        <option value="pool">Pool Maintenance</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" style={labelStyle}>Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Describe your property service needs..."
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                        onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#FFB800"; }}
                        onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#2A2A2A"; }}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-yellow w-full justify-center"
                      disabled={loading}
                      style={{ opacity: loading ? 0.7 : 1 }}
                    >
                      {loading ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs mt-4 text-center" style={{ color: "#4A4A4A", fontFamily: "'Nunito Sans', sans-serif" }}>
                      We typically respond within 1 business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
