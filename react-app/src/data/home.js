// Homepage-only content blocks — ported verbatim from the approved static
// homepage (index.html) so the React root route matches it exactly.
import { images } from "./images";

export const whyChooseUct = [
  {
    title: "CBME and CRMI-based Curriculum Delivered in English",
    desc: "The UCT MBBS program draws inspiration from India's MBBS curriculum while meeting WFME and NMC requirements. It's delivered entirely in English, giving students the freedom to pursue FMGE, USMLE, and PLAB exams without worrying about language challenges.",
  },
  {
    title: "Affordable Fees / Transparent Cost",
    desc: "We've made tuition fees budget-friendly so that aspiring doctors can pursue their dreams without any surprise costs or hidden donations. Our pricing is completely transparent, and we offer scholarships to help deserving students succeed.",
  },
  {
    title: "Global Opportunities",
    desc: "Our medical programme is recognised by MHESC and ANAAA in Timor-Leste, listed in WDOMS, and aligned with CBME, NMC, and WFME standards. It supports graduates in pursuing medical licensing pathways and careers in India, the USA, the UK, Australia, and other countries, subject to local regulatory requirements.",
  },
  {
    title: "Community Medicine & Clinical Training",
    desc: "Our students adopt families throughout the entire community medicine program, gaining hands-on experience at our two Base medical centers and through three active clinical partnerships with both government and private hospitals. This approach builds a solid practical foundation that prepares them well for graduation and licensing.",
  },
  {
    title: "Modern Facilities",
    desc: "UCT offers advanced laboratories, simulation centers, and a fully equipped library. These facilities help students gain practical skills in a real academic setting.",
  },
  {
    title: "World-Class Teaching Team",
    desc: "Our experienced and supportive medical educators hail from diverse countries including India, Cuba, Timor-Leste, Australia, Portugal, and the USA. Each faculty member is genuinely dedicated to helping students thrive and succeed. We're committed to ensuring every student gets the personalized attention and extra support they need to excel in their studies.",
  },
  {
    title: "Research and Experimental Learning",
    desc: "The institution promotes hands-on student research by maintaining comprehensive laboratory visitation records, academic documentation systems, and clinical case documentation for student use. From the inception of their academic journey, students benefit from guidance in conducting investigations, assessing findings, and formulating innovative approaches.",
  },
  {
    title: "Unity in Diversity",
    desc: "UCT fosters a welcoming and inclusive campus community where students from diverse cultural and national backgrounds can feel at home. The University encourages mutual respect, cultural exchange, collaboration, and meaningful international friendships, creating a vibrant learning environment that celebrates diversity while strengthening unity, understanding, and shared personal and professional growth.",
  },
];

export const whyChooseMbbsPoints = [
  "Study MBBS in Timor-Leste at a Catholic university founded on integrity, service, and respect for human dignity.",
  "English-medium medical education designed with reference to CBME and CRMI learning approaches and international medical education standards.",
  "Integrated academic and clinical learning through modern teaching facilities, simulation-based learning, clinical rotations, and supervised patient care.",
  "Affiliated base-hospital training environment, supporting early clinical exposure and practical medical learning.",
  "Community-based medicine experience, enabling students to learn from local communities and family-partnership programmes.",
  "Safe and welcoming international campus, with a growing community of Timorese and Indian students.",
  "Ethics-focused medical training, developing professional, compassionate, and socially responsible healthcare practitioners.",
  "Guidance for international licensing pathways, including India, the United States, the United Kingdom, Australia, and other destinations, subject to the laws, examination requirements, and registration rules of each country.",
  "Final-year preparation support for relevant medical licensing examinations, including FMGE/NExT in India, USMLE in the United States, PLAB in the United Kingdom, and AMC assessments in Australia, as applicable.",
];

export const mbbsHighlights = [
  { num: "01", title: "5.5-Year Program", desc: "4.5 years of MBBS coursework followed by 1 year of compulsory clinical internship." },
  { num: "02", title: "NMC-Compliant, English-Medium Curriculum", desc: "Fully aligned with Indian NMC guidelines, structured with WFME standard, and taught entirely in English." },
  { num: "03", title: "Indian & International Textbooks", desc: "Teaching follows Indian and International authors and medical journals listed in UCT’s official curriculum guidelines." },
  { num: "04", title: "Professional Licensure", desc: "Secure your professional license immediately upon completing your UCT degree in Timor-Leste—no supplementary examinations required. This is followed by a mandatory 1-year practical training program that adheres to CRMI standards." },
  { num: "05", title: "Medical Infrastructure", desc: "Featuring state-of-the-art laboratories, intelligent digital learning environments, comprehensive digital libraries housing medical journals, and cutting-edge simulation centers." },
  { num: "06", title: "World-Class Faculty Network", desc: "Distinguished educators and advisors representing India, the USA, Cuba, Timor-Leste, and beyond, delivering exceptional academic guidance." },
];

export const homeAdmissionSteps = [
  { title: "Enquire", desc: "Submit the enquiry form or call our admission counsellors." },
  { title: "Eligibility Check", desc: "10+2 with PCB subjects for Timorese students, alongside NEET qualification requirements for Indian students, welcomes international applicants who adhere to their respective home country educational guidelines." },
  { title: "Application and Documents", desc: "Complete the application with academic records and passport." },
  { title: "Offer & Visa", desc: "Receive your admission letter and full visa guidance." },
  { title: "Fly & Enroll", desc: "Arrival support, hostel allocation and orientation at UCT." },
];

export const facilityCards = [
  { image: images.labs[0], title: "Simulation Labs", desc: "High-fidelity mannequins and clinical scenarios for safe, hands-on practice.", to: "/laboratories" },
  { image: images.labs[4], title: "Laboratories", desc: "Advanced anatomy, physiology and biochemistry labs.", to: "/laboratories" },
  { image: images.classrooms[0], title: "Digital Classrooms", desc: "Smart, connected lecture halls and seminar spaces.", to: "/infrastructure" },
  { image: images.classrooms[2], title: "Library & E-Resources", desc: "A fully equipped library with digital journals and references.", to: "/library" },
  { image: images.students[8], title: "Hostels & Transport", desc: "Safe student housing with campus shuttle services.", to: "/hostel-amp-student-housing" },
  { image: images.events[0], title: "Sports & Student Events", desc: "Cultural festivals, sports and a vibrant campus community.", to: "/sports-amp-extracurriculars" },
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
