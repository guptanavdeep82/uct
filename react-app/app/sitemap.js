import { fetchBlogs, fetchNews } from "@/lib/content";

const STATIC_PATHS = [
  "/",
  "/overview/",
  "/vision-mission/",
  "/milestones-history/",
  "/message-from-the-rector/",
  "/the-vice-prime-minister/",
  "/infrastructure/",
  "/library/",
  "/laboratories/",
  "/facilities-amp-amenities/",
  "/hostel-amp-student-housing/",
  "/sports-amp-extracurriculars/",
  "/life-for-indian-students/",
  "/mbbs-program/",
  "/detailed-syllabus/",
  "/family-community-medicine/",
  "/national-lab-report/",
  "/faculty/",
  "/hospitals/",
  "/services/",
  "/admission/",
  "/admission-process/",
  "/admission-enquiry/",
  "/tuition-fees/",
  "/scholarships/",
  "/prospectus/",
  "/accreditation/",
  "/media/",
  "/news-updates/",
  "/blog/",
  "/contact-us/",
  "/faq/",
  "/anti-ragging-policy/",
];

export const revalidate = 3600;

function siteOrigin() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.uct.tl").replace(/\/$/, "");
}

function lastModified(value) {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function page(base, path, extras = {}) {
  return {
    url: `${base}${path === "/" ? "/" : path}`,
    changeFrequency: extras.changeFrequency || "weekly",
    priority: extras.priority ?? 0.7,
    lastModified: extras.lastModified || new Date(),
  };
}

export default async function sitemap() {
  const base = siteOrigin();
  const [blogs, news] = await Promise.all([fetchBlogs(), fetchNews()]);

  const staticPages = STATIC_PATHS.map((path) =>
    page(base, path, {
      priority: path === "/" ? 1 : path === "/admission/" || path === "/mbbs-program/" ? 0.9 : 0.7,
      changeFrequency: path === "/" || path === "/blog/" || path === "/news-updates/" ? "daily" : "weekly",
    }),
  );

  const blogPages = uniqueBySlug(blogs)
    .map((post) =>
      page(base, `/blog/${post.slug}/`, {
        priority: 0.6,
        changeFrequency: "weekly",
        lastModified: lastModified(post.date || post.published_at),
      }),
    );

  const newsPages = uniqueBySlug(news)
    .map((item) =>
      page(base, `/events/${item.slug}/`, {
        priority: 0.6,
        changeFrequency: "weekly",
        lastModified: lastModified(item.date || item.published_at),
      }),
    );

  return [...staticPages, ...blogPages, ...newsPages];
}

function uniqueBySlug(rows) {
  const seen = new Set();
  return (rows || []).filter((row) => {
    if (!row?.slug || seen.has(row.slug)) return false;
    seen.add(row.slug);
    return true;
  });
}
