import { Link, useParams } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import PostCard from "../../components/ui/PostCard";
import CTASection from "../../components/ui/CTASection";
import { blogPosts, getBlogBySlug } from "../../data/blog";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <section className="section not-found">
        <div>
          <strong>404</strong>
          <h1>Post Not Found</h1>
          <p style={{ color: "var(--gray-500)", margin: "1rem 0 1.5rem" }}>This blog post may have been moved or removed.</p>
          <Link to="/blog" className="btn btn--primary">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} image={post.image} />

      <section className="article-hero">
        <div className="container">
          <Breadcrumbs trail={[{ label: "Blog", path: "/blog" }, { label: post.title }]} />
          <span className="pill-tag">{post.category}</span>
          <h1 className="article-hero__title">{post.title}</h1>
          <p className="article-hero__meta">
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout article-layout--with-toc">
          <aside className="article-toc" data-animate="fade-up">
            <h2>On this page</h2>
            <ol>
              {post.content.map((block, i) =>
                block.type === "h2" ? (
                  <li key={block.text}>
                    <a href={`#section-${i}`}>{block.text}</a>
                  </li>
                ) : null
              )}
            </ol>
          </aside>

          <article className="article-body" data-animate="fade-up" data-delay="80">
            <figure className="article-body__figure">
              <img src={post.image} alt={post.title} />
            </figure>
            {post.content.map((block, i) =>
              block.type === "h2" ? (
                <h2 key={block.text} id={`section-${i}`}>
                  {block.text}
                </h2>
              ) : (
                <p key={block.text.slice(0, 48)}>{block.text}</p>
              )
            )}

            <div className="article-share">
              <span>Share</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                X / Twitter
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-head__title" style={{ marginBottom: "2rem" }}>
            Related Posts
          </h2>
          <div className="post-grid">
            {fallbackRelated.map((item, i) => (
              <PostCard
                key={item.slug}
                image={item.image}
                category={item.category}
                date={item.date}
                title={item.title}
                excerpt={item.excerpt}
                to={`/blog/${item.slug}`}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Studying at UCT?"
        desc="Talk to an admission counsellor about the MBBS program, scholarships and campus life."
        primary={{ label: "Apply Now", to: "/admissions/admission-enquiry" }}
      />
    </>
  );
}
