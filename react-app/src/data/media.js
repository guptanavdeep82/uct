// Video + social highlights for the Gallery page. Thumbnails reuse the
// campus photo library by feature; each item links out to UCT's real
// YouTube channel / Instagram profile (see siteInfo.js).
import { images } from "./images";

export const videoMoments = [
  {
    title: "A Walk Through Our Campus",
    desc: "Take a virtual tour of UCT's classrooms, laboratories and campus grounds.",
    thumb: images.exterior[0],
  },
  {
    title: "Life in the Classroom",
    desc: "Lectures, seminars and the daily rhythm of medical study at UCT.",
    thumb: images.students[0],
  },
  {
    title: "Inside the Laboratories",
    desc: "Hands-on practicals in anatomy, physiology and clinical skill labs.",
    thumb: images.labs[2],
  },
  {
    title: "Student Life at UCT",
    desc: "A day in the life of students living and learning on campus in Díli.",
    thumb: images.students[8],
  },
  {
    title: "IMD Events",
    desc: "Community gatherings from the International MBBS Department.",
    thumb: images.imdEvents[4],
  },
  {
    title: "UCT Campus Events",
    desc: "Ceremonies, celebrations and moments that shape campus culture.",
    thumb: images.events[3],
  },
];

export const instagramHighlights = [
  images.students[1],
  images.exterior[1],
  images.labs[1],
  images.imdEvents[2],
  images.classrooms[1],
  images.events[2],
  images.labVisits[3],
  images.students[11],
];
