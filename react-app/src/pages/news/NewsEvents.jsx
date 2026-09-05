import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import InnerPageHero from "../../components/ui/InnerPageHero";
import CTASection from "../../components/ui/CTASection";
import { images } from "../../data/images";
import { newsEvents } from "../../data/newsEvents";

const FILTERS = ["All", "News", "Events", "Academic", "Student Life", "Cultural"];
const PAGE_SIZE = 6;

function formatDateParts(date) {
  const [month, day, year] = date.replace(",", "").split(" ");
  return { month: month?.slice(0, 3) || "", day: day || "", year: year || "" };
}

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
  const rest = filtered.slice(1);
  const list = rest.slice(0, visible);

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
        <section className="bulletin-cover-section">
          <div className="container">
            <p className="bulletin-masthead">Campus Bulletin · Universidade Católica Timorense</p>
            <Link to={`/news/${featured.slug}`} className="bulletin-cover">
              <div className="bulletin-cover__media">
                <img src={featured.image} alt="" />
              </div>
              <div className="bulletin-cover__copy">
                <p className="bulletin-kicker">
                  Latest story · {featured.date}
                </p>
                <span className="bulletin-badge">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="bulletin-cover__cta">
                  Read the story
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="section bulletin-board">
        <div className="container">
          <div className="bulletin-board__head">
            <div>
              <p className="section-head__tag">The board</p>
              <h2 className="section-head__title">What is happening on campus</h2>
            </div>
            <p className="bulletin-board__lede">
              Ceremonies, cultural days and official updates — posted as a dated campus bulletin, not a magazine feed.
            </p>
          </div>

          <div className="post-filters bulletin-filters" role="tablist" aria-label="News categories">
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

          {list.length === 0 && !featured ? (
            <p className="bulletin-empty">No stories in this category yet.</p>
          ) : (
            <div className="bulletin-list">
              {list.map((item) => {
                const parts = formatDateParts(item.date);
                return (
                  <Link key={item.slug} to={`/news/${item.slug}`} className="bulletin-row">
                    <time className="bulletin-row__date" dateTime={item.date}>
                      <span>{parts.month}</span>
                      <strong>{parts.day}</strong>
                      <em>{parts.year}</em>
                    </time>
                    <div className="bulletin-row__media">
                      <img src={item.image} alt="" loading="lazy" />
                    </div>
                    <div className="bulletin-row__body">
                      <span className="bulletin-badge bulletin-badge--ink">{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.excerpt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {visible < rest.length && (
            <div className="bulletin-more">
              <button type="button" className="btn btn--outline btn--lg" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Older notices
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
