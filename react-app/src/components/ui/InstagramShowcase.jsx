import { instagramHighlights } from "../../data/media";
import { siteInfo } from "../../data/siteInfo";

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export default function InstagramShowcase() {
  return (
    <div className="insta-showcase">
      <div className="insta-showcase__grid" data-animate="fade-up">
        {instagramHighlights.map((src, i) => (
          <a
            key={src + i}
            href={siteInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-tile"
            aria-label="View this post on Instagram"
          >
            <img src={src} alt="UCT moment shared on Instagram" loading="lazy" />
            <span className="insta-tile__overlay" aria-hidden="true">
              <InstagramGlyph />
            </span>
          </a>
        ))}
      </div>

      <div className="insta-showcase__cta" data-animate="fade-up" data-delay="120">
        <span className="insta-showcase__handle">@official_uct</span>
        <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--insta">
          <InstagramGlyph />
          Follow Us on Instagram
        </a>
      </div>
    </div>
  );
}
