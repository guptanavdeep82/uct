// Centralized, semantic image map — reuses the same asset library approved
// on the homepage so every inner page stays visually consistent. All files
// live in /public/images and are referenced by absolute path.
const img = (name) => `/images/${name}`;

export const images = {
  logo: img("logo.png"),
  logoWhite: img("logo-white.png"),
  rector: img("rector.png"),
  welcomeMou: img("welcome-mou.jpg"),

  hero: {
    students: img("hero-1.png"),
    campusAerial: img("hero-2.jpg"),
    campusBuilding: img("hero-3.png"),
    ceremony: img("hero-4.jpg"),
  },

  campus: [
    img("campus-1.png"),
    img("campus-2.png"),
    img("campus-3.png"),
    img("campus-4.png"),
    img("campus-5.png"),
    img("campus-6.png"),
  ],

  gallery: [
    { src: img("hero-4.jpg"), alt: "Certificate award ceremony at UCT", category: "events" },
    { src: img("gallery-1.jpg"), alt: "UCT students together at a campus event", category: "students" },
    { src: img("gallery-2.jpg"), alt: "UCT students on campus", category: "students" },
    { src: img("gallery-3.jpg"), alt: "UCT campus grounds", category: "campus" },
    { src: img("gallery-4.jpg"), alt: "Campus life at UCT", category: "campus" },
    { src: img("news-1.png"), alt: "Holi celebration of color and culture at UCT", category: "cultural" },
    { src: img("news-2.png"), alt: "White Coat Ceremony at UCT", category: "events" },
    { src: img("gallery-5.jpg"), alt: "UCT students in the laboratory", category: "laboratories" },
    { src: img("gallery-6.jpg"), alt: "UCT students beside the campus shuttle buses", category: "campus" },
    { src: img("gallery-7.jpg"), alt: "Student gathering at UCT", category: "students" },
    { src: img("gallery-8.jpg"), alt: "Students exploring Timor-Leste", category: "cultural" },
    { src: img("news-3.png"), alt: "Community health awareness program by UCT students", category: "events" },
    { src: img("gallery-9.jpg"), alt: "UCT campus community moment", category: "campus" },
  ],

  news: {
    holi: img("news-1.png"),
    whiteCoat: img("news-2.png"),
    drugAwareness: img("news-3.png"),
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
