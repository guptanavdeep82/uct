export default function FeatureCard({ icon, title, desc, highlight = false, delay = 0 }) {
  return (
    <article
      className={`feature-card${highlight ? " feature-card--highlight" : ""}`}
      data-animate="fade-up"
      data-delay={delay}
    >
      {icon && <span className="feature-card__icon" aria-hidden="true">{icon}</span>}
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}
