export default function SectionHeading({ tag, title, desc, align = "center", as: Tag = "h2" }) {
  return (
    <header className={`section-head${align === "left" ? " section-head--left" : ""}`} data-animate="fade-up">
      {tag && <span className="section-head__tag">{tag}</span>}
      <Tag className="section-head__title">{title}</Tag>
      {desc && <p className="section-head__desc">{desc}</p>}
    </header>
  );
}
