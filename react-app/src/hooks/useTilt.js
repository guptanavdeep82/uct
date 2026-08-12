import { useEffect, useRef } from "react";

/**
 * Subtle cursor-tracking 3D tilt for cards / media frames.
 * Desktop fine pointers only; respects prefers-reduced-motion.
 */
export default function useTilt(maxTilt = 8) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let frame = null;

    const onEnter = () => {
      el.style.transition = "transform 0.12s ease-out";
    };

    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const ry = ((px - 0.5) * 2 * maxTilt).toFixed(2);
        const rx = ((0.5 - py) * 2 * maxTilt).toFixed(2);
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
        el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      });
    };

    const onLeave = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = null;
      }
      el.style.transition = "transform 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)";
      el.style.transform = "";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 560);
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [maxTilt]);

  return ref;
}
