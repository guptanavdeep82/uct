import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import AdmissionSteps from "../../components/ui/AdmissionSteps";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import {
  scholarshipIntro,
  scholarshipHighlights,
  scholarshipEligibility,
  scholarshipSteps,
} from "../../data/admissions";

const scholarshipFaq = [
  {
    q: "How many scholarship seats does UCT offer?",
    a: "UCT offers 100% tuition fee scholarships to 29 deserving students — one from each state of India — as stated on the official university website.",
  },
  {
    q: "What documents are required for scholarship consideration?",
    a: "Applicants typically need their 10th grade marksheet, 12th grade marksheet and NEET scorecard.",
  },
  {
    q: "Is the scholarship based on donation or payment?",
    a: "No. UCT states there are no donation or hidden charges. Scholarship offers are merit-based through the admission review process.",
  },
];

export default function Scholarship() {
  return (
    <>
      <Seo
        title="Scholarships"
        description="Learn about UCT's 100% tuition fee scholarship for selected Indian students — eligibility, benefits and how to apply."
        path="/admissions/scholarship"
      />
      <InnerPageHero
        title="Scholarships at UCT"
        description="Merit-based support for deserving students — including 100% tuition fee scholarships for selected candidates."
        image={images.hero.ceremony}
        trail={[{ label: "Admissions", path: "/admissions" }]}
        actions={<HeroApplyButton label="Apply for Scholarship" />}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Scholarship Overview</span>
            <h2 className="section-head__title">Recognising Merit & Commitment</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{scholarshipIntro}</p>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={images.news.whiteCoat} alt="UCT students at White Coat Ceremony" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Benefits" title="What Scholarship Recipients Gain" />
          <div className="card-grid card-grid--4">
            {scholarshipHighlights.map((item, i) => (
              <FeatureCard key={item} title={item} desc="" delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Eligibility</span>
            <h2 className="section-head__title">Required Documents</h2>
            <ul className="tick-list" style={{ marginTop: "1.4rem" }}>
              {scholarshipEligibility.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-animate="fade-right">
            <SectionHeading tag="How to Apply" title="Application Process" />
            <AdmissionSteps
              steps={scholarshipSteps.map((s) => ({ title: s.title, desc: s.desc }))}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="FAQ" title="Scholarship Questions" />
          <FAQAccordion items={scholarshipFaq} />
        </div>
      </section>

      <CTASection
        title="Ready to Apply for a Scholarship?"
        desc="Submit your enquiry with academic documents — our team will guide you through shortlisting."
        primary={{ label: "Submit Scholarship Enquiry", to: "/admissions/admission-enquiry" }}
      />
    </>
  );
}
