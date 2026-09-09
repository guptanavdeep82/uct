// Homepage-only content blocks — ported verbatim from the approved static
// homepage (index.html) so the React root route matches it exactly.
import { images } from "./images";

export const whyChooseUct = [
  {
    title: "Indian Curriculum & English Medium",
    desc: "UCT follows the Indian Medical Curriculum, aligned with NMC standards, and teaches the full MBBS program in English — so students can prepare for FMGE, USMLE and PLAB without a language barrier.",
  },
  {
    title: "Affordable Fees / Transparent Cost",
    desc: "Published tuition for the official intake — first-year tuition is listed as USD 6,200 in the Official Guidelines, with no hidden donation. Confirm the current year on the fees page.",
  },
  {
    title: "Global Opportunities",
    desc: "With accreditations like WDOMS, ECFMG, FAIMER, and NMC, UCT graduates are eligible for global exams and medical careers across India, USA, UK, Australia, and more.",
  },
  {
    title: "Modern Facilities",
    desc: "UCT offers advanced laboratories, simulation centers, and a fully equipped library. These facilities help students gain practical skills in a real academic setting.",
  },
  {
    title: "Clinical Training",
    desc: "Students get real-time hospital exposure through active clinical partnerships. This ensures strong practical foundations before graduation and licensing.",
  },
  {
    title: "Expert Faculty",
    desc: "Classes are led by experienced, supportive medical educators from India. Faculty members are deeply committed to student success and development.",
  },
  {
    title: "Research Focus",
    desc: "The university encourages hands-on student research and academic inquiry. From early years, students are guided to explore, analyze, and innovate.",
  },
  {
    title: "Cultural Mix",
    desc: "UCT offers a friendly, diverse student atmosphere that feels like home. It promotes unity, cultural exchange, and international friendships.",
  },
];

export const mbbsHighlights = [
  { num: "01", title: "5.5-Year Program", desc: "4.5 years of MBBS coursework followed by 1 year of compulsory clinical internship." },
  { num: "02", title: "NMC-Compliant, English-Medium Curriculum", desc: "Fully aligned with Indian NMC guidelines, structured like AIIMS Delhi, and taught entirely in English." },
  { num: "03", title: "Indian Standard Textbooks", desc: "Teaching follows Indian standard textbooks listed in UCT’s official first-year guidelines — the same references used on the Curriculum page." },
  { num: "04", title: "Medical Practice Eligibility", desc: "Get licensed to practice in Timor-Leste after internship, with no additional exams." },
  { num: "05", title: "Medical Infrastructure", desc: "Equipped laboratories, smart classrooms, digital libraries and simulation centers." },
  { num: "06", title: "Global Faculty Support", desc: "Expert professors and mentors from India, USA, Cuba and Timor-Leste." },
];

export const homeAdmissionSteps = [
  { title: "Enquire", desc: "Submit the enquiry form or call our admission counsellors." },
  { title: "Eligibility Check", desc: "10+2 with PCB and NEET qualification for Indian students." },
  { title: "Application and Documents", desc: "Complete the application with academic records and passport." },
  { title: "Offer & Visa", desc: "Receive your admission letter and full visa guidance." },
  { title: "Fly & Enroll", desc: "Arrival support, hostel allocation and orientation at UCT." },
];

export const facilityCards = [
  { image: images.labs[0], title: "Simulation Labs", desc: "High-fidelity mannequins and clinical scenarios for safe, hands-on practice.", to: "/campus-life/laboratories" },
  { image: images.labs[4], title: "Laboratories", desc: "Advanced anatomy, physiology and biochemistry labs.", to: "/campus-life/laboratories" },
  { image: images.classrooms[0], title: "Digital Classrooms", desc: "Smart, connected lecture halls and seminar spaces.", to: "/campus-life/infrastructure" },
  { image: images.classrooms[2], title: "Library & E-Resources", desc: "A fully equipped library with digital journals and references.", to: "/campus-life/library" },
  { image: images.students[8], title: "Hostels & Transport", desc: "Safe student housing with campus shuttle services.", to: "/campus-life/hostel" },
  { image: images.events[0], title: "Sports & Student Events", desc: "Cultural festivals, sports and a vibrant campus community.", to: "/campus-life/sports-extracurriculars" },
];

export const homeTestimonials = [
  {
    quote: "Coming from India, I settled in faster than I expected. The professors know every student by name, and the simulation labs let us practice clinical skills from the very first year.",
    name: "Ananya R.",
    role: "MBBS Student, from India",
  },
  {
    quote: "Studying in English with an NMC-aligned syllabus means my FMGE preparation runs alongside my regular classes. Timor-Leste is calm, safe and genuinely welcoming.",
    name: "Mohammed S.",
    role: "MBBS Student, from India",
  },
  {
    quote: "The white coat ceremony was the proudest day of my life. Hospital visits started early, so we see real patients and real medicine — not just textbooks.",
    name: "Priyanka D.",
    role: "MBBS Student, from India",
  },
  {
    quote: "Faculty from four different countries means four different perspectives on medicine. The campus community celebrates every festival together — it truly feels like home.",
    name: "Rahul V.",
    role: "MBBS Student, from India",
  },
];

export const homeAccredBadges = [
  { code: "NMC", name: "NMC India", logo: images.accreditationLogos[0] },
  { code: "ANAAA", name: "ANAAA", logo: images.accreditationLogos[1] },
  { code: "WDOMS", name: "WDOMS", logo: images.accreditationLogos[2] },
  { code: "ECFMG", name: "ECFMG", logo: null },
  { code: "FAIMER", name: "FAIMER", logo: null },
  { code: "MOHTL", name: "Ministry of Health, TL", logo: null },
];
