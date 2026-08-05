/* ==========================================================================
   UNIVERSIDADE CATÓLICA TIMORENSE — Homepage Scripts
   Vanilla JavaScript only. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. PRELOADER — hide once the page has fully loaded
  ------------------------------------------------------------------ */
  const preloader = document.getElementById("preloader");

  window.addEventListener("load", () => {
    // Small delay so the brand moment is visible even on fast connections
    setTimeout(() => preloader.classList.add("is-done"), 500);
  });

  // Safety net: never trap the user behind the loader
  setTimeout(() => preloader.classList.add("is-done"), 4000);

  /* ------------------------------------------------------------------
     2. SCROLL PROGRESS BAR + STICKY NAVBAR + BACK-TO-TOP
     (single scroll listener, throttled with requestAnimationFrame)
  ------------------------------------------------------------------ */
  const progressBar = document.getElementById("scrollProgress");
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  let ticking = false;

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar width
    progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + "%";

    // Navbar elevation after leaving the top
    navbar.classList.toggle("is-scrolled", scrollTop > 10);

    // Back-to-top visibility
    backToTop.classList.toggle("is-visible", scrollTop > 600);

    highlightActiveLink(scrollTop);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ------------------------------------------------------------------
     3. ACTIVE NAV LINK HIGHLIGHTING (scroll-spy)
  ------------------------------------------------------------------ */
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const spySections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function highlightActiveLink(scrollTop) {
    const probe = scrollTop + window.innerHeight * 0.35;
    let current = spySections[0];

    spySections.forEach((section) => {
      if (section.offsetTop <= probe) current = section;
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + current.id);
    });
  }

  /* ------------------------------------------------------------------
     4. MOBILE MENU
  ------------------------------------------------------------------ */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close the panel when a link inside it is clicked
  navMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      navMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ------------------------------------------------------------------
     5. SCROLL-REVEAL ANIMATIONS (IntersectionObserver)
     Elements opt in via data-animate="fade-up|fade-left|fade-right"
     and can stagger with data-delay="ms".
  ------------------------------------------------------------------ */
  const animated = document.querySelectorAll("[data-animate]");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = parseInt(el.dataset.delay || "0", 10);

        setTimeout(() => el.classList.add("is-visible"), delay);
        observer.unobserve(el); // animate once
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  animated.forEach((el) => revealObserver.observe(el));

  /* ------------------------------------------------------------------
     6. ANIMATED COUNTERS
     Numbers count up when the stats band scrolls into view.
  ------------------------------------------------------------------ */
  const counters = document.querySelectorAll(".counter");

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (target * eased).toFixed(decimals);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toFixed(decimals);
      }
    }

    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => counterObserver.observe(el));

  /* ------------------------------------------------------------------
     7. TESTIMONIAL CAROUSEL
     Autoplay + arrows + dots + swipe support.
  ------------------------------------------------------------------ */
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const dotsWrap = document.getElementById("carouselDots");

  let slideIndex = 0;
  let autoplayTimer = null;

  // Build one dot per slide
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
    dot.addEventListener("click", () => goToSlide(i, true));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.children);

  function goToSlide(index, userInitiated) {
    slideIndex = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + slideIndex * 100 + "%)";
    dots.forEach((d, i) => d.classList.toggle("is-active", i === slideIndex));
    if (userInitiated) restartAutoplay();
  }

  function restartAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => goToSlide(slideIndex + 1, false), 6000);
  }

  prevBtn.addEventListener("click", () => goToSlide(slideIndex - 1, true));
  nextBtn.addEventListener("click", () => goToSlide(slideIndex + 1, true));

  // Touch swipe
  let touchStartX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) goToSlide(slideIndex + (delta < 0 ? 1 : -1), true);
    },
    { passive: true }
  );

  restartAutoplay();

  /* ------------------------------------------------------------------
     9. GALLERY LIGHTBOX
  ------------------------------------------------------------------ */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll(".gallery__item").forEach((item) => {
    item.addEventListener("click", () => {
      lightboxImg.src = item.dataset.full;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    // removeAttribute instead of src = "" — an empty src makes the
    // browser try to load the current page URL as an image
    lightboxImg.removeAttribute("src");
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  /* ------------------------------------------------------------------
     10. CAMPUS VIDEO — swap poster for a YouTube embed on demand
     (keeps the initial page free of heavy third-party iframes)
  ------------------------------------------------------------------ */
  const videoStage = document.getElementById("videoStage");
  const videoThumbs = document.querySelectorAll(".video-thumb");

  function playVideo(videoId) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1&rel=0";
    iframe.title = "UCT campus video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoStage.replaceChildren(iframe);
  }

  videoStage.addEventListener("click", (e) => {
    const poster = e.target.closest(".video__poster");
    if (poster) playVideo(poster.dataset.videoId);
  });

  videoThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      videoThumbs.forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");
      playVideo(thumb.dataset.videoId);
      videoStage.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  /* ------------------------------------------------------------------
     11. FAQ ACCORDION (one open at a time)
  ------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-item__q");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ------------------------------------------------------------------
     12. ENQUIRY FORM — client-side validation + friendly success state
  ------------------------------------------------------------------ */
  const form = document.getElementById("enquiryForm");
  const successMsg = document.getElementById("formSuccess");

  function setError(input, message) {
    const field = input.closest(".form-field");
    field.classList.toggle("has-error", Boolean(message));
    field.querySelector(".form-error").textContent = message || "";
  }

  function validateField(input) {
    const value = input.value.trim();

    if (input.required && !value) {
      setError(input, "This field is required.");
      return false;
    }

    if (input.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError(input, "Please enter a valid email address.");
      return false;
    }

    if (input.type === "tel" && value && !/^[+\d][\d\s\-()]{6,17}$/.test(value)) {
      setError(input, "Please enter a valid phone number.");
      return false;
    }

    setError(input, "");
    return true;
  }

  // Validate as the user leaves each field
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.closest(".form-field").classList.contains("has-error")) validateField(input);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = Array.from(form.querySelectorAll("input, textarea"));
    const allValid = inputs.map((input) => validateField(input)).every(Boolean);

    if (!allValid) {
      form.querySelector(".has-error input, .has-error textarea")?.focus();
      return;
    }

    // No backend on this static build — show the confirmation state.
    successMsg.hidden = false;
    form.reset();
    setTimeout(() => (successMsg.hidden = true), 8000);
  });

  /* ------------------------------------------------------------------
     13. 3D TILT CARDS
     Cursor-tracking perspective tilt + glare highlight. Inline styles
     override the stylesheet, so reveal/hover CSS is untouched when idle.
     Desktop pointers only; respects prefers-reduced-motion.
  ------------------------------------------------------------------ */
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (finePointer && !reducedMotion) {
    const MAX_TILT = 7; // degrees — subtle, never disorienting

    document
      .querySelectorAll(".why-card, .hero-stat, .facility-card, .stepper__step, .hero__visual-frame")
      .forEach((card) => {
        let frame = null;
        // The hero visual composition can tilt further — it reads as a single
        // floating "object", not a flat card, so a deeper tilt feels intentional.
        const maxTilt = card.classList.contains("hero__visual-frame") ? 10 : MAX_TILT;

        card.addEventListener("pointerenter", () => {
          // Short transition so the tilt follows the cursor fluidly
          card.style.transition = "transform 0.12s ease-out";
        });

        card.addEventListener("pointermove", (e) => {
          // Don't fight the entrance animation of unrevealed cards
          if (card.hasAttribute("data-animate") && !card.classList.contains("is-visible")) return;
          if (frame) return;

          frame = requestAnimationFrame(() => {
            frame = null;
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;   // 0 → 1
            const py = (e.clientY - rect.top) / rect.height;   // 0 → 1
            const ry = ((px - 0.5) * 2 * maxTilt).toFixed(2);
            const rx = ((0.5 - py) * 2 * maxTilt).toFixed(2);

            card.style.transform =
              "perspective(1000px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale(1.03)";
            card.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
            card.style.setProperty("--my", (py * 100).toFixed(1) + "%");
          });
        });

        card.addEventListener("pointerleave", () => {
          if (frame) {
            cancelAnimationFrame(frame);
            frame = null;
          }
          // Ease back to rest, then hand control back to the stylesheet
          card.style.transition = "transform 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)";
          card.style.transform = "";
          setTimeout(() => {
            card.style.transition = "";
          }, 560);
        });
      });

    /* ----------------------------------------------------------------
       14. HERO MOUSE PARALLAX
       Layers drift at different depths as the cursor moves. Uses the
       separate `translate` property so it composes with (and never
       conflicts with) keyframe `transform` animations on the orbs.
    ---------------------------------------------------------------- */
    const hero = document.querySelector(".hero");
    const parallaxLayers = [
      { el: document.querySelector(".hero__orb--1"), depth: -30 },
      { el: document.querySelector(".hero__orb--2"), depth: 38 },
      { el: document.querySelector(".hero__visual-badge"), depth: 16 },
      { el: document.querySelector(".hero__visual-tag"), depth: -18 },
    ].filter((layer) => layer.el);

    let heroFrame = null;

    hero.addEventListener("pointermove", (e) => {
      if (heroFrame) return;
      heroFrame = requestAnimationFrame(() => {
        heroFrame = null;
        const dx = e.clientX / window.innerWidth - 0.5;
        const dy = e.clientY / window.innerHeight - 0.5;
        parallaxLayers.forEach(({ el, depth }) => {
          el.style.translate =
            (dx * depth).toFixed(1) + "px " + (dy * depth * 0.7).toFixed(1) + "px";
        });
      });
    });

    hero.addEventListener("pointerleave", () => {
      parallaxLayers.forEach(({ el }) => {
        el.style.translate = "0px 0px";
      });
    });
  }
})();
