const SITE = "Universidade Católica Timorense";

function meta(title, description, path) {
  const canonical = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// Titles and descriptions follow https://www.uct.tl/ (Yoast / page titles).
export const seo = {
  "/": meta(
    "Study MBBS in Timor Leste at Universidade Católica Timorense",
    "Study MBBS in Timor Leste at Universidade Católica Timorense (UCT) which is a Catholic medical university in Dili (Timor-Leste) , offering an MBBS program based on the Indian curriculum.",
    "/",
  ),
  "/overview": meta(
    "Study MBBS in Timor-Leste at Universidade Católica Timorense (UCT) São João Paulo II",
    "Universidade Católica Timorense (UCT) is a Catholic medical university in Díli, Timor-Leste, offering an English-medium MBBS programme for Timorese, Indian, and international students.",
    "/overview",
  ),
  "/vision-mission": meta(
    "UCT Vision, Mission and Values for MBBS in Timor-Leste",
    "UCT Vision, Mission and Values for MBBS in Timor-Leste — academic excellence, practical clinical learning, ethical formation and community service.",
    "/vision-mission",
  ),
  "/milestones-history": meta(
    "Our Journey: Building Medical Education in Timor-Leste",
    "The founding story and milestones of Universidade Católica Timorense, from 2021 in Díli to MBBS education for Timorese and international students.",
    "/milestones-history",
  ),
  "/message-from-the-rector": meta(
    "MESSAGE FROM THE RECTOR",
    "A welcome message from the Rector of Universidade Católica Timorense to students joining the UCT community.",
    "/message-from-the-rector",
  ),
  "/the-vice-prime-minister": meta(
    "The Vice Prime Minister",
    "Message from the Vice Prime Minister of Timor-Leste in support of Universidade Católica Timorense.",
    "/the-vice-prime-minister",
  ),
  "/infrastructure": meta(
    "Campus Life at UCT Timor: Modern Facilities for MBBS in Timor-Leste",
    "Universidade Católica Timorense (UCT Timor) offers a modern, student-focused campus in Díli designed to support MBBS education through technology-enabled teaching and practical learning.",
    "/infrastructure",
  ),
  "/library": meta(
    "UCT Library: Medical Learning Resources for MBBS Students",
    "The central library at UCT Timor supports MBBS students with medical textbooks, journals, digital learning materials, quiet reading areas and online databases.",
    "/library",
  ),
  "/laboratories": meta(
    "Practical Medicine at UCT Timor: Clinical Skills for MBBS Students",
    "At UCT Timor, practical medicine is an essential part of the MBBS learning experience through subject-specific laboratories, guided demonstrations and supervised practical sessions.",
    "/laboratories",
  ),
  "/facilities-amp-amenities": meta(
    "UCT Facilities & Amenities Overview for Students",
    "Explore the UCT Facilities & Amenities that enhance your experience and provide essential services for students and visitors.",
    "/facilities-amp-amenities",
  ),
  "/hostel-amp-student-housing": meta(
    "universidade catolica timorense hostel facilities",
    "Secure, air-conditioned on-campus hostels at Universidade Católica Timorense with Indian-style food and 24/7 support.",
    "/hostel-amp-student-housing",
  ),
  "/sports-amp-extracurriculars": meta(
    "Sports & Extracurriculars",
    "Outdoor fields, indoor games, student clubs and an annual sports fest at Universidade Católica Timorense.",
    "/sports-amp-extracurriculars",
  ),
  "/life-for-indian-students": meta(
    "Life for Indian Students in Timor-Leste Today",
    "Explore the unique aspects of life for Indian students in Timor-Leste and discover what makes it an enriching experience.",
    "/life-for-indian-students",
  ),
  "/mbbs-program": meta(
    "Study MBBS in Timor Leste at UCT for Indian Students : A Guide for Timor Leste",
    "Explore how to study mbbs in timor leste at UCT for indian students and why it is a great choice for students from Timor Leste looking for MBBS programs.",
    "/mbbs-program",
  ),
  "/detailed-syllabus": meta(
    "Detailed Syllabus",
    "UCT MBBS detailed syllabus aligned with the Indian NMC curriculum, CBME and FMGL 2021 guidelines.",
    "/detailed-syllabus",
  ),
  "/family-community-medicine": meta(
    `Family & Community Medicine | ${SITE}`,
    "Family Adoption Programme and community medicine training at Universidade Católica Timorense.",
    "/family-community-medicine",
  ),
  "/national-lab-report": meta(
    `National Lab Report | ${SITE}`,
    "INSPTL national laboratory posting in Bidau, Díli — microbiology, TB and molecular biology training for UCT students.",
    "/national-lab-report",
  ),
  "/faculty": meta(
    `Faculty List | ${SITE}`,
    "Academic heads and international faculty at Universidade Católica Timorense.",
    "/faculty",
  ),
  "/hospitals": meta(
    `Hospitals | ${SITE}`,
    "Clinical hospital tie-ups and internship training for the UCT MBBS program.",
    "/hospitals",
  ),
  "/services": meta(
    "Services",
    "Student support services at Universidade Católica Timorense — hostels, transport, counselling and campus assistance.",
    "/services",
  ),
  "/admission": meta(
    "Admission",
    "Admissions at Universidade Católica Timorense — a simple, transparent, merit-based MBBS admission process for Indian and international students.",
    "/admission",
  ),
  "/admission-process": meta(
    "Universidade Catolica Timorense (UCT) Admission Process",
    "Step-by-step UCT MBBS admission process, documents, NEET eligibility and support from application to arrival.",
    "/admission-process",
  ),
  "/admission-enquiry": meta(
    "Admission Enquiry",
    "Submit an MBBS admission enquiry to Universidade Católica Timorense. Counsellors will guide you through eligibility, fees and the 2026–27 intake.",
    "/admission-enquiry",
  ),
  "/tuition-fees": meta(
    "UCT Timor leste MBBS Fees Structure for Indian Students",
    "looking into studying medicine abroad? Discover what timor leste MBBS fees structure really look like at Universidade Católica Timorense.",
    "/tuition-fees",
  ),
  "/scholarships": meta(
    "Scholarship Opportunities for Indian Students Pursuing MBBS at Universidade Católica Timorense",
    "UCT offers 100% tuition-fee scholarships for eligible Indian students — one from each state — based on academic merit.",
    "/scholarships",
  ),
  "/prospectus": meta(
    `Prospectus 2026 | ${SITE}`,
    "Download or request the Universidade Católica Timorense MBBS prospectus for the current admission cycle.",
    "/prospectus",
  ),
  "/accreditation": meta(
    "Accreditation",
    "UCT accreditations and listings including WDOMS, NMC, FAIMER, ECFMG and ANAAA recognition.",
    "/accreditation",
  ),
  "/media": meta(
    "Media",
    "Campus photos, events and student life at Universidade Católica Timorense.",
    "/media",
  ),
  "/news-updates": meta(
    "News & Updates",
    "Latest news, campus events and academic milestones from Universidade Católica Timorense.",
    "/news-updates",
  ),
  "/blog": meta(
    "Blog",
    "Guides on MBBS abroad, student life, admissions and Timor-Leste from Universidade Católica Timorense.",
    "/blog",
  ),
  "/contact-us": meta(
    "Contact Us",
    "Contact Universidade Católica Timorense — phone, email and campus address in Díli, Timor-Leste.",
    "/contact-us",
  ),
  "/faq": meta(
    `FAQ | ${SITE}`,
    "Frequently asked questions about studying MBBS at Universidade Católica Timorense.",
    "/faq",
  ),
  "/anti-ragging-policy": meta(
    "Anti-Ragging Policy",
    "UCT’s anti-ragging policy and student safety commitments on the Díli campus.",
    "/anti-ragging-policy",
  ),
};

export function pageMetadata(path) {
  return seo[path] || meta(`${SITE}`, "Universidade Católica Timorense — Study MBBS in Timor-Leste.", path);
}
