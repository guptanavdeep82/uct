import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import AdmissionSteps from "../../components/ui/AdmissionSteps";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { admissionSteps, admissionEnquiryFaq } from "../../data/admissions";

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
            desc="Five verified steps from the official UCT admission process."
          />
          <AdmissionSteps steps={admissionSteps} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
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
