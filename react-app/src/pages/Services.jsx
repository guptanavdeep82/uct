import Seo from "../components/ui/Seo";
import InnerPageHero from "../components/ui/InnerPageHero";
import SectionHeading from "../components/ui/SectionHeading";
import FeatureCard from "../components/ui/FeatureCard";
import CTASection from "../components/ui/CTASection";
import { images } from "../data/images";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Student support services at Universidade Católica Timorense — admissions, academics, international student support, and more."
        path="/services"
      />
      <InnerPageHero
        title="Services"
        description="Comprehensive support for every stage of your journey — from admission enquiry to graduation."
        image={images.campus[3]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="How We Support You" title="University Services" />
          <div className="card-grid card-grid--3">
            {services.map((s, i) => (
              <FeatureCard key={s.title} title={s.title} desc={s.desc} delay={(i % 3) * 90} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
