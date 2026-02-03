import { Link } from "react-router-dom";
import heroCampusImage from "@/assets/hero-campus.jpg";
import schoolClassroom from "@/assets/school-classroom.jpg";

export default function ParallaxHero() {
  return (
    <>
      {/* Multilayer parallax group - pure CSS parallax */}
      <div className="parallax-hero-group">
        {/* Back layer - campus (slowest) */}
        <div
          className="parallax-hero-layer parallax-hero-layer--back"
          style={{
            backgroundImage: `url(${heroCampusImage})`,
          }}
          aria-hidden
        />
        {/* Mid layer - classroom (medium depth) */}
        <div
          className="parallax-hero-layer parallax-hero-layer--mid"
          style={{
            backgroundImage: `url(${schoolClassroom})`,
            opacity: 0.5,
          }}
          aria-hidden
        />
        {/* Front layer - gradient overlay for depth */}
        <div
          className="parallax-hero-layer parallax-hero-layer--front"
          style={{
            background: "linear-gradient(180deg, transparent 0%, hsl(175 35% 14% / 0.5) 100%)",
          }}
          aria-hidden
        />
        {/* Content layer - hero content only (nav is in fixed SiteHeader) */}
        <div className="parallax-hero-layer parallax-hero-text-layer">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-300/95">
            Since 1972 · Bangalore
          </p>
          <div className="parallax-hero-year-container" aria-hidden>
            <span>1</span>
            <span>9</span>
            <span>7</span>
            <span>2</span>
          </div>
          <h1 className="font-serif text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Education · Yoga · Community
          </h1>
          <p className="mt-3 max-w-md font-sans text-base text-white/90 md:text-lg">
            Empowering generations through quality education, wellness, and dedicated service for over five decades.
          </p>
          <div className="parallax-hero-cta-container">
            <Link to="/education" className="btn-primary">
              Our Schools
            </Link>
            <Link to="/yoga" className="btn-outline">
              Yoga Center
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Info section below parallax */}
      <div className="parallax-hero-info-section">
        <img
          src={heroCampusImage}
          alt="Maradi Subbaiah Trust - Education and Community"
        />
        <div>
          <h2>This is our legacy.</h2>
          <p>
            For over 50 years we have been committed to serving our community through
            quality education, yoga & wellness, and cultural preservation in Bangalore.
          </p>
          <Link to="/trust" className="btn-primary">
            Learn About the Trust
          </Link>
        </div>
      </div>
    </>
  );
}
