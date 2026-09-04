import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { collateralImages, driveFiles, fmglProgram } from "../../data/officialCollateral";

export default function Prospectus() {
  return (
    <>
      <Seo
        title="MBBS Prospectus 2026"
        description="Official Timor-Leste Prospectus 2026 for Universidade Católica Timorense — the UCT MBBS brochure, FMGL 2021 alignment and programme highlights."
        path="/admissions/prospectus"
      />
      <InnerPageHero
        title="Official Prospectus 2026"
        description="The Timor-Leste Prospectus 2026 brochure — UCT’s official introduction to the MBBS programme."
        image={images.campus[2]}
        trail={[{ label: "Admissions", path: "/admissions" }]}
        actions={<HeroApplyButton label="Apply Now" />}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Official Brochure</span>
            <h2 className="section-head__title">Timor Leste Prospectus 2026</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              This is the university’s published 2026 prospectus. Read it below, or download the full PDF from
              the Downloads tab after sharing your details.
            </p>
            <ul className="tick-list" style={{ marginTop: "1.4rem" }}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Official UCT marketing brochure for the 2026 intake
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                MBBS programme aligned with NMC FMGL Regulations, 2021
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                54 months academic training + 12 months CRMI internship
              </li>
            </ul>
            <a
              href={driveFiles.prospectus.view}
              className="btn btn--outline"
              style={{ marginTop: "1.5rem" }}
              target="_blank"
              rel="noreferrer"
            >
              Open Prospectus in Google Drive
            </a>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={collateralImages.fmgl} alt="UCT MBBS in Timor — 100% FMGL 2021 compliance" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading
            tag="FMGL 2021"
            title={fmglProgram.title}
            desc={fmglProgram.statement}
          />
          <p className="collateral-seal">{fmglProgram.seal}</p>
          <div className="card-grid card-grid--3">
            {fmglProgram.pillars.map((item, i) => (
              <FeatureCard key={item.title} title={item.title} desc={item.desc} delay={(i % 3) * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Read the Brochure" title="Prospectus 2026" desc="The official PDF is large. If the preview is slow, open it in Google Drive." />
          <div className="doc-embed" data-animate="fade-up">
            <iframe
              title="Timor Leste Prospectus 2026"
              src={driveFiles.prospectus.preview}
              allow="autoplay"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Copy of the Prospectus?"
        desc="Use the Downloads tab on the right to receive the official 2026 brochure after OTP verification."
      />
    </>
  );
}
