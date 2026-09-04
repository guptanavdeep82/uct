import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import ImageCard from "../../components/ui/ImageCard";
import { images } from "../../data/images";
import { academicsIntro, academicsPillars, faculty } from "../../data/curriculum";

import { collateralImages } from "../../data/officialCollateral";

const academicLinks = [
  { title: "MBBS Program", desc: "54 months of academic training plus a 12-month CRMI internship, taught in English.", image: images.campus[2], to: "/academics/mbbs-program" },
  { title: "Curriculum", desc: "CBME syllabus, FMGL 2021 alignment and first-year textbooks.", image: collateralImages.cbme, to: "/academics/curriculum" },
  { title: "Family & Community Medicine", desc: "Family Adoption Programme across 5 villages under the NMC CBME curriculum.", image: collateralImages.familyAdoption, to: "/academics/family-community-medicine" },
  { title: "National Lab Report", desc: "INSPTL posting in Bidau, Díli — microbiology, TB, molecular biology and more.", image: images.gallery[7].src, to: "/academics/national-lab-report" },
  { title: "Faculty List", desc: "Named academic heads and an international teaching community.", image: images.hero.students, to: "/academics/faculty" },
  { title: "Hospitals", desc: "Clinical tie-ups, early exposure and a one-year CRMI internship.", image: images.campus[4], to: "/academics/hospitals" },
];

export default function Academics() {
  return (
    <>
      <Seo
        title="Academics"
        description="Academic excellence at Universidade Católica Timorense — MBBS program structure, clinical training, faculty and research focus."
        path="/academics"
      />
      <InnerPageHero
        title="Academics at UCT"
        description="Shaping the future of global healthcare through a rigorous, Indian-curriculum-aligned MBBS program."
        image={images.campus[1]}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Academic Excellence</span>
            <h2 className="section-head__title">A Curriculum Built for Global Careers</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{academicsIntro}</p>
            <Link to="/academics/mbbs-program" className="btn btn--primary" style={{ marginTop: "1.4rem" }}>
              Explore the MBBS Program
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={images.campus[2]} alt="Academic session at UCT" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading tag="Explore Academics" title="Curriculum, Faculty, Hospitals & More" />
          <div className="card-grid card-grid--3">
            {academicLinks.map((item, i) => (
              <ImageCard key={item.to} {...item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Academic Philosophy" title="Shaping the Future of Global Healthcare" />
          <div className="card-grid card-grid--4">
            {academicsPillars.map((p, i) => (
              <FeatureCard key={p.title} title={p.title} desc={p.desc} delay={(i % 4) * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Our Faculty" title="Experienced, International Medical Educators" />
          <div className="card-grid card-grid--4">
            {faculty.map((f, i) => (
              <div key={f.name} className="feature-card" style={{ textAlign: "center" }} data-animate="fade-up" data-delay={i * 90}>
                <span
                  className="accred-card__monogram"
                  style={{ margin: "0 auto 1rem" }}
                  aria-hidden="true"
                >
                  {f.name.split(" ").filter((w) => w !== "Dr.").slice(0, 2).map((w) => w[0]).join("")}
                </span>
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/academics/faculty" className="btn btn--outline">
              View Full Faculty List
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
