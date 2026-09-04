// Central navigation model — drives both the desktop dropdown menu and the
// mobile nested accordion menu, so the two never fall out of sync.
export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about-us",
    children: [
      { label: "Overview", path: "/about-us/overview" },
      { label: "Vision & Mission", path: "/about-us/vision-mission" },
      { label: "Milestones & History", path: "/about-us/milestones-history" },
      { label: "Message from the Rector", path: "/about-us/message-from-rector" },
      {
        label: "Message from the Vice Prime Minister",
        path: "/about-us/message-from-vice-prime-minister",
      },
    ],
  },
  {
    label: "Campus Life",
    path: "/campus-life",
    children: [
      { label: "Infrastructure", path: "/campus-life/infrastructure" },
      { label: "Library", path: "/campus-life/library" },
      { label: "Laboratories", path: "/campus-life/laboratories" },
      { label: "Facilities", path: "/campus-life/facilities" },
      { label: "Hostel", path: "/campus-life/hostel" },
      { label: "Sports & Extracurriculars", path: "/campus-life/sports-extracurriculars" },
      { label: "Life of Indian Students", path: "/campus-life/life-of-indian-students" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "MBBS Program", path: "/academics/mbbs-program" },
      { label: "Curriculum", path: "/academics/curriculum" },
      { label: "Family & Community Medicine", path: "/academics/family-community-medicine" },
      { label: "National Lab Report", path: "/academics/national-lab-report" },
      { label: "Faculty List", path: "/academics/faculty" },
      { label: "Hospitals", path: "/academics/hospitals" },
    ],
  },
  { label: "Services", path: "/services" },
  {
    label: "Admissions",
    path: "/admissions",
    children: [
      { label: "Admission Process", path: "/admissions/admission-process" },
      { label: "Prospectus 2026", path: "/admissions/prospectus" },
      { label: "Admission Enquiry", path: "/admissions/admission-enquiry" },
      { label: "Fees Structure", path: "/admissions/fees-structure" },
      { label: "Scholarship", path: "/admissions/scholarship" },
    ],
  },
  { label: "Accreditation", path: "/accreditation" },
  { label: "Gallery", path: "/gallery" },
  { label: "News & Events", path: "/news-events" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact-us" },
];

export const footerAboutLinks = [
  { label: "Overview", path: "/about-us/overview" },
  { label: "Vision & Mission", path: "/about-us/vision-mission" },
  { label: "Milestones & History", path: "/about-us/milestones-history" },
  { label: "Message from the Rector", path: "/about-us/message-from-rector" },
  { label: "Accreditation", path: "/accreditation" },
];

export const footerQuickLinks = [
  { label: "MBBS Program", path: "/academics/mbbs-program" },
  { label: "Curriculum", path: "/academics/curriculum" },
  { label: "Family & Community Medicine", path: "/academics/family-community-medicine" },
  { label: "National Lab Report", path: "/academics/national-lab-report" },
  { label: "Prospectus 2026", path: "/admissions/prospectus" },
  { label: "Faculty List", path: "/academics/faculty" },
  { label: "Hospitals", path: "/academics/hospitals" },
  { label: "Admission Process", path: "/admissions/admission-process" },
  { label: "FAQ", path: "/faq" },
  { label: "Fees Structure", path: "/admissions/fees-structure" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Gallery", path: "/gallery" },
  { label: "Anti-Ragging Policy", path: "/anti-ragging-policy" },
];
