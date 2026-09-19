const LOCAL_HOSTS = new Set(["127.0.0.1", "localhost", "0.0.0.0"]);

function apiOrigin() {
  const configured = (
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.API_URL ||
    "https://api.uct.tl"
  ).replace(/\/$/, "");

  try {
    const host = new URL(configured).hostname;
    if (LOCAL_HOSTS.has(host)) return "https://api.uct.tl";
  } catch {
    // Keep the configured origin when it is not a valid URL.
  }

  return configured;
}

function isManagedHost(hostname) {
  if (!hostname) return false;
  if (LOCAL_HOSTS.has(hostname)) return true;
  return /uct\.tl$/i.test(hostname) || /winqire\.com$/i.test(hostname);
}

/**
 * Admin/API sometimes returns localhost or /storage/ URLs from the original
 * upload. Live files are served from https://api.uct.tl/media/...
 */
export function mediaUrl(value) {
  if (!value || typeof value !== "string") return value;

  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith("data:") || trimmed.startsWith("blob:") || trimmed.startsWith("/images/")) {
    return trimmed;
  }

  let path = trimmed;

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const parsed = new URL(trimmed);
      if (!isManagedHost(parsed.hostname)) return trimmed;
      path = `${parsed.pathname}${parsed.search}`;
    } catch {
      return trimmed;
    }
  }

  path = path.replace(/^\/(?:storage|media)\//, "/media/");
  if (!path.startsWith("/")) path = `/${path}`;
  if (!path.startsWith("/media/")) path = `/media/${path.replace(/^\//, "")}`;

  return `${apiOrigin()}${path}`;
}

export function rewriteMediaHtml(html) {
  if (!html || typeof html !== "string") return html;
  return html.replace(
    /https?:\/\/(?:127\.0\.0\.1|localhost|0\.0\.0\.0)(?::\d+)?(\/[^"'>\s]*)/gi,
    (_, path) => mediaUrl(path),
  );
}
