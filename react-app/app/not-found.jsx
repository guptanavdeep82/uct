import Link from "next/link";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/404");

export default function NotFound() {
  return (
    <section className="section not-found">
      <div>
        <strong>404</strong>
        <h1>Page Not Found</h1>
        <p style={{ color: "var(--gray-500)", margin: "1rem 0 1.5rem" }}>
          The page you are looking for could not be found on the UCT website.
        </p>
        <Link href="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
