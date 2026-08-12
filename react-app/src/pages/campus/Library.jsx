import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import AdmissionSteps from "../../components/ui/AdmissionSteps";
import Stats from "../../components/ui/Stats";
import TiltCard from "../../components/ui/TiltCard";
import CTASection from "../../components/ui/CTASection";
import { campusSections, getCampusSection } from "../../data/campusLife";

const section = getCampusSection("library");
const related = campusSections.filter((s) => s.key !== "library").slice(0, 3);

export default function Library() {
  return (
    <>
      <Seo title={section.title} description={section.summary} path={section.path} />
      <InnerPageHero
        title={section.title}
        description={section.summary}
        image={section.image}
        trail={[{ label: "Campus Life", path: "/campus-life" }]}
      />

      <section className="quote-band" aria-label="Library philosophy">
        <div className="container quote-band__inner" data-animate="fade-up">
          <blockquote>&ldquo;A quiet, well-stocked library is where medical knowledge becomes medical confidence.&rdquo;</blockquote>
          <cite>UCT Central Library</cite>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-panel" data-animate="fade-left">
              <h3>What's Inside</h3>
              <p style={{ color: "var(--gray-500)", marginBottom: "1rem" }}>{section.body}</p>
              <ul className="tick-list">
                {section.points.map((point) => (
                  <li key={point}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="vision-panel vision-panel--mission" data-animate="fade-right">
              <TiltCard className="about-media-frame" maxTilt={8}>
                <img src={section.secondary.image} alt={section.secondary.title} loading="lazy" />
              </TiltCard>
              <h3 style={{ marginTop: "1.3rem" }}>{section.secondary.title}</h3>
              <p style={{ color: "var(--gray-500)" }}>{section.secondary.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <Stats items={section.stats} />

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="A Day at the Library" title="How Students Use the Library" />
          <AdmissionSteps steps={section.steps} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Library Gallery" title="A Space to Focus" />
          <div className="card-grid card-grid--3">
            {section.gallery.map((img, i) => (
              <div key={img} className="img-reveal" data-animate="fade-up" data-delay={i * 90}>
                <img src={img} alt="Students at the UCT library" loading="lazy" />
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
