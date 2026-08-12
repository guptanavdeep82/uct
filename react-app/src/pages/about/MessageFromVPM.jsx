import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { vicePrimeMinisterMessage } from "../../data/about";

export default function MessageFromVPM() {
  const vpm = vicePrimeMinisterMessage;

  return (
    <>
      <Seo
        title="Message from the Vice Prime Minister"
        description="A message regarding UCT's role in Timor-Leste's national healthcare and education goals."
        path="/about-us/message-from-vice-prime-minister"
      />
      <InnerPageHero
        title="Message from the Vice Prime Minister"
        description="A formal institutional perspective on UCT's role in Timor-Leste."
        image={images.campus[5]}
        trail={[{ label: "About Us", path: "/about-us" }]}
      />

      <section className="section">
        <div className="container rector__grid">
          <div className="rector__media" data-animate="fade-left">
            <TiltCard className="about-media-frame rector__photo" maxTilt={10}>
              <img src={vpm.photo} alt={`${vpm.name}, ${vpm.role}`} loading="lazy" />
            </TiltCard>
            <div className="rector__name-card glass-card">
              <strong>{vpm.name}</strong>
              <span>{vpm.role}</span>
            </div>
          </div>

          <div className="rector__content" data-animate="fade-right">
            {vpm.isPlaceholder && (
              <span className="pill-tag" style={{ marginBottom: "1rem", display: "inline-block" }}>
                Placeholder Content
              </span>
            )}
            <span className="section-head__tag">An Institutional Perspective</span>
            <h2 className="section-head__title">UCT & National Progress</h2>
            <div className="rector-quote-card">“{vpm.quote}”</div>
            {vpm.message.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p style={{ marginTop: "1.4rem", fontStyle: "italic" }}>{vpm.connectionNote}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="UCT Connection" title="How the University Serves the Nation" />
          <div className="card-grid card-grid--3">
            {vpm.uctConnection.map((item, i) => (
              <TiltCard key={item} maxTilt={7}>
                <FeatureCard title={`Priority ${i + 1}`} desc={item} delay={i * 80} />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
