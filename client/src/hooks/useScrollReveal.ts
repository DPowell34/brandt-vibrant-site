/* ============================================================
   BRANDT MANAGEMENT SERVICES — useScrollReveal hook
   Adds .visible class to elements with .reveal class when they
   enter the viewport, triggering CSS entrance animations.
   Respects prefers-reduced-motion for accessibility.
============================================================ */
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Immediately make all elements visible if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
