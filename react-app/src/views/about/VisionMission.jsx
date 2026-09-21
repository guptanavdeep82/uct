"use client";

import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { visionMission } from "../../data/about";

export default function VisionMission() {
  return (
    <>
      <Seo
        title="Vision & Mission"
        description="Discover the vision, mission and academic philosophy of Universidade Católica Timorense (UCT)."
        path="/vision-mission"
      />
      <InnerPageHero
        title={visionMission.pageTitle}
        description={visionMission.intro[0]}
        image={images.exterior[2]}
        trail={[{ label: "About Us", path: "/overview" }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 800, marginInline: "auto" }}>
          {visionMission.intro.map((p) => (
            <p key={p.slice(0, 40)} style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container vision-grid">
          <TiltCard className="vision-panel" data-animate="fade-up" maxTilt={6}>
            <span className="section-head__tag">Our Vision</span>
            <h3 className="section-head__title" style={{ fontSize: "1.55rem" }}>
              {visionMission.visionTitle}
            </h3>
            {visionMission.vision.map((v) => (
              <p key={v.slice(0, 40)} style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
                {v}
              </p>
            ))}
          </TiltCard>

          <TiltCard className="vision-panel vision-panel--mission" data-animate="fade-up" data-delay="100" maxTilt={6}>
            <span className="section-head__tag">Our Mission</span>
            <h3 className="section-head__title" style={{ fontSize: "1.55rem" }}>
              {visionMission.missionTitle}
            </h3>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{visionMission.missionIntro}</p>
            <p style={{ marginTop: "1rem", color: "var(--gray-500)" }}>UCT is committed to:</p>
            <ul className="tick-list" style={{ marginTop: "1rem" }}>
              {visionMission.mission.map((m) => (
                <li key={m}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {m}
                </li>
              ))}
            </ul>
          </TiltCard>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Core Values" title="Core Values in Medical Education" />
          <div className="card-grid card-grid--3">
            {visionMission.coreValues.map((item, i) => (
              <TiltCard key={item.title} maxTilt={7}>
                <FeatureCard title={item.title} desc={item.desc} delay={(i % 3) * 80} />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Our Philosophy</span>
            <h2 className="section-head__title">Educare in Veritate · Ad Servire</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{visionMission.philosophy}</p>
            <p style={{ marginTop: "1rem", color: "var(--gray-500)" }}>{visionMission.leadershipPurpose}</p>
          </div>
          <TiltCard className="about-media-frame" data-animate="fade-right" maxTilt={9}>
            <img src={images.students[5]} alt="Faculty and students at Universidade Católica Timorense" loading="lazy" />
          </TiltCard>
        </div>
      </section>

      <section className="quote-band" aria-label="Purpose statement">
        <div className="container quote-band__inner" data-animate="fade-up">
          <blockquote>“{visionMission.quote}”</blockquote>
          <cite>{visionMission.quoteCite}</cite>
        </div>
      </section>

      <CTASection
        title="Choose UCT for MBBS in Timor-Leste"
        desc={visionMission.closing}
        secondary={{ label: "Speak to a Counsellor", to: "/contact-us" }}
      />
    </>
  );
}
