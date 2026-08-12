import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import CTASection from "../../components/ui/CTASection";
import Stats from "../../components/ui/Stats";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { indianStudentLife } from "../../data/campusLife";
import { testimonials } from "../../data/testimonials";

export default function LifeOfIndianStudents() {
  return (
    <>
      <Seo
        title="Life of Indian Students"
        description="What life is like for Indian students studying MBBS at Universidade Católica Timorense — food, culture, community and support."
        path="/campus-life/life-of-indian-students"
      />
      <InnerPageHero
        title="Life of Indian Students at UCT"
        description="A welcoming international community, familiar food, and a strong support system that helps Indian students settle in quickly."
        image={images.gallery[1].src}
        trail={[{ label: "Campus Life", path: "/campus-life" }]}
        actions={<HeroApplyButton label="Start Your Admission Journey" />}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Welcoming International Community" title="A Home Away From Home" desc={indianStudentLife.intro} />
          <div className="card-grid card-grid--4">
            {indianStudentLife.pillars.map((p, i) => (
              <FeatureCard key={p.title} title={p.title} desc={p.desc} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {indianStudentLife.stats && <Stats items={indianStudentLife.stats} />}

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">Living in Timor-Leste</span>
            <h2 className="section-head__title">Culture, Food & Campus Life</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Timor-Leste is a peaceful, safe island nation in Southeast Asia. On campus, Indian food is served
              daily, cultural festivals like Holi are celebrated together, and a strong Indian student community
              provides day-to-day support — from academics to simply feeling at home.
            </p>
            <ul className="tick-list" style={{ marginTop: "1.3rem" }}>
              {indianStudentLife.whyChoose.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <TiltCard maxTilt={8}>
              <img src={images.news.holi} alt="Holi celebration of color and culture at UCT" loading="lazy" />
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="UCT Moments" title="Real Life. Real Stories." desc="Milestones and celebrations that define the Indian student experience at UCT." />
          <div className="about-explore">
            {indianStudentLife.moments.map((moment, i) => (
              <article key={moment.title} className="about-explore__card" data-animate="fade-up" data-delay={i * 90}>
                <div className="about-explore__media img-reveal">
                  <img src={moment.image} alt={moment.title} loading="lazy" />
                </div>
                <div className="about-explore__body">
                  <h3>{moment.title}</h3>
                  <p>{moment.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Why Indian Students Choose UCT" title="A Familiar, Supportive Path Abroad" />
          <div className="card-grid card-grid--3">
            {testimonials.slice(0, 3).map((t, i) => (
              <figure
                key={t.name}
                className="feature-card"
                style={{ textAlign: "left" }}
                data-animate="fade-up"
                data-delay={i * 90}
              >
                <blockquote style={{ color: "var(--gray-500)", fontSize: "0.94rem" }}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption style={{ marginTop: "1rem", fontFamily: "var(--font-head)", fontWeight: 600, color: "var(--blue)" }}>
                  {t.name}
                  <span style={{ display: "block", fontWeight: 400, fontSize: "0.82rem", color: "var(--gray-500)" }}>
                    {t.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Campus Gallery" title="Life at UCT, in Pictures" />
          <div className="card-grid card-grid--3">
            {indianStudentLife.gallery.map((img, i) => (
              <div key={img} className="img-reveal" data-animate="fade-up" data-delay={i * 90}>
                <img src={img} alt="Indian students at UCT" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Explore More" title="Discover More of Campus Life" />
          <div className="about-explore">
            <Link to="/campus-life/hostel" className="about-explore__card" data-animate="fade-up">
              <div className="about-explore__media">
                <img src={images.campus[4]} alt="Hostel life at UCT" loading="lazy" />
              </div>
              <div className="about-explore__body">
                <h3>Hostel Life</h3>
                <p>Secure, air-conditioned on-campus hostels with Indian-style mess food.</p>
                <span>Read more &rarr;</span>
              </div>
            </Link>
            <Link to="/campus-life/facilities" className="about-explore__card" data-animate="fade-up" data-delay={90}>
              <div className="about-explore__media">
                <img src={images.campus[3]} alt="Facilities at UCT" loading="lazy" />
              </div>
              <div className="about-explore__body">
                <h3>Facilities & Amenities</h3>
                <p>Cafeteria, transport, prayer room and student support — all on campus.</p>
                <span>Read more &rarr;</span>
              </div>
            </Link>
            <Link to="/campus-life/sports-extracurriculars" className="about-explore__card" data-animate="fade-up" data-delay={180}>
              <div className="about-explore__media">
                <img src={images.campus[5]} alt="Sports at UCT" loading="lazy" />
              </div>
              <div className="about-explore__body">
                <h3>Sports & Fitness</h3>
                <p>Outdoor fields, indoor games and an annual sports fest for every student.</p>
                <span>Read more &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Start Your Admission Journey" desc="Join a strong community of Indian students already thriving at UCT." />
    </>
  );
}
