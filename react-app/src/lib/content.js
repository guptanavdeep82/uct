import { getJson } from "./api";
import { mediaUrl, rewriteMediaHtml } from "./media";
import { blogPosts } from "../data/blog";
import { newsEvents } from "../data/newsEvents";
import { images } from "../data/images";

function asList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export function normalizeBlog(post) {
  if (!post) return null;
  const html = typeof post.body === "string" && post.body.trim() ? rewriteMediaHtml(post.body) : null;
  const image = mediaUrl(post.image || post.og_image) || images.students[0];
  return {
    ...post,
    image,
    og_image: mediaUrl(post.og_image) || image,
    author: post.author || "UCT Editorial",
    readingTime: post.readingTime || post.reading_time || "5 min read",
    date: post.date || "2025",
    category: post.category || "Blog",
    content: Array.isArray(post.content) ? post.content : [],
    html,
  };
}

export function normalizeNews(item) {
  if (!item) return null;
  const html = typeof item.body === "string" && item.body.trim() ? rewriteMediaHtml(item.body) : null;
  const paragraphs = Array.isArray(item.content)
    ? item.content
    : html
      ? []
      : item.excerpt
        ? [item.excerpt]
        : [];
  const image = mediaUrl(item.image || item.og_image) || images.events[0];
  return {
    ...item,
    image,
    og_image: mediaUrl(item.og_image) || image,
    category: item.category || "News",
    date: item.date || "",
    content: paragraphs,
    html,
  };
}

export async function fetchBlogs() {
  try {
    const payload = await getJson("/api/blogs");
    const rows = asList(payload).map(normalizeBlog).filter(Boolean);
    if (rows.length) return rows;
  } catch {
    // Fall back to the static archive when the admin API is offline.
  }
  return blogPosts.map(normalizeBlog);
}

export async function fetchBlog(slug) {
  try {
    const payload = await getJson(`/api/blogs/${slug}`);
    const row = normalizeBlog(payload?.data || payload);
    if (row?.slug) return row;
  } catch {
    // ignore and use static
  }
  return normalizeBlog(blogPosts.find((post) => post.slug === slug));
}

export async function fetchNews() {
  try {
    const payload = await getJson("/api/news");
    const rows = asList(payload).map(normalizeNews).filter(Boolean);
    if (rows.length) return rows;
  } catch {
    // Fall back to the static archive when the admin API is offline.
  }
  return newsEvents.map(normalizeNews);
}

export async function fetchNewsItem(slug) {
  try {
    const payload = await getJson(`/api/news/${slug}`);
    const row = normalizeNews(payload?.data || payload);
    if (row?.slug) return row;
  } catch {
    // ignore and use static
  }
  return normalizeNews(newsEvents.find((item) => item.slug === slug));
}

export async function fetchGallery() {
  try {
    const payload = await getJson("/api/gallery");
    const rows = asList(payload)
      .map((item) => (item?.src ? { ...item, src: mediaUrl(item.src) } : item))
      .filter((item) => item?.src);
    if (rows.length) return rows;
  } catch {
    // Fall back to the campus photo library.
  }
  return images.gallery;
}
