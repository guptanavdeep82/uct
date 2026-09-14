"use client";

import { useEffect } from "react";
import { useLocation } from "@/lib/navigation";

/** Resets the viewport to the top on every route change (SPA navigation
 * doesn't reload the page, so the browser keeps the previous scroll
 * position unless we do this explicitly). */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
