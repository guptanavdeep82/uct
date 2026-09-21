export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/overview",
    children: [
      { label: "Overview", path: "/overview" },
      { label: "Vision & Mission", path: "/vision-mission" },
      { label: "Milestones & History", path: "/milestones-history" },
      { label: "Message from the Rector", path: "/message-from-the-rector" },
    ],
  },
  {
    label: "Campus Life",
    path: "/infrastructure",
    children: [
      { label: "Infrastructure", path: "/infrastructure" },
      { label: "Library", path: "/library" },
      { label: "Laboratories", path: "/laboratories" },
      { label: "Facilities", path: "/facilities-amp-amenities" },
      { label: "Hostel", path: "/hostel-amp-student-housing" },
      { label: "Sports & Extracurriculars", path: "/sports-amp-extracurriculars" },
      { label: "Life of Indian Students", path: "/life-for-indian-students" },
    ],
  },
  {
    label: "MBBS Program",
    path: "/mbbs-program",
    children: [
      { label: "MBBS Program", path: "/mbbs-program" },
      { label: "Detailed Syllabus", path: "/detailed-syllabus" },
      { label: "Family & Community Medicine", path: "/family-community-medicine" },
      { label: "National Lab Report", path: "/national-lab-report" },
      { label: "Hospitals", path: "/hospitals" },
    ],
  },
  { label: "Services", path: "/services" },
  {
    label: "Admissions",
    path: "/admission",
    children: [
      { label: "Admission Process", path: "/admission-process" },
      { label: "Prospectus 2026", path: "/prospectus" },
      { label: "Admission Enquiry", path: "/admission-enquiry" },
      { label: "Fees Structure", path: "/tuition-fees" },
      { label: "Scholarship", path: "/scholarships" },
    ],
  },
  { label: "Gallery", path: "/media" },
  { label: "News & Events", path: "/news-updates" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact-us" },
];

export const footerAboutLinks = [
  { label: "Overview", path: "/overview" },
  { label: "Vision & Mission", path: "/vision-mission" },
  { label: "Milestones & History", path: "/milestones-history" },
  { label: "Message from the Rector", path: "/message-from-the-rector" },
];

export const footerQuickLinks = [
  { label: "MBBS Program", path: "/mbbs-program" },
  { label: "Detailed Syllabus", path: "/detailed-syllabus" },
  { label: "Family & Community Medicine", path: "/family-community-medicine" },
  { label: "National Lab Report", path: "/national-lab-report" },
  { label: "Prospectus 2026", path: "/prospectus" },
  { label: "Hospitals", path: "/hospitals" },
  { label: "Admission Process", path: "/admission-process" },
  { label: "FAQ", path: "/faq" },
  { label: "Fees Structure", path: "/tuition-fees" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Gallery", path: "/media" },
  { label: "Anti-Ragging Policy", path: "/anti-ragging-policy" },
];
