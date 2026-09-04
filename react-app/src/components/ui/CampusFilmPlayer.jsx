import { useEffect, useRef, useState } from "react";
import { campusFilms } from "../../data/campusFilms";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function CampusFilmPlayer() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);
  const stageRef = useRef(null);
  const film = campusFilms[index];

  const selectFilm = (nextIndex, autoPlay = true) => {
    setIndex(nextIndex);
    setStarted(autoPlay);
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !started) return undefined;
    el.load();
    const play = () => {
      el.play().catch(() => {});
    };
    el.addEventListener("loadeddata", play, { once: true });
    return () => el.removeEventListener("loadeddata", play);
  }, [index, started, film.src]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) videoRef.current?.pause();
      },
      { threshold: 0.15 }
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="campus-films__layout" ref={stageRef}>
      <div className="campus-films__stage">
        <div className="campus-films__phone">
          <video
            ref={videoRef}
            key={film.src}
            className="campus-films__video"
            poster={film.thumb}
            preload="none"
            playsInline
            controls={started}
            aria-label={film.title}
          >
            <source src={film.src} type="video/mp4" />
          </video>

          {!started && (
            <button
              type="button"
              className="campus-films__start"
              onClick={() => selectFilm(index, true)}
              aria-label={`Play ${film.title}`}
            >
              <img src={film.thumb} alt="" />
              <span className="campus-films__scrim" aria-hidden="true" />
              <span className="campus-films__play" aria-hidden="true">
                <PlayGlyph />
              </span>
              <span className="campus-films__caption">
                <span>Film {String(index + 1).padStart(2, "0")}</span>
                <strong>{film.title}</strong>
                <small>{film.desc}</small>
              </span>
            </button>
          )}
        </div>
      </div>

      <ol className="campus-films__rail" aria-label="Campus films">
        {campusFilms.map((clip, i) => {
          const active = i === index;
          return (
            <li key={clip.id}>
              <button
                type="button"
                className={`campus-films__clip${active ? " is-active" : ""}`}
                aria-pressed={active}
                aria-label={`${clip.title}${active ? ", now playing" : ""}`}
                onClick={() => selectFilm(i, true)}
              >
                <img src={clip.thumb} alt="" loading="lazy" />
                <span className="campus-films__clip-index">{String(i + 1).padStart(2, "0")}</span>
                {active && started ? (
                  <span className="campus-films__live">Now playing</span>
                ) : (
                  <span className="campus-films__clip-play" aria-hidden="true">
                    <PlayGlyph />
                  </span>
                )}
                <span className="campus-films__clip-title">{clip.title}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
