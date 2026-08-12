// Video + social highlights for the Gallery page. Thumbnails reuse the
// approved campus asset library; each item links out to UCT's real
// YouTube channel / Instagram profile (see siteInfo.js) rather than
// embedding fabricated video/post IDs.
import { images } from "./images";

export const videoMoments = [
  {
    title: "A Walk Through Our Campus",
    desc: "Take a virtual tour of UCT's classrooms, laboratories and hostel blocks.",
    thumb: images.campusVideos[0],
  },
  {
    title: "White Coat Ceremony",
    desc: "Students take their proud first step into clinical training.",
    thumb: images.campusVideos[1],
  },
  {
    title: "Holi Celebrations at UCT",
    desc: "Colour, music and culture bring the whole campus together.",
    thumb: images.campusVideos[2],
  },
  {
    title: "Life in the Hostel",
    desc: "A day in the life of students living on campus in Díli.",
    thumb: images.campusVideos[3],
  },
  {
    title: "Annual Sports Fest",
    desc: "Football, athletics and team spirit at UCT's biggest sporting event.",
    thumb: images.campusVideos[4],
  },
  {
    title: "Meet Our Students",
    desc: "Real stories from the international student community at UCT.",
    thumb: images.campusVideos[5],
  },
];

export const instagramHighlights = [
  images.gallery[1].src,
  images.gallery[10].src,
  images.gallery[5].src,
  images.news.holi,
  images.gallery[8].src,
  images.gallery[6].src,
  images.news.whiteCoat,
  images.gallery[3].src,
];
