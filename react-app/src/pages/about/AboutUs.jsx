import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { aboutOverview } from "../../data/about";

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Universidade Católica Timorense (UCT) — a Catholic medical university in Díli, Timor-Leste offering an Indian-curriculum-aligned MBBS program."
        path="/about-us"
      />
      <InnerPageHero
        title="About Universidade Católica Timorense"
        description="The first Catholic university in Timor-Leste, founded to deliver world-class medical education rooted in academic excellence, ethics and Catholic values."
        image={images.campus[0]}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Our Story</span>
            <h2 className="section-head__title">Welcome to UCT</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{aboutOverview.intro}</p>
            <p style={{ marginTop: "0.9rem", color: "var(--gray-500)" }}>{aboutOverview.body}</p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
              <Link to="/about-us/overview" className="btn btn--primary">
                Read Full Overview
              </Link>
              <Link to="/about-us/vision-mission" className="btn btn--outline">
                Our Vision & Mission
              </Link>
            </div>
          </div>
          <TiltCard className="about-media-frame" data-animate="fade-right" maxTilt={9}>
            <img src={images.welcomeMou} alt="UCT leadership at an official ceremony" loading="lazy" />
          </TiltCard>
        </div>

        <div className="container">
          <div className="about-facts">
            {aboutOverview.facts.map((fact, i) => (
              <TiltCard key={fact.label} className="about-fact" data-animate="fade-up" data-delay={i * 70} maxTilt={6}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="What We Stand For" title="Our Values" desc="Four pillars that shape teaching, campus culture and the doctors we form." />
          <div className="card-grid card-grid--4">
            {aboutOverview.pillars.map((v, i) => (
              <TiltCard key={v.title} maxTilt={7}>
                <FeatureCard title={v.title} desc={v.desc} delay={i * 80} />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band" aria-label="University motto">
        <div className="container quote-band__inner" data-animate="fade-up">
          <blockquote>“Educare in Veritate · Ad Servire — to educate in truth, and to serve.”</blockquote>
          <cite>Universidade Católica Timorense</cite>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Explore About UCT"
            title="Get to Know the University"
            desc="Dive deeper into our overview, vision, milestones and leadership messages."
          />
          <div className="about-explore">
            {aboutOverview.exploreLinks.map((item, i) => (
              <TiltCard key={item.path} maxTilt={7} data-animate="fade-up" data-delay={(i % 3) * 80}>
                <Link to={item.path} className="about-explore__card">
                  <div className="about-explore__media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="about-explore__body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <span>Explore →</span>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading
            tag="Why UCT"
            title="A Truly International Medical Campus"
            desc="UCT brings together students and faculty from India, the USA, Cuba and Timor-Leste inside a safe, peaceful island nation."
          />
          <div className="card-grid card-grid--4">
            {aboutOverview.whyUct.map((item, i) => (
              <TiltCard key={item.title} maxTilt={7}>
                <FeatureCard title={item.title} desc={item.desc} delay={i * 80} />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
