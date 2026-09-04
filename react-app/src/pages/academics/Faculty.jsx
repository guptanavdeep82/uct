import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Stats from "../../components/ui/Stats";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { academicDepartments, faculty, facultyOrigins } from "../../data/curriculum";

function initials(name) {
  return name
    .split(" ")
    .filter((w) => w !== "Dr.")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

const facultyStats = [
  { value: "4", label: "Countries in Faculty" },
  { value: "English", label: "Medium of Teaching" },
  { value: "Heads", label: "Named Academic Leaders" },
  { value: "1:1", label: "Guided Lab Learning" },
];

export default function Faculty() {
  return (
    <>
      <Seo
        title="Faculty List"
        description="Meet UCT's international medical faculty — academic heads in Anatomy, Physiology, Biochemistry and Community Medicine, with educators from India, USA, Cuba and Timor-Leste."
        path="/academics/faculty"
      />
      <InnerPageHero
        title="Faculty List"
        description="International medical educators who teach the Indian-curriculum MBBS program in English."
        image={images.hero.students}
        trail={[{ label: "Academics", path: "/academics" }]}
        actions={<HeroApplyButton />}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Our Esteemed Faculty</span>
            <h2 className="section-head__title">Learn From International Medical Experts</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Classes are led by experienced, supportive medical educators from India, the USA, Cuba and
              Timor-Leste. Named academic heads guide Anatomy, Physiology, Biochemistry and Community Medicine —
              with dedicated lab technicians supporting practical sessions.
            </p>
            <Link to="/academics/curriculum" className="btn btn--outline" style={{ marginTop: "1.4rem" }}>
              View the Curriculum They Teach
            </Link>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={images.campus[1]} alt="Academic teaching at UCT" loading="lazy" />
          </div>
        </div>
      </section>

      <Stats items={facultyStats} />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Academic Leadership" title="Named Heads of Department" desc="Faculty names and roles published on UCT's official MBBS program page." />
          <div className="faculty-grid">
            {faculty.map((person, i) => (
              <article key={person.name} className="faculty-card" data-animate="fade-up" data-delay={i * 90}>
                <span className="faculty-card__photo" aria-hidden="true">
                  {initials(person.name)}
                </span>
                <span className="pill-tag">{person.department}</span>
                <h3>{person.name}</h3>
                <p className="faculty-card__role">{person.role}</p>
                <p>{person.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="A Global Classroom" title="Faculty From Four Countries" />
          <div className="card-grid card-grid--4">
            {facultyOrigins.map((origin, i) => (
              <article key={origin.country} className="feature-card" data-animate="fade-up" data-delay={i * 80}>
                <h3>{origin.country}</h3>
                <p>{origin.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            tag="Teaching Departments"
            title="Where Faculty Guide Every Phase"
            desc="Department coverage follows the official MBBS professional phases — from pre-clinical sciences to clinical postings."
          />
          <div className="card-grid card-grid--4">
            {academicDepartments.map((dept, i) => (
              <article key={dept.title} className="feature-card" data-animate="fade-up" data-delay={(i % 4) * 70}>
                <h3>{dept.title}</h3>
                <p>{dept.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Study With This Faculty" desc="Talk to admissions about the current intake, documents and how teaching is structured across the 5.5-year program." />
    </>
  );
}
