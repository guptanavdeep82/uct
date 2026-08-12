import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

/**
 * Shared hero used at the top of every inner page — same full-bleed photo
 * banner treatment (photographic scrim, breadcrumb, title, intro) as the
 * homepage hero, so every page feels like part of one site.
 */
export default function InnerPageHero({ title, description, image, trail = [], actions = null }) {
  return (
    <section className="inner-hero" aria-label={title}>
      <div className="inner-hero__bg" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="inner-hero__overlay" aria-hidden="true"></div>

      <div className="container inner-hero__content">
        <Breadcrumbs trail={[...trail, { label: title }]} />
        <h1 className="inner-hero__title" data-animate="fade-up">
          {title}
        </h1>
        {description && (
          <p className="inner-hero__desc" data-animate="fade-up" data-delay="100">
            {description}
          </p>
        )}
        {actions && (
          <div className="inner-hero__actions" data-animate="fade-up" data-delay="200">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}

export function HeroApplyButton({ label = "Apply Now" }) {
  return (
    <Link to="/admissions/admission-enquiry" className="btn btn--gold btn--lg">
      {label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
