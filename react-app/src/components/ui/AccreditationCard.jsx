export default function AccreditationCard({ code, name, desc, link, delay = 0 }) {
  return (
    <article className="accred-card" data-animate="fade-up" data-delay={delay}>
      <span className="accred-card__monogram" aria-hidden="true">
        {code.slice(0, 4)}
      </span>
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        {link && (
          <a className="accred-card__link" href={link} target="_blank" rel="noopener noreferrer">
            Official Website
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" width="14" height="14">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
