import { Link, useParams } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import CTASection from "../../components/ui/CTASection";
import { blogPosts, getBlogBySlug } from "../../data/blog";
import { siteInfo } from "../../data/siteInfo";

function ShareLinks({ url, title }) {
  return (
    <>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z" />
        </svg>
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 3h3.1l-6.8 7.8L22 21h-6.2l-4.8-6.3L5.7 21H2.6l7.3-8.3L2 3h6.4l4.4 5.8L17.5 3zm-1.1 16.2h1.7L7.7 4.7H5.9l10.5 14.5z" />
        </svg>
      </a>
      <a href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm5.1 12.8c-.2.6-1.2 1.1-1.7 1.1-.4 0-.9.2-3.1-.7-2.6-1.1-4.3-3.8-4.4-4 0-.1-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.1.1.3 0 .4l-.3.4c-.1.1-.2.3-.1.5.2.3.8 1.3 1.8 2.1 1.2 1 2.2 1.3 2.5 1.4.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l2.1 1c.2.1.4.2.4.4 0 .1 0 .8-.4 1.4z" />
        </svg>
      </a>
    </>
  );
}

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

  const sameCategory = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  const fallbackRelated = [...sameCategory, ...others].slice(0, 4);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} image={post.image} />

      <section className="blog-story">
        <div className="container blog-story__shell">
          <aside className="blog-story__share" aria-label="Share this article">
            <ShareLinks url={shareUrl} title={post.title} />
          </aside>

          <article className="blog-story__article">
            <Breadcrumbs trail={[{ label: "Blog", path: "/blog" }, { label: post.title }]} variant="dark" />
            <p className="blog-hub-cat">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="blog-story__meta">
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </p>
            <figure className="blog-story__figure">
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
            <div className="blog-story__share-row">
              <span>Share</span>
              <ShareLinks url={shareUrl} title={post.title} />
            </div>
          </article>

          <aside className="blog-story__rail">
            <div className="blog-story__promo">
              <p className="blog-story__promo-kicker">Need guidance?</p>
              <h2>Talk to a UCT counsellor</h2>
              <p>Ask about the {siteInfo.admissionsIntake} MBBS intake, documents and campus life in Díli.</p>
              <Link to="/admissions/admission-enquiry" className="btn btn--gold btn--block">
                Apply Now
              </Link>
              <a href={siteInfo.phoneHref} className="blog-story__promo-phone">
                {siteInfo.phone}
              </a>
            </div>
            <div className="blog-story__related">
              <h2>Articles You Might Like</h2>
              {fallbackRelated.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="blog-story__related-item">
                  <img src={item.image} alt="" loading="lazy" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      {item.date} · {item.readingTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
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
