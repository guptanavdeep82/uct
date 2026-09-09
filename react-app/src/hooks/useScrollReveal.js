import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * IntersectionObserver scroll-reveal for [data-animate] elements.
 * Re-scans on every route change. Uses threshold 0 so a target taller than
 * the viewport (e.g. the full gallery grid) still reveals as soon as any
 * pixel crosses the screen — a 15% threshold can never fire in that case.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll("[data-animate]:not([data-revealed])");
    if (!targets.length) return undefined;

    const reveal = (el) => {
      if (el.hasAttribute("data-revealed")) return;
      const delay = el.getAttribute("data-delay");
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.setAttribute("data-revealed", "");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => {
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(el);
        observer.unobserve(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);
}
