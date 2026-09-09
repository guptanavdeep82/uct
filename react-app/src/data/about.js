import { images } from "./images";

// About Us content. Overview / Vision & Mission / Rector message are
// sourced from https://www.uct.tl/ and https://www.uct.tl/vision-mission.
// Milestones & the Vice Prime Minister message are not published as a
// dedicated page on the live site at the time of writing — the content
// below is a clearly-editable placeholder structure, ready to be replaced
// with verified copy from the university.
export const aboutOverview = {
  intro:
    "Universidade Católica Timorense (UCT) is a Catholic medical university in Díli, Timor-Leste, offering an MBBS program based on the Indian curriculum. Established in 2021, UCT provides quality education in English, blending academic excellence with ethical values.",
  body:
    "With modern facilities and hands-on clinical exposure, UCT prepares students to become skilled, compassionate and globally ready healthcare professionals — making studying MBBS abroad simple and secure for Indian and international students alike.",
  academicPhilosophy:
    "UCT's academic philosophy centers on integrating science with service, knowledge with kindness, and academic discipline with faith. The curriculum is modeled on the Indian medical education system, ensuring familiarity and strong eligibility for international licensing exams.",
  studentExperience:
    "From the very first year, students are exposed to integrated clinical learning alongside a vibrant, multicultural campus community — with support systems designed specifically for international students settling into life in Timor-Leste.",
  internationalEnvironment:
    "UCT's faculty and student body draw from India, the USA, Cuba and Timor-Leste, creating a genuinely international learning environment inside a safe, peaceful island nation in Southeast Asia.",
  campusNote:
    "Located in Díli, UCT offers a focused medical-education campus with classrooms, laboratories, library resources, hostel options and student support services — designed for academic intensity without the overwhelm of a mega-city.",
  whyUct: [
    {
      title: "AIIMS-Aligned Structure",
      desc: "Teaching follows an AIIMS-style MBBS structure: professional years with integrated subjects, early clinical exposure, and AETCOM (attitude, ethics and communication) alongside anatomy, physiology and biochemistry in the first phase.",
    },
    {
      title: "Safe Island Setting",
      desc: "Timor-Leste is a peaceful island study destination. Students live in on-campus hostels with 24/7 CCTV security, dedicated wardens and separate wings — plus a student support office for international students.",
    },
    {
      title: "Indian Student Community",
      desc: "A strong community of Indian students on campus, with cultural events and peer support.",
    },
    {
      title: "English-Medium MBBS",
      desc: "NMC-aligned curriculum taught fully in English for Indian and international students.",
    },
  ],
  pillars: [
    {
      title: "Academic Excellence",
      desc: "A rigorous MBBS pathway that blends classroom learning with practical clinical exposure.",
    },
    {
      title: "Compassionate Care",
      desc: "A faith-centered environment that shapes compassionate, ethical healthcare professionals.",
    },
    {
      title: "Global Community",
      desc: "Faculty and students from India, the USA, Cuba and Timor-Leste learning side by side.",
    },
    {
      title: "Service to Society",
      desc: "A mission rooted in serving communities with knowledge, care and integrity.",
    },
  ],
  exploreLinks: [
    {
      title: "Overview",
      desc: "University introduction, philosophy and student experience.",
      path: "/about-us/overview",
      image: images.exterior[0],
    },
    {
      title: "Vision & Mission",
      desc: "Where UCT is headed and how we get there.",
      path: "/about-us/vision-mission",
      image: images.classrooms[0],
    },
    {
      title: "Milestones & History",
      desc: "Key moments since our founding in 2021.",
      path: "/about-us/milestones-history",
      image: images.groundbreaking[0],
    },
    {
      title: "Message from the Rector",
      desc: "A welcome from UCT leadership.",
      path: "/about-us/message-from-rector",
      image: images.rector,
    },
    {
      title: "Vice Prime Minister Message",
      desc: "An institutional perspective on UCT's national role.",
      path: "/about-us/message-from-vice-prime-minister",
      image: images.events[0],
    },
  ],
  facts: [
    { label: "Founded", value: "2021" },
    { label: "Location", value: "Díli, Timor-Leste" },
    { label: "Program", value: "MBBS (English)" },
    { label: "Identity", value: "Catholic University" },
  ],
};

export const visionMission = {
  vision: [
    "As UCT grows, we aim to expand our academic programs, research capacity, and clinical training partnerships — building a lasting institution that serves generations of future doctors.",
    "We envision UCT as a place where education shapes not only the minds but also the hearts of future healthcare professionals—grounded in values, driven by purpose, and equipped to make a global impact.",
  ],
  mission: [
    "Deliver international-standard medical education, with a focus on academic excellence and practical training.",
    "Provide a globally aligned MBBS curriculum, modeled on the Indian medical system to support career mobility.",
    "Cultivate compassionate, ethical, and socially responsible doctors through a faith-centered academic environment.",
    "Encourage research, innovation, and knowledge exchange, especially in public health and community medicine.",
  ],
  coreValues: [
    { title: "Excellence", desc: "High academic standards in every lecture, lab and clinical exposure." },
    { title: "Compassion", desc: "Healthcare rooted in empathy, dignity and patient-centered care." },
    { title: "Integrity", desc: "Ethical practice guided by Catholic values and professional responsibility." },
    { title: "Service", desc: "A commitment to communities in Timor-Leste and beyond." },
    { title: "Global Outlook", desc: "Preparation for international licensing pathways and careers." },
    { title: "Faith & Formation", desc: "Character formation alongside scientific medical training." },
  ],
  philosophy:
    "We believe that true education goes beyond textbooks. At UCT, learning is a journey of intellectual growth, moral formation, and personal transformation. Our philosophy centers on integrating science with service, knowledge with kindness, and academic discipline with faith. We encourage our students to think critically, act ethically, and always lead with humanity at the core of their profession.",
  leadershipPurpose:
    "UCT exists to form doctors who are clinically capable and ethically grounded — prepared for global exams where eligible, and ready to serve with humility in local and international healthcare settings.",
  quote:
    "To educate in truth, and to serve — this is the heart of everything we do at UCT.",
  quoteCite: "UCT Motto",
};

export const rectorMessage = {
  name: "Dr. Joel Casmiro Pinto",
  role: "Rector, Universidade Católica Timorense",
  photo: images.rector,
  quote:
    "Your journey to becoming a doctor starts with a single step. At UCT, you'll never take it alone.",
  message: [
    "Welcome to Universidade Católica Timorense — Timor-Leste's first Catholic medical university, built to shape ambitious students into skilled, compassionate doctors.",
    "Choosing where to study medicine is one of the most important decisions a student and their family will make. At UCT, we believe academic excellence and ethical formation must go hand in hand — our MBBS program combines rigorous training with hands-on clinical experience, guided by service, integrity, and compassion.",
    "We know studying abroad is a big step, especially for international students. That's why UCT feels like a true community from day one — with dedicated faculty mentorship, a supportive campus, and a diverse student body from India and beyond, learning together in a safe, focused setting.",
    "As Rector, I invite you to explore the MBBS curriculum offered through our International MBBS Department (IMD), our faculty, and our campus — and the values that guide everything we do.",
    "We look forward to welcoming you to the UCT family.",
  ],
  highlights: [
    "Hands-on learning with dedicated faculty mentorship",
    "A curriculum blending medical excellence with ethics and compassion",
    "A supportive campus community for international students",
  ],
  leadershipFocus: [
    {
      title: "Faculty Excellence",
      desc: "Recruiting, developing, and supporting experienced educators who are committed to student success.",
    },
    {
      title: "Student Wellbeing",
      desc: "Ensuring that every student, especially those studying far from home, feels supported, valued, and heard.",
    },
    {
      title: "Strategic Partnerships",
      desc: "Building strong clinical and institutional collaborations that expand learning opportunities and enrich student experiences.",
    },
  ],
  relatedSections: [
    {
      title: "A Campus Built for Medicine",
      desc: "Smart classrooms, advanced laboratories and simulation spaces support every stage of the MBBS journey at UCT.",
      image: images.hero.campusBuilding,
    },
    {
      title: "Learn. Serve. Lead.",
      desc: "From MOU signings to White Coat Ceremonies, UCT celebrates milestones that mark the start of a doctor's journey.",
      image: images.welcomeMou,
    },
  ],
};

// PLACEHOLDER — replace with the verified official message once published.
export const vicePrimeMinisterMessage = {
  name: "Office of the Vice Prime Minister",
  role: "Government of Timor-Leste",
  photo: images.exterior[3],
  isPlaceholder: true,
  quote: "Education is the foundation on which Timor-Leste's future healthcare system will be built.",
  message: [
    "This section is reserved for an official message from the Vice Prime Minister of Timor-Leste regarding the university's role in the nation's healthcare and education goals.",
    "Please replace this placeholder with the verified statement once it is provided by the Office of the Vice Prime Minister or published on the official UCT website.",
  ],
  connectionNote:
    "Universidade Católica Timorense works closely with national institutions in Timor-Leste to align medical education with the country's public health priorities.",
  uctConnection: [
    "Supports national capacity-building in healthcare education",
    "Provides an English-medium medical pathway in Díli",
    "Connects Timor-Leste's academic community with international faculty and students",
  ],
};

// PLACEHOLDER — replace with the verified institutional timeline once
// published by UCT. Only the founding date (Dec 8, 2021) is confirmed.
export const milestones = [
  {
    year: "2021",
    title: "UCT Founded",
    desc: "Universidade Católica Timorense is founded on December 8, 2021 in Díli, becoming the first Catholic university in Timor-Leste.",
    isPlaceholder: false,
  },
  {
    year: "2022",
    title: "First MBBS Batch Enrolled",
    desc: "Placeholder — replace with the verified date of the first MBBS cohort's enrollment.",
    isPlaceholder: true,
  },
  {
    year: "2023",
    title: "Clinical Partnerships Established",
    desc: "Placeholder — replace with verified details of hospital and clinical partnership milestones.",
    isPlaceholder: true,
  },
  {
    year: "2024",
    title: "White Coat Ceremony",
    desc: "UCT hosts its White Coat Ceremony in Chennai on November 5, 2024, marking students' transition to the clinical phase.",
    isPlaceholder: false,
  },
  {
    year: "2025",
    title: "Campus Life & Cultural Celebrations",
    desc: "Campus events such as Holi and community health awareness programs continue to strengthen student life and cultural connection.",
    isPlaceholder: false,
  },
  {
    year: "2026",
    title: "Admissions Open for 2026–27",
    desc: "UCT opens admissions for the 2026–27 MBBS intake with limited seats available.",
    isPlaceholder: false,
  },
];

export const milestonesIntro =
  "UCT's story begins on December 8, 2021 — the founding of the first Catholic university in Timor-Leste. The timeline below combines verified milestones from official university communications with clearly marked placeholders for dates that still need confirmation.";

export const journeySnippet = {
  tag: "Our Journey",
  title: "Our Journey & Milestones",
  intro:
    "Discover the key milestones that have shaped UCT’s growth in medical education and international healthcare collaboration.",
};

export const verifiedMilestones = milestones.filter((item) => !item.isPlaceholder);
