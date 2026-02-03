import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="contact">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
