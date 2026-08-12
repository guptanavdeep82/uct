import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import EnquiryForm from "../../components/ui/EnquiryForm";
import FAQAccordion from "../../components/ui/FAQAccordion";
import { images } from "../../data/images";
import { siteInfo } from "../../data/siteInfo";
import { admissionEnquiryFaq } from "../../data/admissions";

export default function AdmissionEnquiry() {
  return (
    <>
      <Seo
        title="Admission Enquiry"
        description="Submit an MBBS admission enquiry to Universidade Católica Timorense. Our counsellors respond within 24 hours."
        path="/admissions/admission-enquiry"
      />
      <InnerPageHero
        title="Admission Enquiry"
        description="Tell us about your background and preferred intake — our admission team will guide you through the next steps."
        image={images.hero.students}
        trail={[{ label: "Admissions", path: "/admissions" }]}
      />

      <section className="section">
        <div className="container contact__grid">
          <div data-animate="fade-left">
            <span className="section-head__tag">Get in Touch</span>
            <h2 className="section-head__title">Request a Free Counselling Call</h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              Have a question about the MBBS program, fees or campus life? Send us a message — our team responds
              within 24 hours.
            </p>
            <ul className="contact__details">
              <li>
                <span className="contact__ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.2.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <strong>Call Us</strong>
                  <span>
                    <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
                    {" · India toll-free: "}
                    {siteInfo.indiaTollFree}
                  </span>
                </div>
              </li>
              <li>
                <span className="contact__ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <div>
                  <strong>Email Us</strong>
                  <span>
                    <a href={siteInfo.emailHref}>{siteInfo.email}</a>
                  </span>
                </div>
              </li>
              <li>
                <span className="contact__ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <strong>Visit Us</strong>
                  <span>{siteInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>
          <div data-animate="fade-right">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="FAQ" title="Before You Apply" />
          <FAQAccordion items={admissionEnquiryFaq} />
        </div>
      </section>
    </>
  );
}
