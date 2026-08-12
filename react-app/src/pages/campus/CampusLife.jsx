import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import ImageCard from "../../components/ui/ImageCard";
import CTASection from "../../components/ui/CTASection";
import Stats from "../../components/ui/Stats";
import TiltCard from "../../components/ui/TiltCard";
import { images } from "../../data/images";
import { campusSections } from "../../data/campusLife";

const campusStats = [
  { value: "6+", label: "Campus Facilities" },
  { value: "24/7", label: "Hostel Security" },
  { value: "100%", label: "Wi-Fi Coverage" },
  { value: "Daily", label: "Indian Food" },
];

export default function CampusLife() {
  return (
    <>
      <Seo
        title="Campus Life"
        description="Explore infrastructure, library, laboratories, hostel, sports and student life at Universidade Católica Timorense (UCT)."
        path="/campus-life"
      />
      <InnerPageHero
        title="Campus Life at UCT"
        description="A modern, safe and vibrant medical campus in the heart of Díli — designed to support every part of student life."
        image={images.campus[0]}
      />

      <Stats items={campusStats} />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Explore Our Campus" title="Everything Your Student Life Needs" desc="From smart classrooms to hostel life and sports — discover every part of the UCT campus experience." />
          <div className="card-grid card-grid--3">
            {campusSections.map((section, i) => (
              <ImageCard
                key={section.key}
                image={section.image}
                title={section.title}
                desc={section.summary}
                to={section.path}
                delay={(i % 3) * 90}
              />
            ))}
            <ImageCard
              image={images.gallery[2].src}
              title="Life of Indian Students"
              desc="A welcoming international community, familiar food and a strong support system for Indian students."
              to="/campus-life/life-of-indian-students"
              delay={90}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">A Peaceful Place to Learn</span>
            <h2 className="section-head__title">Life in Timor-Leste</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              UCT sits in Díli, the capital of Timor-Leste — a safe, peaceful island nation in Southeast Asia.
              The campus blends modern medical education with a calm, supportive atmosphere, giving students the
              space to focus on their studies while enjoying a genuinely international experience.
            </p>
            <p style={{ marginTop: "1rem", color: "var(--gray-500)" }}>
              Between lectures and lab sessions, students explore a vibrant social calendar — from cultural
              festivals and sports fests to community health camps — all within a close-knit, caring campus
              community.
            </p>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <TiltCard maxTilt={8}>
              <img src={images.hero.campusAerial} alt="Aerial view of the UCT campus in Díli" loading="lazy" />
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Campus Gallery" title="Moments From Campus Life" />
          <div className="card-grid card-grid--3">
            {[images.gallery[1], images.gallery[6], images.gallery[9]].map((item, i) => (
              <div key={item.src} className="img-reveal" data-animate="fade-up" data-delay={i * 90}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
