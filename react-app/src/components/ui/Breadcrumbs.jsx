import { Link } from "react-router-dom";

/** trail: [{ label, path }] — the last item renders as plain (non-link) text. */
export default function Breadcrumbs({ trail = [], variant = "" }) {
  return (
    <nav className={`breadcrumbs${variant ? ` breadcrumbs--${variant}` : ""}`} aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {trail.map((item, i) => {
        const isLast = i === trail.length - 1;
        return (
          <span key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="breadcrumbs__sep" aria-hidden="true">
              /
            </span>
            {isLast || !item.path ? (
              <span className="breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
