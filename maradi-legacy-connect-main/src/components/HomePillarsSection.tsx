import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { GraduationCap, Flower, Heart } from "lucide-react";
import HomePillarCard from "@/components/HomePillarCard";

const pillars = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Vidya Kendra",
    description: "Quality CBSE education that nurtures mind and character. Excellence since 1972.",
    to: "/education",
    accentClass: "bg-teal-500/15",
  },
  {
    icon: Flower,
    title: "Yoga Center",
    subtitle: "Yoga Kendra",
    description: "Traditional yoga and meditation for physical health, mental clarity, and spiritual growth.",
    to: "/yoga",
    accentClass: "bg-amber-500/15",
  },
  {
    icon: Heart,
    title: "Trust",
    subtitle: "Our Mission",
    description: "Over 50 years of community service, cultural preservation, and social impact in Bangalore.",
    to: "/trust",
    accentClass: "bg-rose-500/15",
  },
];

export default function HomePillarsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[hsl(40,20%,98%)] to-[hsl(172,20%,96%)] py-20 md:py-28"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={inView && !reduceMotion ? { opacity: 1 } : undefined}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center md:mb-18"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            What we do
          </p>
          <h2 className="font-serif text-3xl font-bold text-[hsl(175,35%,14%)] md:text-4xl lg:text-5xl">
            Education · Yoga · Trust
          </h2>
          <p className="mt-4 font-sans text-muted-foreground">
            Explore our three pillars. Each opens a dedicated page with full details.
          </p>
        </motion.div>

        {/* Asymmetric layout: left card taller, right two stacked */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, i) => (
            <HomePillarCard
              key={pillar.to}
              icon={pillar.icon}
              title={pillar.title}
              subtitle={pillar.subtitle}
              description={pillar.description}
              to={pillar.to}
              accentClass={pillar.accentClass}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
