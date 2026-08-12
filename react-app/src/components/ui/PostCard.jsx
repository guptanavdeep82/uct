import { Link } from "react-router-dom";

/** Shared card for News & Events and Blog listings. */
export default function PostCard({ image, category, date, title, excerpt, to, delay = 0 }) {
  return (
    <article className="post-card" data-animate="fade-up" data-delay={delay}>
      <Link to={to} className="post-card__media">
        {image && <img src={image} alt={title} loading="lazy" />}
        {category && <span className="post-card__category">{category}</span>}
      </Link>
      <div className="post-card__body">
        {date && <p className="post-card__date">{date}</p>}
        <h3>
          <Link to={to}>{title}</Link>
        </h3>
        <p>{excerpt}</p>
        <Link to={to} className="post-card__link">
          Read More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" width="15" height="15">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
