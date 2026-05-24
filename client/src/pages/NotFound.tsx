/* ============================================================
   BRANDT MANAGEMENT SERVICES — 404 Not Found Page
   Design: High-Contrast Urban Professional
   ============================================================ */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#111111" }}>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="text-center px-4">
          <div
            className="font-extrabold leading-none mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(8rem, 20vw, 16rem)",
              color: "rgba(255,184,0,0.12)",
              lineHeight: 1,
            }}
          >
            404
          </div>
          <h1
            className="font-extrabold text-white mb-4 -mt-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase" }}
          >
            Page Not Found
          </h1>
          <p
            className="text-base mb-8 mx-auto"
            style={{ color: "#9E9E9E", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "400px" }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-yellow">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
