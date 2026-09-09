// Centralized, semantic image map. Photos come from the campus shoot folders
// (classroom interiors, college exterior, labs, student life, IMD / UCT events,
// ground breaking) and live in /public/images.
const img = (name) => `/images/${name}`;

const series = (prefix, count) =>
  Array.from({ length: count }, (_, i) => img(`${prefix}-${String(i + 1).padStart(2, "0")}.jpg`));

const galleryItems = (srcs, alt, category) =>
  srcs.map((src, i) => ({
    src,
    alt: i === 0 ? alt : `${alt} — ${i + 1}`,
    category,
  }));

export const images = {
  logo: img("logo.png"),
  logoWhite: img("logo-white.png"),
  rector: img("rector.png"),
  welcomeMou: img("welcome-mou.jpg"),

  classrooms: series("classroom", 8),
  exterior: series("exterior", 14),
  groundbreaking: series("groundbreaking", 4),
  imdEvents: series("imd", 62),
  labs: series("lab", 20),
  labVisits: series("lab-visit", 30),
  students: series("students", 42),
  events: series("events", 14),

  hero: {
    students: img("hero-1.jpg"),
    campusAerial: img("hero-2.jpg"),
    campusBuilding: img("hero-3.jpg"),
    ceremony: img("hero-4.jpg"),
  },

  campus: [
    img("campus-1.jpg"),
    img("campus-2.jpg"),
    img("campus-3.jpg"),
    img("campus-4.jpg"),
    img("campus-5.jpg"),
    img("campus-6.jpg"),
  ],

  gallery: [
    ...galleryItems(series("exterior", 14), "UCT campus exterior", "campus"),
    ...galleryItems(series("classroom", 8), "Classroom interior at UCT", "classrooms"),
    ...galleryItems(series("students", 42), "Student life at UCT", "students"),
    ...galleryItems(series("lab", 20), "Laboratory at UCT", "laboratories"),
    ...galleryItems(series("lab-visit", 30), "Lab visit at UCT", "laboratories"),
    ...galleryItems(series("events", 14), "UCT campus event", "events"),
    ...galleryItems(series("imd", 62), "IMD event at UCT", "cultural"),
    ...galleryItems(series("groundbreaking", 4), "Ground breaking ceremony at UCT", "history"),
  ],

  homeGallery: [
    { src: img("exterior-01.jpg"), alt: "Aerial view of the UCT campus in Díli", category: "campus" },
    { src: img("students-01.jpg"), alt: "Students in a lecture at UCT", category: "students" },
    { src: img("classroom-01.jpg"), alt: "Smart classroom interior at UCT", category: "classrooms" },
    { src: img("lab-01.jpg"), alt: "Teaching laboratory at UCT", category: "laboratories" },
    { src: img("events-01.jpg"), alt: "Campus event at UCT", category: "events" },
    { src: img("imd-01.jpg"), alt: "IMD event at UCT", category: "cultural" },
    { src: img("lab-visit-01.jpg"), alt: "Students during a laboratory visit", category: "laboratories" },
    { src: img("groundbreaking-01.jpg"), alt: "Ground breaking ceremony at UCT", category: "history" },
  ],

  news: {
    holi: img("news-1.jpg"),
    whiteCoat: img("news-2.jpg"),
    drugAwareness: img("news-3.jpg"),
  },

  accreditationLogos: [img("accred-1.png"), img("accred-2.png"), img("accred-3.png")],

  campusVideos: [
    img("video-1.jpg"),
    img("video-2.jpg"),
    img("video-3.jpg"),
    img("video-4.jpg"),
    img("video-5.jpg"),
    img("video-6.jpg"),
  ],
};
