import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import FAQAccordion from "../../components/ui/FAQAccordion";
import Stats from "../../components/ui/Stats";
import CTASection from "../../components/ui/CTASection";
import { campusSections, getCampusSection } from "../../data/campusLife";

const section = getCampusSection("facilities");
const related = campusSections.filter((s) => s.key !== "facilities").slice(0, 3);

export default function Facilities() {
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
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Comfort & Convenience</span>
            <h2 className="section-head__title">Everything Handled On Campus</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{section.body}</p>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={section.secondary.image} alt={section.secondary.title} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)", paddingTop: "2.5rem" }}>
        <div className="container">
          <SectionHeading tag="On-Campus Amenities" title="Everything You Need, Close By" />
          <div className="card-grid card-grid--3">
            {section.amenities.map((a, i) => (
              <FeatureCard key={a.title} title={a.title} desc={a.desc} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      <Stats items={section.stats} />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Facilities Gallery" title="Life On Campus" />
          <div className="card-grid card-grid--3">
            {section.gallery.map((img, i) => (
              <div key={img} className="img-reveal" data-animate="fade-up" data-delay={i * 90}>
                <img src={img} alt="Campus facilities at UCT" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="FAQ" title="Facilities Questions" />
          <FAQAccordion items={section.faqs} />
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
