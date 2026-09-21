"use client";

import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import CTASection from "../../components/ui/CTASection";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { aboutOverview } from "../../data/about";

const sections = [
  {
    tag: "Introduction",
    title: "About the University",
    body: aboutOverview.intro,
    image: images.classrooms[0],
    alt: "Students learning at UCT",
    reverse: false,
  },
  {
    tag: "Why UCT",
    title: aboutOverview.whyStudy.title,
    body: [aboutOverview.whyStudy.desc],
    image: images.students[0],
    alt: "Faculty mentoring students at UCT",
    reverse: true,
  },
  {
    tag: "Academic Philosophy",
    title: "Science, Service and Medical Excellence",
    body: aboutOverview.academicPhilosophy,
    image: images.labs[1],
    alt: "Practical learning at UCT",
    reverse: false,
  },
  {
    tag: "Curriculum",
    title: "English-Medium MBBS Programme",
    body: aboutOverview.englishProgramme,
    image: images.classrooms[2],
    alt: "English-medium classroom at UCT",
    reverse: true,
  },
  {
    tag: "Student Experience",
    title: "Integrated, Hands-On Clinical Learning",
    body: [aboutOverview.studentExperience],
    methods: aboutOverview.learningMethods,
    close: aboutOverview.learningClose,
    image: images.labVisits[0],
    alt: "Clinical skills training at UCT",
    reverse: false,
  },
  {
    tag: "International Environment",
    title: "International Campus Community",
    body: aboutOverview.internationalEnvironment,
    image: images.imdEvents[0],
    alt: "International students and faculty at UCT",
    reverse: true,
  },
  {
    tag: "Campus",
    title: "Study Medicine in Díli, Timor-Leste",
    body: aboutOverview.campusNote,
    image: images.exterior[0],
    alt: "UCT campus environment in Díli",
    reverse: false,
  },
];

export default function AboutOverview() {
  return (
    <>
      <Seo
        title={aboutOverview.pageTitle}
        description={aboutOverview.intro[0]}
        path="/overview"
      />
      <InnerPageHero
        title={aboutOverview.pageTitle}
        description={aboutOverview.intro[0]}
        image={images.exterior[0]}
        trail={[{ label: "About Us", path: "/overview" }]}
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
                <p key={p.slice(0, 48)} style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
                  {p}
                </p>
              ))}
              {block.methods && (
                <ul className="tick-list" style={{ marginTop: "1.2rem" }}>
                  {block.methods.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {block.close && (
                <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{block.close}</p>
              )}
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

      <CTASection
        title="Begin Your MBBS Journey at UCT"
        desc={aboutOverview.closing}
      />
    </>
  );
}
