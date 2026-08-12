import { useEffect, useRef, useState } from "react";

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const touchStartX = useRef(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const item = items[index];
  if (!item) return null;

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) onPrev();
    else onNext();
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img src={item.src} alt={item.alt} className="lightbox__img" onClick={(e) => e.stopPropagation()} />
      <button className="lightbox__close" aria-label="Close" onClick={onClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      <button
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        className="lightbox__nav lightbox__nav--next"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <p className="lightbox__caption">{item.alt}</p>
    </div>
  );
}

export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);

  return (
    <>
      <div className="gallery__grid" data-animate="fade-up">
        {items.map((item, i) => (
          <button key={item.src} onClick={() => setActiveIndex(i)} aria-label={`View photo: ${item.alt}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span>{item.alt}</span>
          </button>
        ))}
      </div>
      {activeIndex !== null && (
        <Lightbox items={items} index={activeIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}
