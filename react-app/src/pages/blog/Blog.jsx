import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import CTASection from "../../components/ui/CTASection";
import { blogPosts, blogCategories } from "../../data/blog";

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const catOk = category === "All" || post.category === category;
      const searchOk =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [category, query]);

  const featured = filtered[0];
  const rail = filtered.slice(0, 8);
  const latestMain = filtered[0];
  const latestSide = filtered.slice(1, 5);

  const applySearch = (event) => {
    event.preventDefault();
    setQuery(draft);
    setCategory("All");
  };

  return (
    <>
      <Seo
        title="Blog"
        description="Guides on MBBS abroad, student life, admissions and Timor-Leste from Universidade Católica Timorense."
        path="/blog"
      />

      <section className="blog-hub-hero">
        <div className="container blog-hub-hero__grid">
          <div className="blog-hub-hero__copy">
            <h1>
              Discover medical education at <em>UCT</em>
            </h1>
            <p>
              Guides on MBBS abroad, admissions, campus life and Timor-Leste — written for students and
              parents exploring Universidade Católica Timorense.
            </p>
          </div>
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="blog-hub-hero__feature">
              <img src={featured.image} alt={featured.title} />
              <span className="blog-hub-cat blog-hub-cat--on-media">{featured.category}</span>
              <div className="blog-hub-hero__caption">
                <strong>{featured.title}</strong>
              </div>
            </Link>
          )}
        </div>

        <div className="container blog-hub-search">
          <h2>Explore Blogs &amp; Updates</h2>
          <p>Search expert articles, counselling guides, and insights</p>
          <form className="blog-hub-search__bar" onSubmit={applySearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <label className="sr-only" htmlFor="blog-hub-q">
              Search articles
            </label>
            <input
              id="blog-hub-q"
              type="search"
              placeholder="Search blog articles, guides, updates..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button type="submit" className="btn btn--gold">
              Search
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      <section className="section blog-hub-explore">
        <div className="container">
          <div className="blog-hub-explore__head">
            <h2>Explore Top University Blogs</h2>
            <button
              type="button"
              className="btn btn--gold btn--sm"
              onClick={() => {
                setCategory("All");
                setQuery("");
                setDraft("");
              }}
            >
              Explore All Blogs
            </button>
          </div>
          <div className="blog-hub-pills" role="tablist" aria-label="Blog categories">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={category === cat}
                className={`blog-hub-pill${category === cat ? " is-active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {rail.length === 0 ? (
            <p className="blog-hub-empty">No articles match your search.</p>
          ) : (
            <div className="blog-hub-rail" aria-label="Featured guides">
              {rail.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-hub-tile">
                  <div className="blog-hub-tile__media">
                    <img src={post.image} alt="" loading="lazy" />
                  </div>
                  <div className="blog-hub-tile__body">
                    <h3>{post.title}</h3>
                    <span className="blog-hub-cat">{post.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section blog-hub-latest">
        <div className="container">
          <div className="blog-hub-latest__intro">
            <h2>Latest Blog Posts</h2>
            <p>Fresh guides from UCT on admissions, campus life and studying MBBS abroad.</p>
          </div>

          {latestMain && (
            <div className="blog-hub-latest__grid">
              <Link to={`/blog/${latestMain.slug}`} className="blog-hub-feature">
                <div className="blog-hub-feature__media">
                  <img src={latestMain.image} alt="" />
                </div>
                <span className="blog-hub-cat">{latestMain.category}</span>
                <h3>{latestMain.title}</h3>
                <p>{latestMain.excerpt}</p>
                <div className="blog-hub-meta">
                  <span>{latestMain.date}</span>
                  <span>{latestMain.readingTime}</span>
                </div>
              </Link>

              <div className="blog-hub-side">
                {latestSide.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-hub-mini">
                    <img src={post.image} alt="" loading="lazy" />
                    <div>
                      <span className="blog-hub-cat">{post.category}</span>
                      <h3>{post.title}</h3>
                      <div className="blog-hub-meta">
                        <span>{post.date}</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Interested in Studying at UCT?"
        desc="Talk to an admission counsellor about the MBBS program, scholarships and campus life."
      />
    </>
  );
}
