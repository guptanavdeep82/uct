import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../components/ui/InnerPageHero";
import SectionHeading from "../components/ui/SectionHeading";
import FAQAccordion from "../components/ui/FAQAccordion";
import CTASection from "../components/ui/CTASection";
import { images } from "../data/images";
import { faqGroups } from "../data/faq";

export default function FAQ() {
  const [groupId, setGroupId] = useState("general");
  const group = useMemo(() => faqGroups.find((g) => g.id === groupId) ?? faqGroups[0], [groupId]);

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers about UCT's MBBS program, admissions, fees, campus life, hospitals and accreditation — gathered from official university sources."
        path="/faq"
      />
      <InnerPageHero
        title="Frequently Asked Questions"
        description="Clear answers on curriculum, faculty, hospitals, fees, admissions and campus life — in one place."
        image={images.hero.campusBuilding}
        actions={<HeroApplyButton label="Ask a Counsellor" />}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Help Centre" title="Browse by Topic" desc="Choose a category to see the questions families ask most often." />
          <div className="post-filters" role="tablist" aria-label="FAQ categories">
            {faqGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={groupId === g.id}
                className={`filter-chip${groupId === g.id ? " is-active" : ""}`}
                onClick={() => setGroupId(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
          <FAQAccordion key={group.id} items={group.items} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Still Exploring?" title="Jump to the Detail Pages" />
          <div className="card-grid card-grid--4">
            {[
              { title: "Curriculum", desc: "Phase-by-phase MBBS syllabus.", to: "/academics/curriculum" },
              { title: "Faculty", desc: "Named academic heads and departments.", to: "/academics/faculty" },
              { title: "Hospitals", desc: "Clinical postings and hospital tie-ups.", to: "/academics/hospitals" },
              { title: "Accreditation", desc: "NMC, WDOMS, FAIMER and more.", to: "/accreditation" },
            ].map((card) => (
              <Link key={card.to} to={card.to} className="feature-card" data-animate="fade-up">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Didn't Find Your Answer?" desc="Write to admissions with your NEET score and preferred intake — a counsellor will reply with verified details." />
    </>
  );
}
