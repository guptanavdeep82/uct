// General FAQ — reused verbatim from the approved homepage FAQ section.
import { admissionEnquiryFaq } from "./admissions";
import { feesFaq } from "./fees";
import { accreditationFaq } from "./accreditation";

export const generalFaq = [
  {
    q: "How long is the MBBS program at UCT?",
    a: "The programme is 54 months of academic training plus a 12-month Compulsory Rotatory Medical Internship (CRMI), as set out in UCT’s FMGL 2021 materials.",
  },
  {
    q: "Is the program suitable for Indian students?",
    a: "Yes. UCT follows the Indian Medical Curriculum aligned with NMC standards and is taught fully in English, helping students prepare for FMGE, USMLE and PLAB.",
  },
  {
    q: "What are the eligibility requirements?",
    a: "Applicants need 10+2 with Physics, Chemistry and Biology. Indian students must also be NEET-qualified as per NMC regulations.",
  },
  {
    q: "Can graduates practice medicine after the program?",
    a: "Graduates can be licensed to practice in Timor-Leste directly after their internship — no separate licensing exam. For other countries, graduates take the respective licensing exam (e.g. FMGE for India).",
  },
  {
    q: "Is accommodation available on campus?",
    a: "Yes. UCT provides safe hostel and student housing options with campus shuttle transport, plus dedicated support for international students.",
  },
  {
    q: "How do I apply for admission?",
    a: "Submit the enquiry form below or call +670 7373 7499 (India toll-free: 1800 208 9848). Our counsellors guide you through documents, offer letter and visa.",
  },
];

export const campusFaq = [
  {
    q: "Is hostel accommodation available on campus?",
    a: "Yes. UCT provides secure, air-conditioned on-campus hostels with separate wings, 24/7 security, Indian-style food and round-the-clock warden support.",
  },
  {
    q: "Is Indian food available?",
    a: "Yes. The central cafeteria and hostel mess halls serve Indian-style food daily.",
  },
  {
    q: "Is there transport to hospitals?",
    a: "Yes. UCT arranges daily shuttle transportation to hospitals and around Díli for clinical postings.",
  },
];

export const academicsFaq = [
  {
    q: "What is the MBBS curriculum based on?",
    a: "UCT implements Competency-Based Medical Education (CBME) and delivers an MBBS programme aligned with NMC FMGL Regulations, 2021 — 54 months of academic training plus a 12-month CRMI internship, taught fully in English.",
  },
  {
    q: "What is the Family Adoption Programme?",
    a: "It is a landmark initiative under the NMC CBME curriculum. Students form partnerships with families across 5 villages, focusing on preventive care and health education from the first professional year.",
  },
  {
    q: "Do students train at the National Laboratory?",
    a: "Yes. The International MBBS Programme includes a one-week posting at the National Laboratory (INSPTL) in Bidau, Díli, covering microbiology, tuberculosis, molecular biology, biochemistry and pathology.",
  },
  {
    q: "When does hospital training begin?",
    a: "Early Clinical Exposure and the Family Adoption Program begin in the first professional year. Structured clinical postings continue through later phases, ending with a one-year CRMI internship.",
  },
  {
    q: "Who teaches at UCT?",
    a: "Classes are led by medical educators from India, the USA, Cuba and Timor-Leste, including named heads of anatomy, physiology, biochemistry and community medicine.",
  },
];

export const faqGroups = [
  { id: "general", label: "General", items: generalFaq },
  { id: "admissions", label: "Admissions", items: admissionEnquiryFaq },
  { id: "fees", label: "Fees & Scholarships", items: feesFaq },
  { id: "academics", label: "Academics", items: academicsFaq },
  { id: "campus", label: "Campus Life", items: campusFaq },
  { id: "accreditation", label: "Accreditation", items: accreditationFaq },
];
