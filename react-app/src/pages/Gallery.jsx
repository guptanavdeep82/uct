import { useMemo, useState } from "react";
import Seo from "../components/ui/Seo";
import InnerPageHero from "../components/ui/InnerPageHero";
import SectionHeading from "../components/ui/SectionHeading";
import GalleryGrid from "../components/ui/GalleryGrid";
import VideoShowcase from "../components/ui/VideoShowcase";
import InstagramShowcase from "../components/ui/InstagramShowcase";
import CTASection from "../components/ui/CTASection";
import { images } from "../data/images";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "students", label: "Students" },
  { id: "laboratories", label: "Laboratories" },
  { id: "events", label: "Events" },
  { id: "cultural", label: "Cultural Activities" },
];

export default function Gallery() {
  const [category, setCategory] = useState("all");

  const items = useMemo(() => {
    if (category === "all") return images.gallery;
    return images.gallery.filter((item) => item.category === category);
  }, [category]);

  return (
    <>
      <Seo
        title="Gallery"
        description="Explore campus life at Universidade Católica Timorense — students, events, laboratories and cultural moments."
        path="/gallery"
      />
      <InnerPageHero
        title="Campus Gallery"
        description="A visual journey through academic life, celebrations and everyday moments at UCT."
        image={images.gallery[2].src}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Moments at UCT" title="Explore by Category" />
          <div className="post-filters" role="tablist" aria-label="Gallery categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={category === cat.id}
                className={`filter-chip${category === cat.id ? " is-active" : ""}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <GalleryGrid items={items} />
        </div>
      </section>

      <section className="video-showcase" aria-label="UCT Moments — campus videos">
        <div className="container">
          <SectionHeading
            tag="UCT Moments"
            title="Real Life. Real Stories."
            desc="Watch campus tours, ceremonies and student moments straight from our official YouTube channel."
          />
          <VideoShowcase />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading tag="Follow Along" title="UCT on Instagram" desc="Daily snapshots of campus life, straight from our Instagram feed." />
          <InstagramShowcase />
        </div>
      </section>

      <CTASection title="See UCT for Yourself" desc="Ready to experience campus life in Timor-Leste? Start your admission journey today." />
    </>
  );
}
