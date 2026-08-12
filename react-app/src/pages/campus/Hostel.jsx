import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Stats from "../../components/ui/Stats";
import TiltCard from "../../components/ui/TiltCard";
import CTASection from "../../components/ui/CTASection";
import { campusSections, getCampusSection } from "../../data/campusLife";

const section = getCampusSection("hostel");
const related = campusSections.filter((s) => s.key !== "hostel").slice(0, 3);

export default function Hostel() {
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
          <SectionHeading tag="Home Away From Home" title="Secure, Comfortable Living" desc={section.body} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hostel-wings">
            {section.wings.map((wing, i) => (
              <TiltCard key={wing.title} className="hostel-wing" maxTilt={6} data-animate={i === 0 ? "fade-left" : "fade-right"}>
                <div className="hostel-wing__media img-reveal">
                  <img src={wing.image} alt={wing.title} loading="lazy" />
                </div>
                <div className="hostel-wing__body">
                  <h3>{wing.title}</h3>
                  <ul className="tick-list">
                    {wing.points.map((point) => (
                      <li key={point}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
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
            <Link to="/campus-life/facilities" className="btn btn--outline" style={{ marginTop: "1.5rem" }}>
              See Campus Facilities
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Hostel Gallery" title="Everyday Moments" />
          <div className="card-grid card-grid--3">
            {section.gallery.map((img, i) => (
              <div key={img} className="img-reveal" data-animate="fade-up" data-delay={i * 90}>
                <img src={img} alt="Hostel life at UCT" loading="lazy" />
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
