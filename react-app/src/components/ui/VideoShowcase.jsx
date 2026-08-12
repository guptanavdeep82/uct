import { useEffect, useState } from "react";
import { videoMoments } from "../../data/media";
import { siteInfo } from "../../data/siteInfo";

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

  const current = active !== null ? videoMoments[active] : null;

  return (
    <>
      <div className="video-showcase__grid" data-animate="fade-up">
        {videoMoments.map((video, i) => (
          <button
            key={video.title}
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
          <div className="video-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal__close" aria-label="Close" onClick={() => setActive(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="video-modal__media">
              <img src={current.thumb} alt={current.title} />
              <a
                className="video-modal__playbtn"
                href={siteInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch on YouTube"
              >
                <PlayGlyph />
              </a>
            </div>
            <div className="video-modal__info">
              <h3>{current.title}</h3>
              <p>{current.desc}</p>
              <a className="btn btn--gold" href={siteInfo.youtube} target="_blank" rel="noopener noreferrer">
                Watch Full Video on YouTube
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
