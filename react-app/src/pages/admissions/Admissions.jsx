import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import AdmissionSteps from "../../components/ui/AdmissionSteps";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { admissionSteps, admissionEnquiryFaq } from "../../data/admissions";

const whyStudy = [
  { title: "Indian Curriculum", desc: "Modelled on the Indian medical education system, aligned with NMC guidelines." },
  { title: "English Medium", desc: "The entire program is taught in fluent English." },
  { title: "Global Recognition", desc: "Accredited by WDOMS, NMC, FAIMER, ECFMG and ANAAA." },
  { title: "No Donation", desc: "A transparent admission process with no hidden charges." },
];

export default function Admissions() {
  return (
    <>
      <Seo
        title="Admissions"
        description="Start your MBBS admission journey at UCT — admission process, fees, scholarships and enquiry support."
        path="/admissions"
      />
      <InnerPageHero
        title="Admissions"
        description="Your roadmap to studying MBBS at UCT — simple, transparent, and fully supported from enquiry to enrollment."
        image={images.campus[4]}
        actions={<HeroApplyButton />}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Why Study at UCT" title="A Trusted Choice for Global Medical Education" />
          <div className="card-grid card-grid--4">
            {whyStudy.map((item, i) => (
              <FeatureCard key={item.title} title={item.title} desc={item.desc} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Admission Overview" title="How to Apply" desc="From enquiry to enrollment — five clear steps." />
          <AdmissionSteps steps={admissionSteps.map((s) => ({ title: s.title, items: s.items.slice(0, 3) }))} />
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/admissions/admission-process" className="btn btn--primary btn--lg">
              View Full Admission Process
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Fees & Scholarships" title="Affordable, Transparent, Merit-Rewarding" />
          <div className="split" style={{ alignItems: "stretch" }}>
            <div className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up">
              <h3>Fees Structure</h3>
              <p>Understand tuition, hostel and other charges, and the payment schedule.</p>
              <Link to="/admissions/fees-structure" className="btn btn--outline" style={{ marginTop: "1.2rem" }}>
                View Fees Structure
              </Link>
            </div>
            <div className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up" data-delay="90">
              <h3>100% Scholarship</h3>
              <p>29 fully-funded seats — one for each Indian state, awarded purely on merit.</p>
              <Link to="/admissions/scholarship" className="btn btn--outline" style={{ marginTop: "1.2rem" }}>
                Explore Scholarships
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Admission Support" title="Frequently Asked Questions" />
          <FAQAccordion items={admissionEnquiryFaq} />
        </div>
      </section>

      <CTASection secondary={{ label: "Admission Enquiry", to: "/admissions/admission-enquiry" }} />
    </>
  );
}
