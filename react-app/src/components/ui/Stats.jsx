export default function Stats({ items }) {
  return (
    <section className="stats" aria-label="University statistics">
      <div className="container stats__grid">
        {items.map((stat, i) => (
          <div className="stat" key={stat.label} data-animate="fade-up" data-delay={i * 80}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
