import { Link, useParams } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import PostCard from "../../components/ui/PostCard";
import CTASection from "../../components/ui/CTASection";
import { getNewsBySlug, newsEvents } from "../../data/newsEvents";

export default function NewsDetail() {
  const { slug } = useParams();
  const article = getNewsBySlug(slug);

  if (!article) {
    return (
      <section className="section not-found">
        <div>
          <strong>404</strong>
          <h1>Article Not Found</h1>
          <p style={{ color: "var(--gray-500)", margin: "1rem 0 1.5rem" }}>This news item may have been moved or removed.</p>
          <Link to="/news-events" className="btn btn--primary">
            Back to News & Events
          </Link>
        </div>
      </section>
    );
  }

  const index = newsEvents.findIndex((n) => n.slug === article.slug);
  const prev = index > 0 ? newsEvents[index - 1] : null;
  const next = index < newsEvents.length - 1 ? newsEvents[index + 1] : null;
  const related = newsEvents.filter((n) => n.slug !== article.slug).slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Seo title={article.title} description={article.excerpt} path={`/news/${article.slug}`} image={article.image} />

      <section className="article-hero">
        <div className="container">
          <Breadcrumbs
            trail={[
              { label: "News & Events", path: "/news-events" },
              { label: article.title },
            ]}
          />
          <span className="pill-tag">{article.category}</span>
          <h1 className="article-hero__title">{article.title}</h1>
          <p className="article-hero__meta">
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>UCT Communications</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <article className="article-body" data-animate="fade-up">
            <figure className="article-body__figure">
              <img src={article.image} alt={article.title} />
            </figure>
            {article.content.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}

            <div className="article-share">
              <span>Share</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">
                X / Twitter
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>

            <nav className="article-nav" aria-label="Previous and next articles">
              {prev ? (
                <Link to={`/news/${prev.slug}`}>
                  <span>Previous</span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/news/${next.slug}`} style={{ textAlign: "right" }}>
                  <span>Next</span>
                  <strong>{next.title}</strong>
                </Link>
              )}
            </nav>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ background: "var(--gray-50)" }}>
          <div className="container">
            <h2 className="section-head__title" style={{ marginBottom: "2rem" }}>
              Related News
            </h2>
            <div className="post-grid">
              {related.map((item, i) => (
                <PostCard
                  key={item.slug}
                  image={item.image}
                  category={item.category}
                  date={item.date}
                  title={item.title}
                  excerpt={item.excerpt}
                  to={`/news/${item.slug}`}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
