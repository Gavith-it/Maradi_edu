import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flower } from "lucide-react";
import heroCampusImage from "@/assets/hero-campus.jpg";
import weddingHall from "@/assets/wedding-hall.jpg";
import schoolClassroom from "@/assets/school-classroom.jpg";

const slides = [
  {
    image: heroCampusImage,
    title: "Maradi Subbaiah Yoga Kendra",
    subtitle: "Holistic Wellness & Spiritual Growth",
    description: "Traditional yoga and meditation programs for physical health, mental clarity, and spiritual growth. All ages welcome.",
    cta: "Join Classes",
    accent: "from-amber-500/90 to-amber-600/90",
  },
  {
    image: schoolClassroom,
    title: "Daily Classes",
    subtitle: "Morning & Evening Sessions",
    description: "Hatha Yoga, Pranayama, and meditation guided by experienced instructors in a peaceful, traditional setting.",
    cta: "View Schedule",
    accent: "from-teal-600/90 to-teal-700/90",
  },
  {
    image: weddingHall,
    title: "Therapeutic & Beginner Friendly",
    subtitle: "All Levels Welcome",
    description: "From beginners to advanced practitioners. Therapeutic yoga and stress-relief programs available.",
    cta: "Get Started",
    accent: "from-rose-600/90 to-rose-700/90",
  },
];

export default function YogaCenterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      ref={sectionRef}
      id="yoga-center"
      className="relative overflow-hidden bg-[hsl(175,35%,14%)] py-0"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 25,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {slides.map((slide, i) => (
              <CarouselItem key={i} className="relative h-[85vh] min-w-full pl-0 md:h-[90vh]">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${slide.accent} via-black/50 to-black/30`}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 pt-20 md:px-16 md:pb-24 md:pt-24">
                  <div className="mx-auto w-full max-w-4xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                      <Flower className="h-4 w-4 text-amber-300" />
                      <span className="text-sm font-medium text-white/90">Yoga Kendra</span>
                    </div>
                    <h2 className="font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h2>
                    <p className="mt-2 font-sans text-lg font-medium text-amber-200 md:text-xl">
                      {slide.subtitle}
                    </p>
                    <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/90 md:text-lg">
                      {slide.description}
                    </p>
                    <Button asChild size="lg" className="mt-8 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-900 hover:bg-amber-400">
                      <Link to="/contact">{slide.cta}</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 h-12 w-12 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:left-8" />
          <CarouselNext className="right-4 h-12 w-12 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:right-8" />
        </Carousel>
      </div>

      {/* Section label for nav */}
      <div className="absolute left-0 right-0 top-4 z-10 text-center md:top-6">
        <span className="rounded-full bg-white/10 px-4 py-2 font-sans text-sm font-medium text-white/90 backdrop-blur-sm">
          Yoga Center
        </span>
      </div>
    </motion.section>
  );
}
