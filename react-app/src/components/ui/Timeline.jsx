export default function Timeline({ items }) {
  return (
    <div className="timeline">
      <div className="timeline__line" aria-hidden="true"></div>
      {items.map((item, i) => (
        <div className="timeline__item" key={item.title} data-animate={i % 2 === 0 ? "fade-right" : "fade-left"}>
          <span className="timeline__dot">{item.year}</span>
          <div className="timeline__card">
            <span className="timeline__year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>
              {item.desc}
              {item.isPlaceholder && (
                <em style={{ display: "block", marginTop: "0.4rem", color: "var(--gray-300)", fontSize: "0.78rem" }}>
                  (placeholder — to be confirmed by UCT)
                </em>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
