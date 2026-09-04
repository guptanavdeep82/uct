import { useEffect, useState } from "react";
import { campusFilms } from "../../data/campusFilms";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function VideoShowcase() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const current = active !== null ? campusFilms[active] : null;

  return (
    <>
      <div className="video-showcase__grid" data-animate="fade-up">
        {campusFilms.map((video, i) => (
          <button
            key={video.id}
            type="button"
            className="video-card"
            onClick={() => setActive(i)}
            aria-label={`Play video: ${video.title}`}
          >
            <img src={video.thumb} alt={video.title} loading="lazy" />
            <span className="video-card__scrim" aria-hidden="true" />
            <span className="video-card__play" aria-hidden="true">
              <PlayGlyph />
            </span>
            <span className="video-card__body">
              <strong>{video.title}</strong>
              <small>{video.desc}</small>
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setActive(null)}>
          <div className="video-modal__panel video-modal__panel--reel" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal__close" aria-label="Close" onClick={() => setActive(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="video-modal__reel">
              <video src={current.src} poster={current.thumb} controls autoPlay playsInline preload="metadata">
                Your browser cannot play this campus film.
              </video>
            </div>
            <div className="video-modal__info">
              <h3>{current.title}</h3>
              <p>{current.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
