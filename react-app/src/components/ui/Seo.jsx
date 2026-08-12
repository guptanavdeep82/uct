import { useEffect } from "react";

const SITE_NAME = "Universidade Católica Timorense";
const DEFAULT_IMAGE = "/images/hero-1.png";

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight, dependency-free SEO manager: sets the document title, meta
 * description, canonical URL and Open Graph tags per page. Mounted once at
 * the top of every page component.
 */
export default function Seo({ title, description, path = "", image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", "website");

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    setCanonical(`${origin}${path}`);
  }, [title, description, path, image]);

  return null;
}
