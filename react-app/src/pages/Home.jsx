import { Link } from "react-router-dom";
import "../styles/home.css";
import Seo from "../components/ui/Seo";
import SectionHeading from "../components/ui/SectionHeading";
import FeatureCard from "../components/ui/FeatureCard";
import Stats from "../components/ui/Stats";
import ImageCard from "../components/ui/ImageCard";
import AdmissionSteps from "../components/ui/AdmissionSteps";
import FAQAccordion from "../components/ui/FAQAccordion";
import CTASection from "../components/ui/CTASection";
import GalleryGrid from "../components/ui/GalleryGrid";
import EnquiryForm from "../components/ui/EnquiryForm";
import { images } from "../data/images";
import { siteInfo, quickStats } from "../data/siteInfo";
import { generalFaq } from "../data/faq";
import { rectorMessage } from "../data/about";
import {
  whyChooseUct,
  mbbsHighlights,
  homeAdmissionSteps,
  facilityCards,
  homeTestimonials,
  videoStories,
  homeAccredBadges,
} from "../data/home";

export default function Home() {
  return (
    <>
      <Seo
        title="Study MBBS in Timor-Leste"
        description="Study MBBS in Timor-Leste at Universidade Católica Timorense (UCT) — an NMC-compliant, English-medium MBBS program with world-class facilities, global faculty and affordable fees."
        path="/"
      />

      {/* HERO */}
      <section className="hero" id="home" aria-label="Introduction">
        <div className="hero__bg" aria-hidden="true">
          <img src={images.hero.students} alt="" />
        </div>
        <div className="hero__overlay" aria-hidden="true"></div>

        <div className="hero__container">
          <div className="hero__content">
            <span className="hero__badge" data-animate="fade-up">
              Learn. Serve. Lead.
            </span>
            <h1 className="hero__title" data-animate="fade-up" data-delay="80">
              Study MBBS in Timor-Leste at an <span className="text-gold">International Standard</span>
            </h1>
            <p className="hero__desc" data-animate="fade-up" data-delay="160">
              Join UCT's globally aligned, NMC-compliant MBBS program designed for Indian and international
              students.
            </p>
            <div className="hero__actions" data-animate="fade-up" data-delay="240">
              <Link to="/admissions/admission-enquiry" className="btn btn--gold btn--lg">
                Apply Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/academics/mbbs-program" className="btn btn--glass btn--lg">
                Explore Program
              </Link>
            </div>

            <div className="hero__stats glass-card" data-animate="fade-up" data-delay="320">
              {quickStats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE UCT */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading tag="Built for Your Success" title={<>Why Choose <span className="text-gold-dark">UCT</span></>} desc="UCT offers a world-class MBBS program that combines academic excellence, clinical experience, and global opportunities — all within a safe and student-friendly campus in Timor-Leste." />
          <div className="card-grid card-grid--4">
            {whyChooseUct.map((item, i) => (
              <FeatureCard key={item.title} title={item.title} desc={item.desc} delay={(i % 4) * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME / INTRO */}
      <section className="section" style={{ background: "var(--gray-50)" }} aria-labelledby="intro-title">
        <div className="container intro__grid">
          <div className="img-reveal" data-animate="fade-left">
            <img src={images.welcomeMou} alt="UCT leadership signing a memorandum of understanding" loading="lazy" />
          </div>
          <div data-animate="fade-right">
            <span className="section-head__tag">Learn. Serve. Lead.</span>
            <h2 className="section-head__title" id="intro-title">
              Welcome to <span className="text-gold-dark">{siteInfo.name}</span>
            </h2>
            <p style={{ marginTop: "1.1rem", color: "var(--gray-500)" }}>
              UCT is a Catholic medical university in Díli, Timor-Leste, offering an MBBS program based on the
              Indian curriculum. Established in 2021, UCT provides quality education in English, blending
              academic excellence with ethical values.
            </p>
            <p style={{ marginTop: "0.9rem", color: "var(--gray-500)" }}>
              With modern facilities and hands-on clinical exposure, UCT prepares students to become skilled,
              compassionate and globally ready healthcare professionals — making studying MBBS abroad simple
              and secure for Indian students.
            </p>
            <ul className="intro__checks">
              <li>
                <span className="check" aria-hidden="true">✓</span> Modelled on AIIMS Delhi academic structure
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span> Safe, peaceful and welcoming island nation
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span> Strong Indian student community on campus
              </li>
            </ul>
            <Link to="/academics/mbbs-program" className="btn btn--primary">
              Discover Our Program
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* MBBS HIGHLIGHTS */}
      <section className="section" style={{ background: "linear-gradient(160deg, var(--blue-deep) 0%, var(--blue) 100%)" }} aria-labelledby="mbbs-title">
        <div className="container">
          <SectionHeading tag="Everything You Need to Succeed" title={<span style={{ color: "var(--white)" }}>MBBS Program <span className="text-gold">Highlights</span></span>} />
          <div className="card-grid card-grid--3">
            {mbbsHighlights.map((item, i) => (
              <div key={item.title} className="glass-card--dark" style={{ padding: "1.8rem 1.6rem" }} data-animate="fade-up" data-delay={(i % 3) * 90}>
                <span style={{ fontFamily: "var(--font-head)", color: "var(--gold)", fontWeight: 700, fontSize: "1.4rem" }}>{item.num}</span>
                <h3 style={{ color: "var(--white)", marginTop: "0.6rem", fontSize: "1.05rem" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "0.4rem", fontSize: "0.9rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="section" aria-labelledby="admission-title">
        <div className="container">
          <SectionHeading tag="Simple & Transparent" title={<>Admission <span className="text-gold-dark">Process</span></>} desc="From enquiry to your first white-coat day — five clear steps." />
          <AdmissionSteps steps={homeAdmissionSteps} />
          <div style={{ textAlign: "center", marginTop: "3rem" }} data-animate="fade-up">
            <Link to="/admissions/admission-process" className="btn btn--primary btn--lg">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* CAMPUS FACILITIES */}
      <section className="section" style={{ background: "var(--gray-50)" }} aria-labelledby="facilities-title">
        <div className="container">
          <SectionHeading tag="A World-Class Medical Campus" title={<>Campus <span className="text-gold-dark">Facilities</span></>} desc="Smart classrooms, advanced laboratories and digital learning in the heart of Southeast Asia." />
          <div className="card-grid card-grid--3">
            {facilityCards.map((card, i) => (
              <ImageCard key={card.title} {...card} delay={(i % 3) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <Stats
        items={[
          { value: "2021", label: "Year Established" },
          { value: "5.5 Yrs", label: "MBBS Program" },
          { value: "4+", label: "Countries of Faculty" },
          { value: "100%", label: "English Medium" },
        ]}
      />

      {/* RECOGNITION & ACCREDITATION */}
      <section className="section" aria-labelledby="recognition-title">
        <div className="container">
          <SectionHeading tag="Globally Trusted" title={<>Recognition &amp; <span className="text-gold-dark">Accreditation</span></>} />
          <div className="accred-badges">
            {homeAccredBadges.map((badge, i) => (
              <div className="accred-badge" key={badge.code} data-animate="fade-up" data-delay={i * 60}>
                {badge.logo ? (
                  <img src={badge.logo} alt={badge.name} loading="lazy" />
                ) : (
                  <span className="accred-card__monogram" aria-hidden="true">
                    {badge.code.slice(0, 1)}
                  </span>
                )}
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/accreditation" className="btn btn--outline">
              View Full Accreditation Details
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section" aria-labelledby="testimonials-title">
        <div className="container">
          <SectionHeading tag="UCT Moments" title={<span style={{ color: "var(--white)" }}>Real Life. <span className="text-gold">Real Stories.</span></span>} />
          <div className="testimonial-grid">
            {homeTestimonials.map((t, i) => (
              <figure className="testimonial" key={t.name} data-animate="fade-up" data-delay={i * 80}>
                <svg className="testimonial__quote" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.6 4C6 6.2 4 9.3 4 13.1c0 3.4 2 5.9 4.8 5.9 2.3 0 4-1.7 4-4 0-2.2-1.5-3.8-3.6-3.8-.4 0-.9.1-1 .1.3-2 2-4.3 3.9-5.5L9.6 4zm10 0c-3.5 2.2-5.6 5.3-5.6 9.1 0 3.4 2 5.9 4.9 5.9 2.2 0 3.9-1.7 3.9-4 0-2.2-1.5-3.8-3.5-3.8-.5 0-.9.1-1.1.1.3-2 2.1-4.3 4-5.5L19.6 4z" />
                </svg>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* RECTOR MESSAGE */}
      <section className="section" id="rector" aria-labelledby="rector-title">
        <div className="container rector__grid">
          <div className="rector__media" data-animate="fade-left">
            <figure className="img-reveal rector__photo">
              <img src={rectorMessage.photo} alt={`${rectorMessage.name}, ${rectorMessage.role}`} loading="lazy" />
            </figure>
            <div className="rector__name-card glass-card">
              <strong>{rectorMessage.name}</strong>
              <span>{rectorMessage.role}</span>
            </div>
          </div>

          <div className="rector__content" data-animate="fade-right">
            <span className="section-head__tag">Inspiring Our Journey</span>
            <h2 className="section-head__title" id="rector-title">
              A Message from <span className="text-gold-dark">the Rector</span>
            </h2>
            <p>&ldquo;{rectorMessage.message[0]}</p>
            <p>{rectorMessage.message[1]}</p>
            <p className="rector__signoff">{rectorMessage.message[2]}&rdquo;</p>
            <Link to="/about-us/message-from-rector" className="btn btn--outline" style={{ marginTop: "1.4rem" }}>
              Read Full Message
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={{ background: "var(--gray-50)" }} id="gallery" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHeading tag="Student Life at UCT" title={<>Campus <span className="text-gold-dark">Gallery</span></>} desc="A peaceful place to learn — moments from everyday life in Timor-Leste." />
          <GalleryGrid items={images.gallery.slice(0, 8)} />
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/gallery" className="btn btn--primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section" aria-labelledby="video-title">
        <div className="container">
          <SectionHeading tag="Watch & Believe" title={<>Experience the <span className="text-gold-dark">UCT Campus</span></>} />
          <div className="video-grid" data-animate="fade-up">
            {videoStories.map((video) => (
              <a
                key={video.id}
                className="video-thumb"
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch student video story"
              >
                <img src={video.thumb} alt="UCT student video story" loading="lazy" />
                <span className="video-thumb__play" aria-hidden="true">
                  <span>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--gray-50)" }} aria-labelledby="faq-title">
        <div className="container">
          <SectionHeading tag="Good to Know" title={<>Frequently Asked <span className="text-gold-dark">Questions</span></>} />
          <FAQAccordion items={generalFaq} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* CONTACT + MAP */}
      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="container contact__grid">
          <div data-animate="fade-left">
            <span className="section-head__tag">Get in Touch</span>
            <h2 className="section-head__title" id="contact-title">
              Admission <span className="text-gold-dark">Enquiry</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--gray-500)" }}>
              Have a question about the MBBS program, fees or campus life? Send us a message — our team responds
              within 24 hours.
            </p>

            <ul className="contact__details">
              <li>
                <span className="contact__ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <strong>Visit Us</strong>
                  <span>{siteInfo.address}</span>
                </div>
              </li>
              <li>
                <span className="contact__ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </span>
                <div>
                  <strong>Call Us</strong>
                  <span>
                    <a href={siteInfo.phoneHref}>{siteInfo.phone}</a> · India toll-free:{" "}
                    <a href="tel:18002089848">{siteInfo.indiaTollFree}</a>
                  </span>
                </div>
              </li>
              <li>
                <span className="contact__ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </span>
                <div>
                  <strong>Email Us</strong>
                  <span>
                    <a href={siteInfo.emailHref}>{siteInfo.email}</a>
                  </span>
                </div>
              </li>
            </ul>

            <div className="map-frame">
              <iframe src={siteInfo.mapEmbedUrl} title="UCT Campus location map" loading="lazy" allowFullScreen></iframe>
            </div>
          </div>

          <div data-animate="fade-right">
            <h3 style={{ marginBottom: "1.4rem" }}>Request a Free Counselling Call</h3>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
