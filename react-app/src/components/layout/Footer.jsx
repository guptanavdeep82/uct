import { Link } from "react-router-dom";
import { footerAboutLinks, footerQuickLinks } from "../../data/navigation";
import { images } from "../../data/images";
import { siteInfo } from "../../data/siteInfo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="UCT — back to top">
            <img src={images.logo} alt="Universidade Católica Timorense crest" width="64" height="64" loading="lazy" />
            <span>
              <strong>{siteInfo.shortName}</strong>
              <small>{siteInfo.name}</small>
            </span>
          </Link>
          <p>
            The first Catholic university in Timor-Leste, founded on {siteInfo.founded} in Díli — offering
            world-class medical education rooted in academic excellence, ethics and Catholic values.
          </p>
          <div className="footer__social">
            <a href={siteInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="UCT on Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
              </svg>
            </a>
            <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="UCT on Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a href={siteInfo.emailHref} aria-label="Email UCT">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="About links">
          <h3>About Us</h3>
          <ul>
            {footerAboutLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {footerQuickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Get in Touch</h3>
          <ul className="footer__contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {siteInfo.address}
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              <a href={siteInfo.emailHref}>{siteInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} {siteInfo.name}. All rights reserved.</p>
          <p>{siteInfo.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
