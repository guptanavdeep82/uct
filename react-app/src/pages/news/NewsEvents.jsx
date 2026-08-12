import { useMemo, useState } from "react";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import PostCard from "../../components/ui/PostCard";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { newsEvents } from "../../data/newsEvents";

const FILTERS = ["All", "News", "Events", "Academic", "Student Life", "Cultural"];
const PAGE_SIZE = 6;

export default function NewsEvents() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (filter === "All") return newsEvents;
    if (filter === "Events") {
      return newsEvents.filter((n) => n.category === "Events" || n.category === "Cultural" || n.category === "Academic");
    }
    return newsEvents.filter((n) => n.category === filter);
  }, [filter]);

  const featured = filtered[0];
  const list = filtered.slice(0, visible);

  return (
    <>
      <Seo
        title="News & Events"
        description="Latest news, campus events and academic milestones from Universidade Católica Timorense."
        path="/news-events"
      />
      <InnerPageHero
        title="News & Events"
        description="Stories from campus — celebrations, ceremonies and moments that shape student life at UCT."
        image={images.news.holi}
      />

      {featured && (
        <section className="section">
          <div className="container">
            <SectionHeading tag="Featured" title="Latest Highlights" />
            <PostCard
              image={featured.image}
              category={featured.category}
              date={featured.date}
              title={featured.title}
              excerpt={featured.excerpt}
              to={`/news/${featured.slug}`}
            />
          </div>
        </section>
      )}

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <SectionHeading tag="Archive" title="All News & Events" />
          <div className="post-filters" role="tablist" aria-label="News categories">
            {FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                className={`filter-chip${filter === cat ? " is-active" : ""}`}
                onClick={() => {
                  setFilter(cat);
                  setVisible(PAGE_SIZE);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="post-grid">
            {list.map((item, i) => (
              <PostCard
                key={item.slug}
                image={item.image}
                category={item.category}
                date={item.date}
                title={item.title}
                excerpt={item.excerpt}
                to={`/news/${item.slug}`}
                delay={(i % 3) * 80}
              />
            ))}
          </div>
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
