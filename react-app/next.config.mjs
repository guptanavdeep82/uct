const apiOrigin = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/overview/", permanent: true },
      { source: "/about-us/overview", destination: "/overview/", permanent: true },
      { source: "/about-us/vision-mission", destination: "/vision-mission/", permanent: true },
      { source: "/about-us/milestones-history", destination: "/milestones-history/", permanent: true },
      { source: "/about-us/message-from-rector", destination: "/message-from-the-rector/", permanent: true },
      { source: "/about-us/message-from-vice-prime-minister", destination: "/the-vice-prime-minister/", permanent: true },
      { source: "/campus-life", destination: "/infrastructure/", permanent: true },
      { source: "/campus-life/infrastructure", destination: "/infrastructure/", permanent: true },
      { source: "/campus-life/library", destination: "/library/", permanent: true },
      { source: "/campus-life/laboratories", destination: "/laboratories/", permanent: true },
      { source: "/campus-life/facilities", destination: "/facilities-amp-amenities/", permanent: true },
      { source: "/campus-life/hostel", destination: "/hostel-amp-student-housing/", permanent: true },
      { source: "/campus-life/sports-extracurriculars", destination: "/sports-amp-extracurriculars/", permanent: true },
      { source: "/campus-life/life-of-indian-students", destination: "/life-for-indian-students/", permanent: true },
      { source: "/academics", destination: "/mbbs-program/", permanent: true },
      { source: "/academics/mbbs-program", destination: "/mbbs-program/", permanent: true },
      { source: "/academics/curriculum", destination: "/detailed-syllabus/", permanent: true },
      { source: "/academics/family-community-medicine", destination: "/family-community-medicine/", permanent: true },
      { source: "/academics/national-lab-report", destination: "/national-lab-report/", permanent: true },
      { source: "/academics/faculty", destination: "/faculty/", permanent: true },
      { source: "/academics/hospitals", destination: "/hospitals/", permanent: true },
      { source: "/admissions", destination: "/admission/", permanent: true },
      { source: "/admissions/admission-process", destination: "/admission-process/", permanent: true },
      { source: "/admissions/prospectus", destination: "/prospectus/", permanent: true },
      { source: "/admissions/admission-enquiry", destination: "/admission-enquiry/", permanent: true },
      { source: "/admissions/fees-structure", destination: "/tuition-fees/", permanent: true },
      { source: "/admissions/scholarship", destination: "/scholarships/", permanent: true },
      { source: "/scholarship", destination: "/scholarships/", permanent: true },
      { source: "/gallery", destination: "/media/", permanent: true },
      { source: "/news-events", destination: "/news-updates/", permanent: true },
      { source: "/news/:slug", destination: "/events/:slug/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/facilities", destination: "/facilities-amp-amenities/", permanent: true },
      { source: "/hostel", destination: "/hostel-amp-student-housing/", permanent: true },
      { source: "/sports", destination: "/sports-amp-extracurriculars/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiOrigin.replace(/\/$/, "")}/api/:path*`,
      },
      {
        source: "/storage/:path*",
        destination: `${apiOrigin.replace(/\/$/, "")}/storage/:path*`,
      },
    ];
  },
};

export default nextConfig;
