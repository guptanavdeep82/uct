import { useMemo, useState } from "react";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import PostCard from "../../components/ui/PostCard";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { blogPosts, blogCategories } from "../../data/blog";

const PAGE_SIZE = 6;

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

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
  const list = filtered.slice(0, visible);

  return (
    <>
      <Seo
        title="Blog"
        description="Guides on MBBS abroad, student life, admissions and Timor-Leste from Universidade Católica Timorense."
        path="/blog"
      />
      <InnerPageHero
        title="UCT Blog"
        description="Practical insights for students and parents exploring medical education at UCT and beyond."
        image={images.campus[0]}
      />

      <section className="section">
        <div className="container">
          <div className="blog-toolbar">
            <label className="blog-search">
              <span className="sr-only">Search blog</span>
              <input
                type="search"
                placeholder="Search articles…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
              />
            </label>
            <div className="post-filters" role="tablist" aria-label="Blog categories">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  className={`filter-chip${category === cat ? " is-active" : ""}`}
                  onClick={() => {
                    setCategory(cat);
                    setVisible(PAGE_SIZE);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {featured && (
            <>
              <SectionHeading tag="Featured" title="Editor's Pick" />
              <div style={{ marginBottom: "3rem" }}>
                <PostCard
                  image={featured.image}
                  category={featured.category}
                  date={featured.date}
                  title={featured.title}
                  excerpt={featured.excerpt}
                  to={`/blog/${featured.slug}`}
                />
              </div>
            </>
          )}

          <SectionHeading tag="Latest Posts" title="All Articles" />
          {list.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--gray-500)" }}>No articles match your search.</p>
          ) : (
            <div className="post-grid">
              {list.map((post, i) => (
                <PostCard
                  key={post.slug}
                  image={post.image}
                  category={post.category}
                  date={`${post.date} · ${post.readingTime}`}
                  title={post.title}
                  excerpt={post.excerpt}
                  to={`/blog/${post.slug}`}
                  delay={(i % 3) * 80}
                />
              ))}
            </div>
          )}

          {visible < filtered.length && (
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <button type="button" className="btn btn--outline btn--lg" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
