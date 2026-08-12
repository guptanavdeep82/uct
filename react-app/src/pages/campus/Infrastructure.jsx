import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import Stats from "../../components/ui/Stats";
import GalleryGrid from "../../components/ui/GalleryGrid";
import CTASection from "../../components/ui/CTASection";
import { campusSections, getCampusSection } from "../../data/campusLife";

const section = getCampusSection("infrastructure");
const related = campusSections.filter((s) => s.key !== "infrastructure").slice(0, 3);

export default function Infrastructure() {
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
          <SectionHeading tag="Campus Life" title="A Campus Built for Modern Medicine" desc={section.body} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card-grid card-grid--3">
            {section.features.map((f, i) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      <Stats items={section.stats} />

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container split split--reverse">
          <div className="split__media img-reveal" data-animate="fade-left">
            <img src={section.secondary.image} alt={section.secondary.title} loading="lazy" />
          </div>
          <div data-animate="fade-right">
            <span className="section-head__tag">{section.secondary.tag}</span>
            <h2 className="section-head__title">{section.secondary.title}</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{section.secondary.desc}</p>
            <Link to="/campus-life/laboratories" className="btn btn--outline" style={{ marginTop: "1.5rem" }}>
              Explore Our Laboratories
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Campus Gallery" title="Infrastructure in Pictures" desc="Tap any photo to view it full-screen." />
          <GalleryGrid items={section.gallery} />
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
