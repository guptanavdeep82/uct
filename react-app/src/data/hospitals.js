// Clinical training & hospital network — sourced from official UCT pages
// (accreditation stats, MBBS program, campus facilities) and verified
// public reporting. Do not invent named partner hospitals.
import { images } from "./images";

export const hospitalsIntro =
  "Hands-on hospital training sits at the centre of UCT's MBBS program. Students begin early clinical exposure in the first professional year, continue structured postings through every later phase, and complete a one-year compulsory internship. Official university materials list 10+ clinical hospital tie-ups, with daily shuttle transport between campus and hospital postings in Díli.";

export const hospitalStats = [
  { value: "10+", label: "Clinical Hospital Tie-ups" },
  { value: "Year 1", label: "Early Clinical Exposure" },
  { value: "Daily", label: "Hospital Shuttle" },
  { value: "1 Year", label: "Compulsory Internship" },
];

export const clinicalDepartments = [
  {
    title: "General Medicine",
    desc: "Bedside teaching and clinical postings that run from the second professional year through internship.",
    image: images.labs[0],
  },
  {
    title: "Surgery & Allied",
    desc: "Hospital-based training in general surgery, orthopedics, ENT and ophthalmology.",
    image: images.labVisits[1],
  },
  {
    title: "Pediatrics",
    desc: "Child-health rotations in the third professional years, building towards internship.",
    image: images.labs[5],
  },
  {
    title: "Obstetrics & Gynecology",
    desc: "Women's-health postings as part of the later professional phases and internship year.",
    image: images.labVisits[5],
  },
  {
    title: "Community Medicine",
    desc: "Family Adoption Program, community visits and public-health postings from Phase 1.",
    image: images.imdEvents[8],
  },
  {
    title: "Psychiatry & Allied",
    desc: "Medicine-allied postings including psychiatry, dermatology and respiratory medicine.",
    image: images.labs[9],
  },
];

export const trainingPathway = [
  {
    year: "01",
    title: "Simulation First",
    desc: "Skill labs and high-fidelity simulation prepare students for patient care in a controlled environment before hospital postings.",
  },
  {
    year: "02",
    title: "Early Clinical Exposure",
    desc: "The first professional year already includes ECE, community medicine and the Family Adoption Program.",
  },
  {
    year: "03",
    title: "Structured Postings",
    desc: "Clinical postings continue through Phases 2 and 3 in medicine, surgery, pediatrics, obstetrics & gynecology and allied subjects.",
  },
  {
    year: "04",
    title: "Internship Year",
    desc: "A compulsory 12-month internship completes the 5.5-year program, with licensing eligibility in Timor-Leste after internship.",
  },
];

export const hospitalSupport = [
  {
    title: "National Laboratory (INSPTL)",
    desc: "Students complete a one-week posting at the National Laboratory, INSPTL, Bidau, Díli — covering microbiology, tuberculosis, molecular biology, biochemistry and pathology.",
  },
  {
    title: "Daily Hospital Transport",
    desc: "UCT arranges daily shuttle service to hospitals and around Díli for clinical postings.",
  },
  {
    title: "Simulation Before the Ward",
    desc: "Clinical skill labs and WHO-supported simulation equipment help students practise procedures before real patient care.",
  },
  {
    title: "Faculty-Supervised Rotations",
    desc: "Hospital postings are guided by experienced faculty so students build confidence with real cases, not textbooks alone.",
  },
];
