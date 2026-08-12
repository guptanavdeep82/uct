import { Link } from "react-router-dom";

export default function CTASection({
  title = "Your White Coat Journey Starts Here",
  desc = "Seats for the 2026–27 intake are limited. Talk to an admission counsellor today.",
  primary = { label: "Apply Now", to: "/admissions/admission-enquiry" },
  secondary = { label: "Admission Enquiry", to: "/admissions/admission-enquiry" },
}) {
  return (
    <section className="cta" aria-label="Call to action">
      <div className="container cta__inner">
        <div data-animate="fade-up">
          <h2 className="cta__title">{title}</h2>
          <p className="cta__desc">{desc}</p>
        </div>
        <div className="cta__actions" data-animate="fade-up" data-delay="120">
          {primary && (
            <Link to={primary.to} className="btn btn--gold btn--lg">
              {primary.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
          {secondary && (
            <Link to={secondary.to} className="btn btn--glass btn--lg">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
