// Campus life content — sourced from https://www.uct.tl/infrastructure, which
// covers Infrastructure, Library, Laboratories, Facilities, Hostel and
// Sports in tabs on the live site. Split here into one dataset per page.
// Each page renders with its OWN distinct layout (see src/pages/campus/*)
// rather than a shared template, so every section of campus life feels
// different while staying on-brand.
import { images } from "./images";

export const campusSections = [
  {
    key: "infrastructure",
    title: "Infrastructure",
    path: "/campus-life/infrastructure",
    image: images.hero.campusBuilding,
    summary:
      "Smart classrooms, digital teaching tools and simulation spaces that meet the standards of modern medical education.",
    body:
      "UCT's campus infrastructure meets the standards of modern medical education. All academic blocks are equipped with smart classrooms, digital teaching tools, and high-speed internet to support blended learning. The campus also houses AV-enabled lecture halls, demonstration rooms, and simulation spaces that make learning interactive and practical. Each department operates with its own specialized labs, teaching resources, and faculty spaces — ensuring seamless academic delivery.",
    features: [
      {
        title: "Smart Classrooms",
        desc: "Projectors, audio-visual systems and digital boards in every lecture hall.",
      },
      {
        title: "Dedicated Academic Blocks",
        desc: "Separate blocks for pre-clinical and clinical departments.",
      },
      {
        title: "Campus-Wide Wi-Fi",
        desc: "High-speed internet across campus for seamless access to learning resources.",
      },
      {
        title: "Simulation & Skill Labs",
        desc: "Dedicated spaces for hands-on medical practice before clinical rotations.",
      },
      {
        title: "Faculty Blocks",
        desc: "Separate spaces ensuring easy access to academic mentorship.",
      },
      {
        title: "Demonstration Rooms",
        desc: "AV-enabled rooms that make complex medical concepts interactive.",
      },
    ],
    stats: [
      { value: "6+", label: "Academic Blocks" },
      { value: "100%", label: "Wi-Fi Campus" },
      { value: "24/7", label: "Digital Access" },
    ],
    secondary: {
      tag: "Built for Learning",
      title: "Interactive, Digitally-Enabled Classrooms",
      desc: "Every lecture hall is fitted with projectors, digital boards and audio-visual systems so complex medical concepts are easier to teach and easier to learn — supported by high-speed Wi-Fi across the entire campus.",
      image: images.campus[2],
    },
    gallery: [
      { src: images.gallery[3].src, alt: "Smart classroom session at UCT" },
      { src: images.gallery[4].src, alt: "Students in an academic block at UCT" },
      { src: images.gallery[8].src, alt: "Campus transport at UCT" },
      { src: images.hero.campusAerial, alt: "Aerial view of the UCT campus" },
    ],
  },
  {
    key: "library",
    title: "Library",
    path: "/campus-life/library",
    image: images.campus[1],
    summary:
      "Thousands of medical textbooks, journals and digital resources in a quiet, Wi-Fi-enabled study environment.",
    body:
      "UCT's central library supports the academic success of its students and faculty through access to thousands of medical textbooks, journals, and digital resources. With quiet reading zones, Wi-Fi-enabled study tables, and online research databases, the library is the perfect space for in-depth learning and preparation. Students can borrow reference materials, use computer stations for e-learning, and benefit from a well-maintained academic atmosphere throughout the year.",
    points: [
      "Thousands of medical textbooks and reference journals",
      "Wi-Fi-enabled study tables and quiet reading zones",
      "Online research databases and digital resources",
      "Computer stations for e-learning",
    ],
    steps: [
      {
        title: "Find Your Resource",
        desc: "Browse thousands of medical textbooks, journals and reference material organized by subject.",
      },
      {
        title: "Settle Into a Quiet Zone",
        desc: "Wi-Fi-enabled study tables and quiet reading zones designed for deep, focused learning.",
      },
      {
        title: "Go Digital",
        desc: "Use computer stations for e-learning and access online research databases from the library network.",
      },
      {
        title: "Borrow & Return",
        desc: "Borrow reference materials for extended study, with a well-maintained system all year round.",
      },
    ],
    stats: [
      { value: "1000s", label: "Medical Textbooks" },
      { value: "Daily", label: "Extended Study Hours" },
      { value: "100%", label: "Wi-Fi Enabled" },
    ],
    secondary: {
      tag: "A Space to Focus",
      title: "Quiet Reading Zones & Digital Research",
      desc: "Beyond the shelves, the library offers dedicated computer stations for e-learning and access to online research databases — helping students prepare confidently for exams and clinical rotations.",
      image: images.campus[0],
    },
    gallery: [images.gallery[9].src, images.gallery[1].src, images.gallery[12].src],
  },
  {
    key: "laboratories",
    title: "Laboratories",
    path: "/campus-life/laboratories",
    image: images.campus[4],
    summary:
      "Well-equipped laboratories for every major medical subject, guided by experienced faculty and technicians.",
    body:
      "To complement theoretical knowledge with real-time skills, UCT houses well-equipped laboratories for each major medical subject. Each lab is guided by experienced faculty and lab technicians to ensure safety, precision, and confidence in every student's practical learning.",
    labTypes: [
      {
        title: "Anatomy Lab",
        desc: "Full cadaver dissection support for a hands-on understanding of human anatomy.",
        image: images.campus[0],
      },
      {
        title: "Physiology & Biochemistry",
        desc: "Modern instruments for studying the body's systems and biochemical processes.",
        image: images.gallery[2].src,
      },
      {
        title: "Pathology & Microbiology",
        desc: "Specimen and slide analysis labs guided by experienced faculty.",
        image: images.gallery[4].src,
      },
      {
        title: "Clinical Skill Labs",
        desc: "Simulated patient-care procedures that build confidence before clinical rotations.",
        image: images.campus[4],
      },
    ],
    stats: [
      { value: "4+", label: "Specialized Labs" },
      { value: "1:1", label: "Faculty Guidance" },
      { value: "100%", label: "Hands-On Practice" },
    ],
    secondary: {
      tag: "Practical Medicine",
      title: "Real Skills, Guided by Experts",
      desc: "From anatomy dissection to clinical skill simulation, every lab session is supervised by experienced faculty and technicians so students build confidence and precision before entering clinical rotations.",
      image: images.campus[2],
    },
    gallery: [images.gallery[1].src, images.gallery[9].src, images.gallery[12].src],
  },
  {
    key: "facilities",
    title: "Facilities & Amenities",
    path: "/campus-life/facilities",
    image: images.campus[3],
    summary: "A wide range of facilities that support students both academically and personally.",
    body:
      "UCT provides a wide range of facilities that support students both academically and personally. All amenities are regularly maintained and student feedback is taken seriously to enhance convenience and quality of life on campus.",
    amenities: [
      { title: "Smart Classrooms", desc: "AV equipment in every teaching space." },
      { title: "Central Cafeteria", desc: "Indian food options served daily." },
      { title: "Hostel Support", desc: "Laundry and housekeeping services on-site." },
      { title: "Daily Transport", desc: "Shuttle service to hospitals and around Díli." },
      { title: "Prayer Room", desc: "A quiet space for reflection and worship." },
      { title: "Student Support Office", desc: "Administrative help desks for every need." },
    ],
    stats: [
      { value: "6+", label: "Campus Amenities" },
      { value: "Daily", label: "Hospital Transport" },
      { value: "24/7", label: "Support Office" },
    ],
    secondary: {
      tag: "Comfort & Convenience",
      title: "Everything Handled, So You Can Focus on Medicine",
      desc: "From the central cafeteria serving Indian food to daily shuttle transportation and a dedicated student support office, UCT is designed so day-to-day life never gets in the way of learning.",
      image: images.hero.ceremony,
    },
    faqs: [
      {
        q: "Is Indian food available on campus?",
        a: "Yes. The central cafeteria and hostel mess halls serve Indian-style food daily, making the transition abroad far easier for Indian students.",
      },
      {
        q: "Is transportation provided to hospitals?",
        a: "Yes. UCT arranges daily transportation to hospitals and around Díli for clinical postings and everyday needs.",
      },
      {
        q: "What support is available if I need help settling in?",
        a: "A dedicated student support office and administrative help desks are available on campus to assist with day-to-day needs.",
      },
      {
        q: "Is there a quiet space for prayer or reflection?",
        a: "Yes, UCT provides a prayer room on campus as part of its facilities for student wellbeing.",
      },
    ],
    gallery: [images.gallery[12].src, images.gallery[8].src, images.campus[5]],
  },
  {
    key: "hostel",
    title: "Hostel",
    path: "/campus-life/hostel",
    image: images.gallery[3].src,
    summary: "Secure, air-conditioned, on-campus hostels with round-the-clock support.",
    body:
      "UCT's on-campus hostels are designed to provide students with a secure, comfortable, and supportive environment. All rooms are fully air-conditioned to ensure a pleasant stay throughout the year. The hostels offer the perfect blend of independence and care — helping students stay focused, healthy, and socially connected.",
    wings: [
      {
        title: "Girls' Wing",
        image: images.gallery[2].src,
        points: [
          "24/7 security with CCTV and dedicated wardens",
          "Clean, air-conditioned rooms with study desks and storage",
          "Indian-style food in a dedicated mess hall",
        ],
      },
      {
        title: "Boys' Wing",
        image: images.gallery[1].src,
        points: [
          "Separate secured wing with round-the-clock supervision",
          "Air-conditioned rooms with fans, storage and study space",
          "Wi-Fi, laundry and on-site medical assistance",
        ],
      },
    ],
    stats: [
      { value: "24/7", label: "Security & Wardens" },
      { value: "AC", label: "All Rooms" },
      { value: "Indian", label: "Mess Menu" },
    ],
    secondary: {
      tag: "Home Away From Home",
      title: "Secure, Comfortable, Community-Focused",
      desc: "Separate wings for boys and girls, round-the-clock CCTV security and dedicated wardens mean families can feel confident their children are safe — while Indian-style food in the mess hall keeps things familiar.",
      image: images.gallery[9].src,
    },
    gallery: [images.gallery[4].src, images.hero.students, images.gallery[12].src],
  },
  {
    key: "sports",
    title: "Sports & Fitness",
    path: "/campus-life/sports-extracurriculars",
    image: images.campus[5],
    summary: "Outdoor fields, indoor games and an annual sports fest for a well-rounded campus life.",
    body:
      "UCT believes in shaping well-rounded professionals. That's why we encourage students to participate in sports, clubs, and cultural events that boost confidence, creativity, and teamwork. Campus life at UCT is vibrant and enriching, offering much more than academic learning.",
    timeline: [
      {
        year: "Outdoor",
        title: "Fields & Team Sports",
        desc: "Football, basketball and volleyball fields open to all students throughout the year.",
      },
      {
        year: "Indoor",
        title: "Indoor Games",
        desc: "Chess, carrom and table tennis for a quick break between lectures and labs.",
      },
      {
        year: "Annual",
        title: "Sports Fest",
        desc: "A campus-wide annual event featuring competitions, talent shows and medical camps.",
      },
      {
        year: "Clubs",
        title: "Student Organizations",
        desc: "Leadership opportunities across a range of student-run clubs and societies.",
      },
    ],
    stats: [
      { value: "3+", label: "Outdoor Sports" },
      { value: "Annual", label: "Sports Fest" },
      { value: "10+", label: "Student Clubs" },
    ],
    secondary: {
      tag: "Beyond the Classroom",
      title: "Confidence, Creativity & Teamwork",
      desc: "Outdoor fields for football, basketball and volleyball sit alongside indoor games like chess and table tennis — with an annual Sports Fest, talent shows and medical camps rounding out a vibrant campus calendar.",
      image: images.gallery[10].src,
    },
    gallery: [images.gallery[7].src, images.news.drugAwareness, images.hero.ceremony],
  },
];

export const getCampusSection = (key) => campusSections.find((s) => s.key === key);

// "Life of Indian Students" draws on the cultural/food/support details that
// are spread across the homepage, infrastructure page and testimonials —
// there isn't a single dedicated page on the live site for this yet.
export const indianStudentLife = {
  intro:
    "UCT is home to a large and growing community of Indian students pursuing MBBS in an English-medium, Indian-curriculum-aligned program. From Indian food in the campus mess to festival celebrations like Holi, UCT is designed to feel familiar while offering genuine international exposure.",
  pillars: [
    {
      title: "Indian Food, Every Day",
      desc: "The central cafeteria and hostel mess halls serve Indian-style food, making the transition abroad far easier.",
    },
    {
      title: "Festivals & Culture",
      desc: "Campus-wide celebrations such as Holi bring together Indian and international students through music, colour and dance.",
    },
    {
      title: "Familiar Curriculum",
      desc: "The Indian Medical Curriculum, aligned with NMC standards, means Indian students study a syllabus they already recognize.",
    },
    {
      title: "Community & Support",
      desc: "A strong Indian student community, dedicated hostel wardens and a student support office help new students settle in quickly.",
    },
  ],
  whyChoose: [
    "English-medium MBBS aligned with the Indian curriculum and NMC guidelines",
    "No donation, transparent admission process",
    "Safe, peaceful island nation with a welcoming, multicultural campus",
    "Indian food, Indian festivals, and a strong Indian student community",
    "Direct medical licensing eligibility in Timor-Leste after internship",
  ],
  stats: [
    { value: "100+", label: "Indian Students" },
    { value: "Daily", label: "Indian Food" },
    { value: "0", label: "Donation Admissions" },
  ],
  gallery: [images.gallery[1].src, images.gallery[10].src, images.gallery[9].src],
  moments: [
    {
      title: "Holi at UCT",
      desc: "A campus-wide celebration of colour and culture that brings Indian and international students together.",
      image: images.news.holi,
    },
    {
      title: "White Coat Ceremony",
      desc: "A proud milestone marking every student's first step into clinical training.",
      image: images.news.whiteCoat,
    },
    {
      title: "Community Health Camps",
      desc: "Students apply classroom learning by supporting local health awareness programs in Díli.",
      image: images.news.drugAwareness,
    },
  ],
};
