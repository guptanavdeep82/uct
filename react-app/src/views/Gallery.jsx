"use client";

import { useMemo, useState } from "react";
import Seo from "../components/ui/Seo";
import InnerPageHero from "../components/ui/InnerPageHero";
import SectionHeading from "../components/ui/SectionHeading";
import GalleryGrid from "../components/ui/GalleryGrid";
import VideoShowcase from "../components/ui/VideoShowcase";
import InstagramShowcase from "../components/ui/InstagramShowcase";
import CTASection from "../components/ui/CTASection";
import { images } from "../data/images";

const CATEGORY_LABELS = {
  all: "All",
  campus: "Campus Exterior",
  classrooms: "Classrooms",
  students: "Student Life",
  laboratories: "Laboratories",
  events: "UCT Events",
  cultural: "IMD Events",
  history: "Ground Breaking",
};

export default function Gallery({ photos }) {
  const library = Array.isArray(photos) ? photos : images.gallery;
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const counts = new Map();
    library.forEach((item) => {
      if (!item?.category) return;
      counts.set(item.category, (counts.get(item.category) || 0) + 1);
    });
    const ordered = Object.keys(CATEGORY_LABELS)
      .filter((id) => id !== "all" && counts.has(id))
      .map((id) => ({ id, label: CATEGORY_LABELS[id] }));
    const extras = [...counts.keys()]
      .filter((id) => !CATEGORY_LABELS[id])
      .map((id) => ({
        id,
        label: library.find((item) => item.category === id)?.category_label || id,
      }));
    return [{ id: "all", label: "All" }, ...ordered, ...extras];
  }, [library]);

  const items = useMemo(() => {
    if (category === "all") return library;
    return library.filter((item) => item.category === category);
  }, [category, library]);

  return (
    <>
      <Seo
        title="Gallery"
        description="Explore campus life at Universidade Católica Timorense — students, events, laboratories and cultural moments."
        path="/media"
      />
      <InnerPageHero
        title="Campus Gallery"
        description="A visual journey through academic life, celebrations and everyday moments at UCT."
        image={images.exterior[0]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading tag="Moments at UCT" title="Explore by Category" />
          <div className="post-filters" role="tablist" aria-label="Gallery categories">
            {categories.map((cat) => (
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
          {items.length ? (
            <GalleryGrid items={items} />
          ) : (
            <p className="gallery-empty">No photos in this category yet.</p>
          )}
        </div>
      </section>

      <section className="video-showcase" aria-label="UCT Moments — campus videos">
        <div className="container">
          <SectionHeading
            tag="UCT Moments"
            title="Real Life. Real Stories."
            desc="Watch campus films from Díli — student voices, labs, library and life on campus."
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
