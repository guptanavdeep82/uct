// News & Events — sourced from https://www.uct.tl/events. Detail content
// for the two fully fetched articles is real; the remaining archive items
// use the real title + a short, clearly-scoped summary from the listing
// page (full article bodies were not available at time of writing).
import { images } from "./images";

export const newsEvents = [
  {
    slug: "holi-celebration-at-uct",
    title: "Holi at UCT: A Celebration of Color and Culture",
    category: "Cultural",
    date: "July 11, 2025",
    image: images.news.holi,
    excerpt:
      "UCT's vibrant campus turned into a canvas of joy and color during its Holi celebration, bringing students and faculty together to celebrate India's Festival of Colors.",
    content: [
      "UCT's vibrant campus turned into a canvas of joy and color during its Holi celebration, where students and faculty from all backgrounds joined together to celebrate India's beloved Festival of Colors. The event featured traditional music, organic colors, Indian sweets, and dance performances that showcased cultural unity and togetherness.",
      "Hosted in a safe and joyful environment, Holi at UCT brought international and local students closer, celebrating diversity through fun and shared experiences.",
      "The event wasn't just about colors — it symbolized inclusion, friendship, and cultural respect, key values that define life at UCT. Students laughed, danced, and celebrated without boundaries, creating memories that extend far beyond textbooks and classrooms.",
    ],
  },
  {
    slug: "white-coat-ceremony-2024-a-doctors-first-step",
    title: "White Coat Ceremony 2024: A Doctor's First Step",
    category: "Academic",
    date: "July 11, 2025",
    image: images.news.whiteCoat,
    excerpt:
      "On November 5th, 2024, UCT proudly hosted its White Coat Ceremony in Chennai, marking students' symbolic transition to the clinical phase of their medical education.",
    content: [
      "On November 5th, 2024, the Universidade Católica Timorense (UCT) proudly hosted its White Coat Ceremony in Chennai, marking a memorable milestone in the academic journey of its aspiring medical students. This significant event celebrated the students' symbolic transition from the classroom to the clinical phase of their medical education, as they donned their white coats for the very first time.",
      "In a heartfelt and dignified atmosphere, students stood before their parents, peers, and faculty members to take the Hippocratic Oath—pledging their dedication to ethical practice, compassion, and excellence in patient care. The ceremony served not only as a rite of passage but also as a solemn reminder of the responsibility that comes with the medical profession.",
      "The event was graced by the presence of distinguished guests, proud parents, and healthcare leaders, who shared words of wisdom and encouragement. Their inspiring messages highlighted the importance of empathy, integrity, and lifelong learning in the journey of becoming a successful healthcare professional.",
      "The White Coat Ceremony 2024 will remain a cherished memory for all attendees—a celebration of purpose, passion, and the promise of a bright future in medicine.",
    ],
  },
  {
    slug: "drug-awareness-program-at-uct",
    title: "Drug Awareness Program at UCT",
    category: "Student Life",
    date: "July 11, 2025",
    image: images.gallery[6].src,
    excerpt:
      "In alignment with its mission to educate responsible, ethical medical professionals, UCT hosted an impactful Drug Awareness Program on the dangers of substance abuse.",
    content: [
      "Empowering Students to Lead a Drug-Free Future. In alignment with its mission to educate responsible and ethical medical professionals, UCT hosted an impactful Drug Awareness Program to inform students about the dangers of substance abuse and addiction.",
      "The program emphasized the dual role of medical students as learners and future community health advocates, encouraging them to lead by example both on campus and in their future practice.",
    ],
  },
  {
    slug: "president-of-timor-leste-meets-indian-prime-minister",
    title: "President of Timor-Leste Meets Indian Prime Minister",
    category: "News",
    date: "July 11, 2025",
    image: images.gallery[3].src,
    excerpt:
      "The President of Timor-Leste, His Excellency Dr. José Ramos-Horta, paid an official visit to India from January 8–10, 2024, to attend the 10th Vibrant Gujarat Global Summit.",
    content: [
      "President of Timor-Leste Visits India – Strengthening Bilateral Ties. The President of Timor-Leste, His Excellency Dr. José Ramos-Horta, paid an official visit to India from January 8–10, 2024, to attend the 10th Vibrant Gujarat Global Summit held in Gandhinagar.",
      "This historic visit marked a significant moment in the growing bilateral relationship between Timor-Leste and India — a relationship that also underpins UCT's Indian-curriculum-aligned MBBS program and its strong Indian student community.",
    ],
  },
  {
    slug: "international-yoga-day-at-uct",
    title: "International Yoga Day at UCT",
    category: "Student Life",
    date: "July 11, 2025",
    image: images.gallery[7].src,
    excerpt:
      "UCT marked International Yoga Day with a vibrant celebration on campus, emphasizing physical health, mental well-being, and inner peace for future healthcare professionals.",
    content: [
      "A Celebration of Wellness, Balance, and Global Harmony. The Universidade Católica Timorense (UCT) marked International Yoga Day with a vibrant and meaningful celebration on campus, emphasizing the importance of physical health, mental well-being, and inner peace — essential qualities for aspiring medical professionals.",
      "The event began with a guided session open to students and faculty, reinforcing UCT's holistic approach to student wellness alongside rigorous academic training.",
    ],
  },
];

export const getNewsBySlug = (slug) => newsEvents.find((n) => n.slug === slug);
