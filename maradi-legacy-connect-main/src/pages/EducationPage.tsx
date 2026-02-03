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
      </main>
      <Footer />
    </div>
  );
}
