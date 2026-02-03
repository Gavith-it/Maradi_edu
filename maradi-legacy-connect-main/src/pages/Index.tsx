import SiteHeader from "@/components/SiteHeader";
import ParallaxHero from "@/components/ParallaxHero";
import HomePillarsSection from "@/components/HomePillarsSection";
import HomeStickySlides from "@/components/HomeStickySlides";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="parallax-hero-wrapper">
        <ParallaxHero />
        <HomePillarsSection />
        <HomeStickySlides />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
