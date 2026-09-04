import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Stats from "../../components/ui/Stats";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { collateralImages, nationalLab } from "../../data/officialCollateral";

const stats = [
  { value: "5", label: "Lab Departments" },
  { value: "21", label: "Learning Objectives" },
  { value: "1 Week", label: "INSPTL Posting" },
  { value: "Bidau", label: "Díli, Timor-Leste" },
];

export default function NationalLabReport() {
  return (
    <>
      <Seo
        title="National Laboratory Visit"
        description="UCT MBBS posting at the National Laboratory (INSPTL), Bidau, Díli — microbiology, tuberculosis, molecular biology, biochemistry and pathology."
        path="/academics/national-lab-report"
      />
      <InnerPageHero
        title="National Lab Report"
        description={`${nationalLab.posting} — a one-week, faculty-signed laboratory posting for the International MBBS Programme.`}
        image={images.gallery[7].src}
        trail={[{ label: "Academics", path: "/academics" }]}
        actions={<HeroApplyButton />}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">{nationalLab.faculty}</span>
            <h2 className="section-head__title">{nationalLab.logbookTitle}</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{nationalLab.intro}</p>
            <ul className="tick-list" style={{ marginTop: "1.4rem" }}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Posting: {nationalLab.posting}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Duration: {nationalLab.duration} · Timing: {nationalLab.timing}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Samples received from {nationalLab.sampleSources.join(", ")}
              </li>
            </ul>
            <a href="/downloads/national-lab-report.pdf" className="btn btn--outline" style={{ marginTop: "1.5rem" }} download>
              Download Student Lab Report
            </a>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={collateralImages.labObjectives} alt="National Laboratory Visit logbook — learning objectives" />
          </div>
        </div>
      </section>

      <Stats items={stats} />

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Posting Departments" title="Five Diagnostic Units at INSPTL" />
          <div className="card-grid card-grid--3">
            {nationalLab.departments.map((dept, i) => (
              <article key={dept} className="feature-card" data-animate="fade-up" data-delay={i * 70}>
                <span className="pill-tag">{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ marginTop: "0.85rem" }}>{dept}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Learning Objectives"
            title="What Students Are Trained to Do"
            desc="Twenty-one objectives from the official National Laboratory Visit logbook, grouped by department."
          />
          <div className="lab-obj-grid">
            {nationalLab.objectives.map((group, i) => (
              <article key={group.department} className="lab-obj-card" data-animate="fade-up" data-delay={i * 70}>
                <h3>{group.department}</h3>
                <ol>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Skills Competency Record" title="Observed Laboratory Competencies" />
          <div className="card-grid card-grid--2">
            {nationalLab.competencies.map((group, i) => (
              <article key={group.department} className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up" data-delay={i * 70}>
                <h3>{group.department}</h3>
                <ul className="tick-list" style={{ marginTop: "1rem" }}>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Daily Log Highlights" title="What a Week at INSPTL Covers" desc="Taken from faculty-signed daily log entries and department visit reports." />
          <div className="card-grid card-grid--2">
            {nationalLab.dailyHighlights.map((day, i) => (
              <article key={day.title} className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up" data-delay={i * 80}>
                <h3>{day.title}</h3>
                <ul className="tick-list" style={{ marginTop: "1rem" }}>
                  {day.points.map((point) => (
                    <li key={point}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.8rem", color: "var(--gray-500)", textAlign: "center" }}>
            Systems observed on posting include {nationalLab.equipment.join(", ")}.
          </p>
          <div style={{ textAlign: "center", marginTop: "1.6rem" }}>
            <Link to="/campus-life/laboratories" className="btn btn--outline">
              Campus Laboratories
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Download the Full Lab Visit Report"
        desc="The complete student logbook PDF is available from this page and from the Downloads tab."
      />
    </>
  );
}
