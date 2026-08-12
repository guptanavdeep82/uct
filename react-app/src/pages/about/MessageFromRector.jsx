import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { aboutOverview, rectorMessage } from "../../data/about";

export default function MessageFromRector() {
  return (
    <>
      <Seo
        title="Message from the Rector"
        description={`A message from ${rectorMessage.name}, ${rectorMessage.role}.`}
        path="/about-us/message-from-rector"
      />
      <InnerPageHero
        title="Message from the Rector"
        description="Inspiring our journey — a welcome from UCT's leadership."
        image={images.campus[4]}
        trail={[{ label: "About Us", path: "/about-us" }]}
      />

      <section className="section">
        <div className="container rector__grid">
          <div className="rector__media" data-animate="fade-left">
            <TiltCard className="about-media-frame rector__photo" maxTilt={10}>
              <img src={rectorMessage.photo} alt={`${rectorMessage.name}, ${rectorMessage.role}`} loading="lazy" />
            </TiltCard>
            <div className="rector__name-card glass-card">
              <strong>{rectorMessage.name}</strong>
              <span>{rectorMessage.role}</span>
            </div>
          </div>

          <div className="rector__content" data-animate="fade-right">
            <span className="section-head__tag">A Word of Welcome</span>
            <h2 className="section-head__title">Leadership with Purpose</h2>
            <div className="rector-quote-card">&ldquo;{rectorMessage.quote}&rdquo;</div>
            {rectorMessage.message.map((p, i) => (
              <p key={i} className={i === rectorMessage.message.length - 1 ? "rector__signoff" : undefined}>
                {p}
              </p>
            ))}
            <ul className="leadership-highlights">
              {rectorMessage.highlights.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading
            tag="Our Leadership Vision"
            title="Guiding the UCT Community"
            desc="Under the Rector's leadership, UCT continues to grow as Timor-Leste's first Catholic medical university — committed to excellence, ethics and service."
          />
          <div className="card-grid card-grid--3">
            {rectorMessage.leadershipFocus.map((item, i) => (
              <TiltCard key={item.title} className="feature-card" maxTilt={8} data-animate="fade-up" data-delay={i * 80}>
                <h3>{item.title}</h3>
                <p style={{ marginTop: "0.6rem", color: "var(--gray-500)", fontSize: "0.92rem" }}>{item.desc}</p>
              </TiltCard>
            ))}
          </div>

          <div className="rector-related">
            {rectorMessage.relatedSections.map((item, i) => (
              <article key={item.title} className="rector-related__card" data-animate="fade-up" data-delay={i * 100}>
                <div className="rector-related__media img-reveal">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="rector-related__body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media img-reveal" data-animate="fade-left">
            <img src={images.hero.ceremony} alt="White Coat Ceremony at UCT" loading="lazy" />
          </div>
          <div data-animate="fade-right">
            <span className="section-head__tag">Student Journey</span>
            <h2 className="section-head__title">From First Day to First White Coat</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Every student who joins UCT becomes part of a close-knit medical community. From orientation and
              classroom learning to clinical rotations and graduation ceremonies, the Rector and faculty remain
              actively involved in shaping a supportive, inspiring environment.
            </p>
            <p style={{ marginTop: "1rem", color: "var(--gray-500)" }}>
              UCT celebrates milestones such as the White Coat Ceremony, community health camps and cultural
              festivals — moments that remind students they are training not only to earn a degree, but to serve
              society with care.
            </p>
            <Link to="/campus-life" className="btn btn--outline" style={{ marginTop: "1.5rem" }}>
              Explore Campus Life
            </Link>
          </div>
        </div>
      </section>

      <section className="quote-band" aria-label="Rector highlight quote">
        <div className="container quote-band__inner" data-animate="fade-up">
          <blockquote>&ldquo;{rectorMessage.quote}&rdquo;</blockquote>
          <cite>
            {rectorMessage.name} — {rectorMessage.role}
          </cite>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Learn More" title="Related Pages" desc="Discover more about UCT's mission, history and campus experience." />
          <div className="about-explore">
            {aboutOverview.exploreLinks.slice(0, 3).map((link) => (
              <Link key={link.path} to={link.path} className="about-explore__card" data-animate="fade-up">
                <div className="about-explore__media">
                  <img src={link.image} alt={link.title} loading="lazy" />
                </div>
                <div className="about-explore__body">
                  <h3>{link.title}</h3>
                  <p>{link.desc}</p>
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
