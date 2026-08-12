import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Timeline from "../../components/ui/Timeline";
import Stats from "../../components/ui/Stats";
import CTASection from "../../components/ui/CTASection";
import { campusSections, getCampusSection } from "../../data/campusLife";

const section = getCampusSection("sports");
const related = campusSections.filter((s) => s.key !== "sports").slice(0, 3);

export default function Sports() {
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
          <SectionHeading tag="Beyond the Classroom" title="Confidence, Creativity & Teamwork" desc={section.body} />
        </div>
      </section>

      <Stats items={section.stats} />

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Campus Activity Guide" title="Sports, Games & Clubs at UCT" />
          <Timeline items={section.timeline} />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">{section.secondary.tag}</span>
            <h2 className="section-head__title">{section.secondary.title}</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{section.secondary.desc}</p>
            <Link to="/campus-life/life-of-indian-students" className="btn btn--outline" style={{ marginTop: "1.5rem" }}>
              Life of Indian Students
            </Link>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={section.secondary.image} alt={section.secondary.title} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Gallery" title="Moments Beyond the Classroom" />
          <div className="card-grid card-grid--3">
            {section.gallery.map((img, i) => (
              <div key={img} className="img-reveal" data-animate="fade-up" data-delay={i * 90}>
                <img src={img} alt="Sports and extracurriculars at UCT" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
