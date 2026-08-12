import Seo from "../components/ui/Seo";
import InnerPageHero from "../components/ui/InnerPageHero";
import SectionHeading from "../components/ui/SectionHeading";
import AccreditationCard from "../components/ui/AccreditationCard";
import FeatureCard from "../components/ui/FeatureCard";
import FAQAccordion from "../components/ui/FAQAccordion";
import CTASection from "../components/ui/CTASection";
import { images } from "../data/images";
import { accreditations, globalExams, accreditationFaq } from "../data/accreditation";

const whyMatters = [
  {
    title: "Global Mobility",
    desc: "Listings and recognitions help graduates pursue further study and licensing pathways in multiple countries, subject to each regulator's rules.",
  },
  {
    title: "Trust & Transparency",
    desc: "Students and families can verify recognitions through official directories and regulator websites.",
  },
  {
    title: "Quality Assurance",
    desc: "National and international bodies signal that UCT meets defined academic and institutional standards.",
  },
];

export default function Accreditation() {
  return (
    <>
      <Seo
        title="Accreditation"
        description="Verify UCT's recognition and accreditation — WDOMS, NMC, FAIMER, ECFMG, USMLE eligibility pathways and ANAAA."
        path="/accreditation"
      />
      <InnerPageHero
        title="Accreditation & Recognition"
        description="Institutional and program recognitions that support global pathways for UCT graduates — verified from official university sources."
        image={images.campus[5]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Accreditation Overview"
            title="Recognised for Global Medical Pathways"
            desc="The organisations below are listed on UCT's official accreditation page. Always confirm the latest status on each body's website."
          />
          <div className="card-grid card-grid--2">
            {accreditations.map((item, i) => (
              <AccreditationCard key={item.code} {...item} delay={(i % 2) * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Licensing Pathways" title="Exams Graduates May Pursue" />
          <div className="card-grid card-grid--4">
            {globalExams.map((exam, i) => (
              <FeatureCard key={exam} title={exam} desc="Subject to each country's current licensing requirements." delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Why It Matters" title="Why Accreditation Matters" />
          <div className="card-grid card-grid--3">
            {whyMatters.map((item, i) => (
              <FeatureCard key={item.title} title={item.title} desc={item.desc} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Verification" title="Official Logos & Links" />
          <div className="accred-badges" data-animate="fade-up">
            {images.accreditationLogos.map((src, i) => (
              <div className="accred-badge" key={src}>
                <img src={src} alt={`Accreditation badge ${i + 1}`} loading="lazy" />
                <span>Verified Body</span>
              </div>
            ))}
            {accreditations.slice(0, 3).map((a) => (
              <div className="accred-badge" key={a.code}>
                <span className="accred-card__monogram" aria-hidden="true" style={{ margin: "0 auto" }}>
                  {a.code.slice(0, 4)}
                </span>
                <span>{a.code}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="FAQ" title="Accreditation Questions" />
          <FAQAccordion items={accreditationFaq} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
