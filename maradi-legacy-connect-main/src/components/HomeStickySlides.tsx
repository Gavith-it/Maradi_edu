import { Link } from "react-router-dom";
import { Flower, Heart } from "lucide-react";
import culturalCeremony from "@/assets/cultural-ceremony.jpg";
import founderPortrait from "@/assets/founder-portrait.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

export default function HomeStickySlides() {
  return (
    <div className="relative">
      {/* Slide 1: Yoga — big image left, content right */}
      <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 items-center md:grid-cols-2">
        <div className="relative h-[50vh] w-full md:h-screen">
          <img
            src={culturalCeremony}
            alt="Yoga and wellness at Maradi Subbaiah Yoga Kendra"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(175,35%,14%)]/40 to-transparent md:from-transparent" />
        </div>
        <div className="flex flex-col justify-center bg-[hsl(175,35%,14%)] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2">
              <Flower className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                Yoga Kendra
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Traditional Yoga &amp; Meditation
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-white/90">
              Hatha Yoga, Pranayama, and meditation for physical health, mental clarity, and spiritual growth. Morning and evening sessions for all levels.
            </p>
            <Link
              to="/yoga"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-amber-400"
            >
              Explore Yoga Center →
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 2: Trust — left: image up, content down; right: content up, image down */}
      <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 items-stretch md:grid-cols-2">
        {/* Left side: image top, content bottom */}
        <div className="flex flex-col">
          <div className="relative h-[40vh] w-full shrink-0 md:h-[55vh]">
            <img
              src={founderPortrait}
              alt="Maradi Subbaiah Trust — legacy and community"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(40,20%,98%)]" />
          </div>
          <div className="flex flex-1 flex-col justify-center bg-gradient-to-b from-[hsl(40,20%,98%)] to-[hsl(172,20%,96%)] px-6 py-12 md:px-12 md:py-16">
            <div className="mx-auto max-w-lg">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-4 py-2">
                <Heart className="h-4 w-4 text-teal-700" />
                <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                  Since 1972
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[hsl(175,35%,14%)] md:text-3xl">
                Mission &amp; Legacy
              </h2>
              <p className="mt-4 font-sans text-muted-foreground">
                Over 50 years of community service, cultural preservation, and social impact in Bangalore. Education, yoga, and community at the heart of everything we do.
              </p>
              <Link
                to="/trust"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
              >
                Learn About the Trust →
              </Link>
            </div>
          </div>
        </div>

        {/* Right side: content top, image bottom */}
        <div className="flex flex-col md:flex-col-reverse">
          <div className="relative h-[40vh] w-full shrink-0 md:h-[55vh]">
            <img
              src={heroCampus}
              alt="Maradi Subbaiah Trust — education and community"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(172,20%,96%)] to-transparent md:from-transparent md:bg-gradient-to-b md:to-[hsl(40,20%,98%)]" />
          </div>
          <div className="flex flex-1 flex-col justify-center bg-gradient-to-b from-[hsl(172,20%,96%)] to-[hsl(40,20%,98%)] px-6 py-12 md:px-12 md:py-16">
            <div className="mx-auto max-w-lg">
              <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
                Our Pillars
              </p>
              <h2 className="font-serif text-2xl font-bold text-[hsl(175,35%,14%)] md:text-3xl">
                Education · Yoga · Community
              </h2>
              <p className="mt-4 font-sans text-muted-foreground">
                Quality CBSE education, traditional yoga and wellness, and dedicated service—supporting generations and preserving culture in one place.
              </p>
              <Link
                to="/trust"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-teal-600 px-6 py-3 font-semibold text-teal-700 transition-colors hover:bg-teal-500/10"
              >
                About the Trust
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
