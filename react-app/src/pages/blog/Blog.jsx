import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { blogPosts, blogCategories } from "../../data/blog";

const PAGE_SIZE = 5;

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
  const rest = filtered.slice(featured ? 1 : 0);
  const list = rest.slice(0, visible);

  return (
    <>
      <Seo
        title="Blog"
        description="Guides on MBBS abroad, student life, admissions and Timor-Leste from Universidade Católica Timorense."
        path="/blog"
      />
      <InnerPageHero
        title="UCT Reading Room"
        description="Practical insights for students and parents exploring medical education at UCT and beyond."
        image={images.campus[0]}
      />

      <section className="section reading-room">
        <div className="container">
          <div className="reading-masthead">
            <div>
              <p className="section-head__tag">Guides & essays</p>
              <h2 className="section-head__title">Start with a question, leave with a plan</h2>
            </div>
            <label className="reading-search">
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                placeholder="Search hostels, FMGE, Timor-Leste…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
              />
            </label>
          </div>

          <div className="reading-cats" role="tablist" aria-label="Blog categories">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={category === cat}
                className={`reading-cat${category === cat ? " is-active" : ""}`}
                onClick={() => {
                  setCategory(cat);
                  setVisible(PAGE_SIZE);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {featured && (
            <Link to={`/blog/${featured.slug}`} className="reading-lead">
              <div className="reading-lead__media">
                <img src={featured.image} alt="" />
              </div>
              <div className="reading-lead__copy">
                <p className="reading-lead__kicker">Start here</p>
                <span className="reading-topic">{featured.category}</span>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <div className="reading-byline">
                  <span>{featured.author}</span>
                  <span>{featured.readingTime}</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </Link>
          )}

          {list.length === 0 && !featured ? (
            <p className="reading-empty">No articles match your search.</p>
          ) : (
            <div className="reading-stack">
              {list.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="reading-row">
                  <div className="reading-row__media">
                    <img src={post.image} alt="" loading="lazy" />
                  </div>
                  <div className="reading-row__body">
                    <span className="reading-topic">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="reading-byline">
                      <span>{post.author}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {visible < rest.length && (
            <div className="reading-more">
              <button type="button" className="btn btn--outline btn--lg" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                More essays
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
