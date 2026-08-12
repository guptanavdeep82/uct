import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { aboutOverview } from "../../data/about";

const sections = [
  {
    tag: "Introduction",
    title: "About the University",
    body: [aboutOverview.intro, aboutOverview.body],
    image: images.campus[2],
    alt: "Students learning at UCT",
    reverse: false,
  },
  {
    tag: "Academic Philosophy",
    title: "Science with Service",
    body: [aboutOverview.academicPhilosophy],
    image: images.campus[3],
    alt: "Faculty mentoring students at UCT",
    reverse: true,
  },
  {
    tag: "Student Experience",
    title: "Integrated, Hands-On Learning",
    body: [aboutOverview.studentExperience],
    image: images.campus[4],
    alt: "Student life at UCT campus",
    reverse: false,
  },
  {
    tag: "International Environment",
    title: "A Global Campus Community",
    body: [aboutOverview.internationalEnvironment],
    image: images.campus[5],
    alt: "International students and faculty at UCT",
    reverse: true,
  },
  {
    tag: "Campus",
    title: "Learning in the Heart of Díli",
    body: [aboutOverview.campusNote],
    image: images.campus[1],
    alt: "UCT campus environment in Díli",
    reverse: false,
  },
];

export default function AboutOverview() {
  return (
    <>
      <Seo
        title="About UCT — Overview"
        description="An overview of Universidade Católica Timorense: academic philosophy, student experience, international environment and campus life."
        path="/about-us/overview"
      />
      <InnerPageHero
        title="Overview"
        description="A closer look at UCT's academic philosophy, student experience and international campus environment."
        image={images.campus[1]}
        trail={[{ label: "About Us", path: "/about-us" }]}
      />

      {sections.map((block, idx) => (
        <section
          key={block.tag}
          className="section"
          style={idx % 2 === 1 ? { background: "var(--gray-50)" } : undefined}
        >
          <div className={`container split${block.reverse ? " split--reverse" : ""}`}>
            <div data-animate={block.reverse ? "fade-right" : "fade-left"}>
              <span className="section-head__tag">{block.tag}</span>
              <h2 className="section-head__title">{block.title}</h2>
              {block.body.map((p) => (
                <p key={p.slice(0, 36)} style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
                  {p}
                </p>
              ))}
            </div>
            <TiltCard
              className="about-media-frame"
              data-animate={block.reverse ? "fade-left" : "fade-right"}
              maxTilt={9}
            >
              <img src={block.image} alt={block.alt} loading="lazy" />
            </TiltCard>
          </div>
        </section>
      ))}

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Why UCT" title="Reasons Students Choose UCT" />
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
