import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Stats from "../../components/ui/Stats";
import TiltCard from "../../components/ui/TiltCard";
import CTASection from "../../components/ui/CTASection";
import { campusSections, getCampusSection } from "../../data/campusLife";

const section = getCampusSection("laboratories");
const related = campusSections.filter((s) => s.key !== "laboratories").slice(0, 3);

export default function Laboratories() {
  return (
    <>
      <Seo title={section.title} description={section.summary} path={section.path} />
      <InnerPageHero
        title={section.title}
        description={section.summary}
        image={section.image}
        trail={[{ label: "Campus Life", path: "/campus-life" }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 760, textAlign: "center", marginInline: "auto" }}>
          <SectionHeading tag="Practical Medicine" title="Real Skills, Guided by Experts" desc={section.body} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="lab-bento">
            {section.labTypes.map((lab, i) => (
              <TiltCard key={lab.title} className="lab-bento__item" maxTilt={6} data-animate="fade-up" data-delay={i * 80}>
                <div className="lab-bento__media img-reveal">
                  <img src={lab.image} alt={lab.title} loading="lazy" />
                </div>
                <div className="lab-bento__body">
                  <h3>{lab.title}</h3>
                  <p>{lab.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <Stats items={section.stats} />

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">{section.secondary.tag}</span>
            <h2 className="section-head__title">{section.secondary.title}</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{section.secondary.desc}</p>
            <Link to="/campus-life/infrastructure" className="btn btn--outline" style={{ marginTop: "1.5rem" }}>
              See Our Infrastructure
            </Link>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={section.secondary.image} alt={section.secondary.title} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Lab Gallery" title="Hands-On Learning in Action" />
          <div className="card-grid card-grid--3">
            {section.gallery.map((img, i) => (
              <div key={img} className="img-reveal" data-animate="fade-up" data-delay={i * 90}>
                <img src={img} alt="Students in the laboratory at UCT" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Explore More" title="More of Campus Life at UCT" />
          <div className="about-explore">
            {related.map((item) => (
              <Link key={item.key} to={item.path} className="about-explore__card" data-animate="fade-up">
                <div className="about-explore__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="about-explore__body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <span>Read more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
