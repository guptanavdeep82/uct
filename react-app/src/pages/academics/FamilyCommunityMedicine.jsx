import Seo from "../../components/ui/Seo";
import InnerPageHero, { HeroApplyButton } from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Stats from "../../components/ui/Stats";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { collateralImages, familyAdoption } from "../../data/officialCollateral";

const stats = [
  { value: "5", label: "Villages" },
  { value: "CBME", label: "NMC Curriculum" },
  { value: "Year 1", label: "Family Partnerships Begin" },
  { value: "Preventive", label: "Care & Health Education" },
];

export default function FamilyCommunityMedicine() {
  return (
    <>
      <Seo
        title="Family Adoption Programme"
        description="UCT's Family Adoption Programme under the NMC CBME curriculum — student–family partnerships across 5 villages, with preventive care and health education."
        path="/academics/family-community-medicine"
      />
      <InnerPageHero
        title="Family & Community Medicine"
        description="The Family Adoption Programme connects MBBS training with real homes and villages across Timor-Leste."
        image={images.news.drugAwareness}
        trail={[{ label: "Academics", path: "/academics" }]}
        actions={<HeroApplyButton />}
      />

      <section className="section">
        <div className="container split">
          <div data-animate="fade-left">
            <span className="section-head__tag">{familyAdoption.kicker}</span>
            <h2 className="section-head__title">{familyAdoption.title}</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>{familyAdoption.mission}</p>
            <p style={{ marginTop: "1rem", color: "var(--gray-500)" }}>{familyAdoption.villagesNote}</p>
            <blockquote className="quote-card" style={{ marginTop: "1.6rem" }}>
              {familyAdoption.quote}
            </blockquote>
          </div>
          <div className="split__media img-reveal" data-animate="fade-right">
            <img src={collateralImages.familyAdoption} alt="UCT Family Adoption Programme poster" />
          </div>
        </div>
      </section>

      <Stats items={stats} />

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Community Medicine List" title="How Students Serve Families" desc={familyAdoption.tagline} />
          <div className="card-grid card-grid--3">
            {familyAdoption.pillars.map((item, i) => (
              <article key={item.title} className="feature-card" data-animate="fade-up" data-delay={i * 90}>
                <span className="pill-tag">{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ marginTop: "0.9rem" }}>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--gray-500)", maxWidth: 640, marginInline: "auto" }}>
            {familyAdoption.thanks}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading tag="Official Poster" title="Family Adoption Programme" />
          <figure className="poster-frame" data-animate="fade-up">
            <img src={collateralImages.familyAdoption} alt="Official UCT Family Adoption Programme poster" />
          </figure>
        </div>
      </section>

      <CTASection
        title="See How Community Medicine Fits the MBBS Pathway"
        desc="Family visits begin in the first professional year and continue through the CBME curriculum."
      />
    </>
  );
}
