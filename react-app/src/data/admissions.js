// Admission process & enquiry FAQ — sourced from https://www.uct.tl/admission-process
// and https://www.uct.tl/admission-enquiry. Do not alter the verified steps.
export const admissionSteps = [
  {
    title: "Application & Enrolment",
    items: [
      "Submit the admission form with a soft copy of initial documents",
      "Pay the application and enrolment fees",
    ],
  },
  {
    title: "NOA — Notice of Provisional Admission",
    items: [
      "The university verifies documents and payments",
      "A Notice of Admission (Provisional Confirmation) is issued to the student",
    ],
  },
  {
    title: "Document Submission",
    items: [
      "Submit originals plus 2 colour Xerox copies to the Documentation Department",
      "For the 2025–2026 cycle the published deadline was 15 October 2025 — confirm the current intake date with admissions",
    ],
  },
  {
    title: "Fee Payment",
    items: [
      "Pay tuition and registration fees to the University USD account",
      "Pay Documentation, Visa, Ticket & Other Services to the Indian account (plus 5% GST)",
      "After the transfer, submit a copy of the transaction receipt to the University Management Office",
    ],
  },
  {
    title: "Verification, White Coat & Travel",
    items: [
      "Only students who complete documentation and fee clearance are scheduled for travel",
      "White Coat Ceremony: Enrollment & Registration, Application, and Uniform with Medical Kit fees must be cleared",
      "Travel: all dues including First Year Tuition and Documentation, Visa, Ticket & Services must be cleared",
    ],
  },
];

export const mandatoryDocuments = [
  "Passport (student & parent — self attested)",
  "10th Mark Sheet",
  "12th Mark Sheet",
  "NEET Score Card",
  "NEET Admit Card",
  "Transfer Certificate",
  "Migration Certificate (for CBSE students)",
  "Passing Certificate (for CBSE students)",
  "Financial Affidavit (Rs.100 bond paper with notary)",
  "Bank Statement (6 months, signed by branch manager; minimum ₹2,00,000 closing balance)",
  "Police Clearance Certificate (from Passport Office only)",
  "Medical Fitness Certificate",
  "Medical Report & Tests",
  "Vaccination Certificate",
  "Aadhar Card (student & parent — self attested)",
  "Passport-size photos — white background: 5; red background: 10",
];

export const notaryDocuments = [
  "Passport copy",
  "10th marksheet printed on bond sheet",
  "12th marksheet printed on bond sheet",
  "PCC original (Passport Office, not a local police station)",
  "Medical Fitness Certificate original",
];

export const medicalTests = [
  "General Medical Report",
  "Medical Fitness Certificate",
  "Chest X-Ray (report + film — A4 size only)",
  "Hepatitis B (HBsAg)",
  "Total Blood Examination",
  "Routine Urinalysis Test",
  "Stool Examination / Fecalysis",
  "HIV Test",
  "VDRL Test",
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

// First-year figures from OFFICIAL GUIDELINES: ADMISSION PROCESS 2025–2026.
export const feeStructure = {
  note:
    "First-year amounts below are taken from UCT’s Official Guidelines for the 2025–2026 admission cycle. Later-year tuition, hostel and the current intake should be confirmed with the Admissions Office. Final credited amounts must match the exact payable figure; any shortfall from bank charges is treated as pending.",
  tuition: [
    { item: "First Year Tuition Fee", amount: "USD 6,200" },
    { item: "Enrollment & Registration Fee", amount: "USD 1,350" },
    { item: "Application Fee", amount: "USD 300" },
    { item: "Uniform with Medical Kit Fee", amount: "USD 180" },
  ],
  other: [
    { item: "Documentation, Visa, Ticket and Other Services", amount: "₹ 1,50,000 + 5% GST (Indian account)" },
    { item: "University Hostel (optional)", amount: "Contact Admissions Office for current rates" },
  ],
  schedule: [
    "Tuition-related fees are paid only to the University USD account.",
    "Documentation, Visa, Ticket & Services is paid to the Indian account with 5% GST.",
    "White Coat Ceremony requires Enrollment & Registration, Application, and Uniform with Medical Kit fees to be cleared.",
    "Travel requires all dues above, including First Year Tuition and Documentation, Visa, Ticket & Services.",
    "After payment, submit the transaction receipt to the University Management Office.",
  ],
};
