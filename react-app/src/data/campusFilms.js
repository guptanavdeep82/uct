import { images } from "./images";

const src = (file) => `https://api.medicine.getmyuniversity.com/public/uctvideos/${file}`;

// Official UCT campus films (portrait student reels). Play one at a time —
// several files are large, so the player must not preload the full set.
export const campusFilms = [
  {
    id: "a1",
    src: src("a1.mp4"),
    thumb: images.campusVideos[0],
    title: "In the Simulation Lab",
    desc: "Clinical skills, mannequins and bedside training on campus.",
  },
  {
    id: "a2",
    src: src("a2.mp4"),
    thumb: images.campusVideos[1],
    title: "A Voice from Campus",
    desc: "A student in white coat, speaking from the grounds in Díli.",
  },
  {
    id: "a3",
    src: src("a3.mp4"),
    thumb: images.campusVideos[2],
    title: "Inside the Library",
    desc: "Study spaces and the academic rhythm of UCT.",
  },
  {
    id: "a4",
    src: src("a4.mp4"),
    thumb: images.campusVideos[3],
    title: "On Campus in Díli",
    desc: "Walk the grounds with students between classes.",
  },
  {
    id: "a5",
    src: src("a5.mp4"),
    thumb: images.campusVideos[4],
    title: "Study Hours",
    desc: "Textbooks, stethoscopes and everyday MBBS life.",
  },
  {
    id: "a6",
    src: src("a6.mp4"),
    thumb: images.campusVideos[5],
    title: "Students Together",
    desc: "The international cohort, in coat, in the library stacks.",
  },
];
