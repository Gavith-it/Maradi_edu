import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import EducationPageHero from "@/components/education/EducationPageHero";
import EducationClipHeader from "@/components/education/EducationClipHeader";
import EducationIntroSection from "@/components/education/EducationIntroSection";
import EducationAcademicSection from "@/components/education/EducationAcademicSection";
import EducationFacultySection from "@/components/education/EducationFacultySection";
import EducationGallerySection from "@/components/education/EducationGallerySection";
import EducationInfrastructureSection from "@/components/education/EducationInfrastructureSection";
import EducationHolisticSection from "@/components/education/EducationHolisticSection";
import EducationAlumniSection from "@/components/education/EducationAlumniSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <EducationPageHero />
        <EducationClipHeader />
        <EducationIntroSection />
        <EducationAcademicSection />
        <EducationFacultySection />
        <EducationGallerySection />
        <EducationInfrastructureSection />
        <EducationHolisticSection />
        <EducationAlumniSection />
        <section className="bg-gradient-to-b from-[hsl(172,18%,96%)] to-[hsl(175,35%,14%)] py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Ready to join our community? Get in touch for admissions, fees, and campus visits.
            </p>
            <Button asChild size="lg" className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-900 hover:bg-amber-400">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
