import Seo from "../components/ui/Seo";
import InnerPageHero from "../components/ui/InnerPageHero";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/ui/CTASection";
import { images } from "../data/images";
import { antiRaggingPolicy } from "../data/antiRagging";
import { siteInfo } from "../data/siteInfo";

export default function AntiRaggingPolicy() {
  const { intro, sections, reporting } = antiRaggingPolicy;

  return (
    <>
      <Seo
        title="Anti-Ragging Policy"
        description="UCT's official zero-tolerance anti-ragging policy — definitions, disciplinary measures, preventive steps and reporting channels."
        path="/anti-ragging-policy"
      />
      <InnerPageHero
        title="Anti-Ragging Policy"
        description="A safe, respectful campus is non-negotiable. Ragging in any form is strictly prohibited at UCT."
        image={images.campus[2]}
      />

      <section className="section">
        <div className="container prose-page">
          <SectionHeading tag="Introduction" title="Zero Tolerance Toward Ragging" />
          <p data-animate="fade-up">{intro}</p>

          {sections.map((section) => (
            <div key={section.title} className="policy-block" data-animate="fade-up">
              <h2>{section.title}</h2>
              {section.body && <p>{section.body}</p>}
              {section.list?.length > 0 && (
                <ul className="tick-list">
                  {section.list.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="policy-block" data-animate="fade-up">
            <h2>{reporting.title}</h2>
            <p>{reporting.body}</p>
            <ul className="contact__details" style={{ marginTop: "1.2rem" }}>
              {reporting.channels.map((channel) => (
                <li key={channel.label}>
                  <span className="contact__ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <div>
                    <strong>{channel.label}</strong>
                    <span>
                      {channel.label === "Email" ? (
                        <a href={`mailto:${channel.value}`}>{channel.value}</a>
                      ) : channel.label === "Phone" ? (
                        <a href={`tel:${channel.value.replace(/\s/g, "")}`}>{channel.value}</a>
                      ) : (
                        channel.value
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "1.4rem", color: "var(--gray-500)" }}>
              Official campus contact: {siteInfo.email} · {siteInfo.phone}
            </p>
            <a className="btn btn--outline" style={{ marginTop: "1.2rem" }} href="/anti-ragging-policy" download>
              Download Policy (Print / Save)
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Questions About Student Safety?"
        desc="Our student affairs team is available to guide students and parents."
        primary={{ label: "Contact Us", to: "/contact-us" }}
        secondary={{ label: "Admission Enquiry", to: "/admissions/admission-enquiry" }}
      />
    </>
  );
}
