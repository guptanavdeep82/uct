import { pageMetadata } from "@/data/seo";

const paths = [
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

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.uct.tl";
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "/" : path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
