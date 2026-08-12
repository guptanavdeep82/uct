import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Re-implements the homepage's IntersectionObserver-driven scroll-reveal
 * system for React: any element rendered with data-animate="fade-up" etc.
 * fades/slides into view once it crosses the viewport threshold. Re-scans
 * on every route change since each page mounts a fresh set of elements.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll("[data-animate]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute("data-delay");
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);
}
