import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigation } from "../../data/navigation";
import { images } from "../../data/images";
import { siteInfo } from "../../data/siteInfo";

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" className="nav-link__caret">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileGroup(null);
  }, [location.pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__news">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" />
            </svg>
            <span>
              <strong>Admissions Open {siteInfo.admissionsIntake}</strong> — NMC-compliant MBBS program. Limited seats
              available.
            </span>
          </p>
          <div className="topbar__contact">
            <a href={siteInfo.phoneHref} aria-label="Call UCT">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              {siteInfo.phone}
            </a>
            <a href={siteInfo.emailHref} aria-label="Email UCT">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              {siteInfo.email}
            </a>
          </div>
        </div>
      </div>

      <header className={`navbar${isScrolled ? " is-scrolled" : ""}`}>
        <nav className="container navbar__inner" aria-label="Main navigation">
          <Link to="/" className="navbar__brand" aria-label="UCT — Home">
            <span className="navbar__brand-mark" aria-hidden="true">
              <img src={images.logo} alt="" width="52" height="52" />
            </span>
            <span className="navbar__brand-text">
              <strong>{siteInfo.shortName}</strong>
              <small>São João Paulo II</small>
            </span>
          </Link>

          <ul className="navbar__menu">
            {navigation.map((item) => (
              <li key={item.label} className="nav-item">
                {item.children ? (
                  <>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
                    >
                      {item.label}
                      <ChevronDown />
                    </NavLink>
                    <div className="nav-dropdown">
                      {item.children.map((child) => (
                        <NavLink key={child.path} to={child.path} className="nav-dropdown__link">
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink to={item.path} className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`} end={item.path === "/"}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="navbar__cta-wrap">
              <Link to="/admissions/admission-enquiry" className="btn btn--gold btn--sm">
                Apply Now
              </Link>
            </li>
          </ul>

          <button
            className={`navbar__toggle${mobileOpen ? " is-open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        <div id="mobileNav" className={`navbar__mobile${mobileOpen ? " is-open" : ""}`}>
          <ul className="navbar__mobile-list">
            {navigation.map((item) => (
              <li key={item.label} className={`mobile-nav-item${openMobileGroup === item.label ? " is-open" : ""}`}>
                {item.children ? (
                  <>
                    <button
                      className="mobile-nav-item__head"
                      onClick={() => setOpenMobileGroup((cur) => (cur === item.label ? null : item.label))}
                      aria-expanded={openMobileGroup === item.label}
                    >
                      {item.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" width="16" height="16">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-nav-item__panel">
                      <div>
                        {item.children.map((child) => (
                          <Link key={child.path} to={child.path}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={item.path} className="mobile-nav-item__head" style={{ textDecoration: "none" }}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="container navbar__mobile-cta">
            <Link to="/admissions/admission-enquiry" className="btn btn--gold btn--block">
              Apply Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
