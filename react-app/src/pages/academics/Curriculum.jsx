import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Stats from "../../components/ui/Stats";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { curriculumPhases, internshipPhase, programOverview } from "../../data/curriculum";
import { cbmeCurriculum, collateralImages, firstYearTextbooks, fmglProgram } from "../../data/officialCollateral";

const journeyStats = [
  { value: "54", label: "Months Academic Training" },
  { value: "12", label: "Months CRMI Internship" },
  { value: "CBME", label: "Competency-Based" },
  { value: "8th", label: "In Asia to Adopt CBME" },
];

export default function Curriculum() {
  const phases = [...curriculumPhases, internshipPhase];

  return (
    <>
      <Seo
        title="MBBS Curriculum"
        description="UCT CBME curriculum — NMC FMGL 2021 aligned, 54 months of academic training, 12-month CRMI internship, and first-year textbooks from official guidelines."
        path="/academics/curriculum"
      />
      <InnerPageHero
        title="MBBS Curriculum"
        description="Competency-Based Medical Education at UCT — one of the first CBME programmes in Timor-Leste, aligned with NMC FMGL 2021."
        image={images.campus[2]}
        trail={[{ label: "Academics", path: "/academics" }]}
        actions={<HeroApplyButton />}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">CBME Curriculum</span>
            <h2 className="section-head__title">{cbmeCurriculum.title}</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{cbmeCurriculum.intro}</p>
            <p style={{ marginTop: "1rem", color: "var(--gray-500)" }}>{cbmeCurriculum.definition}</p>
            <p className="collateral-seal" style={{ marginTop: "1.2rem" }}>
              {cbmeCurriculum.philosophy}
            </p>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={collateralImages.cbme} alt="Timor-Leste joins Asia’s CBME movement — official UCT poster" />
          </div>
        </div>
      </section>

      <Stats items={journeyStats} />

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Five Pillars of CBME" title="What Students Can Do" desc={cbmeCurriculum.seal} />
          <div className="card-grid card-grid--3">
            {cbmeCurriculum.pillars.map((item, i) => (
              <article key={item} className="feature-card" data-animate="fade-up" data-delay={i * 80}>
                <span className="pill-tag">{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ marginTop: "0.85rem" }}>{item}</h3>
              </article>
            ))}
          </div>
          <div className="nation-row" data-animate="fade-up">
            {cbmeCurriculum.nations.map((nation) => (
              <span key={nation} className={`nation-chip${nation === "Timor-Leste" ? " is-highlight" : ""}`}>
                {nation}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="FMGL 2021"
            title={fmglProgram.title}
            desc={fmglProgram.statement}
          />
          <div className="card-grid card-grid--3">
            {fmglProgram.pillars.map((item, i) => (
              <article key={item.title} className="feature-card" data-animate="fade-up" data-delay={i * 70}>
                <h3 style={{ fontSize: "1.02rem" }}>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading
            tag="Syllabus Structure"
            title="Your Journey, Phase by Phase"
            desc={`${programOverview.title} Four academic professional phases plus a compulsory CRMI internship.`}
          />
          <ol className="curric-phases">
            {phases.map((phase, i) => (
              <li key={phase.phase} className="curric-phase" data-animate="fade-up" data-delay={i * 80}>
                <div className="curric-phase__index">
                  <strong>{String(i + 1).padStart(2, "0")}</strong>
                  <span>{phase.duration}</span>
                </div>
                <div className="curric-phase__body">
                  <h3>{phase.phase}</h3>
                  <ul>
                    {phase.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="First-Year Reading List"
            title="Recommended Textbooks"
            desc="From Official Guidelines — Admission Process 2025–2026. Carry the editions listed, or the latest available."
          />
          <div className="fee-table-wrap" data-animate="fade-up">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Textbook</th>
                </tr>
              </thead>
              <tbody>
                {firstYearTextbooks.map((row) => (
                  <tr key={row.subject}>
                    <td>
                      <strong>{row.subject}</strong>
                    </td>
                    <td>
                      {row.books.map((book) => (
                        <div key={book}>{book}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.2rem", flexWrap: "wrap" }}>
            <Link to="/academics/family-community-medicine" className="btn btn--outline">
              Family Adoption Programme
            </Link>
            <Link to="/academics/national-lab-report" className="btn btn--outline">
              National Lab Report
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Official Poster" title="CBME at UCT" />
          <figure className="poster-frame" data-animate="fade-up">
            <img src={collateralImages.cbme} alt="Official UCT poster: Timor-Leste joins Asia’s CBME movement" />
          </figure>
        </div>
      </section>

      <CTASection
        title="Want the Full Curriculum in Writing?"
        desc="Download the 2026 prospectus and official admission guidelines from the Downloads tab."
      />
    </>
  );
}
