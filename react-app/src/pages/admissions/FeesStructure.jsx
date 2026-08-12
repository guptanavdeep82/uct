import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeeTable from "../../components/ui/FeeTable";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { feeStructure, feesFaq } from "../../data/fees";

export default function FeesStructure() {
  return (
    <>
      <Seo
        title="MBBS Fees Structure"
        description="UCT MBBS fee overview — tuition payment schedule, hostel charges and how to request the current verified fee structure."
        path="/admissions/fees-structure"
      />
      <InnerPageHero
        title="Fees Structure"
        description="A transparent overview of how tuition and related charges are structured at UCT. Exact amounts are confirmed by the Admissions Office."
        image={images.campus[1]}
        trail={[{ label: "Admissions", path: "/admissions" }]}
        actions={<HeroApplyButton label="Request Fee Details" />}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Fee Overview" title="Transparent & Intake-Based" desc={feeStructure.note} />
          <div className="notice-banner" data-animate="fade-up">
            <strong>Important:</strong> Exact tuition and hostel figures are not published as fixed amounts on
            this page. Contact admissions for the current, verified fee structure for the{" "}
            <Link to="/admissions/admission-enquiry">active intake</Link>.
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <FeeTable title="Tuition Fee" rows={feeStructure.tuition} />
          <FeeTable title="Other Charges" rows={feeStructure.other} />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Payment Schedule</span>
            <h2 className="section-head__title">When Fees Are Due</h2>
            <ul className="tick-list" style={{ marginTop: "1.4rem" }}>
              {feeStructure.schedule.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-animate="fade-right" className="feature-card" style={{ textAlign: "left" }}>
            <h3>Additional Expenses</h3>
            <p>
              Living costs, personal travel outside batch arrangements, and optional activities are typically
              managed by students and families separately. Ask our counsellors for a practical budget checklist
              for your intake.
            </p>
            <Link to="/admissions/admission-enquiry" className="btn btn--outline" style={{ marginTop: "1.2rem" }}>
              Download / Request Fee Structure
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="FAQ" title="Fees Questions" />
          <FAQAccordion items={feesFaq} />
        </div>
      </section>

      <CTASection secondary={{ label: "Explore Scholarships", to: "/admissions/scholarship" }} />
    </>
  );
}
