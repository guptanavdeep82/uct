import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import FAQAccordion from "../../components/ui/FAQAccordion";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { programOverview, whyMbbs, curriculumPhases, faculty } from "../../data/curriculum";
import { generalFaq } from "../../data/faq";

const careerPaths = [
  { title: "FMGE (India)", desc: "Eligible to appear for the Foreign Medical Graduate Examination for licensing in India." },
  { title: "USMLE (USA)", desc: "Recognized to apply for the United States Medical Licensing Examination pathway." },
  { title: "PLAB (UK)", desc: "Eligible to pursue the Professional and Linguistic Assessments Board route in the UK." },
  { title: "Timor-Leste Practice", desc: "Direct licensing eligibility to practice in Timor-Leste after completing internship." },
];

export default function MbbsProgram() {
  return (
    <>
      <Seo
        title="MBBS Program"
        description="Explore the MBBS Program at UCT — an NMC-compliant, English-medium curriculum modelled on the Indian medical education system."
        path="/academics/mbbs-program"
      />
      <InnerPageHero
        title="MBBS Program at UCT"
        description="A globally recognized curriculum, rooted in Indian medical standards, taught fully in English."
        image={images.campus[2]}
        trail={[{ label: "Academics", path: "/academics" }]}
        actions={<HeroApplyButton />}
      />

      {/* 1. PROGRAM OVERVIEW */}
      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Program Overview</span>
            <h2 className="section-head__title">{programOverview.title}</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{programOverview.description}</p>
            <ul className="tick-list" style={{ marginTop: "1.4rem" }}>
              {programOverview.highlights.map((h) => (
                <li key={h}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={images.campus[0]} alt="MBBS students at UCT" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 2. PROGRAM HIGHLIGHTS */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Why Choose UCT for MBBS?" title="Program Highlights" />
          <div className="card-grid card-grid--3">
            {whyMbbs.map((item, i) => (
              <FeatureCard key={item} title={item} desc="" delay={(i % 3) * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURRICULUM */}
      <section className="section">
        <div className="container">
          <SectionHeading tag="MBBS Syllabus Structure" title="Your MBBS Journey, Year by Year" />
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {curriculumPhases.map((phase, i) => (
              <div key={phase.phase} className="feature-card" style={{ textAlign: "left" }} data-animate="fade-up" data-delay={i * 90}>
                <span className="pill-tag" style={{ marginBottom: "0.9rem", display: "inline-block" }}>
                  {phase.duration}
                </span>
                <h3>{phase.phase}</h3>
                <ul className="tick-list" style={{ marginTop: "0.9rem" }}>
                  {phase.subjects.map((s) => (
                    <li key={s} style={{ fontSize: "0.92rem" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" width="18" height="18">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLINICAL TRAINING */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container split split--reverse">
          <div data-animate="fade-right">
            <span className="section-head__tag">Clinical Training</span>
            <h2 className="section-head__title">Real Hospital Exposure, From Early On</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Clinical postings begin early and continue through every phase of the program, with hands-on
              training in disciplines such as General Medicine, Surgery, Pediatrics, Obstetrics & Gynecology,
              and Community Medicine — supported by active clinical hospital partnerships.
            </p>
          </div>
          <div className="split__media img-reveal" data-animate="fade-left">
            <img src={images.campus[4]} alt="Clinical training at UCT" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 5. LEARNING ENVIRONMENT */}
      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Learning Environment</span>
            <h2 className="section-head__title">Modern Labs, Smart Classrooms</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Interactive lectures, small-group discussions, problem-based learning and fully equipped
              laboratories combine to build both theoretical depth and practical skill — all delivered in
              English by an international faculty.
            </p>
            <Link to="/campus-life/laboratories" className="btn btn--outline" style={{ marginTop: "1.2rem" }}>
              Explore Our Laboratories
            </Link>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={images.campus[5]} alt="Laboratory training at UCT" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 6. FACULTY */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Our Esteemed Faculty" title="Learn From International Medical Experts" />
          <div className="card-grid card-grid--4">
            {faculty.map((f, i) => (
              <div key={f.name} className="feature-card" style={{ textAlign: "center" }} data-animate="fade-up" data-delay={i * 90}>
                <span className="accred-card__monogram" style={{ margin: "0 auto 1rem" }} aria-hidden="true">
                  {f.name.split(" ").filter((w) => w !== "Dr.").slice(0, 2).map((w) => w[0]).join("")}
                </span>
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STUDENT EXPERIENCE */}
      <section className="section">
        <div className="container split split--reverse">
          <div data-animate="fade-right">
            <span className="section-head__tag">Student Experience</span>
            <h2 className="section-head__title">A Genuinely International Journey</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Students from India and beyond study alongside a diverse international community, supported by a
              dedicated student support office, safe hostel accommodation, and a strong sense of campus
              community.
            </p>
            <Link to="/campus-life/life-of-indian-students" className="btn btn--outline" style={{ marginTop: "1.2rem" }}>
              Life of Indian Students
            </Link>
          </div>
          <div className="split__media img-reveal" data-animate="fade-left">
            <img src={images.gallery[7].src} alt="Students exploring Timor-Leste" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 8. CAREER OPPORTUNITIES */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Career Opportunities" title="Where an MBBS From UCT Can Take You" />
          <div className="card-grid card-grid--4">
            {careerPaths.map((c, i) => (
              <FeatureCard key={c.title} title={c.title} desc={c.desc} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section">
        <div className="container">
          <SectionHeading tag="Good to Know" title="Frequently Asked Questions" />
          <FAQAccordion items={generalFaq} />
        </div>
      </section>

      {/* 10. APPLY CTA */}
      <CTASection title="Ready to Begin Your MBBS Journey?" desc="Talk to our admission counsellors about eligibility, documents and the intake timeline." />
    </>
  );
}
