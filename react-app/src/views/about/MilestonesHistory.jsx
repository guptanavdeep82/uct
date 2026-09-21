"use client";

import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Timeline from "../../components/ui/Timeline";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { milestones, milestonesIntro, milestonesLookingAhead } from "../../data/about";

const highlights = [
  {
    title: "Founded 2021",
    desc: "Timor-Leste's first Catholic university, inaugurated on 8 December 2021 in Díli.",
  },
  {
    title: "White Coat 2024",
    desc: "First international MBBS White Coat Ceremony at The Music Academy in Chennai.",
  },
  {
    title: "2026 Integration",
    desc: "Formal process to integrate General Medicine into the MBBS programme, submitted to MHESC.",
  },
];

export default function MilestonesHistory() {
  return (
    <>
      <Seo
        title="Milestones & History"
        description="Explore the founding and key milestones of Universidade Católica Timorense (UCT) in Díli, Timor-Leste."
        path="/milestones-history"
      />
      <InnerPageHero
        title="Our Journey: Building Medical Education in Timor-Leste"
        description={milestonesIntro[0]}
        image={images.groundbreaking[0]}
        trail={[{ label: "About Us", path: "/overview" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Our Journey" title="Building Medical Education in Timor-Leste" />
          {milestonesIntro.map((p) => (
            <p key={p.slice(0, 40)} className="milestones-intro" data-animate="fade-up">
              {p}
            </p>
          ))}
          <div className="card-grid card-grid--3" style={{ marginBottom: "3rem" }}>
            {highlights.map((item, i) => (
              <TiltCard key={item.title} maxTilt={7}>
                <FeatureCard title={item.title} desc={item.desc} delay={i * 80} />
              </TiltCard>
            ))}
          </div>
          <Timeline items={milestones} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Looking Ahead</span>
            <h2 className="section-head__title">A Lasting Institution for Medical Education</h2>
            {milestonesLookingAhead.map((p) => (
              <p key={p.slice(0, 40)} style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
                {p}
              </p>
            ))}
          </div>
          <TiltCard className="about-media-frame" data-animate="fade-right" maxTilt={9}>
            <img src={images.events[1]} alt="White Coat Ceremony moment for UCT students" loading="lazy" />
          </TiltCard>
        </div>
      </section>

      <CTASection />
    </>
  );
}
