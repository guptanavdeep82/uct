import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Stats from "../../components/ui/Stats";
import Timeline from "../../components/ui/Timeline";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { clinicalDepartments, hospitalStats, hospitalSupport, hospitalsIntro, trainingPathway } from "../../data/hospitals";

export default function Hospitals() {
  return (
    <>
      <Seo
        title="Hospitals & Clinical Training"
        description="Clinical hospital training at UCT — 10+ hospital tie-ups, early clinical exposure, daily shuttle transport and a one-year internship in Díli, Timor-Leste."
        path="/academics/hospitals"
      />
      <InnerPageHero
        title="Hospitals & Clinical Training"
        description="Real hospital exposure from the first professional year — supported by 10+ clinical tie-ups and daily campus-to-hospital transport."
        image={images.campus[4]}
        trail={[{ label: "Academics", path: "/academics" }]}
        actions={<HeroApplyButton />}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Clinical Network</span>
            <h2 className="section-head__title">Hospital Training Is Built Into Every Phase</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{hospitalsIntro}</p>
            <Link to="/campus-life/laboratories" className="btn btn--outline" style={{ marginTop: "1.4rem" }}>
              Explore Skill Labs First
            </Link>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={images.gallery[5].src} alt="Students in clinical and laboratory training at UCT" loading="lazy" />
          </div>
        </div>
      </section>

      <Stats items={hospitalStats} />

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Clinical Departments"
            title="Where Students Train"
            desc="Postings follow the official MBBS syllabus — medicine, surgery, pediatrics, obstetrics & gynecology, community medicine and allied subjects."
          />
          <div className="lab-bento">
            {clinicalDepartments.map((dept, i) => (
              <article key={dept.title} className="lab-bento__item" data-animate="fade-up" data-delay={i * 70}>
                <div className="lab-bento__media img-reveal">
                  <img src={dept.image} alt={dept.title} loading="lazy" />
                </div>
                <div className="lab-bento__body">
                  <h3>{dept.title}</h3>
                  <p>{dept.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Training Pathway" title="From Simulation to Internship" />
          <Timeline items={trainingPathway} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Student Support" title="How Clinical Days Are Organised" />
          <div className="card-grid card-grid--2">
            {hospitalSupport.map((item, i) => (
              <article key={item.title} className="feature-card" data-animate="fade-up" data-delay={i * 90}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="See Clinical Training for Yourself" desc="Ask admissions how hospital postings, transport and internship are organised for the current intake." />
    </>
  );
}
