// Admission process & enquiry FAQ — sourced from https://www.uct.tl/admission-process
// and https://www.uct.tl/admission-enquiry. Do not alter the verified steps.
export const admissionSteps = [
  {
    title: "Submit Application",
    items: [
      "Submit your high school certificates (10th & 12th)",
      "Provide a scanned copy of your passport",
      "Attach a recent passport-size photograph",
    ],
  },
  {
    title: "Acceptance Letter",
    items: [
      "Within 2 weeks of applying, the Admission Review Committee will issue an acceptance letter",
      "You are required to pay 40% of the tuition fee as an advance to confirm your seat",
    ],
  },
  {
    title: "Submit Your Documents",
    items: [
      "Original Passport",
      "10th & 12th Marksheet",
      "Transfer Certificate / Leaving Certificate",
      "NEET Hall Ticket & Score-Card",
      "Birth Certificate",
      "Police Clearance Certificate (PCC)",
      "Medical Reports & Fitness Certificate",
      "Financial Affidavit and Self Declaration Affidavit",
      "20 recent passport photos (red background)",
      "10 recent passport photos (white background)",
    ],
  },
  {
    title: "Pay the Balance Fee",
    items: [
      "After document review (approx. 1 month), pay the remaining tuition fee",
      "Accommodation fee (if opting for university hostel)",
      "Flight ticket charges",
    ],
  },
  {
    title: "Fly To Timor-Leste",
    items: [
      "The Indian Admission Office confirms your travel schedule",
      "Flight bookings are made for the entire student batch",
      "Airport pickup and drop-off arranged by the university",
    ],
  },
];

export const admissionEnquiryFaq = [
  {
    q: "I'm still waiting for my 12th results. Can I apply?",
    a: "Yes. You can apply with your predicted grades or provisional marks. Final admission is confirmed after submission of original marksheets.",
  },
  {
    q: "Is NEET required for admission?",
    a: "Yes, for Indian students. NEET qualification is mandatory for eligibility to study MBBS abroad and for future registration in India.",
  },
  {
    q: "I'm from a different country. Can I apply?",
    a: "Absolutely. International students with equivalent 12th-grade qualifications (Science background) are welcome.",
  },
  {
    q: "What stream is required in 12th?",
    a: "Science stream with Biology. You must have studied Physics, Chemistry, and Biology in 12th grade.",
  },
  {
    q: "Is there any age limit?",
    a: "Yes. Applicants must be at least 17 years old at the time of admission.",
  },
];

export const scholarshipHighlights = [
  "100% Tuition Fee Waiver for Top Students",
  "Indian Curriculum with Global Recognition",
  "Safe, Student-Centered Campus Life",
  "No Donation or Hidden Charges",
];

export const scholarshipEligibility = [
  "10th Grade Marksheet",
  "12th Grade Marksheet",
  "NEET Scorecard",
];

export const scholarshipSteps = [
  { title: "Prepare Your Documents", desc: "Gather your 10th and 12th marksheets and NEET scorecard." },
  { title: "Submit Your Application", desc: "Complete the scholarship enquiry form with accurate details." },
  { title: "Get Shortlisted", desc: "Our admission review committee evaluates merit-based applications." },
  { title: "Scholarship Offer", desc: "Selected candidates receive a formal scholarship offer letter." },
];

export const scholarshipIntro =
  "UCT is the only university in Timor-Leste offering a 100% tuition fee scholarship for selected students. With an Indian curriculum, English-medium instruction, clinical exposure from Year 1, and a student-friendly campus, UCT is designed to deliver world-class medical education while appreciating talent and commitment. UCT proudly offers 100% tuition fee scholarships to 29 deserving students — one from each state of India.";

// Fees are not published on the public UCT website at the time of writing.
// This structure is intentionally editable — replace `amount` values with
// verified figures from the Admissions Office before publishing.
export const feeStructure = {
  note:
    "Exact tuition and hostel fees are confirmed directly by the UCT Admissions Office and may vary by intake year and scholarship eligibility. Contact our counsellors for the current, verified fee structure.",
  tuition: [
    { item: "MBBS Tuition Fee — Confirmation Advance", amount: "40% of total tuition (on acceptance letter)" },
    { item: "MBBS Tuition Fee — Balance", amount: "Payable after document verification (~1 month later)" },
  ],
  other: [
    { item: "University Hostel (optional)", amount: "Contact Admissions Office for current rates" },
    { item: "Flight Ticket Charges", amount: "Coordinated with the Indian Admission Office per batch" },
    { item: "Documentation / Visa Support", amount: "Included in admission support services" },
  ],
  schedule: [
    "40% advance on receiving the acceptance letter to confirm your seat",
    "Balance tuition fee after document verification (approx. 1 month)",
    "Hostel and flight charges settled before the confirmed travel date",
  ],
};
