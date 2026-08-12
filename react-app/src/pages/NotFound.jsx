import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found on the UCT website." path="/404" />
      <section className="section not-found">
        <div>
          <strong>404</strong>
          <h1>Page Not Found</h1>
          <p style={{ color: "var(--gray-500)", margin: "1rem auto 1.8rem", maxWidth: 420 }}>
            The page you requested does not exist or may have moved. Return home or explore admissions.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/" className="btn btn--primary">
              Back to Home
            </Link>
            <Link to="/admissions" className="btn btn--outline">
              Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
