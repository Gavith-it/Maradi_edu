import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import schoolClassroom from "@/assets/school-classroom.jpg";

export default function EducationPageHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
      {/* Full-bleed image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={schoolClassroom}
          alt="Sri Maradi Subbaiah Vidya Kendra – classrooms and learning"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(175,35%,14%)]/95 via-[hsl(175,35%,14%)]/60 to-[hsl(175,35%,14%)]/30" />
      </div>

      {/* Content overlay – bottom-aligned, distinct from home parallax */}
      <div className="container relative z-10 mx-auto px-4 pb-16 pt-32 md:pb-24 md:pt-40">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-amber-300">
            Maradi Subbaiah Trust
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            Sri Maradi Subbaiah Vidya Kendra
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 font-sans text-white/90">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              Hanumanth Nagar, Bangalore – 560 019
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-400" />
              Since 1983
            </span>
          </div>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/90">
            Quality, value-based education at a nominal cost—accessible to children of all communities. Every child has a right to education.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
