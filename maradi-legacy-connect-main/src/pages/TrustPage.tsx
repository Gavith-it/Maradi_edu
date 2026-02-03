import SiteHeader from "@/components/SiteHeader";
import TrustOrganizationSection from "@/components/TrustOrganizationSection";
import AboutFounder from "@/components/AboutFounder";
import AboutTrust from "@/components/AboutTrust";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function TrustPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <TrustOrganizationSection />
        <div id="about-founder">
          <AboutFounder />
        </div>
        <div id="about-trust">
          <AboutTrust />
        </div>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
