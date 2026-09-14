export function siteOrigin() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.uct.tl").replace(/\/$/, "");
}

export function publicUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized === "/" || normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${siteOrigin()}${withSlash}`;
}
