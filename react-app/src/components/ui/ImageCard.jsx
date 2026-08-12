import { Link } from "react-router-dom";

export default function ImageCard({ image, title, desc, to, delay = 0, tall = false }) {
  return (
    <Link
      to={to}
      className="image-card"
      style={tall ? { minHeight: 420 } : undefined}
      data-animate="fade-up"
      data-delay={delay}
    >
      <img src={image} alt={title} loading="lazy" />
      <div className="image-card__body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className="image-card__link">
          Explore
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" width="16" height="16">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
