// Blog listing — real titles and slugs sourced from https://www.uct.tl/blog.
// Full article bodies were not available at fetch time, so each post carries
// structured placeholder sections ready to replace with verified full text.
import { images } from "./images";

const placeholderBody = (title) => [
  {
    type: "h2",
    text: "Overview",
  },
  {
    type: "p",
    text: `${title} — this article summarises key considerations for students and parents exploring medical education pathways connected to UCT and MBBS abroad. Replace this placeholder with the verified full article from the official UCT blog when available.`,
  },
  {
    type: "h2",
    text: "What to Keep in Mind",
  },
  {
    type: "p",
    text: "Always verify eligibility, documentation and intake timelines with the UCT Admissions Office. Regulations for licensing exams and recognition can change by country and year.",
  },
  {
    type: "h2",
    text: "Next Steps",
  },
  {
    type: "p",
    text: "If you are considering UCT, submit an admission enquiry or speak with a counsellor for guidance tailored to your academic background and preferred intake.",
  },
];

const blogImages = [
  images.campus[0],
  images.campus[1],
  images.campus[2],
  images.campus[3],
  images.campus[4],
  images.campus[5],
  images.news.holi,
  images.news.whiteCoat,
];

export const blogPosts = [
  {
    slug: "a-parents-guide-to-sending-your-child-for-mbbs-abroad",
    title: "A Parent's Guide to Sending Your Child for MBBS Abroad: Safety, Hostels, and Staying Connected",
    category: "Admissions",
    date: "2025",
    readingTime: "6 min read",
    author: "UCT Admissions",
    excerpt:
      "Practical guidance for parents on hostel safety, staying in touch, and what to check before sending a child abroad for MBBS.",
  },
  {
    slug: "timor-leste-the-story-and-history-of-a-nation",
    title: "Timor-Leste – The Story and History of a Nation",
    category: "Timor-Leste",
    date: "2025",
    readingTime: "7 min read",
    author: "UCT Editorial",
    excerpt:
      "A short introduction to Timor-Leste's history and culture — useful context for students considering studying medicine there.",
  },
  {
    slug: "how-to-study-mbbs-abroad-after-12th",
    title: "How to Study MBBS Abroad After 12th: Step-by-Step Guide, Eligibility, and Documents",
    category: "MBBS Abroad",
    date: "2025",
    readingTime: "8 min read",
    author: "UCT Admissions",
    excerpt:
      "A step-by-step overview of eligibility, documentation and the general process for studying MBBS abroad after 12th grade.",
  },
  {
    slug: "fmge-and-next-preparation-for-indian-students-studying-mbbs-abroad",
    title: "FMGE and NExT Preparation for Indian Students Studying MBBS Abroad",
    category: "Medical Education",
    date: "2025",
    readingTime: "6 min read",
    author: "UCT Academics",
    excerpt:
      "An overview of how Indian students studying MBBS abroad can prepare for licensing exams such as FMGE and NExT.",
  },
  {
    slug: "best-countries-for-mbbs-abroad-with-indian-food-and-safe-hostels-in-2025",
    title: "Best Countries for MBBS Abroad With Indian Food and Safe Hostels in 2025",
    category: "MBBS Abroad",
    date: "2025",
    readingTime: "7 min read",
    author: "UCT Editorial",
    excerpt:
      "A comparison of factors Indian students often weigh when choosing an MBBS-abroad destination, including food and hostel safety.",
  },
  {
    slug: "mbbs-vs-bams-vs-bhms-2025-guide",
    title: "MBBS vs BAMS vs BHMS: Choose Right in 2025",
    category: "Medical Education",
    date: "2025",
    readingTime: "5 min read",
    author: "UCT Academics",
    excerpt: "A general comparison guide to help students understand the differences between MBBS, BAMS and BHMS.",
  },
  {
    slug: "indian-students-choose-timor-leste-for-mbbs-at-uct",
    title: "Top 5 Reasons Indian Students Choose Timor-Leste for MBBS at UCT",
    category: "Student Life",
    date: "2025",
    readingTime: "5 min read",
    author: "UCT Student Life",
    excerpt:
      "A look at what draws Indian students to UCT — from the Indian-aligned curriculum to campus community and affordability.",
  },
  {
    slug: "study-mbbs-abroad-without-neet-in-2025",
    title: "Study MBBS Abroad Without NEET in 2025: A Complete Guide",
    category: "Admissions",
    date: "2025",
    readingTime: "6 min read",
    author: "UCT Admissions",
    excerpt:
      "General guidance on MBBS-abroad options and eligibility considerations for students exploring routes without a NEET score.",
  },
].map((post, i) => ({
  ...post,
  image: blogImages[i % blogImages.length],
  content: placeholderBody(post.title),
}));

export const blogCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export const getBlogBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
