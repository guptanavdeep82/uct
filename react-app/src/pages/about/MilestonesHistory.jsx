import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Timeline from "../../components/ui/Timeline";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { milestones, milestonesIntro } from "../../data/about";

const highlights = [
  {
    title: "Founded 2021",
    desc: "First Catholic university in Timor-Leste, established on December 8, 2021 in Díli.",
  },
  {
    title: "White Coat 2024",
    desc: "Students marked their clinical transition at the White Coat Ceremony in Chennai.",
  },
  {
    title: "Growing Campus Life",
    desc: "Cultural celebrations and community programs continue to enrich student experience.",
  },
];

export default function MilestonesHistory() {
  return (
    <>
      <Seo
        title="Milestones & History"
        description="Explore the founding and key milestones of Universidade Católica Timorense (UCT) in Díli, Timor-Leste."
        path="/about-us/milestones-history"
      />
      <InnerPageHero
        title="Milestones & History"
        description="From our founding in 2021 to today — a timeline of UCT's journey so far."
        image={images.campus[3]}
        trail={[{ label: "About Us", path: "/about-us" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Our Journey" title="A Young University with a Clear Mission" />
          <p className="milestones-intro" data-animate="fade-up">
            {milestonesIntro}
          </p>
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
            <h2 className="section-head__title">Building Timor-Leste's Medical Future</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Each milestone reflects UCT's commitment to academic excellence, ethical formation and accessible
              medical education for students from India and around the world.
            </p>
          </div>
          <TiltCard className="about-media-frame" data-animate="fade-right" maxTilt={9}>
            <img src={images.news.whiteCoat} alt="White Coat Ceremony moment for UCT students" loading="lazy" />
          </TiltCard>
        </div>
      </section>

      <CTASection />
    </>
  );
}
