import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import YogaCenterSection from "@/components/YogaCenterSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function YogaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <YogaCenterSection />
        <div id="services" className="bg-[hsl(175,35%,14%)]/5">
          <Services />
        </div>
        <section className="bg-[hsl(175,35%,14%)] py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join our yoga classes or book the venue. We&apos;d love to hear from you.
            </p>
            <Button asChild size="lg" className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-900 hover:bg-amber-400">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
