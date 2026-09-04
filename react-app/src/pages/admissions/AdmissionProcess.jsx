import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import AdmissionSteps from "../../components/ui/AdmissionSteps";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { admissionSteps, admissionEnquiryFaq, mandatoryDocuments, medicalTests, notaryDocuments } from "../../data/admissions";

export default function AdmissionProcess() {
  return (
    <>
      <Seo
        title="Admission Process"
        description="Follow the official UCT MBBS admission process — from application and acceptance letter to document submission, fee payment and travel to Timor-Leste."
        path="/admissions/admission-process"
      />
      <InnerPageHero
        title="Admission Process"
        description="A clear, step-by-step pathway from enquiry to enrollment — based on the official UCT admission process."
        image={images.campus[4]}
        trail={[{ label: "Admissions", path: "/admissions" }]}
        actions={<HeroApplyButton label="Start Your Application" />}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="How to Join UCT"
            title="Your Path to Enrollment"
            desc="Five steps from UCT’s Official Guidelines — Admission Process 2025–2026."
          />
          <AdmissionSteps steps={admissionSteps} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading
            tag="Documentation"
            title="Mandatory Documents"
            desc="Submit all originals with 2 sets of colour Xerox copies. Names on medical documents must match the passport exactly."
          />
          <div className="card-grid card-grid--2">
            <article className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up">
              <h3>Document Checklist</h3>
              <ul className="tick-list" style={{ marginTop: "1rem" }}>
                {mandatoryDocuments.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <article className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up" data-delay="80">
                <h3>Notary Documents</h3>
                <ul className="tick-list" style={{ marginTop: "1rem" }}>
                  {notaryDocuments.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up" data-delay="120">
                <h3>Required Medical Tests</h3>
                <ul className="tick-list" style={{ marginTop: "1rem" }}>
                  {medicalTests.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Need Guidance?</span>
            <h2 className="section-head__title">Talk to an Admission Counsellor</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Our team helps with documents, acceptance letters, fee timelines and travel coordination for the
              student batch.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
              <Link to="/admissions/admission-enquiry" className="btn btn--primary">
                Admission Enquiry
              </Link>
              <Link to="/admissions/fees-structure" className="btn btn--outline">
                Fees Structure
              </Link>
            </div>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={images.welcomeMou} alt="UCT admission and campus guidance" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="FAQ" title="Admission Questions" />
          <FAQAccordion items={admissionEnquiryFaq} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
