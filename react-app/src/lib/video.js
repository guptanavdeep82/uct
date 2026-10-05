function parseUrl(value) {
  try {
    return new URL(String(value).trim());
  } catch {
    return null;
  }
}

function youtubeId(url) {
  const host = url.hostname.replace(/^(www\.|m\.)/, "");
  if (host === "youtu.be") return url.pathname.split("/")[1] || null;
  if (host !== "youtube.com" && host !== "youtube-nocookie.com") return null;
  if (url.pathname === "/watch") return url.searchParams.get("v");
  const match = url.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]{6,})/);
  return match ? match[1] : null;
}

/**
 * Campus films can be a direct video file or a social link pasted in the admin.
 * Returns how the player should render it.
 */
export function resolveVideo(value) {
  const url = parseUrl(value);
  if (!url) return { kind: "file", src: value };

  const host = url.hostname.replace(/^(www\.|m\.)/, "");

  if (host === "instagram.com" || host === "instagr.am") {
    const match = url.pathname.match(/^\/(?:[\w.]+\/)?(reel|reels|p|tv)\/([\w-]+)/);
    if (match) {
      const type = match[1] === "reels" ? "reel" : match[1];
      return {
        kind: "instagram",
        src: value,
        embedUrl: `https://www.instagram.com/${type}/${match[2]}/embed/`,
      };
    }
  }

  const ytId = youtubeId(url);
  if (ytId) {
    return {
      kind: "youtube",
      src: value,
      embedUrl: `https://www.youtube.com/embed/${ytId}?autoplay=1&playsinline=1&rel=0`,
      thumb: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
    };
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const match = url.pathname.match(/(\d{6,})/);
    if (match) {
      return {
        kind: "vimeo",
        src: value,
        embedUrl: `https://player.vimeo.com/video/${match[1]}?autoplay=1&playsinline=1`,
      };
    }
  }

  return { kind: "file", src: value };
}
