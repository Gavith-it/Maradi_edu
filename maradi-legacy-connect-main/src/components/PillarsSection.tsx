import { motion, useReducedMotion } from "framer-motion";
import { Heart, GraduationCap, Flower, ArrowRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const pillars = [
  {
    icon: Heart,
    title: "Trust",
    subtitle: "Mission & Legacy",
    description: "Over 50 years of community service, education, and cultural preservation in Bangalore.",
    href: "#about-trust",
    accentClass: "rose",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-700",
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Vidya Kendra",
    description: "Quality CBSE education that nurtures mind and character. Excellence since 1972.",
    href: "#vidya-kendra",
    accentClass: "teal",
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-700",
  },
  {
    icon: Flower,
    title: "Yoga & Wellness",
    subtitle: "Yoga Kendra",
    description: "Traditional yoga and meditation for physical health, mental clarity, and spiritual growth.",
    href: "#yoga-kendra",
    accentClass: "amber",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-700",
  },
] as const;

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function PillarsSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      className="py-20 warm-gradient border-y border-teal-500/20"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[hsl(175,35%,14%)] mb-4">
            Our Three Pillars
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Education · Yoga · Community — one trust, one mission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TiltCard className="p-8 rounded-2xl h-full flex flex-col group cursor-pointer">
                <button
                  type="button"
                  onClick={() => scrollToSection(pillar.href)}
                  className="text-left w-full h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-2xl"
                >
                  <div
                    className={`w-16 h-16 ${pillar.iconBg} ${pillar.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[hsl(175,35%,14%)] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-teal-600 font-medium text-sm mb-4">{pillar.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
